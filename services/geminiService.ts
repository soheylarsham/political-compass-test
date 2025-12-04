
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = 'gemini-2.5-pro';

const cleanJsonString = (str) => {
    if (!str) return '';
    return str.replace(/^```json\s*/, '').replace(/```$/, '').trim();
}

const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

export const generateQuestions = (allQuestionsForLevel, questionsPerLevel, t) => {
    const enabledQuestions = allQuestionsForLevel.filter(q => q.enabled);
    
    if (enabledQuestions.length < questionsPerLevel) {
      throw new Error(t('errors.notEnoughActiveQuestions', { available: enabledQuestions.length, required: questionsPerLevel }));
    }

    const shuffledQuestions = shuffleArray(enabledQuestions);
    return shuffledQuestions.slice(0, questionsPerLevel);
};


export const generateMultipleQuestionsFromAI = async (count, existingQuestionTexts, t, lang) => {
    const languageName = lang === 'fa' ? 'PERSIAN' : 'ENGLISH';
    const prompt = `
        Please generate a JSON array containing exactly ${count} new, high-quality, and thought-provoking political compass questions in ${languageName}.
        Each question should be neutral and explore a nuanced political or social issue.
        Provide exactly four distinct options as answers for each question.
        For each option, provide an 'economicScore' and a 'socialScore' from -10 to +10.
        Ensure the questions are unique and not similar to the following existing questions:
        ${existingQuestionTexts.slice(0, 50).join('\n- ')} 
        The entire output must be a single JSON array, where each element is an object matching the provided schema. Do not include any markdown formatting.
    `;

    const questionSchema = {
        type: Type.OBJECT,
        properties: {
            question: { type: Type.STRING },
            options: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        text: { type: Type.STRING },
                        economicScore: { type: Type.NUMBER },
                        socialScore: { type: Type.NUMBER }
                    },
                    required: ["text", "economicScore", "socialScore"]
                }
            }
        },
        required: ["question", "options"]
    };

    const schema = {
        type: Type.ARRAY,
        items: questionSchema
    };

    try {
        const response = await ai.models.generateContent({
            model,
            contents: prompt,
            config: {
                temperature: 0.9,
                responseMimeType: "application/json",
                responseSchema: schema,
            },
        });

        const jsonString = cleanJsonString(response.text);
        if (!jsonString) {
            throw new Error(t('errors.gemini.emptyResponse'));
        }
        const newQuestions = JSON.parse(jsonString);

        if (!Array.isArray(newQuestions) || newQuestions.length === 0) {
            throw new Error(t('errors.gemini.invalidQuestionArray'));
        }

        return newQuestions;
    } catch (error) {
        console.error("Error generating new questions with AI:", error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new Error(t('errors.gemini.generateFailed', { error: errorMessage }));
    }
};


export const validateQuestionsRelevancy = async (questions, t) => {
    // Standardize on English for validation to ensure consistent AI analysis
    const questionsForValidation = questions.map(q => ({id: q.id, question: q.question.en}));

    const prompt = `
        You are a political science expert. Analyze the following list of questions for a political compass test.
        A relevant question helps measure a person's position on economic (left/right) and social (libertarian/authoritarian) axes.
        Identify any questions that are IRRELEVANT, nonsensical, ambiguous, duplicates, or poorly suited for this purpose.
        Return ONLY a JSON array containing the string IDs of these irrelevant or bad questions. Do not provide any explanation.
        
        Questions to analyze:
        ${JSON.stringify(questionsForValidation)}
    `;
    
    const schema = {
        type: Type.ARRAY,
        items: { type: Type.STRING }
    };

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash', // Use a faster model for validation
            contents: prompt,
            config: {
                temperature: 0.2,
                responseMimeType: "application/json",
                responseSchema: schema,
            },
        });

        const jsonString = cleanJsonString(response.text);
        if (!jsonString) {
            return [];
        }
        const irrelevantIds = JSON.parse(jsonString);

        if (!Array.isArray(irrelevantIds)) {
            throw new Error(t('errors.gemini.invalidValidationFormat'));
        }
        return irrelevantIds;
    } catch (error) {
        console.error("Error validating questions with AI:", error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new Error(t('errors.gemini.validationFailed', { error: errorMessage }));
    }
};


export const analyzeAnswers = async (answers, t, lang) => {
    let totalEconomicScore = 0;
    let totalSocialScore = 0;
    let maxPossibleScore = 0;

    answers.forEach(answer => {
        totalEconomicScore += answer.selectedOption.economicScore;
        totalSocialScore += answer.selectedOption.socialScore;
        maxPossibleScore += 10;
    });
    
    if (maxPossibleScore === 0) {
        return {
            scores: { economic: 0, social: 0 },
            politicalIdeology: t('results.notDeterminable'),
            summary: t('results.noAnswersSummary'),
            detailedAnalysis: t('results.noAnswersAnalysis'),
            behavioralTraits: [],
        };
    }

    const finalEconomic = (totalEconomicScore / maxPossibleScore) * 10;
    const finalSocial = (totalSocialScore / maxPossibleScore) * 10;
    
    const languageName = lang === 'fa' ? 'PERSIAN' : 'ENGLISH';

    const prompt = `
        Analyze the following political compass scores and provide a detailed, neutral, and academic political analysis in ${languageName}.
        Scores:
        - Economic Axis: ${finalEconomic.toFixed(2)} (Left: -10, Right: +10)
        - Social Axis: ${finalSocial.toFixed(2)} (Libertarian: -10, Authoritarian: +10)
        
        Ensure all text is in ${languageName}.
        The 'politicalIdeology' should be a concise term for the user's political ideology in ${languageName}.
        The 'summary' should be a brief summary of the ideology in ${languageName}.
        The 'detailedAnalysis' should be a comprehensive analysis of the user's political position in ${languageName}.
        The 'behavioralTraits' should be an array of strings describing typical behavioral traits in ${languageName}.
    `;
    
    const schema = {
        type: Type.OBJECT,
        properties: {
            politicalIdeology: { 
                type: Type.STRING,
                description: `The user's political ideology in ${languageName}.`
            },
            summary: { 
                type: Type.STRING,
                description: `A brief summary of the ideology in ${languageName}.`
            },
            detailedAnalysis: { 
                type: Type.STRING,
                description: `A comprehensive analysis of the user's political position in ${languageName}.`
            },
            behavioralTraits: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: `An array of strings describing typical behavioral traits in ${languageName}.`
            },
        },
        required: ["politicalIdeology", "summary", "detailedAnalysis", "behavioralTraits"],
    };

    try {
        const response = await ai.models.generateContent({
            model,
            contents: prompt,
            config: {
                temperature: 0.5,
                responseMimeType: "application/json",
                responseSchema: schema,
            },
        });

        const jsonString = cleanJsonString(response.text);
        if (!jsonString) {
            throw new Error(t('errors.gemini.emptyAnalysis'));
        }
        const analysis = JSON.parse(jsonString);

        return {
            scores: { economic: finalEconomic, social: finalSocial },
            ...analysis,
        };
    } catch (error) {
        console.error("Error analyzing answers:", error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new Error(t('errors.gemini.analysisFailed', { error: errorMessage }));
    }
};

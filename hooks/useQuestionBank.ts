
import { useState, useEffect, useCallback, useMemo } from 'react';
import { questionBank as defaultQuestionBank } from '../data/questionBank.ts';
import { normalizeText } from '../utils.ts';
import { useI18n } from '../contexts/I18nContext.tsx';
// FIX: Import question-related types for strong typing.
import type { Question, QuestionBankType, RawQuestion } from '../types.ts';

const LOCAL_STORAGE_KEY = 'politicalCompassQuestionBank';

// Function to add unique IDs and default enabled status to seed data
// FIX: Strongly type the function and its return value.
const initializeQuestions = (): QuestionBankType => {
    // FIX: Strongly type the initializedBank object.
    const initializedBank: QuestionBankType = {};
    const seenTexts = new Set<string>();

    for (const levelStr in defaultQuestionBank) {
        const level = parseInt(levelStr);
        // FIX: Assert the type of the raw question data to prevent 'unknown' type errors.
        initializedBank[level] = (defaultQuestionBank[level] as RawQuestion[])
            .map((q, index) => {
                const uniqueKey = `${normalizeText(q.question.fa)}|${normalizeText(q.question.en)}`;
                if (seenTexts.has(uniqueKey)) {
                    return null; // Mark as duplicate
                }
                seenTexts.add(uniqueKey);
                return {
                    ...q,
                    id: `${level}-${index}-${Date.now()}`,
                    enabled: true,
                };
            })
            // FIX: Use a type guard to filter out nulls and correctly type the resulting array.
            .filter((q): q is Question => q !== null); // Filter out nulls
    }
    return initializedBank;
};


export const useQuestionBank = () => {
    const { t } = useI18n();
    // FIX: Provide the QuestionBankType generic to useState for strong typing.
    const [questionBank, setQuestionBank] = useState<QuestionBankType>(() => {
        try {
            const storedBank = window.localStorage.getItem(LOCAL_STORAGE_KEY);
            if (storedBank) {
                // FIX: Cast the parsed JSON to the correct type.
                return JSON.parse(storedBank) as QuestionBankType;
            }
        } catch (error) {
            console.error("Error reading from localStorage", error);
        }
        return initializeQuestions();
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(questionBank));
        } catch (error) {
            console.error("Error writing to localStorage", error);
        }
    }, [questionBank]);

    // FIX: Add types for function parameters to ensure type safety.
    const addQuestion = useCallback((level: number, newQuestion: RawQuestion) => {
        const normalizedFa = normalizeText(newQuestion.question.fa);
        const normalizedEn = normalizeText(newQuestion.question.en);
        
        for (const lvl in questionBank) {
            // FIX: Explicitly type 'q' as 'Question' to resolve type inference issues.
            if (questionBank[parseInt(lvl, 10)].some((q: Question) => 
                q && q.question && (
                    normalizeText(q.question.fa) === normalizedFa || 
                    normalizeText(q.question.en) === normalizedEn
                )
            )) {
                alert(t('questionBank.alerts.duplicate'));
                return false;
            }
        }

        setQuestionBank(prevBank => {
            const newBank = { ...prevBank };
            // FIX: Ensure the new question conforms to the Question interface.
            const questionWithId: Question = {
                ...newQuestion,
                id: `${level}-${Date.now()}`,
                enabled: true,
            };
            if (!newBank[level]) newBank[level] = [];
            newBank[level] = [...newBank[level], questionWithId];
            return newBank;
        });
        return true;
    }, [questionBank, t]);
    
    // FIX: Add types for function parameters to ensure type safety.
    const addMultipleQuestions = useCallback((level: number, newQuestions: RawQuestion[]) => {
        let addedCount = 0;
        setQuestionBank(prevBank => {
            const existingTexts = new Set<string>();
            // Explicitly cast to Question[] to avoid 'unknown' type error
            (Object.values(prevBank).flat() as Question[]).forEach((q) => {
                if (q && q.question) {
                    existingTexts.add(normalizeText(q.question.fa));
                    existingTexts.add(normalizeText(q.question.en));
                }
            });

            const uniqueNewQuestions = newQuestions
                .filter((q) => {
                    const normFa = normalizeText(q.question.fa);
                    const normEn = normalizeText(q.question.en);
                    if (existingTexts.has(normFa) || existingTexts.has(normEn)) {
                        return false;
                    }
                    existingTexts.add(normFa);
                    existingTexts.add(normEn);
                    return true;
                });

            addedCount = uniqueNewQuestions.length;
            if (addedCount < newQuestions.length) {
                alert(t('questionBank.alerts.duplicatesRemoved', { count: newQuestions.length - addedCount }));
            }

            if (addedCount > 0) {
                const questionsWithIds = uniqueNewQuestions.map((q): Question => ({
                    ...q,
                    id: `${level}-${Date.now()}-${Math.random()}`,
                    enabled: true,
                }));

                const newBank = { ...prevBank };
                if (!newBank[level]) newBank[level] = [];
                newBank[level] = [...newBank[level], ...questionsWithIds];
                return newBank;
            }
            
            return prevBank; // No changes
        });
        return addedCount;
    }, [t]);

    // FIX: Add types for function parameters to ensure type safety.
    const updateQuestion = useCallback((level: number, updatedQuestion: Question) => {
        setQuestionBank(prevBank => {
            const newBank = { ...prevBank };
            newBank[level] = newBank[level].map((q) => q.id === updatedQuestion.id ? updatedQuestion : q);
            return newBank;
        });
    }, []);

    // FIX: Add types for function parameters to ensure type safety.
    const deleteQuestion = useCallback((level: number, questionId: string) => {
        setQuestionBank(prevBank => {
            const newBank = { ...prevBank };
            newBank[level] = newBank[level].filter((q) => q.id !== questionId);
            return newBank;
        });
    }, []);
    
    // FIX: Add types for function parameters to ensure type safety.
    const deleteMultipleQuestions = useCallback((questionIdsToDelete: Set<string>) => {
        if (questionIdsToDelete.size === 0) return;
        setQuestionBank(prevBank => {
            const newBank = { ...prevBank };
            for (const levelStr in newBank) {
                const level = parseInt(levelStr);
                newBank[level] = newBank[level].filter((q) => !questionIdsToDelete.has(q.id));
            }
            return newBank;
        });
    }, []);

    // FIX: Add types for function parameters to ensure type safety.
    const toggleQuestionEnabled = useCallback((level: number, questionId: string) => {
        setQuestionBank(prevBank => {
            const newBank = { ...prevBank };
            newBank[level] = newBank[level].map((q) =>
                q.id === questionId ? { ...q, enabled: !q.enabled } : q
            );
            return newBank;
        });
    }, []);
    
    // FIX: Add types for function parameters to ensure type safety.
    const importBank = useCallback((importedBank: QuestionBankType) => {
        if (!importedBank[1] || !importedBank[2] || !importedBank[3]) {
            return false;
        }

        const uniqueQuestions: QuestionBankType = { 1: [], 2: [], 3: [] };
        const seenTexts = new Set<string>();
        let duplicatesFound = 0;

        ([1, 2, 3]).forEach(level => {
            if (Array.isArray(importedBank[level])) {
                importedBank[level].forEach((q) => {
                    if (q && q.question && typeof q.question.fa === 'string' && typeof q.question.en === 'string') {
                        const uniqueKey = `${normalizeText(q.question.fa)}|${normalizeText(q.question.en)}`;
                        if (!seenTexts.has(uniqueKey)) {
                            seenTexts.add(uniqueKey);
                            uniqueQuestions[level].push(q);
                        } else {
                            duplicatesFound++;
                        }
                    }
                });
            }
        });
        
        setQuestionBank(uniqueQuestions);
        if (duplicatesFound > 0) {
            alert(t('questionBank.alerts.importDuplicatesRemoved', { count: duplicatesFound }));
        }
        return true;
    }, [t]);

    // FIX: Add types for function parameters to ensure type safety.
    const getEnabledQuestionsCount = useCallback((level: number) => {
        if (!questionBank[level]) return 0;
        return questionBank[level].filter((q) => q.enabled).length;
    }, [questionBank]);

    const actions = useMemo(() => ({
        addQuestion,
        addMultipleQuestions,
        updateQuestion,
        deleteQuestion,
        deleteMultipleQuestions,
        toggleQuestionEnabled,
        importBank,
        getEnabledQuestionsCount,
    }), [
        addQuestion, 
        addMultipleQuestions, 
        updateQuestion, 
        deleteQuestion, 
        deleteMultipleQuestions, 
        toggleQuestionEnabled, 
        importBank, 
        getEnabledQuestionsCount
    ]);

    return {
        questionBank,
        actions,
    };
};

import { useState, useEffect, useCallback } from 'react';
import { type Question, type QuizLevel, MultilingualText } from '../types';
import { questionBank as defaultQuestionBank } from '../data/questionBank';
import { normalizeText } from '../utils';
import { useI18n } from '../contexts/I18nContext';

const LOCAL_STORAGE_KEY = 'politicalCompassQuestionBank';

// Function to add unique IDs and default enabled status to seed data
const initializeQuestions = (): Record<QuizLevel, Question[]> => {
    const initializedBank: Record<string, Question[]> = {};
    const seenTexts = new Set<string>();

    for (const levelStr in defaultQuestionBank) {
        const level = parseInt(levelStr) as QuizLevel;
        initializedBank[level] = defaultQuestionBank[level]
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
            .filter((q): q is Question => q !== null); // Filter out nulls
    }
    return initializedBank as Record<QuizLevel, Question[]>;
};


export const useQuestionBank = () => {
    const { t } = useI18n();
    const [questionBank, setQuestionBank] = useState<Record<QuizLevel, Question[]>>(() => {
        try {
            const storedBank = window.localStorage.getItem(LOCAL_STORAGE_KEY);
            if (storedBank) {
                return JSON.parse(storedBank) as Record<QuizLevel, Question[]>;
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

    const addQuestion = useCallback((level: QuizLevel, newQuestion: Omit<Question, 'id' | 'enabled'>): boolean => {
        const normalizedFa = normalizeText(newQuestion.question.fa);
        const normalizedEn = normalizeText(newQuestion.question.en);
        
        for (const lvl in questionBank) {
            if (questionBank[parseInt(lvl, 10) as QuizLevel].some((q: Question) => 
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
            const questionWithId: Question = {
                ...newQuestion,
                id: `${level}-${Date.now()}`,
                enabled: true,
            };
            newBank[level] = [...newBank[level], questionWithId];
            return newBank;
        });
        return true;
    }, [questionBank, t]);
    
    const addMultipleQuestions = useCallback((level: QuizLevel, newQuestions: Omit<Question, 'id' | 'enabled'>[]): number => {
        let addedCount = 0;
        setQuestionBank(prevBank => {
            const existingTexts = new Set<string>();
            Object.values(prevBank).flat().forEach((q: Question) => {
                if (q && q.question) {
                    existingTexts.add(normalizeText(q.question.fa));
                    existingTexts.add(normalizeText(q.question.en));
                }
            });

            const uniqueNewQuestions = newQuestions
                .filter((q: Omit<Question, 'id' | 'enabled'>) => {
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
                const questionsWithIds: Question[] = uniqueNewQuestions.map((q: Omit<Question, 'id' | 'enabled'>) => ({
                    ...q,
                    id: `${level}-${Date.now()}-${Math.random()}`,
                    enabled: true,
                }));

                const newBank = { ...prevBank };
                newBank[level] = [...newBank[level], ...questionsWithIds];
                return newBank;
            }
            
            return prevBank; // No changes
        });
        return addedCount;
    }, [t]);

    const updateQuestion = useCallback((level: QuizLevel, updatedQuestion: Question) => {
        setQuestionBank(prevBank => {
            const newBank = { ...prevBank };
            newBank[level] = newBank[level].map((q: Question) => q.id === updatedQuestion.id ? updatedQuestion : q);
            return newBank;
        });
    }, []);

    const deleteQuestion = useCallback((level: QuizLevel, questionId: string) => {
        setQuestionBank(prevBank => {
            const newBank = { ...prevBank };
            newBank[level] = newBank[level].filter((q: Question) => q.id !== questionId);
            return newBank;
        });
    }, []);
    
    const deleteMultipleQuestions = useCallback((questionIdsToDelete: Set<string>) => {
        if (questionIdsToDelete.size === 0) return;
        setQuestionBank(prevBank => {
            const newBank = { ...prevBank };
            for (const levelStr in newBank) {
                const level = parseInt(levelStr) as QuizLevel;
                newBank[level] = newBank[level].filter((q: Question) => !questionIdsToDelete.has(q.id));
            }
            return newBank;
        });
    }, []);

    const toggleQuestionEnabled = useCallback((level: QuizLevel, questionId: string) => {
        setQuestionBank(prevBank => {
            const newBank = { ...prevBank };
            newBank[level] = newBank[level].map((q: Question) =>
                q.id === questionId ? { ...q, enabled: !q.enabled } : q
            );
            return newBank;
        });
    }, []);
    
    const importBank = useCallback((importedBank: Record<QuizLevel, Question[]>) => {
        if (!importedBank[1] || !importedBank[2] || !importedBank[3]) {
            return false;
        }

        const uniqueQuestions: Record<QuizLevel, Question[]> = { 1: [], 2: [], 3: [] };
        const seenTexts = new Set<string>();
        let duplicatesFound = 0;

        ([1, 2, 3] as QuizLevel[]).forEach(level => {
            if (Array.isArray(importedBank[level])) {
                importedBank[level].forEach((q: Question) => {
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

    const getEnabledQuestionsCount = useCallback((level: QuizLevel): number => {
        return questionBank[level]?.filter((q: Question) => q.enabled).length || 0;
    }, [questionBank]);


    return {
        questionBank,
        addQuestion,
        addMultipleQuestions,
        updateQuestion,
        deleteQuestion,
        deleteMultipleQuestions,
        toggleQuestionEnabled,
        importBank,
        getEnabledQuestionsCount,
    };
};
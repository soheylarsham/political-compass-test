import React, { useState, useRef } from 'react';
import { type QuizLevel, type Question, MultilingualText, QuestionOption } from '../types';
import { useQuestionBank } from '../hooks/useQuestionBank';
import QuestionEditorModal from './QuestionEditorModal';
import { generateMultipleQuestionsFromAI, validateQuestionsRelevancy } from '../services/geminiService';
import { generateValidationCode, normalizeText } from '../utils';
import { useI18n } from '../contexts/I18nContext';

interface QuestionBankManagerProps {
    questionBankHook: ReturnType<typeof useQuestionBank>;
    onBack: () => void;
    addError: (message: string) => void;
}

type AIQuestion = { question: string; options: { text: string; economicScore: number; socialScore: number; }[] };
type AIOption = { text: string; economicScore: number; socialScore: number; };


const QuestionBankManager: React.FC<QuestionBankManagerProps> = ({ questionBankHook, onBack, addError }) => {
    const { questionBank, addQuestion, addMultipleQuestions, updateQuestion, deleteQuestion, deleteMultipleQuestions, toggleQuestionEnabled, importBank } = questionBankHook;
    const [activeLevel, setActiveLevel] = useState<QuizLevel>(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const importFileRef = useRef<HTMLInputElement>(null);
    const { t, language } = useI18n();
    const currentLang = language as 'fa' | 'en';

    const handleEdit = (question: Question) => {
        setEditingQuestion(question);
        setIsModalOpen(true);
    };

    const handleAddNew = () => {
        setEditingQuestion(null);
        setIsModalOpen(true);
    };

    const handleSaveQuestion = (questionData: Omit<Question, 'id' | 'enabled'>) => {
        if (editingQuestion) {
            updateQuestion(activeLevel, {...questionData, id: editingQuestion.id, enabled: editingQuestion.enabled});
        } else {
            addQuestion(activeLevel, questionData);
        }
        setIsModalOpen(false);
        setEditingQuestion(null);
    };

    const handleDelete = (questionId: string) => {
        if (window.confirm(t('questionBank.confirmDelete'))) {
            deleteQuestion(activeLevel, questionId);
        }
    };
    
    const handleGenerateAI = async () => {
        setIsLoading(true);
        setLoadingMessage(t('questionBank.loading.generating'));
        try {
            const allQuestionTexts = Object.values(questionBank).flat().map((q: Question) => q.question[currentLang]);
            const newQuestions = await generateMultipleQuestionsFromAI(10, allQuestionTexts, t, currentLang);
            
            const otherLang = currentLang === 'fa' ? 'en' : 'fa';
            const transformedQuestions = newQuestions.map((q: AIQuestion) => ({
                question: {
                    [currentLang]: q.question,
                    [otherLang]: `[NEEDS TRANSLATION] ${q.question}`
                } as MultilingualText,
                options: q.options.map((opt: AIOption) => ({
                    ...opt,
                    text: {
                        [currentLang]: opt.text,
                        [otherLang]: `[NEEDS TRANSLATION] ${opt.text}`
                    } as MultilingualText
                }))
            }));

            addMultipleQuestions(activeLevel, transformedQuestions);
        } catch(e: any) {
            addError(e.message || t('errors.aiGeneration'));
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleValidateBank = async () => {
        setIsLoading(true);
        setLoadingMessage(t('questionBank.loading.validating'));
        try {
            const seenTexts = new Map<string, string>();
            const duplicateIds = new Set<string>();
            Object.values(questionBank).flat().forEach((q: Question) => {
                 if (!q || !q.question) return;
                const uniqueKey = `${normalizeText(q.question.fa)}|${normalizeText(q.question.en)}`;
                if (seenTexts.has(uniqueKey)) {
                    duplicateIds.add(q.id);
                    const originalId = seenTexts.get(uniqueKey);
                    if(originalId) duplicateIds.add(originalId);
                } else {
                    seenTexts.set(uniqueKey, q.id);
                }
            });

            setLoadingMessage(t('questionBank.loading.sendingToAI'));
            const allQuestionsForValidation = Object.values(questionBank).flat()
                .filter((q: Question | null): q is Question => !!(q && q.id && q.question))
                .map((q: Question) => ({id: q.id, question: q.question}));
            const irrelevantIdsFromAI = await validateQuestionsRelevancy(allQuestionsForValidation, t);
            const irrelevantIds = new Set(irrelevantIdsFromAI);

            const idsToDelete = new Set([...duplicateIds, ...irrelevantIds]);

            if (idsToDelete.size === 0) {
                alert(t('questionBank.alerts.validationSuccess'));
                return;
            }

            const confirmationMessage = t('questionBank.alerts.validationResults', {
                duplicates: duplicateIds.size,
                irrelevant: irrelevantIds.size,
                total: idsToDelete.size
            });

            if (window.confirm(confirmationMessage)) {
                deleteMultipleQuestions(idsToDelete);
                alert(t('questionBank.alerts.deleteSuccess', { count: idsToDelete.size }));
            }

        } catch (e: any) {
             addError(e.message || t('errors.validation'));
        } finally {
            setIsLoading(false);
        }
    };

    const handleExport = () => {
        const validationCode = generateValidationCode('QB');
        const exportData = {
            validationCode,
            payload: questionBank
        };
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.download = `question_bank_${validationCode}.json`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
    };

    const handleImportClick = () => {
        importFileRef.current?.click();
    };
    
    const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target?.result as string;
                const importedData: { validationCode: string; payload: Record<QuizLevel, Question[]> } = JSON.parse(text);

                if (!importedData.validationCode || !/^PC-QB-\d{8}-\d{6}$/.test(importedData.validationCode)) {
                    throw new Error(t('errors.invalidFileCode'));
                }

                if (importBank(importedData.payload)) {
                    alert(t('questionBank.alerts.importSuccess'));
                } else {
                     throw new Error(t('errors.invalidFileData'));
                }
            } catch (err: any) {
                addError(t('errors.importFile', { error: err.message }));
                console.error(err);
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    };

    const level1Count = questionBank[1]?.length || 0;
    const level2Count = questionBank[2]?.length || 0;
    const level3Count = questionBank[3]?.length || 0;
    const totalCount = level1Count + level2Count + level3Count;
    
    const enabled1Count = questionBankHook.getEnabledQuestionsCount(1);
    const enabled2Count = questionBankHook.getEnabledQuestionsCount(2);
    const enabled3Count = questionBankHook.getEnabledQuestionsCount(3);
    const totalEnabledCount = enabled1Count + enabled2Count + enabled3Count;


    return (
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm animate-fade-in w-full mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-cyan-300 border-b border-cyan-500/30 pb-3">{t('questionBank.title')}</h2>

            {isLoading && (
                <div className="fixed inset-0 bg-black/70 flex flex-col items-center justify-center z-50">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
                    <p className="mt-4 text-cyan-300 text-lg">{loadingMessage}</p>
                </div>
            )}
            
            <div className="flex flex-wrap gap-4 mb-6 text-center justify-center">
                <div className="bg-gray-900/50 p-3 rounded-lg flex-grow min-w-[120px]">
                    <p className="text-sm text-gray-400">{t('questionBank.totalQuestions')}</p>
                    <p className="text-2xl font-bold text-white">{totalCount}</p>
                </div>
                <div className="bg-gray-900/50 p-3 rounded-lg flex-grow min-w-[120px]">
                    <p className="text-sm text-gray-400">{t('questionBank.totalEnabled')}</p>
                    <p className="text-2xl font-bold text-green-400">{totalEnabledCount}</p>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex gap-2 p-1 bg-gray-900/50 rounded-lg">
                    {([1, 2, 3] as QuizLevel[]).map(level => (
                        <button key={level} onClick={() => setActiveLevel(level)} className={`px-4 py-2 rounded-md transition-colors ${activeLevel === level ? 'bg-cyan-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>
                            {t('questionBank.level', { level })} ({questionBank[level]?.length || 0})
                        </button>
                    ))}
                </div>
                 <div className="flex flex-wrap gap-2">
                    <button onClick={handleExport} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">{t('questionBank.exportButton')}</button>
                    <button onClick={handleImportClick} className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">{t('questionBank.importButton')}</button>
                     <input type="file" ref={importFileRef} onChange={handleFileImport} className="hidden" accept=".json" />
                </div>
            </div>

            <div className="space-y-3 max-h-[35vh] overflow-y-auto pr-2">
                {questionBank[activeLevel]?.map((q: Question) => (
                    <div key={q.id} className="bg-gray-700/50 p-4 rounded-lg flex items-start justify-between gap-4">
                        <div className="flex-grow">
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" checked={q.enabled} onChange={() => toggleQuestionEnabled(activeLevel, q.id)} className="form-checkbox h-5 w-5 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-600" />
                                <span className={`mr-3 ${q.enabled ? 'text-gray-200' : 'text-gray-500 line-through'}`}>{q.question[currentLang]}</span>
                            </label>
                        </div>
                        <div className="flex-shrink-0 flex gap-2">
                            <button onClick={() => handleEdit(q)} className="text-yellow-400 hover:text-yellow-300">{t('questionBank.edit')}</button>
                            <button onClick={() => handleDelete(q.id)} className="text-rose-500 hover:text-rose-400">{t('questionBank.delete')}</button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4 justify-between border-t border-cyan-500/30 pt-6">
                <div className="flex flex-wrap gap-4">
                    <button onClick={handleAddNew} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg transition-colors">
                        {t('questionBank.addNewButton')}
                    </button>
                    <button onClick={handleGenerateAI} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-wait flex items-center gap-2">
                        {t('questionBank.generateAIButton')} ✨
                    </button>
                     <button onClick={handleValidateBank} disabled={isLoading} className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-wait flex items-center gap-2">
                        {t('questionBank.validateButton')}
                    </button>
                </div>
                 <button onClick={onBack} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-5 rounded-lg transition-colors">
                    {t('common.back')}
                </button>
            </div>

            {isModalOpen && (
                <QuestionEditorModal
                    question={editingQuestion}
                    onSave={handleSaveQuestion}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default QuestionBankManager;
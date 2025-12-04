
import React, { useState, useEffect } from 'react';
import { useI18n } from '../contexts/I18nContext.tsx';

const emptyQuestion = {
    question: { fa: '', en: '' },
    options: [
        { text: { fa: '', en: '' }, economicScore: 0, socialScore: 0 },
        { text: { fa: '', en: '' }, economicScore: 0, socialScore: 0 },
        { text: { fa: '', en: '' }, economicScore: 0, socialScore: 0 },
        { text: { fa: '', en: '' }, economicScore: 0, socialScore: 0 },
    ],
};

const QuestionEditorModal = ({ question, onSave, onClose }) => {
    const [formData, setFormData] = useState(emptyQuestion);
    const { t } = useI18n();
    
    useEffect(() => {
        if (question) {
            setFormData({
                question: { ...question.question },
                options: question.options.map(opt => ({...opt, text: {...opt.text}})) // Deep copy
            });
        } else {
            setFormData(JSON.parse(JSON.stringify(emptyQuestion)));
        }
    }, [question]);

    const handleQuestionChange = (lang, value) => {
        setFormData(prev => ({ 
            ...prev, 
            question: { ...prev.question, [lang]: value } 
        }));
    };

    const handleOptionTextChange = (index, lang, value) => {
        setFormData(prev => {
            const newOptions = [...prev.options];
            newOptions[index].text = { ...newOptions[index].text, [lang]: value };
            return { ...prev, options: newOptions };
        });
    };

    const handleOptionScoreChange = (index, field, value) => {
         setFormData(prev => {
            const newOptions = [...prev.options];
            (newOptions[index])[field] = Number(value);
            return { ...prev, options: newOptions };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-gray-800 border border-cyan-500/50 rounded-lg shadow-xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">{question ? t('questionEditor.editTitle') : t('questionEditor.addTitle')}</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 p-3 border border-gray-600 rounded-lg">
                        <label className="block text-gray-300 mb-2">{t('questionEditor.questionLabel')}</label>
                        <input
                            type="text"
                            placeholder={t('questionEditor.questionPlaceholderFa')}
                            value={formData.question.fa}
                            onChange={(e) => handleQuestionChange('fa', e.target.value)}
                            className="w-full bg-gray-700 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-2"
                            required
                            dir="rtl"
                        />
                         <input
                            type="text"
                            placeholder={t('questionEditor.questionPlaceholderEn')}
                            value={formData.question.en}
                            onChange={(e) => handleQuestionChange('en', e.target.value)}
                            className="w-full bg-gray-700 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                            dir="ltr"
                        />
                    </div>
                    {formData.options.map((opt, index) => (
                        <div key={index} className="mb-4 p-3 border border-gray-700 rounded-lg">
                            <label className="block text-gray-400 mb-2">{t('questionEditor.optionLabel', { index: index + 1 })}</label>
                            <input
                                type="text"
                                placeholder={t('questionEditor.optionPlaceholderFa')}
                                value={opt.text.fa}
                                onChange={(e) => handleOptionTextChange(index, 'fa', e.target.value)}
                                className="w-full bg-gray-700 text-white p-2 rounded-md border border-gray-600 mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                                dir="rtl"
                            />
                            <input
                                type="text"
                                placeholder={t('questionEditor.optionPlaceholderEn')}
                                value={opt.text.en}
                                onChange={(e) => handleOptionTextChange(index, 'en', e.target.value)}
                                className="w-full bg-gray-700 text-white p-2 rounded-md border border-gray-600 mb-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                required
                                dir="ltr"
                            />
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="text-sm text-gray-400">{t('questionEditor.economicScoreLabel')}</label>
                                    <input
                                        type="number"
                                        value={opt.economicScore}
                                        onChange={(e) => handleOptionScoreChange(index, 'economicScore', e.target.value)}
                                        className="w-full bg-gray-900 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        min="-10" max="10" step="1" required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="text-sm text-gray-400">{t('questionEditor.socialScoreLabel')}</label>
                                    <input
                                        type="number"
                                        value={opt.socialScore}
                                        onChange={(e) => handleOptionScoreChange(index, 'socialScore', e.target.value)}
                                        className="w-full bg-gray-900 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                        min="-10" max="10" step="1" required
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-end gap-4 mt-6">
                        <button type="button" onClick={onClose} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
                            {t('common.cancel')}
                        </button>
                        <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg">
                            {t('common.save')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuestionEditorModal;

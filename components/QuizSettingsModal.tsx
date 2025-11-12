
import React, { useState } from 'react';
import { type QuizConfig } from '../types';
import { 
    MINIMUM_QUESTIONS_FOR_ANY_ANALYSIS,
    RECOMMENDED_QUESTIONS_FOR_BASIC_ANALYSIS,
    RECOMMENDED_QUESTIONS_FOR_ACCURATE_ANALYSIS
} from '../constants';
import { useI18n } from '../contexts/I18nContext';

interface QuizSettingsModalProps {
    initialConfig: QuizConfig;
    onSave: (newConfig: QuizConfig) => void;
    onClose: () => void;
}

const QuizSettingsModal: React.FC<QuizSettingsModalProps> = ({ initialConfig, onSave, onClose }) => {
    const [config, setConfig] = useState<QuizConfig>(initialConfig);
    const { t } = useI18n();

    const handleSave = () => {
        onSave(config);
        onClose();
    };
    
    const totalQuestions = config.numberOfLevels * config.questionsPerLevel;

    const getWarningMessage = () => {
        if (totalQuestions < MINIMUM_QUESTIONS_FOR_ANY_ANALYSIS) {
            return t('settings.warnings.notEnough', { total: totalQuestions, min: MINIMUM_QUESTIONS_FOR_ANY_ANALYSIS });
        }
        if (totalQuestions < RECOMMENDED_QUESTIONS_FOR_BASIC_ANALYSIS) {
            return t('settings.warnings.basic', { total: totalQuestions, recommended: RECOMMENDED_QUESTIONS_FOR_BASIC_ANALYSIS });
        }
        if (totalQuestions < RECOMMENDED_QUESTIONS_FOR_ACCURATE_ANALYSIS) {
             return t('settings.warnings.accurate', { recommended: RECOMMENDED_QUESTIONS_FOR_ACCURATE_ANALYSIS });
        }
        return null;
    };

    const warning = getWarningMessage();

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-gray-800 border border-cyan-500/50 rounded-lg shadow-xl p-6 w-full max-w-lg animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-cyan-300">{t('settings.title')}</h3>

                <div className="space-y-6">
                    <div>
                        <label htmlFor="levels" className="block text-lg font-medium text-gray-300">{t('settings.levelsLabel')}</label>
                        <div className="flex justify-around items-center bg-gray-900/50 p-2 rounded-lg mt-2">
                            {([1, 2, 3] as const).map(level => (
                                <button
                                    key={level}
                                    onClick={() => setConfig(c => ({...c, numberOfLevels: level}))}
                                    className={`px-6 py-2 text-lg rounded-md transition-all ${config.numberOfLevels === level ? 'bg-cyan-600 text-white shadow-md' : 'bg-gray-700 text-gray-400'}`}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="questions" className="block text-lg font-medium text-gray-300">{t('settings.questionsPerLevelLabel')}</label>
                        <input
                            id="questions"
                            type="range"
                            min="5"
                            max="50"
                            step="1"
                            value={config.questionsPerLevel}
                            onChange={(e) => setConfig(c => ({ ...c, questionsPerLevel: Number(e.target.value) }))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mt-3"
                        />
                        <div className="text-center text-cyan-300 font-bold text-2xl mt-2">{config.questionsPerLevel}</div>
                    </div>
                </div>

                <div className="mt-8 text-center bg-gray-900/50 p-4 rounded-lg">
                    <p className="text-lg text-white">{t('settings.totalQuestions')}: <span className="font-bold text-2xl text-cyan-400">{totalQuestions}</span></p>
                    {warning && (
                        <p className="mt-2 text-yellow-400 text-sm">{warning}</p>
                    )}
                     <p className="mt-4 text-xs text-gray-400">
                        {t('settings.guide')}
                    </p>
                </div>

                <div className="flex justify-end gap-4 mt-8">
                    <button type="button" onClick={onClose} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg">
                        {t('common.cancel')}
                    </button>
                    <button type="button" onClick={handleSave} className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-lg">
                        {t('common.save')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizSettingsModal;
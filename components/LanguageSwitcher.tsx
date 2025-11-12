
import React from 'react';
import { useI18n } from '../contexts/I18nContext';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage, availableLanguages } = useI18n();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    };

    return (
        <div>
            <select
                value={language}
                onChange={handleLanguageChange}
                className="bg-gray-700/50 text-white py-1 px-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
                aria-label="Select language"
            >
                {availableLanguages.map(lang => (
                    <option key={lang.langCode} value={lang.langCode}>
                        {lang.langName}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSwitcher;

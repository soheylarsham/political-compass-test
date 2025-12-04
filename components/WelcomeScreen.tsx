
import React, { useRef } from 'react';
import { useI18n } from '../contexts/I18nContext.tsx';

const WelcomeScreen = ({ onStart, onImport, onManageQuestions, onShowSettings, disabled, addError }) => {
    const fileInputRef = useRef(null);
    const langFileInputRef = useRef(null);
    const { t, addLanguage } = useI18n();

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const text = e.target?.result;
                    // FIX: Ensure 'text' is a string before parsing.
                    if (typeof text !== 'string') {
                        throw new Error('File content could not be read as text.');
                    }
                    const importedWrapper = JSON.parse(text);

                    if (!importedWrapper.validationCode || !/^PC-R-\d{8}-\d{6}$/.test(importedWrapper.validationCode)) {
                        throw new Error(t('errors.invalidFileCode'));
                    }
                    
                    const importedState = importedWrapper.payload;

                    if (importedState.answers && importedState.result && importedState.level) {
                       onImport(importedState);
                    } else {
                        throw new Error(t('errors.invalidFileData'));
                    }
                } catch (error) {
                    const message = t('errors.importFile', { error: error.message });
                    console.error("Failed to import file:", error);
                    addError(message);
                } finally {
                    if (event.target) {
                        event.target.value = '';
                    }
                }
            };
            reader.readAsText(file);
        }
    };

    const handleLanguageFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const text = e.target?.result;
                    // FIX: Ensure 'text' is a string before parsing.
                    if (typeof text !== 'string') {
                        throw new Error('File content could not be read as text.');
                    }
                    const importedLang = JSON.parse(text);

                    if (
                        !importedLang.langCode || typeof importedLang.langCode !== 'string' ||
                        !importedLang.langName || typeof importedLang.langName !== 'string' ||
                        !importedLang.dir || (importedLang.dir !== 'ltr' && importedLang.dir !== 'rtl') ||
                        !importedLang.translations || typeof importedLang.translations !== 'object'
                    ) {
                         throw new Error(t('errors.invalidLangFileFormat'));
                    }
                    
                    const newLang = {
                        langCode: importedLang.langCode,
                        langName: importedLang.langName,
                        dir: importedLang.dir,
                        translations: importedLang.translations
                    };

                    if (addLanguage(newLang)) {
                        alert(t('welcomeScreen.langImportSuccess', { langName: newLang.langName }));
                    } else {
                         alert(t('welcomeScreen.langImportExists', { langCode: newLang.langCode }));
                    }

                } catch (error) {
                     addError(t('errors.importLangFile', { error: error.message }));
                } finally {
                    if (event.target) {
                        event.target.value = '';
                    }
                }
            };
            reader.readAsText(file);
        }
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleImportLangClick = () => {
        langFileInputRef.current?.click();
    }

  return (
    <div className="text-center bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm animate-fade-in">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-cyan-300">{t('welcomeScreen.title')}</h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
        {t('welcomeScreen.description')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
        <button
          onClick={onStart}
          disabled={disabled}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xl py-4 px-10 rounded-lg shadow-lg shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('welcomeScreen.startButton')}
        </button>
        <button
            onClick={onShowSettings}
            className="bg-transparent border-2 border-rose-500 text-rose-400 hover:bg-rose-500 hover:text-white font-bold text-xl py-4 px-10 rounded-lg shadow-lg shadow-rose-500/10 transform hover:scale-105 transition-all duration-300"
        >
            {t('welcomeScreen.settingsButton')}
        </button>
        <button
            onClick={onManageQuestions}
            className="bg-transparent border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold text-xl py-4 px-10 rounded-lg shadow-lg shadow-indigo-500/10 transform hover:scale-105 transition-all duration-300"
        >
            {t('welcomeScreen.manageButton')}
        </button>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <button
            onClick={handleImportClick}
            className="bg-transparent border border-rose-500/50 text-rose-400 hover:bg-rose-500/20 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 text-sm"
        >
            {t('welcomeScreen.importResultsButton')}
        </button>
         <button
            onClick={handleImportLangClick}
            className="bg-transparent border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 text-sm"
        >
            {t('welcomeScreen.importLangButton')}
        </button>
        <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".json,.txt"
        />
         <input
            type="file"
            ref={langFileInputRef}
            onChange={handleLanguageFileChange}
            className="hidden"
            accept=".json"
        />
      </div>
    </div>
  );
};

export default WelcomeScreen;

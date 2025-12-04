
import React, { createContext, useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { fa } from '../languages/fa.ts';
import { en } from '../languages/en.ts';
import { type Language, type Translations } from '../types.ts';

const LANG_STORAGE_KEY = 'politicalCompassLang';
const CUSTOM_LANG_STORAGE_KEY = 'politicalCompassCustomLangs';

const defaultLanguages: Record<string, Language> = {
    [fa.langCode]: fa,
    [en.langCode]: en,
};

// Helper to get nested translation
const getTranslation = (translations: Translations, key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let result: any = translations;
    for (const k of keys) {
        result = result?.[k];
        if (result === undefined) {
            return key; // Return key if not found
        }
    }

    if (typeof result === 'string' && params) {
        return Object.entries(params).reduce((acc, [paramKey, paramValue]) => {
            return acc.replace(`{${paramKey}}`, String(paramValue));
        }, result);
    }
    
    return typeof result === 'string' ? result : key;
}

export type TFunction = (key: string, params?: Record<string, string | number>) => string;

interface I18nContextType {
    language: string;
    setLanguage: (langCode: string) => void;
    t: TFunction;
    availableLanguages: Language[];
    addLanguage: (newLang: Language) => boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [availableLanguages, setAvailableLanguages] = useState<Language[]>(() => {
        const customLangs = JSON.parse(localStorage.getItem(CUSTOM_LANG_STORAGE_KEY) || '{}');
        return Object.values({ ...defaultLanguages, ...customLangs });
    });
    const [language, _setLanguage] = useState<string>(() => localStorage.getItem(LANG_STORAGE_KEY) || 'fa');

    const currentLangData = availableLanguages.find(l => l.langCode === language) || fa;
    
    useEffect(() => {
        document.documentElement.lang = currentLangData.langCode;
        document.documentElement.dir = currentLangData.dir;
    }, [currentLangData]);
    
    const setLanguage = useCallback((langCode: string) => {
        localStorage.setItem(LANG_STORAGE_KEY, langCode);
        _setLanguage(langCode);
    }, []);

    const t = useCallback((key: string, params?: Record<string, string | number>): string => {
        // Allow fetching general keys like 'dir' or 'langCode'
        if (key === 'dir' || key === 'langCode') {
            return currentLangData[key];
        }
        return getTranslation(currentLangData.translations, key, params);
    }, [currentLangData]);


    const addLanguage = useCallback((newLang: Language): boolean => {
        const langExists = availableLanguages.some(l => l.langCode === newLang.langCode);
        if (langExists) {
            return false;
        }

        const customLangs: Record<string, Language> = JSON.parse(localStorage.getItem(CUSTOM_LANG_STORAGE_KEY) || '{}');
        customLangs[newLang.langCode] = newLang;
        localStorage.setItem(CUSTOM_LANG_STORAGE_KEY, JSON.stringify(customLangs));
        
        setAvailableLanguages(Object.values({ ...defaultLanguages, ...customLangs }));
        setLanguage(newLang.langCode); // Switch to the new language
        return true;
    }, [availableLanguages, setLanguage]);


    const value = useMemo(() => ({ 
        language, 
        setLanguage, 
        t, 
        availableLanguages, 
        addLanguage 
    }), [language, setLanguage, t, availableLanguages, addLanguage]);

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = (): I18nContextType => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
};

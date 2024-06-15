import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import pt from '../locales/pt.json';
import en from '../locales/en.json';
import it from '../locales/it.json';
import es from '../locales/es.json';

export type LanguageOptions = "pt" | "en" | "it" | "es";
type Translations = typeof pt;
const defaultLanguage: { language: LanguageOptions, file: Translations } = { language: "pt", file: pt };

interface LanguageContextType {
    language: LanguageOptions;
    translations: Translations;
    setLanguage: (language: LanguageOptions) => void;
}

interface LanguageProviderProps {
    children: ReactNode;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<LanguageOptions>(defaultLanguage.language);
    const [translations, setTranslations] = useState<Translations>(defaultLanguage.file);

    const loadTranslations = (lang: LanguageOptions) => {
        switch (lang) {
            case "pt":
                setTranslations(pt);
                break;
            case "en":
                setTranslations(en);
                break;
            case "it":
                setTranslations(it);
                break;
            case "es":
                setTranslations(es);
                break;
            default:
                setTranslations(defaultLanguage.file);
                break;
        }
    };

    useEffect(() => {
        loadTranslations(language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, translations, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
    }
    return context;
};

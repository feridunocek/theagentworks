"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { dictionaries, Dictionary } from "@/lib/dictionaries";

type Language = "tr" | "en" | "de";

type I18nContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    dict: Dictionary;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("tr");

    useEffect(() => {
        // 1. Önceki dil seçimini localStorage'dan kontrol et
        const savedLang = localStorage.getItem("preferredLanguage") as Language;
        if (savedLang && ["tr", "en", "de"].includes(savedLang)) {
            setLanguageState(savedLang);
            document.documentElement.lang = savedLang;
            return;
        }

        // 2. Kayıtlı tercih yoksa tarayıcı diline göre ayarla
        const browserLang = navigator.language.toLowerCase();
        let targetLang: Language = "tr";

        if (browserLang.startsWith("en")) {
            targetLang = "en";
        } else if (browserLang.startsWith("de")) {
            targetLang = "de";
        }

        setLanguageState(targetLang);
        document.documentElement.lang = targetLang;
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("preferredLanguage", lang);
        document.documentElement.lang = lang;
    };

    return (
        <I18nContext.Provider
            value={{
                language,
                setLanguage,
                dict: dictionaries[language]
            }}
        >
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error("useI18n must be used within an I18nProvider");
    }
    return context;
}

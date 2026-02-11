"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { dictionaries, Dictionary } from "@/lib/dictionaries";

type Language = "tr" | "en" | "de";

type I18nContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    dict: Dictionary;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("tr");

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

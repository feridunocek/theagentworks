"use client";

import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/components/providers/i18n-provider";

const languages = [
    { code: "tr", label: "TR", flag: "🇹🇷" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "de", label: "DE", flag: "🇩🇪" }
] as const;

export function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage } = useI18n();

    const selectedLang = languages.find(l => l.code === language) || languages[0];

    return (
        <div className="relative z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium text-gray-300 hover:text-white group"
            >
                <Globe size={16} className="text-[var(--color-neon-cyan)] group-hover:rotate-12 transition-transform" />
                <span className="uppercase hidden md:inline">{selectedLang.code}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 hidden md:block ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-32 p-1 rounded-xl bg-[#0F1117]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`
                                    w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
                                    ${selectedLang.code === lang.code
                                        ? "bg-[var(--color-neon-cyan)]/10 text-[var(--color-neon-cyan)]"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"}
                                `}
                            >
                                <span className="text-base">{lang.flag}</span>
                                <span className="font-medium">{lang.label}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop to close on click outside */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[-1]"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}

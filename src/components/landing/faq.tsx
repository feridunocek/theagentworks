"use client";

import { useI18n } from "@/components/providers/i18n-provider";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Faq() {
    const { dict } = useI18n();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative py-24 pb-12 overflow-hidden bg-[var(--background)]">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-neon-cyan)]/20 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-neon-cyan)_0%,transparent_50%)] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        <span className="text-white">{dict.faq.title_prefix}</span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)] font-sora">
                            {dict.faq.title_highlight}
                        </span>
                    </h2>
                    <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-2xl mx-auto">
                        {dict.faq.subtitle}
                    </p>
                </div>

                <div className="space-y-4">
                    {dict.faq.items.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[var(--color-neon-cyan)]/30 bg-white/[0.04]' : 'hover:border-white/10'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-neon-cyan)] rounded-xl"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-white font-medium pr-8">{item.question}</span>
                                    <span className="flex-shrink-0 text-[var(--color-neon-cyan)] transition-transform duration-300">
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 pt-0 text-[var(--text-muted)] leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-[var(--text-muted)]">
                        {dict.faq.bottom_note}{" "}
                        <a
                            href="#iletisim"
                            className="text-[var(--color-neon-cyan)] hover:text-white transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer"
                        >
                            {dict.faq.bottom_note_link}
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Zap, Target, BrainCircuit, Sparkles } from "lucide-react";
import { useI18n } from "@/components/providers/i18n-provider";

export function FutureOperations() {
    const { dict } = useI18n();

    const features = [
        {
            icon: <Zap className="w-8 h-8 text-[var(--color-neon-cyan)]" />,
            title: dict.future_operations.features.speed_title,
            description: dict.future_operations.features.speed_desc,
            gradient: "from-[var(--color-neon-cyan)]/20 to-transparent"
        },
        {
            icon: <Target className="w-8 h-8 text-[#d946ef]" />, // Fuchsia for contrast or keep purple
            title: dict.future_operations.features.precision_title,
            description: dict.future_operations.features.precision_desc,
            gradient: "from-[var(--color-neon-purple)]/20 to-transparent"
        },
        {
            icon: <BrainCircuit className="w-8 h-8 text-[var(--color-neon-purple)]" />,
            title: dict.future_operations.features.focus_title,
            description: dict.future_operations.features.focus_desc,
            gradient: "from-blue-500/20 to-transparent"
        }
    ];

    return (
        <section id="faydalar" className="relative py-24 px-4 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-neon-purple)]/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
                    >
                        {dict.future_operations.title_prefix} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-cyan)]">{dict.future_operations.title_highlight}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        {dict.future_operations.description}
                    </motion.p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:bg-white/[0.05] transition-colors duration-500"
                        >
                            {/* Radial Glow Effect */}
                            <div className={`absolute -top-20 -right-20 w-64 h-64 bg-linear-to-br ${feature.gradient} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            {/* Constant Subtle Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${feature.gradient} blur-[40px] opacity-20`} />

                            <div className="relative z-10 space-y-6">
                                <div className="p-3 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-neon-cyan)] transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 flex justify-center"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--color-neon-purple)] text-white tracking-wider">
                            {dict.future_operations.badge}
                        </span>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors flex items-center gap-2">
                            {dict.future_operations.badge_text}
                            <Sparkles size={14} className="text-[var(--color-neon-cyan)]" />
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

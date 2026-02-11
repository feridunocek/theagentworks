"use client";

import { motion } from "framer-motion";
import {
    Search,
    PenTool,
    Settings,
    ArrowRight
} from "lucide-react";
import { NeonButton } from "../ui/neon-button";
import { useI18n } from "@/components/providers/i18n-provider";

export function Methodology() {
    const { dict } = useI18n();

    const steps = [
        {
            id: 1,
            title: dict.methodology.steps.discovery.title,
            desc: dict.methodology.steps.discovery.desc,
            icon: Search,
            color: "text-[var(--color-neon-cyan)]",
            gradient: "from-[var(--color-neon-cyan)]/20 to-transparent"
        },
        {
            id: 2,
            title: dict.methodology.steps.design.title,
            desc: dict.methodology.steps.design.desc,
            icon: PenTool,
            color: "text-[var(--color-neon-purple)]",
            gradient: "from-[var(--color-neon-purple)]/20 to-transparent"
        },
        {
            id: 3,
            title: dict.methodology.steps.optimization.title,
            desc: dict.methodology.steps.optimization.desc,
            icon: Settings,
            color: "text-white",
            gradient: "from-white/10 to-transparent"
        }
    ];

    return (
        <section id="nasil-calisir" className="py-24 relative overflow-hidden bg-black/50">
            <div className="container px-4 md:px-6 relative z-10">

                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
                    >
                        {dict.methodology.title} <span className="text-transparent bg-clip-text bg-linear-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-cyan)]">{dict.methodology.title_highlight}</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        {dict.methodology.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Only visible on MD+) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-linear-to-r from-transparent via-[var(--color-neon-purple)]/50 to-transparent -z-10 border-t border-dashed border-[var(--color-neon-purple)]/30" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group"
                        >
                            <div className="relative h-full p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden hover:bg-white/[0.05] transition-all duration-500 flex flex-col items-center text-center">

                                {/* Step Number Badge */}
                                <div className="absolute top-4 right-4 text-xs font-bold text-gray-500 opacity-50 font-mono">
                                    0{step.id}
                                </div>

                                {/* Icon Container */}
                                <div className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10`}>
                                    <step.icon size={32} className={step.color} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--color-neon-cyan)] transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>

                                {/* Bottom Glow */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import {
    ShoppingBag,
    Briefcase,
    Headphones,
    ArrowRight,
    TrendingUp,
    Clock,
    Users,
    Zap
} from "lucide-react";
import { NeonButton } from "../ui/neon-button";
import { useI18n } from "@/components/providers/i18n-provider";

export function TransformationScenarios() {
    const { dict } = useI18n();

    const scenarios = [
        {
            icon: ShoppingBag,
            title: dict.scenarios.cards.ecommerce.title,
            problem: dict.scenarios.cards.ecommerce.problem,
            solution: dict.scenarios.cards.ecommerce.solution,
            stats: [
                { value: dict.scenarios.cards.ecommerce.stats[0].value, label: dict.scenarios.cards.ecommerce.stats[0].label, icon: TrendingUp, color: "text-[var(--color-neon-cyan)]" },
                { value: dict.scenarios.cards.ecommerce.stats[1].value, label: dict.scenarios.cards.ecommerce.stats[1].label, icon: Clock, color: "text-[var(--color-neon-purple)]" }
            ],
            gradient: "from-pink-500/20 to-transparent",
            borderColor: "group-hover:border-pink-500/30"
        },
        {
            icon: Briefcase,
            title: dict.scenarios.cards.b2b.title,
            problem: dict.scenarios.cards.b2b.problem,
            solution: dict.scenarios.cards.b2b.solution,
            stats: [
                { value: dict.scenarios.cards.b2b.stats[0].value, label: dict.scenarios.cards.b2b.stats[0].label, icon: Users, color: "text-[var(--color-neon-cyan)]" },
                { value: dict.scenarios.cards.b2b.stats[1].value, label: dict.scenarios.cards.b2b.stats[1].label, icon: Zap, color: "text-[var(--color-neon-purple)]" }
            ],
            gradient: "from-[var(--color-neon-cyan)]/20 to-transparent",
            borderColor: "group-hover:border-[var(--color-neon-cyan)]/30"
        },
        {
            icon: Headphones,
            title: dict.scenarios.cards.support.title,
            problem: dict.scenarios.cards.support.problem,
            solution: dict.scenarios.cards.support.solution,
            stats: [
                { value: dict.scenarios.cards.support.stats[0].value, label: dict.scenarios.cards.support.stats[0].label, icon: Users, color: "text-[var(--color-neon-cyan)]" },
                { value: dict.scenarios.cards.support.stats[1].value, label: dict.scenarios.cards.support.stats[1].label, icon: Zap, color: "text-[var(--color-neon-purple)]" }
            ],
            gradient: "from-[var(--color-neon-purple)]/20 to-transparent",
            borderColor: "group-hover:border-[var(--color-neon-purple)]/30"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">

                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
                    >
                        {dict.scenarios.title} <span className="text-transparent bg-clip-text bg-linear-to-r from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)]">{dict.scenarios.title_highlight}</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {scenarios.map((scenario, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative h-full"
                        >
                            <div className={`relative h-full p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden ${scenario.borderColor} transition-all duration-500 hover:bg-white/[0.05] flex flex-col`}>

                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                                        <scenario.icon size={24} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        {scenario.title}
                                    </h3>
                                </div>

                                {/* Problem & Solution */}
                                <div className="space-y-6 mb-8 grow">
                                    <div className="space-y-2">
                                        <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                            {dict.scenarios.labels.problem}
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {scenario.problem}
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-xs font-bold text-[var(--color-neon-cyan)] uppercase tracking-wider flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-neon-cyan)]" />
                                            {dict.scenarios.labels.solution}
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {scenario.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                                    {scenario.stats.map((stat, i) => (
                                        <div key={i} className="text-center">
                                            <div className={`text-2xl font-bold ${stat.color} mb-1 font-mono tracking-tight`}>
                                                {stat.value}
                                            </div>
                                            <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Hover Gradient */}
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${scenario.gradient} opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a href="#iletisim" onClick={(e) => { e.preventDefault(); document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        <NeonButton variant="secondary" className="px-8 py-4">
                            {dict.scenarios.cta}
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </NeonButton>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}

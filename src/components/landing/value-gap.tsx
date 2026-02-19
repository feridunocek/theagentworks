"use client";

import { motion } from "framer-motion";
import { useRoiCalculator } from "@/hooks/use-roi-calculator";
import { NeonSlider } from "../ui/neon-slider";
import { GlassCard } from "../ui/glass-card";
import { TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/components/providers/i18n-provider";

export function ValueGap() {
    const { dict } = useI18n();
    // Destructuring hook with safety
    const calculator = useRoiCalculator();
    const { weeklyHours, setWeeklyHours, selectedRole, setSelectedRole, results } = calculator;

    // Calculate Efficiency Percentage (FTE * 100)
    // Avoid division by zero or undefined
    const efficiencyPercentage = Math.round((results?.digitalEquivalent ?? 0) * 100);

    return (
        <section id="hesaplayici" className="py-24 relative overflow-hidden bg-black/50">
            <div className="container px-4 md:px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content - Problem Statement */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-neon-cyan)]/10 border border-[var(--color-neon-cyan)]/20 text-[var(--color-neon-cyan)] text-xs font-bold tracking-wider uppercase">
                            <TrendingUp size={14} />
                            {dict.value_gap.badge}
                        </div>

                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                            {dict.value_gap.title_prefix} <span className="text-transparent bg-clip-text bg-linear-to-r from-[var(--color-neon-purple)] to-fuchsia-500">{dict.value_gap.title_highlight}</span> {dict.value_gap.title_suffix}
                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed">
                            {dict.value_gap.description}
                        </p>

                        <div className="space-y-4 pt-4 border-t border-white/5">
                            {dict.value_gap.benefits.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 group">
                                    <div className="p-1.5 rounded-full bg-[var(--color-neon-cyan)]/10 text-[var(--color-neon-cyan)] group-hover:bg-[var(--color-neon-cyan)]/20 transition-colors">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Calculator Widget */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="p-8 md:p-10 border-[var(--color-glass-border)] bg-[var(--color-glass-bg)]/80 backdrop-blur-xl">
                            <h3 className="text-2xl font-display font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
                                <Sparkles className="text-[var(--color-neon-cyan)] w-5 h-5" />
                                {dict.value_gap.calculator.title}
                            </h3>

                            <div className="space-y-8 mb-8">
                                <NeonSlider
                                    label={dict.value_gap.calculator.label_workload}
                                    value={weeklyHours}
                                    min={1}
                                    max={200}
                                    step={1}
                                    valueDisplay={weeklyHours.toString()}
                                    unit={dict.value_gap.calculator.unit_hours_weekly}
                                    onChange={(e) => setWeeklyHours(Number(e.target.value))}
                                />

                                {/* Role Toggles - Replaces Cost Slider */}
                                <div className="space-y-3">
                                    <label className="block text-sm font-medium text-gray-400 uppercase tracking-wider pl-1">
                                        {dict.value_gap.calculator.label_role_type}
                                    </label>
                                    <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-black/40 border border-white/10">
                                        {(['operational', 'expert', 'manager'] as const).map((role) => (
                                            <button
                                                key={role}
                                                onClick={() => setSelectedRole(role)}
                                                className={`
                                                    py-2.5 px-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 relative overflow-hidden
                                                    ${selectedRole === role
                                                        ? 'bg-[var(--color-neon-purple)] text-white shadow-lg shadow-purple-500/20'
                                                        : 'text-gray-400 hover:text-white hover:bg-white/5'}
                                                `}
                                            >
                                                {role === 'operational' && dict.value_gap.calculator.roles.operational}
                                                {role === 'expert' && dict.value_gap.calculator.roles.expert}
                                                {role === 'manager' && dict.value_gap.calculator.roles.manager}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Results Section */}
                            <div className="space-y-4 pt-6 mt-6 border-t border-white/10">

                                {/* 2-Col Stat Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Annual Recovered Time */}
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center text-center hover:bg-white/10 transition-colors duration-300">
                                        <div className="text-[10px] md:text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">
                                            {dict.value_gap.calculator.result_time}
                                        </div>
                                        <div className="text-3xl font-bold text-white font-mono tracking-tight">
                                            {results?.recoveredHours?.toLocaleString('tr-TR') ?? 0}
                                            <span className="text-sm font-normal text-gray-400 ml-1">{dict.value_gap.calculator.unit_hours}</span>
                                        </div>
                                    </div>

                                    {/* Efficiency Increase */}
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center text-center hover:bg-white/10 transition-colors duration-300">
                                        <div className="text-[10px] md:text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">
                                            {dict.value_gap.calculator.result_efficiency}
                                        </div>
                                        <div className="text-3xl font-bold text-[var(--color-neon-cyan)] font-mono tracking-tight">
                                            %{efficiencyPercentage}
                                        </div>
                                    </div>
                                </div>

                                {/* Main Value Gain */}
                                <div className="p-8 rounded-2xl bg-linear-to-br from-[var(--color-neon-purple)]/10 to-[var(--color-neon-cyan)]/5 border border-[var(--color-neon-purple)]/20 relative overflow-hidden group hover:border-[var(--color-neon-purple)]/40 transition-colors duration-500">
                                    <div className="absolute inset-0 bg-[var(--color-neon-purple)]/5 group-hover:bg-[var(--color-neon-purple)]/10 transition-colors duration-500" />

                                    {/* Background Glow */}
                                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[var(--color-neon-purple)]/30 blur-[50px] rounded-full group-hover:opacity-100 opacity-60 transition-opacity duration-500" />

                                    <div className="relative z-10 text-center">
                                        <div className="text-[var(--color-neon-cyan)] font-bold text-xs uppercase tracking-widest mb-3">
                                            {dict.value_gap.calculator.result_value}
                                        </div>
                                        <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-1 drop-shadow sm:tracking-tight">
                                            {results?.estimatedValueGain?.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }) ?? '0 ₺'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-[10px] text-gray-600">
                                    {dict.value_gap.calculator.disclaimer}
                                </p>
                            </div>

                        </GlassCard>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

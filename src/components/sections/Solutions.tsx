"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { solutions, Solution } from "@/data/solutions";
import { ChevronRight, Check, ArrowRight, Zap, Clock } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/components/providers/i18n-provider";

export default function Solutions() {
    const { dict } = useI18n();
    const [activeTabId, setActiveTabId] = useState<string>(solutions[0].id);

    const handleTabClick = (id: string, name: string) => {
        setActiveTabId(id);
        // Google Analytics Event for Tab Selection
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "select_solution", {
                event_category: "Engagement",
                event_label: name,
                send_to: "G-RYVV2Y68HE",
            });
        }
    };

    const activeSolution = solutions.find((s) => s.id === activeTabId) || solutions[0];
    const activeSolutionData = dict.solutions[activeSolution.id];

    return (
        <section className="py-20 px-4 md:px-8 bg-black text-white relative overflow-hidden" id="solutions">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1] tracking-tight mb-4 text-white">
                        {dict.solutions_header.title_prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{dict.solutions_header.title_highlight}</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        {dict.solutions_header.subtitle}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
                    {/* Sidebar (Desktop) / List (Mobile) */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-2">
                        {solutions.map((solution) => (
                            <div key={solution.id} className="group">
                                {/* Desktop Tab Button */}
                                <button
                                    onClick={() => handleTabClick(solution.id, dict.solutions[solution.id].name)}
                                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 border
                    ${activeTabId === solution.id
                                            ? "bg-white/10 border-white/20 shadow-[0_0_20px_rgba(0,255,255,0.1)]"
                                            : solution.isSpecial
                                                ? "bg-white/5 border-yellow-500/50 hover:bg-white/10 hover:border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)]"
                                                : "border-transparent hover:bg-white/5 hover:border-white/10"
                                        } hidden lg:flex items-center justify-between group`}
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Icon */}
                                        <div className={`p-2 rounded-lg transition-colors ${activeTabId === solution.id ? "bg-cyan-500/20 text-cyan-400" : solution.isSpecial ? "bg-yellow-500/20 text-yellow-400" : "bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-gray-200"}`}>
                                            <solution.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className={`font-semibold text-lg transition-colors ${activeTabId === solution.id ? "text-cyan-400" : solution.isSpecial ? "text-yellow-400 font-bold" : "text-gray-300 group-hover:text-white"}`}>
                                                {dict.solutions[solution.id].name}
                                            </h3>
                                            <p className={`text-sm line-clamp-1 mt-1 ${solution.isSpecial ? "text-yellow-200/70" : "text-gray-500"}`}>{dict.solutions[solution.id].description}</p>
                                        </div>
                                    </div>
                                    <ChevronRight
                                        className={`w-5 h-5 transition-transform duration-300
                      ${activeTabId === solution.id ? "text-purple-400 rotate-90" : solution.isSpecial ? "text-yellow-500" : "text-gray-600 group-hover:text-gray-400"}`}
                                    />
                                </button>

                                {/* Mobile Accordion Header */}
                                <button
                                    onClick={() => activeTabId === solution.id ? setActiveTabId("") : handleTabClick(solution.id, dict.solutions[solution.id].name)}
                                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 border lg:hidden flex items-center justify-between
                    ${activeTabId === solution.id
                                            ? "bg-white/10 border-white/20"
                                            : solution.isSpecial
                                                ? "bg-white/5 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.15)] mb-2"
                                                : "bg-white/5 border-white/5 border-transparent mb-2"}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${activeTabId === solution.id ? "bg-cyan-500/20 text-cyan-400" : solution.isSpecial ? "bg-yellow-500/20 text-yellow-400" : "bg-white/5 text-gray-400"}`}>
                                            <solution.icon size={20} />
                                        </div>
                                        <span className={`font-semibold ${activeTabId === solution.id ? "text-cyan-400" : solution.isSpecial ? "text-yellow-400 font-bold" : "text-gray-200"}`}>
                                            {dict.solutions[solution.id].name}
                                        </span>
                                    </div>
                                    <ChevronRight className={`w-5 h-5 transition-transform ${activeTabId === solution.id ? "rotate-90 text-purple-400" : solution.isSpecial ? "text-yellow-500" : "text-gray-500"}`} />
                                </button>

                                {/* Mobile Content (Accordion Body) */}
                                <div className="lg:hidden">
                                    <AnimatePresence>
                                        {activeTabId === solution.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden mb-4"
                                            >
                                                <div className="p-4 bg-white/5 rounded-b-xl border-x border-b border-white/10 -mt-1 pt-6">
                                                    <SolutionContent solution={solution} data={dict.solutions[solution.id]} />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Main Content (Desktop) */}
                    <div className="hidden lg:block w-full lg:w-2/3 relative h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTabId}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden flex flex-col"
                            >
                                {/* Decorative Elements inside card */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-full blur-[60px] pointer-events-none" />

                                <SolutionContent solution={activeSolution} data={activeSolutionData} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SolutionContent({ solution, data }: { solution: Solution, data: any }) {
    const { dict } = useI18n();
    const handleCTAClick = () => {
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "lead_conversion_click", {
                solution_name: data.name,
                send_to: "G-RYVV2Y68HE"
            });
        }
    };

    return (
        <div className="flex flex-col h-full gap-6 relative z-10">
            <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">{data.name}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{data.description}</p>
            </div>

            {/* ROI Cards */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 p-4 rounded-xl border border-cyan-500/20 flex flex-col items-center justify-center text-center gap-2 group hover:border-cyan-500/50 transition-colors">
                    <Zap className="w-8 h-8 text-cyan-400 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">{data.roiData.efficiency}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{dict.solutions_misc.efficiency_increase}</span>
                </div>
                <div className="bg-black/30 p-4 rounded-xl border border-purple-500/20 flex flex-col items-center justify-center text-center gap-2 group hover:border-purple-500/50 transition-colors">
                    <Clock className="w-8 h-8 text-purple-400 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">{data.roiData.timeSaving}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{dict.solutions_misc.time_saving}</span>
                </div>
            </div>

            {/* Workflow Details (Framed Section) */}
            <div className="relative p-6 rounded-lg bg-black/40 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] overflow-hidden group hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500" />
                <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    {dict.solutions_misc.workflow_details}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                    {data.details}
                </p>
            </div>

            <div className="space-y-4 mt-auto">
                <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">{dict.solutions_misc.benefits}</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {data.benefits.map((benefit: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                                <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                <span className="text-sm">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">{dict.solutions_misc.tools_technologies}</h4>
                    <div className="flex flex-wrap gap-2">
                        {data.tools.map((tool: string, idx: number) => (
                            <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Integrated CTA Button */}
            <div className="mt-6 pt-6 border-t border-white/10 flex justify-center">
                <Link
                    href="#iletisim"
                    onClick={handleCTAClick}
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-display font-semibold transition-all duration-300 overflow-hidden bg-[var(--color-neon-cyan)] text-black border border-[var(--color-neon-cyan)] hover:bg-cyan-300 hover:border-cyan-300 shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {dict.solutions_misc.cta_button}
                        <ArrowRight className="w-5 h-5" />
                    </span>
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </Link>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import {
    Target,
    Briefcase,
    ShoppingCart,
    Headphones,
    Share2,
    Cpu,
    Check,
    ArrowRight
} from "lucide-react";
import { NeonButton } from "../ui/neon-button";
import { useI18n } from "@/components/providers/i18n-provider";

export function DigitalWorkforce() {
    const { dict } = useI18n();

    const units = [
        {
            icon: Target,
            title: dict.digital_workforce.units.sales.title,
            color: "text-[var(--color-neon-cyan)]",
            features: dict.digital_workforce.units.sales.features
        },
        {
            icon: Briefcase,
            title: dict.digital_workforce.units.operations.title,
            color: "text-[var(--color-neon-purple)]",
            features: dict.digital_workforce.units.operations.features
        },
        {
            icon: ShoppingCart,
            title: dict.digital_workforce.units.ecommerce.title,
            color: "text-pink-500",
            features: dict.digital_workforce.units.ecommerce.features
        },
        {
            icon: Headphones,
            title: dict.digital_workforce.units.support.title,
            color: "text-blue-400",
            features: dict.digital_workforce.units.support.features
        },
        {
            icon: Share2,
            title: dict.digital_workforce.units.social.title,
            color: "text-orange-400",
            features: dict.digital_workforce.units.social.features
        },
        {
            icon: Cpu,
            title: dict.digital_workforce.units.custom.title,
            color: "text-white",
            features: dict.digital_workforce.units.custom.features
        }
    ];

    return (
        <section id="birimler" className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[var(--color-neon-purple)]/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[var(--color-neon-cyan)]/5 rounded-full blur-[100px] -z-10" />

            <div className="container px-4 md:px-6 relative z-10">

                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight"
                    >
                        {dict.digital_workforce.title} <span className="text-transparent bg-clip-text bg-linear-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-cyan)]">{dict.digital_workforce.title_highlight}</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        {dict.digital_workforce.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {units.map((unit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent rounded-2xl -z-10" />

                            <div className="relative h-full p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden hover:border-[var(--color-neon-purple)]/30 hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)] flex flex-col">

                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${unit.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <unit.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-neon-purple)] transition-colors">
                                        {unit.title}
                                    </h3>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-4 grow">
                                    {unit.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                            <div className="mt-1 min-w-4 max-w-4 text-[var(--color-neon-cyan)]/70">
                                                <Check size={16} />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Hover Glow Gradient */}
                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[var(--color-neon-purple)]/20 blur-[60px] rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <a href="#iletisim" onClick={(e) => { e.preventDefault(); document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' }); }}>
                        <NeonButton variant="primary" glow className="px-8 py-6 text-lg">
                            {dict.digital_workforce.cta}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </NeonButton>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}

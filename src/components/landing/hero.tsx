"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { NeonButton } from "../ui/neon-button";
import { PlaceholderImage } from "../ui/placeholder-image";
import { useI18n } from "@/components/providers/i18n-provider"; // Import I18n

export function Hero() {
    const { dict } = useI18n(); // Use hook
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--color-neon-purple)]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-neon-cyan)]/10 rounded-full blur-[120px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

                {/* Text Content - Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 relative z-20 max-w-[600px]"
                >
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--color-neon-cyan)]/30 bg-[var(--color-neon-cyan)]/10 text-[var(--color-neon-cyan)] text-xs font-medium tracking-wide">
                            <Sparkles size={12} />
                            {dict.hero.badge}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white">
                        {dict.hero.title_prefix}{" "}<span className="text-transparent bg-clip-text bg-linear-to-r from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)]">{dict.hero.title_highlight}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        {dict.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <a href="#birimler" onClick={(e) => { e.preventDefault(); document.getElementById('birimler')?.scrollIntoView({ behavior: 'smooth' }); }}>
                            <NeonButton variant="primary" glow>
                                {dict.hero.cta_primary}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </NeonButton>
                        </a>
                        <a href="#nasil-calisir" onClick={(e) => { e.preventDefault(); document.getElementById('nasil-calisir')?.scrollIntoView({ behavior: 'smooth' }); }}>
                            <NeonButton variant="outline">
                                {dict.hero.cta_secondary}
                            </NeonButton>
                        </a>
                    </div>

                    <div className="flex items-center gap-8 pt-6 border-t border-white/5">
                        <div>
                            <span className="block text-2xl font-bold text-white">500+</span>
                            <span className="text-sm text-gray-500">Otomatize Edilen Saat</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-white">%85</span>
                            <span className="text-sm text-gray-500">Ortalama Verim Artışı</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual/Hero Image - Right Column & Mobile Background */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -10, 0]
                    }}
                    transition={{
                        duration: 1,
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                    // Mobile: Absolute behind text, low opacity. Desktop: Relative in grid, high opacity.
                    className="absolute inset-0 lg:static lg:inset-auto lg:h-[800px] lg:w-[120%] lg:-mr-[20%] z-0 pointer-events-none flex items-center justify-center lg:justify-end lg:-translate-y-5"
                >
                    {/* SaaS Glow Effect - Behind Image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#512D6D] opacity-40 blur-[150px] rounded-full mix-blend-screen animate-pulse" />

                    {/* Image Container */}
                    <div className="relative w-full h-full lg:opacity-100 opacity-30 flex items-center justify-center">
                        <div
                            className="absolute inset-0 w-full h-full z-10"
                            style={{
                                // 4-way radial mask for soft melting edges on all sides
                                maskImage: 'radial-gradient(ellipse at center, black 85%, transparent 100%)',
                                WebkitMaskImage: 'radial-gradient(ellipse at center, black 85%, transparent 100%)',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat'
                            }}
                        >
                            <img
                                src="/wireframe-brain-2.png"
                                alt="AgentWorks AI Brain"
                                className="w-full h-full object-contain object-center scale-100 mix-blend-screen"
                            />
                        </div>
                    </div>

                    {/* Floating Badge - "7/24 Kesintisiz Dijital İş Gücü" */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -15] // Smooth float up
                        }}
                        transition={{
                            duration: 0.5,
                            y: {
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }
                        }}
                        className="absolute bottom-[20%] right-[5%] lg:right-[15%] glass-panel px-4 py-3 rounded-2xl shadow-2xl border border-white/10 hidden lg:flex items-center gap-3 z-30 backdrop-blur-md bg-black/40"
                    >
                        <div className="w-10 h-10 rounded-full bg-[var(--color-neon-cyan)]/20 flex items-center justify-center text-[var(--color-neon-cyan)] shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-gray-400 font-medium tracking-wide uppercase">AI Performance</div>
                            <div className="text-base font-bold text-white whitespace-nowrap">7/24 Kesintisiz Dijital İş Gücü</div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}

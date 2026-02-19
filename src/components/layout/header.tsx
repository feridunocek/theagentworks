"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NeonButton } from "../ui/neon-button";
import { LanguageSelector } from "./language-selector";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/components/providers/i18n-provider";
import { cn } from "@/lib/utils";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { dict } = useI18n();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header
            className={cn(
                "fixed left-0 right-0 z-50 flex justify-center transition-all duration-500",
                scrolled
                    ? "top-0 py-3 bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl"
                    : "top-4 md:top-6 py-0 bg-transparent pointer-events-none"
            )}
        >
            <div className="w-full max-w-7xl flex items-center justify-between relative px-4 md:px-6">

                {/* Left: Logo Area */}
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="relative z-10 shrink-0 pointer-events-auto transition-transform hover:scale-105 duration-300 flex items-center">
                    <div
                        className={cn(
                            "relative transition-all duration-500 ease-in-out",
                            scrolled ? "w-28 md:w-36 h-[40px] md:h-[60px]" : "w-32 md:w-48 h-[48px] md:h-[72px]"
                        )}
                    >
                        <Image
                            src="/logo_white.png"
                            alt="AgentWorks Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </a>

                {/* Center: Navigation Pill (Desktop) */}
                <nav
                    className={cn(
                        "hidden md:flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-500 pointer-events-auto",
                        scrolled
                            ? "bg-transparent border-0 shadow-none relative transform-none left-0 translate-x-0 translate-y-0"
                            : "bg-white/5 backdrop-blur-md border border-white/10 shadow-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    )}
                >
                    <a href="#faydalar" onClick={(e) => scrollToSection(e, 'faydalar')} className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group">
                        {dict.nav.features}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-neon-cyan)] transition-all group-hover:w-full" />
                    </a>
                    <a href="#hesaplayici" onClick={(e) => scrollToSection(e, 'hesaplayici')} className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group">
                        {dict.nav.efficiency}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-neon-cyan)] transition-all group-hover:w-full" />
                    </a>
                    <a href="#birimler" onClick={(e) => scrollToSection(e, 'birimler')} className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group">
                        {dict.nav.services}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-neon-cyan)] transition-all group-hover:w-full" />
                    </a>
                    <a href="#solutions" onClick={(e) => scrollToSection(e, 'solutions')} className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group">
                        {dict.nav.systems}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-neon-cyan)] transition-all group-hover:w-full" />
                    </a>
                    <a href="#nasil-calisir" onClick={(e) => scrollToSection(e, 'nasil-calisir')} className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group">
                        {dict.nav.roadmap}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-neon-cyan)] transition-all group-hover:w-full" />
                    </a>
                    <a href="#iletisim" onClick={(e) => scrollToSection(e, 'iletisim')} className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group">
                        {dict.nav.contact}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-neon-cyan)] transition-all group-hover:w-full" />
                    </a>
                </nav>

                {/* Right: Language, CTA & Hamburger */}
                <div className="relative z-10 shrink-0 pointer-events-auto flex items-center gap-3 md:gap-4">
                    <LanguageSelector />

                    {/* Desktop CTA */}
                    <a href="#iletisim" onClick={(e) => scrollToSection(e, 'iletisim')} className="hidden md:block">
                        <NeonButton variant="primary" glow className="h-10 px-6 text-sm flex items-center justify-center">
                            {dict.nav.cta}
                        </NeonButton>
                    </a>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-white hover:text-[var(--color-neon-cyan)] transition-colors"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden pointer-events-auto flex flex-col gap-6 shadow-2xl"
                    >
                        <a href="#faydalar" onClick={(e) => { scrollToSection(e, 'faydalar'); setMobileMenuOpen(false); }} className="text-lg font-medium text-white/90 hover:text-[var(--color-neon-cyan)]">
                            {dict.nav.features}
                        </a>
                        <a href="#hesaplayici" onClick={(e) => { scrollToSection(e, 'hesaplayici'); setMobileMenuOpen(false); }} className="text-lg font-medium text-white/90 hover:text-[var(--color-neon-cyan)]">
                            {dict.nav.efficiency}
                        </a>
                        <a href="#birimler" onClick={(e) => { scrollToSection(e, 'birimler'); setMobileMenuOpen(false); }} className="text-lg font-medium text-white/90 hover:text-[var(--color-neon-cyan)]">
                            {dict.nav.services}
                        </a>
                        <a href="#solutions" onClick={(e) => { scrollToSection(e, 'solutions'); setMobileMenuOpen(false); }} className="text-lg font-medium text-white/90 hover:text-[var(--color-neon-cyan)]">
                            {dict.nav.systems}
                        </a>
                        <a href="#nasil-calisir" onClick={(e) => { scrollToSection(e, 'nasil-calisir'); setMobileMenuOpen(false); }} className="text-lg font-medium text-white/90 hover:text-[var(--color-neon-cyan)]">
                            {dict.nav.roadmap}
                        </a>
                        <a href="#iletisim" onClick={(e) => { scrollToSection(e, 'iletisim'); setMobileMenuOpen(false); }} className="text-lg font-medium text-white/90 hover:text-[var(--color-neon-cyan)]">
                            {dict.nav.contact}
                        </a>
                        <a href="#iletisim" onClick={(e) => { scrollToSection(e, 'iletisim'); setMobileMenuOpen(false); }}>
                            <NeonButton variant="primary" glow className="w-full justify-center">
                                {dict.nav.cta}
                            </NeonButton>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

"use client";

import Image from "next/image";
import { useI18n } from "@/components/providers/i18n-provider";

export function Footer() {
    const { dict } = useI18n();

    return (
        <footer className="relative pt-16 pb-12 overflow-hidden bg-[#0F1117] border-t border-white/5">
            {/* Subtle Gradient Injections - Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-linear-to-r from-transparent via-[var(--color-neon-cyan)]/20 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.3)]" />

            {/* Background Mesh - Very subtle color injection */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-neon-purple)]/5 via-transparent to-transparent opacity-20 pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 text-center">

                {/* Logo Section */}
                <div className="flex flex-col items-center justify-center mb-8 gap-4">
                    {/* Increased size by approx 10% (w-48 -> w-52) */}
                    <div className="relative w-52 h-14 transition-transform hover:scale-105 duration-500">
                        {/* Use logo_color_white.png as requested */}
                        <Image
                            src="/logo_color_white.png"
                            alt="AgentWorks Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        />
                    </div>
                </div>

                {/* Legal Links - Minimal & Subtle */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-[13px] font-medium text-gray-500/60 mb-8 tracking-wider">
                    <a href="#" className="hover:text-[var(--color-neon-cyan)] hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300">
                        {dict.footer.terms}
                    </a>
                    <span className="w-1 h-1 rounded-full bg-gray-800" />
                    <a href="#" className="hover:text-[var(--color-neon-purple)] hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] transition-all duration-300">
                        {dict.footer.privacy}
                    </a>
                    <span className="w-1 h-1 rounded-full bg-gray-800" />
                    <a href="#" className="hover:text-[var(--color-neon-cyan)] hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300">
                        {dict.footer.cookies}
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-[10px] text-gray-600/40 uppercase tracking-[0.2em] font-semibold">
                    &copy; 2026 {dict.footer.copyright}
                </div>

            </div>
        </footer>
    );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/components/providers/i18n-provider";

export function Footer() {
    const { dict } = useI18n();

    return (
        <footer className="relative pt-12 pb-8 overflow-hidden bg-[#0F1117]">
            {/* Subtle Gradient Injections - Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-linear-to-r from-transparent via-[var(--color-neon-cyan)]/20 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.3)]" />

            {/* Background Mesh - Very subtle color injection */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-neon-purple)]/5 via-transparent to-transparent opacity-20 pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">

                {/* 1. Main Footer (Top Layer) */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10 text-center md:text-left">

                    {/* Left: Logo & Slogan */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <div className="relative w-48 h-12 transition-transform hover:scale-105 duration-500">
                            <Image
                                src="/logo_color_white.png"
                                alt="AgentWorks Logo"
                                fill
                                className="object-contain md:object-left drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            />
                        </div>
                        <p className="text-sm text-[#999] tracking-wide">
                            {dict.footer.slogan}
                        </p>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="flex flex-col items-center md:items-end gap-2 text-sm text-[#999] tracking-wide">
                        <a href="tel:+905352215292" className="hover:text-[var(--color-neon-cyan)] transition-colors">
                            +90 535 221 52 92
                        </a>
                        <a href="mailto:info@theagent-works.com" className="hover:text-[var(--color-neon-cyan)] transition-colors">
                            info@theagent-works.com
                        </a>
                    </div>
                </div>

                {/* 2. Sub-Footer / Legal Bar (Bottom Layer) */}
                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Copyright Left */}
                    <div className="text-[12px] text-[#999] uppercase tracking-wide font-medium text-center md:text-left">
                        &copy; 2026 {dict.footer.credit_prefix} <a href="https://kheironstand.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-neon-purple)] hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all">KHEİRONSTAND</a> {dict.footer.credit_suffix}
                    </div>

                    {/* Legal Links Right */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-[12px] text-[#999]">
                        <Link href="/kullanim-sartlari" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-neon-cyan)] transition-colors">
                            {dict.footer.terms}
                        </Link>
                        <span className="w-1 h-1 rounded-full bg-gray-700" />
                        <Link href="/gizlilik-politikasi" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-neon-purple)] transition-colors">
                            {dict.footer.privacy}
                        </Link>
                        <span className="w-1 h-1 rounded-full bg-gray-700" />
                        <Link href="/cerez-politikasi" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-neon-cyan)] transition-colors">
                            {dict.footer.cookies}
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}

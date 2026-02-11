"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Agent } from "@/lib/data";

interface ServiceCardProps {
    agent: Agent;
}

export function ServiceCard({ agent }: ServiceCardProps) {
    return (
        <GlassCard className="relative group overflow-hidden border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] h-full flex flex-col">
            {/* Top: Icon/Visual Placeholder */}
            <div className="relative h-48 w-full mb-6 overflow-hidden rounded-xl">
                <PlaceholderImage
                    prompt={agent.prompt}
                    label={agent.id.toUpperCase() + " VISUAL"}
                    className="w-full h-full border-none bg-black/20"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-[var(--color-neon-cyan)] transition-colors">
                        {agent.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[var(--color-neon-cyan)] transition-colors opacity-0 group-hover:opacity-100" />
                </div>

                <h4 className="text-sm font-medium text-[var(--color-neon-purple)] mb-4 uppercase tracking-wide">
                    {agent.role}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {agent.description}
                </p>

                {/* Metric Badge */}
                <div className="mt-auto pt-4 border-t border-white/5">
                    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--color-neon-cyan)]/10 border border-[var(--color-neon-cyan)]/20 w-full justify-center">
                        <span className="text-[var(--color-neon-cyan)] font-bold text-sm">
                            {agent.metric}
                        </span>
                    </span>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-[var(--color-neon-cyan)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </GlassCard>
    );
}

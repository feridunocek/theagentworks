"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface NeonSliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    valueDisplay: string;
    unit?: string;
}

export function NeonSlider({ className, label, valueDisplay, unit, ...props }: NeonSliderProps) {
    // Calculate percentage for background gradient
    const min = props.min ? Number(props.min) : 0;
    const max = props.max ? Number(props.max) : 100;
    const val = props.value ? Number(props.value) : 0;
    const percentage = ((val - min) / (max - min)) * 100;

    return (
        <div className={cn("w-full space-y-4", className)}>
            <div className="flex justify-between items-end">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {label}
                </label>
                <span className="text-2xl font-display font-bold text-white tabular-nums">
                    {valueDisplay} <span className="text-sm font-normal text-gray-500">{unit}</span>
                </span>
            </div>

            <div className="relative h-2 w-full rounded-full bg-white/10">
                {/* Track Fill */}
                <div
                    className="absolute h-full rounded-full bg-linear-to-r from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)]"
                    style={{ width: `${percentage}%` }}
                />

                {/* Glow */}
                <div
                    className="absolute h-full rounded-full blur-[4px] bg-[var(--color-neon-cyan)]/50"
                    style={{ width: `${percentage}%` }}
                />

                {/* Thumb (Visual Only - the input is transparent on top) */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-white border-2 border-[var(--color-neon-cyan)] shadow-[0_0_15px_var(--color-neon-cyan)] z-10 pointer-events-none transition-transform active:scale-95"
                    style={{ left: `calc(${percentage}% - 12px)` }}
                />

                <input
                    type="range"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    {...props}
                />
            </div>
        </div>
    );
}

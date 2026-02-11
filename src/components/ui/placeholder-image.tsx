import { GlassCard } from './glass-card';

interface PlaceholderImageProps {
    prompt: string;
    className?: string;
    label?: string;
}

export function PlaceholderImage({ prompt, className, label = "AI GENERATED VISUAL" }: PlaceholderImageProps) {
    return (
        <GlassCard
            className={`relative flex flex-col items-center justify-center overflow-hidden bg-black/40 border-dashed border-white/20 group ${className}`}
            hoverEffect={false}
        >
            <div className="absolute inset-0 bg-linear-to-br from-[var(--color-neon-cyan)]/5 to-[var(--color-neon-purple)]/5" />

            <div className="relative z-10 text-center p-4 max-w-md">
                <span className="inline-block px-2 py-1 mb-3 text-[10px] font-mono tracking-widest text-[var(--color-neon-cyan)] border border-[var(--color-neon-cyan)]/30 rounded-sm bg-black/50">
                    {label}
                </span>
                <p className="text-sm text-gray-400 font-mono leading-relaxed line-clamp-4 group-hover:text-gray-300 transition-colors">
                    &quot;{prompt}&quot;
                </p>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </GlassCard>
    );
}

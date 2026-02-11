import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    glow?: boolean;
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
    ({ className, variant = 'primary', glow = true, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'relative px-8 py-3 rounded-full font-display font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden',

                    // Variants
                    variant === 'primary' && [
                        'bg-[var(--color-neon-cyan)] text-black border border-[var(--color-neon-cyan)]',
                        'hover:bg-cyan-300 hover:border-cyan-300',
                        glow && 'shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]'
                    ],

                    variant === 'secondary' && [
                        'bg-[var(--color-neon-purple)] text-white border border-[var(--color-neon-purple)]',
                        'hover:bg-purple-600 hover:border-purple-600',
                        glow && 'shadow-[0_0_20px_rgba(188,19,254,0.4)] hover:shadow-[0_0_30px_rgba(188,19,254,0.6)]'
                    ],

                    variant === 'outline' && [
                        'bg-transparent text-white border border-[var(--color-glass-border)]',
                        'hover:border-[var(--color-neon-cyan)] hover:text-[var(--color-neon-cyan)]',
                        'backdrop-blur-sm'
                    ],

                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">{children}</span>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </button>
        );
    }
);

NeonButton.displayName = 'NeonButton';

export { NeonButton };

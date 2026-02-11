import { HTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, hoverEffect = true, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'glass-panel rounded-2xl p-6 transition-all duration-300',
                    hoverEffect && 'hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] hover:border-[var(--color-neon-cyan)]/30',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

GlassCard.displayName = 'GlassCard';

export { GlassCard };

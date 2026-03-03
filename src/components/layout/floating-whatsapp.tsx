"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/components/providers/i18n-provider";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingWhatsAppButton() {
    const { dict } = useI18n();
    const [shouldShake, setShouldShake] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        let inactivityTimer: NodeJS.Timeout;

        const resetTimer = () => {
            setShouldShake(false);
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(() => {
                setShouldShake(true);
                setShowTooltip(true);
                // Hide tooltip after a few seconds of shaking
                setTimeout(() => setShowTooltip(false), 5000);
            }, 20000); // 20 seconds of inactivity
        };

        // Listen to user activity
        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("keypress", resetTimer);
        window.addEventListener("scroll", resetTimer);
        window.addEventListener("touchstart", resetTimer);

        // Initial set
        resetTimer();

        return () => {
            clearTimeout(inactivityTimer);
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("keypress", resetTimer);
            window.removeEventListener("scroll", resetTimer);
            window.removeEventListener("touchstart", resetTimer);
        };
    }, []);

    const handleWhatsAppClick = () => {
        // Fire Google Ads conversion event
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
                'send_to': 'AW-17954153412',
                'value': 1.0,
                'currency': 'TRY'
            });
        }

        const phoneNumber = "+905352215292";
        const encodedMessage = encodeURIComponent(dict.floating_whatsapp.message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-4">
                <AnimatePresence>
                    {showTooltip && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 10, scale: 0.95 }}
                            className="bg-black/90 backdrop-blur-md border border-[#25D366]/40 text-white text-sm px-4 py-2 rounded-2xl shadow-[0_0_15px_rgba(37,211,102,0.2)]"
                        >
                            {dict.floating_whatsapp.tooltip}
                        </motion.div>
                    )}
                </AnimatePresence>
                <button
                    onClick={handleWhatsAppClick}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className={cn(
                        "relative group flex items-center justify-center rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-lg transition-transform hover:scale-110",
                        "p-4", // Touch target for mobile
                        shouldShake && "animate-shake"
                    )}
                    style={{
                        boxShadow: "0 0 20px rgba(37, 211, 102, 0.4)",
                    }}
                    aria-label={dict.floating_whatsapp.tooltip}
                >
                    <span className="absolute inset-0 rounded-full bg-[#25D366] blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></span>
                    <MessageCircle size={28} className="relative z-10" />
                </button>
            </div>
            <style>{`
        @keyframes shake-anim {
          0%, 100% { transform: translateX(0) rotate(0); }
          25% { transform: translateX(-4px) rotate(-4deg); }
          50% { transform: translateX(4px) rotate(4deg); }
          75% { transform: translateX(-4px) rotate(-4deg); }
        }
        .animate-shake {
          animation: shake-anim 0.5s ease-in-out infinite alternate;
        }
      `}</style>
        </>
    );
}

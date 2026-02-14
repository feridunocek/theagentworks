"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NeonButton } from "../ui/neon-button";
import { GlassCard } from "../ui/glass-card";
import {
    CheckCircle2,
    Calendar,
    ArrowRight,
    Send,
    Loader2
} from "lucide-react";
import { useI18n } from "@/components/providers/i18n-provider";
import { sendGAEvent } from '@next/third-parties/google';

export function LeadForm() {
    const { dict } = useI18n();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.target as HTMLFormElement);
            const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                department: formData.get("department"),
                message: formData.get("message"),
            };

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // ... inside LeadForm component ...

            if (response.ok) {
                // Track lead generation event
                sendGAEvent('event', 'generate_lead', { currency: 'USD', value: 10 });
                setIsSubmitted(true);
            } else {
                alert("Bir hata oluştu. Lütfen tekrar deneyiniz.");
            }
        } catch (error) {
            console.error("Form gönderim hatası:", error);
            alert("Bir hata oluştu. Lütfen tekrar deneyiniz.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="iletisim" className="py-16 md:py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[var(--color-neon-purple)]/10 rounded-full blur-[80px] md:blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[var(--color-neon-cyan)]/10 rounded-full blur-[80px] md:blur-[120px] -z-10" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">

                    {/* Text Side */}
                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6 leading-tight"
                            >
                                {dict.lead_form.title_prefix} <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-[var(--color-neon-cyan)] to-[var(--color-neon-purple)]">
                                    {dict.lead_form.title_highlight}
                                </span>
                            </motion.h2>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                {dict.lead_form.description}
                            </p>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            {dict.lead_form.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <div className="mt-1 p-2 rounded-lg bg-[var(--color-neon-cyan)]/10 text-[var(--color-neon-cyan)] shrink-0">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-base md:text-lg mb-1">{feature.title}</h4>
                                        <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <GlassCard className="p-6 md:p-10 border-white/10 relative overflow-hidden">
                            {/* Decorative Form Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-neon-purple)]/20 blur-[80px] rounded-full pointer-events-none" />

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 rounded-full bg-[var(--color-neon-cyan)]/20 text-[var(--color-neon-cyan)] flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 tracking-tight">
                                        {dict.lead_form.form.success_title}
                                    </h3>
                                    <p className="text-gray-300 text-base md:text-lg">
                                        {dict.lead_form.form.success_msg} <br />
                                        <span className="text-[var(--color-neon-cyan)] font-bold">{dict.lead_form.form.success_msg_highlight}</span>
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div>
                                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                                        <div className="p-2 md:p-3 rounded-xl bg-[var(--color-neon-purple)]/10 text-[var(--color-neon-purple)]">
                                            <Calendar size={20} className="md:w-6 md:h-6" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">{dict.lead_form.form.title}</h3>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 relative z-10">
                                        <div className="space-y-1.5 md:space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">{dict.lead_form.form.name_label}</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                placeholder={dict.lead_form.form.name_placeholder}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-base text-white placeholder:text-gray-600 focus:outline-hidden focus:border-[var(--color-neon-cyan)]/50 focus:ring-1 focus:ring-[var(--color-neon-cyan)]/50 transition-all font-sans"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                            <div className="space-y-1.5 md:space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">{dict.lead_form.form.email_label}</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    placeholder={dict.lead_form.form.email_placeholder}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-base text-white placeholder:text-gray-600 focus:outline-hidden focus:border-[var(--color-neon-cyan)]/50 focus:ring-1 focus:ring-[var(--color-neon-cyan)]/50 transition-all font-sans"
                                                />
                                            </div>
                                            <div className="space-y-1.5 md:space-y-2">
                                                <label htmlFor="phone" className="text-sm font-medium text-gray-400 ml-1">{dict.lead_form.form.phone_label}</label>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder={dict.lead_form.form.phone_placeholder}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-base text-white placeholder:text-gray-600 focus:outline-hidden focus:border-[var(--color-neon-cyan)]/50 focus:ring-1 focus:ring-[var(--color-neon-cyan)]/50 transition-all font-sans"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5 md:space-y-2">
                                            <label htmlFor="department" className="text-sm font-medium text-gray-400 ml-1">{dict.lead_form.form.dept_label}</label>
                                            <div className="relative">
                                                <select
                                                    id="department"
                                                    name="department"
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-base text-white focus:outline-hidden focus:border-[var(--color-neon-cyan)]/50 focus:ring-1 focus:ring-[var(--color-neon-cyan)]/50 transition-all appearance-none cursor-pointer font-sans"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled className="text-gray-500">{dict.lead_form.form.dept_placeholder}</option>
                                                    <option value="management" className="bg-gray-900">{dict.lead_form.form.dept_options.management}</option>
                                                    <option value="sales" className="bg-gray-900">{dict.lead_form.form.dept_options.sales}</option>
                                                    <option value="operations" className="bg-gray-900">{dict.lead_form.form.dept_options.operations}</option>
                                                    <option value="technical" className="bg-gray-900">{dict.lead_form.form.dept_options.technical}</option>
                                                    <option value="other" className="bg-gray-900">{dict.lead_form.form.dept_options.other}</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                    <ArrowRight className="rotate-90 w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-1.5 md:space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">{dict.lead_form.form.message_label}</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={3}
                                                placeholder={dict.lead_form.form.message_placeholder}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-base text-white placeholder:text-gray-600 focus:outline-hidden focus:border-[var(--color-neon-cyan)]/50 focus:ring-1 focus:ring-[var(--color-neon-cyan)]/50 transition-all resize-none font-sans"
                                            />
                                        </div>

                                        <div className="pt-2">
                                            <NeonButton variant="primary" glow className="w-full py-3 md:py-4 text-base md:text-lg justify-center group" disabled={isSubmitting}>
                                                {isSubmitting ? (
                                                    <Loader2 className="animate-spin w-6 h-6" />
                                                ) : (
                                                    <>
                                                        {dict.lead_form.form.submit_btn}
                                                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </NeonButton>
                                        </div>

                                        <p className="text-center text-[10px] md:text-xs text-gray-600 mt-4 leading-relaxed">
                                            {dict.lead_form.form.disclaimer}
                                        </p>
                                    </form>
                                </motion.div>
                            )}
                        </GlassCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

import { Footer } from "@/components/layout/footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col">
            <div className="container px-4 py-12 flex-1">
                <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" />
                    Ana Sayfaya Dön
                </Link>

                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                    Hakkımızda
                </h1>

                <div className="prose prose-invert max-w-3xl">
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                        AgentWorks, işletmelerin "insan yeteneğini" yaratıcı işlere saklaması gerektiğine inanır. Biz, tekrarlayan ve yorucu işleri devralan <span className="text-[var(--color-neon-purple)] font-bold">dijital iş arkadaşlarını</span> tasarlıyoruz.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6">
                        Antigravity çatısı altında kurulan ekibimiz, süreç madenciliği, yapay zeka mimarisi ve yazılım geliştirme alanlarında uzmanlaşmış mühendislerden oluşur. Amacımız, Türkiye'nin ve dünyanın önde gelen şirketlerine "Görünmez Operasyonel Mükemmellik" sunmaktır.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Teknolojiyi bir araç olarak değil, ekibinizin en verimli üyesi olarak konumluyoruz.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}

import { Footer } from "@/components/layout/footer";
import { NeonButton } from "@/components/ui/neon-button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col">
            <div className="container px-4 py-12 flex-1">
                <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" />
                    Ana Sayfaya Dön
                </Link>

                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                    Hizmetlerimiz
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mb-12">
                    AgentWorks, işletmenizin operasyonel yükünü hafifletmek için tasarlanmış geniş kapsamlı otonom çözümler sunar.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Service 1 */}
                    <div className="glass-panel p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4 text-glow">Otonom Satış (Works-Sales)</h3>
                        <p className="text-gray-400 mb-6">Lead toplama, e-posta pazarlama otomasyonu ve CRM entegrasyonu ile satış sürecinizi %100 dijitalleştirin.</p>
                        <ul className="list-disc list-inside text-gray-500 space-y-2 mb-6">
                            <li>7/24 Lead Yanıtlama</li>
                            <li>Toplantı Takvimi Yönetimi</li>
                            <li>Soğuk E-posta Kampanyaları</li>
                        </ul>
                    </div>

                    {/* Service 2 */}
                    <div className="glass-panel p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4 text-glow">Müşteri Desteği (Works-Support)</h3>
                        <p className="text-gray-400 mb-6">Yapay zeka tabanlı chatbot ve ticket yönetim sistemleri ile müşteri memnuniyetini artırın.</p>
                        <ul className="list-disc list-inside text-gray-500 space-y-2 mb-6">
                            <li>Çok Dilli Destek</li>
                            <li>Anlık Sorun Giderme</li>
                            <li>Personel Eskalasyonu</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

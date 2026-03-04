import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Çerez Politikası | The Agent Works",
    description: "The Agent Works çerez politikası ve kullanımı hakkında bilgilendirme.",
};

export default function CookiePolicy() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-4 md:px-8 text-white/80 bg-[var(--background)]">
            <div className="max-w-3xl mx-auto leading-relaxed">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Çerez Politikası (Cookie Policy)</h1>
                <p className="text-sm text-white/50 mb-12"><strong>Son Güncelleme:</strong> Mart 2026</p>

                <p className="mb-8">
                    Deneyiminizi iyileştirmek için çerezler kullanıyoruz.
                </p>

                <h3 className="text-xl font-semibold text-white mt-10 mb-4">Kullanılan Çerez Türleri</h3>
                <ol className="list-decimal pl-6 mb-8 space-y-4">
                    <li><strong>Kesinlikle Gerekli Çerezler:</strong> Sitenin çalışması için zorunludur (Oturum yönetimi, güvenlik).</li>
                    <li><strong>Analytics Çerezleri:</strong> Google Analytics gibi araçlarla site trafiğini analiz etmemizi sağlar (Sizin rızanızla çalışır).</li>
                    <li><strong>Pazarlama Çerezleri:</strong> Google Ads ve Facebook Pixel gibi platformlar üzerinden ilgi alanınıza göre reklam gösterimi sağlar.</li>
                </ol>

                <h3 className="text-xl font-semibold text-white mt-10 mb-4">Çerez Kontrolü</h3>
                <p className="mb-8">
                    Tarayıcı ayarlarınız üzerinden tüm çerezleri engelleyebilir veya silebilirsiniz. Ancak zorunlu çerezlerin kapatılması sitenin bazı fonksiyonlarını kısıtlayabilir.
                </p>

                <p className="mt-8">
                    <strong>İletişim:</strong> <a href="mailto:info@theagent-works.com" className="text-[var(--color-neon-cyan)] hover:underline">info@theagent-works.com</a> (Operasyonel) / <a href="mailto:info@kheironstand.com" className="text-[var(--color-neon-cyan)] hover:underline">info@kheironstand.com</a> (Resmi)
                </p>
            </div>
        </main>
    );
}

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kullanım Şartları ve Sorumluluk Reddi | The Agent Works",
    description: "The Agent Works kullanım şartları, kurallar ve sorumluluk reddi.",
};

export default function TermsOfUse() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-4 md:px-8 text-white/80 bg-[var(--background)]">
            <div className="max-w-3xl mx-auto leading-relaxed">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Kullanım Şartları ve Sorumluluk Reddi</h1>
                <p className="text-sm text-white/50 mb-12"><strong>Son Güncelleme:</strong> Mart 2026</p>

                <h3 className="text-xl font-semibold text-white mt-10 mb-4">Kullanım Şartları</h3>
                <ul className="list-disc pl-6 mb-8 space-y-4">
                    <li>Siteye erişerek bu şartları kabul etmiş sayılırsınız.</li>
                    <li>Tüm içerik ve tasarım hakları The Agent Works'e aittir; izinsiz kopyalanamaz.</li>
                    <li>Yasalara aykırı veya site güvenliğini tehdit eden faaliyetlerde bulunulamaz.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-10 mb-4">Sorumluluk Reddi (Disclaimer)</h3>
                <ul className="list-disc pl-6 mb-8 space-y-4">
                    <li><strong>"Olduğu Gibi" Esası:</strong> Bu sitedeki içerikler genel bilgilendirme amaçlıdır; profesyonel (hukuki, mali, tıbbi) tavsiye niteliği taşımaz.</li>
                    <li><strong>Garanti:</strong> Sitenin kesintisiz veya hatasız olacağına dair bir garanti verilmez.</li>
                    <li><strong>Üçüncü Taraf Bağlantıları:</strong> Siteden yönlendirilen dış bağlantıların içeriğinden The Agent Works sorumlu değildir.</li>
                    <li><strong>Sorumluluk Sınırı:</strong> Oluşabilecek veri kayıpları veya dolaylı zararlardan şirketimiz sorumlu tutulamaz.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-10 mb-4">Uyuşmazlık Çözümü</h3>
                <p className="mb-8">
                    Bu şartlar Türkiye Cumhuriyeti yasalarına tabidir ve İstanbul (Kartal) Mahkemeleri yetkilidir.
                </p>
            </div>
        </main>
    );
}

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gizlilik Politikası | The Agent Works",
    description: "The Agent Works gizlilik politikası ve kişisel verilerin korunması metni.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-4 md:px-8 text-white/80 bg-[var(--background)]">
            <div className="max-w-3xl mx-auto leading-relaxed">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Gizlilik Politikası ve Kişisel Veriler</h1>
                <p className="text-sm text-white/50 mb-12"><strong>Son Güncelleme:</strong> Mart 2026</p>

                <p className="mb-8">
                    The Agent Works olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu metin, 6698 sayılı KVKK uyarınca hazırlanmıştır.
                </p>

                <h3 className="text-xl font-semibold text-white mt-10 mb-4">Veri Sorumlusu Bilgileri</h3>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li><strong>Ünvan:</strong> KHRN ENDÜSTRİYEL TASARIM REKLAM TURİZM SANAYİ VE TİCARET LİMİTED ŞİRKETİ</li>
                    <li><strong>Adres:</strong> Cevizli Mah. Mustafa Kemal Cad. Hukukçular Towers A Blok No:66/A Kapı No:111 34865 Kartal/ İstanbul</li>
                    <li><strong>E-posta:</strong> info@theagent-works.com (Operasyonel) / info@kheironstand.com (Resmi)</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-10 mb-4">Verilerin İşlenmesi ve Haklarınız</h3>
                <ul className="list-disc pl-6 mb-8 space-y-4">
                    <li><strong>Toplanan Veriler:</strong> İletişim formu bilgileri, teknik IP verileri ve çerezler.</li>
                    <li><strong>Amaç:</strong> Hizmet sunumu, iletişim taleplerinin yanıtlanması ve site güvenliği.</li>
                    <li><strong>Haklarınız:</strong> Verilerinize erişme, düzeltme veya silinmesini talep etme hakkına sahipsiniz. Başvurularınızı e-posta adresimize iletebilirsiniz.</li>
                    <li><strong>Saklama Süresi:</strong> İletişim verileri yasal arşiv için 1 yıl, hizmet verileri 3 yıl saklanır.</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-10 mb-4">Resmi Bilgiler:</h3>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li><strong>Vergi Dairesi / VKN:</strong> KARTAL V.D. / 5481289571</li>
                </ul>
            </div>
        </main>
    );
}

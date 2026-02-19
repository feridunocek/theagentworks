import {
    PhoneCall,
    Camera,
    MessageSquare,
    Youtube,
    PenTool,
    Search,
    BarChart3,
    Settings
} from "lucide-react";

export interface Solution {
    id: string;
    name: string;
    description: string;
    details: string;
    roiData: {
        efficiency: string;
        timeSaving: string;
    };
    tools: string[];
    benefits: string[];
    icon: any;
    isSpecial?: boolean;
}

export const solutions: Solution[] = [
    {
        id: "ai-voice",
        name: "7/24 Sesli AI Asistan",
        icon: PhoneCall,
        description:
            "Telefon çağrılarınızı yanıtlayan, randevu alan ve satış kapatan yapay zeka santral çözümü.",
        details:
            "Müşteriniz aradığında meşgul sinyali almaz. Yapay zeka telefon asistanınız doğal Türkçeyle sohbet eder, hizmetlerinizi detaylı anlatır ve randevuları Google Calendar veya kendi takviminize otomatik işler. Küçük işletmelerden büyük şirketlere kadar sekreter maliyetini sıfıra indiren, eş zamanlı 100+ çağrıyı karşılayan akıllı santral sistemi.",
        roiData: { efficiency: "%95 Yanıt Oranı", timeSaving: "Günde 4 Saat" },
        tools: ["Vapi", "ElevenLabs", "n8n", "GPT-4o"],
        benefits: [
            "Kaçan çağrı ve kayıp müşteriye son verin",
            "Eş zamanlı 100+ görüşmeyi tek sistemle karşılayın",
            "Tam zamanlı sekreter maliyetinin %10'a sahip olun"
        ]
    },
    {
        id: "ai-photo",
        name: "AI Ürün Fotoğraf Stüdyosu",
        icon: Camera,
        description:
            "Akıllı telefonla çektiğiniz ürün fotoğraflarını saniyeler içinde profesyonel e-ticaret görseliyle dönüştürün.",
        details:
            "E-ticaret ve sosyal medya için stüdyo kalitesinde ürün fotoğrafı artık dakikalar içinde hazır. Yüklediğiniz ham görselin arka planını otomatik temizler, ürününüzü trend dekor ve sahnelere yerleştirir, ışık ile gölgeyi yapay zeka ile optimize eder. Trendyol, Hepsiburada ve Amazon listeleri için dönüşüm oranını artıran görseller üretin.",
        roiData: { efficiency: "%90 Maliyet Tasarrufu", timeSaving: "Haftalık 15 Saat" },
        tools: ["Midjourney API", "ComfyUI", "Cloudinary"],
        benefits: [
            "Stüdyo kiralama ve fotoğrafçı masrafını sıfırlayın",
            "Sınırsız renk, dekor ve sahne varyasyonu üretin",
            "Kampanya görsellerini saatler değil dakikalar içinde hazırlayın"
        ]
    },
    {
        id: "sales-bot",
        name: "Satış Kapatan Akıllı Chatbot",
        icon: MessageSquare,
        description:
            "WhatsApp ve web sitenizde 7/24 ürün öneren, soruları yanıtlayan ve ödeme linkiyle satışı kapatan AI chatbot.",
        details:
            "Ürün kataloğunuza tam hakimiyet sağlayan AI satış botu, müşteri ihtiyacını analiz ederek kişiselleştirilmiş ürün önerir ve ödeme bağlantısını göndererek süreci otomatik tamamlar. WhatsApp Business API entegrasyonuyla müşteri başına ortalama %35 daha yüksek dönüşüm oranı elde edin. İnsan temsilcisi olmadan günde 500+ satış görüşmesi yönetin.",
        roiData: { efficiency: "%35 Dönüşüm Artışı", timeSaving: "Haftalık 30 Saat" },
        tools: ["n8n", "WhatsApp API", "Pinecone", "GPT-4o"],
        benefits: [
            "7/24 satış yapan, hiç uyumayan dijital satış temsilcisi",
            "Her müşteriye özel ürün önerisiyle sepet değerini artırın",
            "Anlık destek ve çözümle müşteri memnuniyetini zirveye taşıyın"
        ]
    },
    {
        id: "youtube-fab",
        name: "YouTube İçerik Fabrikası",
        icon: Youtube,
        description:
            "Uzun YouTube videolarınızdan otomatik olarak viral Shorts, Instagram Reels ve SEO blog yazıları üretin.",
        details:
            "Video repurposing otomasyonu ile tek bir YouTube videosu onlarca platforma yayılan içeriğe dönüşür. Yapay zeka videonuzdaki en güçlü anları tespit eder, altyazıyı çıkarır ve bunlardan viral kanca (hook) içeren kısa videolar ile Google'da sıralanan blog makaleleri üretir. İçerik oluşturucular ve marka hesapları için haftalık içerik programını tek seferlik video kaydıyla doldurun.",
        roiData: { efficiency: "1 Videodan 10x İçerik", timeSaving: "Haftalık 20 Saat" },
        tools: ["Whisper AI", "GPT-4o", "CapCut API", "Buffer"],
        benefits: [
            "Tek videodan 1 haftalık içerik takvimini doldurun",
            "SEO uyumlu blog yazılarını otomatik yayınlayın",
            "Viral Shorts ve Reels için kanca (hook) üretimini otomatikleştirin"
        ]
    },
    {
        id: "seo-blogger",
        name: "Otonom SEO & Blog Yazarı",
        icon: PenTool,
        description:
            "Sektörünüze ait anahtar kelimeleri araştıran, her gün Google'ın ilk sayfasına hedefleyen blog makaleleri üreten AI içerik sistemi.",
        details:
            "Organik trafik büyütmenin en düşük maliyetli yolu olan içerik SEO'sunu tamamen otomatize edin. Sistem günlük trendleri ve düşük rekabetli anahtar kelimeleri tarar, sektörel otoritenizi artıracak uzun-form makaleler yazar ve bunları web sitenize ya da WordPress'e otomatik yükler. E-ticaret siteleri, hizmet işletmeleri ve ajanslar için ayda 40 saatlik içerik çalışmasını sıfır çabayla yönetin.",
        roiData: { efficiency: "5x Organik Trafik", timeSaving: "Aylık 40 Saat" },
        tools: ["Perplexity API", "n8n", "Next.js / WP API"],
        benefits: [
            "Düşük rekabetli anahtar kelimelerle Google'da hızla üst sıralara çıkın",
            "Sıfır eforla günlük içerik yönetimi ve otomatik yayınlama",
            "Sektörünüzde otorite ve güven inşa edin"
        ]
    },
    {
        id: "market-radar",
        name: "Rakip İzleme & Pazar Radarı",
        icon: Search,
        description:
            "Rakiplerinizin sosyal medya, fiyat ve kampanya hamlelerini anlık izleyen, size özet rapor sunan AI pazar takip sistemi.",
        details:
            "Dijital rakip analizi otomasyonu ile sektörünüzdeki her hareketi ilk öğrenen siz olun. Sistem rakip sosyal medya hesaplarını, YouTube kanallarını ve ürün fiyatlarını 7/24 tarar; yeni bir trend veya rakip kampanyası tespit ettiğinde sizi anında bildirir ve hazır özet rapor sunar. Pazarlama ekipleri için veri odaklı karar almayı haftalar değil dakikalar içinde mümkün kılar.",
        roiData: { efficiency: "Anlık Pazar Takibi", timeSaving: "Haftalık 12 Saat" },
        tools: ["Apify", "n8n", "OpenAI", "YouTube Data API"],
        benefits: [
            "Sektör trendlerini rakiplerinizden önce yakalayın",
            "Müşteri taleplerini ve şikayetlerini gerçek zamanlı görün",
            "Veriye dayalı fiyat ve kampanya stratejisi oluşturun"
        ]
    },
    {
        id: "data-analyst",
        name: "AI Veri Analisti & Raporlama",
        icon: BarChart3,
        description:
            "Satış tablolarınızı, e-ticaret verilerinizi ve müşteri kayıtlarınızı otomatik analiz eden, aksiyon odaklı raporlar üreten yapay zeka sistemi.",
        details:
            "İşletmeniz için yapay zeka destekli veri analizi ile karmaşık Excel tablolarını ve satış raporlarını saniyeler içinde anlaşılır içgörülere dönüştürün. 'Hangi ürün en kârlı?', 'Hangi müşteri segmenti büyüyor?', 'Stokta ne zaman eksiklik yaşanır?' gibi kritik sorularınıza grafikli, anında yanıtlar alın. Muhasebe yazılımları ve Google Sheets ile doğrudan entegre çalışır.",
        roiData: { efficiency: "%100 Veri Görünürlüğü", timeSaving: "Haftalık 10 Saat" },
        tools: ["Pandas AI", "OpenAI Assistant API", "Google Sheets"],
        benefits: [
            "Karmaşık verileri net grafikler ve anlaşılır raporlara dönüştürün",
            "Gizli kârlı müşteri segmentlerini ve ürünleri keşfedin",
            "AI destekli stok tahminleme ile tedarik krizlerini önceden önleyin"
        ]
    },
    {
        id: "special-flow",
        name: "Özel İş Akışı Geliştirme",
        icon: Settings,
        isSpecial: true,
        description:
            "Mevcut iş süreçlerinizi analiz eden, darboğazları ortadan kaldıran ve işletmenize özel otomasyon altyapısı kuran terzi usulü AI çözümler.",
        details:
            "Her işletmenin ihtiyacı farklıdır. Mevcut iş akışlarınız ayrıntılı biçimde analiz edilerek zaman ve kaynak kaybı yaratan darboğazlar tespit edilir. Python scriptleri, AWS Lambda fonksiyonları ve n8n iş akışları kullanılarak mevcut CRM, ERP veya muhasebe sisteminizle entegre, tamamen özelleştirilmiş otomasyon mimarisi kurulur. Aylık 150+ saat manuel işi otomatize eden, işletmenizle birlikte büyüyen ölçeklenebilir çözümler.",
        roiData: { efficiency: "%95 Süreç Verimliliği", timeSaving: "Ayda 150+ Saat" },
        tools: ["n8n", "Python", "AWS Lambda", "Custom API"],
        benefits: [
            "Mevcut yazılım ve sistemlerinizle sorunsuz entegrasyon",
            "Her sektör ve iş modeline göre tamamen özelleştirilebilir yapı",
            "İşletmenizle birlikte büyüyen, sınırsız ölçeklenebilir otomasyon altyapısı"
        ]
    }
];

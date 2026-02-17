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
    title: string;
    description: string;
    details: string; // Used for main intro text
    workflowDetails: string; // Used for "İŞ AKIŞI DETAYLARI" box
    benefits: string[];
    tools: string[];
    icon: any;
    isSpecial?: boolean;
    gains: {
        efficiency: string;
        timeSaving: string;
    };
}

export const solutions: Solution[] = [
    {
        id: "ai-voice",
        title: "7/24 Sesli AI Asistan",
        icon: PhoneCall,
        description: "Telefonlarınıza bakan, randevu alan ve satış yapan yapay zeka sekreter.",
        details: "Müşterileriniz aradığında meşgule düşmez. AI asistanınız telefonu doğal bir dille açar, hizmetlerinizi anlatır ve randevuları doğrudan takviminize işler. SEO: İşletmeler için sesli yapay zeka ve otonom santral.",
        workflowDetails: "Müşterileriniz aradığında meşgule düşmez. AI asistanınız telefonu doğal bir dille açar, hizmetlerinizi anlatır ve randevuları doğrudan takviminize işler. SEO: İşletmeler için sesli yapay zeka ve otonom santral.",
        gains: { efficiency: "%95 Yanıt", timeSaving: "Günde 4 Saat" },
        tools: ["Vapi", "ElevenLabs", "n8n", "GPT-4o"],
        benefits: ["Kaçan çağrılara son", "Eş zamanlı 100+ görüşme", "Düşük maliyetli sekreterlik"]
    },
    {
        id: "ai-photo",
        title: "AI Ürün Fotoğraf Stüdyosu",
        icon: Camera,
        description: "Ürün fotoğraflarınızı saniyeler içinde profesyonel stüdyo çekimine dönüştürün.",
        details: "E-ticaret görsellerinizi alır, arka planı temizler ve ürününüzü en şık dekorların içine yerleştirir. Işık ve gölgeyi otomatik ayarlar. SEO: Yapay zeka ürün fotoğrafçılığı ve görsel otomasyonu.",
        workflowDetails: "E-ticaret görsellerinizi alır, arka planı temizler ve ürününüzü en şık dekorların içine yerleştirir. Işık ve gölgeyi otomatik ayarlar. SEO: Yapay zeka ürün fotoğrafçılığı ve görsel otomasyonu.",
        gains: { efficiency: "%90 Tasarruf", timeSaving: "Haftalık 15 Saat" },
        tools: ["Midjourney API", "ComfyUI", "Cloudinary"],
        benefits: ["Stüdyo masrafına son", "Sınırsız varyasyon", "Hızlı kampanya hazırlığı"]
    },
    {
        id: "sales-bot",
        title: "Satış Kapatan Akıllı Chatbot",
        icon: MessageSquare,
        description: "Sadece soru cevaplamaz, ürün önerir ve WhatsApp'ta satışı bitirir.",
        details: "Ürün kataloğunuza tamamen hakimdir. Müşterinin ihtiyacını analiz eder, doğru ürünü önerir ve ödeme linkini göndererek süreci tamamlar. SEO: Satış odaklı chatbot ve conversational AI.",
        workflowDetails: "Ürün kataloğunuza tamamen hakimdir. Müşterinin ihtiyacını analiz eder, doğru ürünü önerir ve ödeme linkini göndererek süreci tamamlar. SEO: Satış odaklı chatbot ve conversational AI.",
        gains: { efficiency: "%35 Dönüşüm", timeSaving: "Haftalık 30 Saat" },
        tools: ["n8n", "WhatsApp API", "Pinecone", "GPT-4o"],
        benefits: ["7/24 otonom satış", "Kişisel alışveriş asistanı", "Anında destek ve çözüm"]
    },
    {
        id: "youtube-fab",
        title: "YouTube İçerik Fabrikası",
        icon: Youtube,
        description: "Uzun videolarınızı viral Shorts, Reels ve Blog yazılarına dönüştürün.",
        details: "YouTube videonuzdan en can alıcı noktaları bulur, transkript çıkarır ve bunlardan onlarca kısa video ve SEO uyumlu blog içeriği üretir. SEO: Video repurposing ve otomatik içerik yönetimi.",
        workflowDetails: "YouTube videonuzdan en can alıcı noktaları bulur, transkript çıkarır ve bunlardan onlarca kısa video ve SEO uyumlu blog içeriği üretir. SEO: Video repurposing ve otomatik içerik yönetimi.",
        gains: { efficiency: "10x İçerik", timeSaving: "Haftalık 20 Saat" },
        tools: ["Whisper AI", "GPT-4o", "CapCut API", "Buffer"],
        benefits: ["Tek videodan 1 hafta içerik", "Otomatik blog yazımı", "Viral kanca (hook) üretimi"]
    },
    {
        id: "seo-blogger",
        title: "Otonom SEO & Blog Yazarı",
        icon: PenTool,
        description: "Sektörünüzle ilgili her gün Google'da üst sıralara çıkacak içerikler üretin.",
        details: "Trendleri izler, anahtar kelime araştırması yapar ve web sitenize her gün sektörel otoritenizi artıracak profesyonel makaleler yükler. SEO: Yapay zeka ile otomatik blog ve SEO içerik üretimi.",
        workflowDetails: "Trendleri izler, anahtar kelime araştırması yapar ve web sitenize her gün sektörel otoritenizi artıracak profesyonel makaleler yükler. SEO: Yapay zeka ile otomatik blog ve SEO içerik üretimi.",
        gains: { efficiency: "5x Trafik", timeSaving: "Aylık 40 Saat" },
        tools: ["Perplexity API", "n8n", "Next.js / WP API"],
        benefits: ["Google'da hızlı yükseliş", "Sıfır eforla içerik yönetimi", "Sektörel otorite inşası"]
    },
    {
        id: "market-radar",
        title: "Rakip İzleme & Pazar Radarı",
        icon: Search,
        description: "Rakipleriniz ne paylaşıyor, ne satıyor? Radarınıza anında takılsın.",
        details: "Rakip sosyal medya hesaplarını ve YouTube kanallarını izler. Yeni bir trend veya rakip hamlesi olduğunda size özet rapor sunar. SEO: Rakip analizi otomasyonu ve dijital pazar takibi.",
        workflowDetails: "Rakip sosyal medya hesaplarını ve YouTube kanallarını izler. Yeni bir trend veya rakip hamlesi olduğunda size özet rapor sunar. SEO: Rakip analizi otomasyonu ve dijital pazar takibi.",
        gains: { efficiency: "Anlık Takip", timeSaving: "Haftalık 12 Saat" },
        tools: ["Apify", "n8n", "OpenAI", "YouTube Data API"],
        benefits: ["Trendleri önce yakalayın", "Müşteri taleplerini görün", "Veriye dayalı pazarlama"]
    },
    {
        id: "data-analyst",
        title: "AI Veri Analisti & Raporlama",
        icon: BarChart3,
        description: "Karmaşık satış verilerinizi anlaşılır stratejik raporlara dönüştürün.",
        details: "Satış tablolarınızı okur; 'Hangi ürün daha karlı?', 'Nerede hata yapıyoruz?' gibi sorularınıza anında grafikli ve bilimsel yanıtlar verir. SEO: İşletmeler için yapay zeka veri analizi.",
        workflowDetails: "Satış tablolarınızı okur; 'Hangi ürün daha karlı?', 'Nerede hata yapıyoruz?' gibi sorularınıza anında grafikli ve bilimsel yanıtlar verir. SEO: İşletmeler için yapay zeka veri analizi.",
        gains: { efficiency: "%100 Görünürlük", timeSaving: "Haftalık 10 Saat" },
        tools: ["Pandas AI", "OpenAI Assistant API", "Google Sheets"],
        benefits: ["Net ve hızlı raporlar", "Gizli karlı kitle tespiti", "Akıllı stok tahminleme"]
    },
    {
        id: "special-flow",
        title: "Özel İş Akışı Geliştirme",
        icon: Settings,
        isSpecial: true,
        description: "İşletmenize özel, karmaşık süreçleri dijitalleştirin.",
        details: "Mevcut iş süreçleriniz analiz edilerek darboğazlar belirlenir. Python scriptleri, AWS Lambda ve n8n workflowları kullanılarak size özel, ölçeklenebilir yapılar kurulur. SEO: Özel yapay zeka iş akışları ve mikro-servis otomasyonu.",
        workflowDetails: "Mevcut iş süreçleriniz analiz edilerek darboğazlar belirlenir. Python scriptleri, AWS Lambda ve n8n workflowları kullanılarak size özel, ölçeklenebilir yapılar kurulur. SEO: Özel yapay zeka iş akışları ve mikro-servis otomasyonu.",
        gains: { efficiency: "%95 Verimlilik", timeSaving: "150+ Saat/Ay" },
        tools: ["n8n", "Python", "AWS Lambda", "Custom API"],
        benefits: ["Tamamen özelleştirilebilir", "Mevcut sistemle entegre", "Sınırsız ölçeklenebilirlik"]
    }
];

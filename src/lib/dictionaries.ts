export type Dictionary = {
    nav: {
        features: string;
        services: string;
        systems: string;
        roadmap: string;
        efficiency: string;
        contact: string;
        cta: string;
    };
    hero: {
        badge: string;
        title_prefix: string;
        title_highlight: string;
        subtitle: string;
        cta_primary: string;
        cta_secondary: string;
    };
    footer: {
        rights: string;
        terms: string;
        privacy: string;
        cookies: string;
        copyright: string;
    };
    future_operations: {
        title_prefix: string;
        title_highlight: string;
        description: string;
        badge: string;
        badge_text: string;
        features: {
            speed_title: string;
            speed_desc: string;
            precision_title: string;
            precision_desc: string;
            focus_title: string;
            focus_desc: string;
        };
    };
    digital_workforce: {
        title: string;
        title_highlight: string;
        description: string;
        cta: string;
        units: {
            sales: { title: string; features: string[] };
            operations: { title: string; features: string[] };
            ecommerce: { title: string; features: string[] };
            support: { title: string; features: string[] };
            social: { title: string; features: string[] };
            custom: { title: string; features: string[] };
        };
    };
    methodology: {
        title: string;
        title_highlight: string;
        description: string;
        steps: {
            discovery: { title: string; desc: string };
            design: { title: string; desc: string };
            optimization: { title: string; desc: string };
        };
    };
    scenarios: {
        title: string;
        title_highlight: string;
        labels: { problem: string; solution: string };
        cards: {
            ecommerce: { title: string; problem: string; solution: string; stats: { label: string; value: string }[] };
            b2b: { title: string; problem: string; solution: string; stats: { label: string; value: string }[] };
            support: { title: string; problem: string; solution: string; stats: { label: string; value: string }[] };
        };
        cta: string;
    };
    lead_form: {
        title_prefix: string;
        title_highlight: string;
        description: string;
        features: { title: string; desc: string }[];
        form: {
            title: string;
            name_label: string;
            name_placeholder: string;
            email_label: string;
            email_placeholder: string;
            phone_label: string;
            phone_placeholder: string;
            dept_label: string;
            dept_placeholder: string;
            dept_options: { management: string; sales: string; operations: string; technical: string; other: string };
            message_label: string;
            message_placeholder: string;
            submit_btn: string;
            disclaimer: string;
            success_title: string;
            success_msg: string;
            success_msg_highlight: string;
        };
    };
    value_gap: {
        badge: string;
        title_prefix: string;
        title_highlight: string;
        title_suffix: string;
        description: string;
        benefits: string[];
        calculator: {
            title: string;
            label_workload: string;
            label_role_type: string;
            roles: { operational: string; expert: string; manager: string };
            result_time: string;
            result_efficiency: string;
            result_value: string;
            disclaimer: string;
            unit_hours: string;
            unit_hours_weekly: string;
        };
    };
    solutions: Record<string, {
        name: string;
        description: string;
        details: string;
        roiData: { efficiency: string; timeSaving: string };
        benefits: string[];
        tools: string[];
    }>;
    solutions_misc: {
        efficiency_increase: string;
        time_saving: string;
        workflow_details: string;
        benefits: string;
        tools_technologies: string;
        cta_button: string;
    };
    solutions_header: {
        title_prefix: string;
        title_highlight: string;
        subtitle: string;
    };
    faq: {
        title_prefix: string;
        title_highlight: string;
        subtitle: string;
        items: { question: string; answer: string }[];
        bottom_note: string;
        bottom_note_link: string;
    };
};

export const dictionaries: Record<string, Dictionary> = {
    tr: {
        nav: {
            features: "Özellikler",
            services: "Hizmetler",
            systems: "Sistemler",
            roadmap: "Yol Haritası",
            efficiency: "Verimlilik",
            contact: "İletişim",
            cta: "İletişime Geç"
        },
        hero: {
            badge: "Yapay Zeka ile İş Gücü Devrimi",
            title_prefix: "Şimdi ekibinizi",
            title_highlight: "dijitalin gücüyle devleştirme zamanı.",
            subtitle: "Ekibinizi stratejik hedeflere odaklarken, dijital çalışanlarınızla verimlilik artışınızı izleyin. AgentWorks ile işletmeniz için 7/24 çalışan otonom dijital departmanlar kurun ve işletmenizin sınırlarını yeniden çizin.",
            cta_primary: "Hizmetler",
            cta_secondary: "Nasıl Çalışır?"
        },
        footer: {
            rights: "Tüm hakları saklıdır.",
            terms: "Kullanım Koşulları",
            privacy: "Gizlilik Politikası",
            cookies: "KVKK ve Çerez",
            copyright: "AgentWorks Inc."
        },
        future_operations: {
            title_prefix: "Geleceğin İşleyişine",
            title_highlight: "Hoş Geldiniz",
            description: "İş dünyasında yeni bir çağ başlıyor. Sınırları kaldıran, potansiyeli serbest bırakan bir çalışma modeli.",
            badge: "YENİ",
            badge_text: "Yeni Nesil Operasyonel Mükemmellik",
            features: {
                speed_title: "Dinamik Hız",
                speed_desc: "İş süreçlerinizde bekleme sürelerini ortadan kaldırın. Işık hızında veri işleme ve anlık tepki yeteneği ile zamanı lehinize çevirin.",
                precision_title: "Kusursuz Hassasiyet",
                precision_desc: "Her adımda tutarlı ve değişmez kalite. Dijital iş gücünüz, standartlarınızdan ödün vermeden 7/24 aynı mükemmellikte sonuç üretir.",
                focus_title: "Stratejik Odak",
                focus_desc: "Rutinlerin yükünü dijital omuzlara bırakın. Ekibinizin yaratıcı potansiyelini sadece vizyoner hedeflere ve büyümeye yönlendirin."
            }
        },
        digital_workforce: {
            title: "Uzman AI",
            title_highlight: "Birimlerimiz",
            description: "İşletmenizin ihtiyaçlarına göre özelleştirilmiş, her biri kendi alanında uzman dijital çalışanlar.",
            cta: "Sizin İçin En Doğru Birimi Seçelim",
            units: {
                sales: { title: "Satış & Büyüme Birimi", features: ["Nitelikli Lead Avcılığı", "7/24 Akıllı Randevu ve Takvim Yönetimi", "CRM Entegrasyonu ve Otonom Takip"] },
                operations: { title: "Operasyon & Süreç Birimi", features: ["Otomatik Veri Girişi ve ERP Senkronizasyonu", "E-Posta ve Belge (Fatura/Sözleşme) Analizi", "Departmanlar Arası Otonom İş Akışı"] },
                ecommerce: { title: "E-Ticaret Birimi", features: ["Akıllı Stok ve Dinamik Fiyat Optimizasyonu", "SEO Uyumlu Otonom Katalog Yönetimi", "Sipariş ve İade Süreç Takibi"] },
                support: { title: "Müşteri Deneyimi Birimi", features: ["Çok Dilli ve Kesintisiz Teknik Destek", "Kişiselleştirilmiş Ürün Tavsiye Sistemleri", "Akıllı Bilgi Bankası (Knowledge Base) Entegrasyonu"] },
                social: { title: "Sosyal Medya & Marka Birimi", features: ["Müşteri Yorum ve Duygu (Sentiment) Analizi", "Otomatik Görsel ve Reklam İçeriği Üretimi", "Anlık Performans ve Reklam Analiz Raporları"] },
                custom: { title: "Özel Çözüm Tasarımı", features: ["İşletmenize Özel İş Akışı Analizi", "Terzi Dikimi Ajan Geliştirme", "Sınırsız Entegrasyon ve Ölçeklenebilirlik"] }
            }
        },
        methodology: {
            title: "Otomasyon Sürecimiz:",
            title_highlight: "İlk Görüşmeden Canlı Sisteme",
            description: "İşletmenizin ihtiyaçlarını analiz edip, size özel otomasyon altyapısını kuruyor ve sürekli büyüyen bir sistem olarak işletiyoruz.",
            steps: {
                discovery: { title: "İş Süreci Analizi ve Otomasyon Keşfi", desc: "Mevcut iş akışlarınızı, yazılımlarınızı ve ekip süreçlerini derinlemesine inceliyoruz. Zaman ve para kaybettiren darboğazları tespit ediyor, size en yüksek ROI'yi getirecek otomasyon fırsatlarını önceliklendiriyoruz." },
                design: { title: "Özel Otomasyon Mimarisi Tasarımı", desc: "Mevcut yazılım ve sistemlerinizle entegre çalışan, işletmenize özel otomasyon mimarisini tasarlıyoruz. Her akış, gerçek iş hedeflerinize göre ölçeklenebilir ve güvenli biçimde kurgulanır." },
                optimization: { title: "Canlı İzleme ve Sürekli İyileştirme", desc: "Sisteminiz yayına alındıktan sonra işimiz bitmez. Otomasyon performansını 7/24 izliyor, daralan noktaları proaktif iyileştiriyor ve işletmeniz büyüdükçe sistemi birlikte ölçeklendiriyoruz." }
            }
        },
        scenarios: {
            title: "Operasyonel",
            title_highlight: "Dönüşüm Senaryoları",
            labels: { problem: "SORUN", solution: "ÇÖZÜM" },
            cards: {
                ecommerce: {
                    title: "E-Ticaret & Stok",
                    problem: "Karmaşık stok takibi ve manuel fiyatlandırma hataları.",
                    solution: "Yapay zeka tabanlı dinamik stok optimizasyonu ve rakip analizi.",
                    stats: [{ label: "Kar Artışı", value: "%35" }, { label: "Saat/Ay Tasarruf", value: "70+" }]
                },
                b2b: {
                    title: "B2B Satış",
                    problem: "Potansiyel müşteri kaçırma ve takipsiz kalan görüşmeler.",
                    solution: "7/24 aktif, çok kanallı lead yakalama ve otonom randevu sistemi.",
                    stats: [{ label: "Daha Fazla Randevu", value: "3 Kat" }, { label: "Kayıp Müşteri", value: "%0" }]
                },
                support: {
                    title: "7/24 Destek",
                    problem: "Yavaş yanıt süreleri ve dil bariyerine takılan global satışlar.",
                    solution: "100+ dilde anlık yanıt veren, empatik ve teknik AI asistanı.",
                    stats: [{ label: "Müşteri Memnuniyeti", value: "%95" }, { label: "Yanıt Süresi", value: "Anlık" }]
                }
            },
            cta: "Benzer Bir Sistem İstiyorum"
        },
        lead_form: {
            title_prefix: "İlk Adımı",
            title_highlight: "Beraber Atalım.",
            description: "İşletmenizin dijital dönüşüm potansiyelini keşfetmek için uzmanlarımızla 30 dakikalık ücretsiz bir strateji seansı planlayın.",
            features: [
                { title: "Süreç Analizi", desc: "Mevcut iş akışınızdaki darboğazların tespiti." },
                { title: "Özel Ajan Mimarisi", desc: "Size en uygun otonom sistemin kurgulanması." },
                { title: "Verimlilik Projeksiyonu", desc: "Yatırım geri dönüşü ve kazanç hesaplaması." }
            ],
            form: {
                title: "Ücretsiz Seans Randevusu",
                name_label: "Ad Soyad",
                name_placeholder: "Adınız Soyadınız",
                email_label: "E-posta",
                email_placeholder: "ornek@sirket.com",
                phone_label: "Telefon Numarası",
                phone_placeholder: "0 (5xx) xxx xx xx",
                dept_label: "Departman",
                dept_placeholder: "Seçiniz...",
                dept_options: { management: "Yönetim", sales: "Satış & Pazarlama", operations: "Operasyon", technical: "Teknik / IT", other: "Diğer" },
                message_label: "Mesajınız",
                message_placeholder: "Kısaca projenizden bahsedin...",
                submit_btn: "Ücretsiz Seans Randevusu Al",
                disclaimer: "Bu form gönderilerek Aydınlatma Metni okumuş ve onaylamış sayılırsınız.",
                success_title: "Teşekkürler!",
                success_msg: "Uzmanımız en kısa sürede sizinle",
                success_msg_highlight: "iletişime geçecek."
            }
        },
        value_gap: {
            badge: "Stratejik Dönüşüm",
            title_prefix: "Rutin işleri",
            title_highlight: "dijital iş gücünüze",
            title_suffix: "delege edin.",
            description: "AgentWorks, tekrarlayan operasyonları otonom ajanlara devrederek ekibinize stratejik büyüme için alan açar.",
            benefits: ["Rutinlerden arınmış bir çalışma kültürü.", "Stratejik projelere ayrılan taze kapasite.", "Ölçeklenebilir dijital altyapı."],
            calculator: {
                title: "Verimlilik Hesaplayıcı",
                label_workload: "Haftalık Tekrarlayan İş Yükü",
                label_role_type: "Operasyon Tipi",
                roles: { operational: "Operasyonel Destek", expert: "Uzman", manager: "Yönetici" },
                result_time: "Yıllık Geri Kazanılan Zaman",
                result_efficiency: "Ekip Verimlilik Artışı",
                result_value: "Tahmini Operasyonel Değer Kazanımı",
                disclaimer: "*Hesaplamalar seçilen profilin piyasa ortalamaları ve yıllık 52 hafta baz alınarak yapılmıştır.",
                unit_hours: "saat",
                unit_hours_weekly: "Saat / Hafta"
            }
        },
        solutions: {
            "ai-voice": {
                name: "7/24 Sesli AI Asistan",
                description: "Telefon çağrılarınızı yanıtlayan, randevu alan ve satış kapatan yapay zeka santral çözümü.",
                details: "Müşteriniz aradığında meşgul sinyali almaz. Yapay zeka telefon asistanınız doğal Türkçeyle sohbet eder, hizmetlerinizi detaylı anlatır ve randevuları Google Calendar veya kendi takviminize otomatik işler. Küçük işletmelerden büyük şirketlere kadar sekreter maliyetini sıfıra indiren, eş zamanlı 100+ çağrıyı karşılayan akıllı santral sistemi.",
                roiData: { efficiency: "%95 Yanıt Oranı", timeSaving: "Günde 4 Saat" },
                tools: ["Vapi", "ElevenLabs", "n8n", "GPT-4o"],
                benefits: ["Kaçan çağrı ve kayıp müşteriye son verin", "Eş zamanlı 100+ görüşmeyi tek sistemle karşılayın", "Tam zamanlı sekreter maliyetinin %10'a sahip olun"]
            },
            "ai-photo": {
                name: "AI Ürün Fotoğraf Stüdyosu",
                description: "Akıllı telefonla çektiğiniz ürün fotoğraflarını saniyeler içinde profesyonel e-ticaret görseliyle dönüştürün.",
                details: "E-ticaret ve sosyal medya için stüdyo kalitesinde ürün fotoğrafı artık dakikalar içinde hazır. Yüklediğiniz ham görselin arka planını otomatik temizler, ürününüzü trend dekor ve sahnelere yerleştirir, ışık ile gölgeyi yapay zeka ile optimize eder. Trendyol, Hepsiburada ve Amazon listeleri için dönüşüm oranını artıran görseller üretin.",
                roiData: { efficiency: "%90 Maliyet Tasarrufu", timeSaving: "Haftalık 15 Saat" },
                tools: ["Midjourney API", "ComfyUI", "Cloudinary"],
                benefits: ["Stüdyo kiralama ve fotoğrafçı masrafını sıfırlayın", "Sınırsız renk, dekor ve sahne varyasyonu üretin", "Kampanya görsellerini saatler değil dakikalar içinde hazırlayın"]
            },
            "sales-bot": {
                name: "Satış Kapatan Akıllı Chatbot",
                description: "WhatsApp ve web sitenizde 7/24 ürün öneren, soruları yanıtlayan ve ödeme linkiyle satışı kapatan AI chatbot.",
                details: "Ürün kataloğunuza tam hakimiyet sağlayan AI satış botu, müşteri ihtiyacını analiz ederek kişiselleştirilmiş ürün önerir ve ödeme bağlantısını göndererek süreci otomatik tamamlar. WhatsApp Business API entegrasyonuyla müşteri başına ortalama %35 daha yüksek dönüşüm oranı elde edin. İnsan temsilcisi olmadan günde 500+ satış görüşmesi yönetin.",
                roiData: { efficiency: "%35 Dönüşüm Artışı", timeSaving: "Haftalık 30 Saat" },
                tools: ["n8n", "WhatsApp API", "Pinecone", "GPT-4o"],
                benefits: ["7/24 satış yapan, hiç uyumayan dijital satış temsilcisi", "Her müşteriye özel ürün önerisiyle sepet değerini artırın", "Anlık destek ve çözümle müşteri memnuniyetini zirveye taşıyın"]
            },
            "youtube-fab": {
                name: "YouTube İçerik Fabrikası",
                description: "Uzun YouTube videolarınızdan otomatik olarak viral Shorts, Instagram Reels ve SEO blog yazıları üretin.",
                details: "Video repurposing otomasyonu ile tek bir YouTube videosu onlarca platforma yayılan içeriğe dönüşür. Yapay zeka videonuzdaki en güçlü anları tespit eder, altyazıyı çıkarır ve bunlardan viral kanca (hook) içeren kısa videolar ile Google'da sıralanan blog makaleleri üretir. İçerik oluşturucular ve marka hesapları için haftalık içerik programını tek seferlik video kaydıyla doldurun.",
                roiData: { efficiency: "1 Videodan 10x İçerik", timeSaving: "Haftalık 20 Saat" },
                tools: ["Whisper AI", "GPT-4o", "CapCut API", "Buffer"],
                benefits: ["Tek videodan 1 haftalık içerik takvimini doldurun", "SEO uyumlu blog yazılarını otomatik yayınlayın", "Viral Shorts ve Reels için kanca (hook) üretimini otomatikleştirin"]
            },
            "seo-blogger": {
                name: "Otonom SEO & Blog Yazarı",
                description: "Sektörünüze ait anahtar kelimeleri araştıran, her gün Google'ın ilk sayfasına hedefleyen blog makaleleri üreten AI içerik sistemi.",
                details: "Organik trafik büyütmenin en düşük maliyetli yolu olan içerik SEO'sunu tamamen otomatize edin. Sistem günlük trendleri ve düşük rekabetli anahtar kelimeleri tarar, sektörel otoritenizi artıracak uzun-form makaleler yazar ve bunları web sitenize ya da WordPress'e otomatik yükler. E-ticaret siteleri, hizmet işletmeleri ve ajanslar için ayda 40 saatlik içerik çalışmasını sıfır çabayla yönetin.",
                roiData: { efficiency: "5x Organik Trafik", timeSaving: "Aylık 40 Saat" },
                tools: ["Perplexity API", "n8n", "Next.js / WP API"],
                benefits: ["Düşük rekabetli anahtar kelimelerle Google'da hızla üst sıralara çıkın", "Sıfır eforla günlük içerik yönetimi ve otomatik yayınlama", "Sektörünüzde otorite ve güven inşa edin"]
            },
            "market-radar": {
                name: "Rakip İzleme & Pazar Radarı",
                description: "Rakiplerinizin sosyal medya, fiyat ve kampanya hamlelerini anlık izleyen, size özet rapor sunan AI pazar takip sistemi.",
                details: "Dijital rakip analizi otomasyonu ile sektörünüzdeki her hareketi ilk öğrenen siz olun. Sistem rakip sosyal medya hesaplarını, YouTube kanallarını ve ürün fiyatlarını 7/24 tarar; yeni bir trend veya rakip kampanyası tespit ettiğinde sizi anında bildirir ve hazır özet rapor sunar. Pazarlama ekipleri için veri odaklı karar almayı haftalar değil dakikalar içinde mümkün kılar.",
                roiData: { efficiency: "Anlık Pazar Takibi", timeSaving: "Haftalık 12 Saat" },
                tools: ["Apify", "n8n", "OpenAI", "YouTube Data API"],
                benefits: ["Sektör trendlerini rakiplerinizden önce yakalayın", "Müşteri taleplerini ve şikayetlerini gerçek zamanlı görün", "Veriye dayalı fiyat ve kampanya stratejisi oluşturun"]
            },
            "data-analyst": {
                name: "AI Veri Analisti & Raporlama",
                description: "Satış tablolarınızı, e-ticaret verilerinizi ve müşteri kayıtlarınızı otomatik analiz eden, aksiyon odaklı raporlar üreten yapay zeka sistemi.",
                details: "İşletmeniz için yapay zeka destekli veri analizi ile karmaşık Excel tablolarını ve satış raporlarını saniyeler içinde anlaşılır içgörülere dönüştürün. 'Hangi ürün en kârlı?', 'Hangi müşteri segmenti büyüyor?', 'Stokta ne zaman eksiklik yaşanır?' gibi kritik sorularınıza grafikli, anında yanıtlar alın. Muhasebe yazılımları ve Google Sheets ile doğrudan entegre çalışır.",
                roiData: { efficiency: "%100 Veri Görünürlüğü", timeSaving: "Haftalık 10 Saat" },
                tools: ["Pandas AI", "OpenAI Assistant API", "Google Sheets"],
                benefits: ["Karmaşık verileri net grafikler ve anlaşılır raporlara dönüştürün", "Gizli kârlı müşteri segmentlerini ve ürünleri keşfedin", "AI destekli stok tahminleme ile tedarik krizlerini önceden önleyin"]
            },
            "special-flow": {
                name: "Özel İş Akışı Geliştirme",
                description: "Mevcut iş süreçlerinizi analiz eden, darboğazları ortadan kaldıran ve işletmenize özel otomasyon altyapısı kuran terzi usulü AI çözümler.",
                details: "Her işletmenin ihtiyacı farklıdır. Mevcut iş akışlarınız ayrıntılı biçimde analiz edilerek zaman ve kaynak kaybı yaratan darboğazlar tespit edilir. Python scriptleri, AWS Lambda fonksiyonları ve n8n iş akışları kullanılarak mevcut CRM, ERP veya muhasebe sisteminizle entegre, tamamen özelleştirilmiş otomasyon mimarisi kurulur. Aylık 150+ saat manuel işi otomatize eden, işletmenizle birlikte büyüyen ölçeklenebilir çözümler.",
                roiData: { efficiency: "%95 Süreç Verimliliği", timeSaving: "Ayda 150+ Saat" },
                tools: ["n8n", "Python", "AWS Lambda", "Custom API"],
                benefits: ["Mevcut yazılım ve sistemlerinizle sorunsuz entegrasyon", "Her sektör ve iş modeline göre tamamen özelleştirilebilir yapı", "İşletmenizle birlikte büyüyen, sınırsız ölçeklenebilir otomasyon altyapısı"]
            }
        },
        solutions_misc: {
            efficiency_increase: "Verimlilik Artışı",
            time_saving: "Zaman Tasarrufu",
            workflow_details: "İŞ AKIŞI DETAYLARI",
            benefits: "Avantajlar",
            tools_technologies: "Araçlar & Teknolojiler",
            cta_button: "Bu Sistemi İstiyorum"
        },
        solutions_header: {
            title_prefix: "Popüler 7 Yapay Zeka",
            title_highlight: "Otomasyonumuz",
            subtitle: "İş süreçlerinizi yapay zeka ve otomasyon ile dönüştüren güçlü çözümlerimiz."
        },
        faq: {
            title_prefix: "Aklınıza Takılanlar:",
            title_highlight: "Otonom Geleceğe Geçiş",
            subtitle: "Dijital dönüşüm yolculuğunuzda en çok merak edilen noktaları bir araya getirdik.",
            items: [
                {
                    question: "Yapay zeka çözümleri sadece büyük ölçekli şirketler için mi?",
                    answer: "Kesinlikle hayır. Biz, operasyonel yükünü ekibini büyütmeden yönetmek isteyen vizyoner işletmeler için buradayız. Amacımız, en gelişmiş teknolojileri her ölçekteki işletme için ulaşılabilir ve karlı kılmaktır."
                },
                {
                    question: "Sistem kurulduktan sonra teknik bir ekibe ihtiyacım olacak mı?",
                    answer: "Hayır. Biz \"tak-çalıştır\" mantığında otonom sistemler kuruyoruz. Tüm teknik karmaşayı biz yönetiyoruz; size sadece dijital çalışanlarınızın verimlilik raporlarını izlemek kalıyor."
                },
                {
                    question: "Dijital çalışanlar mevcut yazılımlarımızla (CRM, Muhasebe vb.) konuşabilir mi?",
                    answer: "Evet. Kullandığınız araçlar ne olursa olsun (n8n, Make veya özel API'ler aracılığıyla) sistemlerinizi birbirine bağlıyor ve verinin kesintisiz akmasını sağlıyoruz."
                },
                {
                    question: "Yatırım maliyeti nedir? Küçük bir adımla başlayabilir miyim?",
                    answer: "AgentWorks modüler bir yapı sunar. Tek bir \"Dijital Departman\" ile başlayıp verimliliği bizzat tecrübe ettikten sonra yapıyı ölçeklendirebilirsiniz. Yatırımın geri dönüşünü (ROI) haftalar içinde görmeniz bizim temel önceliğimizdir."
                },
                {
                    question: "Verilerimiz ve müşteri bilgilerimiz güvende mi?",
                    answer: "Güvenlik bizim için bir opsiyon değil, standarttır. Tüm sistemlerimiz kurumsal düzeyde şifreleme ve veri koruma protokolleriyle çalışır. Verileriniz sadece sizin kontrolünüzde kalır."
                }
            ],
            bottom_note: "Başka bir sorunuz mu var? Aşağıdaki formdan bize ulaşın,",
            bottom_note_link: "24 saat içinde yanıtlayalım."
        }
    },
    en: {
        nav: {
            features: "Features",
            services: "Services",
            systems: "Systems",
            roadmap: "Roadmap",
            efficiency: "Efficiency",
            contact: "Contact",
            cta: "Get in Touch"
        },
        hero: {
            badge: "AI Workforce Revolution",
            title_prefix: "The New Digital",
            title_highlight: "Backbone of Business",
            subtitle: "Break free from routine operations, maximize efficiency. AgentWorks builds autonomous digital departments working 24/7 for you.",
            cta_primary: "Services",
            cta_secondary: "How It Works?"
        },
        footer: {
            rights: "All rights reserved.",
            terms: "Terms of Use",
            privacy: "Privacy Policy",
            cookies: "Cookies & GDPR",
            copyright: "AgentWorks Inc."
        },
        future_operations: {
            title_prefix: "Welcome to the",
            title_highlight: "Future of Operations",
            description: "A new era in the business world begins. A working model that removes boundaries and unleashes potential.",
            badge: "NEW",
            badge_text: "Next Generation Operational Excellence",
            features: {
                speed_title: "Dynamic Speed",
                speed_desc: "Eliminate waiting times in your business processes. Turn time in your favor with light-speed data processing and instant response capability.",
                precision_title: "Flawless Precision",
                precision_desc: "Consistent and unchanging quality at every step. Your digital workforce produces results with the same perfection 24/7 without compromising your standards.",
                focus_title: "Strategic Focus",
                focus_desc: "Leave the burden of routines to digital shoulders. Direct your team's creative potential only to visionary goals and growth."
            }
        },
        digital_workforce: {
            title: "Expert AI",
            title_highlight: "Units",
            description: "Specialized digital employees tailored to your business needs, each an expert in their field.",
            cta: "Let's Choose the Right Unit for You",
            units: {
                sales: { title: "Sales & Growth Unit", features: ["Qualified Lead Hunting", "24/7 Smart Appointment & Calendar Management", "CRM Integration & Autonomous Tracking"] },
                operations: { title: "Operations & Process Unit", features: ["Automated Data Entry & ERP Synchronization", "Email & Document (Invoice/Contract) Analysis", "Inter-departmental Autonomous Workflow"] },
                ecommerce: { title: "E-Commerce Unit", features: ["Smart Stock & Dynamic Price Optimization", "SEO-Compliant Autonomous Catalog Management", "Order & Return Process Tracking"] },
                support: { title: "Customer Experience Unit", features: ["Multilingual & Uninterrupted Technical Support", "Personalized Product Recommendation Systems", "Smart Knowledge Base Integration"] },
                social: { title: "Social Media & Brand Unit", features: ["Customer Comment & Sentiment Analysis", "Automated Visual & Ad Content Generation", "Instant Performance & Ad Analysis Reports"] },
                custom: { title: "Custom Solution Design", features: ["Business-Specific Workflow Analysis", "Tailor-Made Agent Development", "Unlimited Integration & Scalability"] }
            }
        },
        methodology: {
            title: "Our Automation Process:",
            title_highlight: "From First Meeting to Live System",
            description: "We analyze your business needs, build your custom automation infrastructure, and operate it as a constantly growing system.",
            steps: {
                discovery: { title: "Business Process Analysis & Discovery", desc: "We examine your current workflows, software, and team processes in depth. We identify bottlenecks that waste time and money, and prioritize automation opportunities that will bring you the highest ROI." },
                design: { title: "Custom Automation Architecture Design", desc: "We design a business-specific automation architecture that works integrated with your existing software and systems. Every flow is built to be scalable and secure according to your real business goals." },
                optimization: { title: "Live Monitoring & Continuous Improvement", desc: "Our job doesn't end after your system goes live. We monitor automation performance 24/7, proactively improve bottlenecks, and scale the system together as your business grows." }
            }
        },
        scenarios: {
            title: "Operational",
            title_highlight: "Transformation Scenarios",
            labels: { problem: "PROBLEM", solution: "SOLUTION" },
            cards: {
                ecommerce: {
                    title: "E-Commerce & Stock",
                    problem: "Complex stock tracking and manual pricing errors.",
                    solution: "AI-based dynamic stock optimization and competitor analysis.",
                    stats: [{ label: "Profit Increase", value: "35%" }, { label: "Hours/Mo Saved", value: "70+" }]
                },
                b2b: {
                    title: "B2B Sales",
                    problem: "Missed potential clients and untracked meetings.",
                    solution: "24/7 active, multi-channel lead capture and autonomous appointment system.",
                    stats: [{ label: "More Appointments", value: "3x" }, { label: "Lost Clients", value: "0%" }]
                },
                support: {
                    title: "24/7 Support",
                    problem: "Slow response times and language barriers in global sales.",
                    solution: "Instant response in 100+ languages, empathetic and technical AI assistant.",
                    stats: [{ label: "Customer Satisfaction", value: "95%" }, { label: "Response Time", value: "Instant" }]
                }
            },
            cta: "I Want a Similar System"
        },
        lead_form: {
            title_prefix: "Let's Take the First Step",
            title_highlight: "Together.",
            description: "Schedule a free 30-minute strategy session with our experts to discover your business's digital transformation potential.",
            features: [
                { title: "Process Analysis", desc: "Identifying bottlenecks in your current workflow." },
                { title: "Custom Agent Architecture", desc: "Designing the most suitable autonomous system for you." },
                { title: "Efficiency Projection", desc: "ROI and profit calculation." }
            ],
            form: {
                title: "Free Strategy Session",
                name_label: "Full Name",
                name_placeholder: "Your Full Name",
                email_label: "Email",
                email_placeholder: "example@company.com",
                phone_label: "Phone Number",
                phone_placeholder: "+1 (5xx) xxx xx xx",
                dept_label: "Department",
                dept_placeholder: "Select...",
                dept_options: { management: "Management", sales: "Sales & Marketing", operations: "Operations", technical: "Technical / IT", other: "Other" },
                message_label: "Your Message",
                message_placeholder: "Briefly mention your project...",
                submit_btn: "Book Free Strategy Session",
                disclaimer: "By sending this form, you are deemed to have read and approved the Clarification Text.",
                success_title: "Thank You!",
                success_msg: "Our expert will contact you",
                success_msg_highlight: "as soon as possible."
            }
        },
        value_gap: {
            badge: "Strategic Transformation",
            title_prefix: "Delegate routine work",
            title_highlight: "to your digital workforce",
            title_suffix: ".",
            description: "AgentWorks delegates repetitive operations to autonomous agents, opening up space for your team for strategic growth.",
            benefits: ["A work culture free from routines.", "Fresh capacity for strategic projects.", "Scalable digital infrastructure."],
            calculator: {
                title: "Efficiency Calculator",
                label_workload: "Weekly Repetitive Workload",
                label_role_type: "Operation Type",
                roles: { operational: "Operational Support", expert: "Expert", manager: "Manager" },
                result_time: "Annual Time Recovered",
                result_efficiency: "Team Efficiency Increase",
                result_value: "Estimated Operational Value Gain",
                disclaimer: "*Calculations are based on market averages for the selected profile and 52 weeks per year.",
                unit_hours: "hours",
                unit_hours_weekly: "Hours / Week"
            }
        },
        solutions: {
            "ai-voice": {
                name: "24/7 AI Voice Assistant",
                description: "AI switchboard solution answering calls, booking appointments, and closing sales.",
                details: "Your customers never get a busy signal. Your AI phone assistant chats in natural language, explains your services in detail, and automatically processes appointments into Google Calendar or your own schedule. An intelligent switchboard system that reduces secretary costs to zero and handles 100+ simultaneous calls for businesses of all sizes.",
                roiData: { efficiency: "95% Response Rate", timeSaving: "4 Hours/Day" },
                tools: ["Vapi", "ElevenLabs", "n8n", "GPT-4o"],
                benefits: ["End missed calls and lost customers", "Handle 100+ simultaneous calls with a single system", "Get it for 10% of a full-time secretary's cost"]
            },
            "ai-photo": {
                name: "AI Product Photo Studio",
                description: "Transform product photos taken with a smartphone into professional e-commerce visuals in seconds.",
                details: "Studio-quality product photos for e-commerce and social media are now ready in minutes. It automatically cleans the background of your raw uploaded image, places your product in trendy decors and scenes, and optimizes light and shadow with AI. Generate visuals that increase conversion rates for Amazon, Etsy, and Shopify listings.",
                roiData: { efficiency: "90% Cost Saving", timeSaving: "15 Hours/Week" },
                tools: ["Midjourney API", "ComfyUI", "Cloudinary"],
                benefits: ["Eliminate studio rental and photographer costs", "Generate unlimited color, decor, and scene variations", "Prepare campaign visuals in minutes, not hours"]
            },
            "sales-bot": {
                name: "Sales Closing AI Chatbot",
                description: "AI chatbot recommending products, answering questions, and closing sales with payment links 24/7 on WhatsApp and your website.",
                details: "Gaining full command of your product catalog, the AI sales bot analyzes customer needs to recommend personalized products and sends payment links to complete the process automatically. Achieve an average of 35% higher conversion rate per customer with WhatsApp Business API integration. Manage 500+ sales conversations daily without human agents.",
                roiData: { efficiency: "35% Conversion Increase", timeSaving: "30 Hours/Week" },
                tools: ["n8n", "WhatsApp API", "Pinecone", "GPT-4o"],
                benefits: ["A digital sales representative that sells 24/7 and never sleeps", "Increase basket value with personalized product recommendations", "Maximize customer satisfaction with instant support and resolution"]
            },
            "youtube-fab": {
                name: "YouTube Content Factory",
                description: "Automatically generate viral Shorts, Instagram Reels, and SEO blog posts from your long YouTube videos.",
                details: "With video repurposing automation, a single YouTube video transforms into content spread across dozens of platforms. AI identifies the strongest moments in your video, extracts subtitles, and produces short videos with viral hooks and blog articles ranking on Google. Fill your weekly content schedule with a single video recording for creators and brand accounts.",
                roiData: { efficiency: "10x Content from 1 Video", timeSaving: "20 Hours/Week" },
                tools: ["Whisper AI", "GPT-4o", "CapCut API", "Buffer"],
                benefits: ["Fill a 1-week content calendar from a single video", "Automatically publish SEO-compatible blog posts", "Automate hook generation for viral Shorts and Reels"]
            },
            "seo-blogger": {
                name: "Autonomous SEO & Blog Writer",
                description: "AI content system researching keywords for your industry and producing blog articles targeting Google's first page every day.",
                details: "Fully automate content SEO, the lowest cost way to grow organic traffic. The system scans daily trends and low-competition keywords, writes long-form articles to increase your sectoral authority, and automatically uploads them to your website or WordPress. Manage 40 hours of content work per month with zero effort for e-commerce sites, service businesses, and agencies.",
                roiData: { efficiency: "5x Organic Traffic", timeSaving: "40 Hours/Month" },
                tools: ["Perplexity API", "n8n", "Next.js / WP API"],
                benefits: ["Rapidly rank high on Google with low-competition keywords", "Zero-effort daily content management and automatic publishing", "Build authority and trust in your industry"]
            },
            "market-radar": {
                name: "Competitor Watch & Market Radar",
                description: "AI market tracking system instantly monitoring your competitors' social media, price, and campaign moves and presenting you with summary reports.",
                details: "Be the first to know every move in your industry with digital competitor analysis automation. The system scans competitor social media accounts, YouTube channels, and product prices 24/7; instantly notifies you when it detects a new trend or competitor campaign and presents a ready summary report. Enables data-driven decision making for marketing teams in minutes, not weeks.",
                roiData: { efficiency: "Instant Market Tracking", timeSaving: "12 Hours/Week" },
                tools: ["Apify", "n8n", "OpenAI", "YouTube Data API"],
                benefits: ["Catch industry trends before your competitors", "See customer demands and complaints in real-time", "Create data-driven price and campaign strategies"]
            },
            "data-analyst": {
                name: "AI Data Analyst & Reporting",
                description: "AI system automatically analyzing your sales tables, e-commerce data, and customer records to produce action-oriented reports.",
                details: "Transform complex Excel tables and sales reports into understandable insights in seconds with AI-powered data analysis for your business. Get instant graphical answers to critical questions like 'Which product is most profitable?', 'Which customer segment is growing?', 'When will stock shortages occur?'. Works directly integrated with accounting software and Google Sheets.",
                roiData: { efficiency: "100% Data Visibility", timeSaving: "10 Hours/Week" },
                tools: ["Pandas AI", "OpenAI Assistant API", "Google Sheets"],
                benefits: ["Transform complex data into clear charts and understandable reports", "Discover hidden profitable customer segments and products", "Prevent supply crises in advance with AI-backed stock forecasting"]
            },
            "special-flow": {
                name: "Custom Workflow Development",
                description: "Tailor-made AI solutions analyzing current business processes, eliminating bottlenecks, and building automation infrastructure specific to your business.",
                details: "Every business has different needs. Your current workflows are analyzed in detail to identify bottlenecks causing time and resource loss. A fully customized automation architecture integrated with your existing CRM, ERP, or accounting system is built using Python scripts, AWS Lambda functions, and n8n workflows. Scalable solutions that automate 150+ hours of manual work monthly and grow with your business.",
                roiData: { efficiency: "95% Process Efficiency", timeSaving: "150+ Hours/Month" },
                tools: ["n8n", "Python", "AWS Lambda", "Custom API"],
                benefits: ["Seamless integration with your existing software and systems", "Fully customizable structure for every sector and business model", "Unlimited scalable automation infrastructure growing with your business"]
            }
        },
        solutions_misc: {
            efficiency_increase: "Efficiency Increase",
            time_saving: "Time Saving",
            workflow_details: "WORKFLOW DETAILS",
            benefits: "Benefits",
            tools_technologies: "Tools & Technologies",
            cta_button: "I Want This System"
        },
        solutions_header: {
            title_prefix: "Popular 7 AI",
            title_highlight: "Automations",
            subtitle: "Our powerful solutions that transform your business processes with AI and automation."
        },
        faq: {
            title_prefix: "Frequently Asked Questions:",
            title_highlight: "Transition to the Autonomous Future",
            subtitle: "We brought together the most curious points in your digital transformation journey.",
            items: [
                {
                    question: "Are AI solutions only for large-scale companies?",
                    answer: "Absolutely not. We are here for visionary businesses that want to manage their operational load without expanding their team. Our goal is to make the most advanced technologies accessible and profitable for businesses of all sizes."
                },
                {
                    question: "Will I need a technical team after the system is installed?",
                    answer: "No. We build autonomous systems with a \"plug-and-play\" logic. We manage all the technical complexity; all you have to do is monitor the efficiency reports of your digital employees."
                },
                {
                    question: "Can digital employees talk to our existing software (CRM, Accounting, etc.)?",
                    answer: "Yes. Regardless of the tools you use (via n8n, Make, or custom APIs), we connect your systems and ensure seamless data flow."
                },
                {
                    question: "What is the investment cost? Can I start with a small step?",
                    answer: "AgentWorks offers a modular structure. You can start with a single \"Digital Department\" and scale the structure after experiencing the efficiency firsthand. Seeing the return on investment (ROI) within weeks is our main priority."
                },
                {
                    question: "Are our data and customer information secure?",
                    answer: "Security is not an option for us, it's a standard. All our systems operate with enterprise-level encryption and data protection protocols. Your data remains only under your control."
                }
            ],
            bottom_note: "Do you have another question? Contact us via the form below, and",
            bottom_note_link: "we will respond within 24 hours."
        }
    },
    de: {
        nav: {
            features: "Funktionen",
            services: "Dienstleistungen",
            systems: "Systeme",
            roadmap: "Fahrplan",
            efficiency: "Effizienz",
            contact: "Kontakt",
            cta: "Kontaktieren Sie uns"
        },
        hero: {
            badge: "KI-Arbeitskraft Revolution",
            title_prefix: "Das Neue Digitale",
            title_highlight: "Rückgrat des Geschäfts",
            subtitle: "Befreien Sie sich von Routineaufgaben, maximieren Sie die Effizienz. AgentWorks baut autonome digitale Abteilungen, die 24/7 für Sie arbeiten.",
            cta_primary: "Dienstleistungen",
            cta_secondary: "Wie es funktioniert?"
        },
        footer: {
            rights: "Alle Rechte vorbehalten.",
            terms: "Nutzungsbedingungen",
            privacy: "Datenschutzrichtlinie",
            cookies: "Cookies & DSGVO",
            copyright: "AgentWorks Inc."
        },
        future_operations: {
            title_prefix: "Willkommen in der",
            title_highlight: "Zukunft des Betriebs",
            description: "Eine neue Ära in der Geschäftswelt beginnt. Ein Arbeitsmodell, das Grenzen beseitigt und Potenziale freisetzt.",
            badge: "NEU",
            badge_text: "Operative Exzellenz der nächsten Generation",
            features: {
                speed_title: "Dynamische Geschwindigkeit",
                speed_desc: "Eliminieren Sie Wartezeiten in Ihren Geschäftsprozessen. Nutzen Sie die Zeit zu Ihrem Vorteil mit blitzschneller Datenverarbeitung und sofortiger Reaktionsfähigkeit.",
                precision_title: "Makellose Präzision",
                precision_desc: "Konsistente und unveränderliche Qualität bei jedem Schritt. Ihre digitale Belegschaft liefert rund um die Uhr Ergebnisse mit der gleichen Perfektion, ohne Ihre Standards zu beeinträchtigen.",
                focus_title: "Strategischer Fokus",
                focus_desc: "Überlassen Sie die Last der Routinen den digitalen Schultern. Richten Sie das kreative Potenzial Ihres Teams nur auf visionäre Ziele und Wachstum."
            }
        },
        digital_workforce: {
            title: "Expert AI",
            title_highlight: "Einheiten",
            description: "Spezialisierte digitale Mitarbeiter, zugeschnitten auf Ihre Geschäftsanforderungen, jeder ein Experte auf seinem Gebiet.",
            cta: "Lassen Sie uns die richtige Einheit für Sie wählen",
            units: {
                sales: { title: "Verkauf & Wachstum", features: ["Qualifizierte Lead-Jagd", "24/7 Intelligentes Termin- & Kalendermanagement", "CRM-Integration & Autonome Verfolgung"] },
                operations: { title: "Betrieb & Prozesse", features: ["Automatisierte Dateneingabe & ERP-Synchronisation", "E-Mail & Dokumenten (Rechnungen/Verträge) Analyse", "Abteilungsübergreifender autonomer Workflow"] },
                ecommerce: { title: "E-Commerce", features: ["Intelligente Bestands- & dynamische Preisoptimierung", "SEO-konformes autonomes Katalogmanagement", "Bestell- & Rückgabeprozessverfolgung"] },
                support: { title: "Kundenerfahrung", features: ["Mehrsprachiger & unterbrechungsfreier technischer Support", "Personalisierte Produktempfehlungssysteme", "Intelligente Wissensdatenbank-Integration"] },
                social: { title: "Social Media & Marke", features: ["Kundenkommentar- & Sentiment-Analyse", "Automatisierte Bild- & Werbeinhalterstellung", "Sofortige Leistungs- & Werbeanalyseberichte"] },
                custom: { title: "Individuelles Design", features: ["Geschäftsspezifische Workflow-Analyse", "Maßgeschneiderte Agentenentwicklung", "Unbegrenzte Integration & Skalierbarkeit"] }
            }
        },
        methodology: {
            title: "Unser Automatisierungsprozess:",
            title_highlight: "Vom ersten Gespräch bis zum Live-System",
            description: "Wir analysieren Ihre Geschäftsanforderungen, bauen Ihre individuelle Automatisierungsinfrastruktur und betreiben sie als ständig wachsendes System.",
            steps: {
                discovery: { title: "Geschäftsprozessanalyse und Entdeckung", desc: "Wir untersuchen Ihre aktuellen Arbeitsabläufe, Software und Teamprozesse eingehend. Wir identifizieren Engpässe, die Zeit und Geld kosten, und priorisieren Automatisierungschancen, die Ihnen den höchsten ROI bringen." },
                design: { title: "Design der individuellen Automatisierungsarchitektur", desc: "Wir entwerfen eine unternehmensspezifische Automatisierungsarchitektur, die integriert mit Ihrer vorhandenen Software und Systemen arbeitet. Jeder Ablauf wird skalierbar und sicher gemäß Ihren echten Geschäftszielen aufgebaut." },
                optimization: { title: "Live-Überwachung und kontinuierliche Verbesserung", desc: "Unsere Arbeit endet nicht, nachdem Ihr System live gegangen ist. Wir überwachen die Automatisierungsleistung rund um die Uhr, verbessern Engpässe proaktiv und skalieren das System gemeinsam, während Ihr Unternehmen wächst." }
            }
        },
        scenarios: {
            title: "Operationale",
            title_highlight: "Transformationsszenarien",
            labels: { problem: "PROBLEM", solution: "LÖSUNG" },
            cards: {
                ecommerce: {
                    title: "E-Commerce & Bestand",
                    problem: "Komplexe Bestandsverfolgung und manuelle Preisfehler.",
                    solution: "KI-basierte dynamische Bestandsoptimierung und Wettbewerbsanalyse.",
                    stats: [{ label: "Gewinnsteigerung", value: "35%" }, { label: "Std./Monat Gespart", value: "70+" }]
                },
                b2b: {
                    title: "B2B Vertrieb",
                    problem: "Verpasste potenzielle Kunden und nicht verfolgte Meetings.",
                    solution: "24/7 aktive, mehrkanalige Lead-Erfassung und autonomes Terminsystem.",
                    stats: [{ label: "Mehr Termine", value: "3x" }, { label: "Verlorene Kunden", value: "0%" }]
                },
                support: {
                    title: "24/7 Support",
                    problem: "Langsame Antwortzeiten und Sprachbarrieren im globalen Vertrieb.",
                    solution: "Sofortige Antwort in 100+ Sprachen, empathischer und technischer KI-Assistent.",
                    stats: [{ label: "Kundenzufriedenheit", value: "95%" }, { label: "Antwortzeit", value: "Sofort" }]
                }
            },
            cta: "Ich möchte ein ähnliches System"
        },
        lead_form: {
            title_prefix: "Lassen Sie uns den ersten Schritt",
            title_highlight: "Gemeinsam machen.",
            description: "Vereinbaren Sie eine kostenlose 30-minütige Strategiesitzung mit unseren Experten, um das Potenzial für die digitale Transformation Ihres Unternehmens zu entdecken.",
            features: [
                { title: "Prozessanalyse", desc: "Identifizierung von Engpässen in Ihrem aktuellen Workflow." },
                { title: "Individuelle Agentenarchitektur", desc: "Entwurf des für Sie besten autonomen Systems." },
                { title: "Effizienzprojektion", desc: "ROI- und Gewinnberechnung." }
            ],
            form: {
                title: "Kostenlose Strategiesitzung",
                name_label: "Vollständiger Name",
                name_placeholder: "Ihr Name",
                email_label: "E-Mail",
                email_placeholder: "beispiel@firma.com",
                phone_label: "Telefonnummer",
                phone_placeholder: "+49 (xxx) xxx xx xx",
                dept_label: "Abteilung",
                dept_placeholder: "Auswählen...",
                dept_options: { management: "Management", sales: "Vertrieb & Marketing", operations: "Betrieb", technical: "Technik / IT", other: "Sonstiges" },
                message_label: "Ihre Nachricht",
                message_placeholder: "Beschreiben Sie kurz Ihr Projekt...",
                submit_btn: "Kostenlose Sitzung buchen",
                disclaimer: "Mit dem Absenden dieses Formulars gelten Sie als gelesen und genehmigt für den Klärungstext.",
                success_title: "Danke!",
                success_msg: "Unser Experte wird Sie",
                success_msg_highlight: "so schnell wie möglich kontaktieren."
            }
        },
        value_gap: {
            badge: "Strategische Transformation",
            title_prefix: "Delegieren Sie Routinearbeit",
            title_highlight: "an Ihre digitale Belegschaft",
            title_suffix: ".",
            description: "AgentWorks delegiert wiederkehrende Operationen an autonome Agenten und schafft so Raum für Ihr Team für strategisches Wachstum.",
            benefits: ["Eine von Routinen befreite Arbeitskultur.", "Frische Kapazität für strategische Projekte.", "Skalierbare digitale Infrastruktur."],
            calculator: {
                title: "Verimlilik Hesaplayıcı",
                label_workload: "ROUTINE-AUFWAND",
                label_role_type: "Operasyon Tipi",
                roles: { operational: "Operative Unterstützung", expert: "Experte", manager: "Manager" },
                result_time: "Jährlich gewonnene Zeit",
                result_efficiency: "Team-Effizienzsteigerung",
                result_value: "Geschätzter operativer Wertzuwachs",
                disclaimer: "*Berechnungen basieren auf Marktdurchschnitten für das ausgewählte Profil und 52 Wochen pro Jahr.",
                unit_hours: "Stunden",
                unit_hours_weekly: "Std. / Woche"
            }
        },
        solutions: {
            "ai-voice": {
                name: "24/7 KI-Sprachassistent",
                description: "KI-Telefonzentralenlösung, die Anrufe beantwortet, Termine vereinbart und Verkäufe abschließt.",
                details: "Ihre Kunden hören nie ein Besetztzeichen. Ihr KI-Telefonassistent chattet in natürlicher Sprache, erklärt Ihre Dienstleistungen im Detail und verarbeitet Termine automatisch in Google Calendar oder Ihrem eigenen Zeitplan. Ein intelligentes System, das Sekretariatskosten auf Null senkt und 100+ gleichzeitige Anrufe für Unternehmen jeder Größe bewältigt.",
                roiData: { efficiency: "95% Antwortrate", timeSaving: "4 Stunden/Tag" },
                tools: ["Vapi", "ElevenLabs", "n8n", "GPT-4o"],
                benefits: ["Schluss mit verpassten Anrufen und verlorenen Kunden", "Bewältigen Sie 100+ gleichzeitige Gespräche mit einem System", "Erhalten Sie es für 10% der Kosten einer Vollzeit-Sekretärin"]
            },
            "ai-photo": {
                name: "KI-Produktfotostudio",
                description: "Verwandeln Sie mit dem Smartphone aufgenommene Produktfotos in Sekunden in professionelle E-Commerce-Visuals.",
                details: "Produktfotos in Studioqualität für E-Commerce und Social Media sind jetzt in Minuten fertig. Es bereinigt automatisch den Hintergrund Ihres hochgeladenen Rohbildes, platziert Ihr Produkt in trendigen Dekoren und Szenen und optimiert Licht und Schatten mit KI. Erstellen Sie Visuals, die die Konversionsraten für Amazon, Etsy und Shopify-Listings erhöhen.",
                roiData: { efficiency: "90% Kosteneinsparung", timeSaving: "15 Stunden/Woche" },
                tools: ["Midjourney API", "ComfyUI", "Cloudinary"],
                benefits: ["Eliminieren Sie Mietkosten für Studios und Fotografen", "Generieren Sie unbegrenzte Farb-, Dekor- und Szenenvariationen", "Erstellen Sie Kampagnenvisuals in Minuten statt Stunden"]
            },
            "sales-bot": {
                name: "Verkaufsabschließender KI-Chatbot",
                description: "KI-Chatbot, der Produkte empfiehlt, Fragen beantwortet und Verkäufe mit Zahlungslinks 24/7 auf WhatsApp und Ihrer Website abschließt.",
                details: "Der KI-Verkaufsbot, der Ihren Produktkatalog vollständig beherrscht, analysiert Kundenbedürfnisse, empfiehlt personalisierte Produkte und sendet Zahlungslinks, um den Prozess automatisch abzuschließen. Erzielen Sie mit der WhatsApp Business API-Integration eine durchschnittlich 35% höhere Konversionsrate pro Kunde. Verwalten Sie täglich 500+ Verkaufsgespräche ohne menschliche Agenten.",
                roiData: { efficiency: "35% Konversionssteigerung", timeSaving: "30 Stunden/Woche" },
                tools: ["n8n", "WhatsApp API", "Pinecone", "GPT-4o"],
                benefits: ["Ein digitaler Vertriebsmitarbeiter, der 24/7 verkauft und nie schläft", "Erhöhen Sie den Warenkorbwert mit personalisierten Produktempfehlungen", "Maximieren Sie die Kundenzufriedenheit mit sofortiger Unterstützung und Lösung"]
            },
            "youtube-fab": {
                name: "YouTube Content Factory",
                description: "Generieren Sie automatisch virale Shorts, Instagram Reels und SEO-Blogbeiträge aus Ihren langen YouTube-Videos.",
                details: "Mit der Video-Repurposing-Automatisierung verwandelt sich ein einziges YouTube-Video in Inhalte, die über Dutzende von Plattformen verteilt werden. KI identifiziert die stärksten Momente in Ihrem Video, extrahiert Untertitel und produziert kurze Videos mit viralen Hooks und Blogartikel, die bei Google ranken. Füllen Sie Ihren wöchentlichen Inhaltsplan mit einer einzigen Videoaufnahme für Creator und Markenkonten.",
                roiData: { efficiency: "10x Inhalt aus 1 Video", timeSaving: "20 Stunden/Woche" },
                tools: ["Whisper AI", "GPT-4o", "CapCut API", "Buffer"],
                benefits: ["Füllen Sie einen 1-Wochen-Inhaltskalender mit einem einzigen Video", "Veröffentlichen Sie automatisch SEO-kompatible Blogbeiträge", "Automatisieren Sie die Hook-Generierung für virale Shorts und Reels"]
            },
            "seo-blogger": {
                name: "Autonomer SEO & Blog Autor",
                description: "KI-Inhaltssystem, das Keywords für Ihre Branche recherchiert und täglich Blogartikel produziert, die auf die erste Seite von Google abzielen.",
                details: "Automatisieren Sie Content-SEO vollständig, den kostengünstigsten Weg, um organischen Traffic zu steigern. Das System scannt tägliche Trends und Keywords mit geringem Wettbewerb, schreibt Long-Form-Artikel, um Ihre Branchenautorität zu erhöhen, und lädt sie automatisch auf Ihre Website oder WordPress hoch. Verwalten Sie 40 Stunden Content-Arbeit pro Monat ohne Aufwand für E-Commerce-Websites, Dienstleistungsunternehmen und Agenturen.",
                roiData: { efficiency: "5x Organischer Traffic", timeSaving: "40 Stunden/Monat" },
                tools: ["Perplexity API", "n8n", "Next.js / WP API"],
                benefits: ["Ranken Sie schnell hoch bei Google mit Keywords mit geringem Wettbewerb", "Müheloses tägliches Content-Management und automatische Veröffentlichung", "Bauen Sie Autorität und Vertrauen in Ihrer Branche auf"]
            },
            "market-radar": {
                name: "Wettbewerber-Beobachtung & Marktradar",
                description: "KI-Marktverfolgungssystem, das die Social-Media-, Preis- und Kampagnenzüge Ihrer Konkurrenten sofort überwacht und Ihnen zusammenfassende Berichte liefert.",
                details: "Seien Sie mit der Automatisierung digitaler Wettbewerbsanalysen der Erste, der jeden Schritt in Ihrer Branche kennt. Das System scannt Wettbewerber-Social-Media-Konten, YouTube-Kanäle und Produktpreise rund um die Uhr; benachrichtigt Sie sofort, wenn es einen neuen Trend oder eine Wettbewerberkampagne erkennt, und präsentiert einen fertigen Zusammenfassungsbericht. Ermöglicht datengesteuerte Entscheidungsfindung für Marketingteams in Minuten statt Wochen.",
                roiData: { efficiency: "Sofortige Marktverfolgung", timeSaving: "12 Stunden/Woche" },
                tools: ["Apify", "n8n", "OpenAI", "YouTube Data API"],
                benefits: ["Erfassen Sie Branchentrends vor Ihren Konkurrenten", "Sehen Sie Kundenanforderungen und Beschwerden in Echtzeit", "Erstellen Sie datengesteuerte Preis- und Kampagnenstrategien"]
            },
            "data-analyst": {
                name: "KI Datenanalyst & Reporting",
                description: "KI-System, das Ihre Verkaufstabellen, E-Commerce-Daten und Kundendaten automatisch analysiert, um handlungsorientierte Berichte zu erstellen.",
                details: "Verwandeln Sie komplexe Excel-Tabellen und Verkaufsberichte mit KI-gestützter Datenanalyse für Ihr Unternehmen in Sekundenschnelle in verständliche Erkenntnisse. Erhalten Sie sofortige grafische Antworten auf kritische Fragen wie 'Welches Produkt ist am profitabelsten?', 'Welches Kundensegment wächst?', 'Wann treten Lagerengpässe auf?'. Arbeitet direkt integriert mit Buchhaltungssoftware und Google Sheets.",
                roiData: { efficiency: "100% Datensichtbarkeit", timeSaving: "10 Stunden/Woche" },
                tools: ["Pandas AI", "OpenAI Assistant API", "Google Sheets"],
                benefits: ["Verwandeln Sie komplexe Daten in klare Diagramme und verständliche Berichte", "Entdecken Sie versteckte profitable Kundensegmente und Produkte", "Verhindern Sie Versorgungskrisen im Voraus mit KI-gestützter Bestandsprognose"]
            },
            "special-flow": {
                name: "Individuelle Workflow-Entwicklung",
                description: "Maßgeschneiderte KI-Lösungen, die aktuelle Geschäftsprozesse analysieren, Engpässe beseitigen und eine unternehmensspezifische Automatisierungsinfrastruktur aufbauen.",
                details: "Jedes Unternehmen hat andere Bedürfnisse. Ihre aktuellen Arbeitsabläufe werden im Detail analysiert, um Engpässe zu identifizieren, die Zeit- und Ressourcenverluste verursachen. Eine vollständig angepasste Automatisierungsarchitektur, die in Ihr bestehendes CRM-, ERP- oder Buchhaltungssystem integriert ist, wird unter Verwendung von Python-Skripten, AWS Lambda-Funktionen und n8n-Workflows erstellt. Skalierbare Lösungen, die monatlich 150+ Stunden manueller Arbeit automatisieren und mit Ihrem Unternehmen wachsen.",
                roiData: { efficiency: "95% Prozesseffizienz", timeSaving: "150+ Stunden/Monat" },
                tools: ["n8n", "Python", "AWS Lambda", "Custom API"],
                benefits: ["Nahtlose Integration in Ihre vorhandene Software und Systeme", "Vollständig anpassbare Struktur für jede Branche und jedes Geschäftsmodell", "Unbegrenzt skalierbare Automatisierungsinfrastruktur, die mit Ihrem Unternehmen wächst"]
            }
        },
        solutions_misc: {
            efficiency_increase: "Effizienzsteigerung",
            time_saving: "Zeitersparnis",
            workflow_details: "WORKFLOW-DETAILS",
            benefits: "Vorteile",
            tools_technologies: "Werkzeuge & Technologien",
            cta_button: "Ich möchte dieses System"
        },
        solutions_header: {
            title_prefix: "Beliebte 7 KI",
            title_highlight: "Automatisierungen",
            subtitle: "Unsere leistungsstarken Lösungen, die Ihre Geschäftsprozesse mit KI und Automatisierung transformieren."
        },
        faq: {
            title_prefix: "Häufig Gestellte Fragen:",
            title_highlight: "Übergang in eine autonome Zukunft",
            subtitle: "Wir haben die wichtigsten Fragen zu Ihrer digitalen Transformation zusammengefasst.",
            items: [
                {
                    question: "Sind KI-Lösungen nur für große Unternehmen geeignet?",
                    answer: "Absolut nicht. Wir sind für visionäre Unternehmen da, die ihre operative Belastung verwalten möchten, ohne ihr Team zu vergrößern. Unser Ziel ist es, die fortschrittlichsten Technologien für Unternehmen jeder Größe zugänglich und profitabel zu machen."
                },
                {
                    question: "Benötige ich nach der Systeminstallation ein technisches Team?",
                    answer: "Nein. Wir bauen autonome Systeme mit einer \"Plug-and-Play\"-Logik. Wir verwalten die gesamte technische Komplexität; Sie müssen lediglich die Effizienzberichte Ihrer digitalen Mitarbeiter überwachen."
                },
                {
                    question: "Können digitale Mitarbeiter mit unserer vorhandenen Software (CRM, Buchhaltung usw.) kommunizieren?",
                    answer: "Ja. Unabhängig von den verwendeten Tools (über n8n, Make oder benutzerdefinierte APIs) verbinden wir Ihre Systeme und gewährleisten einen nahtlosen Datenfluss."
                },
                {
                    question: "Wie hoch sind die Investitionskosten? Kann ich mit einem kleinen Schritt beginnen?",
                    answer: "AgentWorks bietet eine modulare Struktur. Sie können mit einer einzelnen \"Digitalen Abteilung\" beginnen und die Struktur skalieren, nachdem Sie die Effizienz aus erster Hand erfahren haben. Die Amortisation der Investition (ROI) innerhalb von Wochen ist unsere oberste Priorität."
                },
                {
                    question: "Sind unsere Daten und Kundeninformationen sicher?",
                    answer: "Sicherheit ist für uns keine Option, sondern Standard. Alle unsere Systeme arbeiten mit unternehmensweiten Verschlüsselungs- und Datenschutzprotokollen. Ihre Daten bleiben ausschließlich unter Ihrer Kontrolle."
                }
            ],
            bottom_note: "Haben Sie noch eine Frage? Kontaktieren Sie uns über das untenstehende Formular, und",
            bottom_note_link: "wir werden innerhalb von 24 Stunden antworten."
        }
    }
};

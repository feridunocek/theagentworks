export type Dictionary = {
    nav: {
        features: string;
        services: string;
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
        };
    };
};

export const dictionaries: Record<string, Dictionary> = {
    tr: {
        nav: {
            features: "Özellikler",
            services: "Hizmetler",
            roadmap: "Yol Haritası",
            efficiency: "Verimlilik",
            contact: "İletişim",
            cta: "İletişime Geç"
        },
        hero: {
            badge: "Yapay Zeka ile İş Gücü Devrimi",
            title_prefix: "Ekibinizi büyütmeyin,",
            title_highlight: "dijitalleştirin.",
            subtitle: "Rutin operasyonlardan kurtulun, verimliliği maksimize edin. AgentWorks, işletmeniz için 7/24 çalışan otonom dijital departmanlar kurar.",
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
            title: "Dijital Dönüşüm",
            title_highlight: "Yol Haritamız",
            description: "Karmaşık süreçlerinizi, ölçülebilir iş sonuçlarına dönüştüren kanıtlanmış 3 adımlı yaklaşımımız.",
            steps: {
                discovery: { title: "Keşif ve Süreç Madenciliği", desc: "İşinizin DNA'sını analiz ediyoruz. Mevcut operasyonel darboğazları ve otomasyon fırsatlarını tespit etmek için derinlemesine süreç madenciliği yapıyoruz." },
                design: { title: "Mimari Tasarım ve Blueprint", desc: "Size özel otonom iş akışını kurguluyoruz. İş hedeflerinize doğrudan hizmet eden, ölçeklenebilir ve güvenli bir dijital iş gücü mimarisi tasarlıyoruz." },
                optimization: { title: "Sürekli Optimizasyon", desc: "Antigravity gücüyle sisteminizi 7/24 çalıştırıyoruz. Agent'larınız öğrenmeye devam ederken, biz performanslarını sürekli izliyor ve optimize ediyoruz." }
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
                disclaimer: "*Hesaplamalar seçilen profilin piyasa ortalamaları ve yıllık 52 hafta baz alınarak yapılmıştır."
            }
        }
    },
    en: {
        nav: {
            features: "Features",
            services: "Services",
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
            title: "Digital Transformation",
            title_highlight: "Roadmap",
            description: "Our proven 3-step approach that transforms your complex processes into measurable business results.",
            steps: {
                discovery: { title: "Discovery & Process Mining", desc: "We analyze your business DNA. We perform in-depth process mining to identify current operational bottlenecks and automation opportunities." },
                design: { title: "Architecture Design & Blueprint", desc: "We design your custom autonomous workflow. We create a scalable and secure digital workforce architecture that directly serves your business goals." },
                optimization: { title: "Continuous Optimization", desc: "We power your system 24/7 with Antigravity. While your agents continue to learn, we constantly monitor and optimize their performance." }
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
                disclaimer: "*Calculations are based on market averages for the selected profile and 52 weeks per year."
            }
        }
    },
    de: {
        nav: {
            features: "Funktionen",
            services: "Dienstleistungen",
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
            title: "Digitale Transformation",
            title_highlight: "Fahrplan",
            description: "Unser bewährter 3-Schritte-Ansatz, der Ihre komplexen Prozesse in messbare Geschäftsergebnisse verwandelt.",
            steps: {
                discovery: { title: "Entdeckung & Process Mining", desc: "Wir analysieren Ihre Geschäfts-DNA. Wir führen ein tiefgreifendes Process Mining durch, um aktuelle operative Engpässe und Automatisierungschancen zu identifizieren." },
                design: { title: "Architekturdesign & Blueprint", desc: "Wir entwerfen Ihren individuellen autonomen Workflow. Wir erstellen eine skalierbare und sichere Architektur für digitale Arbeitskräfte, die direkt Ihren Geschäftszielen dient." },
                optimization: { title: "Kontinuierliche Optimierung", desc: "Wir betreiben Ihr System 24/7 mit Antigravity. Während Ihre Agenten weiter lernen, überwachen und optimieren wir ständig ihre Leistung." }
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
                title: "Effizienzrechner",
                label_workload: "Wöchentliche wiederkehrende Arbeitsbelastung",
                label_role_type: "Operationstyp",
                roles: { operational: "Operative Unterstützung", expert: "Experte", manager: "Manager" },
                result_time: "Jährlich gewonnene Zeit",
                result_efficiency: "Team-Effizienzsteigerung",
                result_value: "Geschätzter operativer Wertzuwachs",
                disclaimer: "*Berechnungen basieren auf Marktdurchschnitten für das ausgewählte Profil und 52 Wochen pro Jahr."
            }
        }
    }
};

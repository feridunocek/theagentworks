export interface Agent {
    id: string;
    name: string;
    role: string;
    description: string;
    metric: string;
    icon: string; // Placeholder for now, will map to Lucide icons or 3D renders
    prompt: string; // The prompt used/to be used for the visual
}

export const agents: Agent[] = [
    {
        id: 'sales',
        name: 'Works-Sales',
        role: 'Satış ve Lead Niteliklendirme',
        description: 'Potansiyel müşterileri otomatik nitelendirin, satış ekibinize sadece sıcak lead\'ler gönderin.',
        metric: '%70 Daha Hızlı Lead Dönüşümü',
        icon: 'target',
        prompt: '3D glossy glass icon of a magnetic field attracting glowing orbs. Dark background, neon purple glow. Levitating object, premium texture, raytracing, soft lighting. Symbolizing lead attraction.'
    },
    {
        id: 'support',
        name: 'Works-Support',
        role: 'Otonom Müşteri Desteği',
        description: 'Sıkça sorulan soruları, iade süreçlerini ve temel sorunları 7/24 otomatik çözün.',
        metric: '%90 Otomatize Edilen Yanıt',
        icon: 'shield',
        prompt: '3D frosted glass shield with a glowing heartbeat pulse line inside. Neon cyan inner glow. Floating in void. Protect, serve, stability. Smooth curves, high gloss reflection.'
    },
    {
        id: 'ops',
        name: 'Works-Ops',
        role: 'Operasyonel Akış Otomasyonu',
        description: 'Veri girişlerini, raporlamayı, envanter takibini hatasız ve anında otomatikleştirin.',
        metric: '%60 Operasyonel Maliyet Düşüşü',
        icon: 'cpu',
        prompt: 'Abstract 3D mechanism, interconnecting glass gears with neon light flowing through them correctly. Kinetic sculpture, dark metal and glass fusion. Efficiency, motion, seamless operation.'
    },
    {
        id: 'analyst',
        name: 'Works-Analyst',
        role: 'Veri ve Pazar Analizi',
        description: 'Büyük veri setlerini hızla analiz edin, pazar eğilimlerini ve performans raporlarını otomatik oluşturun.',
        metric: '%85 Daha Hızlı Raporlama',
        icon: 'bar-chart',
        prompt: 'A floating crystal lens focusing scattered light into a single bright beam. Data converging, analysis, clarity. Dark environment, strong purple rim light. Sharp focus.'
    }
];

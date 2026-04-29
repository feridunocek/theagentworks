import Link from "next/link";

export const metadata = {
  title: "QR Dijital Menü Demo | The Agent Works",
  description: "Restoranınız için QR dijital menü sisteminin canlı demosu.",
  robots: { index: false, follow: false },
};

const FEATURES = [
  { icon: "✏️", title: "Canlı Düzenleme", desc: "Menünüzü anlık düzenleyin, önizleme anında güncellenir." },
  { icon: "🎨", title: "Tema Seçimi", desc: "6 farklı renk teması ile markanıza uygun görünüm seçin." },
  { icon: "🤖", title: "AI Görsel Üretimi", desc: "Her yemek için Fal AI ile profesyonel fotoğraf oluşturun." },
  { icon: "📱", title: "Mobil Önizleme", desc: "Müşterinizin göreceği telefon ekranını canlı görün." },
  { icon: "🔲", title: "QR Kod", desc: "Tek tıkla QR kod üretin, PNG olarak indirin." },
  { icon: "💾", title: "Otomatik Kayıt", desc: "Veriler tarayıcıda saklanır, sayfa yenileyince kaybolmaz." },
];

export default function QrMenuDemoPage() {
  return (
    <main className="min-h-screen bg-[#0F1117] text-[#ededed]">

      {/* Back */}
      <div className="pt-8 px-6 max-w-5xl mx-auto">
        <Link
          href="/demo"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Demo Merkezi
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-10 pb-12 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
            style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}
          >
            📋
          </div>
          <div>
            <div className="text-xs text-white/40 font-semibold uppercase tracking-widest mb-1">
              Restoran & Kafe
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-sora)]">
              QR Dijital Menü Sistemi
            </h1>
          </div>
        </div>

        <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">
          Kağıt menüye elveda. Restoranınızın dijital menüsünü sürükle-bırak editörde hazırlayın,
          QR kod üretin ve masalara koyun. Müşteriniz tarar, menüyü telefonda görür.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-white/3 border border-white/8 rounded-xl p-4">
              <div className="text-xl mb-2">{f.icon}</div>
              <div className="text-sm font-semibold mb-1">{f.title}</div>
              <div className="text-xs text-white/40 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/demos/qr-menu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#f59e0b] text-black font-bold px-8 py-4 rounded-full text-base hover:bg-[#d97706] transition-all shadow-[0_0_24px_rgba(245,158,11,0.3)] hover:shadow-[0_0_36px_rgba(245,158,11,0.5)] hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            Demoyu Başlat
          </a>
          <a
            href="https://www.theagent-works.com/#iletisim"
            className="inline-flex items-center gap-2 border border-white/15 text-white/70 hover:border-white/30 hover:text-white px-6 py-4 rounded-full text-sm font-medium transition-all"
          >
            Bu sistemi istiyorum
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Preview Screenshot-like */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-white/8 overflow-hidden bg-[#111]">
          <div className="bg-[#1a1a1a] border-b border-white/8 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ef4444]/60" />
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]/60" />
            <div className="w-3 h-3 rounded-full bg-[#22c55e]/60" />
            <span className="ml-2 text-xs text-white/25 font-mono">theagent-works.com/demos/qr-menu/</span>
          </div>
          <div className="p-8 text-center">
            <div className="text-white/20 text-sm mb-4">Demo editörü yeni sekmede açılır</div>
            <a
              href="/demos/qr-menu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#f59e0b] hover:text-[#d97706] text-sm font-semibold transition-colors"
            >
              Demoyu aç
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

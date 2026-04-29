import Link from "next/link";
import { Footer } from "@/components/layout/footer";

const DEMOS = [
  {
    slug: "qr-menu",
    emoji: "📋",
    title: "QR Dijital Menü",
    subtitle: "Restoran & Kafe",
    description: "Restoranınızın dijital menüsünü dakikalar içinde oluşturun. AI ile yemek görseli üretin, QR kod ile paylaşın.",
    tags: ["Fal AI", "QR Kod", "localStorage"],
    accent: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.2)",
    live: true,
  },
  {
    slug: "emlak",
    emoji: "🏠",
    title: "Emlak Portföy Yöneticisi",
    subtitle: "Emlak & Gayrimenkul",
    description: "Tüm mülk portföyünüzü tek ekranda yönetin. AI ile görsel ve ilan metni üretin, QR kod ile paylaşın.",
    tags: ["Fal AI", "QR Kod", "localStorage"],
    accent: "#3b82f6",
    accentBg: "rgba(59,130,246,0.08)",
    accentBorder: "rgba(59,130,246,0.2)",
    live: true,
  },
];

const COMING_SOON = [
  { emoji: "🤖", title: "Yakında", subtitle: "Yeni demo ekleniyor...", accent: "#6b7280" },
  { emoji: "🤖", title: "Yakında", subtitle: "Yeni demo ekleniyor...", accent: "#6b7280" },
];

export const metadata = {
  title: "Demo Merkezi | The Agent Works",
  description: "Potansiyel müşteriler için hazır AI sistem demoları.",
  robots: { index: false, follow: false },
};

export default function DemoHubPage() {
  return (
    <main className="min-h-screen bg-[#0F1117] text-[#ededed]">

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 text-center relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,243,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold text-[#00f3ff] mb-6 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f3ff] animate-pulse" />
          Canlı Demo Merkezi
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-sora)] mb-4">
          Sistemi görmek,<br />
          <span className="text-[#00f3ff]">inanmaktan iyidir.</span>
        </h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          Sizin için kurduğumuz sistemlerin çalışan örnekleri. Deneyin, keşfedin.
        </p>
      </section>

      {/* Demo Grid */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

          {/* Live Demos */}
          {DEMOS.map((demo) => (
            <Link
              key={demo.slug}
              href={`/demo/${demo.slug}`}
              className="group block rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: demo.accentBg,
                borderColor: demo.accentBorder,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${demo.accent}20`, border: `1px solid ${demo.accent}30` }}
                >
                  {demo.emoji}
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${demo.accent}20`, color: demo.accent }}
                >
                  Canlı
                </span>
              </div>

              <div className="text-xs text-white/40 font-semibold uppercase tracking-widest mb-1">
                {demo.subtitle}
              </div>
              <h2 className="text-xl font-bold mb-2 font-[family-name:var(--font-sora)] group-hover:text-[#00f3ff] transition-colors">
                {demo.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {demo.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {demo.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/60">
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="flex items-center gap-2 text-sm font-semibold transition-all"
                style={{ color: demo.accent }}
              >
                Demoya Git
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}

          {/* Coming Soon */}
          {COMING_SOON.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 p-6 opacity-40 cursor-default"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-white/5 mb-4">
                {item.emoji}
              </div>
              <div className="text-xs text-white/30 font-semibold uppercase tracking-widest mb-1">
                {item.subtitle}
              </div>
              <h2 className="text-xl font-bold text-white/30 font-[family-name:var(--font-sora)]">
                {item.title}
              </h2>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm mb-4">
            Bu sistemlerin birini kendi işletmeniz için kurmak ister misiniz?
          </p>
          <a
            href="https://www.theagent-works.com/#iletisim"
            className="inline-flex items-center gap-2 bg-[#00f3ff] text-black font-bold px-8 py-3 rounded-full text-sm hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]"
          >
            Görüşme Planla
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </section>

      <Footer />
    </main>
  );
}

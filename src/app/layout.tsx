import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Header } from "@/components/layout/header";
import { I18nProvider } from "@/components/providers/i18n-provider";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Agent Works | İş Yükünüzü Hafifleten Dijital Çalışanlar",
  description: "İşletmenizin verimliliğini, size özel kurgulanan dijital çalışanlarla artırıyoruz. Karmaşadan uzak, sonuç odaklı yapay zeka çözümleri.",
  openGraph: {
    type: "website",
    url: "https://www.theagent-works.com/",
    title: "İş Yükünüzü Hafifleten Dijital Çalışanlarla Tanışın",
    description: "Verimliliği artırmak ve iş süreçlerini akıcı hale getirmek için tasarlanan yeni nesil iş gücü.",
    images: [{
      url: "https://www.theagent-works.com/share-image.webp",
      width: 1200,
      height: 630,
      alt: "The Agent Works"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Agent Works | Geleceğin İş Gücü",
    images: ["https://www.theagent-works.com/share-image.webp"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${sora.variable} antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen selection:bg-[var(--color-neon-cyan)] selection:text-black`}
      >
        <I18nProvider>
          <Header />
          {children}
        </I18nProvider>
        <GoogleAnalytics gaId="G-RYVV2Y68HE" />
      </body>
    </html>
  );
}

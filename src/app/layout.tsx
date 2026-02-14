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
  title: "AgentWorks | Otonom Dijital İş Gücü",
  description: "İş yükünüzü azaltmıyoruz, onu otonom hale getiriyoruz. AgentWorks ile işletmenizin dijital dönüşümünü başlatın.",
  keywords: ["AI Agent", "Digital Workforce", "Otomasyon", "Yapay Zeka", "AgentWorks"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
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

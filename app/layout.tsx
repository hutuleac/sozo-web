import type { Metadata, Viewport } from "next";
import { spaceGrotesk, dmMono } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Debitare Laser & Abkant CNC Iași | SOZO PROJECT",
    template: "%s | SOZO PROJECT",
  },
  description:
    "Servicii debitare laser CNC și prelucrare abkant în Iași. Mitsubishi ML3015EX, precizie ±0.05mm. Ofertă în aceeași zi, consultanță inclusă. ☎ +40 732 034 386",
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: {
    canonical: "/",
    languages: { "ro": "/", "en": "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: site.url,
    siteName: site.name,
    title: "Debitare Laser & Abkant CNC Iași | SOZO PROJECT",
    description:
      "Mitsubishi ML3015EX, precizie ±0.05mm. Ofertă în aceeași zi, consultanță inclusă.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
      {/* Runs before React hydration to prevent dark→light flash */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;var dark=s?s==='dark':p;if(!dark)document.documentElement.classList.add('light');})();`,
        }}
      />
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Sari la conținut
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}

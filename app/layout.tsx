import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Lora } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { siteConfig } from "@/config/site";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

// Serif de apoio usada apenas em títulos editoriais longos (artigos),
// para diferenciar leitura de "documentação" (sans) de leitura de
// "artigo/opinião" (serif) — escolha deliberada, não decoração.
const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author.name }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  url: siteConfig.url,
  jobTitle: "Estudante e profissional em formação em Tecnologia da Informação",
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    siteConfig.social.youtube,
    siteConfig.social.instagram,
  ].filter((url) => url && !url.startsWith("COLOCAR")),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { analytics, adsense } = siteConfig;
  const analyticsReady = analytics.enabled && !analytics.id.startsWith("COLOCAR");
  const adsenseReady = adsense.enabled && !adsense.clientId.startsWith("COLOCAR");

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${plexSans.variable} ${plexMono.variable} ${lora.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#conteudo-principal"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-paper-50"
          >
            Pular para o conteúdo
          </a>
          <Header />
          <main id="conteudo-principal">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>

        {analyticsReady && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${analytics.id}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${analytics.id}');`}
            </Script>
          </>
        )}

        {adsenseReady && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense.clientId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}

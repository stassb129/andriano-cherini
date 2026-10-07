import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { cormorant, inter } from "@/lib/fonts";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import CustomCursor from "@/components/layout/CustomCursor";
import { TransitionProvider } from "@/components/layout/Transition";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { ThemeProvider } from "@/i18n/ThemeProvider";
import { LOCALES, isLocale, localizePath } from "@/i18n/config";
import { OZON_BRAND } from "@/data/products";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";
import "../globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s — ${SITE_NAME}` },
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3eee4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const themeBoot = `(function(){try{var t=localStorage.getItem("ac-theme");document.documentElement.setAttribute("data-theme",t==="dark"?"dark":"light");}catch(e){document.documentElement.setAttribute("data-theme","light");}document.documentElement.classList.add("js");})();`;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Андриано Черини",
    url: SITE_URL,
    logo: absoluteUrl("/icon-512.png"),
    foundingDate: "2014",
    address: { "@type": "PostalAddress", addressLocality: "Fermo", addressRegion: "Marche", addressCountry: "IT" },
    sameAs: [OZON_BRAND],
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: absoluteUrl(localizePath("/", locale)),
    inLanguage: locale,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <html lang={locale} className={`${cormorant.variable} ${inter.variable}`} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <JsonLd data={[organization, website]} />
      </head>
      <body>
        <SmoothScroll />
        <ThemeProvider>
          <LocaleProvider locale={locale}>
            <TransitionProvider>
              <Header />
              <main id="main">{children}</main>
              <Footer />
            </TransitionProvider>
            <CustomCursor />
            <Preloader />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

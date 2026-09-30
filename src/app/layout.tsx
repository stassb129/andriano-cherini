import type { Metadata, Viewport } from "next";
import { cormorant, inter } from "@/lib/fonts";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { TransitionProvider } from "@/components/layout/Transition";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { ThemeProvider } from "@/i18n/ThemeProvider";
import "./globals.scss";

export const metadata: Metadata = {
  title: {
    default: "Andriano Cherini — Handmade Italian Shoes since 2014",
    template: "%s — Andriano Cherini",
  },
  description:
    "Andriano Cherini — handmade Italian dress shoes from Fermo. Formal silhouettes with modern cushioning, built one pair at a time.",
  metadataBase: new URL("https://andrianocherini.example"),
  openGraph: {
    title: "Andriano Cherini",
    description: "Handmade Italian shoes from Fermo, since 2014.",
    locale: "en_GB",
    type: "website",
    images: ["/images/product/fermo-marble.jpg"],
  },
  icons: { icon: "/images/brand/crest.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3eee4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeBoot = `(function(){try{var t=localStorage.getItem("ac-theme");document.documentElement.setAttribute("data-theme",t==="dark"?"dark":"light");}catch(e){document.documentElement.setAttribute("data-theme","light");}document.documentElement.classList.add("js");})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body>
        <SmoothScroll />
        <ThemeProvider>
          <LocaleProvider>
            <TransitionProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </TransitionProvider>
            <Preloader />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

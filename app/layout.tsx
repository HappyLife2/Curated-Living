import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Preloader from "@/components/Preloader";
import Analytics from "@/components/Analytics";

// Clean grotesque — the backbone: display headings, wordmark, body & UI.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
// Elegant low-contrast serif — used only as a whisper of italic accent.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const titleDefault = `${site.name} — Turnkey Furnishing & Styling · Dubai`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titleDefault,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "furnish apartment Dubai",
    "turnkey furnishing Dubai",
    "rental-ready furnishing Dubai",
    "investor furnishing packages Dubai",
    "Airbnb furnishing Dubai",
    "holiday home furnishing Dubai",
    "FF&E procurement Dubai",
    "property styling Dubai",
    "furnish apartment to rent Dubai",
    "Curated Living",
    "Melissa Fernandes",
  ],
  authors: [{ name: site.founder }],
  creator: site.founder,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: site.url,
    siteName: site.name,
    title: titleDefault,
    description: site.description,
    images: [
      {
        url: "/projects/hero.jpg",
        width: 1600,
        height: 844,
        alt: `A furnished, styled Dubai apartment by ${site.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: site.description,
    images: ["/projects/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Interior Furnishing",
};

export const viewport: Viewport = {
  themeColor: "#16140F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${hanken.variable} ${newsreader.variable}`}>
        <Preloader />
        <JsonLd />
        <SmoothScroll />
        <Cursor />
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

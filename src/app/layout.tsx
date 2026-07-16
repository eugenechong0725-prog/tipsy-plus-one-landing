import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/config";
import RevealMotion from "@/components/RevealMotion";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://tipsyplusone.com";
const ogImageUrl = `${siteUrl}/og-image.png`;
const ogTitle = "Tipsy Plus One — Bar & Event Space";
const ogDescription =
  "Book your table or enquire about private events and celebrations at Tipsy Plus One.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} — ${site.tagline} | Reserve Your Night`,
  description:
    "Book your table or enquire about private events at Tipsy Plus One. " +
    "A stylish bar & event space for drinks, music and special nights.",
  icons: {
    icon: site.logo,
    apple: site.logo,
  },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: siteUrl,
    type: "website",
    siteName: site.name,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: ogTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [ogImageUrl],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-dvh bg-ink font-sans text-cream/80 selection:bg-gold/30 selection:text-cream">
        <RevealMotion />
        {children}
      </body>
    </html>
  );
}

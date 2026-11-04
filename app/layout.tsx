import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/lib/profile";
import { JsonLd } from "@/components/json-ld";
import { SITE, personJsonLd } from "@/lib/agent";
import "./globals.css";

// Fonts are served from the site itself: no build-time download from Google Fonts
// (a Google Fonts change broke Vercel builds on 2 Nov 2026). Body text uses the
// Apple system font, matching the homepage.
const audiowide = localFont({
  src: "../public/fonts/Audiowide-Regular.ttf",
  variable: "--font-audiowide",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | Mark Hallam",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE),
  alternates: { types: { "text/plain": "/llms.txt" } },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${audiowide.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={personJsonLd()} />
        <div className="gradient-line" />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}

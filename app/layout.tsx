import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteShell } from "@/components/layout/site-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://markhallam.com.au"),
  title: {
    default: "Mark Hallam — Builder, Maker, Teacher",
    template: "%s | Mark Hallam",
  },
  description:
    "Solo builder shipping real products with AI. Building in public and teaching others that the only skill you need is the ability to communicate your idea.",
  openGraph: {
    title: "Mark Hallam — Builder, Maker, Teacher",
    description:
      "Solo builder shipping real products with AI. Building in public and teaching others to do the same.",
    url: "https://markhallam.com.au",
    siteName: "Mark Hallam",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Hallam — Builder, Maker, Teacher",
    description:
      "Solo builder shipping real products with AI. Building in public and teaching others to do the same.",
    creator: "@MarkHallam",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Plausible Analytics — privacy-friendly, no cookies, ~1KB */}
        <Script
          defer
          data-domain="markhallam.com.au"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteShell>{children}</SiteShell>
        {/* Vercel Analytics — Web Vitals tracking */}
        <Analytics />
      </body>
    </html>
  );
}

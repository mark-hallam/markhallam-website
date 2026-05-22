import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mark Hallam — AI Transformation Advisor",
    template: "%s — Mark Hallam",
  },
  description:
    "Founder of Skycot. I help Australian enterprises ship AI work that actually moves the numbers — not pilots that die in committee.",
  metadataBase: new URL("https://markhallam.com.au"),
  openGraph: {
    title: "Mark Hallam — AI Transformation Advisor",
    description:
      "Founder of Skycot. I help Australian enterprises ship AI work that actually moves the numbers.",
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
    <html lang="en-AU" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <div className="gradient-line" />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}

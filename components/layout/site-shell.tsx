"use client";

import { usePathname } from "next/navigation";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { PersonJsonLd } from "@/components/seo/json-ld";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <PersonJsonLd />
      <Nav />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
    </>
  );
}

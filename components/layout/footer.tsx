import Link from "next/link";
import { siteSettings } from "@/lib/data";
import { ExternalLink, Rss } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold text-warm">
              Mark Hallam
            </Link>
            <p className="mt-2 text-sm text-muted">
              AI Transformation Advisor. Helping organisations move from AI curiosity to AI capability.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              Services
            </span>
            <Link
              href="/services"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              AI Readiness Audit
            </Link>
            <Link
              href="/services"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Implementation Sprint
            </Link>
            <Link
              href="/services"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Fractional AI Advisor
            </Link>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              Connect
            </span>
            <a
              href={siteSettings.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
            >
              LinkedIn <ExternalLink size={12} />
            </a>
            <a
              href={siteSettings.socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              X (@MarkHallam)
            </a>
            <a
              href={siteSettings.socialLinks.email}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              mark@markhallam.com.au
            </a>
            <Link
              href="/rss.xml"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
            >
              RSS Feed <Rss size={12} />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Mark Hallam. AI Transformation Advisor.
        </div>
      </div>
    </footer>
  );
}

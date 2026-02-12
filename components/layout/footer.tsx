import Link from "next/link";
import { siteSettings } from "@/lib/data";
import { ExternalLink, Rss } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold text-foreground">
              Mark Hallam
            </Link>
            <p className="mt-2 text-sm text-muted">
              Building in public. Shipping for real.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              Projects
            </span>
            <a
              href={siteSettings.projectLinks.lunarpdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
            >
              LunarPDF <ExternalLink size={12} />
            </a>
            <a
              href={siteSettings.projectLinks.nomlie}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
            >
              Nomlie <ExternalLink size={12} />
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-muted">
              Connect
            </span>
            <a
              href={siteSettings.socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              X (@MarkHallam)
            </a>
            <a
              href={siteSettings.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              LinkedIn
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
          &copy; {new Date().getFullYear()} Mark Hallam. Built with AI.
        </div>
      </div>
    </footer>
  );
}

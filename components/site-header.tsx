"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SOCIAL } from "@/lib/social";

const NAV = [
  { href: "/writing", label: "Writing", match: (p: string) => p.startsWith("/writing") },
  { href: "/about", label: "About", match: (p: string) => p === "/about" },
  { href: "/contact", label: "Contact", match: (p: string) => p === "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close drawer when the route changes (covers Link clicks).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC closes the drawer.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="border-b border-[var(--color-rule)] relative">
      <div className="max-w-[880px] mx-auto px-6 sm:px-8 py-7 sm:py-9 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-3 text-[15px] font-medium tracking-[-0.01em] text-[var(--color-ink)] no-underline"
        >
          <span
            aria-hidden
            className="w-3 h-3 rounded-[3px]"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}
          />
          Mark Hallam
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-9">
          {NAV.map((item) => {
            const active = item.match(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "text-sm font-medium transition-colors no-underline " +
                  (active
                    ? "text-[var(--color-ink)]"
                    : "text-[var(--color-soft)] hover:text-[var(--color-ink)]")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger button */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="sm:hidden flex flex-col gap-[5px] p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)] rounded"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={
              "block w-5 h-[2px] bg-[var(--color-ink)] transition-transform origin-center " +
              (open ? "translate-y-[7px] rotate-45" : "")
            }
          />
          <span
            className={
              "block w-5 h-[2px] bg-[var(--color-ink)] transition-opacity " +
              (open ? "opacity-0" : "opacity-100")
            }
          />
          <span
            className={
              "block w-5 h-[2px] bg-[var(--color-ink)] transition-transform origin-center " +
              (open ? "-translate-y-[7px] -rotate-45" : "")
            }
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={
          "sm:hidden fixed inset-x-0 top-[81px] bottom-0 bg-white z-50 transition-opacity duration-200 " +
          (open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none")
        }
        aria-hidden={!open}
      >
        <nav className="flex flex-col px-6 pt-8">
          {NAV.map((item) => {
            const active = item.match(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "py-5 border-b border-[var(--color-rule)] text-[22px] font-medium no-underline transition-colors " +
                  (active
                    ? "text-[var(--color-ink)]"
                    : "text-[var(--color-ink)] hover:opacity-70")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-6 pt-10 text-[13px] text-[var(--color-muted)] tracking-[0.04em] uppercase font-medium">
          Follow
        </div>
        <div className="px-6 pt-3 flex flex-col gap-2 text-[15px]">
          <a
            href={SOCIAL.x.url}
            className="py-2 text-[var(--color-soft)] no-underline hover:text-[var(--color-ink)]"
          >
            X · {SOCIAL.x.handle}
          </a>
          <a
            href={SOCIAL.linkedin.url}
            className="py-2 text-[var(--color-soft)] no-underline hover:text-[var(--color-ink)]"
          >
            LinkedIn · {SOCIAL.linkedin.handle}
          </a>
          <a
            href={SOCIAL.youtube.url}
            className="py-2 text-[var(--color-soft)] no-underline hover:text-[var(--color-ink)]"
          >
            YouTube · {SOCIAL.youtube.handle}
          </a>
        </div>
      </div>
    </header>
  );
}

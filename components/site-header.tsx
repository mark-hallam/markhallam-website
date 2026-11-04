"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// The same bar as the homepage (public/home.html): name on the left, the same five places, a light and
// dark switch, and a menu on phones. Work and Career are sections of the homepage.
const NAV = [
  { href: "/#made", label: "Work", match: () => false },
  { href: "/#career", label: "Career", match: () => false },
  { href: "/writing", label: "Writing", match: (p: string) => p.startsWith("/writing") },
  { href: "/about", label: "About", match: (p: string) => p === "/about" },
  { href: "/contact", label: "Contact", match: (p: string) => p === "/contact" },
];

const THEME_KEY = "mh-v2-theme"; // shared with the homepage

function ThemeButton() {
  // The icon is set by CSS from data-theme; this keeps the switch's on or off state right for screen readers.
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const root = document.documentElement;
    const sync = () => button.current?.setAttribute("aria-pressed", String(root.getAttribute("data-theme") === "dark"));
    sync();
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const follow = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(THEME_KEY);
      } catch {}
      if (!saved) {
        if (mq.matches) root.setAttribute("data-theme", "dark");
        else root.removeAttribute("data-theme");
        sync();
      }
    };
    mq.addEventListener("change", follow);
    return () => mq.removeEventListener("change", follow);
  }, []);
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") !== "dark";
    if (next) root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    try {
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch {}
    button.current?.setAttribute("aria-pressed", String(next));
  };
  return (
    <button
      ref={button}
      type="button"
      onClick={toggle}
      aria-pressed="false"
      aria-label="Dark mode"
      className="w-11 h-11 rounded-full inline-flex items-center justify-center text-[var(--color-ink)] hover:bg-[var(--color-rule)] flex-none"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <g className="theme-ic-moon">
          <path d="M20 14.6A8.2 8.2 0 0 1 9.4 4 8.2 8.2 0 1 0 20 14.6z" />
        </g>
        <g className="theme-ic-sun">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
        </g>
      </svg>
    </button>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  // The menu is open for the page it was opened on, so it closes by itself when the page changes.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (v: boolean) => setOpenOn(v ? pathname : null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpenOn(null);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 h-[52px] border-b border-[var(--color-rule)] bg-[var(--color-nav)] backdrop-blur-xl backdrop-saturate-[1.8]">
      <a
        href="#main"
        className="absolute left-4 -top-16 focus:top-2 z-[100] rounded-full bg-[var(--color-ink)] text-[var(--color-page)] px-[18px] py-[10px] font-semibold no-underline"
      >
        Skip to content
      </a>
      <div className="h-full max-w-[1080px] mx-auto px-4 min-[700px]:px-6 lg:max-w-none lg:px-[clamp(18px,1.6vw,32px)] flex items-center gap-5">
        <Link
          href="/"
          className="gradient-text text-[19px] tracking-[0.01em] leading-none no-underline py-1.5"
          style={{ fontFamily: "var(--font-audiowide)" }}
        >
          Mark Hallam
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden min-[700px]:block">
          <ul className="flex gap-[30px] list-none m-0 p-0">
            {NAV.map((item) => {
              const active = item.match(pathname);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      "text-[14px] no-underline py-1.5 hover:text-[var(--color-link)] " +
                      (active ? "text-[var(--color-link)] font-medium" : "text-[var(--color-ink)]")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto min-[700px]:ml-0 flex items-center gap-1">
          <ThemeButton />
          <button
            ref={menuButton}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Menu"
            className="min-[700px]:hidden w-11 h-11 flex items-center justify-center rounded-[10px] text-[var(--color-ink)]"
            onClick={() => setOpen(!open)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8.5h16M4 15.5h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Menu" className="min-[700px]:hidden absolute top-[52px] inset-x-0 bg-[var(--color-page)] border-b border-[var(--color-rule)] shadow-[0_30px_40px_rgba(0,0,0,.08)] px-4 pt-1.5 pb-5">
          <ul className="list-none m-0 p-0">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.match(pathname) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-[22px] font-semibold tracking-[-0.02em] text-[var(--color-ink)] no-underline border-b border-[var(--color-rule)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

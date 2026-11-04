import Link from "next/link";
import { WebAddress } from "@/components/web-address";
import {
  ABOUT_PARAGRAPHS,
  BACKGROUND,
  BACKGROUND_NOTE,
  BELIEFS,
  BUILT,
  SITE_DESCRIPTION,
} from "@/lib/profile";

export const metadata = {
  title: "About",
  description: SITE_DESCRIPTION,
};

export default function AboutPage() {
  return (
    <>
      <section className="max-w-[880px] mx-auto px-6 sm:px-8 pt-[96px] sm:pt-[120px] pb-20">
        <h1 className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          About
        </h1>
        <div className="space-y-[22px] max-w-[60ch]">
          {ABOUT_PARAGRAPHS.map((p) => (
            <p key={p} className="text-[20px] sm:text-[24px] leading-[1.55] text-[var(--color-ink)]">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-16 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          What I&apos;ve built
        </div>
        <div className="space-y-2 mt-4">
          {BUILT.map((item) => (
            <div key={item.title} className="gradient-border-left py-6 pl-6 min-w-0">
              <h3 className="text-[19px] font-semibold mb-1.5 text-[var(--color-ink)]">{item.title}</h3>
              <p className="text-[16px] text-[var(--color-body)] leading-[1.55]">{item.body}</p>
              {item.links.length > 0 && (
                <div className="flex flex-col gap-2 mt-3 items-start">
                  {item.links.map((l) => (
                    <a
                      key={l}
                      href={l}
                      className="web-address text-[14px] text-[var(--color-ink)] font-medium border-b border-[var(--color-ink)] no-underline"
                    >
                      <WebAddress text={l} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-16 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          Background
        </div>
        <h2 className="text-[26px] sm:text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] mb-7 max-w-[24ch]">
          Aerospace and aviation, <span className="gradient-text">then agents</span>.
        </h2>
        <ul className="list-none max-w-[64ch]">
          {BACKGROUND.map((r) => (
            <li
              key={r.role}
              className="py-4 border-b border-[var(--color-rule)] last:border-b-0 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-6"
            >
              <div className="min-w-0">
                <div className="text-[16px] font-medium text-[var(--color-ink)] leading-[1.45]">{r.role}</div>
                {r.where && (
                  <div className="text-[15px] text-[var(--color-body)] leading-[1.5] mt-0.5">{r.where}</div>
                )}
              </div>
              <div className="text-[13px] text-[var(--color-muted)] font-medium flex-shrink-0">{r.when}</div>
            </li>
          ))}
        </ul>
        <p className="text-[14px] text-[var(--color-soft)] mt-6 max-w-[64ch]">{BACKGROUND_NOTE}</p>
      </section>

      <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-16 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          What I believe
        </div>
        <h2 className="text-[26px] sm:text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] mb-7 max-w-[24ch]">
          Operating principles I keep <span className="gradient-text">coming back to</span>.
        </h2>
        <div className="space-y-2 mt-4">
          {BELIEFS.map((b) => (
            <div key={b.h} className="gradient-border-left py-6 pl-6">
              <h3 className="text-[19px] font-semibold mb-1.5 text-[var(--color-ink)]">{b.h}</h3>
              <p className="text-[16px] text-[var(--color-body)] leading-[1.55]">{b.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-20 sm:py-24 border-t border-[var(--color-rule)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <h2 className="text-[26px] sm:text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] max-w-[24ch]">
            Say <span className="gradient-text">hello</span>.
          </h2>
          <div className="flex gap-4 items-center md:justify-end flex-wrap">
            <Link
              href="/contact"
              className="bg-[var(--color-ink)] text-[var(--color-page)] px-6 py-[13px] rounded-lg text-[15px] font-medium no-underline hover:opacity-85 transition-opacity"
            >
              Get in touch
            </Link>
            <Link
              href="/writing"
              className="text-[var(--color-ink)] px-1 py-[13px] text-[15px] font-medium border-b border-[var(--color-ink)] no-underline"
            >
              Read my writing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { getEssayMetaList } from "@/lib/essays";
import { SOCIAL } from "@/lib/social";
import { WebAddress } from "@/components/web-address";
import {
  ABOUT_PARAGRAPHS,
  BUILT,
  CONTACT_BODY,
  CONTACT_HEADING,
  EMAIL,
  HERO_BODY,
  HOW_I_THINK,
  HOW_I_WORK,
  POSITIONING,
} from "@/lib/profile";

function formatMonthYear(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-AU", { month: "long", year: "numeric" });
}

const linkClass =
  "web-address text-[14px] text-[var(--color-ink)] font-medium border-b border-[var(--color-ink)] no-underline";

export default function HomePage() {
  const recentEssays = getEssayMetaList().slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="max-w-[880px] mx-auto px-6 sm:px-8 pt-[96px] sm:pt-[140px] pb-[96px] sm:pb-[120px]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          Melbourne · Australia
        </div>
        <h1 className="text-[34px] sm:text-[56px] leading-[1.08] font-semibold tracking-[-0.025em] max-w-[22ch] mb-8 text-[var(--color-ink)]">
          {POSITIONING[0]}{" "}
          <span className="gradient-text">{POSITIONING[1]}</span>
        </h1>
        <p className="text-[19px] sm:text-[21px] leading-[1.55] text-[var(--color-body)] max-w-[58ch] mb-14">
          {HERO_BODY}
        </p>
        <div className="flex gap-4 items-center flex-wrap">
          <Link
            href="#built"
            className="bg-[var(--color-ink)] text-white px-6 py-[13px] rounded-lg text-[15px] font-medium no-underline hover:opacity-85 transition-opacity"
          >
            See what I&apos;ve built
          </Link>
          <Link
            href="/writing"
            className="text-[var(--color-ink)] px-1 py-[13px] text-[15px] font-medium border-b border-[var(--color-ink)] no-underline"
          >
            Read my writing
          </Link>
        </div>
      </section>

      {/* WHAT I'VE BUILT */}
      <section
        id="built"
        className="max-w-[880px] mx-auto px-6 sm:px-8 py-20 sm:py-24 border-t border-[var(--color-rule)] scroll-mt-8"
      >
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          What I&apos;ve built
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14 mt-4">
          {BUILT.map((item, i) => (
            <div key={item.title} className="min-w-0">
              <div className="text-[13px] text-[var(--color-muted)] font-medium mb-2">
                {(i + 1).toString().padStart(2, "0")}
              </div>
              <h3 className="text-[17px] font-semibold mb-3">{item.title}</h3>
              <p className="text-[var(--color-body)] text-[15px] leading-[1.6]">{item.body}</p>
              {item.links.length > 0 && (
                <div className="flex flex-col gap-2 mt-4 items-start">
                  {item.links.map((l) => (
                    <a key={l} href={l} className={linkClass}>
                      <WebAddress text={l} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* HOW I THINK */}
      <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-20 sm:py-24 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          How I think
        </div>
        <h2 className="text-[30px] sm:text-[36px] font-semibold tracking-[-0.02em] leading-[1.15] mb-7 max-w-[24ch]">
          {HOW_I_THINK.lead}
        </h2>
        <p className="text-[18px] leading-[1.7] text-[var(--color-body)] max-w-[64ch]">
          {HOW_I_THINK.body}
        </p>

        <ol className="list-none mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 max-w-[760px]">
          {HOW_I_WORK.map((s, i) => (
            <li key={s.step} className="gradient-border-left pl-5">
              <div className="text-[13px] text-[var(--color-muted)] font-medium mb-1">
                Step {i + 1}
              </div>
              <div className="text-[17px] font-semibold text-[var(--color-ink)] mb-1">{s.step}</div>
              <p className="text-[15px] leading-[1.6] text-[var(--color-body)]">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="pt-10">
          <a href={HOW_I_THINK.href} className={linkClass + " text-[15px]"}>
            <WebAddress text={HOW_I_THINK.href} />
          </a>
        </p>
      </section>

      {/* RECENT WRITING */}
      <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-20 sm:py-24 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          Recent writing
        </div>
        <h2 className="text-[30px] sm:text-[36px] font-semibold tracking-[-0.02em] leading-[1.15] mb-10 max-w-[24ch]">
          Notes from building <span className="gradient-text">with agents</span>.
        </h2>

        {recentEssays.length === 0 && (
          <p className="text-[var(--color-muted)] text-[15px]">Essays coming soon.</p>
        )}

        {recentEssays.length > 0 && (
          <>
            <div>
              {recentEssays.map((essay) => (
                <Link
                  key={essay.slug}
                  href={`/writing/${essay.slug}`}
                  className="writing-link flex flex-col sm:flex-row sm:justify-between sm:items-baseline py-6 gap-1 sm:gap-4 border-b border-[var(--color-rule)] last:border-b-0 no-underline text-inherit"
                >
                  <div className="text-[19px] font-medium text-[var(--color-ink)] max-w-[60ch] leading-[1.4]">
                    {essay.title}
                  </div>
                  <div className="text-[13px] text-[var(--color-muted)] font-medium flex-shrink-0">
                    {essay.readMinutes} min · {formatMonthYear(essay.date)}
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/writing"
                className="text-[15px] text-[var(--color-ink)] font-medium border-b border-[var(--color-ink)] no-underline inline-block"
              >
                All writing →
              </Link>
            </div>
          </>
        )}
      </section>

      {/* ABOUT PREVIEW */}
      <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-20 sm:py-24 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          About
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-start">
          <h2 className="text-[30px] sm:text-[36px] font-semibold tracking-[-0.02em] leading-[1.15] max-w-[24ch]">
            From aerospace <span className="gradient-text">to agents</span>.
          </h2>
          <div className="space-y-[18px] text-[17px] text-[var(--color-body)]">
            {ABOUT_PARAGRAPHS.slice(0, 2).map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="pt-2">
              <Link href="/about" className="text-[var(--color-ink)] border-b border-[var(--color-ink)] no-underline font-medium">
                Read the full story →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-20 sm:py-24 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          Contact
        </div>
        <h2 className="text-[30px] sm:text-[36px] font-semibold tracking-[-0.02em] leading-[1.15] mb-7 max-w-[24ch]">
          {CONTACT_HEADING}
        </h2>
        <p className="text-[var(--color-body)] max-w-[60ch] mt-4">{CONTACT_BODY}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          <ContactItem label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
          <ContactItem label="GitHub" value={SOCIAL.github.handle} href={SOCIAL.github.url} />
          <ContactItem label="LinkedIn" value={SOCIAL.linkedin.handle} href={SOCIAL.linkedin.url} />
          <ContactItem label="X" value={SOCIAL.x.handle} href={SOCIAL.x.url} />
          <ContactItem label="YouTube" value={SOCIAL.youtube.handle} href={SOCIAL.youtube.url} />
        </div>
      </section>
    </>
  );
}

function ContactItem({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="min-w-0">
      <div className="text-[13px] text-[var(--color-muted)] font-medium mb-2 tracking-[0.04em] uppercase">
        {label}
      </div>
      <a
        href={href}
        className="web-address text-[var(--color-ink)] text-[17px] font-medium border-b border-[#d1d5db] no-underline hover:border-[var(--color-brand-purple)] transition-colors"
      >
        <WebAddress text={value} />
      </a>
    </div>
  );
}

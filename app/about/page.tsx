import Link from "next/link";
import { WebAddress } from "@/components/web-address";
import { BELIEFS, SITE_DESCRIPTION } from "@/lib/profile";
import { pageMeta, profile } from "@/lib/agent";

// About tells the same story as the homepage, from the same facts (content/profile.json), so a person
// and an agent get one answer whichever page they read.
export const metadata = pageMeta("/about", "About", SITE_DESCRIPTION);

const label = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function AboutPage() {
  return (
    <>
      <section className="max-w-[880px] mx-auto px-6 sm:px-8 pt-[88px] sm:pt-[112px] pb-20">
        <p className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-6">About</p>
        <h1 className="text-[34px] sm:text-[48px] leading-[1.08] font-semibold tracking-[-0.025em] max-w-[22ch] mb-10 text-[var(--color-ink)]">
          {profile.positioning[0]}
        </h1>
        <div className="space-y-[22px] max-w-[60ch]">
          {profile.about.map((p) => (
            <p key={p} className="text-[19px] sm:text-[21px] leading-[1.55] text-[var(--color-ink)]">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section aria-labelledby="built" className="max-w-[880px] mx-auto px-6 sm:px-8 py-16 border-t border-[var(--color-rule)]">
        <h2 id="built" className="text-[26px] sm:text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] mb-6">
          Things I&apos;ve made
        </h2>
        <ul className="list-none m-0 p-0">
          {profile.builds.map((b) => (
            <li key={b.name} className="py-6 border-b border-[var(--color-rule)] last:border-b-0 min-w-0">
              <h3 className="text-[19px] font-semibold text-[var(--color-ink)]">{b.name}</h3>
              <p className="text-[13px] font-medium text-[var(--color-muted)] mt-0.5">{b.status}</p>
              <p className="text-[16px] text-[var(--color-body)] leading-[1.55] mt-2 max-w-[64ch]">{b.summary}</p>
              {b.links.length > 0 && (
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3">
                  {b.links.map((l) => (
                    <a key={l} href={l} className="web-address text-[15px] font-medium text-[var(--color-link)] no-underline hover:underline">
                      <WebAddress text={label(l)} />
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="career" className="max-w-[880px] mx-auto px-6 sm:px-8 py-16 border-t border-[var(--color-rule)]">
        <h2 id="career" className="text-[26px] sm:text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] mb-6">
          Career
        </h2>
        <ol className="list-none m-0 p-0">
          {profile.career.map((r) => (
            <li
              key={r.when + r.org}
              className="py-5 border-b border-[var(--color-rule)] last:border-b-0 grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-1 sm:gap-8"
            >
              <p className="text-[14px] font-semibold text-[var(--color-muted)] pt-0.5">{r.when}</p>
              <div className="min-w-0">
                <h3 className="text-[17px] font-semibold text-[var(--color-ink)] leading-[1.4]">{r.org}</h3>
                <p className="text-[15px] text-[var(--color-body)]">{r.role}</p>
                {r.detail && <p className="text-[15px] text-[var(--color-body)] leading-[1.55] mt-1.5 max-w-[64ch]">{r.detail}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="credentials" className="max-w-[880px] mx-auto px-6 sm:px-8 py-16 border-t border-[var(--color-rule)]">
        <h2 id="credentials" className="text-[26px] sm:text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] mb-6">
          Credentials
        </h2>
        <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {profile.credentials.map((c) => (
            <li key={c.name} className="py-3 border-b border-[var(--color-rule)]">
              <p className="text-[16px] font-medium text-[var(--color-ink)]">{c.name}</p>
              <p className="text-[14px] text-[var(--color-body)]">{c.issuer}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="believe" className="max-w-[880px] mx-auto px-6 sm:px-8 py-16 border-t border-[var(--color-rule)]">
        <h2 id="believe" className="text-[26px] sm:text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] mb-6">
          What I believe
        </h2>
        <div className="space-y-2">
          {BELIEFS.map((b) => (
            <div key={b.h} className="gradient-border-left py-5 pl-6">
              <h3 className="text-[18px] font-semibold mb-1 text-[var(--color-ink)]">{b.h}</h3>
              <p className="text-[16px] text-[var(--color-body)] leading-[1.55]">{b.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-20 sm:py-24 border-t border-[var(--color-rule)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-[26px] sm:text-[28px] font-semibold tracking-[-0.015em] leading-[1.2]">Say hello.</h2>
            <p className="text-[16px] text-[var(--color-body)] mt-2">{profile.contact}</p>
          </div>
          <div className="flex gap-4 items-center md:justify-end flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="bg-[var(--color-ink)] text-[var(--color-page)] px-6 py-[13px] rounded-full text-[15px] font-semibold no-underline hover:opacity-85 transition-opacity"
            >
              Email me
            </a>
            <Link href="/writing" className="text-[var(--color-link)] px-1 py-[13px] text-[15px] font-medium no-underline hover:underline">
              Read my writing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

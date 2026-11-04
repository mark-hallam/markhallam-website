import { SOCIAL } from "@/lib/social";
import { pageMeta } from "@/lib/agent";
import { WebAddress } from "@/components/web-address";
import { CONTACT_BODY, CONTACT_HEADING, CONTACT_TOPICS, EMAIL } from "@/lib/profile";

export const metadata = pageMeta("/contact", "Contact", CONTACT_BODY);

type Channel = { label: string; href: string; value: string; note?: string };

const CHANNELS: Channel[] = [
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    value: EMAIL,
    note: "The most reliable way to reach me.",
  },
  {
    label: SOCIAL.linkedin.label,
    href: SOCIAL.linkedin.url,
    value: SOCIAL.linkedin.handle,
  },
  {
    label: SOCIAL.github.label,
    href: SOCIAL.github.url,
    value: SOCIAL.github.handle,
    note: "Public code: LVLme, mStack and DAC.",
  },
  {
    label: SOCIAL.x.label,
    href: SOCIAL.x.url,
    value: SOCIAL.x.handle,
  },
  {
    label: SOCIAL.youtube.label,
    href: SOCIAL.youtube.url,
    value: SOCIAL.youtube.handle,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="max-w-[880px] mx-auto px-6 sm:px-8 pt-[72px] sm:pt-[120px] pb-10 sm:pb-16">
        <div className="gradient-text uppercase text-[0.8125rem] font-semibold tracking-[0.04em] mb-8">
          Contact
        </div>
        <h1 className="text-[2.375rem] sm:text-[3.5rem] leading-[1.05] font-semibold tracking-[-0.025em] max-w-[18ch] mb-8 text-[var(--color-ink)]">
          {CONTACT_HEADING}
        </h1>
        <p className="text-[1.1875rem] sm:text-[1.3125rem] leading-[1.55] text-[var(--color-body)] max-w-[56ch]">
          {CONTACT_BODY}
        </p>
      </section>

      <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-6 sm:py-16 border-t border-[var(--color-rule)]">
        {CHANNELS.map((c) => (
          <div
            key={c.label}
            className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-12 py-7 border-b border-[var(--color-rule)] last:border-b-0 items-start"
          >
            <div className="text-[0.8125rem] font-semibold tracking-[0.04em] uppercase text-[var(--color-muted)] pt-1">
              {c.label}
            </div>
            <div className="min-w-0">
              <a
                href={c.href}
                className="web-address text-[1.1875rem] sm:text-[1.375rem] font-medium text-[var(--color-ink)] no-underline border-b border-[var(--color-rule)] inline mb-2.5 hover:border-[var(--color-brand-purple)] transition-colors"
              >
                <WebAddress text={c.value} />
              </a>
              {c.note && (
                <div className="text-[0.9375rem] text-[var(--color-soft)] leading-[1.55] max-w-[56ch] mt-2.5">
                  {c.note}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-20 border-t border-[var(--color-rule)]">
        <h2 className="text-[1.625rem] sm:text-[1.75rem] font-semibold tracking-[-0.015em] leading-[1.2] mb-7 max-w-[24ch]">
          What I&apos;m happy to <span className="gradient-text">talk about</span>
        </h2>
        <ul className="list-none mt-8 max-w-[64ch]">
          {CONTACT_TOPICS.map((item) => (
            <li
              key={item}
              className="py-2.5 border-b border-[var(--color-rule)] last:border-b-0 text-[1rem] leading-[1.55] text-[var(--color-body)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

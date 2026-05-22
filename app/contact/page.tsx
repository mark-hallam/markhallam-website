import { SOCIAL } from "@/lib/social";

export const metadata = {
  title: "Contact",
  description:
    "Mark Hallam — how to reach me. Direct email is the preferred channel. Advisory engagements limited.",
};

const CHANNELS = [
  {
    label: "Email · Preferred",
    href: "mailto:mark@skycot.com",
    value: "mark@skycot.com",
    note: "The first place anything substantive should go. Long emails welcome — I read all of them and reply to most.",
  },
  {
    label: SOCIAL.linkedin.label,
    href: SOCIAL.linkedin.url,
    value: SOCIAL.linkedin.handle,
    note: "Use for connection requests with context. I do not check inbox messages daily — email is faster.",
  },
  {
    label: SOCIAL.x.label,
    href: SOCIAL.x.url,
    value: SOCIAL.x.handle,
    note: "Mostly short notes on whatever I am thinking about. Replies and DMs are read intermittently.",
  },
  {
    label: SOCIAL.youtube.label,
    href: SOCIAL.youtube.url,
    value: SOCIAL.youtube.handle,
    note: "Longer-form video — talks, walk-throughs, and the occasional essay-on-camera.",
  },
];

const GOOD_FIT = [
  "Executive AI strategy that needs to survive contact with the org chart",
  "Pilot-to-production playbooks for enterprise teams",
  "Operating-model design for businesses adopting AI agents",
  "Advisory board roles for AI-adjacent companies in Australia or APAC",
  "Speaking engagements on AI and operations (selective)",
  "Press, podcasts, journalists working on AI policy or enterprise adoption",
];

const LESS_GOOD_FIT = [
  "Vendor pitches for AI tooling — I rarely change my stack on cold outreach",
  "Investment pitches — Skycot is not a fund, and I do not angel-invest in AI startups",
  "Generic “could we collaborate” emails with no specific question",
  "Hiring requests — Skycot’s job openings are at skycot.com/jobs",
  "Free strategic consulting framed as a “quick coffee”",
  "Resume reviews or career advice for people I do not know",
];

export default function ContactPage() {
  return (
    <>
      <section className="max-w-[880px] mx-auto px-8 pt-[120px] pb-16">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          Contact
        </div>
        <h1 className="text-[38px] sm:text-[56px] leading-[1.05] font-semibold tracking-[-0.025em] max-w-[18ch] mb-8 text-[var(--color-ink)]">
          The best way to <span className="gradient-text">reach me</span>.
        </h1>
        <p className="text-[21px] leading-[1.55] text-[var(--color-body)] max-w-[56ch]">
          Direct email is reliably read. I keep a presence on LinkedIn and X but treat them as public squares — for anything substantive, write.
        </p>
      </section>

      <section className="max-w-[880px] mx-auto px-8 py-16 border-t border-[var(--color-rule)]">
        {CHANNELS.map((c) => (
          <div
            key={c.label}
            className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-12 py-7 border-b border-[var(--color-rule)] last:border-b-0 items-start"
          >
            <div className="text-[13px] font-semibold tracking-[0.04em] uppercase text-[var(--color-muted)] pt-1">
              {c.label}
            </div>
            <div>
              <a
                href={c.href}
                className="text-[22px] font-medium text-[var(--color-ink)] no-underline border-b border-[#d1d5db] inline-block mb-2.5 hover:border-[var(--color-brand-purple)] transition-colors"
              >
                {c.value}
              </a>
              <div className="text-[15px] text-[var(--color-soft)] leading-[1.55] max-w-[56ch]">
                {c.note}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-[880px] mx-auto px-8 py-20 border-t border-[var(--color-rule)]">
        <h2 className="text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] mb-7 max-w-[24ch]">
          What I am best placed to <span className="gradient-text">talk to about</span>.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div>
            <h3 className="gradient-text uppercase text-sm font-semibold tracking-[0.04em] mb-4">
              Good fit
            </h3>
            <ul className="list-none">
              {GOOD_FIT.map((item) => (
                <li
                  key={item}
                  className="py-2.5 border-b border-[var(--color-rule)] last:border-b-0 text-[16px] leading-[1.55] text-[var(--color-body)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-[0.04em] uppercase mb-4 text-[var(--color-ink)]">
              Less good fit
            </h3>
            <ul className="list-none">
              {LESS_GOOD_FIT.map((item) => (
                <li
                  key={item}
                  className="py-2.5 border-b border-[var(--color-rule)] last:border-b-0 text-[16px] leading-[1.55] text-[var(--color-body)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[880px] mx-auto px-8 py-20 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          How I respond
        </div>
        <div className="space-y-[18px] max-w-[64ch]">
          <p className="text-[18px] leading-[1.7] text-[var(--color-body)]">
            Most emails get a reply within a week. I write replies in batches, usually on Friday afternoons in Melbourne, which is why a Tuesday email may sit until Friday before a response.
          </p>
          <p className="text-[18px] leading-[1.7] text-[var(--color-body)]">
            If your message is time-sensitive, say so in the subject line — that bumps it out of the Friday batch and into the same day. If it is genuinely urgent and you are an existing client, you have my phone number.
          </p>
          <p className="text-[18px] leading-[1.7] text-[var(--color-body)]">
            If a week passes and you have not heard from me, the email was lost or buried and a polite follow-up is welcome. It is never an intentional silence.
          </p>
        </div>
      </section>
    </>
  );
}

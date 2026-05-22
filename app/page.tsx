import Link from "next/link";
import { getEssayMetaList } from "@/lib/essays";
import { SOCIAL } from "@/lib/social";

function formatMonthYear(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-AU", { month: "long", year: "numeric" });
}

export default function HomePage() {
  const recentEssays = getEssayMetaList().slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="max-w-[880px] mx-auto px-8 pt-[140px] pb-[120px]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          Melbourne · Australia
        </div>
        <h1 className="text-[38px] sm:text-[56px] leading-[1.05] font-semibold tracking-[-0.025em] max-w-[18ch] mb-8 text-[var(--color-ink)]">
          AI advisory and product work for organisations that need it to{" "}
          <span className="gradient-text">move real numbers</span>.
        </h1>
        <p className="text-[21px] leading-[1.55] text-[var(--color-body)] max-w-[56ch] mb-14">
          I help leadership teams ship AI work that survives contact with reality — not pilots that die in committee. Founder of Skycot. Twenty years across operations, growth and product.
        </p>
        <div className="flex gap-4 items-center flex-wrap">
          <Link
            href="/contact"
            className="bg-[var(--color-ink)] text-white px-6 py-[13px] rounded-lg text-[15px] font-medium no-underline hover:opacity-85 transition-opacity"
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
      </section>

      {/* WHAT I DO */}
      <section className="max-w-[880px] mx-auto px-8 py-24 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          What I do
        </div>
        <h2 className="text-[36px] font-semibold tracking-[-0.02em] leading-[1.15] mb-7 max-w-[24ch]">
          Three things, with the same <span className="gradient-text">operating principle</span>.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div>
            <h3 className="text-[17px] font-semibold mb-3">Advisory</h3>
            <p className="text-[var(--color-body)] text-[15px] leading-[1.6]">
              Working with executive teams on AI strategy that survives contact with the org chart. A small number of engagements at any time.
            </p>
          </div>
          <div>
            <h3 className="text-[17px] font-semibold mb-3">Skycot</h3>
            <p className="text-[var(--color-body)] text-[15px] leading-[1.6]">
              Founder and CEO. Building an enterprise agent platform that takes AI work from pilot to production without the usual breakage.
            </p>
          </div>
          <div>
            <h3 className="text-[17px] font-semibold mb-3">Writing</h3>
            <p className="text-[var(--color-body)] text-[15px] leading-[1.6]">
              Essays on AI, operations, and what is actually working in the field — not what the vendor decks claim.
            </p>
          </div>
        </div>
      </section>

      {/* RECENT WRITING */}
      <section className="max-w-[880px] mx-auto px-8 py-24 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          Recent writing
        </div>
        <h2 className="text-[36px] font-semibold tracking-[-0.02em] leading-[1.15] mb-7 max-w-[24ch]">
          What I have been <span className="gradient-text">thinking about</span>.
        </h2>
        <div className="mt-4">
          {recentEssays.length === 0 && (
            <p className="text-[var(--color-muted)] text-[15px]">Essays coming soon.</p>
          )}
          {recentEssays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/writing/${essay.slug}`}
              className="writing-link flex flex-col sm:flex-row sm:justify-between sm:items-baseline py-7 gap-1 sm:gap-4 border-b border-[var(--color-rule)] last:border-b-0 no-underline text-inherit"
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
      </section>

      {/* ABOUT PREVIEW */}
      <section className="max-w-[880px] mx-auto px-8 py-24 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          About
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-20 items-start">
          <h2 className="text-[36px] font-semibold tracking-[-0.02em] leading-[1.15] max-w-[24ch]">
            Twenty years of <span className="gradient-text">operations, growth and product</span>.
          </h2>
          <div className="space-y-[18px] text-[17px] text-[var(--color-body)]">
            <p>
              I work from Melbourne with a small number of advisory clients alongside Skycot — focused on organisations that want AI to move <span className="gradient-text font-medium">real numbers</span>, not headlines.
            </p>
            <p>
              Before Skycot I held operating roles across growth-stage businesses, mostly in roles that ended in &quot;of operations&quot; or &quot;of growth&quot;. The throughline has always been: someone has a complicated machine, the machine is leaking value, and the work is to find the leak and seal it.
            </p>
            <p>That is still the work. AI is the new instrument. The job has not changed.</p>
            <p className="pt-2">
              <Link href="/about" className="text-[var(--color-ink)] border-b border-[var(--color-ink)] no-underline font-medium">
                Read the full story →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-[880px] mx-auto px-8 py-24 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          Contact
        </div>
        <h2 className="text-[36px] font-semibold tracking-[-0.02em] leading-[1.15] mb-7 max-w-[24ch]">
          The best way to <span className="gradient-text">reach me</span>.
        </h2>
        <p className="text-[var(--color-body)] max-w-[60ch] mt-4">
          Direct email is reliably read. I keep a LinkedIn presence but treat it as a public square — for anything substantive, write.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          <ContactItem label="Email" value="mark@skycot.com" href="mailto:mark@skycot.com" />
          <ContactItem
            label="LinkedIn"
            value={SOCIAL.linkedin.handle}
            href={SOCIAL.linkedin.url}
          />
          <ContactItem label="X" value={SOCIAL.x.handle} href={SOCIAL.x.url} />
        </div>
      </section>
    </>
  );
}

function ContactItem({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div>
      <div className="text-[13px] text-[var(--color-muted)] font-medium mb-2 tracking-[0.04em] uppercase">
        {label}
      </div>
      <a
        href={href}
        className="text-[var(--color-ink)] text-[17px] font-medium border-b border-[#d1d5db] no-underline hover:border-[var(--color-brand-purple)] transition-colors"
      >
        {value}
      </a>
    </div>
  );
}

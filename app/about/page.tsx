import Link from "next/link";
import { ABOUT_PARAGRAPHS, BUILT, SITE_DESCRIPTION } from "@/lib/profile";

export const metadata = {
  title: "About",
  description: SITE_DESCRIPTION,
};

const BELIEFS = [
  {
    h: "The moat is not the model. The moat is your ideas.",
    p: "Every team has access to the same models. The difference is what they decide to point them at.",
  },
  {
    h: "Ship the eighty-percent solution.",
    p: "Working software beats the perfect solution that arrives late. Real users teach you what the perfect solution should have been.",
  },
  {
    h: "Operations is the variable nobody romanticises.",
    p: "It is also the variable that decides every outcome.",
  },
  {
    h: "Question the requirement first.",
    p: "If something does not make sense, raise it. Do not invent. Most projects fail at requirement, not at delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="max-w-[880px] mx-auto px-8 pt-[120px] pb-20">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          About
        </div>
        <h1 className="text-[38px] sm:text-[56px] leading-[1.05] font-semibold tracking-[-0.025em] max-w-[22ch] text-[var(--color-ink)]">
          I have spent twenty years finding leaks in machines and{" "}
          <span className="gradient-text">sealing them</span>. AI is the latest instrument.
        </h1>
      </section>

      <section className="max-w-[880px] mx-auto px-8 py-16 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          The throughline
        </div>
        <h2 className="text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] mb-7 max-w-[24ch]">
          Twenty years across operations, growth and product.
        </h2>
        <div className="space-y-[22px] max-w-[64ch]">
          {ABOUT_PARAGRAPHS.map((p) => (
            <p key={p} className="text-[18px] leading-[1.7] text-[#2c2c54]">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="max-w-[880px] mx-auto px-8 py-16 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          What I&apos;ve built
        </div>
        <div className="space-y-2 mt-4">
          {BUILT.map((item) => (
            <div key={item.title} className="gradient-border-left py-6 pl-6">
              <h3 className="text-[19px] font-semibold mb-1.5 text-[var(--color-ink)]">{item.title}</h3>
              <p className="text-[16px] text-[var(--color-body)] leading-[1.55]">{item.body}</p>
              {item.links.length > 0 && (
                <div className="flex gap-5 flex-wrap mt-3">
                  {item.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-[14px] text-[var(--color-ink)] font-medium border-b border-[var(--color-ink)] no-underline"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[880px] mx-auto px-8 py-16 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          What I believe
        </div>
        <h2 className="text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] mb-7 max-w-[24ch]">
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

      <section className="max-w-[880px] mx-auto px-8 py-16 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          Outside the work
        </div>
        <h2 className="text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] mb-7 max-w-[24ch]">
          The unsexy details.
        </h2>
        <div className="space-y-[22px] max-w-[64ch]">
          <p className="text-[18px] leading-[1.7] text-[#2c2c54]">
            I live in Melbourne with my family. Most of my reading is operations history — Peter Drucker, Andy Grove, the older stuff that holds up. I cycle when the weather agrees. I write essays when something nags at me long enough that writing is cheaper than not writing.
          </p>
          <p className="text-[18px] leading-[1.7] text-[#2c2c54]">
            If you have read this far and want to talk, the best way is below.
          </p>
        </div>
      </section>

      <section className="max-w-[880px] mx-auto px-8 py-24 border-t border-[var(--color-rule)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <h2 className="text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] max-w-[24ch]">
            Let us <span className="gradient-text">talk</span>.
          </h2>
          <div className="flex gap-4 items-center md:justify-end flex-wrap">
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
        </div>
      </section>
    </>
  );
}

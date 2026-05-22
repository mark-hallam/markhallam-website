import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Mark Hallam — twenty years across operations, growth and product. Founder of Skycot. Advisor to leadership teams across Australia.",
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
        <h1 className="text-[38px] sm:text-[56px] leading-[1.05] font-semibold tracking-[-0.025em] max-w-[22ch] mb-8 text-[var(--color-ink)]">
          I have spent twenty years finding leaks in machines and{" "}
          <span className="gradient-text">sealing them</span>. AI is the latest instrument.
        </h1>
        <p className="text-[21px] leading-[1.55] text-[var(--color-body)] max-w-[56ch]">
          Founder of Skycot. Advisor to leadership teams across Australia. The job has not changed — only the toolkit has.
        </p>
      </section>

      <section className="max-w-[880px] mx-auto px-8 py-16 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          The throughline
        </div>
        <h2 className="text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] mb-7 max-w-[24ch]">
          Twenty years across operations, growth and product.
        </h2>
        <div className="space-y-[22px] max-w-[64ch]">
          <p className="text-[18px] leading-[1.7] text-[#2c2c54]">
            Before Skycot I held operating roles across growth-stage businesses, most of them with titles ending in &quot;of operations&quot; or &quot;of growth&quot;. The work changed every few years — different industries, different scales, different problems on paper — but the underlying job was always the same.
          </p>
          <p className="text-[18px] leading-[1.7] text-[#2c2c54]">
            Someone has a complicated machine. The machine is leaking value somewhere. The work is to find the leak and seal it. Repeat.
          </p>
          <p className="text-[18px] leading-[1.7] text-[#2c2c54]">
            That is what I learned to do, and that is still what I do. AI did not change the job. AI changed the instruments I have to do the job with — and the instruments are markedly better than the ones I started with twenty years ago.
          </p>
        </div>
      </section>

      <section className="max-w-[880px] mx-auto px-8 py-16 border-t border-[var(--color-rule)]">
        <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
          Why Skycot, why now
        </div>
        <h2 className="text-[28px] font-semibold tracking-[-0.015em] leading-[1.2] mb-7 max-w-[24ch]">
          Most organisations are losing the AI moment{" "}
          <span className="gradient-text">in slow motion</span>.
        </h2>
        <div className="space-y-[22px] max-w-[64ch]">
          <p className="text-[18px] leading-[1.7] text-[#2c2c54]">
            By 2024 it was clear that the constraint on enterprise AI work was not the model. The model was already good enough. The constraint was the operating layer underneath it — the agents, the governance, the audit trails, the way work gets handed between humans and machines. Without that layer, every pilot dies in committee. With it, the same pilot ships in nine months and is invisible by month twelve.
          </p>
          <p className="text-[18px] leading-[1.7] text-[#2c2c54]">
            I started Skycot in late 2024 because I wanted to build that operating layer for Australian and enterprise-grade organisations that wanted AI to move real numbers, not headlines. We are still small, intentionally, and the work is going well.
          </p>
          <p className="text-[18px] leading-[1.7] text-[#2c2c54]">
            I keep a small advisory practice alongside the company. The two activities feed each other — the advisory work tells me what enterprises actually need, and Skycot tells me what is technically possible. Most weeks I do both.
          </p>
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

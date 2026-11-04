import { WebAddress } from "@/components/web-address";
import { pageMeta, profile } from "@/lib/agent";

// gysom.com says DAC's documentation moved here; this page says what DAC is and where it now lives.
const dac = profile.builds.find((b) => b.name.startsWith("DAC"))!;

export const metadata = pageMeta("/dac", "DAC (Declarative Agent Compilation)", dac.summary);

export default function DacPage() {
  return (
    <section className="max-w-[880px] mx-auto px-6 sm:px-8 pt-[88px] sm:pt-[120px] pb-24">
      <p className="gradient-text uppercase text-[0.8125rem] font-semibold tracking-[0.04em] mb-6">{dac.status}</p>
      <h1 className="text-[2.125rem] sm:text-[3rem] leading-[1.08] font-semibold tracking-[-0.025em] max-w-[22ch] mb-6 text-[var(--color-ink)]">
        {dac.name}
      </h1>
      <p className="text-[1.1875rem] sm:text-[1.3125rem] leading-[1.55] text-[var(--color-body)] max-w-[56ch]">{dac.summary}</p>
      <p className="text-[1.0625rem] text-[var(--color-body)] mt-8">The code and its documentation are on GitHub:</p>
      <ul className="flex flex-col gap-2 mt-3 list-none p-0 text-[1.0625rem] font-medium">
        {dac.links.map((l) => (
          <li key={l}>
            <a className="web-address text-[var(--color-link)] no-underline hover:underline" href={l}>
              <WebAddress text={l.replace(/^https?:\/\//, "")} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

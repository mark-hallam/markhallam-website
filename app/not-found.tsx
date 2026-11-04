import Link from "next/link";
import { EMAIL } from "@/lib/profile";

export const metadata = { title: "Page not found" };

// A page that does not exist: say so plainly and give the ways forward.
export default function NotFound() {
  return (
    <section className="max-w-[880px] mx-auto px-6 sm:px-8 pt-[88px] sm:pt-[120px] pb-24">
      <p className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-6">Page not found</p>
      <h1 className="text-[34px] sm:text-[48px] leading-[1.08] font-semibold tracking-[-0.025em] max-w-[22ch] mb-6 text-[var(--color-ink)]">
        There&apos;s nothing at this address.
      </h1>
      <p className="text-[19px] leading-[1.55] text-[var(--color-body)] max-w-[56ch]">
        It may have moved. One of these will get you where you were going.
      </p>
      <ul className="flex flex-wrap gap-x-7 gap-y-3 mt-8 list-none p-0 text-[17px] font-medium">
        <li><Link className="text-[var(--color-link)] no-underline hover:underline" href="/">Home</Link></li>
        <li><Link className="text-[var(--color-link)] no-underline hover:underline" href="/#made">Things I&apos;ve made</Link></li>
        <li><Link className="text-[var(--color-link)] no-underline hover:underline" href="/writing">Writing</Link></li>
        <li><a className="text-[var(--color-link)] no-underline hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
      </ul>
    </section>
  );
}

import Link from "next/link";
import { getEssayMetaList, type EssayMeta } from "@/lib/essays";
import { FollowMe } from "@/components/follow-me";
import { pageMeta } from "@/lib/agent";

export const metadata = pageMeta(
  "/writing",
  "Writing",
  "Essays on building real software with AI agents: framing work so agents can't misread it, keeping a swarm from drifting, and checking the result. By Mark Hallam.",
  { "application/rss+xml": "/feed.xml" },
);

function formatShortMonth(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-AU", { month: "short", year: "numeric" });
}

export default function WritingIndexPage() {
  const essays = getEssayMetaList();
  const byYear = essays.reduce<Record<string, EssayMeta[]>>((acc, essay) => {
    const year = new Date(essay.date).getFullYear().toString();
    (acc[year] ||= []).push(essay);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));

  return (
    <>
      <section className="max-w-[880px] mx-auto px-6 sm:px-8 pt-[96px] sm:pt-[120px] pb-20">
        <div className="gradient-text uppercase text-[0.8125rem] font-semibold tracking-[0.04em] mb-8">
          Writing
        </div>
        <h1 className="text-[2.375rem] sm:text-[3.5rem] leading-[1.05] font-semibold tracking-[-0.025em] max-w-[18ch] mb-8 text-[var(--color-ink)]">
          Essays on building with, and for,{" "}
          <span className="gradient-text">AI agents</span>.
        </h1>
        <p className="text-[1.1875rem] sm:text-[1.3125rem] leading-[1.55] text-[var(--color-body)] max-w-[56ch]">
          Notes from building real software with Claude and Codex as the team: how to frame work so agents can&apos;t misread it, how to stop a swarm of agents drifting, and how to check the result like an engineer.
        </p>
        {essays.length > 0 && (
          <div className="mt-9 text-sm text-[var(--color-muted)]">
            {essays.length} essay{essays.length === 1 ? "" : "s"}
          </div>
        )}
      </section>

      {essays.length === 0 && (
        <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-16 border-t border-[var(--color-rule)] text-center text-[var(--color-muted)]">
          Essays coming soon.
        </section>
      )}

      {years.map((year) => (
        <div key={year} className="max-w-[880px] mx-auto px-6 sm:px-8 py-16 border-t border-[var(--color-rule)]">
          <div className="text-sm font-semibold text-[var(--color-muted)] mb-6 tracking-[0.04em]">
            {year}
          </div>
          {byYear[year].map((essay) => (
            <Link
              key={essay.slug}
              href={`/writing/${essay.slug}`}
              className="writing-link block py-7 border-b border-[var(--color-rule)] last:border-b-0 no-underline text-inherit"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-6 mb-2">
                <h2 className="text-[1.375rem] font-medium text-[var(--color-ink)] leading-[1.3] max-w-[56ch]">
                  {essay.title}
                </h2>
                <div className="text-[0.8125rem] text-[var(--color-muted)] font-medium flex-shrink-0">
                  {essay.readMinutes} min · {formatShortMonth(essay.date)}
                </div>
              </div>
              {essay.dek && (
                <div className="text-[1rem] text-[var(--color-body)] leading-[1.55] max-w-[64ch]">
                  {essay.dek}
                </div>
              )}
            </Link>
          ))}
        </div>
      ))}

      <FollowMe />
    </>
  );
}

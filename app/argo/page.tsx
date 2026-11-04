import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ARGO, ARGO_PROOF, ARGO_RECORDS, ARGO_SOURCES } from "@/content/argo";
import { SITE, pageMeta, profile } from "@/lib/agent";

// The Argo story: what it was, the dated timeline beside similar launches, what was live and what was only built,
// how one person built it with AI agents, what went wrong and what it taught. Content lives in content/argo.ts,
// shared with /argo.md and llms.txt.
export const metadata = pageMeta(
  "/argo",
  "The Argo story",
  "Argo: AI teammates built from a template or plain English, with approvals and a tamper evident log, built in 57 days by one person directing AI agents. What was live, what was only built, and what it taught.",
  { "text/markdown": "/argo.md" },
);

const section = "max-w-[880px] mx-auto px-6 sm:px-8 py-14 sm:py-16 border-t border-[var(--color-rule)]";
const h2 = "text-[1.625rem] sm:text-[1.875rem] font-semibold tracking-[-0.02em] leading-[1.2] mb-6 text-[var(--color-ink)]";
const body = "text-[1.0625rem] sm:text-[1.125rem] leading-[1.65] text-[var(--color-body)] max-w-[64ch]";

export default function ArgoPage() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARGO.title,
    description: ARGO.lede,
    url: `${SITE}/argo`,
    datePublished: "2026-11-05",
    author: { "@id": `${SITE}/#mark`, "@type": "Person", name: profile.name },
    about: {
      "@type": "SoftwareApplication",
      name: "Argo",
      applicationCategory: "BusinessApplication",
      description: ARGO.what.join(" "),
      creator: { "@id": `${SITE}/#mark` },
      dateCreated: "2026-04-29",
    },
  };
  return (
    <>
      <JsonLd data={data} />

      <section className="max-w-[880px] mx-auto px-6 sm:px-8 pt-[72px] sm:pt-[104px] pb-12">
        <p className="gradient-text uppercase text-[0.8125rem] font-semibold tracking-[0.04em] mb-5">The Argo story</p>
        <h1 className="text-[2.125rem] sm:text-[3.25rem] leading-[1.06] font-semibold tracking-[-0.03em] max-w-[20ch] mb-7 text-[var(--color-ink)]">
          {ARGO.title}.
        </h1>
        <p className="text-[1.1875rem] sm:text-[1.3125rem] leading-[1.55] text-[var(--color-ink)] max-w-[60ch]">{ARGO.lede}</p>
        <p className="mt-4 text-[1.0625rem] sm:text-[1.125rem] leading-[1.6] text-[var(--color-body)] max-w-[60ch]">{ARGO.voiceLine}</p>
        <blockquote className="gradient-border-left mt-8 pl-5 m-0 text-[1.1875rem] sm:text-[1.375rem] leading-[1.45] font-semibold text-[var(--color-ink)] max-w-[52ch]">
          {ARGO.ownLine}
        </blockquote>
        <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-10 [&>div:last-child:nth-child(odd)]:col-span-2 sm:[&>div:last-child:nth-child(odd)]:col-span-1">
          {ARGO.stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-[var(--color-rule)] p-4">
              <dt className="sr-only">{s.l}</dt>
              <dd className="m-0">
                <span className="block gradient-text text-[2rem] sm:text-[2.375rem] font-bold leading-none tracking-[-0.03em]">{s.n}</span>
                <span className="block mt-2 text-[0.9375rem] leading-[1.35] text-[var(--color-body)]">{s.l}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[0.875rem] text-[var(--color-muted)] max-w-[64ch]">{ARGO.statsNote}</p>
        <p className="mt-6 text-[1rem]">
          <a href={`mailto:${profile.email}?subject=${encodeURIComponent("About Argo")}`} className="text-[var(--color-link)] font-medium no-underline hover:underline">
            Email me about Argo
          </a>
          <span className="text-[var(--color-muted)]"> · </span>
          <a href="#next" className="text-[var(--color-link)] font-medium no-underline hover:underline">What I want next</a>
        </p>
      </section>

      <section aria-labelledby="what" className={section}>
        <h2 id="what" className={h2}>What it was</h2>
        <div className="space-y-5">
          {ARGO.what.map((p) => (
            <p key={p} className={body}>{p}</p>
          ))}
        </div>
        <ul className="list-none p-0 m-0 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {ARGO.shots.map((s, i) => (
            <li key={s.src} className={i === 0 ? "sm:col-span-2" : ""}>
              <figure className="m-0">
                <a href={s.src} className="block rounded-xl overflow-hidden border border-[var(--color-rule)]" aria-label={`Open full size: ${s.caption}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={s.alt} width={1440} height={900} loading="lazy" className="block w-full h-auto" />
                </a>
                <figcaption className="mt-2 text-[0.9375rem] text-[var(--color-body)]">{s.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[0.875rem] text-[var(--color-muted)]">{ARGO.shotsNote}</p>
      </section>

      <section aria-labelledby="timeline" className={section}>
        <h2 id="timeline" className={h2}>The dates</h2>
        <ol className="list-none p-0 m-0 border-t border-[var(--color-rule)]">
          {ARGO.timeline.map((t) => {
            const mine = t.who === "Argo";
            return (
              <li key={t.date + t.what} className="grid grid-cols-1 sm:grid-cols-[9.5rem_6rem_1fr] gap-x-4 gap-y-1 py-3.5 border-b border-[var(--color-rule)]">
                <span className="text-[0.9375rem] font-semibold text-[var(--color-ink)] tabular-nums">{t.date}</span>
                <span className={"text-[0.8125rem] font-semibold self-center justify-self-start rounded-full px-2.5 py-0.5 " + (mine ? "bg-[var(--color-ink)] text-[var(--color-page)]" : "bg-[var(--color-rule)] text-[var(--color-ink)]")}>
                  {t.who}
                </span>
                <span className="text-[1rem] leading-[1.5] text-[var(--color-body)]">
                  {t.what}
                  {t.source !== undefined && (
                    <>
                      {" "}
                      <a className="text-[var(--color-link)] no-underline hover:underline whitespace-nowrap" href={ARGO_SOURCES[t.source].url}>
                        {ARGO_SOURCES[t.source].short}
                      </a>
                    </>
                  )}
                </span>
              </li>
            );
          })}
        </ol>
        <p className="mt-5 text-[0.9375rem] leading-[1.55] text-[var(--color-body)] max-w-[64ch]">{ARGO.timelineNote}</p>
      </section>

      <section aria-labelledby="status" className={section}>
        <h2 id="status" className={h2}>What was live, and what was only built</h2>
        <ul className="list-none p-0 m-0 border-t border-[var(--color-rule)]">
          {ARGO.status.map((r) => (
            <li key={r.item} className="py-4 border-b border-[var(--color-rule)] grid grid-cols-1 sm:grid-cols-[1fr_8.5rem] gap-x-6 gap-y-1.5">
              <div>
                <p className="text-[1.0625rem] font-semibold text-[var(--color-ink)]">{r.item}</p>
                <p className="text-[0.9375rem] leading-[1.5] text-[var(--color-body)] mt-0.5">{r.note}</p>
              </div>
              <span className={"argo-state self-start justify-self-start sm:justify-self-end text-[0.8125rem] font-semibold rounded-full px-2.5 py-0.5"} data-state={r.state}>
                {r.state}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[0.9375rem] leading-[1.55] text-[var(--color-body)] max-w-[64ch]">{ARGO_RECORDS}</p>
      </section>

      <section aria-labelledby="how" className={section}>
        <h2 id="how" className={h2}>How I built it</h2>
        <div className="space-y-5">
          {ARGO.how.map((p) => (
            <p key={p} className={body}>{p}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="wrong" className={section}>
        <h2 id="wrong" className={h2}>What went wrong, and what it taught me</h2>
        <ul className="list-none p-0 m-0 space-y-4">
          {ARGO.wrong.map((p) => (
            <li key={p} className={"gradient-border-left pl-5 " + body}>{p}</li>
          ))}
        </ul>
        <p className={"mt-8 font-semibold text-[var(--color-ink)] " + body}>{ARGO.learnedLead}</p>
        <ol className="mt-4 space-y-2 pl-6 list-decimal marker:text-[var(--color-muted)]">
          {ARGO.learned.map((p) => (
            <li key={p} className={body}>{p}</li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="proof" className={section}>
        <h2 id="proof" className={h2}>Related work you can check</h2>
        <ul className="list-none p-0 m-0 border-t border-[var(--color-rule)]">
          {ARGO_PROOF.map((p) => (
            <li key={p.url}>
              <a href={p.url} className="flex items-center justify-between gap-4 py-4 border-b border-[var(--color-rule)] text-[1.0625rem] text-[var(--color-ink)] no-underline hover:text-[var(--color-link)]">
                {p.label}
                <span aria-hidden className="text-[var(--color-muted)]">›</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="next" className={section}>
        <h2 id="next" className={h2}>What I want next</h2>
        <p className={body}>{ARGO.wants}</p>
        <div className="flex flex-wrap gap-4 items-center mt-7">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent("About Argo")}`}
            className="bg-[var(--color-ink)] text-[var(--color-page)] px-6 py-[13px] rounded-full text-[0.9375rem] font-semibold no-underline hover:opacity-85"
          >
            Email me
          </a>
          <a href="https://www.linkedin.com/in/mark-hallam/" className="text-[var(--color-link)] text-[0.9375rem] font-medium no-underline hover:underline px-1 py-[13px]">
            LinkedIn
          </a>
          <Link href="/#made" className="text-[var(--color-link)] text-[0.9375rem] font-medium no-underline hover:underline px-1 py-[13px]">
            Everything I&apos;ve made
          </Link>
        </div>
      </section>

      <section aria-labelledby="sources" className={section + " pb-20"}>
        <h2 id="sources" className="text-[1.0625rem] font-semibold mb-3 text-[var(--color-ink)]">Sources</h2>
        <ul className="list-none p-0 m-0 space-y-1.5 text-[0.875rem] text-[var(--color-body)]">
          <li>Argo: its git history and GitHub pull requests (repository created 29 April 2026; last pull request merged 24 June 2026), its verified state record of 23 June 2026, and its voice hand-off notes of 2 June 2026.</li>
          {ARGO_SOURCES.map((s) => (
            <li key={s.url}>
              <a className="text-[var(--color-link)] no-underline hover:underline" href={s.url}>{s.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

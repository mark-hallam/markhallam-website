import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getEssayBySlug, getEssayMetaList, getEssaySlugs } from "@/lib/essays";
import { EMAIL, POSITIONING } from "@/lib/profile";
import { SOCIAL } from "@/lib/social";
import { JsonLd } from "@/components/json-ld";
import { SITE, articleJsonLd } from "@/lib/agent";

export async function generateStaticParams() {
  return getEssaySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = await getEssayBySlug(slug);
  if (!essay) return { title: "Not found" };
  return {
    title: essay.title,
    description: essay.dek,
    alternates: { canonical: `/writing/${slug}`, types: { "text/markdown": `/writing/${slug}.md`, "text/plain": "/llms.txt" } },
    openGraph: {
      title: essay.title,
      description: essay.dek,
      url: `${SITE}/writing/${slug}`,
      type: "article",
      publishedTime: essay.date,
      authors: ["Mark Hallam"],
    },
  };
}

function formatMonth(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-AU", { month: "long", year: "numeric" });
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = await getEssayBySlug(slug);
  if (!essay) notFound();

  // Essays newest first: "newer" and "older" neighbours give a clear path through all of them.
  const all = getEssayMetaList();
  const at = all.findIndex((e) => e.slug === slug);
  const newer = at > 0 ? all[at - 1] : null;
  const older = at >= 0 && at < all.length - 1 ? all[at + 1] : null;
  const related = [newer, older].filter((e): e is NonNullable<typeof e> => e !== null);

  return (
    <>
      <JsonLd data={articleJsonLd(essay)} />
      <div className="max-w-[680px] mx-auto px-6 sm:px-8">
        <div className="pt-8 sm:pt-12">
          <Link
            href="/writing"
            className="text-sm text-[var(--color-soft)] font-medium no-underline inline-flex items-center gap-2 hover:text-[var(--color-ink)] transition-colors"
          >
            <span aria-hidden>←</span> All writing
          </Link>
        </div>

        <section className="pt-8 sm:pt-16 pb-10 sm:pb-14 border-b border-[var(--color-rule)]">
          <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-4 sm:mb-7">
            Essay
          </div>
          <h1 className="text-[30px] sm:text-[48px] leading-[1.1] font-semibold tracking-[-0.025em] max-w-[22ch] mb-4 sm:mb-6 text-[var(--color-ink)]">
            {essay.title}
          </h1>
          {essay.dek && (
            <p className="text-[18px] sm:text-[21px] leading-[1.5] text-[var(--color-body)] max-w-[56ch] mb-6 sm:mb-8">
              {essay.dek}
            </p>
          )}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-1 text-[14px] text-[var(--color-muted)] font-medium">
            <span>
              By{" "}
              <Link href="/about" className="text-[var(--color-ink)] no-underline hover:underline" rel="author">
                Mark Hallam
              </Link>
            </span>
            <span>
              <time dateTime={essay.date}>{formatMonth(essay.date)}</time> · {essay.readMinutes} min read
              {essay.category ? ` · ${essay.category}` : ""}
            </span>
          </div>
        </section>

        <article className="essay-prose py-10 sm:py-14 pb-10">
          <div dangerouslySetInnerHTML={{ __html: essay.body }} />
          <div className="my-16 text-center">
            <span
              className="inline-block w-20 h-[3px] rounded-[2px]"
              style={{ background: "linear-gradient(90deg, #8B5CF6, #EC4899)" }}
              aria-hidden
            />
          </div>
        </article>
          <aside aria-label="About the author" className="mb-16 pt-10 border-t border-[var(--color-rule)] max-w-[64ch]">
            <p className="text-[17px] font-semibold text-[var(--color-ink)]">Mark Hallam</p>
            <p className="text-[16px] leading-[1.6] text-[var(--color-body)] mt-1">
              {POSITIONING.join(" ")} My background is aerospace and aviation.
            </p>
            <p className="text-[16px] leading-[1.65] text-[var(--color-body)] mt-3">
              I write about building real software with AI agents. If something here is useful, or wrong, I&apos;d like to hear about it.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-4 list-none p-0 text-[15px] font-medium">
              <li><a className="text-[var(--color-link)] no-underline hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><Link className="text-[var(--color-link)] no-underline hover:underline" href="/#work">See my work</Link></li>
              <li><a className="text-[var(--color-link)] no-underline hover:underline" href={SOCIAL.linkedin.url}>LinkedIn</a></li>
              <li><a className="text-[var(--color-link)] no-underline hover:underline" href={SOCIAL.github.url}>GitHub</a></li>
            </ul>
          </aside>
      </div>

      {related.length > 0 && (
        <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-20 border-t border-[var(--color-rule)]">
          <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
            Keep reading
          </div>
          <h2 className="text-[28px] font-semibold tracking-[-0.015em] mb-8">
            Read next.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/writing/${r.slug}`}
                className="essay-card block p-6 border border-[var(--color-rule)] rounded-xl no-underline text-inherit"
              >
                <div className="text-xs text-[var(--color-muted)] font-medium mb-2">
                  {r === newer ? "Newer" : "Older"} · {formatMonth(r.date)} · {r.readMinutes} min
                </div>
                <div className="text-[17px] font-medium leading-[1.4] text-[var(--color-ink)] mb-2">
                  {r.title}
                </div>
                {r.dek && (
                  <div className="text-sm text-[var(--color-soft)] leading-[1.5]">
                    {r.dek}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

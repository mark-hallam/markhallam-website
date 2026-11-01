import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getEssayBySlug, getEssayMetaList, getEssaySlugs } from "@/lib/essays";
import { EMAIL } from "@/lib/profile";

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
    openGraph: {
      title: essay.title,
      description: essay.dek,
      type: "article",
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

  const related = getEssayMetaList()
    .filter((e) => e.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <div className="max-w-[680px] mx-auto px-6 sm:px-8">
        <div className="pt-12">
          <Link
            href="/writing"
            className="text-sm text-[var(--color-soft)] font-medium no-underline inline-flex items-center gap-2 hover:text-[var(--color-ink)] transition-colors"
          >
            <span aria-hidden>←</span> All writing
          </Link>
        </div>

        <section className="pt-16 pb-14 border-b border-[var(--color-rule)]">
          <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-7">
            Essay
          </div>
          <h1 className="text-[32px] sm:text-[48px] leading-[1.1] font-semibold tracking-[-0.025em] max-w-[22ch] mb-6 text-[var(--color-ink)]">
            {essay.title}
          </h1>
          {essay.dek && (
            <p className="text-[21px] leading-[1.5] text-[var(--color-body)] max-w-[56ch] mb-8">
              {essay.dek}
            </p>
          )}
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center text-[13px] text-[var(--color-muted)] font-medium">
            <span>{formatMonth(essay.date)}</span>
            <span className="text-[#d1d5db]">·</span>
            <span>{essay.readMinutes} min read</span>
            {essay.category && (
              <>
                <span className="text-[#d1d5db]">·</span>
                <span>{essay.category}</span>
              </>
            )}
          </div>
        </section>

        <article className="essay-prose py-14 pb-10">
          <div dangerouslySetInnerHTML={{ __html: essay.body }} />
          <div className="my-16 text-center">
            <span
              className="inline-block w-20 h-[3px] rounded-[2px]"
              style={{ background: "linear-gradient(90deg, #8B5CF6, #EC4899)" }}
              aria-hidden
            />
          </div>
          <div className="mt-16 pt-10 border-t border-[var(--color-rule)] max-w-[64ch]">
            <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-4">
              A note from the author
            </div>
            <p className="text-[16px] leading-[1.65] text-[var(--color-body)]">
              I write about building real software with AI agents. If something here is useful, or wrong, I&apos;d like to hear about it:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-[var(--color-ink)] font-medium border-b border-[var(--color-ink)] no-underline"
              >
                {EMAIL}
              </a>
              .
            </p>
          </div>
        </article>
      </div>

      {related.length > 0 && (
        <section className="max-w-[880px] mx-auto px-6 sm:px-8 py-20 border-t border-[var(--color-rule)]">
          <div className="gradient-text uppercase text-[13px] font-semibold tracking-[0.04em] mb-8">
            Keep reading
          </div>
          <h3 className="text-[28px] font-semibold tracking-[-0.015em] mb-8">
            Other essays in this line of thinking.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/writing/${r.slug}`}
                className="essay-card block p-6 border border-[var(--color-rule)] rounded-xl no-underline text-inherit"
              >
                <div className="text-xs text-[var(--color-muted)] font-medium mb-2">
                  {formatMonth(r.date)} · {r.readMinutes} min
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

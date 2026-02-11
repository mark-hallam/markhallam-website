import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { BlogPostJsonLd } from "@/components/seo/json-ld";
import {
  blogPosts,
  getPost,
  formatDate,
  getCategoryLabel,
} from "@/lib/data";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Mark Hallam`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  // Find prev/next posts
  const sorted = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const currentIndex = sorted.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? sorted[currentIndex - 1] : null;

  // Related posts (same category, exclude current)
  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  const shareUrl = `https://markhallam.com.au/blog/${post.slug}`;

  return (
    <Section>
      <BlogPostJsonLd
        title={post.title}
        description={post.excerpt}
        publishedAt={post.publishedAt}
        slug={post.slug}
      />

      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} /> Back to Blog
      </Link>

      <article className="mx-auto max-w-[680px]">
        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
            {getCategoryLabel(post.category)}
          </span>
          <span className="text-xs text-muted">
            {formatDate(post.publishedAt)}
          </span>
          <span className="text-xs text-muted">{post.readTime} min read</span>
        </div>

        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {post.title}
        </h1>

        {/* Share buttons */}
        <div className="mt-6 flex gap-3 border-b border-border pb-6">
          <a
            href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-muted hover:text-foreground"
          >
            Share on X
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-muted hover:text-foreground"
          >
            Share on LinkedIn
          </a>
        </div>

        {/* Body */}
        <div className="mt-8">
          {post.body.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="mb-4 mt-10 text-2xl font-bold">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
              return (
                <ul key={i} className="mb-4 space-y-1.5">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith("1. ") || paragraph.startsWith("2. ")) {
              const items = paragraph.split("\n").filter((line) => /^\d+\./.test(line));
              return (
                <ol key={i} className="mb-4 space-y-1.5 list-decimal list-inside">
                  {items.map((item, j) => (
                    <li key={j} className="text-muted">
                      {item.replace(/^\d+\.\s*/, "")}
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={i} className="mb-4 leading-relaxed text-muted">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      {/* Post navigation */}
      <div className="mx-auto mt-12 max-w-[680px] border-t border-border pt-8">
        <div className="flex justify-between gap-4">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex-1 rounded-lg border border-border p-4 transition-colors hover:border-muted"
            >
              <span className="text-xs text-muted">Previous</span>
              <p className="mt-1 text-sm font-medium group-hover:text-accent">
                <ArrowLeft size={12} className="mr-1 inline" />
                {prevPost.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex-1 rounded-lg border border-border p-4 text-right transition-colors hover:border-muted"
            >
              <span className="text-xs text-muted">Next</span>
              <p className="mt-1 text-sm font-medium group-hover:text-accent">
                {nextPost.title}
                <ArrowRight size={12} className="ml-1 inline" />
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <div className="mx-auto mt-12 max-w-[680px]">
          <h3 className="mb-4 text-lg font-semibold">Related Posts</h3>
          <div className="space-y-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="block rounded-lg border border-border p-4 transition-colors hover:border-muted"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                    {getCategoryLabel(r.category)}
                  </span>
                  <span className="text-xs text-muted">{r.readTime} min read</span>
                </div>
                <p className="mt-1 text-sm font-medium">{r.title}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}

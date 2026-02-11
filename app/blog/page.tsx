"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { PageTransition } from "@/components/layout/page-transition";
import { Card } from "@/components/ui/card";
import {
  blogPosts,
  formatDate,
  getCategoryLabel,
  type PostCategory,
} from "@/lib/data";

const categories: { label: string; value: PostCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Build Log", value: "build-log" },
  { label: "Insight", value: "insight" },
  { label: "Announcement", value: "announcement" },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<PostCategory | "all">(
    "all"
  );

  const sorted = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const filtered =
    activeCategory === "all"
      ? sorted
      : sorted.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
    <Section>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
      <p className="mt-3 text-lg text-muted">
        Build logs, insights, and updates from the journey.
      </p>

      {/* Category filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
              activeCategory === cat.value
                ? "bg-accent text-white"
                : "border border-border text-muted hover:border-muted hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="mt-8 space-y-4">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="mb-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      {getCategoryLabel(post.category)}
                    </span>
                    <span className="text-xs text-muted">
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="text-xs text-muted">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
                  <p className="mt-1 text-sm text-muted">{post.excerpt}</p>
                </div>
                <span className="self-end text-sm font-medium text-accent sm:self-center">
                  Read <ArrowRight size={14} className="inline" />
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted">
          No posts in this category yet.
        </p>
      )}
    </Section>
    </PageTransition>
  );
}

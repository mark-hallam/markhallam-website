"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { PageTransition } from "@/components/layout/page-transition";
import { Card } from "@/components/ui/card";
import {
  learnEntries,
  formatDate,
  getLearnCategoryLabel,
  type LearnCategory,
} from "@/lib/data";

const categories: { label: string; value: LearnCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "AI Coding", value: "ai-coding" },
  { label: "Working with AI", value: "working-with-ai" },
  { label: "AI Strategy", value: "ai-strategy" },
  { label: "Tools", value: "tools" },
];

export default function LearnPage() {
  const [activeCategory, setActiveCategory] = useState<LearnCategory | "all">(
    "all"
  );

  const sorted = [...learnEntries].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const filtered =
    activeCategory === "all"
      ? sorted
      : sorted.filter((e) => e.category === activeCategory);

  return (
    <PageTransition>
      <Section>
        <h1 className="text-4xl font-bold tracking-tight text-warm md:text-5xl">
          Learn
        </h1>
        <p className="mt-3 text-lg text-muted">
          Techniques for working with AI coding tools and AI agents. What I&apos;ve
          learned building products with Claude, Gemini, Grok, and OpenAI — in
          plain language, no jargon, real patterns.
        </p>

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeCategory === cat.value
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-surface text-warm hover:border-border-strong"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Entry list */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {filtered.length === 0 ? (
            <p className="text-muted">No entries in this category yet.</p>
          ) : (
            filtered.map((entry) => (
              <Card key={entry.slug}>
                <Link
                  href={`/learn/${entry.slug}`}
                  className="block h-full"
                >
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span className="font-medium uppercase tracking-wider text-accent">
                      {getLearnCategoryLabel(entry.category)}
                    </span>
                    <span aria-hidden>·</span>
                    <span>{formatDate(entry.publishedAt)}</span>
                    <span aria-hidden>·</span>
                    <span>{entry.readTime} min read</span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold leading-tight text-warm md:text-2xl">
                    {entry.title}
                  </h2>
                  <p className="mt-3 text-muted">{entry.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Read <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Card>
            ))
          )}
        </div>
      </Section>
    </PageTransition>
  );
}

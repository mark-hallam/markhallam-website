"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Rss } from "lucide-react";
import { Section } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  siteSettings,
  getFeaturedProjects,
  getLatestPost,
  formatDate,
  projects,
} from "@/lib/data";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const latestPost = getLatestPost();
  const nowBuilding = projects.filter((p) => p.status === "building");

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center px-6">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl lg:text-8xl">
              Mark Hallam
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-accent md:text-2xl lg:text-3xl">
              &ldquo;{siteSettings.heroTagline}&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <p className="mt-4 max-w-xl text-lg text-muted">
              {siteSettings.heroSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="/projects" size="lg">
              View Projects <ArrowRight size={18} />
            </Button>
            <Button href="/learn" variant="secondary" size="lg">
              Learn to Build
            </Button>
          </motion.div>
        </div>

        {/* Gradient accent */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </section>

      {/* Now Building */}
      {nowBuilding.length > 0 && (
        <Section className="!py-8 border-y border-border bg-surface/30">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-widest text-muted">
              Now Building
            </span>
            <div className="h-4 w-px bg-border" />
            {nowBuilding.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                {project.title}
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Project Showcase */}
      <Section>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Projects
            </h2>
            <p className="mt-2 text-muted">
              Real products. Shipped fast. Built with AI.
            </p>
          </div>
          <Button href="/projects" variant="ghost" className="hidden md:flex">
            View all <ArrowRight size={16} />
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <Card className="flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="mt-2 flex-1 text-sm text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-amber">
                    {project.keyStat}
                  </span>
                  {project.url && (
                    <span className="text-xs text-muted">{new URL(project.url).hostname}</span>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Button href="/projects" variant="secondary" className="w-full">
            View all projects <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      {/* Latest Post */}
      {latestPost && (
        <Section className="bg-surface/30">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Latest
              </h2>
              <p className="mt-2 text-muted">Thoughts, build logs, and updates.</p>
            </div>
            <Button href="/blog" variant="ghost" className="hidden md:flex">
              All posts <ArrowRight size={16} />
            </Button>
          </div>

          <Link href={`/blog/${latestPost.slug}`} className="mt-8 block">
            <Card className="md:flex md:items-center md:gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {latestPost.category === "build-log"
                      ? "Build Log"
                      : latestPost.category === "insight"
                      ? "Insight"
                      : "Announcement"}
                  </span>
                  <span className="text-xs text-muted">
                    {formatDate(latestPost.publishedAt)}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold md:text-2xl">
                  {latestPost.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{latestPost.excerpt}</p>
                <p className="mt-4 text-sm font-medium text-accent">
                  Read more <ArrowRight size={14} className="inline" />
                </p>
              </div>
              <div className="mt-4 text-right text-xs text-muted md:mt-0">
                {latestPost.readTime} min read
              </div>
            </Card>
          </Link>

          <div className="mt-6 md:hidden">
            <Button href="/blog" variant="secondary" className="w-full">
              All posts <ArrowRight size={16} />
            </Button>
          </div>
        </Section>
      )}

      {/* The Mission */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Learn to Build
          </h2>
          <p className="mt-4 text-lg text-muted">
            You have ideas but don&apos;t know how to build them. The tools have
            changed. You no longer need a technical co-founder. I&apos;ll show
            you how to go from idea to shipped product.
          </p>
          <div className="mt-8">
            <Button href="/learn" size="lg">
              Join the Waitlist <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Section>

      {/* Social Proof Strip */}
      <section className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8">
          <a
            href={siteSettings.socialLinks.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            X (@MarkHallam)
          </a>
          <a
            href={siteSettings.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={siteSettings.projectLinks.lunarpdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
          >
            lunarpdf.com <ExternalLink size={12} />
          </a>
          <a
            href={siteSettings.projectLinks.curble}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
          >
            curble.com <ExternalLink size={12} />
          </a>
          <Link
            href="/rss.xml"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
          >
            RSS <Rss size={12} />
          </Link>
        </div>
      </section>
    </>
  );
}

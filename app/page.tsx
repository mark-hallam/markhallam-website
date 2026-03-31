"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Rss, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  siteSettings,
  getFeaturedProjects,
  getLatestPost,
  formatDate,
  servicesData,
} from "@/lib/data";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const latestPost = getLatestPost();

  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pb-16 pt-28 md:pt-36">
        <div className="mx-auto w-full max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              AI Transformation Advisor
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-warm md:text-5xl lg:text-6xl">
              Helping organisations move from AI curiosity to AI capability.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
          >
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              I help business leaders figure out where AI fits, choose the right tools,
              and implement workflows that actually stick — not pilots that go nowhere.
            </p>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            {[
              "PMP Certified",
              "Multiple AI products shipped",
              "Enterprise tech program delivery",
              "Hands-on across Claude, Gemini, Grok & OpenAI",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-sm text-muted">
                <CheckCircle size={14} className="text-success flex-shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/services" size="lg">
              How I Can Help <ArrowRight size={18} />
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              About Me
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <Section className="!py-16 border-y border-border bg-white">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-warm md:text-4xl">
              What I Do
            </h2>
            <p className="mt-2 text-muted">
              From audit to implementation — AI adoption that delivers results, not reports.
            </p>
          </div>
          <Button href="/services" variant="ghost" className="hidden md:flex">
            Learn more <ArrowRight size={16} />
          </Button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {servicesData.services.map((service) => (
            <Link key={service.title} href="/services">
              <Card className="flex h-full flex-col gap-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-warm">{service.title}</h3>
                  <span className="rounded-lg bg-accent-light px-2.5 py-1 text-xs font-bold text-accent whitespace-nowrap">
                    {service.stat}
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
                <div className="border-t border-border pt-3">
                  <span className="text-xs font-medium text-accent">
                    Learn more <ArrowRight size={12} className="inline" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Button href="/services" variant="secondary" className="w-full">
            View all services <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      {/* Portfolio */}
      <Section>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-warm md:text-4xl">
              Portfolio
            </h2>
            <p className="mt-2 text-muted">
              Real products built with AI. Each one a case study in what&apos;s possible.
            </p>
          </div>
          <Button href="/projects" variant="ghost" className="hidden md:flex">
            View all <ArrowRight size={16} />
          </Button>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {featuredProjects.slice(0, 3).map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <Card className="group flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-warm">{project.title}</h3>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="mt-2 text-sm text-muted md:max-w-lg">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-background px-2 py-0.5 text-xs text-muted border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 md:flex-col md:items-end md:gap-2">
                  <span className="rounded-lg bg-amber-light px-3 py-1.5 text-sm font-bold text-amber whitespace-nowrap">
                    {project.keyStat}
                  </span>
                  {project.url && (
                    <span className="text-xs text-muted">
                      {new URL(project.url).hostname}
                    </span>
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
        <Section className="bg-white">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-warm md:text-4xl">
                Latest
              </h2>
              <p className="mt-2 text-muted">Insights on AI adoption, tool comparisons, and lessons from the field.</p>
            </div>
            <Button href="/blog" variant="ghost" className="hidden md:flex">
              All posts <ArrowRight size={16} />
            </Button>
          </div>

          <Link href={`/blog/${latestPost.slug}`} className="mt-8 block">
            <Card className="md:flex md:items-center md:gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-medium text-accent">
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
                <h3 className="mt-3 text-xl font-semibold text-warm md:text-2xl">
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

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-10 text-center shadow-sm md:p-14">
          <h2 className="text-3xl font-bold tracking-tight text-warm md:text-4xl">
            Ready to Move on AI?
          </h2>
          <p className="mt-4 text-lg text-muted">
            If you&apos;re a business leader who knows AI matters but isn&apos;t sure
            where to start — let&apos;s talk. No pitch decks, no jargon. Just an honest
            conversation about where AI can help your organisation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/services" size="lg">
              View Services <ArrowRight size={18} />
            </Button>
            <Button href={siteSettings.socialLinks.email} variant="secondary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>

      {/* Social Strip */}
      <section className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8">
          <a
            href={siteSettings.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={siteSettings.socialLinks.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            X (@MarkHallam)
          </a>
          <a
            href={siteSettings.socialLinks.email}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            mark@markhallam.com.au
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

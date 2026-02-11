"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { PageTransition } from "@/components/layout/page-transition";
import { StatusBadge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects, type ProjectStatus } from "@/lib/data";

const filters: { label: string; value: ProjectStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Live", value: "live" },
  { label: "Building", value: "building" },
  { label: "Coming Soon", value: "coming-soon" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectStatus | "all">("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  return (
    <PageTransition>
    <Section>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Projects</h1>
      <p className="mt-3 text-lg text-muted">
        Real products. Shipped fast. Built with AI. No funding. No dev team. No excuses.
      </p>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
              activeFilter === filter.value
                ? "bg-accent text-white"
                : "border border-border text-muted hover:border-muted hover:text-foreground"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered
          .sort((a, b) => a.order - b.order)
          .map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <Card className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <StatusBadge status={project.status} />
                </div>
                <p className="mt-2 flex-1 text-sm text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-amber">
                    {project.keyStat}
                  </span>
                  <span className="text-sm font-medium text-accent">
                    View <ArrowRight size={14} className="inline" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted">
          No projects with this status yet.
        </p>
      )}
    </Section>
    </PageTransition>
  );
}

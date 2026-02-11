import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, getProject } from "@/lib/data";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Mark Hallam`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <Section>
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} /> Back to Projects
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <StatusBadge status={project.status} />
          </div>
          <p className="mt-3 text-lg text-muted">{project.description}</p>
        </div>
        {project.url && (
          <Button href={project.url} external variant="primary">
            Visit {project.title} <ExternalLink size={16} />
          </Button>
        )}
      </div>

      {/* Key stat */}
      <div className="mt-6 rounded-lg border border-amber/20 bg-amber/5 px-4 py-3">
        <span className="text-sm font-medium text-amber">{project.keyStat}</span>
      </div>

      {/* Body */}
      <div className="mt-10 max-w-[680px]">
        {project.body.split("\n\n").map((paragraph, i) => {
          if (paragraph.startsWith("## ")) {
            return (
              <h2 key={i} className="mb-4 mt-10 text-2xl font-bold">
                {paragraph.replace("## ", "")}
              </h2>
            );
          }
          return (
            <p key={i} className="mb-4 leading-relaxed text-muted">
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* Features */}
      {project.features.length > 0 && (
        <div className="mt-10 max-w-[680px]">
          <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-muted">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack */}
      {project.techStack.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-4 text-2xl font-bold">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* What I learned */}
      {project.learned && (
        <div className="mt-10 max-w-[680px] rounded-lg border border-border bg-surface p-6">
          <h2 className="mb-2 text-lg font-semibold">What I Learned</h2>
          <p className="text-sm leading-relaxed text-muted">{project.learned}</p>
        </div>
      )}
    </Section>
  );
}

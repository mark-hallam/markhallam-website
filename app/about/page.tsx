import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { aboutData, siteSettings } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Solo builder based in Australia, shipping live products using AI as my development partner.",
};

export default function AboutPage() {
  return (
    <Section>
      <div className="mx-auto max-w-[680px]">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {aboutData.name}
        </h1>
        <p className="mt-2 text-xl text-accent">{aboutData.title}</p>

        {/* Bio */}
        <div className="mt-10">
          {aboutData.bio.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-4 leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-10">
          <h2 className="mb-4 text-2xl font-bold">Philosophy</h2>
          {aboutData.philosophy.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-4 leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Current Focus */}
        <div className="mt-10">
          <h2 className="mb-4 text-2xl font-bold">Current Focus</h2>
          <ul className="space-y-2">
            {aboutData.currentFocus.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-muted">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social / Contact */}
        <div className="mt-10 border-t border-border pt-8">
          <h2 className="mb-4 text-2xl font-bold">Connect</h2>
          <div className="flex flex-wrap gap-3">
            <Button href={siteSettings.socialLinks.x} external variant="secondary">
              X (@MarkHallam) <ExternalLink size={14} />
            </Button>
            <Button href={siteSettings.socialLinks.linkedin} external variant="secondary">
              LinkedIn <ExternalLink size={14} />
            </Button>
            <Button href={siteSettings.socialLinks.email} variant="secondary">
              Email
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

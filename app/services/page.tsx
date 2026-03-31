"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ClipboardCheck,
  Zap,
  Users,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { servicesData, siteSettings } from "@/lib/data";

const serviceIcons = [ClipboardCheck, Zap, Users];

function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full border-b border-border py-4 text-left"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium">{question}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm leading-relaxed text-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {servicesData.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {servicesData.valueProp}
          </p>
          <div className="mt-8">
            <Button href={siteSettings.socialLinks.email} size="lg">
              Get in Touch <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-surface/30">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          How I Work With Organisations
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {servicesData.services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <Card key={i} hover={false} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <span className="rounded-lg bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent">
                      {service.stat}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Proof Points */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why Me
          </h2>
          <p className="mt-4 text-muted">
            Most AI consultants have either built things with AI or led enterprise technology programmes. I&apos;ve done both.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {servicesData.proofPoints.map((point) => (
            <div key={point.label} className="rounded-lg border border-border p-5 text-center">
              <div className="text-3xl font-bold text-accent">{point.value}</div>
              <p className="mt-1 text-sm text-muted">{point.label}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-xl">
          <div className="rounded-xl border border-border bg-surface/50 p-6">
            <p className="text-sm leading-relaxed text-muted">
              <span className="font-semibold text-foreground">Enterprise credibility:</span>{" "}
              15 years leading complex tech programmes in defence and aerospace. PMP certified. AWS certified.
              Boeing, Airbus, SAP migrations, SaaS rollouts.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              <span className="font-semibold text-foreground">Hands-on AI experience:</span>{" "}
              5+ products shipped across Claude, Gemini, Grok, and OpenAI. Not demos. Production products.
              I know which tool fits which job from real usage, not reviews.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface/30">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Questions
          </h2>
          <div className="mt-8">
            {servicesData.faqItems.map((item, i) => (
              <FAQ key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section>
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-bold">Ready to get started?</h2>
          <p className="mt-2 text-sm text-muted">
            The first step is a conversation. No pitch decks, no pressure — just an honest assessment
            of where AI can help your organisation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={siteSettings.socialLinks.email} size="lg">
              Get in Touch <ArrowRight size={18} />
            </Button>
            <Button href={siteSettings.socialLinks.linkedin} external variant="secondary" size="lg">
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

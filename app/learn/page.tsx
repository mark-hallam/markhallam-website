"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Lightbulb,
  Rocket,
  Target,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { learnPageData } from "@/lib/data";

const pillarIcons = [Lightbulb, Rocket, Target, Users];

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

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "learn-page" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      setMessage(data.message || "You're on the list!");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-success/20 bg-success/5 px-4 py-3 text-sm text-success">
        <CheckCircle size={18} />
        {message}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={loading}
          className="flex-1 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
        >
          {loading ? "Joining..." : "Join"} {!loading && <ArrowRight size={16} />}
        </button>
      </div>
      {error && (
        <p className="text-xs text-red-400">{error}</p>
      )}
    </form>
  );
}

export default function LearnPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {learnPageData.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {learnPageData.valueProp}
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm />
          </div>
        </div>
      </Section>

      {/* Pillars */}
      <Section className="bg-surface/30">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          What You&apos;ll Learn
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {learnPageData.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <Card key={i} hover={false} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Social proof — Mark's builds */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            The Proof Is in the Projects
          </h2>
          <p className="mt-4 text-muted">
            Everything I teach comes from real builds. Not theory — shipped products.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border p-5 text-center">
            <div className="text-3xl font-bold text-accent">2 days</div>
            <p className="mt-1 text-sm text-muted">
              To build LunarPDF from scratch
            </p>
          </div>
          <div className="rounded-lg border border-border p-5 text-center">
            <div className="text-3xl font-bold text-accent">3+</div>
            <p className="mt-1 text-sm text-muted">
              Live products built with AI
            </p>
          </div>
          <div className="rounded-lg border border-border p-5 text-center">
            <div className="text-3xl font-bold text-accent">$0</div>
            <p className="mt-1 text-sm text-muted">
              Funding raised. Zero needed.
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
            {learnPageData.faqItems.map((item, i) => (
              <FAQ key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section>
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-bold">Ready to start building?</h2>
          <p className="mt-2 text-sm text-muted">
            Join the waitlist. First cohort will be small and hands-on.
          </p>
          <div className="mt-6">
            <WaitlistForm />
          </div>
        </div>
      </Section>
    </>
  );
}

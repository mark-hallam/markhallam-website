import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI Readiness Audits, Implementation Sprints, and Fractional AI Advisory. Helping organisations move from AI curiosity to AI capability.",
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

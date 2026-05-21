import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Techniques for working with AI coding tools and AI agents. What I've learned building products with Claude, Gemini, Grok, and OpenAI — in plain language.",
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

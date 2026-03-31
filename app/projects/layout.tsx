import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "AI products built as case studies demonstrating what organisations can achieve with the right AI tools and approach.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

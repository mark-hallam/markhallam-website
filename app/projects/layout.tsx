import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real products shipped fast with AI. No funding, no dev team, no excuses.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

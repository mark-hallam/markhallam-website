import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Build logs, insights, and updates from a solo builder shipping with AI.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

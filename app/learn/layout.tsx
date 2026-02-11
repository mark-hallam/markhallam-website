import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn to Build",
  description:
    "You have ideas. Learn to ship them. No coding required — just the ability to communicate your idea clearly.",
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

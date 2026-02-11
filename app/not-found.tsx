import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-accent">404</h1>
        <p className="mt-4 text-lg text-muted">This page doesn&apos;t exist.</p>
        <div className="mt-6">
          <Button href="/" variant="secondary">
            <ArrowLeft size={16} /> Back home
          </Button>
        </div>
      </div>
    </div>
  );
}

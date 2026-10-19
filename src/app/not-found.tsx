import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page struck out. The link may be old.",
};

export default function NotFound() {
  return (
    <section className="px-(--gutter-m) md:px-(--gutter-d) py-20 md:py-32 flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-[480px] bg-[var(--surface)] border border-[var(--line)] rounded-[var(--radius-lg)] p-7 md:p-10 text-left">
        <div className="font-mono text-xs text-[var(--ink-3)] uppercase tracking-wider">404</div>
        <h1 className="font-serif font-normal text-4xl md:text-[44px] leading-tight md:leading-[46px] my-2.5 text-[var(--ink)]">
          This page <em className="italic text-[var(--accent)]">struck out.</em>
        </h1>
        <p className="text-[var(--ink-3)] text-base mb-6 leading-relaxed">
          The link may be old. Try the home page or tell us what you were looking for.
        </p>
        <Button href="/" variant="primary">
          Back to home
        </Button>
      </div>
    </section>
  );
}

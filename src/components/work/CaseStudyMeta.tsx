import { Placeholder } from "@/components/ui/Placeholder";
import type { WorkItem } from "@/content/work";

export function CaseStudyMeta({ item }: { item: WorkItem }) {
  return (
    <div className="cs-meta grid grid-cols-2 md:grid-cols-4 border-t border-line mt-8 md:mt-14 gap-y-4 md:gap-y-0">
      <div className="mono font-mono text-xs tracking-(--tracking-mono) uppercase text-ink-3 pt-[18px] pr-[18px] order-1 md:order-1">
        Client
        <Placeholder
          as="b"
          active={item.placeholder}
          className="block font-sans font-medium text-ink text-base normal-case tracking-normal mt-1.5"
        >
          {item.client || "[Client name]"}
        </Placeholder>
      </div>
      <div className="mono font-mono text-xs tracking-(--tracking-mono) uppercase text-ink-3 pt-[18px] pr-[18px] order-3 md:order-2">
        What we did
        <b className="block font-sans font-medium text-ink text-base normal-case tracking-normal mt-1.5">
          {item.services || "Full Stack Web Development · UI/UX Design"}
        </b>
      </div>
      <div className="mono font-mono text-xs tracking-(--tracking-mono) uppercase text-ink-3 pt-[18px] pr-[18px] order-2 md:order-3">
        Timeline
        <Placeholder
          as="b"
          active={item.placeholder}
          className="block font-sans font-medium text-ink text-base normal-case tracking-normal mt-1.5"
        >
          {item.timeline || "[e.g. 6 weeks]"}
        </Placeholder>
      </div>
      <div className="mono font-mono text-xs tracking-(--tracking-mono) uppercase text-ink-3 pt-[18px] pr-[18px] order-4 md:order-4">
        Stack
        <b className="block font-sans font-medium text-ink text-base normal-case tracking-normal mt-1.5">
          {item.stack || "Next.js · Supabase · bKash"}
        </b>
      </div>
    </div>
  );
}

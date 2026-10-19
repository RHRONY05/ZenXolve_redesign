import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Placeholder } from "@/components/ui/Placeholder";
import type { WorkItem } from "@/content/work";

export function NextCase({ item }: { item: WorkItem }) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className="next-case group flex items-center justify-between py-12 border-t border-line transition-colors"
    >
      <div>
        <span className="mono font-mono text-xs tracking-(--tracking-mono) uppercase text-ink-3">
          Next case study
        </span>
        <Placeholder
          as="h3"
          active={item.placeholder}
          className="font-serif font-normal text-[40px] leading-[42px] md:text-[72px] md:leading-[72px] mt-2 m-0 text-ink group-hover:text-ink-2 transition-colors"
        >
          {item.name}
        </Placeholder>
      </div>
      <span className="icon-btn size-11 md:size-[72px] grid place-items-center rounded-full border border-line bg-surface group-hover:bg-surface-2 transition-colors text-ink">
        <Icon name="arrow-right" size={24} />
      </span>
    </Link>
  );
}

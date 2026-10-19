import Link from "next/link";
import type { WorkItem } from "@/content/work";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Placeholder, PlaceholderTag } from "@/components/ui/Placeholder";

/** Rows alternate 7/5 and 5/7 on a 12-col grid; two columns below 1100 px; one on mobile. */
const spans = [
  "md:col-span-6 lgx:col-span-7",
  "md:col-span-6 lgx:col-span-5",
  "md:col-span-6 lgx:col-span-5",
  "md:col-span-6 lgx:col-span-7",
];

export function WorkCard({ item, className = "" }: { item: WorkItem; className?: string }) {
  return (
    <Link href={`/work/${item.slug}`} className={`group block ${className}`}>
      <div className="relative h-[260px] overflow-hidden rounded-lg md:h-[520px]">
        <div
          className="absolute inset-0 transition-transform duration-(--dur) ease-(--ease) motion-safe:group-hover:scale-[1.03]"
          style={{ background: `var(--${item.tile})` }}
        />
        {item.placeholder && <PlaceholderTag className="absolute top-[18px] left-[18px]">Placeholder · case study image</PlaceholderTag>}
        <span className="absolute inset-0 grid place-items-center text-white/85">
          <Icon name={item.icon as IconName} size={56} strokeWidth={1.2} />
        </span>
      </div>
      <div className="flex flex-col gap-1 px-0.5 pt-[18px] md:flex-row md:items-baseline md:justify-between md:gap-4">
        <div>
          <Placeholder as="h3" active={item.placeholder} className="font-serif text-[28px] leading-8 font-normal md:text-[34px] md:leading-[38px]">
            {item.name}
          </Placeholder>
          <p className="mt-1.5 text-[15px] text-ink-3">{item.kind}</p>
        </div>
        <Placeholder active={item.placeholder} className="self-start font-mono md:self-auto text-xs whitespace-nowrap text-ink-2 md:text-right">
          {item.result}
        </Placeholder>
      </div>
    </Link>
  );
}

export function WorkGrid({ items }: { items: WorkItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-9 md:grid-cols-12 md:gap-5">
      {items.map((item, i) => (
        <WorkCard key={item.slug} item={item} className={`${spans[i % 4]} ${i >= 2 ? "hidden md:block" : ""}`} />
      ))}
    </div>
  );
}

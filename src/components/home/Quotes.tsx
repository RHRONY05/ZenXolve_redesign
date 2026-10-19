"use client";

import { useRef, useState } from "react";
import type { Testimonial } from "@/content/testimonials";
import { Placeholder } from "@/components/ui/Placeholder";

export function QuoteCard({ t, big, className = "" }: { t: Testimonial; big?: boolean; className?: string }) {
  return (
    <Placeholder
      as="figure"
      active={t.placeholder}
      className={`m-0 flex flex-col gap-6 rounded-lg border border-line bg-surface p-6 md:p-[30px] ${className}`}
    >
      <blockquote
        className={`m-0 font-serif text-[26px] leading-8 md:text-[28px] md:leading-[34px] ${big ? "md:text-[38px] md:leading-[44px]" : ""}`}
      >
        <span className="md:hidden">“{t.short}”</span>
        <span className="hidden md:inline">“{t.quote}”</span>
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 text-sm">
        <span className="grid size-11 flex-none place-items-center rounded-full bg-surface-3 font-semibold text-ink-2">
          {t.initials}
        </span>
        <span>
          <b className="block font-medium">{t.name}</b>
          <span className="text-ink-3">{t.role}</span>
        </span>
      </figcaption>
    </Placeholder>
  );
}

/** Desktop: 3 columns (first bigger). Mobile: swipeable one-card carousel with dots. */
export function Quotes({ items }: { items: Testimonial[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  };
  const go = (i: number) => track.current?.scrollTo({ left: i * track.current.clientWidth, behavior: "smooth" });

  return (
    <>
      <div
        ref={track}
        onScroll={onScroll}
        className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 py-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:p-0 lgx:grid-cols-[1.3fr_1fr_1fr] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t, i) => (
          <QuoteCard
            key={t.name}
            t={t}
            big={i === 0}
            className={`min-w-full snap-center md:min-w-0 ${i === 0 ? "md:col-span-2 lgx:col-span-1" : ""}`}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-1.5 md:hidden" role="group" aria-label="Choose testimonial">
        {items.map((t, i) => (
          <button
            key={t.name}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === active}
            onClick={() => go(i)}
            className={`relative h-1.5 rounded-full before:absolute before:-inset-[19px_-6px] before:content-[''] ${
              i === active ? "w-[18px] bg-ink" : "w-1.5 bg-line-strong"
            }`}
          />
        ))}
      </div>
    </>
  );
}

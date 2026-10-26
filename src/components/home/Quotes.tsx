"use client";

import Image from "next/image";
import type { Testimonial } from "@/content/testimonials";

export function QuoteCard({
  t,
  className = "",
}: {
  t: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={`m-0 flex w-[320px] sm:w-[380px] md:w-[420px] shrink-0 flex-col justify-between rounded-xl sm:rounded-2xl border border-white/10 bg-[#0e122b]/90 p-5 sm:p-6 md:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-[#121634] ${className}`}
    >
      {/* Quote text */}
      <blockquote className="m-0 font-serif text-[17px] sm:text-[19px] md:text-[21px] font-normal leading-snug sm:leading-relaxed text-slate-100">
        “{t.quote}”
      </blockquote>

      {/* Author Figcaption */}
      <figcaption className="mt-6 sm:mt-8 flex items-center gap-3.5 pt-4 sm:pt-5 border-t border-white/10">
        {t.avatar ? (
          <div className="relative size-11 sm:size-12 rounded-full overflow-hidden shrink-0 border border-white/15 ring-2 ring-white/10 bg-slate-800">
            <Image
              src={t.avatar}
              alt={t.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        ) : (
          <span className="grid size-11 sm:size-12 flex-none place-items-center rounded-full bg-white/10 font-mono font-bold text-slate-300">
            {t.initials}
          </span>
        )}

        <div className="flex flex-col min-w-0">
          <span className="font-semibold text-white text-sm sm:text-base tracking-tight truncate">
            {t.name}
          </span>
          <span className="text-slate-400 font-sans text-xs sm:text-[13px] truncate">
            {t.role}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

/** Infinite moving marquee of client reviews */
export function Quotes({ items }: { items: Testimonial[] }) {
  // Duplicate list twice to guarantee seamless looping across wide displays
  const marqueeItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      {/* Continuous 60fps GPU-accelerated marquee animation */}
      <style jsx>{`
        @keyframes marqueeLoop {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeLoop 38s linear infinite;
          will-change: transform;
        }
        .animate-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="animate-marquee-track gap-4 sm:gap-6 pr-4 sm:pr-6">
        {marqueeItems.map((t, idx) => (
          <QuoteCard key={`${t.name}-${idx}`} t={t} />
        ))}
      </div>
    </div>
  );
}

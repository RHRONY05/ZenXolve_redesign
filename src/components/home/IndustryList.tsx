"use client";

import { industriesData, type IndustryItem } from "@/content/industries";

function IndustryIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "cart":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-current fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-current fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "health":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-current fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case "cpu":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-current fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      );
    case "academic":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-current fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "building":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-current fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
        </svg>
      );
    case "truck":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-current fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    case "factory":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-current fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
          <path d="M17 18h1M12 18h1M7 18h1" />
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-current fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
          <path d="M15 15v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5" />
        </svg>
      );
    case "media":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-current fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-current fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "briefcase":
    default:
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-current fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
  }
}

function IndustryBrandMark({ item }: { item: IndustryItem }) {
  return (
    <div className="group flex items-center gap-3.5 sm:gap-4 shrink-0 px-3 py-2 transition-all duration-200 cursor-default select-none">
      {/* Brand Icon Mark with subtle glow on hover */}
      <div className="text-[#c4b5fd] group-hover:text-white group-hover:scale-110 transition-all duration-200 shrink-0">
        <IndustryIcon icon={item.icon} />
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col text-left">
        <span className="font-sans font-bold text-base sm:text-lg md:text-[19px] tracking-tight text-slate-200 group-hover:text-white transition-colors duration-150">
          {item.name}
        </span>
        <span className="font-mono text-[10px] sm:text-[11px] font-medium tracking-wide text-slate-400 group-hover:text-[#c4b5fd] transition-colors duration-150">
          {item.tagline}
        </span>
      </div>
    </div>
  );
}

export function IndustryList({ index }: { index?: string } = {}) {
  // 3 distinct rows of industries (4 items each) repeated 4 times for infinite loop
  const row1 = [...industriesData.slice(0, 4), ...industriesData.slice(0, 4), ...industriesData.slice(0, 4), ...industriesData.slice(0, 4)];
  const row2 = [...industriesData.slice(4, 8), ...industriesData.slice(4, 8), ...industriesData.slice(4, 8), ...industriesData.slice(4, 8)];
  const row3 = [...industriesData.slice(8, 12), ...industriesData.slice(8, 12), ...industriesData.slice(8, 12), ...industriesData.slice(8, 12)];

  return (
    <div className="relative w-full py-4 sm:py-6 overflow-hidden">
      {/* 60fps GPU-accelerated continuous multi-line marquee keyframes */}
      <style jsx>{`
        @keyframes marqueeScrollLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes marqueeScrollRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .marquee-track-left {
          display: flex;
          width: max-content;
          animation: marqueeScrollLeft 36s linear infinite;
          will-change: transform;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          animation: marqueeScrollRight 40s linear infinite;
          will-change: transform;
        }
        .marquee-track-left-fast {
          display: flex;
          width: max-content;
          animation: marqueeScrollLeft 30s linear infinite;
          will-change: transform;
        }
        .marquee-track-left:hover,
        .marquee-track-right:hover,
        .marquee-track-left-fast:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Bilateral Edge Fade Masks: Seamless infinite illusion at left & right borders */}
      <div className="relative z-10 flex flex-col gap-6 sm:gap-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {/* Row 1: Moves Left */}
        <div className="marquee-track-left gap-10 sm:gap-14 md:gap-16">
          {row1.map((item, idx) => (
            <IndustryBrandMark key={`r1-${item.id}-${idx}`} item={item} />
          ))}
        </div>

        {/* Row 2: Moves Right */}
        <div className="marquee-track-right gap-10 sm:gap-14 md:gap-16">
          {row2.map((item, idx) => (
            <IndustryBrandMark key={`r2-${item.id}-${idx}`} item={item} />
          ))}
        </div>

        {/* Row 3: Moves Left (different speed for organic parallax) */}
        <div className="marquee-track-left-fast gap-10 sm:gap-14 md:gap-16">
          {row3.map((item, idx) => (
            <IndustryBrandMark key={`r3-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

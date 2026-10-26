"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { reasons, type ReasonItem } from "@/content/reasons";

export function Reasons() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = reasons.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  // Continuous auto-advance every 4.5 seconds on mobile
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 35; // minimum swipe delta in pixels
    if (diff > threshold) {
      nextSlide();
    } else if (diff < -threshold) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-white/12 bg-[var(--surface-2)] p-2 sm:p-4 md:p-6 lg:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.75)]">
      {/* Inner Light Architecture Canvas Window */}
      <div className="relative rounded-xl sm:rounded-2xl lg:rounded-[20px] border border-[var(--line)] ring-1 ring-white/10 bg-[#f8fafc] text-slate-900 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
        {/* Subtle n8n-style Dotted Grid Floor */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(100, 116, 139, 0.22) 1.25px, transparent 1.25px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0",
            opacity: 0.9,
          }}
          aria-hidden="true"
        />

        {/* Canvas Window Header: macOS Traffic Lights & Canvas Identity */}
        <div className="relative z-10 flex items-center justify-between px-3.5 py-2.5 sm:px-6 sm:py-3.5 border-b border-white/10 bg-[var(--surface)]">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-[#ff5f56]" />
              <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="size-2.5 rounded-full bg-[#27c93f]" />
            </div>

            <div className="h-4 w-px bg-white/15 shrink-0" aria-hidden="true" />

            <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-slate-300 truncate max-w-[190px] sm:max-w-none">
              xenzolve-why-clients-stay.flow
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Live Indicator on Mobile */}
            <div className="flex md:hidden items-center gap-1.5 px-2 py-0.5 rounded bg-white/10 border border-white/10 font-mono text-[10px] text-slate-200 shrink-0 select-none">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{String(activeIndex + 1).padStart(2, "0")} / 0{total}</span>
            </div>

            {/* Desktop Badge */}
            <span className="hidden md:inline-flex font-mono text-[10px] font-bold text-slate-400 bg-white/[0.06] border border-white/10 px-2.5 py-0.5 rounded">
              6 CORE PILLARS
            </span>
          </div>
        </div>

        {/* =========================================================================
            1. DESKTOP / TABLET VIEW: Ruled 6-Box Grid Canvas (md: and up)
            - 2 vertical divider lines + 1 horizontal divider line on lg
            ========================================================================= */}
        <div className="relative z-10 hidden md:grid md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r: ReasonItem, idx: number) => {
            const isDesktopRightBorder = (idx + 1) % 3 !== 0; // cols 1 and 2
            const isDesktopBottomBorder = idx < 3; // row 1
            const isTabletRightBorder = idx % 2 === 0; // col 1
            const isTabletBottomBorder = idx < 4; // rows 1 & 2

            return (
              <div
                key={r.title}
                className={`group relative flex flex-col justify-start p-5 sm:p-6 md:p-7 transition-all duration-300 ${
                  r.tint
                } ${isDesktopRightBorder ? "lg:border-r" : "lg:border-r-0"} ${
                  isDesktopBottomBorder ? "lg:border-b" : "lg:border-b-0"
                } ${isTabletRightBorder ? "md:border-r" : "md:border-r-0"} ${
                  isTabletBottomBorder ? "md:border-b" : "md:border-b-0"
                } border-slate-300/80`}
              >
                {/* Top Row: Icon directly inline with Heading + Index on right */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="size-10 sm:size-11 rounded-xl bg-white shadow-xs border border-slate-200/90 flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 group-hover:shadow-sm transition-all duration-200">
                      <Image
                        src={`/reasons/${r.iconFile}`}
                        alt={r.title}
                        width={32}
                        height={32}
                        className="size-6 sm:size-7 object-contain"
                      />
                    </div>
                    <h3 className="text-base sm:text-[17px] md:text-lg font-bold tracking-tight text-slate-900 group-hover:text-black transition-colors leading-snug">
                      {r.title}
                    </h3>
                  </div>

                  <span className="font-mono text-[11px] font-bold tracking-wider text-slate-400 group-hover:text-slate-600 transition-colors shrink-0 pt-1">
                    0{idx + 1}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-sans">
                  {r.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            2. MOBILE VIEW (< md): Single-Reason Swiper
            - Compact height containing exactly 1 reason box at a time
            - Continuous auto-advance + touch swipe gestures (with pause on interaction)
            - Swiper control bar with progress dots and custom arrow buttons
            ========================================================================= */}
        <div
          className="relative z-10 block md:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Sliding Horizontal Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out will-change-transform"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reasons.map((r, idx) => (
                <div
                  key={r.title}
                  className={`w-full shrink-0 p-4 sm:p-5 flex flex-col justify-start min-h-[140px] ${r.tint} transition-colors duration-300`}
                >
                  {/* Top Row: Icon + Title + Index */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="size-9 rounded-xl bg-white shadow-xs border border-slate-200/90 flex items-center justify-center p-1.5 shrink-0">
                        <Image
                          src={`/reasons/${r.iconFile}`}
                          alt={r.title}
                          width={28}
                          height={28}
                          className="size-5.5 object-contain"
                        />
                      </div>
                      <h3 className="text-[15px] font-bold tracking-tight text-slate-900 leading-snug">
                        {r.title}
                      </h3>
                    </div>

                    <span className="font-mono text-[11px] font-bold tracking-wider text-slate-400 shrink-0 pt-1">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-[12.5px] leading-relaxed text-slate-600 font-sans">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Swiper Control Bar (Arrow buttons + Interactive Indicator Pills) */}
          <div className="border-t border-slate-200/90 bg-white/95 px-4 py-2 flex items-center justify-between gap-3 select-none backdrop-blur-xs">
            {/* Left: Interactive Progress Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {reasons.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to reason ${i + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    activeIndex === i
                      ? "w-6 bg-slate-900"
                      : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Right: Custom Arrow Control Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous reason"
                className="size-7.5 rounded-full border border-slate-300/90 bg-white hover:bg-slate-50 active:scale-90 text-slate-700 hover:text-slate-950 flex items-center justify-center shadow-xs transition-all cursor-pointer"
              >
                <Icon name="arrow-left" size={13} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next reason"
                className="size-7.5 rounded-full border border-slate-300/90 bg-white hover:bg-slate-50 active:scale-90 text-slate-700 hover:text-slate-950 flex items-center justify-center shadow-xs transition-all cursor-pointer"
              >
                <Icon name="arrow-right" size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. FIXED TRUST STATS: Stays fixed on the canvas floor across all viewports
            ========================================================================= */}
        <div className="relative z-10 border-t border-slate-300/80 bg-transparent p-4 sm:p-7 md:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-300/70">
            {/* Stat 01 */}
            <div className="flex flex-col items-center sm:items-start sm:px-4 lg:px-6 first:pl-0">
              <span className="font-serif text-2xl sm:text-4xl md:text-[44px] lg:text-5xl font-normal tracking-tight text-slate-950 leading-none">
                98<span className="text-emerald-600 font-sans font-bold text-xl sm:text-3xl ml-0.5">%</span>
              </span>
              <span className="mt-1.5 sm:mt-2 font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-slate-800 text-center sm:text-left">
                Client Retention Rate
              </span>
              <span className="mt-1 text-[11.5px] text-slate-500 font-sans hidden sm:block">
                Long-term studio partnership
              </span>
            </div>

            {/* Stat 02 */}
            <div className="flex flex-col items-center sm:items-start sm:px-4 lg:px-6">
              <span className="font-serif text-2xl sm:text-4xl md:text-[44px] lg:text-5xl font-normal tracking-tight text-slate-950 leading-none">
                10<span className="text-cyan-600 font-sans font-bold text-xl sm:text-3xl ml-0.5">+</span>
              </span>
              <span className="mt-1.5 sm:mt-2 font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-slate-800 text-center sm:text-left">
                Delivered Projects
              </span>
              <span className="mt-1 text-[11.5px] text-slate-500 font-sans hidden sm:block">
                Web, mobile &amp; autonomous AI
              </span>
            </div>

            {/* Stat 03 */}
            <div className="flex flex-col items-center sm:items-start pt-4 sm:pt-0 sm:px-4 lg:px-6">
              <span className="font-serif text-2xl sm:text-4xl md:text-[44px] lg:text-5xl font-normal tracking-tight text-slate-950 leading-none">
                &lt; 2<span className="text-violet-600 font-sans font-bold text-lg sm:text-2xl ml-0.5">h</span>
              </span>
              <span className="mt-1.5 sm:mt-2 font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-slate-800 text-center sm:text-left">
                Direct Engineer SLA
              </span>
              <span className="mt-1 text-[11.5px] text-slate-500 font-sans hidden sm:block">
                Direct WhatsApp &amp; Telegram
              </span>
            </div>

            {/* Stat 04 */}
            <div className="flex flex-col items-center sm:items-start pt-4 sm:pt-0 sm:px-4 lg:px-6">
              <span className="font-serif text-2xl sm:text-4xl md:text-[44px] lg:text-5xl font-normal tracking-tight text-slate-950 leading-none">
                100<span className="text-amber-600 font-sans font-bold text-xl sm:text-3xl ml-0.5">%</span>
              </span>
              <span className="mt-1.5 sm:mt-2 font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-slate-800 text-center sm:text-left">
                IP &amp; Code Ownership
              </span>
              <span className="mt-1 text-[11.5px] text-slate-500 font-sans hidden sm:block">
                Zero lock-in or dependency
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

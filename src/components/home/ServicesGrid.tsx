"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { services, type Service } from "@/content/services";

type ServiceLightMeta = {
  bgTint: string;
  accentColor: string;
  hoverBorder: string;
  dotColor: string;
};

const serviceThemeMap: Record<string, ServiceLightMeta> = {
  "web-development": {
    bgTint: "bg-sky-500/[0.045] hover:bg-sky-500/[0.09]",
    accentColor: "text-sky-600",
    hoverBorder: "hover:border-sky-400",
    dotColor: "bg-sky-500",
  },
  "ui-ux-design": {
    bgTint: "bg-violet-500/[0.045] hover:bg-violet-500/[0.09]",
    accentColor: "text-violet-600",
    hoverBorder: "hover:border-violet-400",
    dotColor: "bg-violet-500",
  },
  "web-mobile-apps": {
    bgTint: "bg-blue-500/[0.045] hover:bg-blue-500/[0.09]",
    accentColor: "text-blue-600",
    hoverBorder: "hover:border-blue-400",
    dotColor: "bg-blue-500",
  },
  "ai-automation": {
    bgTint: "bg-emerald-500/[0.045] hover:bg-emerald-500/[0.09]",
    accentColor: "text-emerald-600",
    hoverBorder: "hover:border-emerald-400",
    dotColor: "bg-emerald-500",
  },
  bots: {
    bgTint: "bg-teal-500/[0.045] hover:bg-teal-500/[0.09]",
    accentColor: "text-teal-600",
    hoverBorder: "hover:border-teal-400",
    dotColor: "bg-teal-500",
  },
  "business-systems": {
    bgTint: "bg-indigo-500/[0.045] hover:bg-indigo-500/[0.09]",
    accentColor: "text-indigo-600",
    hoverBorder: "hover:border-indigo-400",
    dotColor: "bg-indigo-500",
  },
};

const serviceOrder = [
  "web-development",
  "ui-ux-design",
  "web-mobile-apps",
  "ai-automation",
  "bots",
  "business-systems",
];

export function ServicesGrid() {
  const ordered = serviceOrder
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as Service[];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = ordered.length;

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
    <div className="space-y-6">
      {/* Outer Dark Frame / Border (housing the light canvas inside a dark environment, per design spec) */}
      <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-white/12 bg-[var(--surface-2)] p-2 sm:p-4 md:p-6 lg:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.75)]">
        {/* Inner Light Architecture Canvas Window (Border blended seamlessly with dark titlebar) */}
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
                xenzolve-capabilities.flow
              </span>
            </div>

            {/* Live Indicator on Mobile */}
            <div className="flex md:hidden items-center gap-1.5 px-2 py-0.5 rounded bg-white/10 border border-white/10 font-mono text-[10px] text-slate-200 shrink-0 select-none">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{String(activeIndex + 1).padStart(2, "0")} / 0{total}</span>
            </div>
          </div>

          {/* =========================================================================
              1. DESKTOP / TABLET VIEW: Ruled 6-Box Grid Canvas (md: and up)
              - 2 vertical divider lines + 1 horizontal divider line on lg
              ========================================================================= */}
          <div className="relative z-10 hidden md:grid md:grid-cols-2 lg:grid-cols-3">
            {ordered.map((s, idx) => {
              const theme = serviceThemeMap[s.slug] || {
                bgTint: "bg-slate-500/[0.04] hover:bg-slate-500/[0.08]",
                accentColor: "text-slate-700",
                hoverBorder: "hover:border-slate-400",
                dotColor: "bg-slate-500",
              };

              const isDesktopRightBorder = (idx + 1) % 3 !== 0; // cols 1 and 2
              const isDesktopBottomBorder = idx < 3; // row 1
              const isTabletRightBorder = idx % 2 === 0; // col 1
              const isTabletBottomBorder = idx < 4; // rows 1 & 2

              return (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className={`group relative flex flex-col justify-between p-6 sm:p-7 lg:p-8 transition-all duration-300 cursor-pointer ${
                    theme.bgTint
                  } ${isDesktopRightBorder ? "lg:border-r" : "lg:border-r-0"} ${
                    isDesktopBottomBorder ? "lg:border-b" : "lg:border-b-0"
                  } ${isTabletRightBorder ? "md:border-r" : "md:border-r-0"} ${
                    isTabletBottomBorder ? "md:border-b" : "md:border-b-0"
                  } border-slate-300/80`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Service Title + Interactive Arrow */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg sm:text-[19px] md:text-xl font-bold tracking-tight text-slate-900 group-hover:text-black transition-colors leading-snug">
                        {s.title}
                      </h3>

                      <div className="size-8 rounded-full border border-slate-300/80 bg-white text-slate-600 group-hover:border-slate-900 group-hover:text-slate-950 group-hover:scale-110 shadow-sm flex items-center justify-center shrink-0 transition-all duration-200">
                        <Icon
                          name="arrow-up-right"
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>

                    {/* Service Description */}
                    <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-sans">
                      {s.body}
                    </p>

                    {/* Key Deliverables Flow Checklist */}
                    <div className="pt-3.5 border-t border-slate-200/90">
                      <ul className="space-y-2 font-mono text-xs">
                        {s.tags.map((t) => (
                          <li key={t} className="flex items-center gap-2">
                            <span className={`font-bold text-xs ${theme.accentColor}`}>
                              ✓
                            </span>
                            <span className="text-slate-700 group-hover:text-slate-950 font-medium transition-colors">
                              {t}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Box Footer: Tech Stack & Delivery Scope */}
                  <div className="mt-6 pt-3.5 border-t border-slate-200/90 flex items-center justify-between font-mono text-[11px] text-slate-500">
                    <span className="truncate max-w-[190px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                      {s.tools}
                    </span>
                    <span className="text-[10.5px] font-semibold shrink-0 px-2 py-0.5 rounded bg-slate-200/70 text-slate-800 border border-slate-300/60">
                      {s.timelinePlaceholder
                        ? "Custom Scope"
                        : s.timeline.split(":")[1]?.trim() || s.timeline}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* =========================================================================
              2. MOBILE VIEW (< md): Single-Service Swiper Canvas
              - Height comfortably tailored to contain one service box
              - Smooth horizontal sliding track with touch swipe + auto-advance
              - Bottom control bar with interactive progress dots and custom arrow buttons
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
                {ordered.map((s, idx) => {
                  const theme = serviceThemeMap[s.slug] || {
                    bgTint: "bg-slate-500/[0.04]",
                    accentColor: "text-slate-700",
                    hoverBorder: "hover:border-slate-400",
                    dotColor: "bg-slate-500",
                  };

                  return (
                    <div
                      key={s.slug}
                      className={`w-full shrink-0 p-4 sm:p-5 flex flex-col justify-between min-h-[320px] ${theme.bgTint} transition-colors duration-300`}
                    >
                      <Link
                        href={`/services#${s.slug}`}
                        className="group flex flex-col justify-between h-full"
                      >
                        <div className="space-y-3">
                          {/* Top Row: Category Pill + Service Title + Arrow Link */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-1">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider ${theme.accentColor} bg-white/95 border border-slate-300/80 shadow-xs`}>
                                0{idx + 1} · {s.group.toUpperCase()}
                              </span>
                              <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-black transition-colors leading-snug">
                                {s.title}
                              </h3>
                            </div>

                            {/* Interactive Arrow Button */}
                            <div className="size-7.5 sm:size-8 rounded-full border border-slate-300/80 bg-white text-slate-600 group-hover:border-slate-900 group-hover:text-slate-950 shadow-sm flex items-center justify-center shrink-0 transition-all duration-200">
                              <Icon
                                name="arrow-up-right"
                                size={13}
                                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              />
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-xs sm:text-[12.5px] leading-relaxed text-slate-600 font-sans">
                            {s.body}
                          </p>

                          {/* Key Deliverables Flow Checklist */}
                          <div className="pt-2.5 border-t border-slate-200/90">
                            <ul className="space-y-1.5 font-mono text-[11px] sm:text-xs">
                              {s.tags.map((t) => (
                                <li key={t} className="flex items-center gap-2">
                                  <span className={`font-bold ${theme.accentColor}`}>
                                    ✓
                                  </span>
                                  <span className="text-slate-700 font-medium">
                                    {t}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Box Footer: Tech Stack & Delivery Scope */}
                        <div className="mt-4 pt-2.5 border-t border-slate-200/90 flex items-center justify-between font-mono text-[11px] text-slate-500">
                          <span className="truncate max-w-[180px] font-medium text-slate-600">
                            {s.tools}
                          </span>
                          <span className="text-[10px] font-semibold shrink-0 px-2 py-0.5 rounded bg-slate-200/80 text-slate-800 border border-slate-300/70">
                            {s.timelinePlaceholder
                              ? "Custom Scope"
                              : s.timeline.split(":")[1]?.trim() || s.timeline}
                          </span>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Swiper Control Bar (Arrow buttons + Interactive Indicator Pills) */}
            <div className="border-t border-slate-200/90 bg-white/95 px-4 py-2.5 flex items-center justify-between gap-3 select-none backdrop-blur-xs">
              {/* Left: Interactive Progress Indicator Dots */}
              <div className="flex items-center gap-1.5">
                {ordered.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToSlide(i)}
                    aria-label={`Go to service ${i + 1}`}
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
                  aria-label="Previous service"
                  className="size-8 rounded-full border border-slate-300/90 bg-white hover:bg-slate-50 active:scale-90 text-slate-700 hover:text-slate-950 flex items-center justify-center shadow-xs transition-all cursor-pointer"
                >
                  <Icon name="arrow-left" size={14} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next service"
                  className="size-8 rounded-full border border-slate-300/90 bg-white hover:bg-slate-50 active:scale-90 text-slate-700 hover:text-slate-950 flex items-center justify-center shadow-xs transition-all cursor-pointer"
                >
                  <Icon name="arrow-right" size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

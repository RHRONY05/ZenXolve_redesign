"use client";

import React from "react";

/**
 * Headline flanked by straight glowing horizontal neon lines with margins.
 */
export function HeroSuspendedRail() {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 select-none flex items-center justify-center">
      {/* Left Straight Line with side margin */}
      <div
        className="flex-1 h-[2px] bg-(--hero-frame-stroke)"
        style={{
          boxShadow:
            "0 0 10px var(--hero-frame-glow), 0 0 20px var(--hero-frame-glow)",
        }}
        aria-hidden
      />

      {/* Centerpiece Headline */}
      <div className="shrink-0 px-3 sm:px-5 md:px-7">
        <h1 className="font-serif font-bold italic text-base sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-white uppercase text-center whitespace-nowrap">
          <span className="text-white">The last agency, </span>
          <span className="text-white">
            you&apos;ll need to hire
            <span className="animate-exclamation text-(--hero-exclamation) ml-1.5 font-bold not-italic">
              !
            </span>
          </span>
        </h1>
      </div>

      {/* Right Straight Line with side margin */}
      <div
        className="flex-1 h-[2px] bg-(--hero-frame-stroke)"
        style={{
          boxShadow:
            "0 0 10px var(--hero-frame-glow), 0 0 20px var(--hero-frame-glow)",
        }}
        aria-hidden
      />
    </div>
  );
}

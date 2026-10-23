"use client";

import React from "react";

/**
 * Centerpiece Hero Headline:
 * "THE LAST AGENCY YOU'LL EVER NEED."
 * Dual-tone color treatment: crisp luminous white + theme-matched glowing gradient.
 * Styled in unified IBM Plex Sans bold uppercase.
 */
export function HeroSuspendedRail() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 select-none flex items-center justify-center">
      <h1 className="font-sans font-bold text-xl sm:text-3xl md:text-4xl lg:text-[46px] leading-tight tracking-tight uppercase text-center">
        <span className="text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]">
          THE LAST AGENCY{" "}
        </span>
        <span
          className="inline-block bg-clip-text text-transparent font-extrabold"
          style={{
            backgroundImage:
              "linear-gradient(90deg, var(--hero-gradient-from) 0%, var(--hero-gradient-via) 50%, var(--hero-gradient-to) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 24px var(--hero-frame-glow))",
          }}
        >
          YOU&apos;LL EVER NEED.
        </span>
      </h1>
    </div>
  );
}

import React from "react";

/**
 * Architectural Precision Micro-Grid with Refined Whisper Crosshairs (+)
 * 
 * Modular 80px x 80px SVG tile pattern:
 * - 40px precision grid rhythm: crisp, detailed drafting canvas
 * - Hairline 0.75px coordinate lines with zero visual distraction
 * - Whisper Cyber Cyan (+) crosshairs at (20, 20) — 6px hairline, no heavy neon bloom
 * - Soft secondary lavender (+) crosshairs at (60, 60) for balanced visual cadence
 * - Centered symmetrically (x="50%") with a focused radial mask that fades smoothly at margins
 */
export function HeroArchitecturalGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      aria-hidden="true"
      style={{
        maskImage:
          "radial-gradient(ellipse 70% 62% at 50% 26%, black 15%, rgba(0,0,0,0.40) 48%, transparent 76%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 62% at 50% 26%, black 15%, rgba(0,0,0,0.40) 48%, transparent 76%)",
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="architectural-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            x="50%"
            y="0"
          >
            {/* Continuous Vertical Grid Lines (spaced 40px apart) */}
            <line
              x1="20"
              y1="0"
              x2="20"
              y2="80"
              stroke="var(--grid-line-minor, rgba(165, 145, 255, 0.08))"
              strokeWidth="0.75"
            />
            <line
              x1="60"
              y1="0"
              x2="60"
              y2="80"
              stroke="var(--grid-line-minor, rgba(165, 145, 255, 0.08))"
              strokeWidth="0.75"
            />

            {/* Continuous Horizontal Grid Lines (spaced 40px apart) */}
            <line
              x1="0"
              y1="20"
              x2="80"
              y2="20"
              stroke="var(--grid-line-minor, rgba(165, 145, 255, 0.08))"
              strokeWidth="0.75"
            />
            <line
              x1="0"
              y1="60"
              x2="80"
              y2="60"
              stroke="var(--grid-line-minor, rgba(165, 145, 255, 0.08))"
              strokeWidth="0.75"
            />

            {/* Primary Whisper Crosshair (+) at (20, 20) — delicate 6px hairline, no drop-shadow */}
            <path
              d="M 17 20 L 23 20 M 20 17 L 20 23"
              fill="none"
              stroke="var(--grid-crosshair-major, rgba(103, 232, 249, 0.35))"
              strokeWidth="0.75"
              strokeLinecap="round"
            />
            {/* Micro pin-dot at center intersection */}
            <circle
              cx="20"
              cy="20"
              r="0.75"
              fill="var(--grid-dot-glow, rgba(196, 181, 253, 0.30))"
            />

            {/* Secondary Soft Lavender Crosshair (+) at (60, 60) — delicate 4px hairline */}
            <path
              d="M 58 60 L 62 60 M 60 58 L 60 62"
              fill="none"
              stroke="var(--grid-crosshair-minor, rgba(167, 139, 250, 0.22))"
              strokeWidth="0.75"
              strokeLinecap="round"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#architectural-grid)" />
      </svg>
    </div>
  );
}

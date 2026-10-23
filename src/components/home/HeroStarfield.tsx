import React from "react";

// Deterministic pseudo-random generator so SSR and client hydration are 100% identical
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

interface Star {
  id: number;
  cx: string;
  cy: string;
  r: number;
  opacity: number;
  color: string;
  twinkleClass?: string;
  isFlare?: boolean;
}

// Generate ~150 high-fidelity micro stars with varied depths and luminosities
const STARS: Star[] = Array.from({ length: 155 }, (_, i) => {
  const r1 = seededRandom(i * 17 + 1);
  const r2 = seededRandom(i * 29 + 3);
  const r3 = seededRandom(i * 43 + 7);
  const r4 = seededRandom(i * 61 + 11);

  // Position: spread evenly across the viewport
  const cx = `${(r1 * 98 + 1).toFixed(2)}%`;
  const cy = `${(r2 * 96 + 2).toFixed(2)}%`;

  // Sizes: mostly microscopic 0.5px - 1.2px, with a few prominent 1.6px - 2.2px
  let r = 0.65;
  if (r3 > 0.88) r = 1.6;
  else if (r3 > 0.65) r = 1.15;
  else if (r3 > 0.35) r = 0.85;

  // Colors: crisp white, celestial ice blue, and faint lavender
  let color = "#ffffff";
  if (r4 > 0.75) color = "rgba(216, 180, 254, 0.95)"; // lavender
  else if (r4 > 0.5) color = "rgba(186, 230, 253, 0.95)"; // celestial cyan
  else color = "rgba(255, 255, 255, 0.9)";

  const opacity = +(0.25 + r3 * 0.65).toFixed(2);

  // ~20% of stars twinkle with staggered timings
  let twinkleClass: string | undefined;
  if (i % 5 === 0) {
    twinkleClass = "animate-pulse";
  }

  // A couple of delicate 4-point micro-flares in the upper-right cosmic cloud (like reference screenshot)
  const isFlare = i === 12 || i === 47 || i === 89;

  return { id: i, cx, cy, r, opacity, color, twinkleClass, isFlare };
});

export function HeroStarfield() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Subtle soft blur filter for larger stars */}
          <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
          </filter>
        </defs>

        {STARS.map((s) => {
          if (s.isFlare) {
            return (
              <g
                key={s.id}
                className={s.twinkleClass}
                style={{ opacity: s.opacity }}
              >
                {/* Micro flare core */}
                <circle cx={s.cx} cy={s.cy} r={2} fill="#ffffff" />
                <circle
                  cx={s.cx}
                  cy={s.cy}
                  r={5}
                  fill={s.color}
                  filter="url(#star-glow)"
                  opacity="0.6"
                />
              </g>
            );
          }

          return (
            <circle
              key={s.id}
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill={s.color}
              opacity={s.opacity}
              className={s.twinkleClass}
            />
          );
        })}
      </svg>
    </div>
  );
}

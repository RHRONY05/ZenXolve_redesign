"use client";

import Image from "next/image";
import { stepsData } from "@/content/steps";

function HubIcon({ type }: { type: "brain" | "pen" | "cpu" | "globe" }) {
  switch (type) {
    case "brain":
      return (
        <svg viewBox="0 0 24 24" className="size-8 sm:size-9 text-white fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
        </svg>
      );
    case "pen":
      return (
        <svg viewBox="0 0 24 24" className="size-8 sm:size-9 text-white fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "cpu":
      return (
        <svg viewBox="0 0 24 24" className="size-8 sm:size-9 text-white fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" className="size-8 sm:size-9 text-white fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
  }
}

// 5-node radial coordinates (equidistant pentagon)
const fiveNodeCoords = [
  { x: 50, y: 14 }, // Top
  { x: 84, y: 35 }, // Top-Right
  { x: 73, y: 82 }, // Bottom-Right
  { x: 27, y: 82 }, // Bottom-Left
  { x: 16, y: 35 }, // Top-Left
];

// 4-node radial coordinates (cardinal points)
const fourNodeCoords = [
  { x: 50, y: 14 }, // Top
  { x: 85, y: 50 }, // Right
  { x: 50, y: 86 }, // Bottom
  { x: 15, y: 50 }, // Left
];

export function ProcessSteps() {
  return (
    <div className="relative pb-6 md:pb-8">
      {/* 
        Seamless Infinite Flow Keyframe:
        Pattern period = 5px dash + 5px gap = 10px.
        Keyframe moves by exactly 20px (2 full periods).
        20 % 10 === 0 -> 100% mathematically seamless infinite loop without any restart jumps!
      */}
      <style jsx>{`
        @keyframes seamlessCircuitFlow {
          from {
            stroke-dashoffset: 20;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .flowing-circuit {
          stroke-dasharray: 5 5;
          stroke-linecap: round;
          animation: seamlessCircuitFlow 0.85s linear infinite;
        }
      `}</style>

      {stepsData.map((s, i) => {
        // Sticky offset so previous card's top tab remains visible in the stacked deck
        const topOffsetDesktop = 88 + i * 44;
        const topOffsetMobile = 70 + i * 36;
        const coords = s.tools.length === 4 ? fourNodeCoords : fiveNodeCoords;

        return (
          <div
            key={s.step}
            className={`sticky rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 border ${s.theme.bg} ${s.theme.border} shadow-[0_-14px_36px_rgba(0,0,0,0.35)] transition-all duration-300 mb-12 sm:mb-16 md:mb-20 last:mb-0`}
            style={
              {
                top: `clamp(${topOffsetMobile}px, ${topOffsetDesktop}px, 240px)`,
                zIndex: i + 1,
              } as React.CSSProperties
            }
          >
            {/* Top Category Tab Header: Remains visible when cards stack over each other */}
            <div className="flex items-center justify-between pb-3 sm:pb-3.5 mb-4 border-b border-black/10">
              <div className="flex items-center gap-2 sm:gap-3">
                <span
                  className={`font-serif text-base sm:text-lg md:text-xl font-bold tracking-tight ${s.theme.text}`}
                >
                  Step {s.step} — {s.tab}
                </span>
              </div>
            </div>

            {/* Main Split Layout: Left Info & Highlighted Deliverables vs Right Orbital Constellation */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.15fr] gap-5 sm:gap-6 lg:gap-8 items-start">
              {/* Left Column: Heading, Description & Deliverables */}
              <div className="flex flex-col justify-start space-y-3 sm:space-y-4">
                <div>
                  <h3
                    className={`font-serif text-lg sm:text-2xl md:text-[26px] font-bold leading-snug tracking-tight ${s.theme.text}`}
                  >
                    {s.headline}
                  </h3>
                  {/* Descriptive concise 1-sentence paragraph */}
                  <p
                    className={`mt-2 text-xs sm:text-[13.5px] md:text-sm leading-relaxed font-sans ${s.theme.subtext}`}
                  >
                    {s.body}
                  </p>
                </div>

                {/* Scope & Deliverables: Highlighted Bold Key Terms + ▶ Marker */}
                <ul className="space-y-2.5 sm:space-y-3 pt-3 border-t border-black/10">
                  {s.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 sm:gap-2.5">
                      <span
                        className={`text-xs shrink-0 mt-0.5 ${s.theme.bulletColor}`}
                        aria-hidden="true"
                      >
                        ▶
                      </span>
                      <p className="font-sans text-xs sm:text-[13px] md:text-[13.5px] leading-relaxed">
                        <strong
                          className={`font-bold tracking-tight ${s.theme.text}`}
                        >
                          {d.highlight}
                        </strong>
                        <span className={`font-medium ${s.theme.subtext}`}>
                          {" "}— {d.detail}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Full-Height Orbital Constellation Canvas */}
              <div
                className="relative rounded-2xl sm:rounded-3xl bg-white/95 border border-black/10 shadow-sm overflow-hidden h-[340px] sm:h-[370px] md:h-[400px] flex items-center justify-center select-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(0,0,0,0.08) 1.2px, transparent 1.2px)",
                  backgroundSize: "20px 20px",
                }}
              >
                {/* SVG Continuously Flowing Dotted Circuit Lines (Seamless 100% infinite loop) */}
                <svg
                  className="absolute inset-0 size-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <radialGradient id={`glow-${i}`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor={s.theme.lineColor} stopOpacity="0.22" />
                      <stop offset="100%" stopColor={s.theme.lineColor} stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Subtle Ambient Radial Core Glow */}
                  <circle cx="50" cy="50" r="28" fill={`url(#glow-${i})`} />

                  {/* Continuous Seamless Flowing Circuit Lines */}
                  {coords.map((pos, idx) => (
                    <g key={idx}>
                      {/* Underlay faint guide wire */}
                      <line
                        x1="50"
                        y1="50"
                        x2={pos.x}
                        y2={pos.y}
                        stroke="rgba(0,0,0,0.12)"
                        strokeWidth="1.2"
                      />

                      {/* 
                        Seamless Marching Circuit Wire:
                        Flows uninterrupted between center and satellite.
                        Because the center hub and satellite nodes are positioned OVER the endpoints,
                        dashes emerge and submerge without any visible pop or restart!
                      */}
                      <line
                        x1="50"
                        y1="50"
                        x2={pos.x}
                        y2={pos.y}
                        stroke={s.theme.lineColor}
                        strokeWidth="1.7"
                        className="flowing-circuit"
                      />
                    </g>
                  ))}
                </svg>

                {/* Central Intelligence Hub (Elevated on z-10) */}
                <div
                  className="absolute flex flex-col items-center z-10"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Central Core Emblem */}
                  <div
                    className={`size-16 sm:size-18 md:size-20 rounded-2xl ${s.theme.hubBg} flex items-center justify-center shadow-xl border-3 border-white transition-transform hover:scale-105 duration-200`}
                    style={{
                      boxShadow: `0 10px 30px ${s.hub.glowColor}`,
                    }}
                  >
                    <HubIcon type={s.hub.type} />
                  </div>

                  {/* Core Badge Label */}
                  <span className="mt-2 font-mono text-[9.5px] sm:text-[10px] font-black uppercase tracking-widest text-slate-800 bg-white/95 px-2.5 py-0.5 rounded-md shadow-xs border border-slate-200/90 whitespace-nowrap">
                    {s.hub.badge}
                  </span>
                </div>

                {/* Surrounding Tool Satellites (Elevated on z-20) */}
                {s.tools.map((t, idx) => {
                  const pos = coords[idx] || { x: 50, y: 50 };

                  return (
                    <div
                      key={t.name}
                      className="absolute flex flex-col items-center z-20 group cursor-default transition-transform hover:scale-110 duration-200"
                      style={{
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Big Icon Tile (54–60px with 38-42px brand icon) */}
                      <div className="size-13 sm:size-14 md:size-15 rounded-2xl bg-white shadow-md border border-slate-200/90 flex items-center justify-center p-2.5 group-hover:border-slate-400 group-hover:shadow-xl transition-all duration-200">
                        <Image
                          src={`/tools/${t.iconFile}`}
                          alt={t.name}
                          width={40}
                          height={40}
                          className="size-8 sm:size-9 md:size-10 object-contain"
                        />
                      </div>

                      {/* Tool Name Stacked in Column Underneath Icon */}
                      <span className="mt-1.5 font-sans text-xs sm:text-[12.5px] font-bold text-slate-800 text-center tracking-tight truncate max-w-[85px] bg-white/90 px-2 py-0.5 rounded-md shadow-2xs border border-slate-200/70">
                        {t.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

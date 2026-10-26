"use client";

import Image from "next/image";
import { stepsData } from "@/content/steps";

function HubIcon({ type }: { type: "brain" | "pen" | "cpu" | "globe" }) {
  switch (type) {
    case "brain":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-white fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
        </svg>
      );
    case "pen":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-white fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "cpu":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-white fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" className="size-6 sm:size-7 text-white fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
  }
}

// 5-node radial coordinates (equidistant pentagon)
const fiveNodeCoords = [
  { x: 50, y: 15 }, // Top
  { x: 85, y: 36 }, // Top-Right
  { x: 74, y: 80 }, // Bottom-Right
  { x: 26, y: 80 }, // Bottom-Left
  { x: 15, y: 36 }, // Top-Left
];

// 4-node radial coordinates (cardinal points)
const fourNodeCoords = [
  { x: 50, y: 16 }, // Top
  { x: 84, y: 50 }, // Right
  { x: 50, y: 84 }, // Bottom
  { x: 16, y: 50 }, // Left
];

export function ProcessSteps() {
  return (
    <div className="relative pb-24 md:pb-32">
      {stepsData.map((s, i) => {
        // Sticky offset so top tab peeks out like a physical stacked folder deck
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
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-black/10">
              <div className="flex items-center gap-2 sm:gap-3">
                <span
                  className={`font-serif italic text-base sm:text-lg md:text-xl font-bold tracking-tight ${s.theme.text}`}
                >
                  Step {s.step} — {s.tab}
                </span>
              </div>

              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[10.5px] font-bold ${s.theme.tagBg} ${s.theme.tagText}`}
              >
                <span className={`size-1.5 rounded-full ${s.theme.tabAccent}`} />
                PHASE 0{i + 1} // 04
              </span>
            </div>

            {/* Main Split Layout: Left Info & Metrics vs Right Full-Height Orbital Constellation */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.15fr] gap-6 lg:gap-8 items-stretch">
              {/* Left Column: Heading, Description, Deliverables (Sleek matching height) */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    className={`font-serif text-xl sm:text-2xl md:text-[26px] font-bold leading-snug tracking-tight ${s.theme.text}`}
                  >
                    {s.headline}
                  </h3>
                  <p
                    className={`mt-2.5 text-xs sm:text-[13.5px] md:text-sm leading-relaxed font-sans ${s.theme.subtext}`}
                  >
                    {s.body}
                  </p>
                </div>

                {/* Scope & Deliverables: Compact 2x2 grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-3 border-t border-black/10">
                  {s.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="px-3 py-2 rounded-xl bg-white/40 border border-black/[0.08]"
                    >
                      <span
                        className={`block font-mono text-[9.5px] font-bold uppercase tracking-wider opacity-75 leading-none ${s.theme.subtext}`}
                      >
                        {m.label}
                      </span>
                      <span
                        className={`mt-1 block font-sans text-xs font-bold truncate leading-tight ${s.theme.text}`}
                      >
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Full-Height Architectural Orbital Constellation */}
              <div
                className="relative rounded-2xl sm:rounded-3xl bg-white/95 border border-black/10 shadow-sm overflow-hidden h-[310px] sm:h-[330px] md:h-[350px] flex items-center justify-center select-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(0,0,0,0.08) 1.2px, transparent 1.2px)",
                  backgroundSize: "20px 20px",
                }}
              >
                {/* SVG Dotted Connecting Circuits with Animated Traveling Pulses */}
                <svg
                  className="absolute inset-0 size-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <radialGradient id={`glow-${i}`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor={s.theme.lineColor} stopOpacity="0.25" />
                      <stop offset="100%" stopColor={s.theme.lineColor} stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Ambient Core Glow Disk */}
                  <circle cx="50" cy="50" r="26" fill={`url(#glow-${i})`} />

                  {/* Circuit Lines and Animated Data Pulses from Core to Satellites */}
                  {coords.map((pos, idx) => (
                    <g key={idx}>
                      {/* Static Dotted Connection Wire */}
                      <line
                        x1="50"
                        y1="50"
                        x2={pos.x}
                        y2={pos.y}
                        stroke="rgba(0,0,0,0.15)"
                        strokeWidth="0.8"
                        strokeDasharray="2 2"
                      />

                      {/* Animated Traveling Pulse Signal along the wire */}
                      <circle r="1.4" fill={s.theme.lineColor}>
                        <animate
                          attributeName="cx"
                          values={`50;${pos.x}`}
                          dur={`${2 + (idx % 3) * 0.4}s`}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          values={`50;${pos.y}`}
                          dur={`${2 + (idx % 3) * 0.4}s`}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.2;1;0.2"
                          dur={`${2 + (idx % 3) * 0.4}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  ))}
                </svg>

                {/* Central Intelligence Hub */}
                <div
                  className="absolute flex flex-col items-center z-10"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Pulsing Radar Ring */}
                  <div
                    className="absolute size-20 sm:size-24 rounded-full -z-10 pointer-events-none animate-ping opacity-25"
                    style={{ backgroundColor: s.theme.lineColor }}
                    aria-hidden="true"
                  />

                  {/* Center Core Badge */}
                  <div
                    className={`size-13 sm:size-14 rounded-2xl ${s.theme.hubBg} flex items-center justify-center shadow-lg border-2 border-white transition-transform hover:scale-105`}
                    style={{
                      boxShadow: `0 8px 24px ${s.hub.glowColor}`,
                    }}
                  >
                    <HubIcon type={s.hub.type} />
                  </div>

                  {/* Core Badge Label */}
                  <span className="mt-1.5 font-mono text-[9px] font-black uppercase tracking-widest text-slate-700 bg-white/95 px-2 py-0.5 rounded-md shadow-xs border border-slate-200/90 whitespace-nowrap">
                    {s.hub.badge}
                  </span>
                </div>

                {/* Surrounding Tool Satellites (Big Icon + Name in Column!) */}
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
                      {/* Big Icon Container (36-40px Icon) */}
                      <div className="size-11 sm:size-12 rounded-xl bg-white shadow-md border border-slate-200/90 flex items-center justify-center p-2 group-hover:border-slate-400 group-hover:shadow-lg transition-all">
                        <Image
                          src={`/tools/${t.iconFile}`}
                          alt={t.name}
                          width={32}
                          height={32}
                          className="size-7 sm:size-8 object-contain"
                        />
                      </div>

                      {/* Tool Name Stacked in Column Underneath */}
                      <span className="mt-1 font-sans text-[10.5px] sm:text-[11.5px] font-bold text-slate-800 text-center tracking-tight truncate max-w-[75px] bg-white/85 px-1.5 py-0.2 rounded shadow-2xs border border-slate-200/60">
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

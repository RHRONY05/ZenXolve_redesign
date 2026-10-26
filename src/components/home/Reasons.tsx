"use client";

import Image from "next/image";
import { reasons, type ReasonItem } from "@/content/reasons";

export function Reasons() {
  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Outer Dark Frame / Border (Housing the Light Canvas Window) */}
      <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-white/12 bg-[#090b1e] p-2.5 sm:p-4 md:p-6 lg:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.75)]">
        {/* Inner Light Architecture Canvas Window (Matches Section 01 layout) */}
        <div className="relative rounded-xl sm:rounded-2xl lg:rounded-[20px] border border-[#121634] ring-1 ring-white/10 bg-[#f8fafc] text-slate-900 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
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
          <div className="relative z-10 flex items-center justify-between px-5 py-3 sm:px-6 sm:py-3.5 border-b border-white/10 bg-[#121634]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-[#ff5f56]" />
                <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="size-2.5 rounded-full bg-[#27c93f]" />
              </div>

              <div className="h-4 w-px bg-white/15" aria-hidden="true" />

              <span className="font-mono text-xs font-semibold tracking-wider text-slate-300">
                xenzolve-why-clients-stay.flow
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold text-slate-400 bg-white/[0.06] border border-white/10 px-2.5 py-0.5 rounded">
                6 CORE PILLARS
              </span>
            </div>
          </div>

          {/* Ruled 6-Box Grid Canvas (2 vertical divider lines + 1 horizontal divider line on lg) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r: ReasonItem, idx: number) => {
              const isDesktopRightBorder = (idx + 1) % 3 !== 0; // cols 1 and 2
              const isDesktopBottomBorder = idx < 3; // row 1
              const isTabletRightBorder = idx % 2 === 0; // col 1
              const isTabletBottomBorder = idx < 4; // rows 1 & 2
              const isMobileBottomBorder = idx < 5;

              return (
                <div
                  key={r.title}
                  className={`group relative flex flex-col justify-start p-5 sm:p-6 md:p-7 transition-all duration-300 ${
                    r.tint
                  } ${isDesktopRightBorder ? "lg:border-r" : "lg:border-r-0"} ${
                    isDesktopBottomBorder ? "lg:border-b" : "lg:border-b-0"
                  } ${isTabletRightBorder ? "md:border-r" : "md:border-r-0"} ${
                    isTabletBottomBorder ? "md:border-b" : "md:border-b-0"
                  } ${isMobileBottomBorder ? "border-b" : "border-b-0"} border-slate-300/80`}
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
        </div>
      </div>

      {/* Bottom Trust Stat Bar (Summarizing Client Retention Metrics) */}
      <div className="rounded-2xl border border-white/12 bg-[var(--surface)]/95 p-4 sm:p-5 md:py-4 md:px-7 shadow-[0_16px_40px_rgba(0,0,0,0.55)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs md:text-[13px] text-slate-300 font-mono">
          <span className="flex items-center gap-2 text-white">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <strong className="text-white font-bold">98%</strong> Client Retention Rate
          </span>
          <span className="text-slate-600 hidden sm:inline">/</span>
          <span className="flex items-center gap-2 text-white">
            <span className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <strong className="text-white font-bold">40+</strong> Production Launches
          </span>
          <span className="text-slate-600 hidden sm:inline">/</span>
          <span className="flex items-center gap-2 text-white">
            <span className="size-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa]" />
            <strong className="text-white font-bold">&lt; 2h</strong> Direct SLA
          </span>
          <span className="text-slate-600 hidden md:inline">/</span>
          <span className="flex items-center gap-2 text-white hidden md:flex">
            <span className="size-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
            <strong className="text-white font-bold">Zero</strong> Black-Box Handoffs
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-slate-400 shrink-0">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          <span>Full IP &amp; Codebase Ownership</span>
        </div>
      </div>
    </div>
  );
}

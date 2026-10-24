"use client";

import { useState } from "react";

export function StudioComparator() {
  const [mode, setMode] = useState<"xenzolve" | "traditional">("xenzolve");

  return (
    <div className="mb-10 sm:mb-14 rounded-2xl border border-white/15 bg-[var(--surface)]/95 p-5 sm:p-8 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.65)] transition-all">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--picker-eyebrow)]">
            <span className="size-2 rounded-full bg-[var(--picker-accent-dot)] shadow-[0_0_8px_var(--picker-accent-dot-glow)]" />
            <span>Workflow Architecture</span>
          </div>
          <h4 className="mt-1.5 text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight">
            Compare: The 3-Agency Trap vs. The XenZolve Engine
          </h4>
        </div>

        {/* Mode Switcher Toggle */}
        <div className="flex p-1 rounded-xl bg-black/50 border border-white/10 self-start sm:self-auto select-none">
          <button
            type="button"
            onClick={() => setMode("xenzolve")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              mode === "xenzolve"
                ? "bg-[var(--picker-card-active-border)] text-white shadow-[0_0_16px_var(--picker-card-active-glow)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            <span>The XenZolve Engine</span>
          </button>
          <button
            type="button"
            onClick={() => setMode("traditional")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              mode === "traditional"
                ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-[0_0_16px_rgba(244,63,94,0.2)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>The 3-Agency Trap</span>
          </button>
        </div>
      </div>

      {/* Main Workflow Comparison Canvas */}
      <div className="mt-8">
        {/* Circuit Lightning Gradients for SVG beams */}
        <svg className="absolute size-0 overflow-hidden" aria-hidden="true">
          <defs>
            <linearGradient id="lightning-stage1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#c084fc" />
              <stop offset="65%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="lightning-stage2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#22d3ee" />
              <stop offset="65%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <linearGradient id="lightning-stage3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#34d399" />
              <stop offset="65%" stopColor="#10b981" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {mode === "xenzolve" ? (
          <div className="space-y-6 animate-fadeIn">
            {/* Overhead Studio Synchronization Loop Rail (Active on Desktop & Tablet) */}
            <div className="hidden md:grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-2 items-end h-10 mb-[-2px] relative z-20 pointer-events-none select-none">
              {/* Column 1: Above Stage 01 (Design) */}
              <div className="relative h-full flex flex-col justify-end">
                {/* Top horizontal rail (center to right edge) */}
                <div className="absolute top-2 left-1/2 right-0 h-[2px] bg-white/10" />

                {/* Vertical Stem 1 dropping from top-2 to card top */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[2px] bottom-0 bg-white/10" />

                {/* Stem 1 descent packet (97% - 100%) */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[2px] bottom-0 overflow-hidden">
                  <div className="absolute left-0 right-0 h-4 bg-gradient-to-b from-transparent to-violet-300 opacity-0 animate-circuit-stem1-packet shadow-[0_0_8px_#c084fc]" />
                </div>

                {/* Terminal Node 1 */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2.5 rounded-full border border-violet-400/60 bg-[#121633] shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
              </div>

              {/* Column 2: Above Arrow 1 */}
              <div className="relative h-full flex items-start">
                <div className="absolute top-2 left-0 right-0 h-[2px] bg-white/10" />
              </div>

              {/* Column 3: Above Stage 02 (Build) */}
              <div className="relative h-full flex flex-col justify-end">
                {/* Full horizontal track across Box 2 */}
                <div className="absolute top-2 left-0 right-0 h-[2px] bg-white/10" />

                {/* Vertical Drop Stem to Box 2 */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[2px] bottom-0 bg-white/10" />

                {/* Center Terminal Node & Sync Badge */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/15 bg-[#121633] shadow-[0_4px_16px_rgba(0,0,0,0.6)] backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-300 font-semibold whitespace-nowrap">
                    Continuous Studio Loop · 0ms Handoff
                  </span>
                </div>
              </div>

              {/* Column 4: Above Arrow 2 */}
              <div className="relative h-full flex items-start">
                <div className="absolute top-2 left-0 right-0 h-[2px] bg-white/10" />
              </div>

              {/* Column 5: Above Stage 03 (Automate) */}
              <div className="relative h-full flex flex-col justify-end">
                {/* Horizontal track from left to center */}
                <div className="absolute top-2 left-0 right-1/2 h-[2px] bg-white/10" />

                {/* Vertical Stem 3 from card top to rail */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[2px] bottom-0 bg-white/10" />

                {/* Stem 3 ascent packet (86% - 89%) */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[2px] bottom-0 overflow-hidden">
                  <div className="absolute left-0 right-0 h-4 bg-gradient-to-t from-transparent to-emerald-300 opacity-0 animate-circuit-stem3-packet shadow-[0_0_8px_#34d399]" />
                </div>

                {/* Terminal Node 3 */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2.5 rounded-full border border-emerald-400/60 bg-[#121633] shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
              </div>

              {/* Overhead Return Flying Packet (East -> West across entire width) */}
              <div className="absolute top-2 left-[15%] right-[15%] h-[2px] overflow-visible pointer-events-none">
                <div className="absolute top-1/2 -translate-y-1/2 h-1 rounded-full bg-gradient-to-l from-emerald-300 via-cyan-200 to-white opacity-0 animate-circuit-overhead-track shadow-[0_0_14px_#67e8f9,0_0_24px_rgba(168,85,247,0.8)]" />
              </div>
            </div>

            {/* 3-Stage Connected Workflow Grid (Desktop: 1fr auto 1fr auto 1fr) */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-2 items-center">
              
              {/* STAGE 01: Precision UI/UX Design */}
              <div className="relative overflow-hidden flex flex-col justify-between h-full min-h-[260px] sm:min-h-[280px] rounded-2xl border border-violet-500/40 border-t-2 border-t-violet-400 bg-[#1a1b44]/95 p-6 sm:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_12px_32px_rgba(0,0,0,0.45)] transition-all animate-circuit-stage1-glow">
                {/* Traveling Lightning Perimeter Beam (Tablet/Desktop) */}
                <svg className="pointer-events-none absolute inset-0 size-full overflow-hidden rounded-2xl z-20 hidden md:block" fill="none">
                  <rect
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx="15"
                    stroke="url(#lightning-stage1)"
                    strokeWidth="3"
                    pathLength="100"
                    className="animate-circuit-stage1-beam"
                    style={{ filter: "drop-shadow(0 0 6px #c084fc)" }}
                  />
                </svg>

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-violet-300 px-2.5 py-1 rounded-md bg-violet-500/15 border border-violet-500/30">
                      STAGE 01
                    </span>
                    <span className="text-[11px] font-mono font-medium text-violet-300/80">
                      Tokens In Repo
                    </span>
                  </div>
                  <h5 className="mt-4 text-lg font-bold text-white tracking-tight">
                    Precision UI/UX Design
                  </h5>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Engineered directly as code tokens & responsive components. No unreachable Figma fantasies or handoff translation bugs.
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.08] flex flex-col gap-2 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-violet-400 font-bold">✓</span>
                    <span>Tokens sync straight to GitHub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-violet-400 font-bold">✓</span>
                    <span>Component architecture spec</span>
                  </div>
                </div>
              </div>

              {/* Workflow Connector Arrow 1 -> 2 (Desktop & Mobile) */}
              <div className="flex items-center justify-center py-1 md:py-0 md:px-2 z-20">
                {/* Desktop horizontal flow with traveling packet */}
                <div className="hidden md:flex items-center relative">
                  <div className="relative h-[2px] w-2.5 lg:w-4 bg-gradient-to-r from-violet-500/40 to-cyan-500/50 overflow-visible">
                    <span className="absolute top-1/2 size-2.5 rounded-full bg-white shadow-[0_0_10px_#67e8f9,0_0_16px_#06b6d4] opacity-0 animate-circuit-arrow1-packet" />
                  </div>
                  <div className="flex size-7 lg:size-8 items-center justify-center rounded-full border border-cyan-400/40 bg-[#0e132e] text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)] animate-circuit-arrow1-circle transition-all">
                    <svg className="size-3.5 lg:size-4" viewBox="0 0 16 16" fill="none">
                      <path d="M5 3L10 8L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="relative h-[2px] w-2.5 lg:w-4 bg-gradient-to-r from-cyan-500/50 to-cyan-500/40 overflow-visible">
                    <span className="absolute top-1/2 size-2.5 rounded-full bg-white shadow-[0_0_10px_#67e8f9,0_0_16px_#06b6d4] opacity-0 animate-circuit-arrow1-packet" />
                  </div>
                </div>
                {/* Mobile vertical flow */}
                <div className="flex md:hidden flex-col items-center">
                  <div className="w-[2px] h-3 bg-violet-500/40" />
                  <div className="flex size-7 items-center justify-center rounded-full border border-cyan-400/40 bg-[#0e132e] text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                    <svg className="size-3.5" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-[2px] h-3 bg-cyan-500/40" />
                </div>
              </div>

              {/* STAGE 02: Full-Stack Cloud Engineering */}
              <div className="relative overflow-hidden flex flex-col justify-between h-full min-h-[260px] sm:min-h-[280px] rounded-2xl border border-cyan-500/40 border-t-2 border-t-cyan-400 bg-[#0f2444]/95 p-6 sm:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_12px_32px_rgba(0,0,0,0.45)] transition-all animate-circuit-stage2-glow">
                {/* Traveling Lightning Perimeter Beam (Tablet/Desktop) */}
                <svg className="pointer-events-none absolute inset-0 size-full overflow-hidden rounded-2xl z-20 hidden md:block" fill="none">
                  <rect
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx="15"
                    stroke="url(#lightning-stage2)"
                    strokeWidth="3"
                    pathLength="100"
                    className="animate-circuit-stage2-beam"
                    style={{ filter: "drop-shadow(0 0 6px #22d3ee)" }}
                  />
                </svg>

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-cyan-300 px-2.5 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30">
                      STAGE 02
                    </span>
                    <span className="text-[11px] font-mono font-medium text-cyan-300/80">
                      1:1 Implementation
                    </span>
                  </div>
                  <h5 className="mt-4 text-lg font-bold text-white tracking-tight">
                    Full-Stack Cloud Engineering
                  </h5>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Next.js, mobile apps, and robust SQL databases built to scale cleanly to millions of events with zero tech debt.
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.08] flex flex-col gap-2 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Type-safe Next.js + Postgres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Pixel-perfect responsive layout</span>
                  </div>
                </div>
              </div>

              {/* Workflow Connector Arrow 2 -> 3 (Desktop & Mobile) */}
              <div className="flex items-center justify-center py-1 md:py-0 md:px-2 z-20">
                {/* Desktop horizontal flow with traveling packet */}
                <div className="hidden md:flex items-center relative">
                  <div className="relative h-[2px] w-2.5 lg:w-4 bg-gradient-to-r from-cyan-500/40 to-emerald-500/50 overflow-visible">
                    <span className="absolute top-1/2 size-2.5 rounded-full bg-white shadow-[0_0_10px_#34d399,0_0_16px_#10b981] opacity-0 animate-circuit-arrow2-packet" />
                  </div>
                  <div className="flex size-7 lg:size-8 items-center justify-center rounded-full border border-emerald-400/40 bg-[#0e132e] text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)] animate-circuit-arrow2-circle transition-all">
                    <svg className="size-3.5 lg:size-4" viewBox="0 0 16 16" fill="none">
                      <path d="M5 3L10 8L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="relative h-[2px] w-2.5 lg:w-4 bg-gradient-to-r from-emerald-500/50 to-emerald-500/40 overflow-visible">
                    <span className="absolute top-1/2 size-2.5 rounded-full bg-white shadow-[0_0_10px_#34d399,0_0_16px_#10b981] opacity-0 animate-circuit-arrow2-packet" />
                  </div>
                </div>
                {/* Mobile vertical flow */}
                <div className="flex md:hidden flex-col items-center">
                  <div className="w-[2px] h-3 bg-cyan-500/40" />
                  <div className="flex size-7 items-center justify-center rounded-full border border-emerald-400/40 bg-[#0e132e] text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                    <svg className="size-3.5" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-[2px] h-3 bg-emerald-500/40" />
                </div>
              </div>

              {/* STAGE 03: Autonomous AI & Workflows */}
              <div className="relative overflow-hidden flex flex-col justify-between h-full min-h-[260px] sm:min-h-[280px] rounded-2xl border border-emerald-500/40 border-t-2 border-t-emerald-400 bg-[#0d2e2b]/95 p-6 sm:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),_0_12px_32px_rgba(0,0,0,0.45)] transition-all animate-circuit-stage3-glow">
                {/* Traveling Lightning Perimeter Beam (Tablet/Desktop) */}
                <svg className="pointer-events-none absolute inset-0 size-full overflow-hidden rounded-2xl z-20 hidden md:block" fill="none">
                  <rect
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx="15"
                    stroke="url(#lightning-stage3)"
                    strokeWidth="3"
                    pathLength="100"
                    className="animate-circuit-stage3-beam"
                    style={{ filter: "drop-shadow(0 0 6px #34d399)" }}
                  />
                </svg>

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-emerald-300 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30">
                      STAGE 03
                    </span>
                    <span className="text-[11px] font-mono font-medium text-emerald-300/80">
                      Native APIs
                    </span>
                  </div>
                  <h5 className="mt-4 text-lg font-bold text-white tracking-tight">
                    Autonomous AI & Workflows
                  </h5>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    AI bots & messaging automation wired directly to your core database. No fragile third-party glue or breaking webhooks.
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.08] flex flex-col gap-2 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Event-driven WhatsApp / CRM agents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Direct core DB read/write actions</span>
                  </div>
                </div>
              </div>

            </div>

            {/* XenZolve Outcome Badges */}
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3 pt-3">
              <div className="flex items-center gap-2 rounded-xl bg-emerald-950/30 border border-emerald-500/20 px-3.5 py-2.5 text-xs text-emerald-300 font-medium">
                <span className="font-bold text-emerald-400">✓</span>
                <span>1 Unified Partner</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-emerald-950/30 border border-emerald-500/20 px-3.5 py-2.5 text-xs text-emerald-300 font-medium">
                <span className="font-bold text-emerald-400">✓</span>
                <span>Zero Handoff Loss</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-emerald-950/30 border border-emerald-500/20 px-3.5 py-2.5 text-xs text-emerald-300 font-medium">
                <span className="font-bold text-emerald-400">✓</span>
                <span>2–4 Week Delivery</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-emerald-950/30 border border-emerald-500/20 px-3.5 py-2.5 text-xs text-emerald-300 font-medium">
                <span className="font-bold text-emerald-400">✓</span>
                <span>100% Accountability</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fadeIn">
            {/* The Disconnected Silos Graphic (Desktop: 1fr auto 1fr auto 1fr) */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-2 items-center">
              
              {/* Silo 1: UI/UX Agency */}
              <div className="flex flex-col justify-between h-full min-h-[260px] sm:min-h-[280px] rounded-2xl border border-rose-500/40 border-t-2 border-t-rose-500/80 bg-[#2c151c]/95 p-6 sm:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),_0_12px_32px_rgba(0,0,0,0.45)] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-rose-300 px-2.5 py-1 rounded-md bg-rose-500/15 border border-rose-500/30">
                      AGENCY 1
                    </span>
                    <span className="text-[11px] font-mono font-medium text-rose-300/80">
                      $$$ Separate Bill
                    </span>
                  </div>
                  <h5 className="mt-4 text-lg font-bold text-white tracking-tight">
                    Design Boutique
                  </h5>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Delivers static Figma mockups with no understanding of database performance, responsive limits, or real edge cases.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rose-500/20 flex flex-col gap-2 font-mono text-xs text-rose-300">
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>No engineering feasibility check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>Handoff friction: Devs can&apos;t build it</span>
                  </div>
                </div>
              </div>

              {/* Severed Connector 1 -> 2 (Desktop & Mobile) */}
              <div className="flex items-center justify-center py-1 md:py-0 md:px-2 z-20">
                {/* Desktop */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="flex size-7 lg:size-8 items-center justify-center rounded-full border border-rose-500/50 bg-[#160b0e] text-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.35)]">
                    <svg className="size-3.5 lg:size-4" viewBox="0 0 16 16" fill="none">
                      <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="mt-1 font-mono text-[9px] uppercase tracking-wider text-rose-400 font-bold bg-black/80 px-1.5 py-0.5 rounded border border-rose-500/30 whitespace-nowrap">
                    Broken Handoff
                  </span>
                </div>
                {/* Mobile */}
                <div className="flex md:hidden flex-col items-center">
                  <div className="w-[2px] h-3 bg-rose-500/40" />
                  <div className="flex size-7 items-center justify-center rounded-full border border-rose-500/40 bg-[#160b0e] text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.3)]">
                    <svg className="size-3.5" viewBox="0 0 16 16" fill="none">
                      <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="w-[2px] h-3 bg-rose-500/40" />
                </div>
              </div>

              {/* Silo 2: Dev Shop */}
              <div className="flex flex-col justify-between h-full min-h-[260px] sm:min-h-[280px] rounded-2xl border border-rose-500/40 border-t-2 border-t-rose-500/80 bg-[#2c151c]/95 p-6 sm:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),_0_12px_32px_rgba(0,0,0,0.45)] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-rose-300 px-2.5 py-1 rounded-md bg-rose-500/15 border border-rose-500/30">
                      AGENCY 2
                    </span>
                    <span className="text-[11px] font-mono font-medium text-rose-300/80">
                      $$$ Separate Bill
                    </span>
                  </div>
                  <h5 className="mt-4 text-lg font-bold text-white tracking-tight">
                    Software Dev Shop
                  </h5>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Re-writes Figma components, compromises UI quality, and doesn&apos;t know how to build autonomous AI workflows.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rose-500/20 flex flex-col gap-2 font-mono text-xs text-rose-300">
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>Blames design agency for delays</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>No native AI or automation skills</span>
                  </div>
                </div>
              </div>

              {/* Severed Connector 2 -> 3 (Desktop & Mobile) */}
              <div className="flex items-center justify-center py-1 md:py-0 md:px-2 z-20">
                {/* Desktop */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="flex size-7 lg:size-8 items-center justify-center rounded-full border border-rose-500/50 bg-[#160b0e] text-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.35)]">
                    <svg className="size-3.5 lg:size-4" viewBox="0 0 16 16" fill="none">
                      <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="mt-1 font-mono text-[9px] uppercase tracking-wider text-rose-400 font-bold bg-black/80 px-1.5 py-0.5 rounded border border-rose-500/30 whitespace-nowrap">
                    Fragile Glue
                  </span>
                </div>
                {/* Mobile */}
                <div className="flex md:hidden flex-col items-center">
                  <div className="w-[2px] h-3 bg-rose-500/40" />
                  <div className="flex size-7 items-center justify-center rounded-full border border-rose-500/40 bg-[#160b0e] text-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.3)]">
                    <svg className="size-3.5" viewBox="0 0 16 16" fill="none">
                      <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="w-[2px] h-3 bg-rose-500/40" />
                </div>
              </div>

              {/* Silo 3: Bot Freelancer */}
              <div className="flex flex-col justify-between h-full min-h-[260px] sm:min-h-[280px] rounded-2xl border border-rose-500/40 border-t-2 border-t-rose-500/80 bg-[#2c151c]/95 p-6 sm:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),_0_12px_32px_rgba(0,0,0,0.45)] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-rose-300 px-2.5 py-1 rounded-md bg-rose-500/15 border border-rose-500/30">
                      VENDOR 3
                    </span>
                    <span className="text-[11px] font-mono font-medium text-rose-300/80">
                      Separate Hourly Rate
                    </span>
                  </div>
                  <h5 className="mt-4 text-lg font-bold text-white tracking-tight">
                    Automation Contractor
                  </h5>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Duct-tapes Zapier or Make on top of the database. Breaks silently every time an API schema or frontend changes.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rose-500/20 flex flex-col gap-2 font-mono text-xs text-rose-300">
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>Zero direct database synchronization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>Nobody takes responsibility for outages</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Traditional Pain Badges */}
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3 pt-3">
              <div className="flex items-center gap-2 rounded-xl bg-rose-950/30 border border-rose-500/20 px-3.5 py-2.5 text-xs text-rose-300 font-medium">
                <span className="font-bold text-rose-400">✕</span>
                <span>3 Fragmented Invoices</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-rose-950/30 border border-rose-500/20 px-3.5 py-2.5 text-xs text-rose-300 font-medium">
                <span className="font-bold text-rose-400">✕</span>
                <span>Months of Finger-pointing</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-rose-950/30 border border-rose-500/20 px-3.5 py-2.5 text-xs text-rose-300 font-medium">
                <span className="font-bold text-rose-400">✕</span>
                <span>Fragile Duct-Taped APIs</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-rose-950/30 border border-rose-500/20 px-3.5 py-2.5 text-xs text-rose-300 font-medium">
                <span className="font-bold text-rose-400">✕</span>
                <span>Zero Unified Vision</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

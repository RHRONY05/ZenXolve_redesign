"use client";

import { useState } from "react";

export function StudioComparator() {
  const [mode, setMode] = useState<"xenzolve" | "traditional">("xenzolve");

  return (
    <div className="mb-10 sm:mb-12 rounded-2xl border border-white/10 bg-[#090b1c]/80 p-5 sm:p-7 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all">
      {/* Header & Toggle Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--picker-eyebrow)]">
            <span className="size-2 rounded-full bg-[var(--picker-accent-dot)] shadow-[0_0_8px_var(--picker-accent-dot-glow)]" />
            <span>Why Single-Studio Engineering Wins</span>
          </div>
          <h4 className="mt-1 text-lg sm:text-xl font-semibold text-white tracking-tight">
            Compare: The 3-Agency Trap vs. The XenZolve Engine
          </h4>
        </div>

        {/* Mode Switcher Pills */}
        <div className="flex p-1 rounded-xl bg-black/40 border border-white/10 self-start sm:self-auto select-none">
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

      {/* Dynamic Comparison Visualizer */}
      <div className="mt-6">
        {mode === "xenzolve" ? (
          <div className="space-y-6 animate-fadeIn">
            {/* The Connected Pipeline Graphic */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 relative">
              {/* Connector line on desktop */}
              <div
                className="hidden md:block pointer-events-none absolute top-1/2 left-[15%] right-[15%] h-[2px] -translate-y-1/2 z-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(139,92,246,0.5) 0%, rgba(6,182,212,0.8) 50%, rgba(16,185,129,0.5) 100%)",
                }}
              />

              {/* Step 1: Design */}
              <div className="relative z-10 rounded-xl border border-white/10 bg-white/[0.03] p-4.5 hover:border-[var(--picker-accent-dot)]/50 transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-violet-400 px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                    STAGE 01
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">Tokens In Repo</span>
                </div>
                <h5 className="mt-3 text-base font-bold text-white">Precision UI/UX Design</h5>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  Engineered directly as code tokens & responsive components. No unreachable Figma fantasies.
                </p>
              </div>

              {/* Step 2: Build */}
              <div className="relative z-10 rounded-xl border border-[var(--picker-card-active-border)]/60 bg-[var(--picker-card-active-bg)] p-4.5 shadow-[0_0_25px_var(--picker-card-active-glow)] transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    STAGE 02
                  </span>
                  <span className="text-[11px] font-mono text-cyan-300">1:1 Implementation</span>
                </div>
                <h5 className="mt-3 text-base font-bold text-white">Full-Stack Cloud Engineering</h5>
                <p className="mt-1 text-xs text-slate-200 leading-relaxed">
                  Next.js, mobile apps, and robust SQL databases built to scale cleanly to millions of events.
                </p>
              </div>

              {/* Step 3: Automate */}
              <div className="relative z-10 rounded-xl border border-white/10 bg-white/[0.03] p-4.5 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    STAGE 03
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">Native APIs</span>
                </div>
                <h5 className="mt-3 text-base font-bold text-white">Autonomous AI & Workflows</h5>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  AI bots & messaging automation wired directly to your core database. No fragile third-party glue.
                </p>
              </div>
            </div>

            {/* XenZolve Outcome Badges */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 text-xs text-emerald-300">
                <span className="font-bold">✓</span>
                <span>1 Unified Partner</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 text-xs text-emerald-300">
                <span className="font-bold">✓</span>
                <span>Zero Handoff Loss</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 text-xs text-emerald-300">
                <span className="font-bold">✓</span>
                <span>2–4 Week Delivery</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 text-xs text-emerald-300">
                <span className="font-bold">✓</span>
                <span>100% Accountability</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fadeIn">
            {/* The Disconnected Silos Graphic */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 relative">
              {/* Silo 1: UI/UX Agency */}
              <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-rose-400">AGENCY 1</span>
                  <span className="text-[10px] font-mono text-rose-300">$$$ Separate Bill</span>
                </div>
                <h5 className="mt-3 text-base font-bold text-white">Design Boutique</h5>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  Delivers static Figma mockups with no understanding of database performance or coding limits.
                </p>
                <div className="mt-3 text-[11px] font-mono text-rose-400 border-t border-rose-500/20 pt-2 flex items-center gap-1">
                  <span>⚠️ Handoff friction: Devs can&apos;t build it</span>
                </div>
              </div>

              {/* Silo 2: Dev Shop */}
              <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-rose-400">AGENCY 2</span>
                  <span className="text-[10px] font-mono text-rose-300">$$$ Separate Bill</span>
                </div>
                <h5 className="mt-3 text-base font-bold text-white">Software Dev Shop</h5>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  Re-writes Figma components, compromises UI quality, and doesn&apos;t know how to build AI agents.
                </p>
                <div className="mt-3 text-[11px] font-mono text-rose-400 border-t border-rose-500/20 pt-2 flex items-center gap-1">
                  <span>⚠️ Blames design agency for delays</span>
                </div>
              </div>

              {/* Silo 3: Bot Freelancer */}
              <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-rose-400">VENDOR 3</span>
                  <span className="text-[10px] font-mono text-rose-300">$$$ Separate Bill</span>
                </div>
                <h5 className="mt-3 text-base font-bold text-white">Automation Freelancer</h5>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  Duct-tapes Zapier or Make on top of the database. Breaks every time code updates.
                </p>
                <div className="mt-3 text-[11px] font-mono text-rose-400 border-t border-rose-500/20 pt-2 flex items-center gap-1">
                  <span>⚠️ Nobody takes responsibility when bugs hit</span>
                </div>
              </div>
            </div>

            {/* Traditional Pain Badges */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-lg bg-rose-500/10 border border-rose-500/20 px-3 py-2 text-xs text-rose-300">
                <span className="font-bold">✕</span>
                <span>3 Fragmented Invoices</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-rose-500/10 border border-rose-500/20 px-3 py-2 text-xs text-rose-300">
                <span className="font-bold">✕</span>
                <span>Months of Finger-pointing</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-rose-500/10 border border-rose-500/20 px-3 py-2 text-xs text-rose-300">
                <span className="font-bold">✕</span>
                <span>Fragile Duct-Taped APIs</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-rose-500/10 border border-rose-500/20 px-3 py-2 text-xs text-rose-300">
                <span className="font-bold">✕</span>
                <span>Zero Unified Vision</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

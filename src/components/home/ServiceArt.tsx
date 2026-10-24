"use client";

import React from "react";

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Build: Full-Stack Cloud Architecture Console with Edge runtime & database health */
export function BuildArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-cyan-500/25 bg-[#071325]/90 p-3 sm:p-4 text-xs font-mono select-none ${className}`}>
      {/* Titlebar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-rose-500/80" />
          <span className="size-2 rounded-full bg-amber-500/80" />
          <span className="size-2 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[10.5px] text-slate-400">api.xenzolve.io/cluster</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
          <span>Edge Live · 34ms</span>
        </div>
      </div>

      {/* Architecture Visual Grid */}
      <div className="space-y-2">
        {/* Layer 1: Next.js Server Components */}
        <div className="rounded-lg border border-cyan-500/20 bg-white/[0.05] p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center font-bold text-[10px]">
              FE
            </span>
            <div>
              <div className="text-white font-semibold text-[11px]">Next.js 15 Server Layer</div>
              <div className="text-slate-300 text-[9.5px]">Edge SSR · Zero Client Waterfall</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-300 font-semibold">
            200 OK
          </span>
        </div>

        {/* Layer 2: API & Data Mesh */}
        <div className="rounded-lg border border-violet-500/20 bg-white/[0.05] p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-5 rounded-md bg-violet-500/20 text-violet-300 border border-violet-500/30 flex items-center justify-center font-bold text-[10px]">
              BE
            </span>
            <div>
              <div className="text-white font-semibold text-[11px]">PostgreSQL & Realtime Mesh</div>
              <div className="text-slate-300 text-[9.5px]">Row-Level Security · Sub-10ms Queries</div>
            </div>
          </div>
          <span className="font-mono text-[10px] text-cyan-400">Pool: 48/50</span>
        </div>

        {/* Micro Telemetry Bar */}
        <div className="pt-1 flex items-center justify-between text-[9.5px] text-slate-400 border-t border-white/5">
          <span>Global CDN · 18 Regions</span>
          <span className="text-slate-300">Scale: 100k+ req/sec</span>
        </div>
      </div>
    </div>
  );
}

/** Automate: Autonomous AI Pipeline connecting Webhooks to Intelligence to Database */
export function AutomateArt({ className = "" }: { className?: string }) {
  const p1 = "M 40 40 L 115 40";
  const p2 = "M 175 40 L 250 40";

  return (
    <div className={`relative overflow-hidden rounded-xl border border-emerald-500/25 bg-[#071a17]/90 p-3 sm:p-4 select-none ${className}`}>
      {/* Top Telemetry */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 font-mono text-[10.5px]">
        <div className="flex items-center gap-1.5 text-slate-400">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
          <span>Workflow Orchestrator</span>
        </div>
        <span className="text-emerald-400 font-semibold">0.4s Latency</span>
      </div>

      {/* SVG Connected Nodes */}
      <div className="relative py-1">
        <svg viewBox="0 0 290 80" className="w-full h-auto" role="img" aria-label="Autonomous AI Pipeline">
          {/* Connector Paths */}
          <path d={p1} {...line} stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />
          <path d={p2} {...line} stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />

          {/* Animated Flow Packets */}
          <circle r="3.5" fill="#67e8f9" className="art-pulse" style={{ offsetPath: `path("${p1}")` }} />
          <circle r="3.5" fill="#34d399" className="art-pulse" style={{ offsetPath: `path("${p2}")`, ["--d" as string]: 0.8 }} />

          {/* Node 1: Webhook Ingress */}
          <g transform="translate(5, 12)">
            <rect width="65" height="56" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <text x="32" y="26" textAnchor="middle" fill="#94a3b8" style={{ font: "600 8.5px var(--font-mono)" }}>
              WEBHOOK
            </text>
            <text x="32" y="42" textAnchor="middle" fill="#ffffff" style={{ font: "700 9.5px var(--font-sans)" }}>
              WhatsApp
            </text>
          </g>

          {/* Node 2: AI Reasoning Core */}
          <g transform="translate(115, 12)">
            <rect width="70" height="56" rx="10" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.5)" strokeWidth="1.2" />
            <text x="35" y="26" textAnchor="middle" fill="#c4b5fd" style={{ font: "600 8.5px var(--font-mono)" }}>
              AI AGENT
            </text>
            <text x="35" y="42" textAnchor="middle" fill="#ffffff" style={{ font: "700 9.5px var(--font-sans)" }}>
              Reasoning
            </text>
          </g>

          {/* Node 3: CRM / Database Sync */}
          <g transform="translate(225, 12)">
            <rect width="60" height="56" rx="10" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
            <text x="30" y="26" textAnchor="middle" fill="#6ee7b7" style={{ font: "600 8.5px var(--font-mono)" }}>
              SYNC
            </text>
            <text x="30" y="42" textAnchor="middle" fill="#ffffff" style={{ font: "700 9.5px var(--font-sans)" }}>
              DB & Stripe
            </text>
          </g>
        </svg>
      </div>

      <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[9.5px] text-slate-400">
        <span>Autonomous Execution</span>
        <span className="text-emerald-400">Zero Human Overhead</span>
      </div>
    </div>
  );
}

/** Design: Figma Token & Component Studio showing design-to-code alignment */
export function DesignArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-violet-500/25 bg-[#10112c]/90 p-3 sm:p-4 text-xs font-mono select-none ${className}`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-1.5 text-slate-400 text-[10.5px]">
          <span className="size-2 rounded-full bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.8)]" />
          <span>Figma Studio Tokens</span>
        </div>
        <span className="text-[10px] text-violet-300 font-semibold px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
          WCAG AAA
        </span>
      </div>

      {/* Token Matrix */}
      <div className="space-y-2">
        {/* Token 01: Typography */}
        <div className="flex items-center justify-between rounded-lg border border-violet-500/20 bg-white/[0.05] px-2.5 py-1.5">
          <span className="text-slate-300 text-[10px]">Type Scale</span>
          <span className="font-serif text-[11px] text-white italic">Display 80px / 92px</span>
        </div>

        {/* Token 02: Color Tokens */}
        <div className="flex items-center justify-between rounded-lg border border-violet-500/20 bg-white/[0.05] px-2.5 py-1.5">
          <span className="text-slate-300 text-[10px]">Palette Tokens</span>
          <div className="flex items-center gap-1.5">
            <span className="size-3 rounded-full bg-[#8b5cf6] border border-white/20" title="Violet" />
            <span className="size-3 rounded-full bg-[#06b6d4] border border-white/20" title="Cyan" />
            <span className="size-3 rounded-full bg-[#ff7857] border border-white/20" title="Burnt Orange" />
            <span className="size-3 rounded-full bg-[#59c7a6] border border-white/20" title="Mint" />
          </div>
        </div>

        {/* Token 03: Spec Calipers */}
        <div className="flex items-center justify-between rounded-lg border border-violet-500/20 bg-white/[0.05] px-2.5 py-1.5">
          <span className="text-slate-300 text-[10px]">Zero Handoff Loss</span>
          <span className="text-[10.5px] text-emerald-400 font-bold">1:1 In Production</span>
        </div>
      </div>
    </div>
  );
}

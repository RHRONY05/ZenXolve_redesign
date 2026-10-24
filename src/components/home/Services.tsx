"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { services, type Service } from "@/content/services";
import { AutomateArt, BuildArt, DesignArt } from "./ServiceArt";
import { StudioComparator } from "./StudioComparator";

function PanelRow({ s }: { s: Service }) {
  return (
    <Link
      href={`/services#${s.slug}`}
      className="group block border-t border-white/10 py-5 first:border-t-0 first:pt-0 md:py-5.5 md:first:pt-0 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-lg md:text-xl leading-snug font-semibold tracking-tight text-white group-hover:text-[var(--picker-accent-dot)] transition-colors">
          {s.title}
        </h4>
        <div className="size-7 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0 text-slate-400 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/[0.08] transition-all duration-200">
          <Icon
            name="arrow-up-right"
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
      <p className="mt-2 max-w-[560px] text-sm md:text-[14.5px] leading-relaxed text-slate-300">{s.body}</p>
      <ul className="mt-3.5 flex flex-wrap gap-1.5">
        {s.tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[12px] text-slate-200 transition-colors group-hover:border-white/30 group-hover:text-white"
          >
            {t}
          </li>
        ))}
      </ul>
    </Link>
  );
}

function PanelHead({
  letter,
  group,
  count,
  size,
  tagline,
}: {
  letter: string;
  group: string;
  count: string;
  size: "lg" | "md";
  tagline?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[var(--picker-eyebrow)]">
        <span className="size-2 rounded-full bg-[var(--picker-accent-dot)] shadow-[0_0_8px_var(--picker-accent-dot-glow)]" />
        <span>
          PILLAR {letter} · {count} SPECIALIZATIONS
        </span>
      </div>
      <h3
        className={`mt-2 font-serif font-normal tracking-(--tracking-display) text-white ${
          size === "lg"
            ? "text-[52px] leading-[54px] md:text-[88px] md:leading-[84px]"
            : "text-[46px] leading-[48px] md:text-[60px] md:leading-[58px]"
        }`}
      >
        {group}
      </h3>
      {tagline && <p className="mt-1.5 text-xs md:text-sm text-slate-300 font-sans">{tagline}</p>}
    </div>
  );
}

const forGroup = (g: Service["group"]) => services.filter((s) => s.group === g);

/** Single-Studio Services Suite: Design -> Build -> Automate */
export function ServiceList() {
  return (
    <div className="space-y-6">
      {/* Narrative Interactive Studio Comparator */}
      <StudioComparator />

      {/* The 3 Connected Pillar Cards: Design -> Build -> Automate */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
        {/* Pillar A: Design (5-col card) */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-violet-500/30 border-t-2 border-t-violet-400/80 bg-[#121332]/95 p-6 md:col-span-5 md:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all flex flex-col justify-between gap-6">
          {/* Ambient Violet Glow */}
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 size-[400px] rounded-full blur-[100px] opacity-25"
            style={{
              background: "radial-gradient(circle, rgba(217,70,239,0.45) 0%, rgba(139,92,246,0.3) 50%, transparent 75%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-6">
            <PanelHead
              letter="A"
              group="Design"
              count="01"
              size="md"
              tagline="High-Conversion Interfaces & Code Tokens"
            />
            <div>
              {forGroup("Design").map((s) => (
                <PanelRow key={s.slug} s={s} />
              ))}
            </div>
            <DesignArt className="w-full mt-auto" />
          </div>
        </div>

        {/* Pillar B: Build (7-col card) */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-cyan-500/30 border-t-2 border-t-cyan-400/80 bg-[#0c1c36]/95 p-6 md:col-span-7 md:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all flex flex-col justify-between gap-6">
          {/* Ambient Indigo Glow */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 size-[400px] rounded-full blur-[100px] opacity-25"
            style={{
              background: "radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(6,182,212,0.3) 50%, transparent 75%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-6">
            <PanelHead
              letter="B"
              group="Build"
              count="03"
              size="md"
              tagline="Full-Stack Web, Native Mobile & Scalable Business Cloud Architecture"
            />
            <BuildArt className="w-full" />
            <div className="pt-2">
              {forGroup("Build").map((s) => (
                <PanelRow key={s.slug} s={s} />
              ))}
            </div>
          </div>
        </div>

        {/* Pillar C: Automate (Wide 12-col card) */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-emerald-500/30 border-t-2 border-t-emerald-400/80 bg-[#0c2222]/95 p-6 md:col-span-12 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all">
          {/* Ambient Emerald Glow */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 size-[500px] rounded-full blur-[110px] opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(16,185,129,0.5) 0%, rgba(6,182,212,0.3) 50%, transparent 75%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid gap-8 md:grid-cols-[5fr_7fr] md:gap-12">
            <div className="flex flex-col justify-between gap-6">
              <PanelHead
                letter="C"
                group="Automate"
                count="02"
                size="lg"
                tagline="Autonomous AI Agents & Messaging Workflows"
              />
              <AutomateArt className="w-full max-w-[440px]" />
            </div>
            <div>
              {forGroup("Automate").map((s) => (
                <PanelRow key={s.slug} s={s} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Studio Guarantee Bottom Ribbon */}
      <div className="rounded-2xl border border-white/15 bg-[#0e1228]/95 p-5 md:p-6 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-300 font-mono">
          <span className="flex items-center gap-1.5 text-white">
            <span className="size-1.5 rounded-full bg-violet-400" />
            01 Design
          </span>
          <span className="text-slate-600">/</span>
          <span className="flex items-center gap-1.5 text-white">
            <span className="size-1.5 rounded-full bg-cyan-400" />
            02 Build
          </span>
          <span className="text-slate-600">/</span>
          <span className="flex items-center gap-1.5 text-white">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            03 Automate
          </span>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-950 font-sans font-semibold text-xs sm:text-sm hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-[0_0_18px_rgba(255,255,255,0.2)] shrink-0"
        >
          <span>Discuss Your Entire Project</span>
          <Icon name="arrow-up-right" size={14} />
        </Link>
      </div>
    </div>
  );
}

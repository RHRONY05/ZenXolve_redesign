"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { services, type Service } from "@/content/services";

type ServiceMeta = {
  badge: string;
  themeColor: string;
  borderColor: string;
  glowColor: string;
  checkColor: string;
  dotColor: string;
  image: string;
};

const serviceMetaMap: Record<string, ServiceMeta> = {
  "web-development": {
    badge: "BUILD",
    themeColor: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    glowColor: "rgba(6, 182, 212, 0.22)",
    checkColor: "text-cyan-400",
    dotColor: "bg-cyan-400",
    image: "/hero/service-web.jpg",
  },
  "ui-ux-design": {
    badge: "DESIGN",
    themeColor: "text-violet-400",
    borderColor: "hover:border-violet-500/50",
    glowColor: "rgba(168, 85, 247, 0.22)",
    checkColor: "text-violet-400",
    dotColor: "bg-violet-400",
    image: "/hero/service-design.jpg",
  },
  "web-mobile-apps": {
    badge: "BUILD",
    themeColor: "text-sky-400",
    borderColor: "hover:border-sky-500/50",
    glowColor: "rgba(56, 189, 248, 0.22)",
    checkColor: "text-sky-400",
    dotColor: "bg-sky-400",
    image: "/hero/service-mobile.jpg",
  },
  "ai-automation": {
    badge: "AUTOMATE",
    themeColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    glowColor: "rgba(16, 185, 129, 0.22)",
    checkColor: "text-emerald-400",
    dotColor: "bg-emerald-400",
    image: "/hero/service-ai.jpg",
  },
  bots: {
    badge: "AUTOMATE",
    themeColor: "text-teal-400",
    borderColor: "hover:border-teal-500/50",
    glowColor: "rgba(20, 184, 166, 0.22)",
    checkColor: "text-teal-400",
    dotColor: "bg-teal-400",
    image: "/hero/service-bot.jpg",
  },
  "business-systems": {
    badge: "BUILD",
    themeColor: "text-indigo-400",
    borderColor: "hover:border-indigo-500/50",
    glowColor: "rgba(99, 102, 241, 0.22)",
    checkColor: "text-indigo-400",
    dotColor: "bg-indigo-400",
    image: "/hero/service-cloud.jpg",
  },
};

/** Order to match the 6 core services from previous version */
const serviceOrder = [
  "web-development",
  "ui-ux-design",
  "web-mobile-apps",
  "ai-automation",
  "bots",
  "business-systems",
];

function ServiceCard({ s, index }: { s: Service; index: number }) {
  const meta = serviceMetaMap[s.slug] || {
    badge: s.group.toUpperCase(),
    themeColor: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    glowColor: "rgba(6, 182, 212, 0.2)",
    checkColor: "text-cyan-400",
    dotColor: "bg-cyan-400",
    image: "/hero/service-web.jpg",
  };

  const indexStr = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/services#${s.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#080914]/80 p-6 sm:p-7 backdrop-blur-xl shadow-[0_16px_36px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.75)] ${meta.borderColor}`}
    >
      {/* Background Image with Glassmorphism Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src={meta.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center opacity-40 sm:opacity-35 group-hover:opacity-60 group-hover:scale-108 transition-all duration-700 ease-out"
        />
        {/* Glassmorphic dark gradient wash: transparent/airy at top to showcase the 3D art, smooth dark fade down for pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080914] via-[#080914]/80 to-[#080914]/25 backdrop-blur-[2px]" />
      </div>

      {/* Corner Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full blur-[65px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{ background: meta.glowColor }}
        aria-hidden="true"
      />

      {/* Inner Card Rim Light */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-300 z-0" />

      {/* Main Content (Elevated on z-10) */}
      <div className="relative z-10 space-y-4">
        {/* Top Header: Index, Category Badge, and Interactive Arrow Link (No icons!) */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold tracking-widest text-slate-400 group-hover:text-slate-300 transition-colors">
              {indexStr}
            </span>
            <span className="text-slate-600">/</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-bold tracking-wider px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-slate-300 group-hover:text-white group-hover:border-white/20 transition-all">
              <span className={`size-1.5 rounded-full ${meta.dotColor} shadow-[0_0_8px_currentColor]`} />
              {meta.badge}
            </span>
          </div>

          <div className="size-8 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/[0.12] group-hover:scale-105 transition-all duration-200">
            <Icon
              name="arrow-up-right"
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
            {s.title}
          </h3>
          <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-300/90 font-sans">
            {s.body}
          </p>
        </div>

        {/* Concrete Deliverables Checklist */}
        <div className="pt-3.5 border-t border-white/[0.08]">
          <ul className="space-y-2 font-mono text-xs text-slate-300">
            {s.tags.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className={`font-bold ${meta.checkColor}`}>✓</span>
                <span className="text-slate-300 group-hover:text-white transition-colors">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer: Tech Stack & Timeline */}
      <div className="relative z-10 mt-6 pt-3.5 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-slate-400">
        <span className="truncate max-w-[190px] text-slate-400 group-hover:text-slate-300 transition-colors">
          {s.tools}
        </span>
        <span className="text-slate-300 text-[10.5px] font-semibold shrink-0">
          {s.timelinePlaceholder ? "Custom Scope" : s.timeline.split(":")[1]?.trim() || s.timeline}
        </span>
      </div>
    </Link>
  );
}

export function ServicesGrid() {
  const ordered = serviceOrder
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as Service[];

  return (
    <div className="space-y-6">
      {/* 6-Card Responsive Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {ordered.map((s, idx) => (
          <ServiceCard key={s.slug} s={s} index={idx} />
        ))}
      </div>

      {/* Bottom Guarantee Banner */}
      <div className="rounded-2xl border border-white/18 bg-[var(--surface)]/95 p-5 md:p-6 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.55)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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

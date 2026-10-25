"use client";

import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { services, type Service } from "@/content/services";

type ServiceMeta = {
  icon: IconName;
  badge: string;
  themeColor: string;
  borderColor: string;
  glowColor: string;
  iconBg: string;
  checkColor: string;
};

const serviceMetaMap: Record<string, ServiceMeta> = {
  "web-development": {
    icon: "globe",
    badge: "BUILD",
    themeColor: "text-cyan-400",
    borderColor: "hover:border-cyan-500/40",
    glowColor: "rgba(6, 182, 212, 0.15)",
    iconBg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
    checkColor: "text-cyan-400",
  },
  "ui-ux-design": {
    icon: "palette",
    badge: "DESIGN",
    themeColor: "text-violet-400",
    borderColor: "hover:border-violet-500/40",
    glowColor: "rgba(168, 85, 247, 0.15)",
    iconBg: "bg-violet-500/15 border-violet-500/30 text-violet-300",
    checkColor: "text-violet-400",
  },
  "web-mobile-apps": {
    icon: "smartphone",
    badge: "BUILD",
    themeColor: "text-sky-400",
    borderColor: "hover:border-sky-500/40",
    glowColor: "rgba(56, 189, 248, 0.15)",
    iconBg: "bg-sky-500/15 border-sky-500/30 text-sky-300",
    checkColor: "text-sky-400",
  },
  "ai-automation": {
    icon: "bot",
    badge: "AUTOMATE",
    themeColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/40",
    glowColor: "rgba(16, 185, 129, 0.15)",
    iconBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    checkColor: "text-emerald-400",
  },
  bots: {
    icon: "message-square",
    badge: "AUTOMATE",
    themeColor: "text-teal-400",
    borderColor: "hover:border-teal-500/40",
    glowColor: "rgba(20, 184, 166, 0.15)",
    iconBg: "bg-teal-500/15 border-teal-500/30 text-teal-300",
    checkColor: "text-teal-400",
  },
  "business-systems": {
    icon: "layers",
    badge: "BUILD",
    themeColor: "text-indigo-400",
    borderColor: "hover:border-indigo-500/40",
    glowColor: "rgba(99, 102, 241, 0.15)",
    iconBg: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
    checkColor: "text-indigo-400",
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

function ServiceCard({ s }: { s: Service }) {
  const meta = serviceMetaMap[s.slug] || {
    icon: "code",
    badge: s.group.toUpperCase(),
    themeColor: "text-cyan-400",
    borderColor: "hover:border-cyan-500/40",
    glowColor: "rgba(6, 182, 212, 0.15)",
    iconBg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
    checkColor: "text-cyan-400",
  };

  return (
    <Link
      href={`/services#${s.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/12 bg-[var(--surface)]/95 p-6 sm:p-7 backdrop-blur-xl shadow-[0_16px_36px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.7)] ${meta.borderColor}`}
    >
      {/* Corner Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 size-44 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: meta.glowColor }}
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-4">
        {/* Top Header: Icon & Category Badge */}
        <div className="flex items-center justify-between gap-3">
          <div
            className={`flex size-12 items-center justify-center rounded-xl border shadow-inner ${meta.iconBg}`}
          >
            <Icon name={meta.icon} size={22} strokeWidth={1.8} />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.04] text-slate-400 group-hover:text-white transition-colors">
              {meta.badge}
            </span>
            <div className="size-7 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/[0.08] transition-all duration-200">
              <Icon
                name="arrow-up-right"
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
            {s.title}
          </h3>
          <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-300">
            {s.body}
          </p>
        </div>

        {/* Concrete Deliverables Checklist */}
        <div className="pt-3 border-t border-white/[0.08]">
          <ul className="space-y-2 font-mono text-xs text-slate-300">
            {s.tags.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className={`font-bold ${meta.checkColor}`}>✓</span>
                <span className="text-slate-300 group-hover:text-slate-200 transition-colors">
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
        {ordered.map((s) => (
          <ServiceCard key={s.slug} s={s} />
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

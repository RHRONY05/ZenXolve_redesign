"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { services, type Service } from "@/content/services";

type ServiceLightMeta = {
  bgTint: string;
  accentColor: string;
  hoverBorder: string;
  dotColor: string;
};

const serviceThemeMap: Record<string, ServiceLightMeta> = {
  "web-development": {
    bgTint: "bg-sky-500/[0.045] hover:bg-sky-500/[0.09]",
    accentColor: "text-sky-600",
    hoverBorder: "hover:border-sky-400",
    dotColor: "bg-sky-500",
  },
  "ui-ux-design": {
    bgTint: "bg-violet-500/[0.045] hover:bg-violet-500/[0.09]",
    accentColor: "text-violet-600",
    hoverBorder: "hover:border-violet-400",
    dotColor: "bg-violet-500",
  },
  "web-mobile-apps": {
    bgTint: "bg-blue-500/[0.045] hover:bg-blue-500/[0.09]",
    accentColor: "text-blue-600",
    hoverBorder: "hover:border-blue-400",
    dotColor: "bg-blue-500",
  },
  "ai-automation": {
    bgTint: "bg-emerald-500/[0.045] hover:bg-emerald-500/[0.09]",
    accentColor: "text-emerald-600",
    hoverBorder: "hover:border-emerald-400",
    dotColor: "bg-emerald-500",
  },
  bots: {
    bgTint: "bg-teal-500/[0.045] hover:bg-teal-500/[0.09]",
    accentColor: "text-teal-600",
    hoverBorder: "hover:border-teal-400",
    dotColor: "bg-teal-500",
  },
  "business-systems": {
    bgTint: "bg-indigo-500/[0.045] hover:bg-indigo-500/[0.09]",
    accentColor: "text-indigo-600",
    hoverBorder: "hover:border-indigo-400",
    dotColor: "bg-indigo-500",
  },
};

const serviceOrder = [
  "web-development",
  "ui-ux-design",
  "web-mobile-apps",
  "ai-automation",
  "bots",
  "business-systems",
];

export function ServicesGrid() {
  const ordered = serviceOrder
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as Service[];

  return (
    <div className="space-y-6">
      {/* Outer Dark Frame / Border (housing the light canvas inside a dark environment, per design spec) */}
      <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-white/12 bg-[var(--surface-2)] p-2.5 sm:p-4 md:p-6 lg:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.75)]">
        {/* Inner Light Architecture Canvas Window (Border blended seamlessly with dark titlebar) */}
        <div className="relative rounded-xl sm:rounded-2xl lg:rounded-[20px] border border-[var(--line)] ring-1 ring-white/10 bg-[#f8fafc] text-slate-900 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
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

          {/* Canvas Window Header: macOS Traffic Lights & Canvas Identity (Darker theme, slightly lighter than outer border) */}
          <div className="relative z-10 flex items-center justify-between px-5 py-3 sm:px-6 sm:py-3.5 border-b border-white/10 bg-[var(--surface)]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-[#ff5f56]" />
                <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="size-2.5 rounded-full bg-[#27c93f]" />
              </div>

              <div className="h-4 w-px bg-white/15" aria-hidden="true" />

              <span className="font-mono text-xs font-semibold tracking-wider text-slate-300">
                xenzolve-capabilities-canvas.flow
              </span>
            </div>
          </div>

          {/* Ruled 6-Box Grid Canvas (2 vertical divider lines + 1 horizontal divider line on lg) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {ordered.map((s, idx) => {
              const theme = serviceThemeMap[s.slug] || {
                bgTint: "bg-slate-500/[0.04] hover:bg-slate-500/[0.08]",
                accentColor: "text-slate-700",
                hoverBorder: "hover:border-slate-400",
                dotColor: "bg-slate-500",
              };

              // Border dividers to create the 2 vertical lines + 1 horizontal line
              const isDesktopRightBorder = (idx + 1) % 3 !== 0; // cols 1 and 2
              const isDesktopBottomBorder = idx < 3; // row 1
              const isTabletRightBorder = idx % 2 === 0; // col 1
              const isTabletBottomBorder = idx < 4; // rows 1 & 2
              const isMobileBottomBorder = idx < 5;

              return (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className={`group relative flex flex-col justify-between p-6 sm:p-7 lg:p-8 transition-all duration-300 cursor-pointer ${
                    theme.bgTint
                  } ${isDesktopRightBorder ? "lg:border-r" : "lg:border-r-0"} ${
                    isDesktopBottomBorder ? "lg:border-b" : "lg:border-b-0"
                  } ${isTabletRightBorder ? "md:border-r" : "md:border-r-0"} ${
                    isTabletBottomBorder ? "md:border-b" : "md:border-b-0"
                  } ${isMobileBottomBorder ? "border-b" : "border-b-0"} border-slate-300/80`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Service Title Directly on the Left + Interactive Arrow on the Right */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg sm:text-[19px] md:text-xl font-bold tracking-tight text-slate-900 group-hover:text-black transition-colors leading-snug">
                        {s.title}
                      </h3>

                      {/* Interactive Arrow Link */}
                      <div className="size-8 rounded-full border border-slate-300/80 bg-white text-slate-600 group-hover:border-slate-900 group-hover:text-slate-950 group-hover:scale-110 shadow-sm flex items-center justify-center shrink-0 transition-all duration-200">
                        <Icon
                          name="arrow-up-right"
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>

                    {/* Service Description */}
                    <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-600 font-sans">
                      {s.body}
                    </p>

                    {/* Key Deliverables Flow Checklist */}
                    <div className="pt-3.5 border-t border-slate-200/90">
                      <ul className="space-y-2 font-mono text-xs">
                        {s.tags.map((t) => (
                          <li key={t} className="flex items-center gap-2">
                            <span className={`font-bold text-xs ${theme.accentColor}`}>
                              ✓
                            </span>
                            <span className="text-slate-700 group-hover:text-slate-950 font-medium transition-colors">
                              {t}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Box Footer: Tech Stack & Delivery Scope */}
                  <div className="mt-6 pt-3.5 border-t border-slate-200/90 flex items-center justify-between font-mono text-[11px] text-slate-500">
                    <span className="truncate max-w-[190px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                      {s.tools}
                    </span>
                    <span className="text-[10.5px] font-semibold shrink-0 px-2 py-0.5 rounded bg-slate-200/70 text-slate-800 border border-slate-300/60">
                      {s.timelinePlaceholder
                        ? "Custom Scope"
                        : s.timeline.split(":")[1]?.trim() || s.timeline}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Icon, type IconName } from "@/components/ui/Icon";
import { reasons, type ReasonItem } from "@/content/reasons";

type TileMeta = {
  span: string;
  feature?: boolean;
  strip?: boolean;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
};

const tileMetas: TileMeta[] = [
  // 01: Feature Card (spans 5 cols, 2 rows on lgx)
  {
    span: "md:col-span-2 lgx:col-span-5 lgx:row-span-2",
    feature: true,
    accentColor: "text-cyan-400",
    badgeBg: "bg-cyan-500/10",
    badgeBorder: "border-cyan-500/25",
  },
  // 02: Direct Engineer Access
  {
    span: "lgx:col-span-4",
    accentColor: "text-sky-400",
    badgeBg: "bg-sky-500/10",
    badgeBorder: "border-sky-500/25",
  },
  // 03: Autonomous Scale
  {
    span: "lgx:col-span-3",
    accentColor: "text-amber-400",
    badgeBg: "bg-amber-500/10",
    badgeBorder: "border-amber-500/25",
  },
  // 04: Weekly Demos
  {
    span: "lgx:col-span-3",
    accentColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/10",
    badgeBorder: "border-emerald-500/25",
  },
  // 05: Fixed Scopes
  {
    span: "lgx:col-span-4",
    accentColor: "text-violet-400",
    badgeBg: "bg-violet-500/10",
    badgeBorder: "border-violet-500/25",
  },
  // 06: We Don't Vanish After Launch (Full-width strip)
  {
    span: "md:col-span-2 lgx:col-span-12",
    strip: true,
    accentColor: "text-teal-400",
    badgeBg: "bg-teal-500/10",
    badgeBorder: "border-teal-500/25",
  },
];

export function Reasons() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lgx:grid-cols-12 lgx:grid-rows-[minmax(250px,auto)_minmax(250px,auto)_auto]">
      {reasons.map((r: ReasonItem, i: number) => {
        const meta = tileMetas[i] || {
          span: "lgx:col-span-4",
          accentColor: "text-cyan-400",
          badgeBg: "bg-cyan-500/10",
          badgeBorder: "border-cyan-500/25",
        };

        const isFeature = meta.feature;
        const isStrip = meta.strip;

        return (
          <div
            key={r.headline}
            className={`group relative isolate flex overflow-hidden rounded-2xl md:rounded-3xl border transition-all duration-300 ${
              isFeature
                ? "bg-gradient-to-br from-[#0c1438] via-[#080c24] to-[#050716] border-cyan-500/30 hover:border-cyan-500/50 shadow-[0_24px_60px_rgba(6,182,212,0.12)] p-7 sm:p-9 md:p-10 flex-col justify-between"
                : isStrip
                ? "bg-[#080b1e]/95 border-white/12 hover:border-white/25 shadow-[0_16px_44px_rgba(0,0,0,0.55)] p-6 sm:p-8 md:py-8 md:px-10 flex-col md:flex-row md:items-center md:gap-8"
                : "bg-[#080b1e]/95 border-white/10 hover:border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.5)] p-6 sm:p-7 flex-col justify-between min-h-[220px]"
            } ${meta.span}`}
          >
            {/* Background Subtle Watermark Ghost Icon */}
            <Icon
              name={r.icon}
              size={isFeature ? 280 : isStrip ? 180 : 160}
              strokeWidth={0.7}
              className={`pointer-events-none absolute -right-8 -bottom-8 -z-10 text-white opacity-[0.035] group-hover:opacity-[0.06] transition-opacity select-none ${
                isStrip ? "-bottom-14 right-4" : ""
              }`}
            />

            {/* Top Icon Badge */}
            <div className={`flex items-center ${isStrip ? "shrink-0 mb-3 md:mb-0" : "mb-6"}`}>
              <span
                className={`grid size-11 place-items-center rounded-xl border transition-all duration-200 group-hover:scale-105 ${meta.badgeBg} ${meta.badgeBorder} ${meta.accentColor}`}
              >
                <Icon name={r.icon} size={20} strokeWidth={1.8} />
              </span>
            </div>

            {/* Continuous Narrative Flow: [Heading] — [Subtext] */}
            <div className={isStrip ? "flex-1" : ""}>
              <p
                className={`font-sans leading-relaxed text-slate-300/90 ${
                  isFeature
                    ? "text-base sm:text-lg md:text-[18px] md:leading-[29px]"
                    : isStrip
                    ? "text-sm sm:text-base md:text-[16.5px] leading-relaxed"
                    : "text-xs sm:text-[13.5px] md:text-sm leading-relaxed"
                }`}
              >
                <strong
                  className={`font-bold tracking-tight text-white ${
                    isFeature
                      ? "text-xl sm:text-2xl md:text-[26px] font-serif font-normal"
                      : isStrip
                      ? "text-base sm:text-lg font-semibold"
                      : "text-sm sm:text-base font-semibold"
                  }`}
                >
                  {r.headline}
                </strong>
                <span className="mx-2 text-slate-500 font-serif select-none">—</span>
                <span className="font-normal text-slate-300/85">{r.subtext}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

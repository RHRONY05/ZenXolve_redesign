"use client";

import Image from "next/image";
import { stepsData } from "@/content/steps";

export function ProcessSteps() {
  return (
    <div className="relative pb-20 md:pb-28">
      {stepsData.map((s, i) => {
        // Offset so previous card's top tab remains peeking out as a stacked deck
        const topOffsetDesktop = 88 + i * 44;
        const topOffsetMobile = 70 + i * 36;

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
            {/* Top Category Tab: Visible when cards stack over one another */}
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

            {/* Main Split Grid: Left info & metrics, Right real-icon container */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-8 items-center">
              {/* Left Column: Heading, Description, Deliverables */}
              <div className="space-y-4">
                <div>
                  <h3
                    className={`font-serif text-xl sm:text-2xl md:text-[26px] font-bold leading-snug tracking-tight ${s.theme.text}`}
                  >
                    {s.headline}
                  </h3>
                  <p
                    className={`mt-2 text-xs sm:text-[13.5px] md:text-sm leading-relaxed font-sans ${s.theme.subtext}`}
                  >
                    {s.body}
                  </p>
                </div>

                {/* Scope & Deliverables: Compact 4-pill grid */}
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

              {/* Right Column: Dedicated Clean Tool Container (Real Icons + Name Only) */}
              <div className="rounded-2xl bg-white/95 p-4 sm:p-5 border border-black/10 shadow-sm">
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-slate-500">
                    Phase Tools & Technologies
                  </span>
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    {s.tools.length} Stack Tools
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {s.tools.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-colors shadow-2xs"
                    >
                      <div className="size-6 shrink-0 relative flex items-center justify-center">
                        <Image
                          src={`/tools/${t.iconFile}`}
                          alt={t.name}
                          width={24}
                          height={24}
                          className="size-5 object-contain"
                        />
                      </div>
                      <span className="font-sans text-xs font-bold text-slate-800 truncate">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

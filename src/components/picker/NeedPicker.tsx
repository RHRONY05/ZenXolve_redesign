"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { picks } from "@/content/picker";
import { Icon } from "@/components/ui/Icon";
import { PickerScene } from "./PickerScenes";

/** "I need…" picker: radio-group driving a luxury cross-fading live preview stage. */
export function NeedPicker() {
  const [index, setIndex] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = picks[index];

  const move = (to: number) => {
    const next = (to + picks.length) % picks.length;
    setIndex(next);
    refs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const map: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowDown: index + 1,
      ArrowLeft: index - 1,
      ArrowUp: index - 1,
      Home: 0,
      End: picks.length - 1,
    };
    if (e.key in map) {
      e.preventDefault();
      move(map[e.key]);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-[540px_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-0">
      {/* Left Column: Selector Cards */}
      <div className="lg:col-start-1 lg:row-start-1">
        <p
          id="need-label"
          className="mb-4 text-xs font-mono uppercase tracking-widest text-[#a78bfa] flex items-center gap-2"
        >
          <span className="size-1.5 rounded-full bg-[#67e8f9] shadow-[0_0_8px_#67e8f9]" />
          <span>Select a build to preview</span>
        </p>

        <div
          role="radiogroup"
          aria-labelledby="need-label"
          onKeyDown={onKeyDown}
          className="flex flex-wrap gap-2.5 md:flex-col md:flex-nowrap md:gap-3"
        >
          {picks.map((p, i) => {
            const on = i === index;
            return (
              <button
                key={p.key}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                type="button"
                role="radio"
                aria-checked={on}
                tabIndex={on ? 0 : -1}
                onClick={() => setIndex(i)}
                className={`group flex w-full cursor-pointer items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 md:rounded-2xl md:px-5 md:py-4.5 ${
                  on
                    ? "border-[#8b5cf6]/60 bg-white/[0.08] shadow-[0_0_24px_rgba(139,92,246,0.18),inset_0_1px_1px_rgba(255,255,255,0.12)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                {/* Numeric Monospace Pill */}
                <span
                  className={`hidden size-8 rounded-lg place-items-center font-mono text-xs font-bold transition-all md:grid ${
                    on
                      ? "border border-[#8b5cf6]/50 bg-[#8b5cf6]/20 text-[#67e8f9] shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                      : "border border-white/10 bg-white/[0.03] text-slate-400 group-hover:text-slate-200"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title & Description */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[15px] md:text-base font-semibold tracking-tight transition-colors ${
                        on ? "text-white" : "text-slate-200 group-hover:text-white"
                      }`}
                    >
                      {p.title}
                    </span>
                    {on && (
                      <span className="size-1.5 rounded-full bg-[#67e8f9] shadow-[0_0_8px_#67e8f9] animate-pulse" />
                    )}
                  </div>
                  <p
                    className={`mt-1 hidden text-xs md:text-[13px] leading-relaxed transition-colors md:block ${
                      on ? "text-slate-300" : "text-slate-400 group-hover:text-slate-300"
                    }`}
                  >
                    {p.desc}
                  </p>
                </div>

                {/* Subtle Arrow Indicator */}
                <div
                  className={`ml-auto hidden md:flex size-8 rounded-full items-center justify-center transition-all duration-200 ${
                    on
                      ? "bg-white/10 text-[#67e8f9] shadow-[0_0_12px_rgba(103,232,249,0.3)] translate-x-0.5"
                      : "text-slate-500 opacity-40 group-hover:opacity-100 group-hover:text-slate-300 group-hover:translate-x-0.5"
                  }`}
                >
                  <Icon name="arrow-up-right" size={16} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Interactive Live Preview Stage */}
      <div
        aria-live="polite"
        className="relative h-[480px] overflow-hidden rounded-2xl md:rounded-3xl border border-white/15 bg-gradient-to-b from-[#0c0e24] via-[#090b1c] to-[#060713] shadow-[0_25px_60px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.1)] md:h-[640px] lg:col-start-2 lg:row-span-2 lg:row-start-1"
      >
        {/* Subtle architectural grid pattern inside stage */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(165,145,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(165,145,255,0.12) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 25%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 25%, transparent 85%)",
          }}
          aria-hidden="true"
        />

        {/* Ambient spotlight behind active mockup */}
        <div
          className="pointer-events-none absolute -top-16 -right-16 size-[440px] rounded-full blur-[100px] transition-all duration-700 opacity-35"
          style={{
            background:
              index === 0
                ? "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(139,92,246,0.25) 55%, transparent 80%)"
                : index === 1
                ? "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(236,72,153,0.25) 55%, transparent 80%)"
                : "radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(16,185,129,0.25) 55%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        {/* Watermark logo */}
        <svg
          viewBox="0 0 100 60"
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-[60px] w-[520px] text-white opacity-[0.03]"
        >
          <path d="M2 2H98L30 34H70L2 58L40 30H6Z" fill="currentColor" />
        </svg>

        {picks.map((p, i) => (
          <PickerScene key={p.key} name={p.key} active={i === index} label={p.liveLabel} />
        ))}
      </div>

      {/* Left Column Bottom: Technical Specs & CTA */}
      <div className="lg:col-start-1 lg:row-start-2">
        {/* Technical Specs Dual-Cell Card */}
        <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md lg:mt-6">
          <div className="bg-[#0a0c1e]/85 px-4 py-3.5 sm:px-5 sm:py-4">
            <span className="font-mono text-[11px] tracking-widest text-[#a78bfa] uppercase flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[#a78bfa]" />
              Typical timeline
            </span>
            <b className="mt-1 block font-sans text-sm sm:text-base font-semibold tracking-normal text-white">
              {current.time}
            </b>
          </div>
          <div className="bg-[#0a0c1e]/85 px-4 py-3.5 sm:px-5 sm:py-4 border-l border-white/10">
            <span className="font-mono text-[11px] tracking-widest text-[#a78bfa] uppercase flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[#67e8f9]" />
              We&apos;d use
            </span>
            <b className="mt-1 block font-sans text-sm sm:text-base font-semibold tracking-normal text-white truncate">
              {current.stack}
            </b>
          </div>
        </div>

        {/* CTA Button & Secondary Link */}
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-7">
          <Link
            href={`/contact?service=${current.service}`}
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-950 font-sans font-semibold text-sm sm:text-[15px] tracking-wide hover:bg-white/95 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_24px_rgba(255,255,255,0.25)] cursor-pointer w-full md:w-auto"
          >
            <span>Start a project like this</span>
            <svg
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="group text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 ml-1"
          >
            <span>Something else? Tell us</span>
            <svg
              className="size-3.5 text-slate-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

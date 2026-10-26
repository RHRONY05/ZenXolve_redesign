"use client";

import { useState } from "react";
import { faq } from "@/content/faq";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

type FaqProps = {
  index?: string | null;
  hideLead?: boolean;
  hideHeader?: boolean;
};

/** Interactive Full-Width FAQ Accordion with smooth grid-template-rows animation */
export function Faq({ index = "07", hideLead = false, hideHeader = true }: FaqProps) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({ 0: true });

  const toggle = (i: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [i]: !prev[i],
    }));
  };

  return (
    <div className="w-full">
      {!hideHeader && (
        <div className="reveal mb-10 md:mb-14">
          <div className="mono mb-3.5 flex items-center gap-[14px] text-accent font-semibold md:mb-5">
            {index && <span className="font-bold">{index}</span>}
            <span>FAQ</span>
          </div>
          <h2 className="font-serif text-[42px] leading-[1.15] font-normal tracking-display md:text-display-lg md:leading-tight text-white">
            Got <em className="acc">questions?</em>
          </h2>
          {!hideLead && (
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
              Still unsure about something? Ask us on WhatsApp or email {site.email}.
            </p>
          )}
        </div>
      )}

      {/* Full-width accordion list */}
      <div className="w-full border-t border-white/12">
        {faq.map((item, i) => {
          const isOpen = !!openItems[i];
          const numStr = String(i + 1).padStart(2, "0");

          return (
            <div
              key={item.q}
              className="border-b border-white/10 transition-colors duration-200 hover:border-white/20"
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="group flex w-full cursor-pointer items-center justify-between gap-4 py-5 sm:py-6 md:py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                {/* Index & Question */}
                <div className="flex items-start sm:items-center gap-3 sm:gap-5 flex-1 min-w-0 pr-3">
                  <span className="font-mono text-xs sm:text-sm md:text-base font-bold text-[#c4b5fd] group-hover:text-white transition-colors duration-200 shrink-0 pt-1 sm:pt-0">
                    {numStr}
                  </span>
                  <span className="font-sans font-semibold text-base sm:text-lg md:text-xl lg:text-[21px] tracking-tight text-slate-100 group-hover:text-white transition-colors duration-200 leading-snug">
                    {item.q}
                  </span>
                </div>

                {/* Rotating Plus Badge */}
                <div
                  className={`size-8 sm:size-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "border-violet-400/50 bg-violet-500/15 text-violet-300"
                      : "border-white/15 bg-white/[0.04] text-slate-400 group-hover:border-white/30 group-hover:bg-white/[0.08] group-hover:text-white"
                  }`}
                  aria-hidden="true"
                >
                  <Icon
                    name="plus"
                    size={16}
                    className={`transition-transform duration-300 ease-(--ease) ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Collapsible Answer */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-(--ease) motion-reduce:duration-0 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-6 sm:pb-7 pl-7 sm:pl-10 md:pl-12 max-w-4xl">
                    <p className="text-sm sm:text-base md:text-[16.5px] leading-relaxed text-slate-300 font-sans">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subtle Bottom Support Prompt */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/8 text-xs sm:text-sm text-slate-400">
        <span>
          Have a question not listed here? We respond within 2 hours.
        </span>
        <a
          href="/contact"
          className="font-mono text-xs font-semibold text-[#c4b5fd] hover:text-white transition-colors inline-flex items-center gap-1.5"
        >
          <span>Ask our engineering leads directly</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { faq } from "@/content/faq";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

type FaqProps = {
  index?: string | null;
  hideLead?: boolean;
};

/** Interactive FAQ with 240ms height animation and rotating plus icon. First item open by default. */
export function Faq({ index = "08", hideLead = false }: FaqProps) {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({ 0: true });

  const toggle = (i: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [i]: !prev[i],
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-9 lg:grid-cols-[420px_1fr] lg:gap-20">
      <div className="reveal">
        <div className="mono mb-3.5 flex gap-[14px] text-ink-3 md:mb-5">
          {index && <span>{index}</span>}
          <span>FAQ</span>
        </div>
        <h2 className="font-serif text-[46px] leading-[46px] font-normal tracking-display md:text-display-lg md:leading-(--text-display-lg--line-height)">
          Got <em className="acc">questions?</em>
        </h2>
        {!hideLead && (
          <p className="mt-5 hidden text-lg leading-[29px] text-ink-2 md:block">
            Still unsure about something? Ask us on WhatsApp or email {site.email}.
          </p>
        )}
      </div>
      <div className="faq border-t border-line">
        {faq.map((item, i) => {
          const isOpen = !!openItems[i];
          return (
            <div key={item.q} className="border-b border-line">
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center gap-3 py-5 text-left text-[17px] leading-6 font-medium md:gap-5 md:py-6 md:text-xl md:leading-7 text-ink focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
              >
                <span className="mono hidden w-7 text-ink-3 md:block">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1">{item.q}</span>
                <Icon
                  name="plus"
                  size={22}
                  className={`ml-auto shrink-0 text-ink-3 transition-transform duration-[240ms] ease-(--ease) motion-reduce:duration-0 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-[240ms] ease-(--ease) motion-reduce:duration-0 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="-mt-1 mb-[22px] max-w-[680px] text-ink-2 md:-mt-1.5 md:mb-[26px] md:ml-12">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

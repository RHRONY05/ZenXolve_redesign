"use client";

import { useRef, useState } from "react";
import { picks } from "@/content/picker";
import { Button, LinkArrow } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PickerScene } from "./PickerScenes";

/** "I need…" picker: radio-group (arrow keys, Home/End) driving a cross-fading live preview. */
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
    <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-[560px_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-0">
      <div className="lg:col-start-1 lg:row-start-1">
        <p id="need-label" className="mb-[22px] font-serif text-[34px] leading-[38px] tracking-[-0.01em] md:text-[44px] md:leading-12">
          I need…
        </p>
        <div
          role="radiogroup"
          aria-labelledby="need-label"
          onKeyDown={onKeyDown}
          className="flex flex-wrap gap-2 md:flex-col md:flex-nowrap md:gap-[10px]"
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
                className={`flex w-auto cursor-pointer items-center gap-[14px] rounded-full border px-[14px] py-[10px] text-left transition-colors duration-(--dur) ease-(--ease) md:w-full md:rounded-lg md:px-5 md:py-[18px] ${
                  on ? "border-ink bg-ink text-bg" : "border-line bg-surface hover:border-line-strong"
                }`}
              >
                <span className={`hidden w-[22px] font-mono text-[11px] font-bold md:block ${on ? "text-accent" : "text-accent"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <b className="text-[15px] font-medium md:text-lg">{p.title}</b>
                  <span className={`mt-0.5 hidden text-sm md:block ${on ? "text-bg opacity-70" : "text-ink-2"}`}>{p.desc}</span>
                </span>
                <Icon
                  name="arrow-up-right"
                  size={20}
                  className={`ml-auto hidden md:block ${on ? "text-bg opacity-70" : "text-ink-3"}`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div
        aria-live="polite"
        className="relative h-[460px] overflow-hidden rounded-lg border border-line bg-surface-2 md:h-[640px] md:rounded-xl lg:col-start-2 lg:row-span-2 lg:row-start-1"
      >
        <svg
          viewBox="0 0 100 60"
          aria-hidden="true"
          className="absolute -top-10 -right-[60px] w-[520px] text-ink opacity-[0.06]"
        >
          <path d="M2 2H98L30 34H70L2 58L40 30H6Z" fill="currentColor" />
        </svg>
        {picks.map((p, i) => (
          <PickerScene key={p.key} name={p.key} active={i === index} label={p.liveLabel} />
        ))}
      </div>

      <div className="lg:col-start-1 lg:row-start-2">
        <div className="mt-0 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line lg:mt-[22px]">
          <div className="mono bg-bg px-4 py-[14px] text-ink-3">
            Typical timeline
            <b className="mt-1.5 block font-sans text-[15px] font-medium tracking-normal text-ink normal-case">{current.time}</b>
          </div>
          <div className="mono bg-bg px-4 py-[14px] text-ink-3">
            We&apos;d use
            <b className="mt-1.5 block font-sans text-[15px] font-medium tracking-normal text-ink normal-case">{current.stack}</b>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4 md:mt-[26px]">
          <Button href={`/contact?service=${current.service}`} icon="arrow-right" className="w-full md:w-auto">
            Start a project like this
          </Button>
          <span className="hidden md:block">
            <LinkArrow href="/contact" arrow={false}>
              Something else? Tell us
            </LinkArrow>
          </span>
        </div>
      </div>
    </div>
  );
}

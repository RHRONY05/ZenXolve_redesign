import { PlaceholderTag } from "@/components/ui/Placeholder";
import type { WorkItem } from "@/content/work";

export function CaseStudyCover({ item }: { item: WorkItem }) {
  return (
    <div
      className="cs-cover h-[300px] md:h-[720px] rounded-lg md:rounded-xl mx-2 md:mx-(--frame-inset) relative overflow-hidden"
      style={{ background: `var(--${item.tile})` }}
    >
      <PlaceholderTag className="absolute left-4 top-4 md:left-6 md:top-6 z-10">
        Placeholder · cover image
      </PlaceholderTag>

      {/* Desktop product shot in window */}
      <div className="win hidden md:block absolute left-1/2 -translate-x-1/2 top-[110px] w-[900px] h-[640px] bg-surface rounded-[14px] shadow-(--shadow-lg) overflow-hidden">
        <div className="bar h-[34px] flex items-center gap-1.5 px-3.5 border-b border-line">
          <i className="w-[9px] h-[9px] rounded-full bg-line-strong inline-block" />
          <i className="w-[9px] h-[9px] rounded-full bg-line-strong inline-block" />
          <i className="w-[9px] h-[9px] rounded-full bg-line-strong inline-block" />
          <span className="url ml-3 font-mono text-[11px] text-ink-3 bg-surface-2 px-2.5 py-[3px] rounded-[6px]">
            shop.clientbrand.com
          </span>
        </div>
        <div className="pt-7 px-6 pb-0 flex justify-between items-end">
          <div>
            <span className="chip-soft inline-block text-xs px-2.5 py-1 rounded-full bg-accent-soft text-accent-text">
              New season
            </span>
            <div className="serif font-serif text-[56px] leading-[60px] mt-2.5 text-ink">Everyday carry</div>
          </div>
          <span className="mono font-mono text-xs text-ink-3">Cart · 2</span>
        </div>
        <div className="prod grid grid-cols-3 gap-3 p-6">
          <div>
            <div className="img h-[220px] rounded-[10px]" style={{ background: "var(--tile-2)" }} />
            <b className="block font-medium text-[13px] mt-2 text-ink">Canvas tote</b>
            <span className="text-xs text-ink-3">৳ 460</span>
          </div>
          <div>
            <div className="img h-[220px] rounded-[10px]" style={{ background: "var(--tile-1)" }} />
            <b className="block font-medium text-[13px] mt-2 text-ink">Blue tote</b>
            <span className="text-xs text-ink-3">৳ 460</span>
          </div>
          <div>
            <div className="img h-[220px] rounded-[10px]" style={{ background: "var(--tile-3)" }} />
            <b className="block font-medium text-[13px] mt-2 text-ink">Field pouch</b>
            <span className="text-xs text-ink-3">৳ 320</span>
          </div>
        </div>
      </div>

      {/* Mobile phone mockup */}
      <div className="phone md:hidden absolute left-1/2 -translate-x-1/2 top-[60px] w-[170px] h-[330px] rounded-[28px] bg-mock-phone p-[7px] shadow-[0_40px_70px_-24px_rgba(0,0,0,0.45)]">
        <div className="screen w-full h-full rounded-[22px] bg-mock-screen overflow-hidden flex flex-col text-mock-screen-ink">
          <div className="pt-[26px] px-3 pb-0">
            <span className="chip-soft inline-block text-[10px] px-2 py-0.5 rounded-full bg-accent-soft text-accent-text">
              New season
            </span>
            <div className="serif font-serif text-[26px] leading-7 mt-1.5 text-mock-screen-ink">Everyday carry</div>
          </div>
          <div className="mx-3 my-2.5 h-[110px] rounded-[10px]" style={{ background: `var(--${item.tile})` }} />
        </div>
      </div>
    </div>
  );
}

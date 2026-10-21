import { Icon } from "@/components/ui/Icon";
import { reasons } from "@/content/reasons";

/**
 * Bento grid: six tiles of different sizes and colours. Desktop ≥ 1100: 12 columns, Result-Driven spans two rows;
 * 768–1099: 2 columns; mobile: one column. The last tile (Transparent Pricing) is a full-width strip.
 */
const tiles = [
  { bg: "bg-panel-cobalt text-on-panel", sub: "text-on-panel-2", span: "md:col-span-2 lgx:col-span-5 lgx:row-span-2", feature: true },
  { bg: "bg-panel-ink ring-1 ring-panel-line text-on-panel", sub: "text-on-panel-2", span: "lgx:col-span-4" },
  { bg: "bg-panel-sand text-ink", sub: "text-ink-2", span: "lgx:col-span-3" },
  { bg: "bg-panel-plum text-on-panel", sub: "text-on-panel-2", span: "lgx:col-span-3" },
  { bg: "bg-panel-forest text-on-panel", sub: "text-on-panel-2", span: "lgx:col-span-4" },
  { bg: "bg-surface text-ink border border-line", sub: "text-ink-2", span: "md:col-span-2 lgx:col-span-12", strip: true },
] as const;

export function Reasons() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lgx:grid-cols-12 lgx:grid-rows-[minmax(280px,auto)_minmax(280px,auto)_auto]">
      {reasons.map((r, i) => {
        const t = tiles[i];
        const strip = "strip" in t;
        const feature = "feature" in t;
        return (
          <div
            key={r.title}
            className={`tile relative isolate flex overflow-hidden rounded-xl p-6 md:p-8 ${t.bg} ${t.span} ${
              strip ? "flex-col gap-4 md:flex-row md:items-center md:gap-10 md:py-10" : "min-h-[240px] flex-col justify-between gap-10"
            } ${feature ? "md:min-h-[360px] md:p-12" : ""}`}
          >
            <Icon
              name={r.icon}
              size={feature ? 300 : 150}
              strokeWidth={0.8}
              className={`tile-ghost pointer-events-none absolute -right-10 -bottom-10 -z-10 opacity-[0.09] ${strip ? "-bottom-12" : ""}`}
            />
            <span
              className={`tile-icon grid shrink-0 place-items-center rounded-full ${
                strip ? "size-12 bg-accent-soft text-accent-text" : "size-12 bg-panel-lift"
              } ${t.bg.includes("panel-sand") ? "bg-ink/10!" : ""}`}
            >
              <Icon name={r.icon} size={22} strokeWidth={1.6} />
            </span>
            <div className={strip ? "md:flex md:flex-1 md:items-center md:justify-between md:gap-10" : ""}>
              <h3
                className={`mb-2 font-medium tracking-[-0.01em] ${
                  feature ? "font-serif text-[40px] leading-[42px] font-normal md:text-[64px] md:leading-[64px]" : strip ? "text-2xl leading-8 md:mb-0 md:shrink-0" : "text-[22px] leading-[30px]"
                }`}
              >
                {r.title}
              </h3>
              <p className={`max-w-[440px] text-[15px] leading-6 ${feature ? "md:text-[17px] md:leading-7" : ""} ${t.sub}`}>{r.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { Icon, type IconName } from "@/components/ui/Icon";
import { steps } from "@/content/steps";

/** Four colour cards that stack like a deck while you scroll (sticky). Light → dark, ending on ink. */
const looks: { card: string; sub: string; chip: string; icon: IconName }[] = [
  { card: "bg-panel-sand text-ink", sub: "text-ink-2", chip: "bg-ink/10 text-ink", icon: "search" },
  { card: "bg-panel-cobalt text-on-panel", sub: "text-on-panel-2", chip: "bg-panel-lift text-on-panel", icon: "pen-tool" },
  { card: "bg-panel-forest text-on-panel", sub: "text-on-panel-2", chip: "bg-panel-lift text-on-panel", icon: "code" },
  { card: "bg-panel-ink ring-1 ring-panel-line text-on-panel", sub: "text-on-panel-2", chip: "bg-panel-lift text-on-panel", icon: "rocket" },
];

export function ProcessSteps() {
  return (
    <ol className="relative">
      {steps.map((s, i) => {
        const l = looks[i];
        return (
          <li
            key={s.title}
            className="sticky top-[calc(var(--header-h-m)+var(--i)*12px+8px)] mb-4 md:top-[calc(var(--header-h)+var(--i)*14px+16px)] md:mb-6"
            style={{ "--i": i } as React.CSSProperties}
          >
            <div
              className={`grid gap-6 rounded-xl p-6 shadow-[0_-12px_30px_-18px_rgba(0,0,0,0.35)] md:min-h-[340px] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:p-12 ${l.card}`}
            >
              <div className="flex items-start justify-between gap-6 md:flex-col md:justify-between">
                <span className="font-serif text-[88px] leading-[80px] tracking-(--tracking-display) opacity-90 md:text-[168px] md:leading-[150px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`grid size-12 place-items-center rounded-full ${l.chip}`}>
                  <Icon name={l.icon} size={22} strokeWidth={1.6} />
                </span>
              </div>
              <div className="flex flex-col justify-end">
                <span className={`mono mb-3 block ${l.sub}`}>Step {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mb-4 font-serif text-[34px] leading-[38px] font-normal md:text-[52px] md:leading-[54px]">{s.title}</h3>
                <p className={`max-w-[520px] text-[16px] leading-[26px] md:text-[18px] md:leading-[29px] ${l.sub}`}>{s.body}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

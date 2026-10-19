import { Icon } from "@/components/ui/Icon";
import { reasons } from "@/content/reasons";

/** 3×2 hairline grid (2 columns below 1100 px, one column on mobile). */
export function Reasons() {
  return (
    <div className="grid grid-cols-1 border-t border-line md:grid-cols-2 md:border-l lgx:grid-cols-3">
      {reasons.map((r) => (
        <div
          key={r.title}
          className="grid grid-cols-[36px_1fr] gap-x-2 border-b border-line py-6 md:block md:border-r md:px-[30px] md:pt-[30px] md:pb-9"
        >
          <Icon name={r.icon} size={24} strokeWidth={1.6} className="text-accent" />
          <h3 className="mb-1.5 text-xl leading-7 font-medium md:mt-[22px] md:mb-2">{r.title}</h3>
          <p className="col-start-2 text-[15px] leading-6 text-ink-2">{r.body}</p>
        </div>
      ))}
    </div>
  );
}

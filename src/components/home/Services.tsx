import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { serviceGroups, services, type Service } from "@/content/services";

export function ServiceRow({ s }: { s: Service }) {
  return (
    <Link
      href={`/services#${s.slug}`}
      className="group grid grid-cols-[1fr_22px] items-start gap-3 border-b border-line py-[22px] last:border-b-0 md:grid-cols-[1fr_1.1fr_24px] md:gap-10"
    >
      <h4 className="col-start-1 row-start-1 text-xl leading-[30px] font-medium tracking-[-0.01em]">{s.title}</h4>
      <div className="col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1">
        <p className="text-[15px] leading-6 text-ink-2">{s.body}</p>
        <ul className="mt-3 hidden flex-wrap gap-1.5 md:flex">
          {s.tags.map((t) => (
            <li key={t} className="rounded-full bg-surface-2 px-[10px] py-1 text-[13px] text-ink-2">
              {t}
            </li>
          ))}
        </ul>
      </div>
      <Icon
        name="arrow-up-right"
        size={22}
        className="col-start-2 row-start-1 mt-1 text-ink-3 transition-colors group-hover:text-accent-text md:col-start-3"
      />
    </Link>
  );
}

export function ServiceGroup({ group, letter, last }: { group: string; letter: string; last?: boolean }) {
  return (
    <div
      className={`grid grid-cols-1 gap-1.5 border-t border-line pt-7 pb-2 md:grid-cols-[280px_1fr] md:gap-12 md:py-9 ${last ? "border-b" : ""}`}
    >
      <div>
        <span className="mono hidden text-ink-3 md:block md:leading-[26px]">{letter}</span>
        <h3 className="font-serif text-[38px] leading-10 font-normal md:mt-2.5 md:text-[48px] md:leading-[50px]">{group}</h3>
      </div>
      <div>
        {services
          .filter((s) => s.group === group)
          .map((s) => (
            <ServiceRow key={s.slug} s={s} />
          ))}
      </div>
    </div>
  );
}

export function ServiceList() {
  return (
    <div>
      {serviceGroups.map((g, i) => (
        <ServiceGroup key={g.key} group={g.key} letter={g.letter} last={i === serviceGroups.length - 1} />
      ))}
    </div>
  );
}

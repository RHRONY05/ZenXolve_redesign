import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { services, type Service } from "@/content/services";
import { AutomateArt, BuildArt, DesignArt } from "./ServiceArt";
import { Spotlight } from "./Spotlight";

function PanelRow({ s }: { s: Service }) {
  return (
    <Link
      href={`/services#${s.slug}`}
      className="group block border-t border-panel-line py-6 first:border-t-0 first:pt-0 md:py-5 md:first:pt-0"
    >
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-xl leading-[30px] font-medium tracking-[-0.01em]">{s.title}</h4>
        <Icon
          name="arrow-up-right"
          size={22}
          className="mt-1 shrink-0 opacity-70 transition-transform duration-(--dur) ease-(--ease) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        />
      </div>
      <p className="mt-2 max-w-[560px] text-[15px] leading-6 text-on-panel-2">{s.body}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {s.tags.map((t) => (
          <li key={t} className="rounded-full bg-panel-lift px-[10px] py-1 text-[13px] text-on-panel-2">
            {t}
          </li>
        ))}
      </ul>
    </Link>
  );
}

function PanelHead({ letter, group, count, size }: { letter: string; group: string; count: string; size: "lg" | "md" }) {
  return (
    <div>
      <span className="mono text-on-panel-2">
        {letter} · {count} services
      </span>
      <h3
        className={`mt-3 font-serif font-normal tracking-(--tracking-display) ${
          size === "lg"
            ? "text-[72px] leading-[68px] md:text-[120px] md:leading-[108px]"
            : "text-[72px] leading-[68px] md:text-[64px] md:leading-[60px]"
        }`}
      >
        {group}
      </h3>
    </div>
  );
}

const forGroup = (g: Service["group"]) => services.filter((s) => s.group === g);

/** Three colour panels: Build (cobalt, wide), Automate (ink), Design (forest), each with an animated SVG scene. */
export function ServiceList() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
      {/* Build */}
      <Spotlight className="rounded-xl bg-panel-cobalt p-6 text-on-panel md:col-span-12 md:p-12">
        <div className="grid gap-10 md:grid-cols-[5fr_7fr] md:gap-14">
          <div className="flex flex-col justify-between gap-8">
            <PanelHead letter="A" group="Build" count="03" size="lg" />
            <BuildArt className="w-full max-w-[440px] text-on-panel md:-mb-2" />
          </div>
          <div>
            {forGroup("Build").map((s) => (
              <PanelRow key={s.slug} s={s} />
            ))}
          </div>
        </div>
      </Spotlight>

      {/* Automate: heading and art share one row on desktop so the whole panel fits a 900 px viewport */}
      <Spotlight className="flex flex-col gap-6 rounded-xl bg-panel-ink p-6 text-on-panel ring-1 ring-panel-line md:col-span-7 md:gap-5 md:p-9">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-4">
          <PanelHead letter="B" group="Automate" count="02" size="md" />
          <AutomateArt className="w-full max-w-[460px] text-on-panel md:max-w-[300px]" />
        </div>
        <div>
          {forGroup("Automate").map((s) => (
            <PanelRow key={s.slug} s={s} />
          ))}
        </div>
      </Spotlight>

      {/* Design: one service, so the curve gets the space below it */}
      <Spotlight className="flex flex-col gap-6 rounded-xl bg-panel-forest p-6 text-on-panel md:col-span-5 md:gap-5 md:p-9">
        <PanelHead letter="C" group="Design" count="01" size="md" />
        <div>
          {forGroup("Design").map((s) => (
            <PanelRow key={s.slug} s={s} />
          ))}
        </div>
        <DesignArt className="mt-auto w-full max-w-[440px] self-center text-on-panel md:max-w-[330px]" />
      </Spotlight>
    </div>
  );
}

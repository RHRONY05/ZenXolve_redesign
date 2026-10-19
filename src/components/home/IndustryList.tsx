import { industries } from "@/content/industries";

export function IndustryList({ index = "07" }: { index?: string }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[280px_1fr] md:gap-12">
      <div className="mono text-ink-3 md:pt-4">{index} &nbsp; Industries we serve</div>
      <ul className="flex flex-wrap gap-[10px]">
        {industries.map((name) => (
          <li
            key={name}
            className="font-serif text-[28px] leading-[38px] text-ink after:ml-[14px] after:text-ink-3 after:content-['·'] last:after:content-[''] md:text-[40px] md:leading-[52px]"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

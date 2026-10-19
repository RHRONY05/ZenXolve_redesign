import { Placeholder } from "@/components/ui/Placeholder";

export type StatItem = {
  value: string;
  label: string;
};

export function StatRow({
  stats,
  placeholder = false,
  className = "",
}: {
  stats: StatItem[];
  placeholder?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`stats grid grid-cols-2 md:grid-cols-4 border-t border-line gap-y-5 md:gap-y-0 ${className}`}
    >
      {stats.map((s, i) => (
        <div key={i} className="pt-6 pr-6">
          <Placeholder
            as="b"
            active={placeholder}
            className="block font-serif font-normal text-[52px] leading-[54px] md:text-[72px] md:leading-[72px] tracking-[-0.02em] text-ink"
          >
            {s.value}
          </Placeholder>
          <Placeholder as="span" active={placeholder} className="block text-ink-3 text-[15px] mt-1">
            {s.label}
          </Placeholder>
        </div>
      ))}
    </div>
  );
}

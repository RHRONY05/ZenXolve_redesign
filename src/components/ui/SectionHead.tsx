/** Mono index + label, serif title (end with one `<em className="acc">` phrase), lead on the right. */
export function SectionHead({
  index,
  label,
  title,
  lead,
  leadOnMobile = false,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  leadOnMobile?: boolean;
}) {
  return (
    <div className="reveal mb-9 grid grid-cols-1 items-end gap-[18px] md:mb-16 md:grid-cols-[1fr_420px] md:gap-12">
      <div>
        <div className="mono mb-3.5 flex gap-[14px] text-ink-3 md:mb-5">
          <span>{index}</span>
          <span>{label}</span>
        </div>
        <h2 className="font-serif text-[46px] leading-[46px] font-normal tracking-display md:text-display-lg md:leading-(--text-display-lg--line-height)">{title}</h2>
      </div>
      {lead && <div className={`text-lg leading-[29px] text-ink-2 ${leadOnMobile ? "" : "hidden md:block"}`}>{lead}</div>}
    </div>
  );
}

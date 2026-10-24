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
        <div className="mb-3.5 flex items-center gap-3 font-mono md:mb-5">
          <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md border border-[var(--picker-badge-border)] bg-[var(--picker-badge-bg)] text-xs font-bold text-[var(--picker-badge-text)] shadow-[0_0_10px_var(--picker-badge-shadow)] transition-colors duration-300">
            {index}
          </span>
          <span className="text-xs uppercase tracking-widest text-[var(--picker-eyebrow)] font-semibold transition-colors duration-300">
            {label}
          </span>
        </div>
        <h2 className="font-serif text-[42px] leading-[1.18] pb-2 font-normal tracking-display md:text-display-lg md:leading-[1.12] text-white overflow-visible">
          {title}
        </h2>
      </div>
      {lead && <div className={`text-base md:text-lg leading-relaxed md:leading-[29px] text-slate-300 ${leadOnMobile ? "" : "hidden md:block"}`}>{lead}</div>}
    </div>
  );
}

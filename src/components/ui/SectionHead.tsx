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
          <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md border border-[#8b5cf6]/35 bg-[#8b5cf6]/10 text-xs font-bold text-[#c4b5fd] shadow-[0_0_10px_rgba(139,92,246,0.2)]">
            {index}
          </span>
          <span className="text-xs uppercase tracking-widest text-[#a78bfa] font-semibold">
            {label}
          </span>
        </div>
        <h2 className="font-serif text-[42px] leading-[44px] font-normal tracking-display md:text-display-lg md:leading-(--text-display-lg--line-height) text-white">
          {title}
        </h2>
      </div>
      {lead && <div className={`text-base md:text-lg leading-relaxed md:leading-[29px] text-slate-300 ${leadOnMobile ? "" : "hidden md:block"}`}>{lead}</div>}
    </div>
  );
}

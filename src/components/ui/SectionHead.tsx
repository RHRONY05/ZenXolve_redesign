/** Mono index + label, serif title (end with one `<em className="acc">` phrase), lead on the right or stacked below, or centered. */
export function SectionHead({
  index,
  label,
  title,
  lead,
  leadOnMobile = false,
  layout = "split",
  className = "",
}: {
  index?: string;
  label?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  leadOnMobile?: boolean;
  layout?: "split" | "stacked" | "centered";
  className?: string;
}) {
  if (layout === "centered") {
    return (
      <div className={`reveal mb-8 sm:mb-10 md:mb-12 text-center flex flex-col items-center mx-auto max-w-4xl ${className}`}>
        {index && label && (
          <div className="mb-3 flex items-center justify-center gap-2.5 sm:gap-3 font-mono md:mb-4">
            <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md border border-[var(--picker-badge-border)] bg-[var(--picker-badge-bg)] text-xs font-bold text-[var(--picker-badge-text)] shadow-[0_0_10px_var(--picker-badge-shadow)] transition-colors duration-300">
              {index}
            </span>
            <span className="text-xs uppercase tracking-widest text-[var(--picker-eyebrow)] font-semibold transition-colors duration-300">
              {label}
            </span>
          </div>
        )}
        <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] leading-[1.2] md:leading-[1.15] font-normal tracking-display text-white overflow-visible">
          {title}
        </h2>
        {lead && (
          <p
            className={`mt-2.5 sm:mt-3 max-w-2xl text-sm sm:text-base md:text-[17px] leading-relaxed text-slate-300 ${
              leadOnMobile ? "" : "hidden md:block"
            }`}
          >
            {lead}
          </p>
        )}
      </div>
    );
  }

  if (layout === "stacked") {
    return (
      <div className={`reveal mb-10 md:mb-14 ${className}`}>
        <div className="mb-3.5 flex items-center gap-3 font-mono md:mb-5">
          <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md border border-[var(--picker-badge-border)] bg-[var(--picker-badge-bg)] text-xs font-bold text-[var(--picker-badge-text)] shadow-[0_0_10px_var(--picker-badge-shadow)] transition-colors duration-300">
            {index}
          </span>
          <span className="text-xs uppercase tracking-widest text-[var(--picker-eyebrow)] font-semibold transition-colors duration-300">
            {label}
          </span>
        </div>
        <h2 className="font-serif text-[34px] sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[62px] leading-[1.15] md:leading-[1.1] pb-2 font-normal tracking-display text-white overflow-visible w-full">
          {title}
        </h2>
        {lead && (
          <div
            className={`mt-4 sm:mt-5 max-w-3xl text-base sm:text-lg md:text-[19px] leading-relaxed md:leading-[30px] text-slate-300 ${
              leadOnMobile ? "" : "hidden md:block"
            }`}
          >
            {lead}
          </div>
        )}
      </div>
    );
  }

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

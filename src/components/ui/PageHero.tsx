import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  className?: string;
  leadClassName?: string;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  className = "",
  leadClassName = "",
}: PageHeroProps) {
  return (
    <section className={`page-hero px-(--gutter-m) md:px-(--gutter-d) pt-10 pb-10 md:pt-[88px] md:pb-[72px] ${className}`}>
      <div className="container mx-auto max-w-(--container)">
        {eyebrow && (
          <div className="mono text-accent font-semibold font-mono text-xs tracking-(--tracking-mono) uppercase">
            {eyebrow}
          </div>
        )}
        {lead ? (
          <div className="row grid grid-cols-1 md:grid-cols-[1fr_420px] gap-5 md:gap-12 md:items-end">
            <h1 className="font-serif font-normal text-[56px] leading-[54px] md:text-display-xl tracking-(--tracking-display) mt-5 max-w-[1100px]">
              {title}
            </h1>
            <div className={`lead text-lg text-ink-2 ${leadClassName}`}>{lead}</div>
          </div>
        ) : (
          <h1 className="font-serif font-normal text-[56px] leading-[54px] md:text-display-xl tracking-(--tracking-display) mt-5 max-w-[1100px]">
            {title}
          </h1>
        )}
        {children}
      </div>
    </section>
  );
}

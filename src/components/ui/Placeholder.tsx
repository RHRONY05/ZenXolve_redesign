const dev = process.env.NODE_ENV !== "production";

/** Marks invented / unverified content. Dashed outline in dev, plain pass-through in production. */
export function Placeholder({
  as: Tag = "span",
  active = true,
  className = "",
  children,
}: {
  as?: React.ElementType;
  active?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const mark = dev && active ? "outline-[1.5px] outline-dashed outline-ph outline-offset-4 rounded-[4px]" : "";
  return <Tag className={`${mark} ${className}`}>{children}</Tag>;
}

/** The little orange "Placeholder · …" tag. Hidden in production. */
export function PlaceholderTag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  if (!dev) return null;
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.06em] uppercase text-ph bg-ph-soft px-[7px] py-[3px] rounded-[4px] whitespace-nowrap ${className}`}
    >
      {children}
    </span>
  );
}

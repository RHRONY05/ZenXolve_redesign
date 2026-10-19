import Link from "next/link";
import { Icon } from "./Icon";

export function BackLink({
  href = "/work",
  children = "All work",
  className = "",
}: {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`back inline-flex items-center gap-1.5 text-sm text-ink-2 transition-colors hover:text-ink [&_svg]:size-4 ${className}`}
    >
      <Icon name="arrow-left" size={16} />
      {children}
    </Link>
  );
}

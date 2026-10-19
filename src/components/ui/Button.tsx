import Link from "next/link";
import { Icon, type IconName } from "./Icon";

export type ButtonVariant = "primary" | "accent" | "ghost" | "on-photo" | "glass" | "inverse" | "ghost-inverse";

const variants: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-ink text-bg hover:bg-ink-2",
  accent: "border-transparent bg-accent text-on-accent hover:bg-accent-hover",
  ghost: "bg-transparent text-ink border-line-strong hover:bg-surface-2",
  "on-photo": "border-transparent bg-on-photo text-photo-ink",
  glass: "bg-glass text-on-photo border-glass-line backdrop-blur-[8px]",
  inverse: "border-transparent bg-on-inverse text-inverse",
  "ghost-inverse": "bg-transparent text-on-inverse border-on-inverse-2 hover:bg-on-inverse/10",
};

type Props = {
  variant?: ButtonVariant;
  size?: "md" | "lg";
  icon?: IconName;
  iconLeft?: IconName;
  className?: string;
  children: React.ReactNode;
} & (
  | ({ href: string; external?: boolean } & Omit<React.ComponentProps<"a">, "href" | "className" | "children">)
  | ({ href?: undefined } & Omit<React.ComponentProps<"button">, "className" | "children">)
);

export function buttonClasses(variant: ButtonVariant, size: "md" | "lg", extra = "") {
  const sizing = size === "lg" ? "h-[56px] px-7 text-base" : "h-[50px] md:h-[46px] px-[22px] text-[15px]";
  return `inline-flex items-center justify-center gap-2 rounded-full border font-medium whitespace-nowrap cursor-pointer transition-[background-color,transform] duration-(--dur-fast) ease-(--ease) disabled:opacity-60 disabled:cursor-default [&_svg]:size-[18px] ${sizing} ${variants[variant]} ${extra}`;
}

export function Button({ variant = "primary", size = "md", icon, iconLeft, className = "", children, ...rest }: Props) {
  const cls = buttonClasses(variant, size, className);
  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} />}
      {children}
      {icon && <Icon name={icon} />}
    </>
  );
  if ("href" in rest && rest.href !== undefined) {
    const { href, external, ...a } = rest as { href: string; external?: boolean } & React.ComponentProps<"a">;
    return external ? (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...a}>
        {inner}
      </a>
    ) : (
      <Link href={href} className={cls} {...a}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as React.ComponentProps<"button">)}>
      {inner}
    </button>
  );
}

export function LinkArrow({
  href,
  children,
  arrow = true,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={`inline-flex items-center gap-1.5 font-medium text-accent-text ${className}`}>
      {children}
      {arrow && <Icon name="arrow-right" size={16} />}
    </Link>
  );
}

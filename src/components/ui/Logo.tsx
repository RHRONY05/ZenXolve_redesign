import Image from "next/image";

/**
 * Temporary PNG wordmark. Replace with an inline SVG using currentColor once the Xenzolve team supplies it.
 * tone="photo" is always the light wordmark (sits on the hero photo); "auto" follows the theme.
 */
export function Logo({ tone = "auto", className = "" }: { tone?: "auto" | "photo"; className?: string }) {
  const size = "h-[21px] md:h-6 w-auto";
  const dims = { width: 640, height: 172 };
  if (tone === "photo") {
    return <Image src="/logo-paper.png" alt="XenZolve" {...dims} className={`${size} ${className}`} />;
  }
  return (
    <>
      <Image src="/logo-ink.png" alt="XenZolve" {...dims} className={`${size} ${className} dark:hidden`} />
      <Image src="/logo-paper.png" alt="XenZolve" {...dims} className={`${size} ${className} hidden dark:block`} />
    </>
  );
}

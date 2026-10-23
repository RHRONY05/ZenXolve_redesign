"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";

/**
 * Minimal top brand link shown only on inner pages (/work, /about, /services, etc.)
 * On the home page, the prominent hero box is at the top instead.
 */
export function InnerPageHeader() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="absolute top-5 left-5 sm:top-6 sm:left-8 z-40 select-none">
      <Link href="/" aria-label="XenZolve Home" className="inline-block hover:opacity-85 transition-opacity">
        <Logo tone="photo" />
      </Link>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeCustomizerTrigger } from "./ThemeCustomizer";
import { useChrome } from "./ChromeProvider";

/** >= 768px. `on-photo` on Home while the hero is in view, then `paper` (fixed, blurred). Other pages: sticky paper. */
export function SiteHeader() {
  const pathname = usePathname();
  const { isHome, pastHero } = useChrome();
  const onPhoto = isHome && !pastHero;
  const frame = onPhoto
    ? "absolute inset-x-0 top-0 px-6 md:px-14 text-on-photo"
    : `${isHome ? "fixed inset-x-0 top-0" : "sticky top-0"} px-14 bg-bg/85 backdrop-blur-md border-b border-line text-ink`;

  return (
    <header className={`z-40 hidden md:flex h-(--header-h) items-center gap-10 ${frame}`}>
      <Link href="/" aria-label="XenZolve home" className="shrink-0">
        <Logo tone={onPhoto ? "photo" : "auto"} />
      </Link>
      <nav aria-label="Main" className="ml-auto flex items-center gap-6 lg:gap-8 text-[15px]">
        {nav.map((item) => {
          const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const tone = current ? (onPhoto ? "text-on-photo" : "text-ink") : onPhoto ? "text-on-photo-2" : "text-ink-2";
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={current ? "page" : undefined}
              className={`${tone} ${current ? "after:mt-0.5 after:block after:h-[1.5px] after:bg-current" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ThemeCustomizerTrigger />
        </div>
        <Button href="/contact" variant={onPhoto ? "on-photo" : "primary"}>
          Start a project
        </Button>
      </nav>
    </header>
  );
}

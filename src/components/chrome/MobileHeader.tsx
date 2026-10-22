"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { useChrome } from "./ChromeProvider";

/** < 768px. Menu pill opens <MobileMenu />. */
export function MobileHeader() {
  const { isHome, pastHero, setMenuOpen } = useChrome();
  const onPhoto = isHome && !pastHero;
  const frame = onPhoto
    ? "absolute inset-x-0 top-0 px-5 text-on-photo"
    : `${isHome ? "fixed inset-x-0 top-0" : "sticky top-0"} px-(--gutter-m) bg-bg/85 backdrop-blur-md border-b border-line text-ink`;
  const pill = onPhoto
    ? "border-glass-line bg-glass backdrop-blur-[8px] text-on-photo"
    : "border-line-strong bg-transparent";

  return (
    <header className={`z-40 flex md:hidden h-(--header-h-m) items-center justify-between ${frame}`}>
      <Link href="/" aria-label="XenZolve home">
        <Logo tone={onPhoto ? "photo" : "auto"} />
      </Link>
      <button
        type="button"
        id="menu-opener"
        aria-label="Open menu"
        aria-haspopup="dialog"
        onClick={() => setMenuOpen(true)}
        className={`inline-flex h-10 items-center gap-2 rounded-full border px-[14px] text-sm font-medium ${pill}`}
      >
        Menu <Icon name="menu" size={16} />
      </button>
    </header>
  );
}

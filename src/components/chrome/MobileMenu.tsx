"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { nav, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeCustomizerTrigger } from "./ThemeCustomizer";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { useChrome } from "./ChromeProvider";

const links = nav;
const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Full-screen sheet for < 768px. Focus is trapped while open; Esc closes; focus returns to the opener. */
export function MobileMenu() {
  const { menuOpen, setMenuOpen } = useChrome();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const root = ref.current;
    const opener = document.getElementById("menu-opener");
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const rafId = requestAnimationFrame(() => {
      root?.querySelector<HTMLElement>("[data-close]")?.focus();
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || !root) return;
      const items = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      opener?.focus();
    };
  }, [menuOpen, setMenuOpen]);

  if (!menuOpen) return null;
  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-bg md:hidden"
    >
      <div className="flex h-(--header-h-m) shrink-0 items-center justify-between px-(--gutter-m)">
        <Logo />
        <button
          type="button"
          data-close
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-line-strong px-[14px] text-sm font-medium"
        >
          Close <Icon name="x" size={16} />
        </button>
      </div>
      <nav aria-label="Menu" className="grid px-(--gutter-m) pt-6">
        {links.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="flex items-baseline gap-[14px] border-b border-line font-serif text-[52px] leading-16"
          >
            <span className="mono w-6 text-accent font-semibold">{String(i + 1).padStart(2, "0")}</span>
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto grid gap-[10px] px-(--gutter-m) pt-6 pb-7">
        <Button href="/contact" icon="arrow-right" onClick={() => setMenuOpen(false)}>
          Start a project
        </Button>
        <Button href={site.whatsapp} external variant="ghost" iconLeft="message-circle">
          WhatsApp {site.phone}
        </Button>
        <div className="mt-2 flex items-center justify-between border-t border-line pt-3">
          <span className="mono text-xs text-ink-3">Theme & Style</span>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ThemeCustomizerTrigger />
          </div>
        </div>
        <div className="mono mt-2 text-center text-ink-3">
          {site.email} · {site.location}
        </div>
      </div>
    </div>
  );
}

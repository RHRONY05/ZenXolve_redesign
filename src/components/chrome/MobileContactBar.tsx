"use client";

import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { useChrome } from "./ChromeProvider";

/** Mobile only. Shows once the hero has left the viewport; hidden on /contact and while the menu is open. */
export function MobileContactBar() {
  const pathname = usePathname();
  const { pastHero, menuOpen } = useChrome();
  const show = pastHero && !menuOpen && pathname !== "/contact";
  return (
    <div
      aria-hidden={!show}
      inert={!show}
      className={`fixed inset-x-3 bottom-[14px] z-30 flex gap-2 rounded-full bg-surface p-2 shadow-(--shadow-lg) transition-[transform,opacity] duration-(--dur) ease-(--ease) md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[140%] opacity-0"
      }`}
    >
      <Button href="/contact" className="h-[46px]! flex-1">
        Start a project
      </Button>
      <Button
        href={site.whatsapp}
        external
        aria-label="Chat on WhatsApp"
        iconLeft="message-circle"
        className="h-[46px]! w-[46px] shrink-0 bg-success! px-0! text-white!"
      >
        {null}
      </Button>
    </div>
  );
}

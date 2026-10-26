"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "@/components/ui/Icon";

function subscribe(cb: () => void) {
  const o = new MutationObserver(cb);
  o.observe(document.documentElement, { attributes: true, attributeFilter: ["data-palette"] });
  return () => o.disconnect();
}
const read = () => (document.documentElement.dataset.palette === "editorial" ? "editorial" : "cosmic");

/** Dual-theme palette switch: Cosmic Violet <-> Warm Editorial */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const palette = useSyncExternalStore(subscribe, read, () => "cosmic");

  function toggle() {
    const next = palette === "cosmic" ? "editorial" : "cosmic";
    document.documentElement.dataset.palette = next;
    document.documentElement.dataset.theme = "dark";
    try {
      localStorage.setItem("palette", next);
      localStorage.setItem("theme", "dark");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      title={`Active theme: ${palette === "cosmic" ? "Cosmic Violet" : "Warm Editorial"}. Click to switch theme.`}
      aria-label={`Toggle theme: currently ${palette === "cosmic" ? "Cosmic Violet" : "Warm Editorial"}`}
      className={`grid size-10 place-items-center rounded-full border border-current/25 transition-colors hover:bg-current/10 cursor-pointer ${className}`}
    >
      <Icon name={palette === "cosmic" ? "moon" : "sun"} size={18} />
    </button>
  );
}

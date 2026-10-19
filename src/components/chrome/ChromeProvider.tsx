"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type Chrome = {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  /** True once the hero photo (or, on pages without one, the first screen) has scrolled away. */
  pastHero: boolean;
  isHome: boolean;
};

const Ctx = createContext<Chrome>({ menuOpen: false, setMenuOpen: () => {}, pastHero: false, isHome: true });
export const useChrome = () => useContext(Ctx);

export function ChromeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpenState] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const setMenuOpen = useCallback((v: boolean) => setMenuOpenState(v), []);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const hero = document.getElementById("hero");
      const limit = hero ? hero.offsetHeight - 80 : 400;
      setPastHero(window.scrollY > limit);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  // Close the sheet whenever the route changes.
  useEffect(() => setMenuOpenState(false), [pathname]);

  const value = useMemo(() => ({ menuOpen, setMenuOpen, pastHero, isHome }), [menuOpen, setMenuOpen, pastHero, isHome]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

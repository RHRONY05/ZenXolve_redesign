"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "Asia/Dhaka",
});
const now = () => fmt.format(new Date()).replace(/\s?(AM|PM)/, (_, p: string) => ` ${p.toLowerCase()}`);

/** Live Asia/Dhaka time. Renders after mount so server and client markup match. */
export function DhakaClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(now());
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute top-[86px] left-6 z-[2] text-left font-mono text-xs leading-4 tracking-mono text-on-photo-2 uppercase md:top-[120px] md:right-(--gutter-d) md:left-auto md:text-right">
      <span className="hidden md:inline">Dhaka · 23.81°N 90.41°E</span>
      <span className="md:hidden">Dhaka · {time || " "}</span>
      <b className="mt-1 block font-serif text-[21px] leading-[26px] font-normal tracking-normal text-on-photo normal-case italic md:text-[26px] md:leading-[30px]">
        <span className="hidden md:inline">{time ? `${time}, still building.` : "Still building."}</span>
        <span className="md:hidden">Still building.</span>
      </b>
    </div>
  );
}

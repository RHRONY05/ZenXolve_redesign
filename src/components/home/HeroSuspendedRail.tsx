"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCard {
  id: string;
  category: string;
  title: string;
  image: string;
  href: string;
  tiltDeg: number;
  yOffsetPx: number;
}

const serviceCards: ServiceCard[] = [
  {
    id: "web-saas",
    category: "01 / PLATFORMS",
    title: "Web & SaaS Platforms",
    image: "/hero/service-web-minimal.jpg",
    href: "/services",
    tiltDeg: 4,
    yOffsetPx: 30,
  },
  {
    id: "ai-agents",
    category: "02 / INTELLIGENCE",
    title: "AI & Autonomous Agents",
    image: "/hero/service-ai-minimal.jpg",
    href: "/services",
    tiltDeg: 1.2,
    yOffsetPx: 57,
  },
  {
    id: "mobile-apps",
    category: "03 / MOBILE",
    title: "Cross-Platform Mobile",
    image: "/hero/service-mobile-minimal.jpg",
    href: "/services",
    tiltDeg: -1.2,
    yOffsetPx: 57,
  },
  {
    id: "cloud-systems",
    category: "04 / ARCHITECTURE",
    title: "Enterprise Cloud & ERP",
    image: "/hero/service-cloud-minimal.jpg",
    href: "/services",
    tiltDeg: -4,
    yOffsetPx: 30,
  },
];

export function HeroSuspendedRail() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full select-none flex flex-col items-center">
      {/* 
        ROW 1: FULL-SCREEN-WIDTH STRAIGHT LINE FLANKING THE HEADLINE
        The straight line stretches across the entire screen from left edge to right edge (w-screen).
        The cable connects directly ON this straight line at anchor nodes [O].
      */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 flex items-center justify-center z-30">
        {/* Left Straight Line: Runs from screen left edge all the way to the headline */}
        <div
          className="flex-1 h-[2px] bg-(--hero-frame-stroke)"
          style={{
            boxShadow:
              "0 0 10px var(--hero-frame-glow), 0 0 20px var(--hero-frame-glow)",
          }}
          aria-hidden
        />

        {/* The Centerpiece Headline */}
        <div className="shrink-0 px-4 sm:px-6 md:px-8">
          <h1 className="font-serif font-bold italic text-base sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-white uppercase text-center whitespace-nowrap">
            <span className="text-white">The last agency, </span>
            <span className="text-white">
              you&apos;ll need to hire
              <span className="animate-exclamation text-(--hero-exclamation) ml-1.5 font-bold not-italic">
                !
              </span>
            </span>
          </h1>
        </div>

        {/* Right Straight Line: Runs from the headline all the way to the screen right edge */}
        <div
          className="flex-1 h-[2px] bg-(--hero-frame-stroke)"
          style={{
            boxShadow:
              "0 0 10px var(--hero-frame-glow), 0 0 20px var(--hero-frame-glow)",
          }}
          aria-hidden
        />

        {/* 
          SVG CABLE ATTACHMENT:
          Anchored at top-1/2 (the exact center of the straight horizontal line).
          The cable starts at (40, 0) and ends at (1320, 0) which is EXACTLY ON the straight line!
          Spans across all cards with anchors outside the card grid.
        */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 pointer-events-none w-full max-w-[1360px] h-[100px] z-20 overflow-visible">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1360 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Diffuse back-glow on the cable */}
            <path
              d="M 40 0 Q 680 120 1320 0"
              stroke="var(--hero-frame-stroke)"
              strokeWidth="4"
              strokeOpacity="0.25"
              style={{ filter: "blur(6px)" }}
            />
            {/* Core illuminated fiber cable */}
            <path
              d="M 40 0 Q 680 120 1320 0"
              stroke="var(--hero-frame-stroke)"
              strokeWidth="1.5"
              strokeOpacity="0.85"
              style={{
                filter: "drop-shadow(0 0 8px var(--hero-frame-glow))",
              }}
            />

            {/* Left Anchor Junction: Centered EXACTLY on the straight line (cy=0) */}
            <circle
              cx="40"
              cy="0"
              r="6"
              fill="var(--hero-bg)"
              stroke="var(--hero-frame-stroke)"
              strokeWidth="2"
              style={{
                filter: "drop-shadow(0 0 8px var(--hero-frame-glow))",
              }}
            />
            <circle cx="40" cy="0" r="2.5" fill="var(--hero-frame-stroke)" />

            {/* Right Anchor Junction: Centered EXACTLY on the straight line (cy=0) */}
            <circle
              cx="1320"
              cy="0"
              r="6"
              fill="var(--hero-bg)"
              stroke="var(--hero-frame-stroke)"
              strokeWidth="2"
              style={{
                filter: "drop-shadow(0 0 8px var(--hero-frame-glow))",
              }}
            />
            <circle cx="1320" cy="0" r="2.5" fill="var(--hero-frame-stroke)" />
          </svg>
        </div>
      </div>

      {/* 
        DESKTOP / TABLET SUSPENDED CARDS
        Clamps pin directly to the cable.
        The container pulls up to the straight line baseline via -mt-5.
      */}
      <div className="hidden md:block relative w-full max-w-[1360px] mx-auto px-4 z-20 -mt-5">
        <div className="max-w-[1180px] mx-auto grid grid-cols-4 gap-5 relative z-20">
          {serviceCards.map((card) => {
            const isHovered = hoveredId === card.id;

            return (
              <div
                key={card.id}
                className="relative flex flex-col items-center"
                style={{
                  paddingTop: `${card.yOffsetPx}px`,
                }}
              >
                {/* 
                  The Metallic Clamp
                  Grips the cable with a glowing LED node right at the cable line.
                */}
                <div
                  className="relative -mt-2.5 -mb-3 z-30 flex flex-col items-center pointer-events-none transition-transform duration-300"
                  style={{
                    transform: isHovered ? "scale(1.15)" : "scale(1)",
                  }}
                >
                  <div
                    className="w-4 h-5 rounded-[2px] bg-neutral-900 border border-(--hero-frame-stroke) flex items-center justify-center transition-all duration-300"
                    style={{
                      boxShadow: isHovered
                        ? "0 0 12px var(--hero-frame-glow), 0 0 20px var(--hero-frame-glow)"
                        : "0 0 8px var(--hero-frame-glow)",
                    }}
                  >
                    <div
                      className="size-1.5 rounded-full bg-(--hero-frame-stroke)"
                      style={{
                        boxShadow: "0 0 6px var(--hero-frame-glow)",
                      }}
                    />
                  </div>
                  <div className="w-[1.5px] h-1.5 bg-(--hero-frame-stroke)/80" />
                </div>

                {/* 
                  The Hanging Card:
                  Clean bright minimal illustration with strictly 2 lines at the bottom.
                */}
                <div
                  className="w-full origin-top transition-all duration-300 ease-out"
                  style={{
                    transform: isHovered
                      ? "rotate(0deg) scale(1.025)"
                      : `rotate(${card.tiltDeg}deg)`,
                  }}
                  onMouseEnter={() => setHoveredId(card.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link
                    href={card.href}
                    className="group relative flex flex-col justify-end w-full h-[290px] lg:h-[310px] rounded-2xl border border-black/10 bg-[#FAF9F5] overflow-hidden transition-all duration-300 ease-out hover:border-(--hero-frame-stroke) hover:shadow-[0_20px_44px_-10px_rgba(0,0,0,0.95),0_0_24px_var(--hero-frame-glow)] cursor-pointer"
                  >
                    {/* Full Container Minimalist Illustration */}
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 1024px) 25vw, 280px"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      priority
                    />

                    {/* Gradient Overlay for Crisp Text Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/40 to-transparent pointer-events-none" />

                    {/* Top Neon Highlight on Hover */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-(--hero-frame-stroke) to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    {/* Bottom Content: Strictly Two Clean Lines with elevated bottom breathing room */}
                    <div className="relative z-10 p-4 lg:p-5 pb-6 lg:pb-7 flex flex-col items-start text-left">
                      {/* Line 1: Category Tag */}
                      <span className="font-mono text-[10px] lg:text-[11px] font-bold tracking-[0.18em] text-neutral-500 uppercase drop-shadow-xs">
                        {card.category}
                      </span>
                      {/* Line 2: Service Title */}
                      <h3 className="font-sans text-[14.5px] lg:text-[16px] font-bold text-neutral-900 tracking-tight leading-snug mt-0.5 group-hover:text-black transition-colors">
                        {card.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 
        MOBILE / SMALL SCREEN TOUCH CAROUSEL
        Horizontal swipeable track with snap-scrolling.
      */}
      <div className="md:hidden relative w-full pt-4">
        {/* Cable across mobile header */}
        <div className="relative w-full h-4 mb-2 flex items-center">
          <div
            className="w-full h-[1.5px] bg-(--hero-frame-stroke)"
            style={{
              boxShadow: "0 0 8px var(--hero-frame-glow)",
            }}
          />
        </div>

        <div className="flex gap-3.5 overflow-x-auto pb-2 pt-2 px-3 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="snap-center shrink-0 w-[240px] relative text-left"
            >
              {/* Mobile clamp indicator overlapping the cable */}
              <div className="absolute -top-3 left-6 flex flex-col items-center z-20 pointer-events-none">
                <div
                  className="w-3.5 h-4 rounded-[2px] bg-neutral-900 border border-(--hero-frame-stroke) flex items-center justify-center"
                  style={{
                    boxShadow: "0 0 6px var(--hero-frame-glow)",
                  }}
                >
                  <div className="size-1 rounded-full bg-(--hero-frame-stroke)" />
                </div>
                <div className="w-[1.5px] h-1 bg-(--hero-frame-stroke)/80" />
              </div>

              <Link
                href={card.href}
                className="group relative flex flex-col justify-end w-full h-[270px] rounded-2xl border border-black/10 bg-[#FAF9F5] overflow-hidden transition-all duration-200 active:scale-[0.98] hover:border-(--hero-frame-stroke)"
              >
                {/* Full Container Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="240px"
                  className="object-cover object-center"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/40 to-transparent pointer-events-none" />

                {/* Two lines with elevated bottom breathing room */}
                <div className="relative z-10 p-4 pb-6 flex flex-col items-start text-left">
                  <span className="font-mono text-[9.5px] font-bold tracking-[0.18em] text-neutral-500 uppercase">
                    {card.category}
                  </span>
                  <h3 className="font-sans text-[14px] font-bold text-neutral-900 tracking-tight leading-snug mt-0.5">
                    {card.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

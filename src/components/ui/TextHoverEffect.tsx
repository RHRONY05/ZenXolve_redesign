"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TextHoverEffectProps {
  duration?: number;
  className?: string;
}

// Authentic XenZolve geometric lightning-chevron 'X' emblem path
// Precision-vectorized from the brand identity mark
const X_EMBLEM_PATH =
  "M 102.1 24.0 L 116.2 24.6 L 62.2 32.0 L 134.0 97.0 L 15.0 116.0 L 88.0 72.5 L 59.2 100.1 L 113.2 91.4 L 42.6 27.0 L 102.1 24.6 Z M 156.0 24.0 L 157.3 41.2 L 122.4 60.2 L 151.2 34.4 L 97.8 41.8 L 157.3 98.8 L 157.3 108.0 L 94.1 108.6 L 146.3 101.9 L 76.9 35.7 L 156.0 24.6 Z";

export const TextHoverEffect = ({
  duration = 0.2,
  className,
}: TextHoverEffectProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [isEditorial, setIsEditorial] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsEditorial(document.documentElement.dataset.palette === "editorial");
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-palette"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage.toFixed(2)}%`,
        cy: `${cyPercentage.toFixed(2)}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 1010 140"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setCursor({ x: null, y: null });
      }}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("w-full h-full select-none cursor-pointer overflow-visible", className)}
    >
      <defs>
        {/* Multi-color iridescent neon gradient revealed on hover */}
        <linearGradient
          id="xenzolveTextGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="20%" stopColor="#818cf8" />
          <stop offset="42%" stopColor="#c084fc" />
          <stop offset="65%" stopColor="#38bdf8" />
          <stop offset="85%" stopColor="#80eeb4" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>

        <radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="25%"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
          style={{
            transition: `cx ${duration}s ease-out, cy ${duration}s ease-out`,
          }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>

        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* Layer 1: Ambient background outline (faint stroke for structure) */}
      <g
        fill="none"
        strokeWidth="0.5"
        className="stroke-white/10"
        style={{ opacity: hovered ? 0.45 : 0.18 }}
      >
        {/* Custom stylized XenZolve 'X' emblem */}
        <path d={X_EMBLEM_PATH} />
        {/* 'ENZOLVE' letters covering the rest of the footer length */}
        <text
          x="180"
          y="72"
          textAnchor="start"
          dominantBaseline="central"
          textLength="815"
          lengthAdjust="spacing"
          className="font-sans text-[96px] font-black uppercase tracking-[0.16em]"
        >
          ENZOLVE
        </text>
      </g>

      {/* Layer 2: Main illuminated stroke (#3ca2fa / ice cyan) */}
      <g
        fill="none"
        stroke="#3ca2fa"
        strokeWidth="0.75"
        className="transition-all duration-300"
        style={{
          strokeDasharray: 2400,
          strokeDashoffset: 0,
          animation: "strokeDraw 3.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
          opacity: 0.75,
        }}
      >
        {/* Custom stylized XenZolve 'X' emblem with subtle bloom */}
        <path
          d={X_EMBLEM_PATH}
          style={{
            filter: "drop-shadow(0 0 10px rgba(60, 162, 250, 0.4))",
          }}
        />
        {/* 'ENZOLVE' letters */}
        <text
          x="180"
          y="72"
          textAnchor="start"
          dominantBaseline="central"
          textLength="815"
          lengthAdjust="spacing"
          className="font-sans text-[96px] font-black uppercase tracking-[0.16em]"
          style={{
            filter: "drop-shadow(0 0 10px rgba(60, 162, 250, 0.35))",
          }}
        >
          ENZOLVE
        </text>
      </g>

      {/* Layer 3: Interactive cursor reveal mask: illuminates vibrant gradient under mouse */}
      <g
        fill="none"
        stroke="url(#xenzolveTextGradient)"
        strokeWidth="1.1"
        mask="url(#textMask)"
        className="pointer-events-none transition-opacity duration-150"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <path d={X_EMBLEM_PATH} />
        <text
          x="180"
          y="72"
          textAnchor="start"
          dominantBaseline="central"
          textLength="815"
          lengthAdjust="spacing"
          className="font-sans text-[96px] font-black uppercase tracking-[0.16em]"
        >
          ENZOLVE
        </text>
      </g>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        background:
          "radial-gradient(130% 120% at 50% 100%, var(--accent-soft) 0%, transparent 70%)",
      }}
    />
  );
};

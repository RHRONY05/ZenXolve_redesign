"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TextHoverEffectProps {
  text?: string;
  duration?: number;
  className?: string;
}

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
      viewBox="0 0 1000 150"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setCursor({ x: null, y: null });
      }}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("w-full h-full select-none uppercase cursor-pointer overflow-visible", className)}
    >
      <defs>
        {/* Multi-color iridescent neon gradient on hover */}
        <linearGradient
          id="xenzolveTextGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="18%" stopColor="#818cf8" />
          <stop offset="38%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#80eeb4" />
          <stop offset="82%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>

        <radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="22%"
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

      {/* Layer 1: Background subtle white/gray stroke for ambient structure */}
      <text
        x="500"
        y="80"
        textAnchor="middle"
        dominantBaseline="central"
        textLength="980"
        lengthAdjust="spacing"
        strokeWidth="0.4"
        className="fill-transparent stroke-white/10 font-sans text-[118px] font-black tracking-[0.18em]"
        style={{ opacity: hovered ? 0.5 : 0.18 }}
      >
        <tspan className="stroke-white/15">X</tspan>
        <tspan>ENZOLVE</tspan>
      </text>

      {/* Layer 2: Main illuminated brand stroke */}
      {/* 'X' is customized in signature home-screen theme violet (#c4b5fd / #a78bfa) */}
      {/* 'ENZOLVE' is illuminated in brand cyan (#3ca2fa) */}
      <text
        x="500"
        y="80"
        textAnchor="middle"
        dominantBaseline="central"
        textLength="980"
        lengthAdjust="spacing"
        strokeWidth="0.65"
        className="fill-transparent font-sans text-[118px] font-black tracking-[0.18em] transition-all duration-300"
        style={{
          strokeDasharray: 2000,
          strokeDashoffset: 0,
          animation: "strokeDraw 3.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        }}
      >
        {/* Customized 'X' with signature home-screen theme accent and subtle neon bloom */}
        <tspan
          className="stroke-[#c4b5fd] hover:stroke-[#e9d5ff]"
          style={{
            filter: "drop-shadow(0 0 14px rgba(196, 181, 253, 0.55))",
          }}
        >
          X
        </tspan>
        {/* 'ENZOLVE' letters in crisp cyan */}
        <tspan
          className="stroke-[#3ca2fa]/65 hover:stroke-[#3ca2fa]/95"
          style={{
            filter: "drop-shadow(0 0 10px rgba(60, 162, 250, 0.35))",
          }}
        >
          ENZOLVE
        </tspan>
      </text>

      {/* Layer 3: Interactive cursor reveal mask: reveals vibrant gradient under mouse */}
      <text
        x="500"
        y="80"
        textAnchor="middle"
        dominantBaseline="central"
        textLength="980"
        lengthAdjust="spacing"
        stroke="url(#xenzolveTextGradient)"
        strokeWidth="0.9"
        mask="url(#textMask)"
        className="fill-transparent font-sans text-[118px] font-black tracking-[0.18em] pointer-events-none transition-opacity duration-150"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <tspan>X</tspan>
        <tspan>ENZOLVE</tspan>
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        background:
          "radial-gradient(130% 120% at 50% 100%, rgba(13, 61, 97, 0.22) 0%, rgba(6, 7, 19, 0) 70%)",
      }}
    />
  );
};

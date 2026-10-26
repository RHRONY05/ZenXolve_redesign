"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration = 0.2,
  className,
}: {
  text: string;
  duration?: number;
  className?: string;
}) => {
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
      viewBox="0 0 500 120"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setCursor({ x: null, y: null });
      }}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer overflow-visible", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#3ca2fa" />
          <stop offset="25%" stopColor="#80eeb4" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="75%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#c084fc" />
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

      {/* Subtle base stroke when not hovered */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        strokeWidth="0.35"
        className="fill-transparent stroke-white/10 font-sans text-[78px] font-black tracking-tight"
        style={{ opacity: hovered ? 0.6 : 0.2 }}
      >
        {text}
      </text>

      {/* Main illuminated stroke (#3ca2fa99 matching the reference screenshot) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        strokeWidth="0.45"
        className="fill-transparent stroke-[#3ca2fa]/55 hover:stroke-[#3ca2fa]/90 font-sans text-[78px] font-black tracking-tight transition-all duration-300"
        style={{
          strokeDasharray: 1200,
          strokeDashoffset: 0,
          animation: "strokeDraw 3s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        }}
      >
        {text}
      </text>

      {/* Interactive cursor reveal mask: illuminates vibrant gradient under mouse */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        stroke="url(#textGradient)"
        strokeWidth="0.65"
        mask="url(#textMask)"
        className="fill-transparent font-sans text-[78px] font-black tracking-tight pointer-events-none transition-opacity duration-150"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        {text}
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
          "radial-gradient(125% 125% at 50% 100%, rgba(13, 61, 97, 0.2) 0%, rgba(6, 7, 19, 0) 70%)",
      }}
    />
  );
};

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProjectCardItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  isWide: boolean;
  category: string;
  badgeColor: {
    text: string;
    bg: string;
    border: string;
  };
}

// 4 placeholder images uploaded by the user
const placeholder1 = "/placeholders/placeholder-1.png";
const placeholder2 = "/placeholders/placeholder-2.png";
const placeholder3 = "/placeholders/placeholder-3.png";
const placeholder4 = "/placeholders/placeholder-4.png";

// Row 1: Alternating Wide -> Standard -> Wide -> Standard
export const row1Projects: ProjectCardItem[] = [
  {
    id: "p1",
    title: "Title 1",
    slug: "project-one",
    image: placeholder1,
    isWide: true,
    category: "Full-Stack Web",
    badgeColor: { text: "#C4B5FD", bg: "rgba(139, 92, 246, 0.15)", border: "rgba(167, 139, 250, 0.3)" },
  },
  {
    id: "p2",
    title: "Title 2",
    slug: "project-two",
    image: placeholder2,
    isWide: false,
    category: "AI Agent",
    badgeColor: { text: "#67E8F9", bg: "rgba(6, 182, 212, 0.15)", border: "rgba(103, 232, 249, 0.3)" },
  },
  {
    id: "p3",
    title: "Title 3",
    slug: "project-three",
    image: placeholder3,
    isWide: true,
    category: "Automation",
    badgeColor: { text: "#F472B6", bg: "rgba(244, 114, 182, 0.15)", border: "rgba(244, 114, 182, 0.3)" },
  },
  {
    id: "p4",
    title: "Title 4",
    slug: "project-four",
    image: placeholder4,
    isWide: false,
    category: "SaaS App",
    badgeColor: { text: "#F9A8D4", bg: "rgba(236, 72, 153, 0.15)", border: "rgba(249, 168, 212, 0.3)" },
  },
];

// Row 2: Staggered Standard -> Wide -> Standard -> Wide
export const row2Projects: ProjectCardItem[] = [
  {
    id: "p5",
    title: "Title 5",
    slug: "project-five",
    image: placeholder1,
    isWide: false,
    category: "AI Chatbot",
    badgeColor: { text: "#67E8F9", bg: "rgba(6, 182, 212, 0.15)", border: "rgba(103, 232, 249, 0.3)" },
  },
  {
    id: "p6",
    title: "Title 6",
    slug: "project-six",
    image: placeholder2,
    isWide: true,
    category: "Web Platform",
    badgeColor: { text: "#C4B5FD", bg: "rgba(139, 92, 246, 0.15)", border: "rgba(167, 139, 250, 0.3)" },
  },
  {
    id: "p7",
    title: "Title 7",
    slug: "project-one",
    image: placeholder3,
    isWide: false,
    category: "Workflow",
    badgeColor: { text: "#FDBA74", bg: "rgba(249, 115, 22, 0.15)", border: "rgba(253, 186, 116, 0.3)" },
  },
  {
    id: "p8",
    title: "Title 8",
    slug: "project-two",
    image: placeholder4,
    isWide: true,
    category: "Custom SaaS",
    badgeColor: { text: "#F9A8D4", bg: "rgba(236, 72, 153, 0.15)", border: "rgba(249, 168, 212, 0.3)" },
  },
];

function ProjectCard({ project, isPriority = false }: { project: ProjectCardItem; isPriority?: boolean }) {
  const cardWidth = project.isWide
    ? "w-[380px] sm:w-[440px] md:w-[480px]"
    : "w-[280px] sm:w-[320px] md:w-[350px]";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative flex flex-col h-[300px] sm:h-[320px] ${cardWidth} p-2 sm:p-2.5 rounded-[22px] border border-[var(--line)] bg-[var(--surface-2)]/90 backdrop-blur-xl hover:border-[var(--accent)]/50 overflow-hidden cursor-pointer shrink-0 select-none transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_var(--accent-soft)] hover:-translate-y-1.5`}
    >
      {/* Minimalist Top Browser Window Bar */}
      <div className="h-6 flex items-center justify-between px-2 mb-1.5 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-white/25" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
        <span
          className="px-2 py-0.5 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase backdrop-blur-sm"
          style={{
            backgroundColor: project.badgeColor.bg,
            border: `1px solid ${project.badgeColor.border}`,
            color: project.badgeColor.text,
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Screen Frame holding image */}
      <div className="relative flex-1 w-full rounded-[14px] overflow-hidden bg-[var(--surface-3)] border border-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={isPriority}
          sizes="(max-width: 768px) 350px, 480px"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Atmospheric dark gradient scrim so the title is 100% legible */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)]/95 via-[var(--bg)]/35 to-transparent transition-opacity duration-300 group-hover:from-[var(--bg)]/90"
          aria-hidden
        />

        {/* Title directly on the card with action arrow */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-3.5 sm:p-4.5 flex items-center justify-between gap-3">
          <h3 className="font-sans text-base sm:text-lg font-bold text-white tracking-tight drop-shadow-md group-hover:text-white transition-colors">
            {project.title}
          </h3>

          <span className="size-8 sm:size-8.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:scale-105 transition-all duration-200 shrink-0">
            <svg className="size-3.5 sm:size-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function HeroProjectsCarousel() {
  // Duplicated arrays for a mathematically seamless 50% infinite translation
  const row1Duplicated = [...row1Projects, ...row1Projects];
  const row2Duplicated = [...row2Projects, ...row2Projects];

  return (
    <div className="relative w-full select-none flex flex-col items-center">
      {/* Self-contained rock-solid CSS animation keyframes */}
      <style>{`
        @keyframes hero-marquee-scroll-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes hero-marquee-scroll-right {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .hero-track-left {
          display: flex;
          width: max-content;
          animation: hero-marquee-scroll-left 25s linear infinite !important;
          will-change: transform;
        }
        .hero-track-right {
          display: flex;
          width: max-content;
          animation: hero-marquee-scroll-right 25s linear infinite !important;
          will-change: transform;
        }
        .hero-track-left:hover,
        .hero-track-right:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* 2-Row Masonry Continuous Moving Carousel */}
      <div className="relative w-full flex flex-col gap-4 sm:gap-5">
        {/* Row 1: Continuously Moving Left (Wide -> Standard -> Wide -> Standard) */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
          <div className="hero-track-left flex gap-4 sm:gap-5 py-1">
            {row1Duplicated.map((project, idx) => (
              <ProjectCard key={`row1-${project.id}-${idx}`} project={project} isPriority={idx < 2} />
            ))}
          </div>
        </div>

        {/* Row 2: Continuously Moving Right (Standard -> Wide -> Standard -> Wide) */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
          <div className="hero-track-right flex gap-4 sm:gap-5 py-1">
            {row2Duplicated.map((project, idx) => (
              <ProjectCard key={`row2-${project.id}-${idx}`} project={project} isPriority={idx < 2} />
            ))}
          </div>
        </div>
      </div>

      {/* Prominent "View All Projects" Studio Button */}
      <div className="mt-8 sm:mt-10 flex items-center justify-center z-20">
        <Link
          href="/work"
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white font-sans font-semibold text-sm sm:text-[15px] tracking-wide backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.06)] hover:border-white/40 cursor-pointer"
        >
          <span>View All Projects</span>
          <svg
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

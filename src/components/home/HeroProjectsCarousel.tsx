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
}

// 4 placeholder images uploaded by the user
const placeholder1 = "/placeholders/placeholder-1.png";
const placeholder2 = "/placeholders/placeholder-2.png";
const placeholder3 = "/placeholders/placeholder-3.png";
const placeholder4 = "/placeholders/placeholder-4.png";

// Row 1: Alternating Wide -> Standard -> Wide -> Standard
export const row1Projects: ProjectCardItem[] = [
  { id: "p1", title: "Title 1", slug: "project-one", image: placeholder1, isWide: true },
  { id: "p2", title: "Title 2", slug: "project-two", image: placeholder2, isWide: false },
  { id: "p3", title: "Title 3", slug: "project-three", image: placeholder3, isWide: true },
  { id: "p4", title: "Title 4", slug: "project-four", image: placeholder4, isWide: false },
];

// Row 2: Staggered Standard -> Wide -> Standard -> Wide
export const row2Projects: ProjectCardItem[] = [
  { id: "p5", title: "Title 5", slug: "project-five", image: placeholder1, isWide: false },
  { id: "p6", title: "Title 6", slug: "project-six", image: placeholder2, isWide: true },
  { id: "p7", title: "Title 7", slug: "project-one", image: placeholder3, isWide: false },
  { id: "p8", title: "Title 8", slug: "project-two", image: placeholder4, isWide: true },
];

function ProjectCard({ project }: { project: ProjectCardItem }) {
  const cardWidth = project.isWide
    ? "w-[380px] sm:w-[440px] md:w-[480px]"
    : "w-[280px] sm:w-[320px] md:w-[350px]";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative flex flex-col justify-end h-[300px] sm:h-[320px] ${cardWidth} rounded-2xl border border-white/12 bg-[#0c0f1c] hover:border-white/30 overflow-hidden cursor-pointer shrink-0 select-none transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,255,255,0.08)] hover:-translate-y-1`}
    >
      {/* Background Image filling full container width & height */}
      <div className="absolute inset-0 w-full h-full bg-[#111425] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 350px, 480px"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Atmospheric dark gradient scrim so the title is 100% legible */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/90"
        aria-hidden
      />

      {/* Top subtle highlight line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-opacity duration-300"
        aria-hidden
      />

      {/* Title directly on the card with action arrow */}
      <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between gap-3">
        <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-md group-hover:text-white transition-colors">
          {project.title}
        </h3>

        <span className="size-9 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:scale-105 transition-all duration-200 shrink-0">
          <svg className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </span>
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
              <ProjectCard key={`row1-${project.id}-${idx}`} project={project} />
            ))}
          </div>
        </div>

        {/* Row 2: Continuously Moving Right (Standard -> Wide -> Standard -> Wide) */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
          <div className="hero-track-right flex gap-4 sm:gap-5 py-1">
            {row2Duplicated.map((project, idx) => (
              <ProjectCard key={`row2-${project.id}-${idx}`} project={project} />
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

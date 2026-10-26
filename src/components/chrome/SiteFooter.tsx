"use client";

import Link from "next/link";
import { footerServices, footerStudio, site } from "@/content/site";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/TextHoverEffect";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden px-(--gutter-m) pt-10 pb-16 md:px-(--gutter-d) md:pt-14 md:pb-24 border-t border-white/5">
      <FooterBackgroundGradient />

      <div className="relative z-10 mx-auto max-w-(--container)">
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-[1.5fr_1fr_1.1fr_1fr] md:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-[380px] font-serif text-[24px] leading-[28px] sm:text-[28px] sm:leading-[32px] md:text-[32px] md:leading-[36px] text-slate-100">
              Next-gen problems, <em className="acc">next-level solutions.</em>
            </p>
          </div>

          {/* Navigation / Studio Sections */}
          <div>
            <div className="mono mb-3 text-xs uppercase tracking-wider text-slate-400 font-semibold">Studio</div>
            <ul className="grid gap-2 text-sm text-slate-300">
              {footerStudio.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <div className="mono mb-3 text-xs uppercase tracking-wider text-slate-400 font-semibold">Capabilities</div>
            <ul className="grid gap-2 text-sm text-slate-300">
              {footerServices.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <div className="mono mb-3 text-xs uppercase tracking-wider text-slate-400 font-semibold">Contact</div>
            <ul className="grid gap-2 text-sm text-slate-300">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.whatsapp} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Icon name="whatsapp" size={14} className="text-emerald-400 shrink-0" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li className="text-slate-400">{site.location}</li>
              <li className="text-slate-500 text-xs">Available worldwide</li>
            </ul>
          </div>
        </div>

        {/* Divider with Socials & Copyright (matching reference) */}
        <div className="mt-8 md:mt-12 flex flex-col-reverse items-start gap-4 border-t border-white/10 pt-5 text-xs sm:text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all"
              >
                <Icon name={s.icon as IconName} size={16} />
              </a>
            ))}
          </div>
          <span>© 2026 XenZolve. All rights reserved.</span>
        </div>

        {/* Giant Outlined Brand Display Wordmark: edge-to-edge width covering footer section */}
        <div className="mt-6 md:mt-8 w-full h-32 sm:h-44 md:h-56 lg:h-64 flex items-center justify-center">
          <TextHoverEffect className="w-full h-full" />
        </div>
      </div>
    </footer>
  );
}

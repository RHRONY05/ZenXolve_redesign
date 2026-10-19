import Link from "next/link";
import { footerServices, footerStudio, site } from "@/content/site";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

export function SiteFooter() {
  return (
    <footer className="px-(--gutter-m) pt-16 pb-7 md:px-(--gutter-d) md:pt-24 md:pb-8">
      <div className="mx-auto max-w-(--container)">
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-[22px] max-w-[460px] font-serif text-[34px] leading-[38px] md:text-[44px] md:leading-12">
              Next-gen problems, <em className="acc">next-level solutions.</em>
            </p>
          </div>
          <div>
            <div className="mono mb-4 text-ink-3">Studio</div>
            <ul className="grid gap-[10px] text-[15px] text-ink-2">
              {footerStudio.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mono mb-4 text-ink-3">Services</div>
            <ul className="grid gap-[10px] text-[15px] text-ink-2">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link href="/services">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mono mb-4 text-ink-3">Contact</div>
            <ul className="grid gap-[10px] text-[15px] text-ink-2">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.whatsapp}>{site.phone}</a>
              </li>
              <li>{site.location}</li>
              <li>Available worldwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col-reverse items-start gap-[18px] border-t border-line pt-6 text-sm text-ink-3 md:mt-[88px] md:flex-row md:items-center md:justify-between">
          <span>© 2026 XenZolve. All rights reserved.</span>
          <div className="flex gap-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-full border border-line text-ink-2"
              >
                <Icon name={s.icon as IconName} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

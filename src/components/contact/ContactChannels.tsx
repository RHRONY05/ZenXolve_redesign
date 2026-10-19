import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { contactChannels } from "@/content/contact";

export function ContactChannels() {
  return (
    <div>
      <div className="grid gap-3 mb-6 md:mb-0">
        {contactChannels.map((channel) => {
          const content = (
            <>
              <span
                className={`w-12 h-12 rounded-[14px] grid place-items-center shrink-0 ${
                  channel.isWhatsApp
                    ? "bg-[var(--success-soft)] text-[var(--success)]"
                    : "bg-[var(--surface-2)] text-[var(--ink)]"
                }`}
              >
                <Icon name={channel.icon} className="w-[22px] h-[22px]" />
              </span>
              <span className="flex-1 min-w-0">
                <b className="block font-medium text-[17px] text-[var(--ink)]">{channel.title}</b>
                <span className="text-sm text-[var(--ink-3)] block truncate">
                  <span className="md:hidden">{channel.mobileDetail || channel.detail}</span>
                  <span className="hidden md:inline">{channel.detail}</span>
                </span>
              </span>
              {channel.href && (
                <Icon name="arrow-up-right" className="w-5 h-5 text-[var(--ink-3)] shrink-0 ml-auto" />
              )}
            </>
          );

          const className =
            "flex items-center gap-4 p-5 rounded-[var(--radius-lg)] bg-[var(--surface)] border border-[var(--line)] transition-colors hover:border-[var(--line-strong)]";

          if (channel.id === "location") {
            return (
              <div key={channel.id} className={`${className} hidden md:flex`}>
                {content}
              </div>
            );
          }

          if (channel.href) {
            return (
              <Link
                key={channel.id}
                href={channel.href}
                target={channel.isWhatsApp ? "_blank" : undefined}
                rel={channel.isWhatsApp ? "noreferrer" : undefined}
                className={className}
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={channel.id} className={className}>
              {content}
            </div>
          );
        })}
      </div>

      <div className="hidden md:block">
        <div className="font-mono text-xs text-[var(--ink-3)] uppercase tracking-wider mt-9 mb-3">
          Follow us
        </div>
        <div className="flex gap-2">
          {site.socials
            .filter((s) => s.label !== "WhatsApp")
            .map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--ink-2)] hover:text-[var(--ink)] hover:border-[var(--line-strong)] transition-colors"
              >
                <Icon name={s.icon as IconName} className="w-4 h-4" />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

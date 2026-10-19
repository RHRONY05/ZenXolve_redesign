import { faq } from "@/content/faq";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

/** Native <details>; the first item is open. */
export function Faq() {
  return (
    <div className="grid grid-cols-1 gap-9 lg:grid-cols-[420px_1fr] lg:gap-20">
      <div className="reveal">
        <div className="mono mb-3.5 flex gap-[14px] text-ink-3 md:mb-5">
          <span>08</span>
          <span>FAQ</span>
        </div>
        <h2 className="font-serif text-[46px] leading-[46px] font-normal tracking-display md:text-display-lg md:leading-(--text-display-lg--line-height)">
          Got <em className="acc">questions?</em>
        </h2>
        <p className="mt-5 hidden text-lg leading-[29px] text-ink-2 md:block">
          Still unsure about something? Ask us on WhatsApp or email {site.email}.
        </p>
      </div>
      <div className="faq border-t border-line">
        {faq.map((item, i) => (
          <details key={item.q} open={i === 0} className="border-b border-line">
            <summary className="flex cursor-pointer items-center gap-3 py-5 text-[17px] leading-6 font-medium md:gap-5 md:py-6 md:text-xl md:leading-7">
              <span className="mono hidden w-7 text-ink-3 md:block">{String(i + 1).padStart(2, "0")}</span>
              {item.q}
              <Icon
                name="plus"
                size={22}
                className="ml-auto shrink-0 text-ink-3 transition-transform duration-(--dur) ease-(--ease)"
              />
            </summary>
            <p className="-mt-1 mb-[22px] max-w-[680px] text-ink-2 md:-mt-1.5 md:mb-[26px] md:ml-12">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

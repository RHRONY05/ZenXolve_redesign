import { Icon } from "@/components/ui/Icon";
import { LinkArrow } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import type { Service } from "@/content/services";

export function ServiceDetail({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const indexStr = String(index).padStart(2, "0");

  return (
    <article
      id={service.slug}
      className="svc-detail grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-4 md:gap-10 py-10 md:py-14 border-t border-line scroll-mt-24"
    >
      <div className="mono font-mono text-xs tracking-(--tracking-mono) uppercase text-ink-3">
        {indexStr} · {service.group}
      </div>
      <div>
        <h3 className="font-serif font-normal text-[40px] leading-[42px] md:text-[56px] md:leading-[58px] mb-4 text-ink">
          {service.title}
        </h3>
        <p className="lead text-lg text-ink-2 leading-[29px] m-0">
          {service.body}
        </p>
        <div className="facts flex flex-wrap gap-8 mt-7">
          <div className="mono font-mono text-xs tracking-(--tracking-mono) uppercase text-ink-3">
            Typical timeline
            <Placeholder
              as="b"
              active={service.timelinePlaceholder}
              className="block font-sans font-medium text-[15px] text-ink mt-1 normal-case tracking-normal"
            >
              {service.timeline}
            </Placeholder>
          </div>
          <div className="mono font-mono text-xs tracking-(--tracking-mono) uppercase text-ink-3">
            Tools we use
            <b className="block font-sans font-medium text-[15px] text-ink mt-1 normal-case tracking-normal">
              {service.tools}
            </b>
          </div>
        </div>
        <LinkArrow href={`/contact?service=${service.serviceQuery}`} className="mt-6">
          Start a project like this
        </LinkArrow>
      </div>
      <ul className="tick list-none p-0 m-0 grid gap-0">
        {service.tags.map((tag) => (
          <li
            key={tag}
            className="flex items-center gap-3 py-3.5 border-b border-line text-base text-ink"
          >
            <Icon name="check" size={18} className="text-accent shrink-0" />
            <span>{tag}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

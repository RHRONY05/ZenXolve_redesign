import { steps } from "@/content/steps";

/** Horizontal on desktop (dot on a 1 px ink line), vertical timeline on mobile. */
export function ProcessSteps() {
  return (
    <ol className="ml-1 grid grid-cols-1 border-l border-ink md:ml-0 md:grid-cols-2 md:border-t md:border-l-0 lgx:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="relative pb-8 pl-6 md:pt-[26px] md:pr-7 md:pb-8 md:pl-0">
          <span
            aria-hidden
            className="absolute top-1 -left-[5px] size-[9px] rounded-full bg-ink md:-top-[5px] md:left-0"
          />
          <span className="mono mb-2 block text-ink-3 md:mt-[14px] md:mb-3">Step {String(i + 1).padStart(2, "0")}</span>
          <h4 className="mb-3 font-serif text-[28px] leading-8 font-normal md:text-[34px] md:leading-[38px]">{s.title}</h4>
          <p className="text-[15px] leading-6 text-ink-2">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

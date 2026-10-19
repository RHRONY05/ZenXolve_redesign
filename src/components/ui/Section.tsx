/**
 * Page section. `top` sets the desktop top padding in the design:
 * "first" = 120 px (after the hero), "flow" = 40 px (follows another section), "full" = the full section gap (140 px).
 * On mobile only the first section has top padding; the rest sit directly under the previous section's bottom padding.
 */
const tops = {
  first: "pt-20 md:pt-[120px]",
  flow: "pt-0 md:pt-10",
  full: "pt-0 md:pt-(--section-y)",
};

export function Section({
  id,
  top = "flow",
  className = "",
  children,
}: {
  id?: string;
  top?: keyof typeof tops;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`px-(--gutter-m) pb-(--section-y-m) md:px-(--gutter-d) md:pb-(--section-y) ${tops[top]} ${className}`}
    >
      <div className="mx-auto max-w-(--container)">{children}</div>
    </section>
  );
}

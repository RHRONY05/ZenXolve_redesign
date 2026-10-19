/** Copied from the live site; the names look like stock. Replace with real, named clients. */
export type Testimonial = {
  quote: string;
  short: string;
  name: string;
  role: string;
  initials: string;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote: "The e-commerce platform they built increased our conversions by 40%. Professional, reliable, and highly skilled team.",
    short: "The e-commerce platform they built increased our conversions by 40%.",
    name: "Michael Chen",
    role: "Founder, E-Commerce Hub",
    initials: "MC",
    placeholder: true,
  },
  {
    quote: "XenZolve transformed our outdated systems into a modern, efficient platform.",
    short: "XenZolve transformed our outdated systems into a modern, efficient platform.",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    initials: "SJ",
    placeholder: true,
  },
  {
    quote: "XenZolve is now our go-to partner for all development needs. They truly understand business requirements.",
    short: "XenZolve is now our go-to partner for all development needs.",
    name: "Emily Rodriguez",
    role: "CTO, HealthTech Solutions",
    initials: "ER",
    placeholder: true,
  },
];

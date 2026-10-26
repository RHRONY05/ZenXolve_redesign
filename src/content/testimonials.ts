export type Testimonial = {
  quote: string;
  short: string;
  name: string;
  role: string;
  initials: string;
  avatar: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote: "The e-commerce platform they built increased our conversions by 40%. Professional, reliable, and exceptionally skilled team.",
    short: "Increased conversions by 40%. Professional and reliable.",
    name: "Michael Chen",
    role: "Founder, E-Commerce Hub",
    initials: "MC",
    avatar: "/testimonials/avatar-1.webp",
  },
  {
    quote: "XenZolve transformed our legacy architecture into a high-performance modern platform with zero downtime during migration.",
    short: "Transformed legacy architecture with zero downtime.",
    name: "David Vance",
    role: "Co-Founder & CTO, TechStart Labs",
    initials: "DV",
    avatar: "/testimonials/avatar-2.webp",
  },
  {
    quote: "XenZolve is now our primary partner for all engineering and automation needs. They truly understand high-stakes business requirements.",
    short: "Our primary partner for engineering and automation.",
    name: "Emily Rodriguez",
    role: "VP of Engineering, HealthTech Solutions",
    initials: "ER",
    avatar: "/testimonials/avatar-3.webp",
  },
  {
    quote: "Sharing tea with a fascinating stranger is one of life's true delights. XenZolve brought that same harmony and clarity to our entire digital presence.",
    short: "Brought harmony and clarity to our entire digital presence.",
    name: "Master Iroh",
    role: "Founder, Jasmine Dragon Co.",
    initials: "MI",
    avatar: "/testimonials/avatar-4.webp",
  },
];

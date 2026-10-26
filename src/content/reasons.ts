export type ReasonItem = {
  title: string;
  body: string;
  iconFile: string;
  tint: string;
  accent: string;
};

export const reasons: ReasonItem[] = [
  {
    title: "Result-Driven Approach",
    body: "Every project focuses on delivering measurable results that directly impact your bottom line and business growth.",
    iconFile: "target.png",
    tint: "bg-sky-500/[0.035] hover:bg-sky-500/[0.07]",
    accent: "text-sky-600",
  },
  {
    title: "Fast & Reliable Delivery",
    body: "Agile methodology ensures quick turnaround without compromising on quality. We meet deadlines, every time.",
    iconFile: "speed.png",
    tint: "bg-violet-500/[0.035] hover:bg-violet-500/[0.07]",
    accent: "text-violet-600",
  },
  {
    title: "Secure & Scalable",
    body: "Enterprise-grade security and scalable architecture you can trust for your business-critical applications.",
    iconFile: "secure.png",
    tint: "bg-blue-500/[0.035] hover:bg-blue-500/[0.07]",
    accent: "text-blue-600",
  },
  {
    title: "Innovative Solutions",
    body: "We stay ahead of technology trends to deliver future-proof solutions that give you a competitive edge.",
    iconFile: "innovative.png",
    tint: "bg-emerald-500/[0.035] hover:bg-emerald-500/[0.07]",
    accent: "text-emerald-600",
  },
  {
    title: "Dedicated Support",
    body: "Ongoing support and maintenance to ensure your systems run smoothly. We are your long-term technology partner.",
    iconFile: "support.png",
    tint: "bg-teal-500/[0.035] hover:bg-teal-500/[0.07]",
    accent: "text-teal-600",
  },
  {
    title: "Transparent Pricing",
    body: "Clear, upfront pricing with no hidden costs. You know exactly what you are paying for from day one.",
    iconFile: "pricing.png",
    tint: "bg-indigo-500/[0.035] hover:bg-indigo-500/[0.07]",
    accent: "text-indigo-600",
  },
];

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
    body: "Every sprint is engineered to deliver measurable business impact, conversion, and ROI.",
    iconFile: "target.png",
    tint: "bg-sky-500/[0.035] hover:bg-sky-500/[0.07]",
    accent: "text-sky-600",
  },
  {
    title: "Fast & Reliable Delivery",
    body: "Predictable sprint cycles with weekly visible progress and zero missed deadlines.",
    iconFile: "speed.png",
    tint: "bg-violet-500/[0.035] hover:bg-violet-500/[0.07]",
    accent: "text-violet-600",
  },
  {
    title: "Secure & Scalable",
    body: "Enterprise-grade security, automated backups, and scalable cloud architecture.",
    iconFile: "secure.png",
    tint: "bg-blue-500/[0.035] hover:bg-blue-500/[0.07]",
    accent: "text-blue-600",
  },
  {
    title: "Modern Engineering",
    body: "Future-proof Next.js, Flutter, and AI models built with zero legacy tech debt.",
    iconFile: "innovative.png",
    tint: "bg-emerald-500/[0.035] hover:bg-emerald-500/[0.07]",
    accent: "text-emerald-600",
  },
  {
    title: "Dedicated Direct SLA",
    body: "Direct WhatsApp and Telegram access to the engineers who wrote your code.",
    iconFile: "support.png",
    tint: "bg-teal-500/[0.035] hover:bg-teal-500/[0.07]",
    accent: "text-teal-600",
  },
  {
    title: "Transparent Pricing",
    body: "Fixed milestones and clear deliverables with zero surprise invoices from day one.",
    iconFile: "pricing.png",
    tint: "bg-indigo-500/[0.035] hover:bg-indigo-500/[0.07]",
    accent: "text-indigo-600",
  },
];

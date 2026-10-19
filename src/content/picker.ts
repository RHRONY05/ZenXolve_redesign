export type PickKey = "agent" | "store" | "erp";

/** Timelines come from the FAQ answer (simple site 2-4 weeks, complex 2-4 months). */
export const picks: {
  key: PickKey;
  title: string;
  desc: string;
  liveLabel: string;
  liveLabelShort: string;
  time: string;
  stack: string;
  service: "ai" | "web" | "systems";
}[] = [
  {
    key: "agent",
    title: "an AI sales agent",
    desc: "Answers customers on WhatsApp, takes orders, updates your CRM",
    liveLabel: "Live preview · WhatsApp sales agent",
    liveLabelShort: "Live preview · WhatsApp agent",
    time: "2–4 months",
    stack: "OpenAI · n8n · WhatsApp API",
    service: "ai",
  },
  {
    key: "store",
    title: "an online store",
    desc: "Catalogue, checkout, bKash and card payments, admin",
    liveLabel: "Live preview · E-commerce platform",
    liveLabelShort: "Live preview · E-commerce",
    time: "2–4 weeks",
    stack: "Next.js · Supabase · bKash",
    service: "web",
  },
  {
    key: "erp",
    title: "a business system",
    desc: "Orders, stock, production and reports in one place",
    liveLabel: "Live preview · Business management system",
    liveLabelShort: "Live preview · Business system",
    time: "2–4 months",
    stack: "React · Node.js · PostgreSQL",
    service: "systems",
  },
];

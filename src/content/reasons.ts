import type { IconName } from "@/components/ui/Icon";

export type ReasonItem = {
  icon: IconName;
  headline: string;
  subtext: string;
};

export const reasons: ReasonItem[] = [
  {
    icon: "layers",
    headline: "One Team, Zero Handoffs",
    subtext: "The team that designs your system is the exact team that writes your code and automates your workflows — no lost context, no finger-pointing, and no third-party friction.",
  },
  {
    icon: "message-circle",
    headline: "Direct Engineer Access",
    subtext: "Direct WhatsApp and Telegram channels with senior engineers actually building your product — no account manager gatekeepers, no ticket queues.",
  },
  {
    icon: "zap",
    headline: "Engineered for Autonomous Scale",
    subtext: "Type-safe Next.js architecture paired with background n8n pipelines so your business operations run reliably while you sleep.",
  },
  {
    icon: "layout-dashboard",
    headline: "Weekly Demos, Zero Black Boxes",
    subtext: "Watch your system evolve every 7 days through live staging links and async Loom walkthroughs — you always know what's built and what comes next.",
  },
  {
    icon: "receipt-text",
    headline: "Fixed Scopes, Transparent Pricing",
    subtext: "Milestone-based roadmaps with guaranteed deliverables — zero surprise hourly invoices or hidden maintenance charges.",
  },
  {
    icon: "shield-check",
    headline: "We Don't Vanish After Launch",
    subtext: "We monitor real-time uptime, optimize Core Web Vitals, and continuously scale features alongside you as your revenue expands.",
  },
];

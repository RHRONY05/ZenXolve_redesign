export type StepTool = {
  name: string;
  iconFile: string;
};

export type StepHub = {
  type: "brain" | "pen" | "cpu" | "globe";
  title: string;
  badge: string;
  glowColor: string;
};

export type StepDeliverable = {
  highlight: string;
  detail: string;
};

export type StepItem = {
  step: string;
  tab: string;
  headline: string;
  body: string;
  deliverables: StepDeliverable[];
  hub: StepHub;
  tools: StepTool[];
  theme: {
    bg: string;
    text: string;
    subtext: string;
    border: string;
    tagBg: string;
    tagText: string;
    tabAccent: string;
    lineColor: string;
    bulletColor: string;
    hubBg: string;
  };
};

export const stepsData: StepItem[] = [
  {
    step: "01",
    tab: "Discovery & Strategy",
    headline: "Discovery & Architecture Blueprint",
    body: "We map business requirements, data schemas, and technical architecture before writing a single line of code.",
    deliverables: [
      {
        highlight: "Product Specs (PRD)",
        detail: "System architecture & user flows",
      },
      {
        highlight: "Database Schema",
        detail: "Entity relationships & API contracts",
      },
      {
        highlight: "Scope & Milestone Matrix",
        detail: "Clear weekly sprint roadmap",
      },
      {
        highlight: "Asynchronous Hub",
        detail: "Weekly Loom demos & Notion updates",
      },
    ],
    hub: {
      type: "brain",
      title: "Strategic AI Core",
      badge: "STRATEGY CORE",
      glowColor: "rgba(14, 165, 233, 0.45)",
    },
    tools: [
      { name: "Notion", iconFile: "notion.png" },
      { name: "Claude", iconFile: "claude.svg" },
      { name: "ChatGPT", iconFile: "chatgpt.png" },
      { name: "Excalidraw", iconFile: "excalidraw.png" },
      { name: "Loom", iconFile: "loom.svg" },
    ],
    theme: {
      bg: "bg-[#7fd0f7]",
      text: "text-[#081a30]",
      subtext: "text-[#183659]",
      border: "border-[#60bdec]",
      tagBg: "bg-[#081a30]/10",
      tagText: "text-[#081a30]",
      tabAccent: "bg-[#081a30]",
      lineColor: "#0284c7",
      bulletColor: "text-[#0284c7]",
      hubBg: "bg-sky-500",
    },
  },
  {
    step: "02",
    tab: "Design & Prototyping",
    headline: "Design Systems & Interactive Prototypes",
    body: "Pixel-perfect responsive interfaces and complete tokenized design systems tested with real interactions.",
    deliverables: [
      {
        highlight: "Figma Design System",
        detail: "Tokenized typography & components",
      },
      {
        highlight: "Interactive Prototypes",
        detail: "Clickable flows for rapid validation",
      },
      {
        highlight: "Multi-Device Layouts",
        detail: "Optimized from mobile to desktop",
      },
      {
        highlight: "1:1 Code Handoff",
        detail: "Zero visual fidelity loss in build",
      },
    ],
    hub: {
      type: "pen",
      title: "Design System Core",
      badge: "DESIGN CORE",
      glowColor: "rgba(16, 185, 129, 0.45)",
    },
    tools: [
      { name: "Figma", iconFile: "figma.png" },
      { name: "Stitch", iconFile: "stitch.png" },
      { name: "Canva", iconFile: "canva.png" },
      { name: "Framer", iconFile: "framer.svg" },
    ],
    theme: {
      bg: "bg-[#9ef0c2]",
      text: "text-[#062916]",
      subtext: "text-[#11492a]",
      border: "border-[#7ee0ab]",
      tagBg: "bg-[#062916]/10",
      tagText: "text-[#062916]",
      tabAccent: "bg-[#062916]",
      lineColor: "#059669",
      bulletColor: "text-[#059669]",
      hubBg: "bg-emerald-500",
    },
  },
  {
    step: "03",
    tab: "Engineering & Automation",
    headline: "Production Engineering & Automation",
    body: "Modern type-safe web and mobile apps, resilient SQL databases, and automated back-office pipelines.",
    deliverables: [
      {
        highlight: "Next.js & TypeScript",
        detail: "Sub-second speed & static type safety",
      },
      {
        highlight: "Postgres Database",
        detail: "Relational schemas, vectors & auth",
      },
      {
        highlight: "Workflow Automation",
        detail: "n8n pipelines replacing manual entry",
      },
      {
        highlight: "CI/CD Quality Gates",
        detail: "Automated testing & GitHub Actions",
      },
    ],
    hub: {
      type: "cpu",
      title: "Full-Stack Engine",
      badge: "ENGINE CORE",
      glowColor: "rgba(139, 92, 246, 0.45)",
    },
    tools: [
      { name: "Next.js", iconFile: "nextjs.png" },
      { name: "TypeScript", iconFile: "typescript.png" },
      { name: "Supabase", iconFile: "supabase.png" },
      { name: "n8n", iconFile: "n8n.svg" },
      { name: "GitHub", iconFile: "github.png" },
    ],
    theme: {
      bg: "bg-[#c6bafc]",
      text: "text-[#170e33]",
      subtext: "text-[#2e1d5e]",
      border: "border-[#b09ff8]",
      tagBg: "bg-[#170e33]/10",
      tagText: "text-[#170e33]",
      tabAccent: "bg-[#170e33]",
      lineColor: "#7c3aed",
      bulletColor: "text-[#7c3aed]",
      hubBg: "bg-purple-600",
    },
  },
  {
    step: "04",
    tab: "Deployment & Support",
    headline: "Zero-Downtime Deployment & SLA",
    body: "Flawless edge rollout with global CDN caching and 24/7 telemetry monitoring alongside you.",
    deliverables: [
      {
        highlight: "Global Edge CDN",
        detail: "High-speed caching on Vercel & Cloudflare",
      },
      {
        highlight: "Docker Workloads",
        detail: "Isolated environments & health checks",
      },
      {
        highlight: "Real-Time Sentry Alerts",
        detail: "24/7 error & Core Web Vitals telemetry",
      },
      {
        highlight: "Dedicated Direct SLA",
        detail: "Priority Telegram & WhatsApp support",
      },
    ],
    hub: {
      type: "globe",
      title: "Global Edge Cloud",
      badge: "EDGE CORE",
      glowColor: "rgba(249, 115, 22, 0.45)",
    },
    tools: [
      { name: "Vercel", iconFile: "vercel.svg" },
      { name: "Cloudflare", iconFile: "cloudflare.png" },
      { name: "Docker", iconFile: "docker.png" },
      { name: "Sentry", iconFile: "sentry.svg" },
      { name: "Telegram", iconFile: "telegram.png" },
    ],
    theme: {
      bg: "bg-[#fed093]",
      text: "text-[#2c1303]",
      subtext: "text-[#542a0b]",
      border: "border-[#fbc173]",
      tagBg: "bg-[#2c1303]/10",
      tagText: "text-[#2c1303]",
      tabAccent: "bg-[#2c1303]",
      lineColor: "#ea580c",
      bulletColor: "text-[#ea580c]",
      hubBg: "bg-amber-600",
    },
  },
];

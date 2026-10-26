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

export type StepItem = {
  step: string;
  tab: string;
  headline: string;
  body: string;
  deliverables: string[];
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
    headline: "Understanding Your Vision, Mapping the Blueprint",
    body: "We dive deep into your business logic, user journeys, competitor landscape, and technical constraints before writing a single line of code. You get a transparent roadmap with clear milestones and weekly visibility.",
    deliverables: [
      "Product requirements document (PRD) detailing user personas and system architecture",
      "Technical scoping, database schema design, and third-party API dependency mapping",
      "Competitive analysis and feature prioritization matrix aligned with commercial ROI",
      "Asynchronous Loom video updates and centralized Notion strategy hub with live visibility",
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
      bulletColor: "text-[#0369a1]",
      hubBg: "bg-sky-500",
    },
  },
  {
    step: "02",
    tab: "Design & Prototyping",
    headline: "High-Converting Interfaces & Living Design Systems",
    body: "User-centered design that turns visitors into active customers. We craft pixel-perfect wireframes, responsive component libraries, and interactive prototypes with real micro-interactions.",
    deliverables: [
      "Pixel-perfect Figma design systems with tokens, typography scales, and state variants",
      "Interactive clickable prototypes for real user validation and executive sign-off",
      "Responsive layout specifications covering mobile, tablet, and widescreen viewports",
      "1:1 engineering handoff documentation ensuring zero visual fidelity loss in development",
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
      bulletColor: "text-[#047857]",
      hubBg: "bg-emerald-500",
    },
  },
  {
    step: "03",
    tab: "Engineering & Automation",
    headline: "Production Code Meets Autonomous AI Workflows",
    body: "Engineered from day one for speed, security, and scalability. Modern type-safe frontends, resilient backend APIs, and automated back-office pipelines wired together with zero technical debt.",
    deliverables: [
      "Production Next.js & TypeScript frontend built for sub-second speeds and strict type safety",
      "Scalable PostgreSQL database architecture with vector search and secure authentication",
      "Autonomous n8n & webhook pipelines to automate manual back-office tasks",
      "Automated continuous integration (CI/CD) pipelines with linting and unit test coverage",
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
      bulletColor: "text-[#6d28d9]",
      hubBg: "bg-purple-600",
    },
  },
  {
    step: "04",
    tab: "Deployment & Support",
    headline: "Zero-Downtime Launch, Edge Speed & 24/7 Monitoring",
    body: "Flawless production rollout with edge CDN caching, global database distribution, and continuous performance telemetry. We don't vanish after launch—we monitor, optimize, and scale it alongside you.",
    deliverables: [
      "Worldwide edge deployment on Vercel and Cloudflare with global low-latency CDN routing",
      "Containerized backend workloads on Docker with automated health checks and zero downtime",
      "Real-time application telemetry, Sentry error alerts, and Core Web Vitals monitoring",
      "Direct client support channels on Telegram and WhatsApp with ongoing iteration",
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
      bulletColor: "text-[#c2410c]",
      hubBg: "bg-amber-600",
    },
  },
];

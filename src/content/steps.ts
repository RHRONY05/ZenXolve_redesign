export type StepTool = {
  name: string;
  role: string;
  icon: string;
};

export type StepMetric = {
  label: string;
  value: string;
};

export type StepItem = {
  step: string;
  tab: string;
  headline: string;
  body: string;
  metrics: StepMetric[];
  tools: StepTool[];
  theme: {
    bg: string;
    text: string;
    subtext: string;
    border: string;
    tagBg: string;
    tagText: string;
    toolCardBg: string;
    toolCardBorder: string;
    toolNameColor: string;
    toolRoleColor: string;
    tabAccent: string;
  };
};

export const stepsData: StepItem[] = [
  {
    step: "01",
    tab: "Discovery & Strategy",
    headline: "Understanding Your Vision, Mapping the Blueprint",
    body: "We dive deep into your business logic, user journeys, competitor landscape, and technical constraints before writing a single line of code. You get a transparent roadmap with clear milestones and weekly visibility.",
    metrics: [
      { label: "Deliverable", value: "PRD & System Blueprint" },
      { label: "Timeline", value: "Week 01 – Kickoff & Specs" },
      { label: "Visibility", value: "Async Loom & Notion Hub" },
      { label: "Focus", value: "Zero Guesswork Scoping" },
    ],
    tools: [
      { name: "Notion", role: "PRDs & Roadmaps", icon: "notion" },
      { name: "Claude", role: "Logic & Spec Synthesis", icon: "claude" },
      { name: "ChatGPT", role: "Persona & Scenario Modeling", icon: "chatgpt" },
      { name: "Excalidraw", role: "Logic Diagrams & Flows", icon: "excalidraw" },
      { name: "Loom", role: "Async Alignment Demos", icon: "loom" },
    ],
    theme: {
      bg: "bg-[#7fd0f7]",
      text: "text-[#081a30]",
      subtext: "text-[#183659]",
      border: "border-[#60bdec]",
      tagBg: "bg-[#081a30]/10",
      tagText: "text-[#081a30]",
      toolCardBg: "bg-white/85 hover:bg-white",
      toolCardBorder: "border-[#081a30]/15 hover:border-[#081a30]/35",
      toolNameColor: "text-[#081a30]",
      toolRoleColor: "text-[#234970]",
      tabAccent: "bg-[#081a30]",
    },
  },
  {
    step: "02",
    tab: "Design & Prototyping",
    headline: "High-Converting Interfaces & Living Design Systems",
    body: "User-centered design that turns visitors into active customers. We craft pixel-perfect wireframes, responsive component libraries, and interactive prototypes with real micro-interactions.",
    metrics: [
      { label: "Deliverable", value: "Complete Figma Design System" },
      { label: "Timeline", value: "Week 02 – Interactive Prototypes" },
      { label: "Components", value: "Tokens, Auto-layout & States" },
      { label: "Handoff", value: "1:1 Developer Alignment" },
    ],
    tools: [
      { name: "Figma", role: "Design Systems & UI Kit", icon: "figma" },
      { name: "Stitch", role: "Screen & Component Generation", icon: "stitch" },
      { name: "Canva", role: "Brand & Visual Collateral", icon: "canva" },
      { name: "Framer", role: "Interactive Micro-Prototypes", icon: "framer" },
    ],
    theme: {
      bg: "bg-[#9ef0c2]",
      text: "text-[#062916]",
      subtext: "text-[#11492a]",
      border: "border-[#7ee0ab]",
      tagBg: "bg-[#062916]/10",
      tagText: "text-[#062916]",
      toolCardBg: "bg-white/85 hover:bg-white",
      toolCardBorder: "border-[#062916]/15 hover:border-[#062916]/35",
      toolNameColor: "text-[#062916]",
      toolRoleColor: "text-[#175c35]",
      tabAccent: "bg-[#062916]",
    },
  },
  {
    step: "03",
    tab: "Engineering & Automation",
    headline: "Production Code Meets Autonomous AI Workflows",
    body: "Engineered from day one for speed, security, and scalability. Modern type-safe frontends, resilient backend APIs, and automated back-office pipelines wired together with zero technical debt.",
    metrics: [
      { label: "Architecture", value: "Strict TypeScript & Next.js" },
      { label: "Database", value: "PostgreSQL & Vector Search" },
      { label: "Automations", value: "n8n Autonomous Workflows" },
      { label: "Code Quality", value: "CI/CD & Unit Coverage" },
    ],
    tools: [
      { name: "Next.js", role: "High-Speed Web Framework", icon: "nextjs" },
      { name: "TypeScript", role: "Strict Static Type Safety", icon: "typescript" },
      { name: "Supabase", role: "PostgreSQL & Vector Auth", icon: "supabase" },
      { name: "n8n", role: "Autonomous Pipeline Automation", icon: "n8n" },
      { name: "GitHub", role: "CI/CD & Version Control", icon: "github" },
    ],
    theme: {
      bg: "bg-[#c6bafc]",
      text: "text-[#170e33]",
      subtext: "text-[#2e1d5e]",
      border: "border-[#b09ff8]",
      tagBg: "bg-[#170e33]/10",
      tagText: "text-[#170e33]",
      toolCardBg: "bg-white/85 hover:bg-white",
      toolCardBorder: "border-[#170e33]/15 hover:border-[#170e33]/35",
      toolNameColor: "text-[#170e33]",
      toolRoleColor: "text-[#3f287e]",
      tabAccent: "bg-[#170e33]",
    },
  },
  {
    step: "04",
    tab: "Deployment & Support",
    headline: "Zero-Downtime Launch, Edge Speed & 24/7 Monitoring",
    body: "Flawless production rollout with edge CDN caching, global database distribution, and continuous performance telemetry. We don't vanish after launch—we monitor, optimize, and scale it alongside you.",
    metrics: [
      { label: "Availability", value: "99.99% Edge Uptime" },
      { label: "Global Edge", value: "Global CDN & Low-Latency" },
      { label: "Telemetry", value: "Real-time Error Tracking" },
      { label: "Support", value: "Direct Telegram & WhatsApp" },
    ],
    tools: [
      { name: "Vercel", role: "Edge Deployment & Previews", icon: "vercel" },
      { name: "Cloudflare", role: "Global DNS & DDoS Shield", icon: "cloudflare" },
      { name: "Docker", role: "Containerized Workloads", icon: "docker" },
      { name: "Sentry", role: "Live Error & Health Telemetry", icon: "sentry" },
      { name: "Telegram", role: "24/7 Direct Client Support", icon: "telegram" },
    ],
    theme: {
      bg: "bg-[#fed093]",
      text: "text-[#2c1303]",
      subtext: "text-[#542a0b]",
      border: "border-[#fbc173]",
      tagBg: "bg-[#2c1303]/10",
      tagText: "text-[#2c1303]",
      toolCardBg: "bg-white/85 hover:bg-white",
      toolCardBorder: "border-[#2c1303]/15 hover:border-[#2c1303]/35",
      toolNameColor: "text-[#2c1303]",
      toolRoleColor: "text-[#69340e]",
      tabAccent: "bg-[#2c1303]",
    },
  },
];

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
    headline: "Understanding Your Vision, Mapping the Blueprint",
    body: "We dive deep into your business logic, user journeys, competitor landscape, and technical constraints before writing a single line of code. You get a transparent roadmap with clear milestones and weekly visibility.",
    deliverables: [
      {
        highlight: "Product Requirements Document (PRD)",
        detail: "with complete user personas and end-to-end system architecture specs",
      },
      {
        highlight: "Technical Scoping & Database Schema",
        detail: "covering data relationships, third-party APIs, and security constraints",
      },
      {
        highlight: "Competitive ROI & Feature Matrix",
        detail: "prioritizing high-impact features to eliminate scope creep and save budget",
      },
      {
        highlight: "Asynchronous Loom & Notion Hub",
        detail: "providing full stakeholder transparency and weekly progress demos",
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
    headline: "High-Converting Interfaces & Living Design Systems",
    body: "User-centered design that turns visitors into active customers. We craft pixel-perfect wireframes, responsive component libraries, and interactive prototypes with real micro-interactions.",
    deliverables: [
      {
        highlight: "Complete Figma Design System",
        detail: "with design tokens, responsive typography scales, and interactive states",
      },
      {
        highlight: "Clickable High-Fidelity Prototypes",
        detail: "for real user validation, usability testing, and stakeholder approval",
      },
      {
        highlight: "Multi-Device Layout Specifications",
        detail: "engineered pixel-for-pixel from mobile viewports to widescreen desktops",
      },
      {
        highlight: "1:1 Engineering Handoff Specs",
        detail: "guaranteeing zero visual fidelity loss during the frontend build",
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
    headline: "Production Code Meets Autonomous AI Workflows",
    body: "Engineered from day one for speed, security, and scalability. Modern type-safe frontends, resilient backend APIs, and automated back-office pipelines wired together with zero technical debt.",
    deliverables: [
      {
        highlight: "Next.js & TypeScript Architecture",
        detail: "built for sub-second page loads, zero CLS, and strict static type safety",
      },
      {
        highlight: "PostgreSQL & Supabase Database",
        detail: "featuring relational integrity, vector search, and secure auth flows",
      },
      {
        highlight: "Autonomous n8n Workflow Pipelines",
        detail: "connecting webhooks and AI automations to eliminate manual data entry",
      },
      {
        highlight: "Automated CI/CD & Testing Suite",
        detail: "with GitHub Actions enforcing linting, build validation, and code review",
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
    headline: "Zero-Downtime Launch, Edge Speed & 24/7 Monitoring",
    body: "Flawless production rollout with edge CDN caching, global database distribution, and continuous performance telemetry. We don't vanish after launch—we monitor, optimize, and scale it alongside you.",
    deliverables: [
      {
        highlight: "Global Edge CDN Deployment",
        detail: "on Vercel & Cloudflare with instant cache invalidation and low latency",
      },
      {
        highlight: "Docker Containerized Workloads",
        detail: "with isolated environments, health checks, and zero-downtime releases",
      },
      {
        highlight: "Real-Time Sentry Error Telemetry",
        detail: "and automated performance alerts tracking Core Web Vitals 24/7",
      },
      {
        highlight: "Dedicated Support Channels",
        detail: "on Telegram and WhatsApp with continuous iteration and direct access",
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

export type Service = {
  slug: string;
  title: string;
  group: "Design" | "Build" | "Automate";
  body: string;
  tags: string[];
  timeline: string;
  timelinePlaceholder?: boolean;
  tools: string;
  serviceQuery: string;
};

export const serviceGroups = [
  { key: "Design", letter: "A", count: "01" },
  { key: "Build", letter: "B", count: "03" },
  { key: "Automate", letter: "C", count: "02" },
] as const;

export const services: Service[] = [
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    group: "Design",
    body: "User-centered design that converts visitors into customers. Beautiful, intuitive interfaces backed by research and industry best practices.",
    tags: ["User Research", "Wireframing & Prototyping", "Visual Design", "Design Systems"],
    timeline: "[timeline]",
    timelinePlaceholder: true,
    tools: "Figma",
    serviceQuery: "web",
  },
  {
    slug: "web-development",
    title: "Full Stack Web Development",
    group: "Build",
    body: "Complete web solutions from frontend to backend. Custom websites, e-commerce platforms, learning systems, portfolios, and business websites built to scale.",
    tags: ["Custom Websites", "E-commerce Platforms", "Learning Platforms", "Business Portals"],
    timeline: "Simple website: 2–4 weeks",
    timelinePlaceholder: false,
    tools: "Next.js · React · Node.js",
    serviceQuery: "web",
  },
  {
    slug: "web-mobile-apps",
    title: "Web & Mobile Applications",
    group: "Build",
    body: "Cross-platform applications delivering seamless experiences. From progressive web apps to native mobile solutions and Chrome extensions.",
    tags: ["Web Applications", "Mobile Apps", "Chrome Extensions", "Cross-platform Solutions"],
    timeline: "Complex apps: 2–4 months",
    timelinePlaceholder: false,
    tools: "Flutter · Kotlin · React",
    serviceQuery: "web",
  },
  {
    slug: "business-systems",
    title: "Business Management Systems",
    group: "Build",
    body: "Complete business management solutions with custom system design and architecture. From CRM to ERP — tailored to your specific needs.",
    tags: ["CRM Systems", "ERP Solutions", "Custom Software", "System Architecture"],
    timeline: "Complex apps: 2–4 months",
    timelinePlaceholder: false,
    tools: "PostgreSQL · Spring Boot · Docker",
    serviceQuery: "systems",
  },
  {
    slug: "ai-automation",
    title: "AI Agents & Automation",
    group: "Automate",
    body: "Intelligent AI systems and automation workflows that streamline operations, reduce costs, and boost productivity across your business.",
    tags: ["Custom AI Agents", "Workflow Automation", "Process Optimization", "AI Integration"],
    timeline: "[timeline]",
    timelinePlaceholder: true,
    tools: "OpenAI · Gemini · n8n · Make",
    serviceQuery: "ai",
  },
  {
    slug: "bots",
    title: "Bot Development",
    group: "Automate",
    body: "Custom chatbots and messaging bots for Telegram, WhatsApp, and other platforms. Automate customer engagement and support 24/7.",
    tags: ["Telegram Bots", "WhatsApp Bots", "Custom Bots", "Chatbot Integration"],
    timeline: "[timeline]",
    timelinePlaceholder: true,
    tools: "WhatsApp API · Telegram · n8n",
    serviceQuery: "ai",
  },
];

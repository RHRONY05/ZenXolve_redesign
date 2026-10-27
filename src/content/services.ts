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
    title: "Product Design (UI/UX)",
    group: "Design",
    body: "Intuitive interfaces and cohesive design systems crafted to elevate user trust and conversion.",
    tags: ["Design Systems", "UX Research & Wireframing", "Interactive Prototypes"],
    timeline: "2–3 weeks",
    tools: "Figma · Framer · FigJam",
    serviceQuery: "design",
  },
  {
    slug: "web-saas",
    title: "Web & SaaS Platforms",
    group: "Build",
    body: "High-performance web applications and cloud software engineered for reliability and sub-second speed.",
    tags: ["SaaS Architecture", "Client Portals & Dashboards", "Modern Web Platforms"],
    timeline: "3–6 weeks",
    tools: "Next.js · React · Node.js",
    serviceQuery: "web",
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    group: "Build",
    body: "Cross-platform iOS and Android apps engineered with fluid animations and offline-first performance.",
    tags: ["iOS & Android Apps", "Cross-Platform Frameworks", "App Store Deployment"],
    timeline: "4–8 weeks",
    tools: "Flutter · React Native · Swift",
    serviceQuery: "mobile",
  },
  {
    slug: "enterprise-systems",
    title: "Custom Enterprise Systems",
    group: "Build",
    body: "Tailored back-office software, custom ERPs, and database architectures for complex operations.",
    tags: ["Internal Operations Portals", "Custom CRM & ERP", "Relational Database Design"],
    timeline: "6–12 weeks",
    tools: "PostgreSQL · Docker · NestJS",
    serviceQuery: "systems",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    group: "Automate",
    body: "Deterministic webhook pipelines and API integrations that eliminate repetitive manual workflows.",
    tags: ["API & Webhook Pipelines", "Automated Data Sync", "Multi-Tool Orchestration"],
    timeline: "1–3 weeks",
    tools: "n8n · Make · REST APIs",
    serviceQuery: "automation",
  },
  {
    slug: "ai-agents",
    title: "Autonomous AI Agents",
    group: "Automate",
    body: "Custom LLM reasoning agents and conversational assistants tailored to your private company data.",
    tags: ["Custom LLM Agents", "Intelligent Chatbots", "RAG Knowledge Assistants"],
    timeline: "2–4 weeks",
    tools: "OpenAI · Gemini · LangChain",
    serviceQuery: "ai",
  },
];

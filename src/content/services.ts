export type Service = {
  slug: string;
  title: string;
  group: "Build" | "Automate" | "Design";
  body: string;
  tags: string[];
  /** Mobile home list shows the short body only. */
  placeholder?: boolean;
};

export const serviceGroups = [
  { key: "Build", letter: "A" },
  { key: "Automate", letter: "B" },
  { key: "Design", letter: "C" },
] as const;

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Full Stack Web Development",
    group: "Build",
    body: "Complete web solutions from frontend to backend. Custom websites, e-commerce platforms, learning systems, portfolios, and business websites built to scale.",
    tags: ["Custom Websites", "E-commerce Platforms", "Learning Platforms", "Business Portals"],
  },
  {
    slug: "web-mobile-apps",
    title: "Web & Mobile Applications",
    group: "Build",
    body: "Cross-platform applications delivering seamless experiences. From progressive web apps to native mobile solutions and Chrome extensions.",
    tags: ["Web Applications", "Mobile Apps", "Chrome Extensions", "Cross-platform Solutions"],
  },
  {
    slug: "business-systems",
    title: "Business Management Systems",
    group: "Build",
    body: "Complete business management solutions with custom system design and architecture. From CRM to ERP — tailored to your specific needs.",
    tags: ["CRM Systems", "ERP Solutions", "Custom Software", "System Architecture"],
  },
  {
    slug: "ai-automation",
    title: "AI Agents & Automation",
    group: "Automate",
    body: "Intelligent AI systems and automation workflows that streamline operations, reduce costs, and boost productivity across your business.",
    tags: ["Custom AI Agents", "Workflow Automation", "Process Optimization", "AI Integration"],
  },
  {
    slug: "bots",
    title: "Bot Development",
    group: "Automate",
    body: "Custom chatbots and messaging bots for Telegram, WhatsApp, and other platforms. Automate customer engagement and support 24/7.",
    tags: ["Telegram Bots", "WhatsApp Bots", "Custom Bots", "Chatbot Integration"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    group: "Design",
    body: "User-centered design that converts visitors into customers. Beautiful, intuitive interfaces backed by research and industry best practices.",
    tags: ["User Research", "Wireframing & Prototyping", "Visual Design", "Design Systems"],
  },
];

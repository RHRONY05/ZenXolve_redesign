/** Every entry is invented for the design. Replace with real case studies. */
export type WorkCategory = "web" | "apps" | "ai" | "bots" | "systems";

export type WorkItem = {
  slug: string;
  name: string;
  kind: string;
  category: WorkCategory;
  result: string;
  tile: "tile-1" | "tile-2" | "tile-3" | "tile-4" | "tile-5" | "tile-6";
  icon: string;
  placeholder: boolean;
  outcome?: string;
  client?: string;
  timeline?: string;
  services?: string;
  stack?: string;
  challenge?: string[];
  solution?: string[];
  stats?: { value: string; label: string }[];
  quote?: { text: string; author: string; role: string };
};

export const workCategories = [
  { id: "all", label: "All", shortLabel: "All" },
  { id: "web", label: "Web", shortLabel: "Web" },
  { id: "apps", label: "Apps", shortLabel: "Apps" },
  { id: "ai", label: "AI & Automation", shortLabel: "AI" },
  { id: "bots", label: "Bots", shortLabel: "Bots" },
  { id: "systems", label: "Systems", shortLabel: "Systems" },
] as const;

export const work: WorkItem[] = [
  {
    slug: "project-one",
    name: "[Project name]",
    kind: "E-commerce platform · Web app",
    category: "web",
    result: "[+40% conversions]",
    tile: "tile-1",
    icon: "shopping-bag",
    placeholder: true,
    outcome: "[the outcome in one line]",
    client: "[Client name]",
    timeline: "[e.g. 6 weeks]",
    services: "Full Stack Web Development · UI/UX Design",
    stack: "Next.js · Supabase · bKash",
    challenge: [
      "[2–3 short paragraphs: who the client is, what was broken or missing, and why it mattered to their business. Use their words if you can.]",
      "[What they had tried before, and the constraint: budget, deadline, existing systems.]",
    ],
    solution: [
      "[The solution in plain language: the storefront, the admin, the payment flow, the integrations. One paragraph per part.]",
      "[One technical decision worth mentioning, e.g. how stock stays correct when two people order the last item.]",
    ],
    stats: [
      { value: "[40%]", label: "[more conversions]" },
      { value: "[2.1s]", label: "[faster page loads]" },
      { value: "[0]", label: "[oversold orders]" },
      { value: "[6 wk]", label: "[idea to launch]" },
    ],
    quote: {
      text: "“[A real quote from the client about the result.]”",
      author: "[Name]",
      role: "[Role, Company]",
    },
  },
  {
    slug: "project-two",
    name: "[Project name]",
    kind: "AI agent · WhatsApp",
    category: "ai",
    result: "[result]",
    tile: "tile-3",
    icon: "bot",
    placeholder: true,
    outcome: "[the outcome in one line]",
    client: "[Client name]",
    timeline: "[e.g. 4 weeks]",
    services: "AI & Automation · Telegram & WhatsApp Bots",
    stack: "Python · OpenAI · WhatsApp API",
    challenge: [
      "[2–3 short paragraphs: who the client is, what was broken or missing, and why it mattered to their business. Use their words if you can.]",
      "[What they had tried before, and the constraint: budget, deadline, existing systems.]",
    ],
    solution: [
      "[The solution in plain language: the storefront, the admin, the payment flow, the integrations. One paragraph per part.]",
      "[One technical decision worth mentioning, e.g. how stock stays correct when two people order the last item.]",
    ],
    stats: [
      { value: "[40%]", label: "[more conversions]" },
      { value: "[2.1s]", label: "[faster page loads]" },
      { value: "[0]", label: "[oversold orders]" },
      { value: "[6 wk]", label: "[idea to launch]" },
    ],
    quote: {
      text: "“[A real quote from the client about the result.]”",
      author: "[Name]",
      role: "[Role, Company]",
    },
  },
  {
    slug: "project-three",
    name: "[Project name]",
    kind: "Learning platform · Web",
    category: "web",
    result: "[result]",
    tile: "tile-2",
    icon: "graduation-cap",
    placeholder: true,
    outcome: "[the outcome in one line]",
    client: "[Client name]",
    timeline: "[e.g. 8 weeks]",
    services: "Full Stack Web Development · UI/UX Design",
    stack: "Next.js · PostgreSQL · Tailwind CSS",
    challenge: [
      "[2–3 short paragraphs: who the client is, what was broken or missing, and why it mattered to their business. Use their words if you can.]",
      "[What they had tried before, and the constraint: budget, deadline, existing systems.]",
    ],
    solution: [
      "[The solution in plain language: the storefront, the admin, the payment flow, the integrations. One paragraph per part.]",
      "[One technical decision worth mentioning, e.g. how stock stays correct when two people order the last item.]",
    ],
    stats: [
      { value: "[40%]", label: "[more conversions]" },
      { value: "[2.1s]", label: "[faster page loads]" },
      { value: "[0]", label: "[oversold orders]" },
      { value: "[6 wk]", label: "[idea to launch]" },
    ],
    quote: {
      text: "“[A real quote from the client about the result.]”",
      author: "[Name]",
      role: "[Role, Company]",
    },
  },
  {
    slug: "project-four",
    name: "[Project name]",
    kind: "ERP · Business management system",
    category: "systems",
    result: "[result]",
    tile: "tile-6",
    icon: "layout-dashboard",
    placeholder: true,
    outcome: "[the outcome in one line]",
    client: "[Client name]",
    timeline: "[e.g. 12 weeks]",
    services: "Business Solutions & ERP · Full Stack Web Development",
    stack: "React · Node.js · PostgreSQL · Docker",
    challenge: [
      "[2–3 short paragraphs: who the client is, what was broken or missing, and why it mattered to their business. Use their words if you can.]",
      "[What they had tried before, and the constraint: budget, deadline, existing systems.]",
    ],
    solution: [
      "[The solution in plain language: the storefront, the admin, the payment flow, the integrations. One paragraph per part.]",
      "[One technical decision worth mentioning, e.g. how stock stays correct when two people order the last item.]",
    ],
    stats: [
      { value: "[40%]", label: "[more conversions]" },
      { value: "[2.1s]", label: "[faster page loads]" },
      { value: "[0]", label: "[oversold orders]" },
      { value: "[6 wk]", label: "[idea to launch]" },
    ],
    quote: {
      text: "“[A real quote from the client about the result.]”",
      author: "[Name]",
      role: "[Role, Company]",
    },
  },
  {
    slug: "project-five",
    name: "[Project name]",
    kind: "Chrome extension",
    category: "apps",
    result: "[result]",
    tile: "tile-4",
    icon: "puzzle",
    placeholder: true,
    outcome: "[the outcome in one line]",
    client: "[Client name]",
    timeline: "[e.g. 3 weeks]",
    services: "Web & Mobile Applications · UI/UX Design",
    stack: "TypeScript · Manifest V3 · Chrome APIs",
    challenge: [
      "[2–3 short paragraphs: who the client is, what was broken or missing, and why it mattered to their business. Use their words if you can.]",
      "[What they had tried before, and the constraint: budget, deadline, existing systems.]",
    ],
    solution: [
      "[The solution in plain language: the storefront, the admin, the payment flow, the integrations. One paragraph per part.]",
      "[One technical decision worth mentioning, e.g. how stock stays correct when two people order the last item.]",
    ],
    stats: [
      { value: "[40%]", label: "[more conversions]" },
      { value: "[2.1s]", label: "[faster page loads]" },
      { value: "[0]", label: "[oversold orders]" },
      { value: "[6 wk]", label: "[idea to launch]" },
    ],
    quote: {
      text: "“[A real quote from the client about the result.]”",
      author: "[Name]",
      role: "[Role, Company]",
    },
  },
  {
    slug: "project-six",
    name: "[Project name]",
    kind: "Telegram bot · Support",
    category: "bots",
    result: "[result]",
    tile: "tile-5",
    icon: "send",
    placeholder: true,
    outcome: "[the outcome in one line]",
    client: "[Client name]",
    timeline: "[e.g. 2 weeks]",
    services: "Telegram & WhatsApp Bots · AI & Automation",
    stack: "Python · Telegram Bot API · Redis",
    challenge: [
      "[2–3 short paragraphs: who the client is, what was broken or missing, and why it mattered to their business. Use their words if you can.]",
      "[What they had tried before, and the constraint: budget, deadline, existing systems.]",
    ],
    solution: [
      "[The solution in plain language: the storefront, the admin, the payment flow, the integrations. One paragraph per part.]",
      "[One technical decision worth mentioning, e.g. how stock stays correct when two people order the last item.]",
    ],
    stats: [
      { value: "[40%]", label: "[more conversions]" },
      { value: "[2.1s]", label: "[faster page loads]" },
      { value: "[0]", label: "[oversold orders]" },
      { value: "[6 wk]", label: "[idea to launch]" },
    ],
    quote: {
      text: "“[A real quote from the client about the result.]”",
      author: "[Name]",
      role: "[Role, Company]",
    },
  },
];

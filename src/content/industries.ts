export type IndustryItem = {
  id: string;
  name: string;
  tagline: string;
  icon: string;
};

export const industriesData: IndustryItem[] = [
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    tagline: "Headless storefronts & high-conversion checkouts",
    icon: "cart",
  },
  {
    id: "fintech",
    name: "FinTech & Banking",
    tagline: "Automated payment rails & secure compliance",
    icon: "shield",
  },
  {
    id: "healthcare",
    name: "Healthcare & MedTech",
    tagline: "HIPAA-compliant telemetry & patient portals",
    icon: "health",
  },
  {
    id: "ai-saas",
    name: "Autonomous AI & SaaS",
    tagline: "LLM workflows, multi-agent systems & cloud apps",
    icon: "cpu",
  },
  {
    id: "edtech",
    name: "EdTech & Learning",
    tagline: "Interactive LMS, courseware & student dashboards",
    icon: "academic",
  },
  {
    id: "realestate",
    name: "Real Estate & PropTech",
    tagline: "MLS syndication, dynamic booking & investor portals",
    icon: "building",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    tagline: "Real-time fleet tracking & warehouse operations",
    icon: "truck",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industry 4.0",
    tagline: "ERP integration, inventory pipelines & IoT telemetry",
    icon: "factory",
  },
  {
    id: "startups",
    name: "Early-Stage Startups",
    tagline: "Rapid MVP sprints & venture-grade architecture",
    icon: "rocket",
  },
  {
    id: "media",
    name: "Media & Entertainment",
    tagline: "Streaming engines, creator portals & headless CMS",
    icon: "media",
  },
  {
    id: "hospitality",
    name: "Travel & Hospitality",
    tagline: "Custom reservation engines & multi-currency billing",
    icon: "globe",
  },
  {
    id: "professional",
    name: "Corporate & Enterprise",
    tagline: "Custom internal tooling & automated business ops",
    icon: "briefcase",
  },
];

// Fallback simple list for backward compatibility
export const industries = industriesData.map((item) => item.name);

export interface StackTool {
  name: string;
  mk: string;
}

export interface StackGroup {
  id: string;
  title: string;
  countLabel: string;
  tools?: StackTool[];
  customLead?: {
    text: string;
    linkText: string;
    linkHref: string;
  };
}

export const stackGroups: StackGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    countLabel: "10 tools",
    tools: [
      { name: "React", mk: "Re" },
      { name: "Next.js", mk: "Ne" },
      { name: "Vue.js", mk: "Vu" },
      { name: "Tailwind CSS", mk: "Ta" },
      { name: "TypeScript", mk: "Ty" },
      { name: "GSAP", mk: "GS" },
      { name: "Framer Motion", mk: "Fr" },
      { name: "Three.js", mk: "Th" },
      { name: "HTML", mk: "HT" },
      { name: "CSS", mk: "CS" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    countLabel: "06 tools",
    tools: [
      { name: "Node.js", mk: "No" },
      { name: "Express.js", mk: "Ex" },
      { name: "Python", mk: "Py" },
      { name: "Spring Boot", mk: "Sp" },
      { name: "AWS", mk: "AW" },
      { name: "Docker", mk: "Do" },
    ],
  },
  {
    id: "database",
    title: "Database",
    countLabel: "03 tools",
    tools: [
      { name: "PostgreSQL", mk: "Po" },
      { name: "MongoDB", mk: "Mo" },
      { name: "MySQL", mk: "My" },
    ],
  },
  {
    id: "auth",
    title: "Auth",
    countLabel: "02 tools",
    tools: [
      { name: "Firebase", mk: "Fi" },
      { name: "Supabase", mk: "Su" },
    ],
  },
  {
    id: "automation",
    title: "Automation & AI",
    countLabel: "05 tools",
    tools: [
      { name: "n8n", mk: "n8" },
      { name: "Make", mk: "Ma" },
      { name: "Zapier", mk: "Za" },
      { name: "OpenAI", mk: "Op" },
      { name: "Gemini", mk: "Ge" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile apps",
    countLabel: "02 tools",
    tools: [
      { name: "Flutter", mk: "Fl" },
      { name: "Kotlin", mk: "Ko" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    countLabel: "02 tools",
    tools: [
      { name: "GitHub", mk: "Gi" },
      { name: "Figma", mk: "Fi" },
    ],
  },
  {
    id: "other",
    title: "Something else?",
    countLabel: "& more",
    customLead: {
      text: "If your project already runs on a different stack, we'll work with it.",
      linkText: "Ask us",
      linkHref: "/contact",
    },
  },
];

/** All tools cataloged in the stack, including custom stack option. Length = 31. */
export const stack = [
  ...stackGroups.flatMap((group) => group.tools ?? []),
  { name: "Something else", mk: "&+" },
];

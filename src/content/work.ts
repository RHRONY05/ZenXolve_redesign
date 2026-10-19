/** Every entry is invented for the design. Replace with real case studies. */
export type WorkItem = {
  slug: string;
  name: string;
  kind: string;
  result: string;
  tile: "tile-1" | "tile-2" | "tile-3" | "tile-4" | "tile-5" | "tile-6";
  icon: string;
  placeholder: boolean;
};

export const work: WorkItem[] = [
  { slug: "project-one", name: "[Project name]", kind: "E-commerce platform · Web app", result: "[+40% conversions]", tile: "tile-1", icon: "shopping-bag", placeholder: true },
  { slug: "project-two", name: "[Project name]", kind: "AI agent · WhatsApp", result: "[result]", tile: "tile-3", icon: "bot", placeholder: true },
  { slug: "project-three", name: "[Project name]", kind: "Learning platform · Web", result: "[result]", tile: "tile-2", icon: "graduation-cap", placeholder: true },
  { slug: "project-four", name: "[Project name]", kind: "ERP · Business management system", result: "[result]", tile: "tile-6", icon: "layout-dashboard", placeholder: true },
];

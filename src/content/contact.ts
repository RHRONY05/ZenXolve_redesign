import type { IconName } from "@/components/ui/Icon";
import { site } from "./site";

export interface ContactChannel {
  id: string;
  title: string;
  detail: string;
  mobileDetail?: string;
  href?: string;
  icon: IconName;
  isWhatsApp?: boolean;
}

export const contactChannels: ContactChannel[] = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    detail: "+880 1633-707780 · fastest way to reach us",
    mobileDetail: "+880 1633-707780",
    href: site.whatsapp,
    icon: "message-circle",
    isWhatsApp: true,
  },
  {
    id: "email",
    title: "Email us",
    detail: site.email,
    href: `mailto:${site.email}`,
    icon: "mail",
  },
  {
    id: "location",
    title: "Location",
    detail: "Dhaka, Bangladesh · Available worldwide",
    icon: "map-pin",
  },
];

export const contactServices = [
  { label: "Website Development", mobileLabel: "Website", slug: "web" },
  { label: "UI/UX Design", mobileLabel: "UI/UX", slug: "design" },
  { label: "Mobile/Web App Development", mobileLabel: "App", slug: "app" },
  { label: "AI & Automation", mobileLabel: "AI & Automation", slug: "ai" },
  { label: "Bot Development", mobileLabel: "Bot", slug: "bots" },
  { label: "Business Systems", mobileLabel: "Business system", slug: "systems" },
  { label: "Other", mobileLabel: "Other", slug: "other" },
] as const;

export const contactBudgets = [
  { label: "[< $1k]", placeholder: true },
  { label: "[$1k–5k]", placeholder: true },
  { label: "[$5k–15k]", placeholder: true },
  { label: "[$15k+]", placeholder: true },
  { label: "Not sure yet", placeholder: false },
] as const;

import { stack } from "./stack";
import { work } from "./work";

export const site = {
  name: "XenZolve",
  email: "hello@xenzolve.com",
  phone: "+880 1633-707780",
  whatsapp: "https://wa.me/8801633707780",
  location: "Dhaka, Bangladesh",
  tagline: "Next-gen problems, next-level solutions.",
  socials: [
    { label: "Facebook", href: "https://facebook.com/xenzolve", icon: "facebook" },
    { label: "Instagram", href: "https://instagram.com/xenzolve", icon: "instagram" },
    { label: "LinkedIn", href: "https://linkedin.com/company/xenzolve", icon: "linkedin" },
    { label: "WhatsApp", href: "https://wa.me/8801633707780", icon: "message-circle" },
  ],
} as const;

/** Counts shown as superscripts: Work = published case studies, Stack = number of tools. */
export const nav = [
  { label: "Work", href: "/work", count: work.length.toString().padStart(2, "0") },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Stack", href: "/stack", count: stack.length.toString().padStart(2, "0") },
] as const;

export const footerStudio = ["Work", "Services", "About", "Stack", "Contact"].map((label) => ({
  label,
  href: `/${label.toLowerCase()}`,
}));
export const footerServices = ["Web Development", "UI/UX Design", "AI & Automation", "App Development"];

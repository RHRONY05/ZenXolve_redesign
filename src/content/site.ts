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
    { label: "WhatsApp", href: "https://wa.me/8801633707780", icon: "whatsapp" },
  ],
} as const;

/** Navigation items linking directly to individual homepage sections */
export const nav = [
  { label: "About Us", href: "/#advantage" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Why Us", href: "/#why-us" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;

export const footerStudio = [
  { label: "Capabilities & Services", href: "/#services" },
  { label: "The Studio Advantage", href: "/#advantage" },
  { label: "How We Work (4 Steps)", href: "/#process" },
  { label: "Why Clients Stay", href: "/#why-us" },
  { label: "Client Reviews", href: "/#reviews" },
  { label: "Frequently Asked Questions", href: "/#faq" },
];

export const footerServices = [
  { label: "High-Conversion Web Platforms", href: "/#services" },
  { label: "Native iOS & Android Apps", href: "/#services" },
  { label: "Autonomous AI Agents & Bots", href: "/#services" },
  { label: "Custom Business Systems & ERP", href: "/#services" },
  { label: "Design Systems & UI/UX", href: "/#services" },
];

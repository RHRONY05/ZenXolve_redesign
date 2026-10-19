import { Suspense } from "react";
import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a project in mind? Let's bring your vision to life. Get in touch with XenZolve via WhatsApp, email, or contact form.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactClient />
    </Suspense>
  );
}

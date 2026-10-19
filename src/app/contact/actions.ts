"use server";

import { Resend } from "resend";
import { contactSchema } from "./schema";

export type ContactActionResult = {
  success: boolean;
  errors?: Record<string, string>;
  message?: string;
};

export async function submitContact(formData: FormData): Promise<ContactActionResult> {
  const raw = {
    name: formData.get("name") ?? "",
    email: formData.get("email") ?? "",
    subject: formData.get("subject") ?? "",
    service: formData.get("service") ?? "",
    budget: formData.get("budget") ?? "",
    message: formData.get("message") ?? "",
    company_url: formData.get("company_url") ?? "",
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0]?.toString() || "form";
      if (!errors[field]) {
        errors[field] = issue.message;
      }
    }
    return { success: false, errors };
  }

  const { name, email, subject, service, budget, message, company_url } = parsed.data;

  // Honeypot check against spam bots
  if (company_url && company_url.length > 0) {
    return { success: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "hello@xenzolve.com";

  if (!apiKey) {
    // In development or when API key is not configured, log payload and simulate success
    console.log("[Dev Contact Form Submission]", {
      name,
      email,
      subject: subject || null,
      service: service || null,
      budget: budget || null,
      message,
      submittedAt: new Date().toISOString(),
    });
    return { success: true };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: toEmail,
      replyTo: email,
      subject: subject ? `[Inquiry] ${subject}` : `New inquiry from ${name} (${service || "General"})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Service: ${service || "Not specified"}`,
        `Budget: ${budget || "Not specified"}`,
        `Subject: ${subject || "None"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[Resend Error]", error);
      return { success: false, message: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("[Submit Contact Error]", err);
    return {
      success: false,
      message: err instanceof Error ? err.message : "Failed to send message",
    };
  }
}

import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Your name is required"),
  email: z.string().trim().email("Enter a valid email, like name@company.com"),
  subject: z.string().trim().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().trim().min(20, "Tell us a little about the project (at least 20 characters)"),
  company_url: z.string().max(0, "Spam detected").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

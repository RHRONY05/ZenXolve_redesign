"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { PlaceholderTag } from "@/components/ui/Placeholder";
import { contactBudgets, contactServices } from "@/content/contact";
import { submitContact } from "@/app/contact/actions";
import { contactSchema } from "@/app/contact/schema";
import { FormSuccess } from "./FormSuccess";

interface ContactFormProps {
  initialService?: string;
}

const serviceSlugMap: Record<string, string> = {
  ai: "AI & Automation",
  web: "Website Development",
  systems: "Business Systems",
  design: "UI/UX Design",
  "ui-ux": "UI/UX Design",
  bots: "Bot Development",
  app: "Mobile/Web App Development",
  apps: "Mobile/Web App Development",
  other: "Other",
};

export function ContactForm({ initialService }: ContactFormProps) {
  const defaultService =
    (initialService && serviceSlugMap[initialService.toLowerCase()]) || "AI & Automation";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [selectedService, setSelectedService] = useState(defaultService);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [message, setMessage] = useState("");
  const [companyUrl, setCompanyUrl] = useState(""); // honeypot

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const validate = () => {
    const result = contactSchema.safeParse({
      name,
      email,
      subject,
      service: selectedService,
      budget: selectedBudget,
      message,
      company_url: companyUrl,
    });

    if (!result.success) {
      const errMap: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0]?.toString() || "form";
        if (!errMap[field]) {
          errMap[field] = issue.message;
        }
      }
      setErrors(errMap);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleBlur = () => {
    if (!hasSubmitted) return;
    validate();
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setHasSubmitted(true);
    setServerError(null);

    const isValid = validate();
    if (!isValid) {
      return;
    }

    setStatus("submitting");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("service", selectedService);
    formData.append("budget", selectedBudget);
    formData.append("message", message);
    formData.append("company_url", companyUrl);

    try {
      const res = await submitContact(formData);
      if (res.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setServerError(
          res.message ||
            "Couldn't send your message. Check your connection and try again, or reach us on WhatsApp."
        );
      }
    } catch {
      setStatus("error");
      setServerError(
        "Couldn't send your message. Check your connection and try again, or reach us on WhatsApp."
      );
    }
  };

  if (status === "success") {
    return <FormSuccess name={name} email={email} />;
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form
      className="bg-[var(--surface)] border border-[var(--line)] rounded-[var(--radius-lg)] md:rounded-[var(--radius-xl)] p-5.5 md:p-10 grid gap-4.5 md:gap-[22px]"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Server error danger banner with Retry */}
      {status === "error" && (
        <div className="banner danger flex items-start gap-3 p-3.5 md:p-4 rounded-[var(--radius-md)] bg-[var(--danger-soft)] text-[var(--danger)] text-sm leading-[21px]">
          <Icon name="circle-alert" className="w-[18px] h-[18px] shrink-0 mt-0.5" />
          <span>
            {serverError ||
              "Couldn't send your message. Check your connection and try again, or reach us on WhatsApp."}
          </span>
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="act ml-auto font-semibold whitespace-nowrap cursor-pointer hover:underline"
          >
            Retry
          </button>
        </div>
      )}

      {/* Validation error danger banner */}
      {hasSubmitted && errorCount > 0 && status !== "error" && (
        <div
          className="banner danger flex items-start gap-3 p-3.5 md:p-4 rounded-[var(--radius-md)] bg-[var(--danger-soft)] text-[var(--danger)] text-sm leading-[21px]"
          role="alert"
        >
          <Icon name="circle-alert" className="w-[18px] h-[18px] shrink-0 mt-0.5" />
          <span>
            Please fix {errorCount} {errorCount === 1 ? "field" : "fields"} before sending.
          </span>
        </div>
      )}

      {/* Honeypot field for spam prevention */}
      <input
        type="text"
        name="company_url"
        value={companyUrl}
        onChange={(e) => setCompanyUrl(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Two columns: Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="field">
          <label htmlFor="n" className="block text-sm font-medium mb-2 text-[var(--ink)]">
            Your name
          </label>
          <input
            className={`w-full h-[52px] px-4 rounded-[var(--radius-md)] border bg-[var(--bg)] text-[var(--ink)] text-base focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-soft)] outline-none transition-colors ${
              errors.name ? "border-[var(--danger)]" : "border-[var(--line-strong)]"
            }`}
            id="n"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleBlur}
            aria-invalid={!!errors.name}
            placeholder="Full name"
            disabled={status === "submitting"}
          />
          {errors.name && (
            <div className="err-msg flex items-center gap-1.5 text-[var(--danger)] text-[13px] mt-1.5">
              <Icon name="circle-alert" className="w-3.5 h-3.5 shrink-0" />
              {errors.name}
            </div>
          )}
        </div>

        <div className="field">
          <label htmlFor="e" className="block text-sm font-medium mb-2 text-[var(--ink)]">
            Your email
          </label>
          <input
            className={`w-full h-[52px] px-4 rounded-[var(--radius-md)] border bg-[var(--bg)] text-[var(--ink)] text-base focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-soft)] outline-none transition-colors ${
              errors.email ? "border-[var(--danger)]" : "border-[var(--line-strong)]"
            }`}
            id="e"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleBlur}
            aria-invalid={!!errors.email}
            placeholder="name@company.com"
            disabled={status === "submitting"}
          />
          {errors.email && (
            <div className="err-msg flex items-center gap-1.5 text-[var(--danger)] text-[13px] mt-1.5">
              <Icon name="circle-alert" className="w-3.5 h-3.5 shrink-0" />
              {errors.email}
            </div>
          )}
        </div>
      </div>

      {/* Subject (optional) */}
      <div className="field">
        <label htmlFor="s" className="block text-sm font-medium mb-2 text-[var(--ink)]">
          Subject <span className="text-[var(--ink-3)] font-normal opt">(optional)</span>
        </label>
        <input
          className="w-full h-[52px] px-4 rounded-[var(--radius-md)] border border-[var(--line-strong)] bg-[var(--bg)] text-[var(--ink)] text-base focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-soft)] outline-none transition-colors placeholder:text-[var(--ink-3)]"
          id="s"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. WhatsApp bot for my shop"
          disabled={status === "submitting"}
        />
      </div>

      {/* Service single-select chips */}
      <div className="field">
        <label className="block text-sm font-medium mb-2 text-[var(--ink)]">Service</label>
        <div className="chips-select flex flex-wrap gap-2">
          {contactServices.map((service) => {
            const isSelected = selectedService === service.label;
            return (
              <button
                key={service.slug}
                type="button"
                onClick={() => setSelectedService(service.label)}
                className={`h-9 md:h-10 px-3.5 md:px-4 rounded-full border text-sm font-medium cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-[var(--ink)] text-[var(--bg)] border-[var(--ink)]"
                    : "bg-[var(--surface)] text-[var(--ink)] border-[var(--line)] hover:border-[var(--line-strong)]"
                }`}
              >
                <span className="md:hidden">{service.mobileLabel}</span>
                <span className="hidden md:inline">{service.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget single-select chips (optional, placeholder marker) */}
      <div className="field">
        <label className="block text-sm font-medium mb-2 text-[var(--ink)]">
          Budget <span className="text-[var(--ink-3)] font-normal opt">(optional)</span>{" "}
          <PlaceholderTag className="ml-1">New field · ranges are placeholders</PlaceholderTag>
        </label>
        <div className="chips-select flex flex-wrap gap-2">
          {contactBudgets.map((b) => {
            const isSelected = selectedBudget === b.label;
            return (
              <button
                key={b.label}
                type="button"
                onClick={() => setSelectedBudget(isSelected ? "" : b.label)}
                className={`h-9 md:h-10 px-3.5 md:px-4 rounded-full border text-sm font-medium cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-[var(--ink)] text-[var(--bg)] border-[var(--ink)]"
                    : "bg-[var(--surface)] text-[var(--ink)] border-[var(--line)] hover:border-[var(--line-strong)]"
                }`}
              >
                {b.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Message textarea */}
      <div className="field">
        <label htmlFor="m" className="block text-sm font-medium mb-2 text-[var(--ink)]">
          Tell us about your project
        </label>
        <textarea
          className={`w-full h-[140px] p-3.5 md:p-4 rounded-[var(--radius-md)] border bg-[var(--bg)] text-[var(--ink)] text-base leading-6 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-soft)] outline-none resize-y transition-colors placeholder:text-[var(--ink-3)] ${
            errors.message ? "border-[var(--danger)]" : "border-[var(--line-strong)]"
          }`}
          id="m"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={handleBlur}
          aria-invalid={!!errors.message}
          placeholder="What are you building, who is it for, and when do you need it?"
          disabled={status === "submitting"}
        />
        {errors.message && (
          <div className="err-msg flex items-center gap-1.5 text-[var(--danger)] text-[13px] mt-1.5">
            <Icon name="circle-alert" className="w-3.5 h-3.5 shrink-0" />
            {errors.message}
          </div>
        )}
      </div>

      {/* Foot: Info text + Submit button */}
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 pt-2">
        <span className="text-[13px] text-[var(--ink-3)] text-center md:text-left">
          <span className="hidden md:inline">We&apos;ll reply by email. Prefer chat? Use WhatsApp.</span>
          <span className="md:hidden">Prefer chat? Use WhatsApp.</span>
        </span>

        {status === "submitting" ? (
          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center gap-2 h-14 md:h-14 px-7 rounded-full bg-[var(--ink)] text-[var(--bg)] font-medium text-base opacity-60 cursor-default"
          >
            <span className="w-4 h-4 rounded-full border-2 border-current border-r-transparent animate-spin" />
            Sending…
          </button>
        ) : (
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 h-14 md:h-14 px-7 rounded-full bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--ink-2)] transition-colors font-medium text-base cursor-pointer"
          >
            Send message <Icon name="arrow-right" className="w-4 h-4" />
          </button>
        )}
      </div>
    </form>
  );
}

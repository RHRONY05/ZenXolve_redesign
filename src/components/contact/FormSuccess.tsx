import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";

interface FormSuccessProps {
  name: string;
  email: string;
}

export function FormSuccess({ name, email }: FormSuccessProps) {
  const firstName = name.trim().split(" ")[0] || "there";

  return (
    <div className="bg-[var(--surface)] border border-[var(--line)] rounded-[var(--radius-lg)] md:rounded-[var(--radius-xl)] p-5 md:p-10">
      <div className="text-center py-10 md:py-14 px-3 md:px-6">
        <div className="w-16 h-16 rounded-full bg-[var(--success-soft)] text-[var(--success)] grid place-items-center mx-auto mb-5.5">
          <Icon name="check" className="w-[30px] h-[30px]" />
        </div>
        <h3 className="font-serif font-normal text-3xl md:text-[44px] leading-tight md:leading-[48px] mb-2.5 text-[var(--ink)]">
          Message sent.
        </h3>
        <p className="text-base md:text-lg text-[var(--ink-2)] max-w-md mx-auto mb-6 leading-relaxed">
          Thanks, {firstName}. We&apos;ll reply to {email} soon. For anything urgent, WhatsApp is fastest.
        </p>
        <a
          className="btn btn-primary w-full justify-center text-base"
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="message-circle" className="w-4 h-4" />
          Chat on WhatsApp
        </a>
        <div className="mt-4.5">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-medium text-[var(--ink)] hover:text-[var(--accent)] transition-colors text-sm"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

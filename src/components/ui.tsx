import { ArrowUpLeft, MessageCircle, Stethoscope } from "lucide-react";
import { whatsappUrl } from "@/lib/clinic";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="دكتور أصلان الموسوي — الرئيسية"
    >
      <span className="brand-mark">
        <ToothMark />
      </span>
      <span>
        <strong>د. أصلان الموسوي</strong>
        <small lang="en" dir="ltr">
          DR. ASLAN AL-ALOUSI
        </small>
      </span>
    </a>
  );
}

export function ToothMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 44"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 8C14 3 5 5 5 14c0 5 3 9 4 15s2 10 5 10 2-14 6-14 3 14 6 14 4-4 5-10 4-10 4-15c0-9-9-11-15-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M15 7c3 2 6 4 10 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20 14v7m-3.5-3.5h7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BookingLink({
  className = "",
  children = "احجز موعدك الآن",
  message,
}: {
  className?: string;
  children?: React.ReactNode;
  message?: string;
}) {
  return (
    <a
      className={`button button-primary ${className}`}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={19} />
      <span>{children}</span>
      <ArrowUpLeft size={17} className="button-arrow" />
    </a>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function ConsultationNote() {
  return (
    <p className="consultation-note">
      <Stethoscope size={16} />
      تبدأ كل خطة علاج بفحص وتقييم يناسب حالتك.
    </p>
  );
}

import { Facebook, Instagram, Music2, Send } from "lucide-react";
import { clinic } from "@/lib/clinic";

const profiles = [
  { name: "فيسبوك", href: clinic.facebook, icon: Facebook },
  { name: "إنستغرام", href: clinic.instagram, icon: Instagram },
  { name: "تيك توك", href: clinic.tiktok, icon: Music2 },
  { name: "تيليغرام الشخصي", href: clinic.telegram, icon: Send },
];

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return profiles.map(({ name, href, icon: Icon }) => (
    <a
      key={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`حساب الدكتور على ${name}`}
      title={name}
    >
      <Icon size={compact ? 19 : 17} aria-hidden="true" />
      {!compact && <span>{name}</span>}
    </a>
  ));
}

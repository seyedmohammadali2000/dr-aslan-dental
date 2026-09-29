"use client";
import { useEffect, useState } from "react";
import { ArrowUpLeft, Menu, X } from "lucide-react";
import { Brand } from "./ui";
import { whatsappUrl } from "@/lib/clinic";

const links = [
  { href: "#about", label: "عن الدكتور" },
  { href: "#services", label: "خدماتنا" },
  { href: "#experience", label: "تجربة العيادة" },
  { href: "#portfolio", label: "ابتساماتنا" },
  { href: "#contact", label: "تواصل معنا" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="القائمة الرئيسية">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="header-booking"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            احجز موعدك <ArrowUpLeft size={16} />
          </a>
          <button
            className="menu-toggle"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-nav" aria-label="قائمة الهاتف">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <ArrowUpLeft size={16} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

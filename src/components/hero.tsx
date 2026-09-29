import Image from "next/image";
import doctorPortrait from "../../img/aslan.jpg";
import {
  ArrowDown,
  ArrowUpLeft,
  BadgeCheck,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { BookingLink, Eyebrow, ToothMark } from "./ui";
import { clinic } from "@/lib/clinic";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Eyebrow>عناية تستحقها. ابتسامة تشبهك.</Eyebrow>
          <h1>
            ابتسامتك أجمل،
            <br />
            حين تبدأ بـ
            <span className="word-accent">
              ثقة.
              <svg viewBox="0 0 170 16" aria-hidden="true">
                <path d="M3 11Q75-2 165 7M20 15Q85 4 145 11" />
              </svg>
            </span>
          </h1>
          <p className="hero-intro">
            رعاية لأسنانك، واهتمام بكل التفاصيل.
            <br />
            مع <strong>{clinic.name}</strong>، نمنح ابتسامتك العناية التي
            تستحقها، بخطة علاج مصممة لك.
          </p>
          <div className="hero-buttons">
            <BookingLink />
            <a href="#services" className="text-link">
              اكتشف خدماتنا <ArrowUpLeft size={18} />
            </a>
          </div>
          <div className="hero-location">
            <MapPin size={17} />
            <span>كربلاء · حي الموظفين</span>
            <span className="location-divider" />
            <span>الحجز المسبق لراحتك</span>
          </div>
          <div className="hero-signature">
            <span className="signature-line" />
            <span lang="en" dir="ltr">
              A little care. A beautiful difference.
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit" />
          <div className="hero-image-wrap">
            <Image
              src={doctorPortrait}
              alt={clinic.name}
              fill
              sizes="(max-width: 700px) 92vw, 48vw"
              priority
              placeholder="blur"
              className="hero-image"
            />
            <div className="image-shade" />
            <div className="image-caption">
              <span className="mini-rule" />
              <p>
                {clinic.shortName}
                <br />
                <strong>{clinic.specialty} · كربلاء</strong>
              </p>
            </div>
          </div>
          <div className="care-badge">
            <span>
              <ShieldCheck size={25} />
            </span>
            <div>
              <strong>عناية شخصية</strong>
              <small>أنت محور كل خطوة</small>
            </div>
            <BadgeCheck size={18} className="care-check" />
          </div>
          <div className="round-seal">
            <ToothMark />
            <span>CARE WITH CONFIDENCE</span>
          </div>
          <Sparkles className="hero-spark" size={34} strokeWidth={1} />
          <div className="visual-label" lang="en" dir="ltr">
            DENTAL CARE, THOUGHTFULLY PERSONAL.
          </div>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>
          {clinic.specialty} <span className="dot">·</span> عناية عامة وتجميلية
          بالأسنان
        </span>
        <a href="#about" aria-label="اكتشف المزيد عن الدكتور">
          <span>ابتسامتك تبدأ من هنا</span>
          <ArrowDown size={17} />
        </a>
      </div>
    </section>
  );
}

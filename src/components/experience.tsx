import {
  CalendarCheck2,
  ClipboardList,
  Clock3,
  HeartHandshake,
  MoveLeft,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { BookingLink, Eyebrow } from "./ui";
import { clinic } from "@/lib/clinic";

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div>
          <Eyebrow>تعرّف على طبيبك</Eyebrow>
          <h2>
            أهلاً، أنا د. أصلان.
            <br />
            <span>هنا، نعتني بك قبل ابتسامتك.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            أؤمن أن العناية الجيدة تبدأ بالاستماع. نناقش احتياجاتك، نشرح
            الخيارات المناسبة، ونضع معاً خطة علاج واضحة؛ لتكون مرتاحاً وواثقاً
            في كل خطوة.
          </p>
          <blockquote className="bio-quote">
            <Quote size={23} strokeWidth={1.4} aria-hidden="true" />
            <p>{clinic.bioQuote}</p>
            <cite>{clinic.shortName}</cite>
          </blockquote>
          <div className="doctor-name">
            <span className="doctor-line" />
            <div>
              <strong>{clinic.name}</strong>
              <span>{clinic.specialty} · كربلاء، العراق</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: CalendarCheck2,
    title: "موعد مخصص لك",
    text: "عدد محدود من المراجعين يومياً، لنمنح كل حالة وقتها واهتمامها.",
  },
  {
    icon: Clock3,
    title: "وقتك يستحق الاهتمام",
    text: "حجز مسبق وتنظيم دقيق للمواعيد لتقليل الانتظار قدر الإمكان.",
  },
  {
    icon: ClipboardList,
    title: "كل خطوة موثّقة",
    text: "توثيق الحالة والخطة العلاجية لتتابع تقدمك بوضوح واطمئنان.",
  },
  {
    icon: HeartHandshake,
    title: "عناية تستمر بعد الزيارة",
    text: "متابعة طويلة الأمد، مع توضيح شروط أي ضمان بحسب نوع العلاج والحالة.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container experience-panel">
        <div className="experience-intro">
          <div className="vip-label">
            <ShieldCheck size={16} />
            <span lang="en">THE PERSONAL CARE EXPERIENCE</span>
          </div>
          <Eyebrow light>تجربة مختلفة، لأنك تستحق</Eyebrow>
          <h2>
            موعدك لك.
            <br />
            واهتمامنا <span>بكل تفاصيلك.</span>
          </h2>
          <p>
            تجربة VIP تبدأ قبل وصولك إلى العيادة. وقت مخصص، وخطة واضحة، ورعاية
            تتجاوز حدود الزيارة.
          </p>
          <BookingLink className="button-cream">رتّب زيارتك الأولى</BookingLink>
          <div className="experience-footnote">
            <span /> بالحجز المسبق فقط
          </div>
        </div>
        <div className="benefits-grid">
          {benefits.map(({ icon: Icon, title, text }, index) => (
            <div className="benefit" key={title}>
              <div className="benefit-heading">
                <Icon size={27} strokeWidth={1.4} />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BookingSteps() {
  return (
    <section className="booking-steps section">
      <div className="container">
        <div className="steps-heading">
          <Eyebrow>ببساطة، نحن بالقرب منك</Eyebrow>
          <h2>ثلاث خطوات لابتسامتك القادمة.</h2>
        </div>
        <div className="steps-grid">
          {[
            {
              title: "تواصل معنا",
              text: "أرسل رسالة عبر واتساب وأخبرنا بما تحتاجه.",
            },
            {
              title: "نرتّب موعدك",
              text: "نتفق معك على وقت مناسب ونؤكد الحجز برسالة.",
            },
            {
              title: "ابدأ رحلتك بثقة",
              text: "نستقبلك، نفحص حالتك، ونناقش خطتك العلاجية.",
            },
          ].map((step, index) => (
            <div className="step" key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {index < 2 && (
                <MoveLeft className="step-arrow" size={26} strokeWidth={1} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

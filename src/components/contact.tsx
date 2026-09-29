import {
  ArrowUpLeft,
  Bot,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { clinic, mapSearchUrl, whatsappUrl } from "@/lib/clinic";
import { BookingLink, Brand, Eyebrow } from "./ui";
import { SocialLinks } from "./social-links";

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <Eyebrow>ننتظرك في كربلاء</Eyebrow>
          <h2>
            ابتسامتك القادمة
            <br />
            تبدأ بـ<span>مرحباً.</span>
          </h2>
          <p>
            للحجز أو الاستفسار، تواصل معنا مباشرة.
            <br />
            نسعد بالإجابة عن أسئلتك وترتيب زيارتك.
          </p>
          <BookingLink>تواصل معنا عبر واتساب</BookingLink>
          <a
            className="telegram-contact text-link"
            href={clinic.telegramBot}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Bot size={19} aria-hidden="true" />
            تواصل عبر بوت تيليغرام
          </a>
          <div className="contact-details">
            <div>
              <MapPin size={22} strokeWidth={1.5} />
              <div>
                <h3>عنوان العيادة</h3>
                <p>{clinic.address}</p>
              </div>
            </div>
            <div>
              <Phone size={21} strokeWidth={1.5} />
              <div>
                <h3>للحجز والاستفسار</h3>
                <a href={`tel:${clinic.phone}`} dir="ltr">
                  +964 772 903 5702
                </a>
              </div>
            </div>
          </div>
          <nav
            className="contact-socials"
            aria-label="حسابات الدكتور على مواقع التواصل"
          >
            <SocialLinks />
          </nav>
        </div>
        <div className="map-card">
          <div className="map-frame">
            <iframe
              src={clinic.mapEmbed}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="موقع عيادة الدكتور أصلان الموسوي في كربلاء"
            />
          </div>
          <div className="map-caption">
            <div>
              <span className="map-pin">
                <MapPin size={22} />
              </span>
              <div>
                <strong>يسعدنا استقبالكم</strong>
                <p>كربلاء، حي الموظفين</p>
              </div>
            </div>
            <a href={mapSearchUrl} target="_blank" rel="noopener noreferrer">
              الاتجاهات <Navigation size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-main">
          <div>
            <Brand light />
            <p>عناية شخصية. تفاصيل مدروسة. ابتسامة بثقة.</p>
          </div>
          <nav aria-label="روابط التذييل">
            <a href="#about">عن الدكتور</a>
            <a href="#services">خدماتنا</a>
            <a href="#education">التوعية السنية</a>
            <a href="#contact">تواصل معنا</a>
          </nav>
          <div className="footer-socials">
            <SocialLinks compact />
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
            >
              <MessageCircle size={20} />
            </a>
            <a href={`tel:${clinic.phone}`} aria-label="اتصل بالعيادة">
              <Phone size={19} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} {clinic.shortName}. جميع الحقوق محفوظة.
          </p>
          <span lang="en" dir="ltr">
            Made for your smile.
          </span>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="احجز أو استفسر عبر واتساب"
      >
        <MessageCircle size={27} />
        <span>كيف نساعدك؟</span>
      </a>
      <div className="mobile-booking-bar">
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={20} />
          احجز عبر واتساب
          <ArrowUpLeft size={17} />
        </a>
        <a href={`tel:${clinic.phone}`} aria-label="اتصال مباشر بالعيادة">
          <Phone size={21} />
        </a>
      </div>
    </>
  );
}

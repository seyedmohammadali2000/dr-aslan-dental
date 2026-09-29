import {
  ArrowUpLeft,
  HeartPulse,
  ScanLine,
  ShieldPlus,
  Smile,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { ConsultationNote, SectionHeading } from "./ui";
import { whatsappUrl } from "@/lib/clinic";

const services = [
  {
    icon: Sparkles,
    number: "01",
    title: "تجميل الابتسامة",
    text: "عناية بتناسق الأسنان ولونها، لابتسامة طبيعية تعبّر عنك.",
    tag: "جمال طبيعي",
  },
  {
    icon: ShieldPlus,
    number: "02",
    title: "الحشوات التجميلية",
    text: "ترميم الأسنان بمواد تتناغم مع لونها، مع الاهتمام بالشكل والوظيفة.",
    tag: "دقة في التفاصيل",
  },
  {
    icon: HeartPulse,
    number: "03",
    title: "علاج جذور الأسنان",
    text: "تقييم دقيق وعناية مدروسة للحفاظ على أسنانك الطبيعية قدر الإمكان.",
    tag: "راحة وعناية",
  },
  {
    icon: WandSparkles,
    number: "04",
    title: "تنظيف وتبييض الأسنان",
    text: "عناية بصحة اللثة وإشراقة الأسنان، وفق ما يناسب حالتك.",
    tag: "انتعاش وإشراقة",
  },
  {
    icon: Smile,
    number: "05",
    title: "التيجان والجسور",
    text: "تعويضات تُخطط بعناية لاستعادة مظهر الأسنان ووظيفتها.",
    tag: "توازن ووظيفة",
  },
  {
    icon: ScanLine,
    number: "06",
    title: "الفحص والوقاية",
    text: "فحص شامل وإرشادات شخصية للعناية اليومية بصحة فمك وأسنانك.",
    tag: "صحة تدوم",
  },
];

export function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="heading-row">
          <SectionHeading
            eyebrow="رعاية متكاملة لابتسامتك"
            title="تفاصيل صغيرة. فرق كبير."
            description="من الفحص الأول إلى اللمسة الأخيرة، نهتم بما تحتاجه ابتسامتك."
          />
          <a
            className="text-link"
            href={whatsappUrl(
              "مرحباً، أود الاستفسار عن العلاج المناسب لحالتي.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            اسأل عن العلاج المناسب <ArrowUpLeft size={18} />
          </a>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, ...service }) => (
            <a
              key={service.number}
              className="service-card"
              href={whatsappUrl(
                `مرحباً دكتور أصلان، أرغب بالاستفسار عن ${service.title}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-top">
                <span className="service-icon">
                  <Icon size={29} strokeWidth={1.4} />
                </span>
                <span className="service-number" dir="ltr">
                  {service.number}
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-bottom">
                <span>{service.tag}</span>
                <ArrowUpLeft size={20} />
              </div>
            </a>
          ))}
        </div>
        <ConsultationNote />
      </div>
    </section>
  );
}

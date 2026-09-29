import { ArrowUpLeft, BookOpen, Bot, Send } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { Eyebrow } from "./ui";

export function Education() {
  return (
    <section
      id="education"
      className="education-section"
      aria-labelledby="education-title"
    >
      <div className="container education-panel">
        <div className="education-symbol" aria-hidden="true">
          <BookOpen size={44} strokeWidth={1.3} />
          <span>وعي أكثر، ابتسامة أصح.</span>
        </div>
        <div className="education-copy">
          <Eyebrow>المعرفة جزء من العناية</Eyebrow>
          <h2 id="education-title">طب الأسنان المبسط</h2>
          <p>
            رافق د. أصلان في قناته للتوعية بصحة الفم والأسنان. معرفة بلغة بسيطة،
            تساعدك على فهم أسنانك والاهتمام بابتسامتك كل يوم.
          </p>
          <div className="education-actions">
            <a
              className="button button-primary"
              href={clinic.educationChannel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send size={18} aria-hidden="true" />
              تابع القناة على تيليغرام
              <ArrowUpLeft
                size={17}
                className="button-arrow"
                aria-hidden="true"
              />
            </a>
            <a
              className="text-link"
              href={clinic.telegramBot}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Bot size={19} aria-hidden="true" />
              تواصل عبر بوت تيليغرام
              <ArrowUpLeft size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

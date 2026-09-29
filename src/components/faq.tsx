import { Plus } from "lucide-react";
import { SectionHeading } from "./ui";

const questions = [
  {
    question: "كيف أحجز موعداً في العيادة؟",
    answer:
      "اضغط على زر الحجز عبر واتساب وأرسل رسالتك. نتواصل معك لتحديد الوقت المناسب وتأكيد موعدك. فتح المحادثة وحده لا يعني تأكيد الحجز.",
  },
  {
    question: "ماذا تتضمن الزيارة الأولى؟",
    answer:
      "نستمع إلى ما يزعجك، نفحص حالة الفم والأسنان، ثم نشرح الخيارات العلاجية والتكلفة المتوقعة قبل البدء بأي إجراء.",
  },
  {
    question: "هل يمكن معرفة تكلفة العلاج قبل الزيارة؟",
    answer:
      "يمكنك الاستفسار عبر واتساب، لكن تحديد التكلفة النهائية يتطلب فحص الحالة ومعرفة تفاصيل العلاج المناسب لك.",
  },
  {
    question: "هل توجد متابعة وضمان بعد العلاج؟",
    answer:
      "تُحدّد مواعيد المتابعة بحسب حالتك وخطة العلاج. تُوضّح شروط أي ضمان ومدته واستثناءاته قبل الإجراء؛ وتختلف النتائج من حالة لأخرى.",
  },
];
export function FAQ() {
  return (
    <section className="section faq-section">
      <div className="container faq-grid">
        <SectionHeading
          eyebrow="نجيب عن أسئلتك"
          title="راحة بالك تبدأ بالوضوح."
          description="هذه بعض الأسئلة التي قد تخطر ببالك قبل زيارتك الأولى."
        />
        <div className="faq-list">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <Plus size={19} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

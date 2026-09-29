export const clinic = {
  name: "دكتور أصلان صباح نوري آل آصلان الموسوي",
  shortName: "د. أصلان الموسوي",
  englishName: "Dr. Aslan Sabah Nouri Al-Alousi",
  specialty: "طبيب أسنان ممارس",
  phone: "+9647729035702",
  bioQuote: "انا قصص كثيرة لا أعرف ماذا تقرأ انت",
  facebook: "https://www.facebook.com/share/19dkd8abtf/",
  tiktok: "https://tiktok.com/@xxaslanxx",
  telegram: "https://t.me/Aslan_97",
  telegramBot: "https://t.me/Aslan_1997bot",
  educationChannel: "https://t.me/dentist_aslan",
  address: "كربلاء، حي الموظفين، بجوار أرخوتلك رقم ٦",
  originalAddress: "کربلا، حی الموظفین، کنار ارخطلک شماره ۶",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/xxaslanxx",
  mapEmbed:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d294.2443001441524!2d44.01011601774608!3d32.609186348697236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2siq!4v1790702453601!5m2!1sen!2siq",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
};

export function whatsappUrl(
  message = "مرحباً دكتور أصلان، أرغب بحجز موعد في العيادة.",
) {
  return `https://wa.me/${clinic.phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export const mapSearchUrl =
  "https://www.google.com/maps/search/?api=1&query=32.609186348697236%2C44.01011601774608";

// Add only authentic, patient-approved clinic cases here. No invented results.
export type DentalCase = {
  id: string;
  title: string;
  description: string;
  before: string;
  after: string;
  treatment: string;
};
export const dentalCases: DentalCase[] = [];

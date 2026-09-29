import type { Metadata, Viewport } from "next";
import "@fontsource-variable/noto-sans-arabic";
import "./globals.css";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  ...(clinic.siteUrl
    ? {
        metadataBase: new URL(clinic.siteUrl),
        alternates: { canonical: clinic.siteUrl },
      }
    : {}),
  title: "د. أصلان الموسوي | طبيب أسنان في كربلاء – حي الموظفين",
  description:
    "عيادة الدكتور أصلان صباح نوري آل آصلان الموسوي في كربلاء، حي الموظفين. رعاية عامة وتجميلية للأسنان، مواعيد مخصصة ومتابعة شخصية. احجز عبر واتساب +9647729035702.",
  applicationName: "عيادة د. أصلان الموسوي",
  openGraph: {
    title: "د. أصلان الموسوي | ابتسامتك تبدأ بثقة",
    description:
      "عناية شخصية بأسنانك في كربلاء، حي الموظفين. تواصل معنا لحجز موعدك.",
    locale: "ar_IQ",
    type: "website",
    siteName: "عيادة د. أصلان الموسوي",
    ...(clinic.siteUrl ? { url: clinic.siteUrl } : {}),
  },
  twitter: {
    card: "summary",
    title: "عيادة د. أصلان الموسوي – كربلاء",
    description: "رعاية عامة وتجميلية لأسنانك. احجز موعدك عبر واتساب.",
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173f35",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar-IQ" dir="rtl">
      <body>
        <a className="skip-link" href="#main-content">
          انتقل إلى المحتوى
        </a>
        {children}
      </body>
    </html>
  );
}

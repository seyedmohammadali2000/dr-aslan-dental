import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About, BookingSteps, Experience } from "@/components/experience";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Contact, Footer } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { Education } from "@/components/education";
import { clinic } from "@/lib/clinic";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    alternateName: clinic.englishName,
    description: "طبيب أسنان ممارس في كربلاء، العراق",
    telephone: clinic.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "حي الموظفين، بجوار أرخوتلك رقم ٦",
      addressLocality: "كربلاء",
      addressCountry: "IQ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.609186348697236,
      longitude: 44.01011601774608,
    },
    sameAs: [clinic.instagram, clinic.facebook, clinic.tiktok, clinic.telegram],
    ...(clinic.siteUrl ? { url: clinic.siteUrl } : {}),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Experience />
        <BookingSteps />
        <Portfolio />
        <Education />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

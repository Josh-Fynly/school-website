import { siteConfig } from "@/lib/site";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",

    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "No.12 Udo EbU Street / Inyang Effe Street, Ekit Itam II",
      addressLocality: "Itu LGA",
      addressRegion: "Akwa Ibom State",
      addressCountry: "Nigeria",
    },

    areaServed: "Akwa Ibom State, Nigeria",

    educationalLevel: ["Crèche", "Nursery", "Primary"],

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+2348035732076",
        contactType: "admissions",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

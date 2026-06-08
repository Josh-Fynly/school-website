import { siteConfig } from "@/lib/site";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",

    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,

    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressCountry: "NG",
    },

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone[0],
        contactType: "Admissions",
        email: siteConfig.email,
        areaServed: "NG",
      },
    ],

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

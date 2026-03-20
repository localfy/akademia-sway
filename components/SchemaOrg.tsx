export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://akademia-sway.pl/#business",
    name: "Akademia Sway",
    alternateName: "Sway pole & aerial sports",
    description:
      "Profesjonalne szkolenia dla instruktorów pole dance w Poznaniu. Jednodniowe szkolenia metodyczne, bezpieczeństwo, technika i dynamika.",
    url: "https://akademia-sway.pl",
    telephone: "+48509100912",
    email: "akademia.sway@gmail.com",
    taxID: "7831904251",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Jeansowa 18",
      addressLocality: "Poznań",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "52.4064",
      longitude: "16.9268",
    },
    sameAs: ["https://www.instagram.com/akademia.sway"],
    founder: {
      "@type": "Person",
      name: "Joanna Olejniczak",
    },
    priceRange: "599-1199 PLN",
    currenciesAccepted: "PLN",
    paymentAccepted: "Bank transfer",
    areaServed: {
      "@type": "City",
      name: "Poznań",
    },
    image: "https://akademia-sway.vercel.app/joanna-3.jpg",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  price,
  url,
}: {
  name: string;
  description: string;
  price: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "Akademia Sway",
      url: "https://akademia-sway.pl",
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "PLN",
      url,
    },
    areaServed: {
      "@type": "City",
      name: "Poznań",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import { SITE } from "./site-config";
import type { Product } from "./products-data";
import type { City } from "./cities-data";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/images/newlogos.png`,
    foundingDate: SITE.founded,
    sameAs: SITE.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "te"],
      },
    ],
  };
}

export function localBusinessSchema(city?: City) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE.url}/#localbusiness${city ? `-${city.slug}` : ""}`,
    name: city ? `${SITE.name} — ${city.name}` : SITE.name,
    image: city ? city.heroImage : `${SITE.url}/og-image.jpg`,
    url: city ? `${SITE.url}/locations/${city.slug}` : SITE.url,
    telephone: SITE.phone,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: city ? city.name : SITE.address.addressLocality,
      addressRegion: city ? city.region : SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: city ? city.areas.map((a) => ({ "@type": "Place", name: a })) : SITE.cities.map((c) => ({ "@type": "City", name: c })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
  };
}

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.metaDescription,
    image: [product.heroImage, ...product.gallery.map((g) => g.src)],
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: product.price.currency,
      price: product.price.minPrice,
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/products/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: SITE.name,
      },
    },
  };
}

export function serviceSchema(product: Product) {
  return genericServiceSchema(
    { title: product.title, metaDescription: product.metaDescription, slug: product.slug },
    "products",
    `${product.title} Installation`
  );
}

/** Reusable Service schema for any {title, metaDescription, slug} item — products, services, solutions. */
export function genericServiceSchema(
  item: { title: string; metaDescription: string; slug: string },
  urlSegment: string,
  serviceName?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: item.title,
    name: serviceName ?? item.title,
    description: item.metaDescription,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: SITE.cities.map((c) => ({ "@type": "City", name: c })),
    url: `${SITE.url}/${urlSegment}/${item.slug}`,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function reviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "Organization",
      name: SITE.name,
    },
    ratingValue: "4.9",
    reviewCount: "182",
    bestRating: "5",
  };
}

/** Speakable schema helps voice assistants and AI Overviews read the right sections aloud. */
export function speakableSchema(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

export type City = {
  slug: string;
  name: string;
  region: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  areas: string[];
  metaTitle: string;
  metaDescription: string;
};

export const CITIES: City[] = [
  {
    slug: "hyderabad",
    name: "Hyderabad",
    region: "Telangana",
    heroImage: "https://picsum.photos/seed/abhee-city-hyderabad/1800/1200",
    heroImageAlt: "Modern smart villa in Hyderabad",
    intro: "Serving Hyderabad's villas, gated communities and premium apartments.",
    areas: ["Jubilee Hills", "Banjara Hills", "Gachibowli", "Kokapet", "Kompally"],
    metaTitle: "Smart Home Automation in Hyderabad | ABHEE Smart Liv",
    metaDescription:
      "Smart home automation, home theatre, security and lighting installation in Hyderabad — Jubilee Hills, Banjara Hills, Gachibowli, Kokapet. Book a free consultation.",
  },
  {
    slug: "vijayawada",
    name: "Vijayawada",
    region: "Andhra Pradesh",
    heroImage: "https://picsum.photos/seed/abhee-city-vijayawada/1800/1200",
    heroImageAlt: "Smart home installation in Vijayawada",
    intro: "ABHEE's home city — full showroom, design studio and installation team.",
    areas: ["Benz Circle", "MG Road", "Governorpet", "Poranki"],
    metaTitle: "Smart Home Automation in Vijayawada | ABHEE Smart Liv",
    metaDescription:
      "Vijayawada's premium smart home automation company. Home theatre, security, lighting and automation across Benz Circle, MG Road and Poranki.",
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    region: "Karnataka",
    heroImage: "https://picsum.photos/seed/abhee-city-bangalore/1800/1200",
    heroImageAlt: "Smart home automation installation in Bangalore",
    intro: "Bringing ABHEE's premium automation and security systems to Bangalore homes.",
    areas: ["Indiranagar", "Whitefield", "Sarjapur Road", "Hebbal"],
    metaTitle: "Smart Home Automation in Bangalore | ABHEE Smart Liv",
    metaDescription:
      "Smart home automation, home theatre and AI CCTV installation in Bangalore — Indiranagar, Whitefield, Sarjapur Road and Hebbal. Book a consultation.",
  },
  {
    slug: "chennai",
    name: "Chennai",
    region: "Tamil Nadu",
    heroImage: "https://picsum.photos/seed/abhee-city-chennai/1800/1200",
    heroImageAlt: "Smart home automation installation in Chennai",
    intro: "Premium home automation and security systems for Chennai's finest homes.",
    areas: ["Adyar", "ECR", "Anna Nagar", "OMR"],
    metaTitle: "Smart Home Automation in Chennai | ABHEE Smart Liv",
    metaDescription:
      "Smart home automation, home theatre and security installation in Chennai — Adyar, ECR, Anna Nagar, OMR. Book a free ABHEE consultation.",
  },
];

export function getCityBySlug(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}

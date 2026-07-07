export type Brand = {
  slug: string;
  name: string;
  category: string;
  logo: string;
  description: string;
};

// Generic category placeholders — swap in real partner names & logos when available.
export const BRANDS: Brand[] = [
  {
    slug: "automation-technology-partner",
    name: "Automation Technology Partner",
    category: "Home Automation",
    logo: "/images/brands/automation-technology-partner/logo.png",
    description: "Core automation hardware and app platform used across ABHEE's smart home installations.",
  },
  {
    slug: "security-surveillance-partner",
    name: "Security & Surveillance Partner",
    category: "CCTV & Access Control",
    logo: "/images/brands/security-surveillance-partner/logo.png",
    description: "AI-enabled cameras, NVR/DVR systems and access control hardware for homes and campuses.",
  },
  {
    slug: "audio-visual-partner",
    name: "Audio-Visual Partner",
    category: "Home Theatre & Professional Audio",
    logo: "/images/brands/audio-visual-partner/logo.png",
    description: "Speakers, amplifiers, projectors and screens used in ABHEE's theatre and audio installations.",
  },
  {
    slug: "lighting-partner",
    name: "Lighting Technology Partner",
    category: "Smart Lighting",
    logo: "/images/brands/lighting-partner/logo.png",
    description: "Smart lighting modules and fixtures used across ABHEE's scene-based lighting designs.",
  },
  {
    slug: "flooring-surfaces-partner",
    name: "Flooring & Surfaces Partner",
    category: "Wooden Flooring & Sports Surfaces",
    logo: "/images/brands/flooring-surfaces-partner/logo.png",
    description: "Engineered wood, artificial turf and synthetic sports flooring materials.",
  },
  {
    slug: "access-gate-partner",
    name: "Access & Gate Automation Partner",
    category: "Gates & Boom Barriers",
    logo: "/images/brands/access-gate-partner/logo.png",
    description: "Gate motors, boom barriers and RFID/ANPR hardware for residential and commercial entrances.",
  },
];

export function getBrandBySlug(slug: string) {
  return BRANDS.find((b) => b.slug === slug);
}

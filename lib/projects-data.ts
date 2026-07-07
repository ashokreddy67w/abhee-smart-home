export type Project = {
  slug: string;
  name: string;
  location: string;
  citySlug: string;
  industry: string; // solution slug from lib/solutions-data.ts
  productsInstalled: string[]; // product slugs from lib/products-data.ts
  description: string;
  coverImage: string;
  coverImageAlt: string;
  gallery: { src: string; alt: string }[];
  testimonial: { quote: string; author: string };
  completionDate: string;
  metaTitle: string;
  metaDescription: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "jubilee-hills-villa",
    name: "Private Villa, Jubilee Hills",
    location: "Jubilee Hills, Hyderabad",
    citySlug: "hyderabad",
    industry: "villas",
    productsInstalled: ["smart-home-automation", "home-theatre", "ai-cctv-cameras", "remote-gates", "swimming-pool-lifestyle-automation"],
    description:
      "A full villa build combining whole-home automation, a dedicated home theatre, perimeter CCTV, an automated entrance gate and a pool with integrated filtration and lighting — designed and installed as one coordinated project from foundation stage.",
    coverImage: "/images/projects/jubilee-hills-villa/cover.jpg",
    coverImageAlt: "Luxury villa exterior in Jubilee Hills, Hyderabad, lit at dusk",
    gallery: [
      { src: "/images/projects/jubilee-hills-villa/gallery-1.jpg", alt: "Home theatre room in the Jubilee Hills villa" },
      { src: "/images/projects/jubilee-hills-villa/gallery-2.jpg", alt: "Automated pool deck at the Jubilee Hills villa" },
      { src: "/images/projects/jubilee-hills-villa/gallery-3.jpg", alt: "Smart automation control panel installed in the villa" },
    ],
    testimonial: {
      quote: "Every system was planned together from day one, so nothing felt bolted on afterwards. The team managed the whole build without a single delay to our move-in date.",
      author: "Homeowner, Jubilee Hills",
    },
    completionDate: "2025-11",
    metaTitle: "Villa Automation Project — Jubilee Hills, Hyderabad | ABHEE Smart Liv",
    metaDescription: "A full villa automation, home theatre, security and pool project in Jubilee Hills, Hyderabad, by ABHEE Smart Liv.",
  },
  {
    slug: "kompally-gated-community",
    name: "Gated Community, Kompally",
    location: "Kompally, Hyderabad",
    citySlug: "hyderabad",
    industry: "gated-communities",
    productsInstalled: ["remote-gates", "ai-cctv-cameras", "access-control-systems", "sports-recreational-solutions"],
    description:
      "Community-wide boom barriers, perimeter CCTV, biometric access control for the clubhouse, and a multi-sport court and running track installed for a 180-unit gated community.",
    coverImage: "/images/projects/kompally-gated-community/cover.jpg",
    coverImageAlt: "Gated community entrance with boom barrier in Kompally, Hyderabad",
    gallery: [
      { src: "/images/projects/kompally-gated-community/gallery-1.jpg", alt: "Boom barrier at the Kompally community entrance" },
      { src: "/images/projects/kompally-gated-community/gallery-2.jpg", alt: "Sports court installed within the Kompally community" },
    ],
    testimonial: {
      quote: "Managing security and amenities across 180 homes needed one team who understood the whole picture, not separate vendors for each system. ABHEE delivered exactly that.",
      author: "Resident Welfare Association, Kompally",
    },
    completionDate: "2025-08",
    metaTitle: "Gated Community Security & Amenities Project — Kompally, Hyderabad | ABHEE Smart Liv",
    metaDescription: "Boom barriers, CCTV, access control and sports courts for a gated community in Kompally, Hyderabad, by ABHEE Smart Liv.",
  },
  {
    slug: "benz-circle-school-campus",
    name: "School Campus, Benz Circle",
    location: "Benz Circle, Vijayawada",
    citySlug: "vijayawada",
    industry: "schools",
    productsInstalled: ["ai-cctv-cameras", "professional-audio", "projectors", "sports-recreational-solutions", "access-control-systems"],
    description:
      "Campus-wide CCTV and access control, P.A. sound and projector systems for classrooms and the assembly hall, plus a running track and multi-sport court for a growing school campus.",
    coverImage: "/images/projects/benz-circle-school-campus/cover.jpg",
    coverImageAlt: "School campus running track and sports facility in Vijayawada",
    gallery: [
      { src: "/images/projects/benz-circle-school-campus/gallery-1.jpg", alt: "Running track at the Benz Circle school campus" },
      { src: "/images/projects/benz-circle-school-campus/gallery-2.jpg", alt: "Assembly hall P.A. and projector setup at the school" },
    ],
    testimonial: {
      quote: "Parents notice the security upgrades immediately, and the new sports facilities have become the highlight of the campus. The installation caused almost no disruption to the school term.",
      author: "School Administrator, Vijayawada",
    },
    completionDate: "2025-05",
    metaTitle: "School Campus Security & Sports Project — Vijayawada | ABHEE Smart Liv",
    metaDescription: "CCTV, access control, P.A. systems and sports infrastructure for a school campus in Vijayawada, by ABHEE Smart Liv.",
  },
  {
    slug: "tirupati-function-hall",
    name: "Function Hall, Alipiri Road",
    location: "Alipiri Road, Tirupati",
    citySlug: "tirupati",
    industry: "function-halls",
    productsInstalled: ["professional-audio", "projectors", "smart-lighting", "remote-gates"],
    description:
      "A full technology fit-out for a new function hall near Alipiri — P.A. sound reinforcement, an LED display wall for the stage, scene-based lighting for the banquet floor, and a boom barrier for event-day vehicle management.",
    coverImage: "/images/projects/tirupati-function-hall/cover.jpg",
    coverImageAlt: "Function hall stage with LED display and lighting in Tirupati",
    gallery: [
      { src: "/images/projects/tirupati-function-hall/gallery-1.jpg", alt: "Function hall banquet floor lighting in Tirupati" },
      { src: "/images/projects/tirupati-function-hall/gallery-2.jpg", alt: "LED display wall on the function hall stage" },
    ],
    testimonial: {
      quote: "Our first fully-booked wedding season went without a single technical issue. The sound and lighting systems have become a selling point when we show the hall to new clients.",
      author: "Venue Owner, Tirupati",
    },
    completionDate: "2025-12",
    metaTitle: "Function Hall Technology Fit-Out — Tirupati | ABHEE Smart Liv",
    metaDescription: "P.A. sound, LED display, lighting and gate automation for a function hall in Tirupati, by ABHEE Smart Liv.",
  },
  {
    slug: "whitefield-corporate-office",
    name: "Corporate Office, Whitefield",
    location: "Whitefield, Bangalore",
    citySlug: "bangalore",
    industry: "offices",
    productsInstalled: ["smart-home-automation", "ai-cctv-cameras", "access-control-systems", "motorized-curtains"],
    description:
      "Floor-wide automation, biometric access control for executive areas and server rooms, CCTV coverage, and motorised blinds across a four-floor corporate office fit-out.",
    coverImage: "/images/projects/whitefield-corporate-office/cover.jpg",
    coverImageAlt: "Modern corporate office interior in Whitefield, Bangalore",
    gallery: [
      { src: "/images/projects/whitefield-corporate-office/gallery-1.jpg", alt: "Office floor with automated lighting in Whitefield" },
      { src: "/images/projects/whitefield-corporate-office/gallery-2.jpg", alt: "Access control at the Whitefield office entrance" },
    ],
    testimonial: {
      quote: "ABHEE scoped the project floor by floor and delivered on schedule around our fit-out timeline, which mattered more to us than anything else.",
      author: "Facilities Manager, Whitefield",
    },
    completionDate: "2025-09",
    metaTitle: "Corporate Office Automation Project — Whitefield, Bangalore | ABHEE Smart Liv",
    metaDescription: "Automation, access control, CCTV and blinds for a corporate office fit-out in Whitefield, Bangalore, by ABHEE Smart Liv.",
  },
  {
    slug: "mvp-colony-hospital",
    name: "Hospital, MVP Colony",
    location: "MVP Colony, Visakhapatnam",
    citySlug: "visakhapatnam",
    industry: "hospitals",
    productsInstalled: ["ai-cctv-cameras", "access-control-systems", "video-door-phones", "professional-audio"],
    description:
      "Zone-based access control for wards, pharmacy and records, CCTV across corridors and entrances, video door phones at restricted doors, and a P.A. announcement system for waiting areas.",
    coverImage: "/images/projects/mvp-colony-hospital/cover.jpg",
    coverImageAlt: "Hospital corridor with access control and CCTV in Visakhapatnam",
    gallery: [
      { src: "/images/projects/mvp-colony-hospital/gallery-1.jpg", alt: "Hospital entrance access control in MVP Colony" },
      { src: "/images/projects/mvp-colony-hospital/gallery-2.jpg", alt: "Hospital waiting area with P.A. announcement system" },
    ],
    testimonial: {
      quote: "Zone-based access was the requirement that mattered most to us, and ABHEE configured it exactly to our department structure without disrupting patient areas during installation.",
      author: "Hospital Administrator, Visakhapatnam",
    },
    completionDate: "2026-02",
    metaTitle: "Hospital Security & Access Control Project — Visakhapatnam | ABHEE Smart Liv",
    metaDescription: "Access control, CCTV and P.A. systems for a hospital in MVP Colony, Visakhapatnam, by ABHEE Smart Liv.",
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

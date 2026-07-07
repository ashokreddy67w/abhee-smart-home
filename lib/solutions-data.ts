export type Solution = {
  slug: string;
  name: string;
  industryLabel: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  solutionsProvided: string[]; // product slugs from lib/products-data.ts
  whyPoints: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "villas",
    name: "Villas",
    industryLabel: "Residential — Villas",
    heroImage: "/images/solutions/villas/hero.jpg",
    heroImageAlt: "Luxury smart villa exterior with pool at dusk",
    intro:
      "Living solutions for smart, secure, comfortable villa life — from the front gate to the pool deck, designed as one build.",
    solutionsProvided: [
      "smart-home-automation",
      "home-theatre",
      "professional-audio",
      "smart-door-locks",
      "video-door-phones",
      "ai-cctv-cameras",
      "smart-lighting",
      "motorized-curtains",
      "remote-gates",
      "solar-fencing",
      "swimming-pool-lifestyle-automation",
      "wooden-flooring",
      "artificial-grass",
    ],
    whyPoints: [
      { title: "Smart Security", text: "Gates, locks, cameras and fencing designed as one perimeter, not separate purchases." },
      { title: "Luxury Comfort", text: "Premium living with lighting, curtains and climate tuned to how the villa is actually used." },
      { title: "Energy Efficiency", text: "Scheduled lighting, solar-powered fencing and efficient automation reduce running costs." },
      { title: "Expert Support", text: "Professional installation and ongoing service from a single ABHEE team." },
    ],
    faqs: [
      { q: "Can ABHEE handle a full villa build from planning to move-in?", a: "Yes, ABHEE manages the full villa project — automation, theatre, security, pool and exterior systems — as one coordinated build." },
      { q: "Is villa automation retrofit-friendly for an existing home?", a: "Yes, most systems are designed to retrofit into an existing villa without breaking walls or full rewiring." },
    ],
    metaTitle: "Smart Home Solutions for Villas | ABHEE Smart Liv",
    metaDescription:
      "Complete smart villa solutions — automation, home theatre, security, lighting, pool and exteriors — designed and installed by ABHEE Smart Liv across South India.",
  },
  {
    slug: "apartments",
    name: "Apartments",
    industryLabel: "Residential — Apartments",
    heroImage: "/images/solutions/apartments/hero.jpg",
    heroImageAlt: "Modern apartment interior with smart lighting and automation",
    intro:
      "Retrofit-friendly automation and security systems designed for apartment living, without breaking walls or wiring.",
    solutionsProvided: [
      "smart-home-automation",
      "smart-door-locks",
      "video-door-phones",
      "ai-cctv-cameras",
      "smart-lighting",
      "motorized-curtains",
      "wooden-flooring",
      "access-control-systems",
    ],
    whyPoints: [
      { title: "Retrofit First", text: "Every system is designed to install into a finished apartment without rewiring or wall damage." },
      { title: "Compact-Space Design", text: "Automation and lighting scaled to apartment layouts, not oversized villa systems." },
      { title: "Building-Wide Access", text: "Access control that works across a single unit or an entire apartment tower." },
      { title: "Fast Turnaround", text: "Most apartment installations complete in days, not weeks." },
    ],
    faqs: [
      { q: "Can smart home systems be installed in an already-furnished apartment?", a: "Yes, ABHEE's apartment systems are built for retrofit installation with minimal disruption to a furnished home." },
      { q: "Does ABHEE work with apartment building management on shared access control?", a: "Yes, ABHEE designs building-wide access control that covers both individual units and shared entrances." },
    ],
    metaTitle: "Smart Home Solutions for Apartments | ABHEE Smart Liv",
    metaDescription:
      "Retrofit-friendly smart automation, security and lighting for apartments across Hyderabad, Vijayawada, Bangalore and Chennai. ABHEE Smart Liv.",
  },
  {
    slug: "gated-communities",
    name: "Gated Communities",
    industryLabel: "Residential — Gated Communities",
    heroImage: "/images/solutions/gated-communities/hero.jpg",
    heroImageAlt: "Gated community entrance with boom barrier and security cabin",
    intro:
      "One-stop solutions for gated communities — boom barriers, surveillance, sports facilities and clubhouse automation, managed as one system.",
    solutionsProvided: [
      "remote-gates",
      "ai-cctv-cameras",
      "video-door-phones",
      "access-control-systems",
      "solar-fencing",
      "wooden-flooring",
      "sports-recreational-solutions",
      "swimming-pool-lifestyle-automation",
      "smart-lighting",
    ],
    whyPoints: [
      { title: "Enhanced Security", text: "Round-the-clock protection with boom barriers, CCTV and perimeter fencing for your community." },
      { title: "Modern Amenities", text: "World-class facilities — courts, pools and gyms — for a premium community lifestyle." },
      { title: "Sustainable Living", text: "Eco-friendly solutions like solar fencing for a greener, lower-cost community." },
      { title: "Smart Management", text: "Advanced access and surveillance systems for efficient day-to-day community operations." },
    ],
    faqs: [
      { q: "Can ABHEE manage security for a whole gated community, not just one home?", a: "Yes, ABHEE designs community-wide boom barriers, CCTV networks and access control covering every entrance and common area." },
      { q: "Does ABHEE build sports and recreational facilities for communities?", a: "Yes, ABHEE installs swimming pools, gyms, children's play areas and sports courts as part of gated community projects." },
    ],
    metaTitle: "Smart Solutions for Gated Communities | ABHEE Smart Liv",
    metaDescription:
      "Complete gated community solutions — boom barriers, CCTV, access control, sports facilities and pools — from ABHEE Smart Liv, serving Andhra Pradesh, Telangana and Bengaluru.",
  },
  {
    slug: "schools",
    name: "Schools",
    industryLabel: "Education — Schools",
    heroImage: "/images/solutions/schools/hero.jpg",
    heroImageAlt: "School campus with running track and sports facilities",
    intro:
      "Innovative tools for enhanced learning and campus safety — surveillance, sports infrastructure and classroom AV in one build.",
    solutionsProvided: [
      "ai-cctv-cameras",
      "access-control-systems",
      "professional-audio",
      "projectors",
      "sports-recreational-solutions",
      "solar-fencing",
      "remote-gates",
    ],
    whyPoints: [
      { title: "Safe Campuses", text: "Advanced CCTV, access control and vehicle tracking for student and staff safety." },
      { title: "Better Learning", text: "Smart AV, projectors and P.A. systems for classrooms and assembly halls." },
      { title: "Premium Infrastructure", text: "World-class sports and campus infrastructure — courts, tracks and turf." },
      { title: "Sustainable Solutions", text: "Eco-friendly, long-lasting materials for a better tomorrow." },
    ],
    faqs: [
      { q: "Can ABHEE track school transport vehicles?", a: "Yes, ABHEE installs GPS vehicle tracking for school buses, giving administrators and parents live location visibility." },
      { q: "Does ABHEE build sports infrastructure for schools?", a: "Yes, ABHEE designs running tracks, courts, turf and indoor games facilities alongside campus security and AV systems." },
    ],
    metaTitle: "Smart Campus Solutions for Schools | ABHEE Smart Liv",
    metaDescription:
      "CCTV, access control, P.A. systems, projectors and sports infrastructure for schools — complete campus safety and learning solutions by ABHEE Smart Liv.",
  },
  {
    slug: "colleges",
    name: "Colleges",
    industryLabel: "Education — Colleges",
    heroImage: "/images/solutions/colleges/hero.jpg",
    heroImageAlt: "College campus building with modern infrastructure",
    intro:
      "Campus-wide safety, AV and recreational infrastructure for colleges — built to the same standard as ABHEE's school projects.",
    solutionsProvided: [
      "ai-cctv-cameras",
      "access-control-systems",
      "professional-audio",
      "projectors",
      "sports-recreational-solutions",
      "remote-gates",
      "smart-home-automation",
    ],
    whyPoints: [
      { title: "Safe Campuses", text: "Campus-wide CCTV, access control and gate automation across large college grounds." },
      { title: "Better Learning", text: "Lecture hall AV, podium sound and projection systems for modern teaching." },
      { title: "Premium Infrastructure", text: "Sports courts, turf and indoor games facilities for student life." },
      { title: "Sustainable Solutions", text: "Durable, low-maintenance materials suited to high daily footfall." },
    ],
    faqs: [
      { q: "Can ABHEE fit out lecture halls with AV and sound?", a: "Yes, ABHEE installs projectors, screens, podium microphones and P.A. sound systems for lecture halls and auditoriums." },
      { q: "Does ABHEE handle security across a large multi-building college campus?", a: "Yes, ABHEE designs centralised CCTV and access control networks that scale across multiple buildings and gates." },
    ],
    metaTitle: "Smart Campus Solutions for Colleges | ABHEE Smart Liv",
    metaDescription:
      "CCTV, access control, lecture hall AV and sports infrastructure for colleges — complete campus solutions by ABHEE Smart Liv.",
  },
  {
    slug: "function-halls",
    name: "Function Halls",
    industryLabel: "Hospitality — Function Halls",
    heroImage: "/images/solutions/function-halls/hero.jpg",
    heroImageAlt: "Illuminated function hall entrance with fountain at evening",
    intro:
      "Complete technology and infrastructure solutions for modern function halls — your vision, our technology, perfect events every time.",
    solutionsProvided: [
      "professional-audio",
      "ai-cctv-cameras",
      "access-control-systems",
      "remote-gates",
      "solar-fencing",
      "projectors",
      "smart-lighting",
      "swimming-pool-lifestyle-automation",
    ],
    whyPoints: [
      { title: "Quality Products", text: "Premium P.A. sound, LED displays and lighting sourced for reliability at scale." },
      { title: "Professional Installation", text: "Certified installation across sound, security and access systems." },
      { title: "Timely Delivery", text: "Projects scheduled to be event-ready, with no delays into your booking calendar." },
      { title: "Reliable Support", text: "Ongoing maintenance so systems perform for every event, not just the first one." },
    ],
    faqs: [
      { q: "Can ABHEE supply both sound systems and furniture for a function hall?", a: "Yes, ABHEE supplies P.A. sound, LED displays and access control alongside function hall chairs, sofas and lounge seating." },
      { q: "Does ABHEE handle vehicle entry management for large events?", a: "Yes, ABHEE installs boom barriers and RFID/automatic gate systems sized for high vehicle volume during events." },
    ],
    metaTitle: "Technology Solutions for Function Halls | ABHEE Smart Liv",
    metaDescription:
      "P.A. sound, CCTV, access control, LED displays and lounge seating for function halls — complete event infrastructure by ABHEE Smart Liv.",
  },
  {
    slug: "hotels",
    name: "Hotels",
    industryLabel: "Hospitality — Hotels",
    heroImage: "/images/solutions/hotels/hero.jpg",
    heroImageAlt: "Hotel lobby with premium lighting and lounge seating",
    intro:
      "Guest-facing comfort and back-of-house security, unified into one hospitality automation system.",
    solutionsProvided: [
      "ai-cctv-cameras",
      "access-control-systems",
      "smart-lighting",
      "home-theatre",
      "professional-audio",
      "smart-door-locks",
      "swimming-pool-lifestyle-automation",
      "motorized-curtains",
    ],
    whyPoints: [
      { title: "Guest Experience", text: "Keyless room entry, scene lighting and in-room entertainment guests notice and remember." },
      { title: "Back-of-House Security", text: "Access control and CCTV covering staff areas, storage and guest floors alike." },
      { title: "Amenity Automation", text: "Pool, lounge and gym facilities automated and easy for staff to manage." },
      { title: "Round-the-Clock Support", text: "Maintenance support built around a hotel's always-open operating hours." },
    ],
    faqs: [
      { q: "Can ABHEE install keyless entry across an entire hotel?", a: "Yes, ABHEE fits smart locks and access control across guest rooms, staff areas and back-of-house zones." },
      { q: "Does ABHEE automate hotel pools and lounges?", a: "Yes, pool filtration, lighting and lounge seating are designed as part of ABHEE's hospitality automation projects." },
    ],
    metaTitle: "Smart Automation Solutions for Hotels | ABHEE Smart Liv",
    metaDescription:
      "Keyless entry, CCTV, in-room entertainment and pool automation for hotels — hospitality-grade smart systems by ABHEE Smart Liv.",
  },
  {
    slug: "hospitals",
    name: "Hospitals",
    industryLabel: "Healthcare — Hospitals",
    heroImage: "/images/solutions/hospitals/hero.jpg",
    heroImageAlt: "Modern hospital building exterior",
    intro:
      "Access control, surveillance and announcement systems designed for the security and calm a hospital environment needs.",
    solutionsProvided: [
      "ai-cctv-cameras",
      "access-control-systems",
      "video-door-phones",
      "smart-lighting",
      "professional-audio",
      "remote-gates",
    ],
    whyPoints: [
      { title: "Patient & Staff Safety", text: "CCTV and access control covering wards, entrances and restricted areas." },
      { title: "Calm Environments", text: "Lighting and P.A. announcement systems tuned for a low-stress patient experience." },
      { title: "Controlled Access", text: "Restricted-zone access control for pharmacies, records and staff-only areas." },
      { title: "Dependable Uptime", text: "Systems and support built around a hospital's continuous, 24/7 operation." },
    ],
    faqs: [
      { q: "Can access control restrict entry to specific hospital zones?", a: "Yes, ABHEE configures access control by zone, so pharmacies, records rooms and wards can each have their own permissions." },
      { q: "Does ABHEE install P.A. systems for hospital announcements?", a: "Yes, ABHEE installs P.A. sound systems suited to hospital corridors and waiting areas." },
    ],
    metaTitle: "Smart Security Solutions for Hospitals | ABHEE Smart Liv",
    metaDescription:
      "CCTV, access control and P.A. systems for hospitals — security and communication infrastructure by ABHEE Smart Liv.",
  },
  {
    slug: "offices",
    name: "Offices",
    industryLabel: "Commercial — Offices",
    heroImage: "/images/solutions/offices/hero.jpg",
    heroImageAlt: "Modern corporate office interior with smart lighting",
    intro:
      "Automation, access control and comfort systems for offices, from a single cabin to a full corporate floor.",
    solutionsProvided: [
      "smart-home-automation",
      "ai-cctv-cameras",
      "access-control-systems",
      "smart-door-locks",
      "motorized-curtains",
      "wooden-flooring",
      "smart-lighting",
    ],
    whyPoints: [
      { title: "Workplace Security", text: "Access control and CCTV covering entrances, server rooms and executive floors." },
      { title: "Productive Comfort", text: "Lighting and blinds tuned to reduce glare and support focused work." },
      { title: "Energy Efficiency", text: "Scheduled lighting and automation that reduce office running costs." },
      { title: "Scalable Systems", text: "Systems that scale from a single cabin to a full multi-floor office." },
    ],
    faqs: [
      { q: "Can ABHEE automate a single floor within a larger office building?", a: "Yes, ABHEE scales automation and access control to a single floor, cabin or an entire office building." },
      { q: "Does ABHEE install access control for server rooms?", a: "Yes, restricted-access control for server rooms and executive areas is a standard part of ABHEE's office projects." },
    ],
    metaTitle: "Smart Automation Solutions for Offices | ABHEE Smart Liv",
    metaDescription:
      "Access control, CCTV, lighting and automation for corporate offices — workplace technology solutions by ABHEE Smart Liv.",
  },
  {
    slug: "commercial-buildings",
    name: "Commercial Buildings",
    industryLabel: "Commercial — Mixed-Use & Retail",
    heroImage: "/images/solutions/commercial-buildings/hero.jpg",
    heroImageAlt: "Modern commercial building exterior with landscaped entrance",
    intro:
      "Surveillance, access and gate automation for commercial and mixed-use buildings, sized for high daily footfall.",
    solutionsProvided: [
      "ai-cctv-cameras",
      "access-control-systems",
      "remote-gates",
      "smart-lighting",
      "professional-audio",
      "wooden-flooring",
    ],
    whyPoints: [
      { title: "High-Traffic Security", text: "CCTV and access control designed for buildings with continuous footfall." },
      { title: "Vehicle Management", text: "Automated gates and boom barriers for parking and loading access." },
      { title: "Tenant-Ready Systems", text: "Lighting and automation that work across multiple tenants and floors." },
      { title: "Long-Term Reliability", text: "Materials and systems specified for durability under heavy commercial use." },
    ],
    faqs: [
      { q: "Can ABHEE manage security across a multi-tenant commercial building?", a: "Yes, ABHEE designs CCTV and access control that works across shared entrances and multiple individual tenants." },
      { q: "Does ABHEE install vehicle gate automation for commercial parking?", a: "Yes, ABHEE installs boom barriers and automated gates sized for commercial parking and loading areas." },
    ],
    metaTitle: "Smart Security Solutions for Commercial Buildings | ABHEE Smart Liv",
    metaDescription:
      "CCTV, access control and gate automation for commercial and mixed-use buildings — by ABHEE Smart Liv, serving Andhra Pradesh, Telangana and Bengaluru.",
  },
];

export function getSolutionBySlug(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}

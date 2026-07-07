export type City = {
  slug: string;
  name: string;
  region: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  areas: string[];
  whyPoints: { title: string; text: string }[];
  industriesServed: string[]; // solution slugs from lib/solutions-data.ts
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const CITIES: City[] = [
  {
    slug: "hyderabad",
    name: "Hyderabad",
    region: "Telangana",
    heroImage: "/images/locations/hyderabad/hero.jpg",
    heroImageAlt: "Modern smart villa in Hyderabad",
    intro: "Serving Hyderabad's villas, gated communities and premium apartments.",
    areas: ["Jubilee Hills", "Banjara Hills", "Gachibowli", "Kokapet", "Kompally"],
    whyPoints: [
      { title: "Built for new-build villas", text: "Hyderabad's fastest-growing villa communities in Kokapet and Kompally get automation designed in at construction stage, not retrofitted later." },
      { title: "Gated community scale", text: "Boom barriers, CCTV and clubhouse automation sized for the large gated townships common across Gachibowli and the Outer Ring Road corridor." },
      { title: "IT-corridor timelines", text: "Installation scheduled around the fast handover timelines typical of Hyderabad's IT-corridor apartment and villa projects." },
      { title: "Local service team", text: "A Hyderabad-based support team for AMC visits and service calls, not a fly-in crew from another city." },
    ],
    industriesServed: ["villas", "gated-communities", "apartments", "offices"],
    faqs: [
      { q: "Which parts of Hyderabad does ABHEE cover?", a: "ABHEE installs and supports smart home systems across Jubilee Hills, Banjara Hills, Gachibowli, Kokapet, Kompally and surrounding areas." },
      { q: "Do you work with builders on new villa projects in Hyderabad?", a: "Yes, ABHEE partners with developers to pre-wire automation, security and entertainment systems into villas and gated communities during construction." },
    ],
    metaTitle: "Smart Home Automation in Hyderabad | ABHEE Smart Liv",
    metaDescription:
      "Smart home automation, home theatre, security and lighting installation in Hyderabad — Jubilee Hills, Banjara Hills, Gachibowli, Kokapet. Book a free consultation.",
  },
  {
    slug: "vijayawada",
    name: "Vijayawada",
    region: "Andhra Pradesh",
    heroImage: "/images/locations/vijayawada/hero.jpg",
    heroImageAlt: "Smart home installation in Vijayawada",
    intro: "ABHEE's home city — full showroom, design studio and installation team.",
    areas: ["Benz Circle", "MG Road", "Governorpet", "Poranki"],
    whyPoints: [
      { title: "Our home base", text: "Vijayawada is where ABHEE started 18+ years ago, and where our showroom, design studio and largest installation team are based." },
      { title: "Every system, one city", text: "The full 16-system catalogue — automation, theatre, security, sports and lifestyle facilities — is on display and serviced locally." },
      { title: "Fastest response times", text: "As our home city, Vijayawada gets the shortest AMC and service call turnaround of any location we serve." },
      { title: "Deep local relationships", text: "Long-standing relationships with Vijayawada builders and gated community associations built over nearly two decades." },
    ],
    industriesServed: ["villas", "apartments", "gated-communities", "function-halls", "commercial-buildings"],
    faqs: [
      { q: "Can I visit an ABHEE showroom in Vijayawada?", a: "Yes, our Vijayawada showroom lets you see and test home theatre, lighting, automation and security systems before you decide." },
      { q: "Is Vijayawada ABHEE's head office?", a: "Yes, Vijayawada is ABHEE Smart Home Systems' home city, with the design studio and largest installation team based here." },
    ],
    metaTitle: "Smart Home Automation in Vijayawada | ABHEE Smart Liv",
    metaDescription:
      "Vijayawada's premium smart home automation company. Home theatre, security, lighting and automation across Benz Circle, MG Road and Poranki.",
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    region: "Karnataka",
    heroImage: "/images/locations/bangalore/hero.jpg",
    heroImageAlt: "Smart home automation installation in Bangalore",
    intro: "Bringing ABHEE's premium automation and security systems to Bangalore homes.",
    areas: ["Indiranagar", "Whitefield", "Sarjapur Road", "Hebbal"],
    whyPoints: [
      { title: "Tech-corridor expertise", text: "Automation and access control designed for the apartment towers and tech-park-adjacent villas of Whitefield and Sarjapur Road." },
      { title: "Retrofit specialists", text: "Most Bangalore installs are retrofits into existing apartments — ABHEE's systems are designed to avoid rewiring or breaking walls." },
      { title: "Security-first design", text: "AI CCTV, video door phones and access control sized for both individual apartments and large gated townships." },
      { title: "Office & commercial reach", text: "Beyond homes, ABHEE fits out corporate offices and commercial spaces across Bangalore's business districts." },
    ],
    industriesServed: ["apartments", "villas", "offices", "commercial-buildings"],
    faqs: [
      { q: "Does ABHEE install in Bangalore apartments, not just villas?", a: "Yes, a large share of ABHEE's Bangalore work is apartment retrofits across Indiranagar, Whitefield and Sarjapur Road." },
      { q: "Can ABHEE automate a single apartment or only full villas?", a: "Both — ABHEE scales systems from a one-bedroom apartment retrofit to a full villa or office automation project." },
    ],
    metaTitle: "Smart Home Automation in Bangalore | ABHEE Smart Liv",
    metaDescription:
      "Smart home automation, home theatre and AI CCTV installation in Bangalore — Indiranagar, Whitefield, Sarjapur Road and Hebbal. Book a consultation.",
  },
  {
    slug: "chennai",
    name: "Chennai",
    region: "Tamil Nadu",
    heroImage: "/images/locations/chennai/hero.jpg",
    heroImageAlt: "Smart home automation installation in Chennai",
    intro: "Premium home automation and security systems for Chennai's finest homes.",
    areas: ["Adyar", "ECR", "Anna Nagar", "OMR"],
    whyPoints: [
      { title: "Coastal-climate ready", text: "Systems specified for Chennai's humidity and coastal weather — from weatherproof outdoor audio to monsoon-rated solar fencing." },
      { title: "ECR villa expertise", text: "Full villa builds along ECR, including home theatres, pools and perimeter security for larger independent homes." },
      { title: "OMR corporate reach", text: "Office and commercial automation for the IT corridor along OMR, alongside residential work in Anna Nagar and Adyar." },
      { title: "End-to-end project management", text: "One ABHEE team manages design, installation and after-sales support across every system in a Chennai home." },
    ],
    industriesServed: ["villas", "apartments", "offices", "commercial-buildings"],
    faqs: [
      { q: "Does ABHEE handle full villa projects in Chennai?", a: "Yes, ABHEE manages complete villa builds along ECR and Adyar, covering automation, theatre, security and outdoor systems." },
      { q: "Are ABHEE's systems suited to Chennai's climate?", a: "Yes, outdoor and exterior systems — audio, fencing and gate automation — are specified for coastal humidity and heat." },
    ],
    metaTitle: "Smart Home Automation in Chennai | ABHEE Smart Liv",
    metaDescription:
      "Smart home automation, home theatre and security installation in Chennai — Adyar, ECR, Anna Nagar, OMR. Book a free ABHEE consultation.",
  },
  {
    slug: "tirupati",
    name: "Tirupati",
    region: "Andhra Pradesh",
    heroImage: "/images/locations/tirupati/hero.jpg",
    heroImageAlt: "Smart home and hospitality automation installation in Tirupati",
    intro: "Automation, security and event-ready systems for Tirupati's homes, hotels and function halls.",
    areas: ["Tiruchanur", "Renigunta", "Alipiri", "Karakambadi", "Mangalam"],
    whyPoints: [
      { title: "Built for a pilgrimage city", text: "Tirupati's steady flow of visitors means hotels and function halls need robust CCTV, access control and P.A. systems built to run every day of the year." },
      { title: "Villas near the temple corridor", text: "Growing villa developments around Karakambadi and Mangalam get the same automation and security standard as ABHEE's Hyderabad and Vijayawada projects." },
      { title: "Function hall & event infrastructure", text: "P.A. sound, boom barriers, LED displays and lounge seating for the function halls and event venues serving pilgrim and wedding traffic." },
      { title: "Reliable power backup", text: "Battery-backed gates, locks and solar fencing designed for consistent operation during Tirupati's seasonal peak footfall." },
    ],
    industriesServed: ["hotels", "function-halls", "villas", "apartments"],
    faqs: [
      { q: "Does ABHEE work with hotels and function halls in Tirupati?", a: "Yes, ABHEE installs CCTV, access control, P.A. sound and LED display systems for hotels and function halls across Tirupati, including areas near Alipiri and Renigunta." },
      { q: "Which areas of Tirupati does ABHEE serve?", a: "ABHEE installs and supports smart home and hospitality systems across Tiruchanur, Renigunta, Alipiri, Karakambadi, Mangalam and surrounding areas." },
      { q: "Can ABHEE handle a villa project near the temple corridor?", a: "Yes, ABHEE designs full villa automation, security and entertainment packages for homes around Karakambadi and Mangalam." },
    ],
    metaTitle: "Smart Home & Hospitality Automation in Tirupati | ABHEE Smart Liv",
    metaDescription:
      "Smart home automation, CCTV, P.A. systems and function hall technology in Tirupati — Tiruchanur, Renigunta, Alipiri, Karakambadi. Book a free consultation.",
  },
  {
    slug: "ongole",
    name: "Ongole",
    region: "Andhra Pradesh",
    heroImage: "/images/locations/ongole/hero.jpg",
    heroImageAlt: "Smart home automation installation in Ongole",
    intro: "Bringing premium automation, security and surveillance systems to Ongole's growing residential and commercial developments.",
    areas: ["Kurnool Road", "Mangamuru Road", "Trunk Road", "Lawyer Pet", "Santapeta"],
    whyPoints: [
      { title: "Growing commercial corridor", text: "Ongole's expanding commercial stretches along Trunk Road and Kurnool Road get the same CCTV, access control and gate automation used in larger AP cities." },
      { title: "New residential layouts", text: "Emerging gated communities and independent homes around Lawyer Pet and Santapeta fitted with automation and security from the ground up." },
      { title: "Straightforward retrofits", text: "Existing homes along Mangamuru Road get retrofit-friendly smart lighting, locks and CCTV without breaking walls." },
      { title: "One point of contact", text: "A single ABHEE team handles design, installation and AMC support across every system in Ongole." },
    ],
    industriesServed: ["villas", "apartments", "commercial-buildings", "gated-communities"],
    faqs: [
      { q: "Does ABHEE install smart home systems in Ongole?", a: "Yes, ABHEE serves Ongole's residential and commercial developments across Kurnool Road, Trunk Road, Lawyer Pet and Santapeta." },
      { q: "Can ABHEE retrofit an existing home in Ongole?", a: "Yes, most ABHEE systems — lighting, locks and CCTV — are designed to retrofit into existing homes without rewiring or wall damage." },
    ],
    metaTitle: "Smart Home Automation in Ongole | ABHEE Smart Liv",
    metaDescription:
      "Smart home automation, CCTV and security installation in Ongole — Kurnool Road, Trunk Road, Lawyer Pet, Santapeta. Book a free ABHEE consultation.",
  },
  {
    slug: "visakhapatnam",
    name: "Visakhapatnam",
    region: "Andhra Pradesh",
    heroImage: "/images/locations/visakhapatnam/hero.jpg",
    heroImageAlt: "Smart home and office automation installation in Visakhapatnam",
    intro: "Smart automation and security for Visakhapatnam's apartments, IT offices and beachside villas.",
    areas: ["MVP Colony", "Madhurawada", "Rushikonda", "Gajuwaka", "Dwaraka Nagar", "Siripuram", "Seethammadhara"],
    whyPoints: [
      { title: "IT-corridor office automation", text: "Access control, CCTV and smart lighting for the corporate offices clustered around Madhurawada and Rushikonda's growing tech corridor." },
      { title: "Coastal-grade exteriors", text: "Solar fencing, gate automation and outdoor audio specified to handle Visakhapatnam's coastal humidity and salt air." },
      { title: "Apartment-dense city coverage", text: "Retrofit automation and security for the high-rise apartment developments across MVP Colony, Siripuram and Dwaraka Nagar." },
      { title: "Port-city commercial reach", text: "Surveillance and access control for commercial and industrial premises around Gajuwaka and the port corridor." },
    ],
    industriesServed: ["apartments", "offices", "commercial-buildings", "villas"],
    faqs: [
      { q: "Does ABHEE serve the IT corridor around Madhurawada and Rushikonda?", a: "Yes, ABHEE installs office automation, access control and CCTV for corporate offices across Madhurawada, Rushikonda and the wider Visakhapatnam IT corridor." },
      { q: "Are ABHEE's systems suited to Visakhapatnam's coastal climate?", a: "Yes, exterior systems like solar fencing, gates and outdoor audio are specified to withstand coastal humidity and salt air." },
      { q: "Which areas of Visakhapatnam does ABHEE cover?", a: "ABHEE serves MVP Colony, Madhurawada, Rushikonda, Gajuwaka, Dwaraka Nagar, Siripuram, Seethammadhara and surrounding areas." },
    ],
    metaTitle: "Smart Home & Office Automation in Visakhapatnam | ABHEE Smart Liv",
    metaDescription:
      "Smart home and office automation, CCTV and security installation in Visakhapatnam — MVP Colony, Madhurawada, Rushikonda, Gajuwaka. Book a free consultation.",
  },
];

export function getCityBySlug(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}

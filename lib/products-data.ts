export type Product = {
  slug: string;
  n: string;
  title: string;
  line: string; // <=20 words, used on homepage cards
  category: "Entertainment" | "Automation" | "Security" | "Comfort" | "Exteriors" | "Surfaces";
  heroImage: string;
  heroImageAlt: string;
  gallery: { src: string; alt: string }[];
  metaTitle: string;
  metaDescription: string;
  intro: string; // short, 1-2 sentences, used as page hero sub-line
  highlights: string[]; // 4-6 short bullet features, not paragraphs
  faqs: { q: string; a: string }[];
  price: {
    currency: "INR";
    minPrice: number;
  };
};

export const PRODUCTS: Product[] = [
  {
    slug: "home-theatre",
    n: "01",
    title: "Home Theatre",
    line: "Cinema-grade sound and picture, built into your walls.",
    category: "Entertainment",
    heroImage: "https://picsum.photos/seed/abhee-theatre-hero/1800/1200",
    heroImageAlt: "Premium home theatre room with wraparound seating and a large screen",
    gallery: [
      { src: "https://picsum.photos/seed/abhee-theatre-1/1200/1500", alt: "Home theatre room with ambient LED lighting" },
      { src: "https://picsum.photos/seed/abhee-theatre-2/1200/1500", alt: "Acoustic wall panels in a private cinema" },
      { src: "https://picsum.photos/seed/abhee-theatre-3/1200/1500", alt: "Recliner seating in a home cinema" },
    ],
    metaTitle: "Home Theatre Installation in Andhra Pradesh & Hyderabad | ABHEE Smart Liv",
    metaDescription:
      "Custom home theatre design and installation across Hyderabad, Vijayawada, Bangalore and Chennai. Acoustic treatment, Dolby Atmos sound and 4K projection. Book a free consultation.",
    intro: "A dedicated room, tuned acoustics, and a screen built for the way you actually watch.",
    highlights: [
      "Dolby Atmos & DTS:X sound design",
      "Acoustic wall and ceiling treatment",
      "4K and 8K projection options",
      "Motorised screens and blackout blinds",
      "Integrated with whole-home automation",
    ],
    faqs: [
      {
        q: "How much space does a home theatre need?",
        a: "A dedicated home theatre works well from 150 sq ft, though ABHEE also designs theatre-in-living-room setups for smaller homes.",
      },
      {
        q: "Can the home theatre be controlled from a phone?",
        a: "Yes. Every ABHEE home theatre integrates with the same app used for lighting, curtains and security, so one tap sets the mood.",
      },
      {
        q: "Do you handle soundproofing?",
        a: "Yes. Acoustic isolation and treatment are part of the design phase, not an add-on, so sound stays inside the room.",
      },
    ],
    price: { currency: "INR", minPrice: 350000 },
  },
  {
    slug: "professional-audio",
    n: "02",
    title: "Professional Audio",
    line: "Multi-room sound tuned for the shape of your home.",
    category: "Entertainment",
    heroImage: "https://picsum.photos/seed/abhee-audio-hero/1800/1200",
    heroImageAlt: "In-ceiling speakers in a modern luxury living room",
    gallery: [
      { src: "https://picsum.photos/seed/abhee-audio-1/1200/1500", alt: "Outdoor speakers built into a garden wall" },
      { src: "https://picsum.photos/seed/abhee-audio-2/1200/1500", alt: "Multi-room audio control panel" },
      { src: "https://picsum.photos/seed/abhee-audio-3/1200/1500", alt: "Living room with hidden in-wall speakers" },
    ],
    metaTitle: "Multi-Room Audio Systems | Professional Home Audio | ABHEE Smart Liv",
    metaDescription:
      "In-ceiling, in-wall and outdoor audio systems synced across your home. Professional acoustic design and installation across South India by ABHEE Smart Liv.",
    intro: "Sound that follows you from the kitchen to the terrace, without a single visible speaker.",
    highlights: [
      "In-ceiling & in-wall invisible speakers",
      "Room-by-room independent control",
      "Outdoor and poolside weatherproof audio",
      "Streaming from any device, any room",
      "Acoustic calibration for each space",
    ],
    faqs: [
      {
        q: "Can different rooms play different music at once?",
        a: "Yes, each zone is independently controlled, so the living room, kitchen and terrace can each play something different.",
      },
      {
        q: "Are outdoor speakers weatherproof?",
        a: "ABHEE uses IP-rated outdoor speakers built to handle monsoon humidity and direct sun without performance loss.",
      },
    ],
    price: { currency: "INR", minPrice: 120000 },
  },
  {
    slug: "smart-home-automation",
    n: "03",
    title: "Smart Home Automation",
    line: "One system, every room, controlled from a single touch.",
    category: "Automation",
    heroImage: "https://picsum.photos/seed/abhee-automation-hero/1800/1200",
    heroImageAlt: "Modern smart home interior with a wall-mounted control panel",
    gallery: [
      { src: "https://picsum.photos/seed/abhee-automation-1/1200/1500", alt: "Smart home app controlling lighting and climate" },
      { src: "https://picsum.photos/seed/abhee-automation-2/1200/1500", alt: "Automated villa exterior at dusk" },
      { src: "https://picsum.photos/seed/abhee-automation-3/1200/1500", alt: "Touch panel for home automation" },
    ],
    metaTitle: "Smart Home Automation Company in Andhra Pradesh | ABHEE Smart Liv",
    metaDescription:
      "Whole-home automation for lighting, climate, security and entertainment — one app, one system. Serving Hyderabad, Vijayawada, Bangalore and Chennai.",
    intro: "Every system in your home, from lighting to gates, working from one app and one voice.",
    highlights: [
      "Single app for lighting, climate, security & AV",
      "Voice control via Alexa & Google Assistant",
      "Scene automation — 'Good Night' does it all",
      "Works with existing wiring in most retrofits",
      "Remote access from anywhere in the world",
    ],
    faqs: [
      {
        q: "Can automation be added to an existing home?",
        a: "Yes, most ABHEE automation systems are retrofit-friendly and install without breaking walls or rewiring the whole house.",
      },
      {
        q: "What happens if the internet goes down?",
        a: "Core functions like lighting scenes and door locks continue to work locally, even without an internet connection.",
      },
    ],
    price: { currency: "INR", minPrice: 200000 },
  },
  {
    slug: "smart-door-locks",
    n: "04",
    title: "Smart Door Locks",
    line: "Keyless entry with fingerprint, face and app access.",
    category: "Security",
    heroImage: "https://picsum.photos/seed/abhee-locks-hero/1800/1200",
    heroImageAlt: "Smart fingerprint door lock on a modern entrance door",
    gallery: [
      { src: "https://picsum.photos/seed/abhee-locks-1/1200/1500", alt: "Fingerprint scanner on a smart lock" },
      { src: "https://picsum.photos/seed/abhee-locks-2/1200/1500", alt: "Smart lock app showing access history" },
    ],
    metaTitle: "Smart Door Locks — Fingerprint & App Access | ABHEE Smart Liv",
    metaDescription:
      "Keyless smart door locks with fingerprint, PIN, card and app access. Get real-time entry alerts. Installed across South India by ABHEE Smart Liv.",
    intro: "No more spare keys under the mat. Just your fingerprint, your face, or your phone.",
    highlights: [
      "Fingerprint, face, PIN, card & app entry",
      "Real-time entry alerts to your phone",
      "Temporary access codes for guests & staff",
      "Battery backup with manual key override",
    ],
    faqs: [
      {
        q: "What happens if the lock battery runs out?",
        a: "Every ABHEE smart lock includes a physical key override and low-battery alerts sent to your phone in advance.",
      },
      {
        q: "Can I give temporary access to a guest?",
        a: "Yes, you can generate time-limited PIN codes for guests, staff or delivery access from the app.",
      },
    ],
    price: { currency: "INR", minPrice: 18000 },
  },
  {
    slug: "video-door-phones",
    n: "05",
    title: "Video Door Phones",
    line: "See and speak to every visitor before you open the door.",
    category: "Security",
    heroImage: "https://picsum.photos/seed/abhee-doorphone-hero/1800/1200",
    heroImageAlt: "Video door phone mounted beside a front door",
    gallery: [
      { src: "https://picsum.photos/seed/abhee-doorphone-1/1200/1500", alt: "Indoor video door phone display screen" },
      { src: "https://picsum.photos/seed/abhee-doorphone-2/1200/1500", alt: "Mobile app showing a live video door phone feed" },
    ],
    metaTitle: "Video Door Phones for Homes & Apartments | ABHEE Smart Liv",
    metaDescription:
      "HD video door phones with two-way talk and mobile alerts. See who's at the door from anywhere. Installed across Hyderabad, Vijayawada, Bangalore and Chennai.",
    intro: "Answer your door from the kitchen, the office, or another city entirely.",
    highlights: [
      "HD video with night vision",
      "Two-way talk from your phone",
      "Motion alerts sent instantly",
      "Works with gate & main door together",
    ],
    faqs: [
      {
        q: "Can I answer the door while I'm away from home?",
        a: "Yes, the app lets you see and speak to visitors from anywhere with an internet connection.",
      },
    ],
    price: { currency: "INR", minPrice: 15000 },
  },
  {
    slug: "ai-cctv-cameras",
    n: "06",
    title: "AI CCTV Cameras",
    line: "Cameras that recognise faces, vehicles and intent.",
    category: "Security",
    heroImage: "https://picsum.photos/seed/abhee-aicctv-hero/1800/1200",
    heroImageAlt: "AI-enabled CCTV camera mounted on a villa exterior",
    gallery: [
      { src: "https://picsum.photos/seed/abhee-aicctv-1/1200/1500", alt: "Security control room with multiple camera feeds" },
      { src: "https://picsum.photos/seed/abhee-aicctv-2/1200/1500", alt: "AI CCTV camera detecting a vehicle" },
    ],
    metaTitle: "AI CCTV Camera Installation | Smart Surveillance | ABHEE Smart Liv",
    metaDescription:
      "AI-powered CCTV with facial recognition, vehicle detection and smart alerts. 24/7 monitoring for homes and offices across South India.",
    intro: "Cameras that tell the difference between a delivery rider and an intruder.",
    highlights: [
      "Facial & vehicle recognition",
      "Smart alerts, not endless notifications",
      "Cloud & local storage options",
      "Night vision across every camera",
    ],
    faqs: [
      {
        q: "Do AI cameras reduce false alerts?",
        a: "Yes, because they distinguish people, vehicles and pets from background motion, so you only get alerts that matter.",
      },
    ],
    price: { currency: "INR", minPrice: 45000 },
  },
  {
    slug: "smart-lighting",
    n: "07",
    title: "Smart Lighting",
    line: "Light that shifts with the hour and the mood.",
    category: "Comfort",
    heroImage: "https://picsum.photos/seed/abhee-lighting-hero/1800/1200",
    heroImageAlt: "Warm ambient smart lighting in a luxury living room",
    gallery: [
      { src: "https://picsum.photos/seed/abhee-lighting-1/1200/1500", alt: "Smart lighting scene in a bedroom" },
      { src: "https://picsum.photos/seed/abhee-lighting-2/1200/1500", alt: "Colour-changing smart lights along a staircase" },
    ],
    metaTitle: "Smart Lighting Design & Installation | ABHEE Smart Liv",
    metaDescription:
      "Circadian and scene-based smart lighting for homes and offices. Schedule, dim and colour-tune every room from one app. ABHEE Smart Liv.",
    intro: "One tap dims the living room, warms the bedroom, and lights the driveway at dusk.",
    highlights: [
      "Scene-based lighting, not just on/off",
      "Circadian tuning for better sleep",
      "Scheduled and sunset-triggered lighting",
      "Works with existing switches in retrofits",
    ],
    faqs: [
      {
        q: "Can smart lighting be added without rewiring?",
        a: "In most retrofits, ABHEE installs smart modules behind existing switches, avoiding new wiring or wall damage.",
      },
    ],
    price: { currency: "INR", minPrice: 60000 },
  },
  {
    slug: "motorized-curtains",
    n: "08",
    title: "Motorized Curtains",
    line: "Curtains and blinds that open with a voice or a schedule.",
    category: "Comfort",
    heroImage: "https://picsum.photos/seed/abhee-curtains-hero/1800/1200",
    heroImageAlt: "Motorized curtains in a bright modern living room",
    gallery: [
      { src: "https://picsum.photos/seed/abhee-curtains-1/1200/1500", alt: "Motorized blinds opening automatically at sunrise" },
    ],
    metaTitle: "Motorized Curtains & Blinds | Smart Window Automation | ABHEE Smart Liv",
    metaDescription:
      "Motorized curtains and blinds controlled by app, voice or schedule. Quiet motors, retrofit-friendly tracks. Installed across South India.",
    intro: "Curtains that open with the sunrise and close themselves before the evening glare.",
    highlights: [
      "Whisper-quiet motorised tracks",
      "Voice, app and schedule control",
      "Retrofits onto existing curtain rods",
      "Pairs with lighting for full-room scenes",
    ],
    faqs: [
      {
        q: "Will motorized tracks fit my existing curtains?",
        a: "In most cases yes — ABHEE's tracks are designed to accommodate existing curtain fabric without a full replacement.",
      },
    ],
    price: { currency: "INR", minPrice: 35000 },
  },
  {
    slug: "projectors",
    n: "09",
    title: "Projectors",
    line: "A hundred-inch screen that disappears when you're done.",
    category: "Entertainment",
    heroImage: "https://picsum.photos/seed/abhee-projectors-hero/1800/1200",
    heroImageAlt: "Large projector screen in a home cinema setup",
    gallery: [
      { src: "https://picsum.photos/seed/abhee-projectors-1/1200/1500", alt: "4K projector mounted on a living room ceiling" },
    ],
    metaTitle: "4K & Laser Projector Installation | ABHEE Smart Liv",
    metaDescription:
      "4K and laser projector systems with motorised screens for home theatres, living rooms and offices. Installed and calibrated by ABHEE Smart Liv.",
    intro: "From a hidden ceiling mount to a full-wall picture, in under a minute.",
    highlights: [
      "4K and short-throw laser options",
      "Motorised drop-down screens",
      "Ambient-light rejecting screens for daylight rooms",
      "Integrated with home theatre audio",
    ],
    faqs: [
      {
        q: "Can a projector work in a bright living room?",
        a: "Yes, ambient-light rejecting screens and higher-lumen laser projectors are recommended for rooms with daylight.",
      },
    ],
    price: { currency: "INR", minPrice: 150000 },
  },
  {
    slug: "solar-fencing",
    n: "10",
    title: "Solar Fencing",
    line: "A perimeter that runs on sunlight and never sleeps.",
    category: "Exteriors",
    heroImage: "https://picsum.photos/seed/abhee-solarfence-hero/1800/1200",
    heroImageAlt: "Solar-powered security fencing around a villa perimeter",
    gallery: [
      { src: "https://picsum.photos/seed/abhee-solarfence-1/1200/1500", alt: "Close-up of solar fence energizer unit" },
    ],
    metaTitle: "Solar Fencing for Homes & Farmhouses | ABHEE Smart Liv",
    metaDescription:
      "Solar-powered perimeter fencing with instant alerts on breach. Ideal for villas and farmhouses across Andhra Pradesh. Installed by ABHEE Smart Liv.",
    intro: "A perimeter alarm that runs entirely on sunlight, with instant alerts on breach.",
    highlights: [
      "Solar-powered, no electricity bill impact",
      "Instant alert on wire breach",
      "Weatherproof for monsoon & summer",
      "Pairs with gate and CCTV systems",
    ],
    faqs: [
      {
        q: "Is solar fencing safe around children and pets?",
        a: "ABHEE configures fencing to pulse a safe, non-lethal shock designed to deter, not harm, matching Indian safety standards.",
      },
    ],
    price: { currency: "INR", minPrice: 55000 },
  },
  {
    slug: "remote-gates",
    n: "11",
    title: "Remote Gates",
    line: "Open your gate before you've stepped out of the car.",
    category: "Exteriors",
    heroImage: "https://picsum.photos/seed/abhee-gates-hero/1800/1200",
    heroImageAlt: "Automatic sliding gate at a luxury villa entrance",
    gallery: [
      { src: "https://picsum.photos/seed/abhee-gates-1/1200/1500", alt: "Remote-controlled gate motor mechanism" },
    ],
    metaTitle: "Automatic & Remote Gate Systems | ABHEE Smart Liv",
    metaDescription:
      "Motorised sliding and swing gates with app and remote control. Integrated with video door phones and CCTV. Installed by ABHEE Smart Liv.",
    intro: "Sliding and swing gates that open from your phone, your remote, or your car.",
    highlights: [
      "Sliding & swing gate motors",
      "App, remote and RFID access",
      "Integrated with video door phone",
      "Battery backup for power cuts",
    ],
    faqs: [
      {
        q: "Do gates still work during a power cut?",
        a: "Yes, ABHEE installs battery backup units so gates continue operating for several hours during outages.",
      },
    ],
    price: { currency: "INR", minPrice: 80000 },
  },
  {
    slug: "wooden-flooring",
    n: "12",
    title: "Wooden Flooring",
    line: "Warm, engineered flooring built for Indian climates.",
    category: "Surfaces",
    heroImage: "https://picsum.photos/seed/abhee-flooring-hero/1800/1200",
    heroImageAlt: "Engineered wooden flooring in a luxury living room",
    gallery: [
      { src: "https://picsum.photos/seed/abhee-flooring-1/1200/1500", alt: "Close-up texture of engineered wooden flooring" },
    ],
    metaTitle: "Wooden Flooring Installation | Engineered & Laminate | ABHEE Smart Liv",
    metaDescription:
      "Engineered and laminate wooden flooring designed for Indian humidity and heat. Installed across homes and offices by ABHEE Smart Liv.",
    intro: "Flooring engineered to hold its shape through humid summers and cool winters alike.",
    highlights: [
      "Engineered & laminate finishes",
      "Built for Indian humidity & heat",
      "Underfloor heating compatible",
      "Wide range of wood-tone finishes",
    ],
    faqs: [
      {
        q: "Does wooden flooring warp in Indian humidity?",
        a: "ABHEE uses engineered flooring specifically rated for high-humidity climates, which resists warping far better than solid wood.",
      },
    ],
    price: { currency: "INR", minPrice: 180 },
  },
  {
    slug: "artificial-grass",
    n: "13",
    title: "Artificial Grass",
    line: "A lawn that stays green through every season.",
    category: "Surfaces",
    heroImage: "https://picsum.photos/seed/abhee-grass-hero/1800/1200",
    heroImageAlt: "Artificial grass lawn in a modern villa garden",
    gallery: [
      { src: "https://picsum.photos/seed/abhee-grass-1/1200/1500", alt: "Close-up of premium artificial grass texture" },
    ],
    metaTitle: "Artificial Grass Installation for Homes & Terraces | ABHEE Smart Liv",
    metaDescription:
      "Premium artificial grass for lawns, terraces and balconies. UV-stable, low maintenance, and installed across South India by ABHEE Smart Liv.",
    intro: "The look of a manicured lawn, with none of the watering, mowing or dead patches.",
    highlights: [
      "UV-stable, doesn't fade in summer",
      "Zero watering or mowing",
      "Suitable for terraces & balconies",
      "Pet and child friendly surface",
    ],
    faqs: [
      {
        q: "Does artificial grass get too hot to walk on?",
        a: "ABHEE uses heat-resistant, lighter-toned fibres designed to stay comfortable underfoot even in peak summer.",
      },
    ],
    price: { currency: "INR", minPrice: 90 },
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

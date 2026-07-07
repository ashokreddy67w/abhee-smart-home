export type Product = {
  slug: string;
  n: string;
  title: string;
  line: string; // <=20 words, used on homepage cards
  category:
    | "Entertainment"
    | "Automation"
    | "Security"
    | "Comfort"
    | "Exteriors"
    | "Surfaces"
    | "Recreation";
  heroImage: string;
  heroImageAlt: string;
  gallery: { src: string; alt: string }[];
  metaTitle: string;
  metaDescription: string;
  intro: string; // short, 1-2 sentences, used as page hero sub-line
  overview: string; // 2-3 sentence expanded description for the Overview section
  highlights: string[]; // 4-6 short bullet features, not paragraphs
  applications: string[]; // rooms / settings this product is typically installed in
  industriesServed: string[]; // solution slugs from lib/solutions-data.ts
  installationProcess: { step: string; title: string; description: string }[];
  faqs: { q: string; a: string }[];
  price: {
    currency: "INR";
    minPrice: number;
  };
};

function standardProcess(productTitle: string): Product["installationProcess"] {
  return [
    {
      step: "01",
      title: "Site Visit & Consultation",
      description: `Our design team studies your space and requirements for ${productTitle.toLowerCase()} in person before proposing a system.`,
    },
    {
      step: "02",
      title: "Custom System Design",
      description:
        "A layout and specification sheet is prepared, matched to your budget and the architecture of the space.",
    },
    {
      step: "03",
      title: "Professional Installation",
      description:
        "Certified technicians install and configure every component, with minimal disruption to your routine.",
    },
    {
      step: "04",
      title: "Testing, Handover & Support",
      description:
        "Every system is tested end-to-end, demonstrated to you, and backed by ongoing service support.",
    },
  ];
}

export const PRODUCTS: Product[] = [
  {
    slug: "home-theatre",
    n: "01",
    title: "Home Theatre",
    line: "Cinema-grade sound and picture, built into your walls.",
    category: "Entertainment",
    heroImage: "/images/products/home-theatre/hero.jpg",
    heroImageAlt: "Premium home theatre room with wraparound seating and a large screen",
    gallery: [
      { src: "/images/products/home-theatre/gallery-1.jpg", alt: "Home theatre room with ambient LED lighting" },
      { src: "/images/products/home-theatre/gallery-2.jpg", alt: "Acoustic wall panels in a private cinema" },
      { src: "/images/products/home-theatre/gallery-3.jpg", alt: "Recliner seating in a home cinema" },
    ],
    metaTitle: "Home Theatre Installation in Andhra Pradesh & Hyderabad | ABHEE Smart Liv",
    metaDescription:
      "Custom home theatre design and installation across Hyderabad, Vijayawada, Bangalore and Chennai. Acoustic treatment, Dolby Atmos sound and 4K projection. Book a free consultation.",
    intro: "A dedicated room, tuned acoustics, and a screen built for the way you actually watch.",
    overview:
      "ABHEE designs private cinema rooms from first principles — acoustics, sightlines and seating are planned together, not bolted on afterward. Every home theatre is tuned to the shape of the room it lives in, and integrates with the same automation system that runs the rest of the house.",
    highlights: [
      "Dolby Atmos & DTS:X sound design",
      "Acoustic wall and ceiling treatment",
      "4K and 8K projection options",
      "Motorised screens and blackout blinds",
      "Integrated with whole-home automation",
    ],
    applications: ["Private home cinemas", "Media rooms", "Villa basements", "Apartment media corners", "Corporate screening rooms"],
    industriesServed: ["villas", "apartments", "gated-communities", "hotels"],
    installationProcess: standardProcess("Home Theatre"),
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
    line: "Multi-room sound and event-grade P.A. systems, tuned to every space.",
    category: "Entertainment",
    heroImage: "/images/products/professional-audio/hero.jpg",
    heroImageAlt: "In-ceiling speakers in a modern luxury living room",
    gallery: [
      { src: "/images/products/professional-audio/gallery-1.jpg", alt: "Outdoor speakers built into a garden wall" },
      { src: "/images/products/professional-audio/gallery-2.jpg", alt: "Multi-room audio control panel" },
      { src: "/images/products/professional-audio/gallery-3.jpg", alt: "P.A. sound system mixing console at a function hall" },
    ],
    metaTitle: "Multi-Room Audio & P.A. Sound Systems | ABHEE Smart Liv",
    metaDescription:
      "In-ceiling, in-wall, outdoor and P.A. sound systems synced across your home, school or venue. Professional acoustic design and installation across South India by ABHEE Smart Liv.",
    intro: "Sound that follows you from the kitchen to the terrace — or fills a hall of five hundred guests.",
    overview:
      "From invisible in-ceiling speakers in a living room to a full P.A. sound rig for a function hall or school assembly, ABHEE designs audio systems around the acoustics of the actual space, not a generic spec sheet. Every system is zoned, calibrated and left ready for daily use.",
    highlights: [
      "In-ceiling & in-wall invisible speakers",
      "Room-by-room independent control",
      "Outdoor and poolside weatherproof audio",
      "P.A. sound systems for halls, schools & events",
      "Acoustic calibration for each space",
    ],
    applications: ["Living rooms & kitchens", "Terraces & poolside decks", "Function halls & banquet venues", "School auditoriums & assembly halls"],
    industriesServed: ["villas", "apartments", "function-halls", "schools", "colleges", "hotels"],
    installationProcess: standardProcess("Professional Audio"),
    faqs: [
      {
        q: "Can different rooms play different music at once?",
        a: "Yes, each zone is independently controlled, so the living room, kitchen and terrace can each play something different.",
      },
      {
        q: "Are outdoor speakers weatherproof?",
        a: "ABHEE uses IP-rated outdoor speakers built to handle monsoon humidity and direct sun without performance loss.",
      },
      {
        q: "Do you install P.A. systems for function halls and schools?",
        a: "Yes, ABHEE designs and installs P.A. sound reinforcement systems sized to the hall or auditorium, including mixers, amplifiers and podium microphones.",
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
    heroImage: "/images/products/smart-home-automation/hero.jpg",
    heroImageAlt: "Modern smart home interior with a wall-mounted control panel",
    gallery: [
      { src: "/images/products/smart-home-automation/gallery-1.jpg", alt: "Smart home app controlling lighting and climate" },
      { src: "/images/products/smart-home-automation/gallery-2.jpg", alt: "Automated villa exterior at dusk" },
      { src: "/images/products/smart-home-automation/gallery-3.jpg", alt: "Touch panel for home automation" },
    ],
    metaTitle: "Smart Home Automation Company in Andhra Pradesh | ABHEE Smart Liv",
    metaDescription:
      "Whole-home automation for lighting, climate, security and entertainment — one app, one system. Serving Hyderabad, Vijayawada, Bangalore and Chennai.",
    intro: "Every system in your home, from lighting to gates, working from one app and one voice.",
    overview:
      "Smart Home Automation is the backbone every other ABHEE system plugs into — lighting, curtains, security, gates and audio are unified into scenes you trigger with one tap, one voice command, or a schedule that runs itself.",
    highlights: [
      "Single app for lighting, climate, security & AV",
      "Voice control via Alexa & Google Assistant",
      "Scene automation — 'Good Night' does it all",
      "Works with existing wiring in most retrofits",
      "Remote access from anywhere in the world",
    ],
    applications: ["Full villa automation", "Apartment retrofit automation", "Gated community common areas", "Corporate offices"],
    industriesServed: ["villas", "apartments", "gated-communities", "offices", "commercial-buildings"],
    installationProcess: standardProcess("Smart Home Automation"),
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
    heroImage: "/images/products/smart-door-locks/hero.jpg",
    heroImageAlt: "Smart fingerprint door lock on a modern entrance door",
    gallery: [
      { src: "/images/products/smart-door-locks/gallery-1.jpg", alt: "Fingerprint scanner on a smart lock" },
      { src: "/images/products/smart-door-locks/gallery-2.jpg", alt: "Smart lock app showing access history" },
    ],
    metaTitle: "Smart Door Locks — Fingerprint & App Access | ABHEE Smart Liv",
    metaDescription:
      "Keyless smart door locks with fingerprint, PIN, card and app access. Get real-time entry alerts. Installed across South India by ABHEE Smart Liv.",
    intro: "No more spare keys under the mat. Just your fingerprint, your face, or your phone.",
    overview:
      "ABHEE's digital door locks replace the front-door key with fingerprint, PIN, RFID card or app-based entry, and log every open and close so you always know who came and went — down to the guest bedroom and the office server room.",
    highlights: [
      "Fingerprint, face, PIN, card & app entry",
      "Real-time entry alerts to your phone",
      "Temporary access codes for guests & staff",
      "Battery backup with manual key override",
    ],
    applications: ["Main entrance doors", "Apartment & villa bedrooms", "Office cabins & server rooms", "Gated community clubhouses"],
    industriesServed: ["villas", "apartments", "gated-communities", "offices"],
    installationProcess: standardProcess("Smart Door Locks"),
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
    line: "See and speak to every visitor, plus wired & wireless intercom throughout.",
    category: "Security",
    heroImage: "/images/products/video-door-phones/hero.jpg",
    heroImageAlt: "Video door phone mounted beside a front door",
    gallery: [
      { src: "/images/products/video-door-phones/gallery-1.jpg", alt: "Indoor video door phone display screen" },
      { src: "/images/products/video-door-phones/gallery-2.jpg", alt: "Mobile app showing a live video door phone feed" },
      { src: "/images/products/video-door-phones/gallery-3.jpg", alt: "Wireless intercom handset in a gated community office" },
    ],
    metaTitle: "Video Door Phones & Intercom Systems | ABHEE Smart Liv",
    metaDescription:
      "HD video door phones with two-way talk, plus wired and wireless intercom systems for gated communities and villas. Installed across Hyderabad, Vijayawada, Bangalore and Chennai.",
    intro: "Answer your door from the kitchen, the office, or another city entirely.",
    overview:
      "Video door phones cover the front door; ABHEE's wired and wireless intercom network covers everything else — main gate to clubhouse, security cabin to individual villas — so every access point in a home or community can speak to every other one instantly.",
    highlights: [
      "HD video with night vision",
      "Two-way talk from your phone",
      "Motion alerts sent instantly",
      "Wired & wireless intercom for gates, cabins & clubhouses",
      "Works with gate & main door together",
    ],
    applications: ["Villa & apartment front doors", "Gated community main gates & security cabins", "Clubhouses & common areas"],
    industriesServed: ["villas", "apartments", "gated-communities"],
    installationProcess: standardProcess("Video Door Phones & Intercom"),
    faqs: [
      {
        q: "Can I answer the door while I'm away from home?",
        a: "Yes, the app lets you see and speak to visitors from anywhere with an internet connection.",
      },
      {
        q: "What's the difference between a video door phone and an intercom?",
        a: "A video door phone covers one entrance with a camera and screen; an intercom network connects multiple points — like a gate, security cabin and clubhouse — for voice communication without video.",
      },
    ],
    price: { currency: "INR", minPrice: 15000 },
  },
  {
    slug: "ai-cctv-cameras",
    n: "06",
    title: "AI CCTV Cameras",
    line: "Surveillance that recognises faces, vehicles and intent, not just motion.",
    category: "Security",
    heroImage: "/images/products/ai-cctv-cameras/hero.jpg",
    heroImageAlt: "AI-enabled CCTV camera mounted on a villa exterior",
    gallery: [
      { src: "/images/products/ai-cctv-cameras/gallery-1.jpg", alt: "Security control room with multiple camera feeds" },
      { src: "/images/products/ai-cctv-cameras/gallery-2.jpg", alt: "AI CCTV camera detecting a vehicle" },
      { src: "/images/products/ai-cctv-cameras/gallery-3.jpg", alt: "CCTV NVR and monitoring setup in a control room" },
    ],
    metaTitle: "CCTV & AI Surveillance Camera Installation | ABHEE Smart Liv",
    metaDescription:
      "AI-powered CCTV with facial recognition, vehicle detection and smart alerts, backed by full NVR/DVR recording and monitoring. 24/7 surveillance for homes, schools and offices across South India.",
    intro: "Cameras that tell the difference between a delivery rider and an intruder.",
    overview:
      "ABHEE's CCTV & Surveillance systems range from straightforward perimeter cameras with NVR recording to full AI-enabled setups with facial and vehicle recognition — sized to a single villa gate or an entire gated community, school campus or office building.",
    highlights: [
      "Facial & vehicle recognition",
      "Smart alerts, not endless notifications",
      "Cloud & local NVR/DVR storage options",
      "Night vision across every camera",
      "Centralised monitoring for large campuses",
    ],
    applications: ["Villa & apartment perimeters", "Gated community entry/exit points", "School & college campuses", "Offices & commercial buildings", "Function hall grounds"],
    industriesServed: ["villas", "apartments", "gated-communities", "schools", "colleges", "offices", "commercial-buildings", "function-halls"],
    installationProcess: standardProcess("CCTV & Surveillance"),
    faqs: [
      {
        q: "Do AI cameras reduce false alerts?",
        a: "Yes, because they distinguish people, vehicles and pets from background motion, so you only get alerts that matter.",
      },
      {
        q: "Can one system monitor an entire campus or gated community?",
        a: "Yes, ABHEE designs centralised NVR setups that bring every camera on a campus or community into a single monitoring dashboard.",
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
    heroImage: "/images/products/smart-lighting/hero.jpg",
    heroImageAlt: "Warm ambient smart lighting in a luxury living room",
    gallery: [
      { src: "/images/products/smart-lighting/gallery-1.jpg", alt: "Smart lighting scene in a bedroom" },
      { src: "/images/products/smart-lighting/gallery-2.jpg", alt: "Colour-changing smart lights along a staircase" },
    ],
    metaTitle: "Smart Lighting Design & Installation | ABHEE Smart Liv",
    metaDescription:
      "Circadian and scene-based smart lighting for homes and offices. Schedule, dim and colour-tune every room from one app. ABHEE Smart Liv.",
    intro: "One tap dims the living room, warms the bedroom, and lights the driveway at dusk.",
    overview:
      "Smart lighting turns switches into scenes — a single tap dims the living room for a movie, warms the bedroom for the night, and brings up the driveway lights automatically at sunset, all tuned to how the space is actually used.",
    highlights: [
      "Scene-based lighting, not just on/off",
      "Circadian tuning for better sleep",
      "Scheduled and sunset-triggered lighting",
      "Works with existing switches in retrofits",
    ],
    applications: ["Living rooms & bedrooms", "Driveways & facades", "Gardens & poolside areas", "Function hall entrances & lounges"],
    industriesServed: ["villas", "apartments", "gated-communities", "function-halls", "hotels"],
    installationProcess: standardProcess("Smart Lighting"),
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
    line: "Curtains, blinds and elevation shutters that move on a voice or a schedule.",
    category: "Comfort",
    heroImage: "/images/products/motorized-curtains/hero.jpg",
    heroImageAlt: "Motorized curtains in a bright modern living room",
    gallery: [
      { src: "/images/products/motorized-curtains/gallery-1.jpg", alt: "Motorized blinds opening automatically at sunrise" },
      { src: "/images/products/motorized-curtains/gallery-2.jpg", alt: "Transparent motorized elevation shutters on a villa facade" },
    ],
    metaTitle: "Motorized Curtains, Blinds & Elevation Shutters | ABHEE Smart Liv",
    metaDescription:
      "Motorized curtains, blinds and transparent elevation shutters controlled by app, voice or schedule. Quiet motors, retrofit-friendly tracks. Installed across South India.",
    intro: "Curtains that open with the sunrise, blinds that dim the glare, shutters that seal a whole facade.",
    overview:
      "Beyond curtains, ABHEE motorises blinds and the transparent elevation shutters increasingly used on villa balconies and facades — every covering in the house on the same app, the same voice command, the same sunrise schedule.",
    highlights: [
      "Whisper-quiet motorised tracks",
      "Voice, app and schedule control",
      "Motorized blinds for glare & privacy control",
      "Transparent elevation motorized shutters for balconies & facades",
      "Retrofits onto existing curtain rods",
    ],
    applications: ["Living rooms & bedrooms", "Balconies & facades", "Home office windows", "Villa outdoor sit-outs"],
    industriesServed: ["villas", "apartments", "offices"],
    installationProcess: standardProcess("Motorized Curtains & Blinds"),
    faqs: [
      {
        q: "Will motorized tracks fit my existing curtains?",
        a: "In most cases yes — ABHEE's tracks are designed to accommodate existing curtain fabric without a full replacement.",
      },
      {
        q: "What are transparent elevation motorized shutters?",
        a: "They're motorised glass or slatted shutter systems fitted to balconies and facades, letting you open a whole elevation or seal it for weather and privacy at the touch of a button.",
      },
    ],
    price: { currency: "INR", minPrice: 35000 },
  },
  {
    slug: "projectors",
    n: "09",
    title: "Projectors",
    line: "Screens, LED displays and podium AV that appear only when you need them.",
    category: "Entertainment",
    heroImage: "/images/products/projectors/hero.jpg",
    heroImageAlt: "Large projector screen in a home cinema setup",
    gallery: [
      { src: "/images/products/projectors/gallery-1.jpg", alt: "4K projector mounted on a living room ceiling" },
      { src: "/images/products/projectors/gallery-2.jpg", alt: "LED display screen at a function hall stage" },
      { src: "/images/products/projectors/gallery-3.jpg", alt: "Podium with speaker and microphone in a school auditorium" },
    ],
    metaTitle: "Projectors, LED Displays & Podium AV Installation | ABHEE Smart Liv",
    metaDescription:
      "4K and laser projectors, LED display screens, projection screens and podium AV systems for home theatres, schools, offices and function halls. Installed by ABHEE Smart Liv.",
    intro: "From a hidden ceiling mount to a full-wall picture, in under a minute.",
    overview:
      "Projectors anchor the home theatre; the same expertise scales up to LED display walls, projection screens and podium AV systems for school auditoriums, function halls and boardrooms — every screen calibrated for the light in the room.",
    highlights: [
      "4K and short-throw laser options",
      "Motorised drop-down screens",
      "LED display screens for stages & lobbies",
      "Podiums with integrated speakers & microphones",
      "Ambient-light rejecting screens for daylight rooms",
    ],
    applications: ["Home theatres & living rooms", "School & college auditoriums", "Function hall stages", "Corporate boardrooms"],
    industriesServed: ["villas", "schools", "colleges", "function-halls", "offices", "hotels"],
    installationProcess: standardProcess("Projectors & Display Systems"),
    faqs: [
      {
        q: "Can a projector work in a bright living room?",
        a: "Yes, ambient-light rejecting screens and higher-lumen laser projectors are recommended for rooms with daylight.",
      },
      {
        q: "Do you install LED display screens for stages and events?",
        a: "Yes, ABHEE supplies and installs indoor LED display walls sized for function hall stages, school events and corporate lobbies.",
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
    heroImage: "/images/products/solar-fencing/hero.jpg",
    heroImageAlt: "Solar-powered security fencing around a villa perimeter",
    gallery: [
      { src: "/images/products/solar-fencing/gallery-1.jpg", alt: "Close-up of solar fence energizer unit" },
      { src: "/images/products/solar-fencing/gallery-2.jpg", alt: "Solar fencing along a gated community boundary wall" },
    ],
    metaTitle: "Solar Fencing for Homes, Communities & Farmhouses | ABHEE Smart Liv",
    metaDescription:
      "Solar-powered perimeter fencing with instant alerts on breach. Ideal for villas, gated communities and farmhouses across Andhra Pradesh. Installed by ABHEE Smart Liv.",
    intro: "A perimeter alarm that runs entirely on sunlight, with instant alerts on breach.",
    overview:
      "Solar fencing gives villas, gated communities and function hall grounds a perimeter alarm that needs no mains power and no monthly bill — a wire breach anywhere along the boundary triggers an instant alert to the security desk and your phone.",
    highlights: [
      "Solar-powered, no electricity bill impact",
      "Instant alert on wire breach",
      "Weatherproof for monsoon & summer",
      "Pairs with gate and CCTV systems",
    ],
    applications: ["Villa & farmhouse boundaries", "Gated community perimeter walls", "Function hall grounds", "School campus boundaries"],
    industriesServed: ["villas", "gated-communities", "function-halls", "schools"],
    installationProcess: standardProcess("Solar Fencing"),
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
    line: "Sliding gates, swing gates and boom barriers that open before you park.",
    category: "Exteriors",
    heroImage: "/images/products/remote-gates/hero.jpg",
    heroImageAlt: "Automatic sliding gate at a luxury villa entrance",
    gallery: [
      { src: "/images/products/remote-gates/gallery-1.jpg", alt: "Remote-controlled gate motor mechanism" },
      { src: "/images/products/remote-gates/gallery-2.jpg", alt: "Boom barrier at a gated community entrance" },
    ],
    metaTitle: "Automatic Gates & Boom Barriers | ABHEE Smart Liv",
    metaDescription:
      "Motorised sliding gates, swing gates and boom barriers with app, remote and RFID control. Integrated with video door phones and CCTV. Installed by ABHEE Smart Liv.",
    intro: "Sliding gates, swing gates and boom barriers that open from your phone, your remote, or an RFID tag.",
    overview:
      "For a single villa, that means a motorised sliding or swing gate opening from your phone or a remote before you've parked. For a gated community or function hall, it's automatic boom barriers and RFID-tag entry managing hundreds of vehicles a day without a manual logbook.",
    highlights: [
      "Sliding & swing gate motors",
      "Boom barriers for community & event entrances",
      "App, remote and RFID access",
      "Integrated with video door phone & CCTV",
      "Battery backup for power cuts",
    ],
    applications: ["Villa & farmhouse entrances", "Gated community boom barrier gates", "Function hall vehicle entrances", "School & office parking gates"],
    industriesServed: ["villas", "gated-communities", "function-halls", "schools", "offices", "commercial-buildings"],
    installationProcess: standardProcess("Gate Automation & Boom Barriers"),
    faqs: [
      {
        q: "Do gates still work during a power cut?",
        a: "Yes, ABHEE installs battery backup units so gates and boom barriers continue operating for several hours during outages.",
      },
      {
        q: "Can a boom barrier read RFID tags automatically?",
        a: "Yes, ABHEE integrates automatic RFID and number-plate recognition so resident vehicles pass through without stopping at the barrier.",
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
    heroImage: "/images/products/wooden-flooring/hero.jpg",
    heroImageAlt: "Engineered wooden flooring in a luxury living room",
    gallery: [
      { src: "/images/products/wooden-flooring/gallery-1.jpg", alt: "Close-up texture of engineered wooden flooring" },
      { src: "/images/products/wooden-flooring/gallery-2.jpg", alt: "Wooden flooring in a gym or fitness studio" },
    ],
    metaTitle: "Wooden Flooring Installation | Engineered & Laminate | ABHEE Smart Liv",
    metaDescription:
      "Engineered and laminate wooden flooring designed for Indian humidity and heat. Installed across homes, gyms and offices by ABHEE Smart Liv.",
    intro: "Flooring engineered to hold its shape through humid summers and cool winters alike.",
    overview:
      "Engineered and laminate wooden flooring rated for Indian humidity, used across living rooms, bedrooms and increasingly gym floors and studios where a warmer, more forgiving surface is preferred to tile.",
    highlights: [
      "Engineered & laminate finishes",
      "Built for Indian humidity & heat",
      "Underfloor heating compatible",
      "Gym & studio-grade flooring options",
      "Wide range of wood-tone finishes",
    ],
    applications: ["Living rooms & bedrooms", "Home & community gyms", "Offices & lobbies"],
    industriesServed: ["villas", "apartments", "gated-communities", "offices"],
    installationProcess: standardProcess("Wooden Flooring"),
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
    heroImage: "/images/products/artificial-grass/hero.jpg",
    heroImageAlt: "Artificial grass lawn in a modern villa garden",
    gallery: [
      { src: "/images/products/artificial-grass/gallery-1.jpg", alt: "Close-up of premium artificial grass texture" },
    ],
    metaTitle: "Artificial Grass & Lawn Installation for Homes & Terraces | ABHEE Smart Liv",
    metaDescription:
      "Premium artificial grass and artificial lawn for gardens, terraces and balconies. UV-stable, low maintenance, and installed across South India by ABHEE Smart Liv.",
    intro: "The look of a manicured lawn, with none of the watering, mowing or dead patches.",
    overview:
      "Artificial lawn gives villas, gated community gardens and terraces a permanently green surface with zero irrigation, ideal for the long dry stretches between monsoons and for balconies where real grass simply won't grow.",
    highlights: [
      "UV-stable, doesn't fade in summer",
      "Zero watering or mowing",
      "Suitable for terraces & balconies",
      "Pet and child friendly surface",
    ],
    applications: ["Villa gardens & lawns", "Terraces & balconies", "Gated community landscaped areas"],
    industriesServed: ["villas", "apartments", "gated-communities"],
    installationProcess: standardProcess("Artificial Grass"),
    faqs: [
      {
        q: "Does artificial grass get too hot to walk on?",
        a: "ABHEE uses heat-resistant, lighter-toned fibres designed to stay comfortable underfoot even in peak summer.",
      },
    ],
    price: { currency: "INR", minPrice: 90 },
  },
  {
    slug: "access-control-systems",
    n: "14",
    title: "Access Control Systems",
    line: "Sensors, biometric access and vehicle tracking for buildings with more than one door.",
    category: "Security",
    heroImage: "/images/products/access-control-systems/hero.jpg",
    heroImageAlt: "Biometric access control panel at an office entrance",
    gallery: [
      { src: "/images/products/access-control-systems/gallery-1.jpg", alt: "Card-based access control reader at a building entrance" },
      { src: "/images/products/access-control-systems/gallery-2.jpg", alt: "Motion security sensor mounted in a corridor" },
      { src: "/images/products/access-control-systems/gallery-3.jpg", alt: "School bus fitted with a GPS vehicle tracker" },
    ],
    metaTitle: "Access Control Systems, Security Sensors & Vehicle Trackers | ABHEE Smart Liv",
    metaDescription:
      "Biometric and card-based access control, motion & door security sensors, and GPS vehicle tracking for offices, schools, gated communities and commercial buildings.",
    intro: "Every door, sensor and vehicle on one access log — not thirteen separate ones.",
    overview:
      "Where a smart door lock secures one door, Access Control Systems manage many — biometric or card readers across an office floor, motion and door sensors covering a perimeter, and GPS vehicle trackers for school transport and company fleets, all reporting into one access log.",
    highlights: [
      "Biometric & RFID card access control",
      "Door and motion security sensors",
      "GPS vehicle tracking for school & fleet transport",
      "Centralised access logs and reporting",
      "Integrates with CCTV and gate systems",
    ],
    applications: ["Office floors & server rooms", "School & college campuses", "Gated community facilities", "Commercial building entrances", "School transport fleets"],
    industriesServed: ["offices", "commercial-buildings", "schools", "colleges", "gated-communities", "hospitals"],
    installationProcess: standardProcess("Access Control Systems"),
    faqs: [
      {
        q: "What's the difference between a smart door lock and an access control system?",
        a: "A smart door lock secures a single door for a home. Access control systems manage many doors and users at once — typical for offices, schools and commercial buildings — with centralised logs and permissions.",
      },
      {
        q: "Can vehicle trackers be monitored in real time?",
        a: "Yes, ABHEE's GPS vehicle tracking integrates with a live map dashboard, commonly used by schools to share bus location with parents.",
      },
    ],
    price: { currency: "INR", minPrice: 65000 },
  },
  {
    slug: "sports-recreational-solutions",
    n: "15",
    title: "Sports & Recreational Solutions",
    line: "Courts, turf and flooring for every sport a campus or community plays.",
    category: "Recreation",
    heroImage: "/images/products/sports-recreational-solutions/hero.jpg",
    heroImageAlt: "Multi-sport court with basketball and volleyball markings",
    gallery: [
      { src: "/images/products/sports-recreational-solutions/gallery-1.jpg", alt: "Running track with EPDM synthetic surface" },
      { src: "/images/products/sports-recreational-solutions/gallery-2.jpg", alt: "Astro turf football field" },
      { src: "/images/products/sports-recreational-solutions/gallery-3.jpg", alt: "Indoor wooden shuttle badminton court" },
    ],
    metaTitle: "Sports Courts, Turf & Recreational Flooring | ABHEE Smart Liv",
    metaDescription:
      "Basketball, volleyball, badminton and cricket courts, running tracks, astro turf and synthetic sports flooring for schools, gated communities and colleges. ABHEE Smart Liv.",
    intro: "Every court, turf and indoor game a campus or community needs, from one contractor.",
    overview:
      "From a gated community's badminton court to a school's full running track and football turf, ABHEE designs and lays every surface a recreational facility needs — wooden shuttle courts, basketball and volleyball courts, cricket nets, EPDM running tracks, astro turf, PP tiles and synthetic sports paint — plus indoor games like snooker and table tennis.",
    highlights: [
      "Wooden shuttle / badminton courts",
      "Basketball & volleyball courts",
      "Cricket nets & multi-sport turf",
      "EPDM running tracks & astro turf",
      "PP tiles & synthetic paint for sports flooring",
      "Indoor games — snooker, table tennis & more",
    ],
    applications: ["Gated community sports facilities", "School & college campuses", "Villa private courts", "Community clubhouses"],
    industriesServed: ["gated-communities", "schools", "colleges", "villas"],
    installationProcess: standardProcess("Sports & Recreational Surfaces"),
    faqs: [
      {
        q: "Can one contractor handle both outdoor turf and indoor courts?",
        a: "Yes, ABHEE designs and installs both outdoor surfaces like astro turf and running tracks, and indoor courts and games rooms, as a single coordinated project.",
      },
      {
        q: "How long does synthetic sports flooring last?",
        a: "Quality PP tiles and synthetic paint surfaces typically last 8-10 years with normal use, with resurfacing needed only for high-traffic community or school facilities.",
      },
    ],
    price: { currency: "INR", minPrice: 250000 },
  },
  {
    slug: "swimming-pool-lifestyle-automation",
    n: "16",
    title: "Swimming Pool & Lifestyle Automation",
    line: "Pools, gyms, play areas and lounge seating, automated for daily use.",
    category: "Recreation",
    heroImage: "/images/products/swimming-pool-lifestyle-automation/hero.jpg",
    heroImageAlt: "Villa swimming pool lit at dusk with automated filtration",
    gallery: [
      { src: "/images/products/swimming-pool-lifestyle-automation/gallery-1.jpg", alt: "Gated community swimming pool with pool deck seating" },
      { src: "/images/products/swimming-pool-lifestyle-automation/gallery-2.jpg", alt: "Children's play area with slides and swings" },
      { src: "/images/products/swimming-pool-lifestyle-automation/gallery-3.jpg", alt: "Function hall lounge seating and premium sofas" },
    ],
    metaTitle: "Swimming Pool Construction & Lifestyle Automation | ABHEE Smart Liv",
    metaDescription:
      "Swimming pool construction and automation, gym equipment, children's play areas and function hall lounge seating for villas, gated communities and function halls.",
    intro: "The pool, the gym, the play area and the lounge — designed together, not as afterthoughts.",
    overview:
      "This is ABHEE's lifestyle-facility line: swimming pool construction with automated filtration and lighting, gym equipment fit-outs, children's play areas for community grounds, and the premium chairs, sofas and lounge seating that finish a function hall or clubhouse.",
    highlights: [
      "Swimming pool construction & automated filtration",
      "Pool lighting synced to home automation",
      "Gym equipment selection & fit-out",
      "Children's play area design & installation",
      "Function hall chairs, sofas & lounge seating",
    ],
    applications: ["Villa private pools & gyms", "Gated community pools & play areas", "Function hall lounges", "Clubhouse gyms"],
    industriesServed: ["villas", "gated-communities", "function-halls", "hotels"],
    installationProcess: standardProcess("Swimming Pool & Lifestyle Facilities"),
    faqs: [
      {
        q: "Can pool filtration and lighting be controlled from the same app as the rest of the house?",
        a: "Yes, ABHEE integrates pool pumps, filtration and lighting into the same automation app used for interior lighting and security.",
      },
      {
        q: "Do you supply furniture for function halls, or only technology?",
        a: "ABHEE supplies function hall chairs, premium sofas and lounge seating alongside the technology systems, so the space is finished end-to-end.",
      },
    ],
    price: { currency: "INR", minPrice: 400000 },
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PRODUCTS } from "@/lib/products-data";
import { SITE } from "@/lib/site-config";
import ProductCard from "@/components/ProductCard";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, localBusinessSchema, speakableSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABHEE Smart Home Systems | Premium Smart Home & Lifestyle Technology",
  description:
    "Home theatre, smart automation, AI CCTV, lighting, gates and more — one premium smart home company across Hyderabad, Vijayawada, Bangalore and Chennai.",
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "ABHEE Smart Home Systems | Smart Liv",
    description:
      "The complete premium smart home — automation, theatre, security and lifestyle systems, in one integrated build.",
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "https://picsum.photos/seed/abhee-og/1200/630" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABHEE Smart Home Systems | Smart Liv",
    description: "The complete premium smart home, in one integrated build.",
    images: ["https://picsum.photos/seed/abhee-og/1200/630"],
  },
};

const atmosphere = [
  { src: "https://picsum.photos/seed/abhee-atmo-villa/1400/1000", alt: "Luxury smart villa exterior at dusk" },
  { src: "https://picsum.photos/seed/abhee-atmo-living/1400/1000", alt: "Modern smart living room interior" },
  { src: "https://picsum.photos/seed/abhee-atmo-office/1400/1000", alt: "Premium office fitted with smart controls" },
  { src: "https://picsum.photos/seed/abhee-atmo-conf/1400/1000", alt: "Modern conference room with automated AV" },
  { src: "https://picsum.photos/seed/abhee-atmo-theatre/1400/1000", alt: "Cinematic home theatre lighting" },
];

export default function HomePage() {
  const bento = PRODUCTS;

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          localBusinessSchema(),
          speakableSchema(["#hero-headline", "#hero-sentence"]),
        ]}
      />

      {/* ---------------- 1. FULL-WIDTH CINEMATIC HERO ---------------- */}
      <section className="relative flex min-h-[94vh] flex-col justify-end overflow-hidden px-6 pb-14 pt-32 sm:px-10">
        <Image
          src="https://picsum.photos/seed/abhee-hero-main/2200/1400"
          alt="A premium automated residence at night, lit entirely by ABHEE smart lighting"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
        <div className="relative mx-auto w-full max-w-[1440px]">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">
              13 SOLUTIONS · ONE HOME
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="hero-headline"
              className="mt-5 max-w-3xl font-serif text-[42px] font-light leading-[1.05] tracking-tight sm:text-[64px] lg:text-[76px]"
            >
              The complete premium smart home.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p id="hero-sentence" className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75 sm:text-[16px]">
              Automation, theatre, security and lifestyle systems, designed as one build.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link
              href="/products"
             className="mt-8 inline-flex items-center gap-2 bg-[#5877BC] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore all products <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- 2. FULL CATALOGUE — ALL 13, IMMEDIATELY ---------------- */}
      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="The range"
              title="Every system, in one place"
              sentence="Thirteen premium categories, each built to work together."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {bento.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={(i % 4) * 60}
                className={i === 0 ? "col-span-2 row-span-2" : ""}
              >
                <ProductCard
                  product={p}
                  aspect={i === 0 ? "aspect-square sm:aspect-auto sm:h-full" : "aspect-[4/5]"}
                  priority={i < 2}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 3. 2-COLUMN EDITORIAL ---------------- */}
      <section className="border-t border-white/[0.06] px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[3/4]">
            <Image
              src="https://picsum.photos/seed/abhee-editorial-1/1400/1700"
              alt="A smart home living room designed for everyday living"
              fill
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionIntro
              label="Design philosophy"
              title="Built around how you live, not how it looks in a brochure"
              sentence="Every system is chosen for daily use — not just for demo day."
              ctaLabel="See the design process"
              ctaHref="/blog"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------------- 4. HORIZONTAL CINEMATIC GALLERY ---------------- */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10">
          <Reveal>
            <SectionIntro
              label="The ABHEE standard"
              title="One quality bar, every room"
              sentence="From living rooms to boardrooms, the same finish throughout."
            />
          </Reveal>
        </div>
        <Reveal delay={100}>
          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {atmosphere.map((a) => (
              <div key={a.src} className="relative h-[420px] w-[85vw] flex-none snap-start overflow-hidden sm:w-[520px]">
                <Image src={a.src} alt={a.alt} fill sizes="520px" className="object-cover" />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------------- 5. FULL-WIDTH CINEMATIC BANNER ---------------- */}
      <section className="relative flex h-[70vh] items-end overflow-hidden border-t border-white/[0.06] px-6 pb-14 sm:px-10">
        <Image
          src="https://picsum.photos/seed/abhee-banner-security/2200/1200"
          alt="AI CCTV camera monitoring a villa perimeter at dusk"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="relative mx-auto w-full max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="Security"
              title="A home that watches itself, so you don't have to"
              sentence="AI cameras, smart locks and gates, working as one perimeter."
              ctaLabel="View security systems"
              ctaHref="/products/ai-cctv-cameras"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------------- 6. ASYMMETRICAL IMAGE BLOCKS ---------------- */}
      <section className="border-t border-white/[0.06] px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="Why ABHEE"
              title="One team, from design to after-sales"
              sentence="A single point of contact for every system in your home."
              ctaLabel="Meet us in your city"
              ctaHref="/locations"
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-12">
            <Reveal className="sm:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/abhee-asym-1/1600/1000"
                  alt="ABHEE installation team fitting smart home equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100} className="sm:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden sm:h-full sm:aspect-auto">
                <Image
                  src="https://picsum.photos/seed/abhee-asym-2/1200/1500"
                  alt="Close-up of a finished ABHEE smart home control panel"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- 7. TRUST NUMBERS (minimal, image-backed) ---------------- */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-6 py-20 sm:px-10">
        <Image
          src="https://picsum.photos/seed/abhee-stats-bg/2200/900"
          alt="Premium home theatre installation by ABHEE"
          fill
          className="object-cover opacity-25"
        />
        <div className="relative mx-auto grid max-w-[1440px] grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            ["10+", "Years installing"],
            ["4,000+", "Homes automated"],
            ["4", "Cities served"],
            ["13", "Integrated systems"],
          ].map(([num, label]) => (
            <Reveal key={label}>
             <p className="font-serif text-[36px] font-light text-white sm:text-[48px]">
  {num}
</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-white/50">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- 8. CONSULTATION CTA ---------------- */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden border-t border-white/[0.06] px-6 sm:px-10">
        <Image
          src="https://picsum.photos/seed/abhee-cta-final/2200/1300"
          alt="A finished ABHEE smart home living room at evening"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto w-full max-w-[1440px] py-16">
          <Reveal>
            <SectionIntro
              label="Start your project"
              title="One consultation covers all thirteen systems"
              sentence="Our design team maps every category to your home in a single visit."
            />
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-brand-green px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Phone size={15} /> Book a home visit
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

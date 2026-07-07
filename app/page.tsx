import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Quote } from "lucide-react";
import { PRODUCTS } from "@/lib/products-data";
import { SERVICES } from "@/lib/services-data";
import { SOLUTIONS } from "@/lib/solutions-data";
import { PROJECTS } from "@/lib/projects-data";
import { GALLERY_CATEGORIES } from "@/lib/gallery-data";
import { BRANDS } from "@/lib/brands-data";
import { SITE } from "@/lib/site-config";
import { CITIES } from "@/lib/cities-data";
import ProductCard from "@/components/ProductCard";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, localBusinessSchema, speakableSchema, faqSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABHEE Smart Home Systems | Premium Smart Home & Lifestyle Technology",
  description:
    "Home theatre, smart automation, AI CCTV, lighting, gates and more — one premium smart home company across Andhra Pradesh, Telangana and Bengaluru.",
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "ABHEE Smart Home Systems | Smart Liv",
    description:
      "The complete premium smart home — automation, theatre, security and lifestyle systems, in one integrated build.",
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/images/og/default.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABHEE Smart Home Systems | Smart Liv",
    description: "The complete premium smart home, in one integrated build.",
    images: ["/images/og/default.jpg"],
  },
};

const atmosphere = [
  { src: "/images/home/atmosphere-1.jpg", alt: "Luxury smart villa exterior at dusk" },
  { src: "/images/home/atmosphere-2.jpg", alt: "Modern smart living room interior" },
  { src: "/images/home/atmosphere-3.jpg", alt: "Premium office fitted with smart controls" },
  { src: "/images/home/atmosphere-4.jpg", alt: "Modern conference room with automated AV" },
  { src: "/images/home/atmosphere-5.jpg", alt: "Cinematic home theatre lighting" },
];

const whyAbhee = [
  { title: "End-to-End Ownership", text: "One team handles design, installation and after-sales for every system in your build." },
  { title: `${PRODUCTS.length} Systems, One Platform`, text: "Automation, theatre, security and lifestyle systems, all controlled from a single app." },
  { title: "Retrofit & New-Build Ready", text: "Equally at home wiring in a new villa or retrofitting a finished apartment." },
  { title: "Local Teams, Every City", text: "Installation and AMC support based in the cities we serve, not a fly-in crew." },
];

export default function HomePage() {
  const bento = PRODUCTS;
  const homeFaqs = [
    PRODUCTS.find((p) => p.slug === "smart-home-automation")!.faqs[0],
    PRODUCTS.find((p) => p.slug === "ai-cctv-cameras")!.faqs[0],
    PRODUCTS.find((p) => p.slug === "access-control-systems")!.faqs[0],
    PRODUCTS.find((p) => p.slug === "home-theatre")!.faqs[0],
  ];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          localBusinessSchema(),
          speakableSchema(["#hero-headline", "#hero-sentence"]),
          faqSchema(homeFaqs),
        ]}
      />

      {/* ---------------- 1. FULL-WIDTH CINEMATIC HERO ---------------- */}
      <section className="relative flex min-h-[94svh] flex-col justify-end overflow-hidden px-6 pb-14 pt-32 sm:px-10">
        <Image
          src="/images/home/hero.jpg"
          alt="A premium automated residence at night, lit entirely by ABHEE smart lighting"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
        <div className="relative mx-auto w-full max-w-[1440px]">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">
              {PRODUCTS.length} SYSTEMS · ONE HOME
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
             className="mt-8 inline-flex items-center gap-2 bg-[#5877BC] min-h-[44px] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-transform duration-300 hover:-translate-y-0.5"
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
              sentence={`${PRODUCTS.length} premium categories, each built to work together.`}
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
              src="/images/home/editorial.jpg"
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
      <section className="relative flex h-[70svh] items-end overflow-hidden border-t border-white/[0.06] px-6 pb-14 sm:px-10">
        <Image
          src="/images/home/banner-security.jpg"
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
                  src="/images/home/asymmetrical-1.jpg"
                  alt="ABHEE installation team fitting smart home equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100} className="sm:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden sm:h-full sm:aspect-auto">
                <Image
                  src="/images/home/asymmetrical-2.jpg"
                  alt="Close-up of a finished ABHEE smart home control panel"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-4">
            {whyAbhee.map((w) => (
              <Reveal key={w.title}>
                <h3 className="font-serif text-[18px] font-light text-slate-900">{w.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 7. TRUST NUMBERS (minimal, image-backed) ---------------- */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-6 py-20 sm:px-10">
        <Image
          src="/images/home/stats-bg.jpg"
          alt="Premium home theatre installation by ABHEE"
          fill
          className="object-cover opacity-25"
        />
        <div className="relative mx-auto grid max-w-[1440px] grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            [SITE.yearsOfExcellence, "Years of excellence"],
            [SITE.projectsCompleted, "Projects completed"],
            [String(CITIES.length), "Cities served"],
            [String(PRODUCTS.length), "Integrated systems"],
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

      {/* ---------------- 7B. FEATURED SERVICES ---------------- */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="Services"
              title="Installed properly, supported after"
              sentence="A dedicated service page for every system, with a fixed process and AMC support."
              ctaLabel="View all services"
              ctaHref="/services"
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SERVICES.slice(0, 3).map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <ProductCard
                  product={{ slug: s.slug, heroImage: s.heroImage, heroImageAlt: s.heroImageAlt, title: s.title, line: s.line }}
                  href={`/services/${s.slug}`}
                  badge={null}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 7C. INDUSTRIES WE SERVE ---------------- */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="Solutions"
              title="Industries we serve"
              sentence="The same systems, tailored to villas, communities, campuses and venues."
              ctaLabel="View all solutions"
              ctaHref="/solutions"
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-6">
            {SOLUTIONS.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <ProductCard
                  product={{ slug: s.slug, heroImage: s.heroImage, heroImageAlt: s.heroImageAlt, title: s.name, line: s.intro }}
                  href={`/solutions/${s.slug}`}
                  badge={null}
                  aspect="aspect-square"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 7D. FEATURED PROJECTS ---------------- */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="Projects"
              title="Recent installations"
              sentence="A sample of ABHEE builds across homes, communities, campuses and venues."
              ctaLabel="View all projects"
              ctaHref="/projects"
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProductCard
                  product={{ slug: p.slug, heroImage: p.coverImage, heroImageAlt: p.coverImageAlt, title: p.name, line: p.location }}
                  href={`/projects/${p.slug}`}
                  badge={null}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 7E. TESTIMONIALS ---------------- */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro label="Testimonials" title="What clients tell us" />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Quote size={22} className="text-[#5877BC]" />
                <p className="mt-4 text-[14px] leading-relaxed text-slate-700">&ldquo;{p.testimonial.quote}&rdquo;</p>
                <p className="mt-3 text-[12px] uppercase tracking-[0.14em] text-slate-500">{p.testimonial.author}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 7F. GALLERY PREVIEW ---------------- */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="Gallery"
              title="See the work"
              sentence="Browse installations by category — home theatre, automation, CCTV and more."
              ctaLabel="View full gallery"
              ctaHref="/gallery"
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-6">
            {GALLERY_CATEGORIES.slice(0, 6).map((c) => (
              <Link key={c.slug} href="/gallery" className="group relative block aspect-square overflow-hidden">
                <Image
                  src={c.images[0].src}
                  alt={c.images[0].alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-3 text-[11px] uppercase tracking-[0.1em] text-white">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 7G. BRANDS ---------------- */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="Brands"
              title="Technology partners we build with"
              ctaLabel="View all partners"
              ctaHref="/brands"
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-6">
            {BRANDS.map((b) => (
              <div key={b.slug} className="relative h-12">
                <Image src={b.logo} alt={`${b.name} logo`} fill sizes="150px" className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 7H. FAQ PREVIEW ---------------- */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro label="FAQ" title="Common questions" ctaLabel="Read more in our Journal" ctaHref="/blog" />
          </Reveal>
          <div className="mt-10 divide-y divide-slate-200">
            {homeFaqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-serif text-[18px] font-light text-slate-900">{f.q}</h3>
                <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-slate-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 8. CONSULTATION CTA ---------------- */}
      <section className="relative flex min-h-[60svh] items-center overflow-hidden border-t border-white/[0.06] px-6 sm:px-10">
        <Image
          src="/images/home/cta-final.jpg"
          alt="A finished ABHEE smart home living room at evening"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto w-full max-w-[1440px] py-16">
          <Reveal>
            <SectionIntro
              label="Start your project"
              title={`One consultation covers all ${PRODUCTS.length} systems`}
              sentence="Our design team maps every category to your home in a single visit."
            />
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-brand-green min-h-[44px] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Phone size={15} /> Book a home visit
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

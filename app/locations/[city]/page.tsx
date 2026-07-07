import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { CITIES, getCityBySlug } from "@/lib/cities-data";
import { PRODUCTS } from "@/lib/products-data";
import { getSolutionBySlug } from "@/lib/solutions-data";
import { SITE } from "@/lib/site-config";
import ProductCard from "@/components/ProductCard";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import {
  localBusinessSchema,
  breadcrumbSchema,
  speakableSchema,
  faqSchema,
} from "@/lib/schema";

type PageProps = {
  params: Promise<{
    city: string;
  }>;
};

export function generateStaticParams() {
  return CITIES.map((c) => ({
    city: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;

  const city = getCityBySlug(citySlug);

  if (!city) {
    return {};
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `${SITE.url}/locations/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;

  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const industries = city.industriesServed
    .map((s) => getSolutionBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(city),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Locations", url: `${SITE.url}/locations` },
            { name: city.name, url: `${SITE.url}/locations/${city.slug}` },
          ]),
          speakableSchema(["#city-headline", "#city-intro"]),
          faqSchema(city.faqs),
        ]}
      />

      <section className="relative flex min-h-[70svh] flex-col justify-end overflow-hidden px-6 pb-14 pt-32 sm:px-10">
        <Image
          src={city.heroImage}
          alt={city.heroImageAlt}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />

        <div className="relative mx-auto w-full max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">
            {city.region.toUpperCase()}
          </span>

          <h1
  id="city-headline"
  className="mt-5 max-w-2xl font-serif text-[38px] font-light leading-[1.05] tracking-tight text-white sm:text-[58px]"
>
            Smart Home Systems in {city.name}
          </h1>

          <p
            id="city-intro"
            className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75"
          >
            {city.intro}
          </p>

          <Link
            href="/contact"
           className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#5877BC] min-h-[44px] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#3F5D84]">
            <Phone size={15} />
            Book a home visit
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <SectionIntro
            label="Areas we cover"
            title={`${city.name}, end to end`}
            sentence={`Serving ${city.areas
              .slice(0, 3)
              .join(", ")} and surrounding areas.`}
          />
        </div>
      </section>

      <section className="border-t border-white/[0.06] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">
            POPULAR IN {city.name.toUpperCase()}
          </span>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PRODUCTS.slice(0, 6).map((p) => (
              <Reveal key={p.slug}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose ABHEE in this city */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <SectionIntro label="Why ABHEE" title={`Why ${city.name} chooses ABHEE`} />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-4">
            {city.whyPoints.map((w) => (
              <Reveal key={w.title}>
                <h3 className="font-serif text-[18px] font-light text-slate-900">{w.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries we serve */}
      {industries.length > 0 && (
        <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-[1440px]">
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">INDUSTRIES WE SERVE</span>
            <div className="mt-6 flex flex-wrap gap-3">
              {industries.map((s) => (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className="border border-slate-300 px-3 py-1.5 text-[12px] text-slate-700 transition-colors hover:border-[#5877BC] hover:text-[#5877BC]"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">FREQUENTLY ASKED</span>
          <div className="mt-6 divide-y divide-slate-200">
            {city.faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-serif text-[18px] font-light text-slate-900">{f.q}</h3>
                <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-slate-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative flex min-h-[50svh] items-center overflow-hidden border-t border-white/[0.06] px-6 sm:px-10">
        <div className="absolute inset-0 bg-[#0F172A]" />
        <div className="relative mx-auto w-full max-w-[1440px] py-16">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">START YOUR PROJECT</span>
            <h2 className="mt-4 max-w-2xl font-serif text-[28px] font-light leading-tight tracking-tight text-white sm:text-[40px]">
              Book a free consultation in {city.name}
            </h2>
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
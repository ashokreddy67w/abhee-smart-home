import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";
import { getProductBySlug } from "@/lib/products-data";
import { getSolutionBySlug } from "@/lib/solutions-data";
import { SITE } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import ProductCard from "@/components/ProductCard";
import {
  genericServiceSchema,
  faqSchema,
  breadcrumbSchema,
  speakableSchema,
} from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const url = `${SITE.url}/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      images: [{ url: service.heroImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.heroImage],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProduct = getProductBySlug(service.relatedProductSlug);
  const relatedSolutions = service.relatedSolutionSlugs
    .map((s) => getSolutionBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          genericServiceSchema(
            { title: service.title, metaDescription: service.metaDescription, slug: service.slug },
            "services"
          ),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Services", url: `${SITE.url}/services` },
            { name: service.title, url: `${SITE.url}/services/${service.slug}` },
          ]),
          speakableSchema(["#service-headline", "#service-intro"]),
        ]}
      />

      {/* Hero */}
      <section className="relative flex min-h-[80svh] flex-col justify-end overflow-hidden px-6 pb-14 pt-32 sm:px-10">
        <Image src={service.heroImage} alt={service.heroImageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
        <div className="relative mx-auto w-full max-w-[1440px]">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">SERVICES</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 id="service-headline" className="mt-5 max-w-2xl font-serif text-[38px] font-light leading-[1.05] tracking-tight text-slate-900 sm:text-[58px]">
              {service.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p id="service-intro" className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-700">
              {service.intro}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#5877BC] min-h-[44px] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#3F5D84]"
            >
              <Phone size={15} /> Get a quote
            </Link>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">WHAT'S INCLUDED</span>
          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {service.whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-slate-200 pb-4 text-[15px] text-slate-700">
                <ArrowRight size={15} className="mt-1 flex-none text-[#5877BC]" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">HOW IT WORKS</span>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-4">
            {service.process.map((step) => (
              <Reveal key={step.step}>
                <span className="font-serif text-[32px] font-light text-[#5877BC]">{step.step}</span>
                <h3 className="mt-2 font-serif text-[18px] font-light text-slate-900">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">FREQUENTLY ASKED</span>
          <div className="mt-6 divide-y divide-slate-200">
            {service.faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-serif text-[18px] font-light text-slate-900">{f.q}</h3>
                <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-slate-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related product & solutions */}
      <section className="border-t border-slate-200 px-6 py-12 sm:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-3">
          {relatedProduct && (
            <>
              <span className="text-[12px] uppercase tracking-[0.14em] text-slate-500">
                See the full system:
              </span>
              <Link
                href={`/products/${relatedProduct.slug}`}
                className="border border-slate-300 px-3 py-1.5 text-[12px] text-slate-700 transition-colors hover:border-[#5877BC] hover:text-[#5877BC]"
              >
                {relatedProduct.title}
              </Link>
            </>
          )}
          {relatedSolutions.length > 0 && (
            <>
              <span className="ml-4 text-[12px] uppercase tracking-[0.14em] text-slate-500">
                Common for:
              </span>
              {relatedSolutions.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  className="border border-slate-300 px-3 py-1.5 text-[12px] text-slate-700 transition-colors hover:border-[#5877BC] hover:text-[#5877BC]"
                >
                  {sol.name}
                </Link>
              ))}
            </>
          )}
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">MORE SERVICES</span>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherServices.map((s) => (
              <ProductCard
                key={s.slug}
                product={{ slug: s.slug, heroImage: s.heroImage, heroImageAlt: s.heroImageAlt, title: s.title, line: s.line }}
                href={`/services/${s.slug}`}
                badge={null}
              />
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
              Book a site visit for {service.title.toLowerCase()}
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { SOLUTIONS, getSolutionBySlug } from "@/lib/solutions-data";
import { getProductBySlug } from "@/lib/products-data";
import { SITE } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import SectionIntro from "@/components/SectionIntro";
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
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  const url = `${SITE.url}/solutions/${solution.slug}`;
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: solution.metaTitle,
      description: solution.metaDescription,
      url,
      images: [{ url: solution.heroImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: solution.metaTitle,
      description: solution.metaDescription,
      images: [solution.heroImage],
    },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const products = solution.solutionsProvided
    .map((p) => getProductBySlug(p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const otherSolutions = SOLUTIONS.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          genericServiceSchema(
            { title: solution.name, metaDescription: solution.metaDescription, slug: solution.slug },
            "solutions",
            `Smart Systems for ${solution.name}`
          ),
          faqSchema(solution.faqs),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Solutions", url: `${SITE.url}/solutions` },
            { name: solution.name, url: `${SITE.url}/solutions/${solution.slug}` },
          ]),
          speakableSchema(["#solution-headline", "#solution-intro"]),
        ]}
      />

      {/* Hero */}
      <section className="relative flex min-h-[80svh] flex-col justify-end overflow-hidden px-6 pb-14 pt-32 sm:px-10">
        <Image src={solution.heroImage} alt={solution.heroImageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
        <div className="relative mx-auto w-full max-w-[1440px]">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">
              {solution.industryLabel.toUpperCase()}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 id="solution-headline" className="mt-5 max-w-2xl font-serif text-[38px] font-light leading-[1.05] tracking-tight text-slate-900 sm:text-[58px]">
              {solution.name}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p id="solution-intro" className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-700">
              {solution.intro}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#5877BC] min-h-[44px] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#3F5D84]"
            >
              <Phone size={15} /> Book a consultation
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Solutions we provide */}
      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">SOLUTIONS WE PROVIDE</span>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why points */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <SectionIntro label="Why ABHEE" title={`Why ${solution.name.toLowerCase()} choose us`} />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-4">
            {solution.whyPoints.map((w) => (
              <Reveal key={w.title}>
                <h3 className="font-serif text-[18px] font-light text-slate-900">{w.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{w.text}</p>
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
            {solution.faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-serif text-[18px] font-light text-slate-900">{f.q}</h3>
                <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-slate-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other solutions */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">OTHER INDUSTRIES</span>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherSolutions.map((s) => (
              <ProductCard
                key={s.slug}
                product={{ slug: s.slug, heroImage: s.heroImage, heroImageAlt: s.heroImageAlt, title: s.name, line: s.intro }}
                href={`/solutions/${s.slug}`}
                badge={null}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

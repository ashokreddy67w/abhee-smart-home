import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/lib/products-data";
import { SITE } from "@/lib/site-config";
import { CITIES } from "@/lib/cities-data";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import ProductCard from "@/components/ProductCard";
import {
  productSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  speakableSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  const url = `${SITE.url}/products/${product.slug}`;
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url,
      images: [{ url: product.heroImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.metaTitle,
      description: product.metaDescription,
      images: [product.heroImage],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          productSchema(product),
          serviceSchema(product),
          faqSchema(product.faqs),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Products", url: `${SITE.url}/products` },
            { name: product.title, url: `${SITE.url}/products/${product.slug}` },
          ]),
          speakableSchema(["#product-headline", "#product-intro"]),
        ]}
      />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col justify-end overflow-hidden px-6 pb-14 pt-32 sm:px-10">
        <Image src={product.heroImage} alt={product.heroImageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
        <div className="relative mx-auto w-full max-w-[1440px]">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">
              {product.category.toUpperCase()} · {product.n}/13
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 id="product-headline" className="mt-5 max-w-2xl font-serif text-[38px] font-light leading-[1.05] tracking-tight sm:text-[58px]">
              {product.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p id="product-intro" className="mt-5 max-w-md text-[15px] leading-relaxed ttext-white/65">
              {product.intro}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#5877BC] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] ttext-white transition-all duration-300 hover:bg-[#3F5D84]"
            >
              <Phone size={15} /> Get a quote
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Gallery — image-first, minimal captions */}
      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {product.gallery.map((g) => (
              <Reveal key={g.src} className="relative aspect-[4/5] overflow-hidden">
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights — short list, not paragraphs */}
      <section className="border-t border-white/[0.06] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-brand-green">WHAT'S INCLUDED</span>
          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 border-b border-white/[0.06] pb-4 text-[15px] ttext-white/80">
                <ArrowRight size={15} className="mt-1 flex-none text-[#5877BC]" /> {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ — also serves as GEO / AI-answer content */}
      <section className="border-t border-white/[0.06] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-brand-green">FREQUENTLY ASKED</span>
          <div className="mt-6 divide-y divide-white/[0.06]">
            {product.faqs.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-serif text-[18px] font-light">{f.q}</h3>
                <p className="mt-2 max-w-2xl text-[14px] leading-relaxed ttext-white/60">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities served — internal linking for local SEO */}
      <section className="border-t border-white/[0.06] px-6 py-12 sm:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-3">
          <span className="text-[12px] uppercase tracking-[0.14em] ttext-white/40">
            {product.title} installed in:
          </span>
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/locations/${c.slug}`}
              className="border border-white/15 px-3 py-1.5 text-[12px] ttext-white/70 transition-colors hover:border-[#5877BC] hover:text-[#5877BC]"            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Related products */}
      <section className="border-t border-white/[0.06] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-brand-green">PAIRS WELL WITH</span>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <ProductCard key={r.slug} product={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

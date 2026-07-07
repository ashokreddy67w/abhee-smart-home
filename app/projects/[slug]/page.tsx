import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, Quote } from "lucide-react";
import { PROJECTS, getProjectBySlug } from "@/lib/projects-data";
import { getProductBySlug } from "@/lib/products-data";
import { getCityBySlug } from "@/lib/cities-data";
import { getSolutionBySlug } from "@/lib/solutions-data";
import { SITE } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import ProductCard from "@/components/ProductCard";
import { breadcrumbSchema, speakableSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const url = `${SITE.url}/projects/${project.slug}`;
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url,
      images: [{ url: project.coverImage }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.metaTitle,
      description: project.metaDescription,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const city = getCityBySlug(project.citySlug);
  const solution = getSolutionBySlug(project.industry);
  const products = project.productsInstalled
    .map((p) => getProductBySlug(p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);
  const completionLabel = new Date(`${project.completionDate}-01`).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Projects", url: `${SITE.url}/projects` },
            { name: project.name, url: `${SITE.url}/projects/${project.slug}` },
          ]),
          speakableSchema(["#project-headline", "#project-description"]),
        ]}
      />

      {/* Hero */}
      <section className="relative flex min-h-[80svh] flex-col justify-end overflow-hidden px-6 pb-14 pt-32 sm:px-10">
        <Image src={project.coverImage} alt={project.coverImageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
        <div className="relative mx-auto w-full max-w-[1440px]">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">
              {solution ? solution.industryLabel.toUpperCase() : "PROJECT"} · {completionLabel.toUpperCase()}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 id="project-headline" className="mt-5 max-w-2xl font-serif text-[38px] font-light leading-[1.05] tracking-tight text-slate-900 sm:text-[58px]">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-700">{project.location}</p>
          </Reveal>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <p id="project-description" className="max-w-2xl text-[16px] leading-relaxed text-slate-700">
            {project.description}
          </p>
        </div>
      </section>

      {/* Products installed */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">PRODUCTS INSTALLED</span>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.gallery.map((g) => (
              <Reveal key={g.src} className="relative aspect-[4/5] overflow-hidden">
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <Quote size={28} className="text-[#5877BC]" />
          <p className="mt-4 max-w-2xl font-serif text-[22px] font-light leading-snug text-slate-900 sm:text-[28px]">
            &ldquo;{project.testimonial.quote}&rdquo;
          </p>
          <p className="mt-4 text-[13px] uppercase tracking-[0.14em] text-slate-500">{project.testimonial.author}</p>
        </div>
      </section>

      {/* Related city / solution links */}
      <section className="border-t border-slate-200 px-6 py-12 sm:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-3">
          {city && (
            <Link
              href={`/locations/${city.slug}`}
              className="border border-slate-300 px-3 py-1.5 text-[12px] text-slate-700 transition-colors hover:border-[#5877BC] hover:text-[#5877BC]"
            >
              More in {city.name}
            </Link>
          )}
          {solution && (
            <Link
              href={`/solutions/${solution.slug}`}
              className="border border-slate-300 px-3 py-1.5 text-[12px] text-slate-700 transition-colors hover:border-[#5877BC] hover:text-[#5877BC]"
            >
              {solution.name} solutions
            </Link>
          )}
        </div>
      </section>

      {/* Other projects */}
      <section className="border-t border-slate-200 px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">MORE PROJECTS</span>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherProjects.map((p) => (
              <ProductCard
                key={p.slug}
                product={{ slug: p.slug, heroImage: p.coverImage, heroImageAlt: p.coverImageAlt, title: p.name, line: p.location }}
                href={`/projects/${p.slug}`}
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
              Planning something similar?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-brand-green min-h-[44px] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Phone size={15} /> Book a consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects-data";
import { SITE } from "@/lib/site-config";
import ProductCard from "@/components/ProductCard";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of ABHEE Smart Liv installations across villas, gated communities, schools, function halls, offices and hospitals.",
  alternates: { canonical: `${SITE.url}/projects` },
};

export default function ProjectsIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Projects", url: `${SITE.url}/projects` },
        ])}
      />
      <section className="px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              dark={false}
              label="Projects"
              title="Recent installations"
              sentence="A sample of ABHEE builds across homes, communities, campuses and venues."
            />
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-10">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 60}>
                <ProductCard
                  product={{
                    slug: p.slug,
                    heroImage: p.coverImage,
                    heroImageAlt: p.coverImageAlt,
                    title: p.name,
                    line: p.location,
                  }}
                  href={`/projects/${p.slug}`}
                  badge={null}
                  priority={i < 3}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

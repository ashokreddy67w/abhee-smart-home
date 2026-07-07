import type { Metadata } from "next";
import { SOLUTIONS } from "@/lib/solutions-data";
import { SITE } from "@/lib/site-config";
import ProductCard from "@/components/ProductCard";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Industry Solutions",
  description:
    "ABHEE's smart systems tailored to villas, apartments, gated communities, schools, colleges, function halls, hotels, hospitals, offices and commercial buildings.",
  alternates: { canonical: `${SITE.url}/solutions` },
};

export default function SolutionsIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Solutions", url: `${SITE.url}/solutions` },
        ])}
      />
      <section className="px-6 pb-16 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="Solutions"
              title="Built for your industry"
              sentence="The same 16 systems, tailored to the way each industry actually operates."
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 60}>
                <ProductCard
                  product={{
                    slug: s.slug,
                    heroImage: s.heroImage,
                    heroImageAlt: s.heroImageAlt,
                    title: s.name,
                    line: s.intro,
                  }}
                  href={`/solutions/${s.slug}`}
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

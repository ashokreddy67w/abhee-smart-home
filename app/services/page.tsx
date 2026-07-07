import type { Metadata } from "next";
import { SERVICES } from "@/lib/services-data";
import { SITE } from "@/lib/site-config";
import ProductCard from "@/components/ProductCard";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Installation Services",
  description:
    "ABHEE's full range of installation services — from smart home automation to sports flooring — each with fixed process, timeline and AMC support.",
  alternates: { canonical: `${SITE.url}/services` },
};

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services` },
        ])}
      />
      <section className="px-6 pb-16 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="Services"
              title="Every installation, done properly"
              sentence="From site survey to handover and AMC — a dedicated service page for every system we install."
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 60}>
                <ProductCard
                  product={{
                    slug: s.slug,
                    heroImage: s.heroImage,
                    heroImageAlt: s.heroImageAlt,
                    title: s.title,
                    line: s.line,
                  }}
                  href={`/services/${s.slug}`}
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

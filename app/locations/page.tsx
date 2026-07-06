import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CITIES } from "@/lib/cities-data";
import { SITE } from "@/lib/site-config";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Locations We Serve",
  description: "ABHEE Smart Home Systems installs and supports premium smart home technology across Hyderabad, Vijayawada, Bangalore and Chennai.",
  alternates: { canonical: `${SITE.url}/locations` },
};

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Locations", url: `${SITE.url}/locations` },
        ])}
      />
      <section className="px-6 pb-16 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="Where we work"
              title="Four cities, one standard"
              sentence="ABHEE installs and supports every system in person, not remotely."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CITIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link href={`/locations/${c.slug}`} className="group relative block aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={c.heroImage}
                    alt={c.heroImageAlt}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
               <h2 className="font-serif text-[24px] font-light text-white">
  {c.name}
</h2>
  <p className="mt-1 text-[13px] text-white/70">
  {c.intro}
</p>
                    <span className="mt-3 flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-[#5877BC] transition-colors duration-300 group-hover:text-white">
                      Explore <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

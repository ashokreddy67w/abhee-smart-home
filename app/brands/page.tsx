import type { Metadata } from "next";
import Image from "next/image";
import { BRANDS } from "@/lib/brands-data";
import { SITE } from "@/lib/site-config";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Brand Partners",
  description:
    "The categories of technology partners ABHEE Smart Liv works with across automation, security, audio-visual, lighting, flooring and gate automation.",
  alternates: { canonical: `${SITE.url}/brands` },
};

export default function BrandsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Brands", url: `${SITE.url}/brands` },
        ])}
      />
      <section className="px-6 pb-16 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="Brands"
              title="Technology partners we build with"
              sentence="ABHEE sources hardware from trusted partners across every category we install."
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {BRANDS.map((b, i) => (
              <Reveal key={b.slug} delay={(i % 3) * 60}>
                <div className="flex flex-col items-center gap-4 border border-slate-200 p-8 text-center">
                  <div className="relative h-16 w-full">
                    <Image
                      src={b.logo}
                      alt={`${b.name} logo`}
                      fill
                      sizes="200px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-[16px] font-light text-slate-900">{b.name}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#5877BC]">{b.category}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{b.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

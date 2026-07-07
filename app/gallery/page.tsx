import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import GalleryGrid from "@/components/GalleryGrid";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse ABHEE Smart Liv installations by category — home theatre, automation, CCTV, smart locks, lighting, curtains, video door phones, boom barriers, flooring, lawns, commercial and residential.",
  alternates: { canonical: `${SITE.url}/gallery` },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Gallery", url: `${SITE.url}/gallery` },
        ])}
      />
      <section className="px-6 pb-16 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="Gallery"
              title="See the work"
              sentence="Filter by category to see ABHEE installations across homes, campuses and venues."
            />
          </Reveal>
          <div className="mt-10">
            <GalleryGrid />
          </div>
        </div>
      </section>
    </>
  );
}

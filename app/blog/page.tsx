import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "@/lib/blog-data";
import { SITE } from "@/lib/site-config";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Straight answers on smart home automation, pricing and design — from ABHEE Smart Liv.",
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogIndexPage() {
  return (
    <section className="px-6 pb-16 pt-32 sm:px-10 sm:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionIntro
            label="Journal"
            title="Straight answers, no sales pitch"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ARTICLES.map((a) => (
            <Reveal key={a.slug}>
              <Link href={`/blog/${a.slug}`} className="group block">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={a.heroImage}
                    alt={a.heroImageAlt}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>

                <h2 className="mt-4 font-serif text-[22px] font-light text-white">
                  {a.title}
                </h2>

                <p className="mt-1 text-[13px] text-white/70">
                  {a.excerpt}
                </p>

                <span className="mt-3 flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-[#5877BC] transition-colors duration-300 group-hover:text-white">
                  Read
                  <ArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/products-data";
import { SITE } from "@/lib/site-config";
import ProductCard from "@/components/ProductCard";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Smart Home Products & Systems",
  description:
    "Browse ABHEE's complete range of premium smart home systems — automation, home theatre, security, lighting, gates and more.",
  alternates: { canonical: `${SITE.url}/products` },
};

export default function ProductsIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Products", url: `${SITE.url}/products` },
        ])}
      />
      <section className="px-6 pb-16 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionIntro
              label="Catalogue"
              title="Thirteen systems, one home"
              sentence="Every category ABHEE designs, installs and supports."
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 60}>
                <ProductCard product={p} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
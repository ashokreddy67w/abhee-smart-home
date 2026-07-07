import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/products-data";
import { SITE } from "@/lib/site-config";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import ProductsGrid from "@/components/ProductsGrid";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Smart Home Products & Systems",
  description:
    "Browse ABHEE's complete range of premium smart home systems — automation, home theatre, security, lighting, gates, sports and lifestyle facilities.",
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
              title={`${PRODUCTS.length} systems, one home`}
              sentence="Every category ABHEE designs, installs and supports."
            />
          </Reveal>

          <div className="mt-10">
            <ProductsGrid products={PRODUCTS} />
          </div>
        </div>
      </section>
    </>
  );
}
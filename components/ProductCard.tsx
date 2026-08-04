import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products-data";

type CardItem = {
  slug: string;
  heroImage: string;
  heroImageAlt: string;
  title: string;
  line: string;
  n?: string;
};

export default function ProductCard({
  product,
  aspect = "aspect-[3/4] sm:aspect-[4/5]",
  priority = false,
  href,
  badge,
}: {
  product: CardItem | Product;
  aspect?: string;
  priority?: boolean;
  /** Override the default `/products/[slug]` link — used when reusing this card for services, solutions, projects & brands. */
  href?: string;
  /** Override the numbered badge (or pass null to hide it) — defaults to `product.n` when present. */
  badge?: string | null;
}) {
  const linkHref = href ?? `/products/${product.slug}`;
  const badgeText = badge !== undefined ? badge : product.n;

  return (
    <Link
      href={linkHref}
      className={`group relative block h-[320px] w-full ${aspect} overflow-hidden rounded-3xl bg-[#0F172A] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:h-auto`}
    >
      <Image
        src={product.heroImage}
        alt={product.heroImageAlt}
        fill
        priority={priority}
        sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 25vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 md:from-black/90 md:via-black/20 md:to-transparent" />

      {/* Number / badge */}
      {badgeText && (
        <span className="absolute left-6 top-6 rounded-full bg-[#5877BC]/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-md backdrop-blur-sm md:left-4 md:top-4">
          {badgeText}
        </span>
      )}

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 flex h-[210px] min-w-0 flex-col overflow-hidden px-6 pb-6 pt-5 md:block md:h-auto md:p-8">
        <h3 className="line-clamp-2 min-w-0 font-serif text-[16px] font-light leading-[1.25] tracking-tight text-white md:line-clamp-none md:text-[28px] md:leading-tight">
          {product.title}
        </h3>

        <p className="mt-4 line-clamp-2 min-w-0 text-[13px] leading-5 text-white/80 md:mt-3 md:line-clamp-none md:max-w-[92%] md:text-[14px] md:leading-relaxed">
          {product.line}
        </p>

        <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#84A6D9] transition-colors duration-300 group-hover:text-white md:mt-5 md:pt-0 md:text-[13px]">
          Explore
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </span>
      </div>
    </Link>
  );
}

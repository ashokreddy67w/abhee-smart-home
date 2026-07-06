import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products-data";

export default function ProductCard({
  product,
  aspect = "aspect-[3/4] sm:aspect-[4/5]",
  priority = false,
}: {
  product: Product;
  aspect?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group relative block w-full ${aspect} overflow-hidden rounded-3xl bg-[#0F172A] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl`}
    >
      <Image
        src={product.heroImage}
        alt={product.heroImageAlt}
        fill
        priority={priority}
        sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 25vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Number */}
      <span className="absolute left-4 top-4 rounded-full bg-[#5877BC]/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-md backdrop-blur-sm">
        {product.n}
      </span>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
        <h3 className="font-serif text-[18px] font-light leading-tight tracking-tight text-white sm:text-[28px]">
          {product.title}
        </h3>

        <p className="mt-2 max-w-[92%] text-[12px] leading-6 text-white/80 sm:mt-3 sm:text-[14px] sm:leading-relaxed">
          {product.line}
        </p>

        <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#84A6D9] transition-colors duration-300 group-hover:text-white sm:mt-5 sm:text-[13px]">
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
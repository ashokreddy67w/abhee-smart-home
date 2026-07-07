"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import type { Product } from "@/lib/products-data";

export default function ProductsGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<string>("all");
  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    [products]
  );
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setActive("all")}
          className={`px-4 py-2 text-[12px] uppercase tracking-[0.14em] transition-colors ${
            active === "all"
              ? "bg-[#5877BC] text-white"
              : "border border-slate-300 text-slate-700 hover:border-[#5877BC] hover:text-[#5877BC]"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 text-[12px] uppercase tracking-[0.14em] transition-colors ${
              active === c
                ? "bg-[#5877BC] text-white"
                : "border border-slate-300 text-slate-700 hover:border-[#5877BC] hover:text-[#5877BC]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 60}>
            <ProductCard product={p} priority={i < 3} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

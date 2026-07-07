"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_CATEGORIES } from "@/lib/gallery-data";

export default function GalleryGrid() {
  const [active, setActive] = useState<string>("all");

  const categories = active === "all" ? GALLERY_CATEGORIES : GALLERY_CATEGORIES.filter((c) => c.slug === active);

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
        {GALLERY_CATEGORIES.map((c) => (
          <button
            key={c.slug}
            onClick={() => setActive(c.slug)}
            className={`px-4 py-2 text-[12px] uppercase tracking-[0.14em] transition-colors ${
              active === c.slug
                ? "bg-[#5877BC] text-white"
                : "border border-slate-300 text-slate-700 hover:border-[#5877BC] hover:text-[#5877BC]"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-12">
        {categories.map((c) => (
          <div key={c.slug}>
            <h2 className="font-serif text-[22px] font-light text-slate-900">{c.name}</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {c.images.map((img) => (
                <div key={img.src} className="relative aspect-square overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

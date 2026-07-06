import Link from "next/link";
import { PRODUCTS } from "@/lib/products-data";
import { CITIES } from "@/lib/cities-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-14 sm:px-10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 sm:grid-cols-4">
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">
            PRODUCTS
          </p>
          <ul className="mt-4 space-y-2">
            {PRODUCTS.slice(0, 8).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="text-[13px] text-slate-600 transition-colors hover:text-[#5877BC]"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">
            MORE PRODUCTS
          </p>
          <ul className="mt-4 space-y-2">
            {PRODUCTS.slice(8).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="text-[13px] text-slate-600 transition-colors hover:text-[#5877BC]"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">
            LOCATIONS
          </p>
          <ul className="mt-4 space-y-2">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/locations/${c.slug}`}
                  className="text-[13px] text-slate-600 transition-colors hover:text-[#5877BC]"
                >
                  Smart Home {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">
            COMPANY
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/blog"
                className="text-[13px] text-slate-600 transition-colors hover:text-[#5877BC]"
              >
                Journal
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[13px] text-slate-600 transition-colors hover:text-[#5877BC]"
              >
                Book a consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1440px] flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-[12px] text-slate-500 sm:flex-row">
        <span>
          © {new Date().getFullYear()} ABHEE Smart Home Systems — Smart Liv
        </span>
        <span>
          Andhra Pradesh · Hyderabad · Vijayawada · Bangalore · Chennai
        </span>
      </div>
    </footer>
  );
}
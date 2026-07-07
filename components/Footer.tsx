import Link from "next/link";
import { PRODUCTS } from "@/lib/products-data";
import { CITIES } from "@/lib/cities-data";
import { SOLUTIONS } from "@/lib/solutions-data";
import { SERVICES } from "@/lib/services-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-14 sm:px-10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-6">
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
                href="/projects"
                className="text-[13px] text-slate-600 transition-colors hover:text-[#5877BC]"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="text-[13px] text-slate-600 transition-colors hover:text-[#5877BC]"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/brands"
                className="text-[13px] text-slate-600 transition-colors hover:text-[#5877BC]"
              >
                Brand Partners
              </Link>
            </li>
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

        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">
            SOLUTIONS
          </p>
          <ul className="mt-4 space-y-2">
            {SOLUTIONS.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="text-[13px] text-slate-600 transition-colors hover:text-[#5877BC]"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">
            SERVICES
          </p>
          <ul className="mt-4 space-y-2">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-[13px] text-slate-600 transition-colors hover:text-[#5877BC]"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="text-[13px] text-slate-600 transition-colors hover:text-[#5877BC]"
              >
                View all services
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
          Andhra Pradesh · Telangana · Bengaluru · {CITIES.map((c) => c.name).join(" · ")}
        </span>
      </div>
    </footer>
  );
}
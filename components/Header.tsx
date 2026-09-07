"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site-config";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

const CINEMATIC_HERO_ROUTES = ["/", "/contact"];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const overHero = CINEMATIC_HERO_ROUTES.includes(pathname) && !scrolled;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        overHero
          ? "border-white/0 bg-transparent"
          : "border-slate-200/80 bg-white/90 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto grid min-h-[92px] max-w-[1440px] grid-cols-[1fr_auto] items-center px-5 md:min-h-[104px] md:px-10 lg:min-h-[120px] lg:grid-cols-[1fr_auto_1fr] lg:px-10 xl:min-h-[128px] xl:px-12">
        <Link href="/" className="flex items-center justify-self-start" aria-label={`${SITE.name} home`}>
          <Image
            src="/images/newlogo-header-transparent.png"
            alt="ABHEE Smart Home Systems"
            width={1735}
            height={453}
            priority
            className={`h-[42px] w-auto transition-[filter] duration-500 md:h-auto md:w-[220px] lg:w-[248px] xl:w-[292px] ${
              overHero ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" : ""
            }`}
          />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          <Link
            href="/products"
            className={`text-[14px] font-medium tracking-[0.01em] transition-colors xl:text-[15px] ${
              overHero ? "text-white/85 hover:text-white" : "text-black/65 hover:text-[#5877BC]"
            }`}
          >
            Products
          </Link>
          <Link
            href="/solutions"
            className={`text-[14px] font-medium tracking-[0.01em] transition-colors xl:text-[15px] ${
              overHero ? "text-white/85 hover:text-white" : "text-black/65 hover:text-[#5877BC]"
            }`}
          >
            Solutions
          </Link>
          <Link
            href="/projects"
            className={`text-[14px] font-medium tracking-[0.01em] transition-colors xl:text-[15px] ${
              overHero ? "text-white/85 hover:text-white" : "text-black/65 hover:text-[#5877BC]"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/gallery"
            className={`text-[14px] font-medium tracking-[0.01em] transition-colors xl:text-[15px] ${
              overHero ? "text-white/85 hover:text-white" : "text-black/65 hover:text-[#5877BC]"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/locations"
            className={`text-[14px] font-medium tracking-[0.01em] transition-colors xl:text-[15px] ${
              overHero ? "text-white/85 hover:text-white" : "text-black/65 hover:text-[#5877BC]"
            }`}
          >
            Locations
          </Link>
          <Link
            href="/blog"
            className={`text-[14px] font-medium tracking-[0.01em] transition-colors xl:text-[15px] ${
              overHero ? "text-white/85 hover:text-white" : "text-black/65 hover:text-[#5877BC]"
            }`}
          >
            Journal
          </Link>
        </nav>
        <Link
          href="/contact"
          className={`hidden min-h-[46px] items-center justify-self-end rounded-full px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] transition lg:inline-flex xl:px-7 xl:text-[12px] ${
            overHero
              ? "border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-black"
              : "bg-[#5877BC] text-white shadow-sm hover:bg-[#3F5D84]"
          }`}
        >
          Book a visit
        </Link>
        <MobileNav overHero={overHero} />
      </div>
    </header>
  );
}

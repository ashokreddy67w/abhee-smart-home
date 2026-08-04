import Link from "next/link";
import { SITE } from "@/lib/site-config";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto grid min-h-[92px] max-w-[1440px] grid-cols-[1fr_auto] items-center px-6 sm:min-h-[104px] sm:px-10 lg:min-h-[120px] lg:grid-cols-[1fr_auto_1fr] lg:px-10 xl:min-h-[128px] xl:px-12">
        <Link href="/" className="flex items-center justify-self-start" aria-label={`${SITE.name} home`}>
          <Image
            src="/images/newlogo-header.png"
            alt="ABHEE Smart Home Systems"
            width={1735}
            height={453}
            priority
            className="h-auto w-[190px] sm:w-[220px] lg:w-[248px] xl:w-[292px]"
          />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          <Link href="/products" className="text-[14px] font-medium tracking-[0.01em] text-black/65 transition-colors hover:text-[#5877BC] xl:text-[15px]">
            Products
          </Link>
          <Link href="/solutions" className="text-[14px] font-medium tracking-[0.01em] text-black/65 transition-colors hover:text-[#5877BC] xl:text-[15px]">
            Solutions
          </Link>
          <Link href="/projects" className="text-[14px] font-medium tracking-[0.01em] text-black/65 transition-colors hover:text-[#5877BC] xl:text-[15px]">
            Projects
          </Link>
          <Link href="/gallery" className="text-[14px] font-medium tracking-[0.01em] text-black/65 transition-colors hover:text-[#5877BC] xl:text-[15px]">
            Gallery
          </Link>
          <Link href="/locations" className="text-[14px] font-medium tracking-[0.01em] text-black/65 transition-colors hover:text-[#5877BC] xl:text-[15px]">
            Locations
          </Link>
          <Link href="/blog" className="text-[14px] font-medium tracking-[0.01em] text-black/65 transition-colors hover:text-[#5877BC] xl:text-[15px]">
            Journal
          </Link>
        </nav>
        <Link
          href="/contact"
          className="hidden min-h-[46px] items-center justify-self-end rounded-full bg-[#5877BC] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white shadow-sm transition hover:bg-[#3F5D84] lg:inline-flex xl:px-7 xl:text-[12px]"
        >
          Book a visit
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}

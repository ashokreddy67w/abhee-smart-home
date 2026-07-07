import Link from "next/link";
import { SITE } from "@/lib/site-config";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  return (
<header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
  <div className="mx-auto flex max-w-[1440px] items-center justify-between py-4 pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))] sm:pl-[max(2.5rem,env(safe-area-inset-left))] sm:pr-[max(2.5rem,env(safe-area-inset-right))]">
    <Link href="/" className="flex items-center">
    <Image
  src="/images/newlogos.png"
  alt="ABHEE Smart Home Systems"
  width={1026}
  height={364}
  priority
  className="h-12 w-auto md:h-14 lg:h-16"
/>
    </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/products" className="text-[18px] text-black/70 transition-colors hover:ttext-white">
            Products
          </Link>
          <Link href="/solutions" className="text-[18px] text-black/70 transition-colors hover:ttext-white">
            Solutions
          </Link>
          <Link href="/projects" className="text-[18px] text-black/70 transition-colors hover:ttext-white">
            Projects
          </Link>
          <Link href="/gallery" className="text-[18px] text-black/70 transition-colors hover:ttext-white">
            Gallery
          </Link>
          <Link href="/locations" className="text-[18px] text-black/70 transition-colors hover:ttext-white">
            Locations
          </Link>
          <Link href="/blog" className="text-[18px] text-black/70 transition-colors hover:ttext-white">
            Journal
          </Link>
        </nav>
        <Link
          href="/contact"
className="hidden min-h-[44px] items-center rounded-full bg-[#5877BC] px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.14em] ttext-white transition hover:bg-[#3F5D84] md:inline-flex"
        >
          Book a visit
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}

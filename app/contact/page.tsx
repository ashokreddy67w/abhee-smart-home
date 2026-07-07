import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/site-config";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Book a free ABHEE Smart Liv home visit — one consultation covers automation, theatre, security, lighting and more.",
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <section className="relative flex min-h-[90svh] flex-col justify-end overflow-hidden px-6 pb-16 pt-32 sm:px-10">
      <Image
        src="/images/contact/hero.jpg"
        alt="ABHEE design consultant reviewing a smart home plan"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black" />
      <div className="relative mx-auto w-full max-w-[1440px]">
        <Reveal>
          <SectionIntro
            label="Book a visit"
            title="Let's map your home in one visit"
            sentence="Tell us your city and we'll schedule a free on-site consultation."
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`tel:${SITE.phone}`}
             className="flex items-center gap-2 rounded-full bg-[#5877BC] min-h-[44px] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#3F5D84]"
            >
              <Phone size={15} /> {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
             className="flex items-center gap-2 rounded-full border border-[#5877BC] min-h-[44px] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-[#5877BC] transition-all duration-300 hover:bg-[#5877BC] hover:text-white"
            >
              <Mail size={15} /> {SITE.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

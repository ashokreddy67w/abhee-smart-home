import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SectionIntro({
  label,
  title,
  sentence,
  ctaLabel,
  ctaHref,
  align = "left",
}: {
  label: string;
  title: string;
  sentence?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : ""
      }`}
    >
      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#5877BC]">
        {label}
      </span>

      <h2 className="max-w-2xl font-serif text-[28px] font-light leading-tight tracking-tight ttext-white sm:text-[40px]">
        {title}
      </h2>

      {sentence && (
        <p className="max-w-md text-[15px] leading-relaxed ttext-white/70">
          {sentence}
        </p>
      )}

      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="mt-2 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em] text-[#5877BC] transition-colors duration-300 hover:text-[#84A6D9]"
        >
          {ctaLabel}
          <ArrowRight size={15} />
        </Link>
      )}
    </div>
  );
}
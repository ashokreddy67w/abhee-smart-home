import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SectionIntro({
  label,
  title,
  sentence,
  ctaLabel,
  ctaHref,
  align = "left",
  dark = true,
}: {
  label: string;
  title: string;
  sentence?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "center";
  /** Set false when this sits on a light/white section — defaults to true (white text) for dark hero/image backgrounds. */
  dark?: boolean;
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

      <h2
        className={`max-w-2xl font-serif text-[28px] font-light leading-tight tracking-tight sm:text-[40px] ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {sentence && (
        <p className={`max-w-md text-[15px] leading-relaxed ${dark ? "text-white/70" : "text-slate-600"}`}>
          {sentence}
        </p>
      )}

      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className={`mt-2 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em] text-[#5877BC] transition-colors duration-300 ${
            dark ? "hover:text-[#84A6D9]" : "hover:text-[#3F5D84]"
          }`}
        >
          {ctaLabel}
          <ArrowRight size={15} />
        </Link>
      )}
    </div>
  );
}

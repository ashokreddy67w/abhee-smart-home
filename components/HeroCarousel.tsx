"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    src: "/images/home/hero.jpg",
    alt: "A premium automated residence at night, lit with smart lighting",
  },
  {
    src: "/images/home/abhee-luxury-smart-villa-hero.png",
    alt: "A luxury smart villa with warm architectural lighting",
  },
  {
    src: "/images/home/abhee-integrated-smart-villa-golden-hour.jpg",
    alt: "An integrated smart villa at golden hour",
  },
] as const;

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const showNext = useCallback(() => {
    setActiveSlide((current) => (current + 1) % slides.length);
  }, []);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(showNext, 5000);
    return () => window.clearInterval(timer);
  }, [showNext]);

  return (
    <div
      className="absolute inset-0"
      aria-roledescription="carousel"
      aria-label="Featured smart homes"
    >
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== activeSlide}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/90" />

      <div className="absolute bottom-4 right-6 z-10 flex items-center gap-3 sm:bottom-12 md:bottom-14 md:right-10">
        <button
          type="button"
          onClick={showPrevious}
          className="hidden size-11 place-items-center rounded-full bg-[#d2d2d7]/60 text-[#1d1d1f] backdrop-blur-md transition-transform duration-150 hover:bg-white active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d1d1f] sm:grid"
          aria-label="Show previous image"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>

        <div className="flex gap-2" aria-label={`Image ${activeSlide + 1} of ${slides.length}`}>
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d1d1f] ${
                index === activeSlide ? "w-7 bg-[#0066cc]" : "w-1.5 bg-[#1d1d1f]/25 hover:bg-[#1d1d1f]/45"
              }`}
              aria-label={`Show image ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={showNext}
          className="hidden size-11 place-items-center rounded-full bg-[#d2d2d7]/60 text-[#1d1d1f] backdrop-blur-md transition-transform duration-150 hover:bg-white active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d1d1f] sm:grid"
          aria-label="Show next image"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

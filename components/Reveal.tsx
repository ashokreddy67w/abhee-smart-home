"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown
          ? "translate3d(0,0,0) scale(1)"
          : "translate3d(0,40px,0) scale(0.97)",
        transition: `
          opacity 900ms cubic-bezier(.22,1,.36,1) ${delay}ms,
          transform 900ms cubic-bezier(.22,1,.36,1) ${delay}ms
        `,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
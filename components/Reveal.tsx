"use client";

import { useEffect, useRef, useState } from "react";

type RevealState = "pending" | "hidden" | "shown";

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
  const [state, setState] = useState<RevealState>("pending");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setState("shown");
      return;
    }

    const revealOffset = Math.min(80, window.innerHeight * 0.1);
    const revealBoundary = window.innerHeight - revealOffset;
    const initialRect = el.getBoundingClientRect();

    // Content is visible in the server-rendered HTML. Only hide it after the
    // observer is attached and only when it is genuinely below the viewport.
    setState(initialRect.top <= revealBoundary ? "shown" : "hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        const passedViewport =
          entry.rootBounds !== null &&
          entry.boundingClientRect.top < entry.rootBounds.top;

        if (entry.isIntersecting || passedViewport) {
          setState("shown");
          observer.unobserve(el);
        }
      },
      {
        threshold: 0,
        rootMargin: `0px 0px -${revealOffset}px 0px`,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const hidden = state === "hidden";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden
          ? "translate3d(0,40px,0) scale(0.97)"
          : "translate3d(0,0,0) scale(1)",
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

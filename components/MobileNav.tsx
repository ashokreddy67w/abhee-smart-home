"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

const TRANSITION_MS = 380;
const EASING = "cubic-bezier(.22,1,.36,1)";

function isLinkActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileNav() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [canPortal, setCanPortal] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setCanPortal(true);
  }, []);

  function openMenu() {
    setMounted(true);
  }

  function closeMenu() {
    setOpen(false);
    triggerButtonRef.current?.focus();
    window.setTimeout(() => setMounted(false), TRANSITION_MS);
  }

  // Fade + slide in on the frame after mount so the transition actually plays
  useEffect(() => {
    if (!mounted) return;
    const raf = requestAnimationFrame(() => setOpen(true));
    return () => cancelAnimationFrame(raf);
  }, [mounted]);

  // Close instantly whenever the route changes (a link was followed)
  useEffect(() => {
    setOpen(false);
    setMounted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock body scroll while the menu is visible
  useEffect(() => {
    if (!mounted) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [mounted]);

  // ESC closes, Tab is trapped inside the panel
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Move focus into the panel as soon as it mounts
  useEffect(() => {
    if (mounted) closeButtonRef.current?.focus();
  }, [mounted]);

  const overlay = (
    <div
      ref={panelRef}
      id="mobile-nav-panel"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className={`fixed inset-0 z-[70] flex h-[100dvh] w-screen flex-col overflow-y-auto bg-white md:hidden ${
        open ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transition: `opacity ${TRANSITION_MS}ms ${EASING}, transform ${TRANSITION_MS}ms ${EASING}`,
        transform: open ? "translateY(0)" : "translateY(-16px)",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      <div className="flex items-center justify-between px-6 pt-6">
        <span className="font-mono text-[11px] tracking-[0.2em] text-[#5877BC]">MENU</span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={closeMenu}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center text-black/70 transition-colors hover:text-[#5877BC]"
        >
          <X size={26} />
        </button>
      </div>

      <nav className="mt-4 flex flex-col px-6" aria-label="Mobile">
        {NAV_LINKS.map((link) => {
          const active = isLinkActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-[44px] items-center justify-between border-b border-slate-100 py-5 text-[19px] transition-colors ${
                active ? "font-medium text-[#5877BC]" : "text-black/80 hover:text-[#5877BC]"
              }`}
            >
              {link.label}
              {active && <span className="h-1.5 w-1.5 rounded-full bg-[#5877BC]" aria-hidden="true" />}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-3 px-6 py-8">
        <a
          href={`tel:${SITE.phone}`}
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#5877BC] px-6 text-[13px] font-medium uppercase tracking-[0.14em] text-[#5877BC] transition hover:bg-[#5877BC] hover:text-white"
        >
          <span aria-hidden="true">📞</span> Call Now
        </a>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition hover:brightness-95"
        >
          <span aria-hidden="true">💬</span> WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#5877BC] px-6 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-[#3F5D84]"
        >
          <span aria-hidden="true">📅</span> Book Free Site Visit
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <button
        ref={triggerButtonRef}
        type="button"
        onClick={openMenu}
        aria-label="Open menu"
        aria-expanded={mounted}
        aria-controls="mobile-nav-panel"
        className="flex h-11 w-11 items-center justify-center text-black/70 transition-colors hover:text-[#5877BC] md:hidden"
      >
        <Menu size={26} />
      </button>

      {mounted && canPortal ? createPortal(overlay, document.body) : null}
    </>
  );
}

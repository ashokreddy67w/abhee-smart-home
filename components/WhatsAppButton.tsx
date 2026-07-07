"use client";

import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const TOOLTIP_SHOW_DELAY_MS = 5000;
const TOOLTIP_VISIBLE_DURATION_MS = 6000;

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowTooltip(true), TOOLTIP_SHOW_DELAY_MS);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!showTooltip) return;
    const hideTimer = setTimeout(() => setShowTooltip(false), TOOLTIP_VISIBLE_DURATION_MS);
    return () => clearTimeout(hideTimer);
  }, [showTooltip]);

  const href = getWhatsAppUrl();

  return (
    <div
      className="fixed z-[60] flex flex-col items-end gap-2"
      style={{
        bottom: "calc(1.25rem + env(safe-area-inset-bottom))",
        right: "calc(1.25rem + env(safe-area-inset-right))",
      }}
    >
      {showTooltip && (
        <div
          role="status"
          className="animate-whatsapp-tooltip max-w-[210px] rounded-lg bg-[#0F172A] px-4 py-2.5 text-[13px] leading-snug text-white shadow-lg"
        >
          Need help? Chat with us on WhatsApp
        </div>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform duration-300 ease-out hover:scale-110 active:scale-95"
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-pulse" />
        <WhatsAppIcon className="relative h-8 w-8 fill-white" />
      </a>
    </div>
  );
}

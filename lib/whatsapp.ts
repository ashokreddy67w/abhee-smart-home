import { SITE } from "@/lib/site-config";

const DEFAULT_WHATSAPP_MESSAGE =
  "Hi ABHEE Smart Home Systems, I would like to know more about your services.";

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  const phoneDigits = SITE.phone.replace(/\D/g, "");
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
}

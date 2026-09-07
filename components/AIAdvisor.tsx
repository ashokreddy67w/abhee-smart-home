"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import AdvisorIcon from "@/components/icons/AdvisorIcon";

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi, I'm the ABHEE Smart Home Advisor. Ask me about our smart home products, services or solutions and I'll point you in the right direction.",
};

const FALLBACK_REPLY =
  "Sorry, I'm having trouble connecting right now. Please try WhatsApp or the Contact page instead.";

export default function AIAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isOpen, isLoading]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const nextMessages = [...messages, { role: "user" as const, content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = (await res.json()) as { reply?: string };
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || FALLBACK_REPLY }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: FALLBACK_REPLY }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-[calc(20px+env(safe-area-inset-bottom))] left-[calc(16px+env(safe-area-inset-left))] z-[60] flex flex-col items-start gap-3 md:bottom-[calc(1.25rem+env(safe-area-inset-bottom))] md:left-[calc(1.25rem+env(safe-area-inset-left))]">
      {isOpen && (
        <div className="flex h-[70svh] w-[calc(100vw-32px)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:h-[520px] md:w-[380px]">
          <div className="flex items-center justify-between rounded-t-2xl bg-[#5877BC] px-4 py-3.5 text-white">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">ABHEE</p>
              <p className="text-[14px] font-medium">Smart Home Advisor</p>
            </div>
            <button
              type="button"
              aria-label="Close advisor chat"
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15"
            >
              ✕
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto rounded-br-sm bg-[#5877BC] text-white"
                    : "mr-auto rounded-bl-sm bg-slate-100 text-slate-800"
                }`}
              >
                {m.content}
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-slate-100 px-3.5 py-2.5 text-[13px] italic text-slate-400">
                ABHEE Advisor is typing…
              </div>
            )}
          </div>

          <div className="border-t border-slate-200 px-4 py-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-medium text-[#5877BC] transition-colors hover:text-[#3F5D84]"
            >
              Prefer WhatsApp? Chat with our team →
            </a>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-slate-200 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about products, services…"
              aria-label="Message the ABHEE Smart Home Advisor"
              className="min-h-[44px] flex-1 rounded-full border border-slate-300 px-4 text-[13px] text-slate-800 outline-none transition-colors focus:border-[#5877BC]"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5877BC] text-white transition-opacity disabled:opacity-40"
            >
              ↑
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close ABHEE Smart Home Advisor" : "Open ABHEE Smart Home Advisor"}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#5877BC] text-white shadow-[0_8px_24px_rgba(88,119,188,0.45)] transition-transform duration-300 ease-out hover:scale-110 active:scale-95 md:h-[62px] md:w-[62px]"
      >
        <AdvisorIcon className="h-7 w-7" />
      </button>
    </div>
  );
}

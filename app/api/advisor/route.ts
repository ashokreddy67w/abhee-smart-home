import { NextRequest, NextResponse } from "next/server";
import { ollamaChat, type ChatMessage } from "@/lib/ollama";
import { buildAdvisorSystemPrompt } from "@/lib/advisor-context";

export const runtime = "nodejs";

const MAX_HISTORY_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1000;

const FALLBACK_MESSAGE =
  "Sorry, the advisor is temporarily unavailable. Please reach us on WhatsApp or the Contact page instead.";

function isRawMessage(value: unknown): value is { role: unknown; content: unknown } {
  return typeof value === "object" && value !== null && "role" in value && "content" in value;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const rawMessages = (body as { messages?: unknown } | null)?.messages;
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    return NextResponse.json({ error: "messages is required" }, { status: 400 });
  }

  const cleaned: ChatMessage[] = rawMessages
    .filter(isRawMessage)
    .filter((m): m is { role: "user" | "assistant"; content: string } => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-MAX_HISTORY_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));

  if (cleaned.length === 0) {
    return NextResponse.json({ error: "No valid messages" }, { status: 400 });
  }

  const messages: ChatMessage[] = [{ role: "system", content: buildAdvisorSystemPrompt() }, ...cleaned];

  try {
    const reply = await ollamaChat(messages);
    return NextResponse.json({ reply: reply || FALLBACK_MESSAGE });
  } catch (err) {
    console.error("Advisor error:", err);
    return NextResponse.json({ reply: FALLBACK_MESSAGE }, { status: 502 });
  }
}

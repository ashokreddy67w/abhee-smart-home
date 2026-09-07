// Server-only. Never import this from a "use client" component —
// it reads OLLAMA_BASE_URL, which is intentionally not NEXT_PUBLIC_-prefixed
// so it is never bundled into client-side JavaScript.

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL ?? "http://localhost:11434";
const OLLAMA_ADVISOR_MODEL = process.env.OLLAMA_ADVISOR_MODEL ?? "llama3.2:3b";

export type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function ollamaChat(messages: ChatMessage[]): Promise<string> {
  const res = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: OLLAMA_ADVISOR_MODEL,
      messages,
      stream: false,
      options: { num_ctx: 4096, temperature: 0.4 },
    }),
  });

  if (!res.ok) {
    throw new Error(`Ollama request failed: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as { message?: { content?: string } };
  return data.message?.content?.trim() ?? "";
}

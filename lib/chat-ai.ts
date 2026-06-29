import type { ChatReply } from "@/lib/chat-responder";
import { chatKnowledge, siteFaqs } from "@/lib/chat-knowledge";

function buildSystemPrompt() {
  const services = chatKnowledge.find((entry) => entry.id === "services")?.answer;
  const process = chatKnowledge.find((entry) => entry.id === "process")?.answer;
  const contact = chatKnowledge.find((entry) => entry.id === "contact")?.answer;

  const faqBlock = siteFaqs
    .map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`)
    .join("\n\n");

  return `You are the Maid My Day website assistant — a premium home and relocation service in Addis Ababa, Ethiopia for expats, diplomats, and international professionals.

Answer ONLY using the facts below. Be warm, concise (under 100 words), and practical. If the question is outside this knowledge, say you don't have that detail and invite them to use the contact form (hello@maidmyday.com, +251 911 000 000).

Services: ${services}

How it works: ${process}

Contact: ${contact}

FAQ:
${faqBlock}`;
}

export async function getAIChatReply(message: string): Promise<ChatReply | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
        temperature: 0.4,
        max_tokens: 220,
        messages: [
          { role: "system", content: buildSystemPrompt() },
          { role: "user", content: message },
        ],
      }),
    });

    if (!response.ok) return null;

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content?.trim();

    if (!content) return null;

    const needsContact =
      /contact form|reach us|get in touch|don't have that detail|not sure/i.test(
        content,
      );

    return {
      message: content,
      actions: needsContact
        ? [{ type: "scroll", target: "contact", label: "Contact us" }]
        : undefined,
    };
  } catch {
    return null;
  }
}

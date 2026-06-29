import { getAIChatReply } from "@/lib/chat-ai";
import { getChatReply } from "@/lib/chat-responder";
import { defaultLocale, type Locale } from "@/lib/i18n";

const MAX_MESSAGE_LENGTH = 500;

function parseLocale(value: unknown): Locale {
  if (value === "en" || value === "am" || value === "om" || value === "so") {
    return value;
  }
  return defaultLocale;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const locale = parseLocale(body?.locale);

    if (!message) {
      return Response.json({ error: "Message is required." }, { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return Response.json(
        { error: `Message must be under ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 },
      );
    }

    const aiReply = await getAIChatReply(message);
    const reply = aiReply ?? getChatReply(message, locale);

    return Response.json(reply);
  } catch {
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

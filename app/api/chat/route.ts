import { getAIChatReply } from "@/lib/chat-ai";
import { getChatReply } from "@/lib/chat-responder";

const MAX_MESSAGE_LENGTH = 500;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body?.message === "string" ? body.message.trim() : "";

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
    const reply = aiReply ?? getChatReply(message);

    return Response.json(reply);
  } catch {
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CHAT_QUICK_PROMPTS,
  CHAT_WELCOME,
  type ChatAction,
} from "@/lib/chat-knowledge";
import { scrollToSection } from "@/lib/smooth-scroll";
import { cn } from "@/lib/utils";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  actions?: ChatAction[];
};

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [hasWelcomed, setHasWelcomed] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  useEffect(() => {
    if (open && !hasWelcomed) {
      setMessages([
        {
          id: createId(),
          role: "assistant",
          content: CHAT_WELCOME,
        },
      ]);
      setHasWelcomed(true);
    }
  }, [open, hasWelcomed]);

  useEffect(() => {
    if (open) {
      const timer = window.setTimeout(() => inputRef.current?.focus(), 120);
      return () => window.clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMessage: ChatMessage = {
      id: createId(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Request failed");
      }

      const assistantMessage: ChatMessage = {
        id: createId(),
        role: "assistant",
        content: data.message,
        actions: data.actions,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "assistant",
          content:
            "Sorry, I couldn't reach the server. Please try again or use the contact form.",
          actions: [{ type: "scroll", target: "contact", label: "Contact us" }],
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleAction = (action: ChatAction) => {
    if (action.type === "scroll") {
      setOpen(false);
      window.setTimeout(() => scrollToSection(action.target), 150);
    }
  };

  const showQuickPrompts =
    messages.length <= 1 && !isTyping && messages.every((m) => m.role === "assistant");

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] flex justify-end p-4 sm:p-5">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        {open && (
          <div
            ref={panelRef}
            id="chat-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Maid My Day chat assistant"
            className={cn(
              "section-surface flex w-[min(100vw-2rem,24rem)] flex-col overflow-hidden rounded-2xl",
              "h-[min(70dvh,32rem)] shadow-[0_16px_48px_rgba(28,28,28,0.14)]",
            )}
          >
            <header className="flex items-start justify-between gap-3 border-b border-ink/6 bg-primary/[0.04] px-4 py-3.5">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Sparkles size={16} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Maid My Day</p>
                  <p className="text-xs text-ink/55">Ask about our services</p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 text-ink/60 hover:bg-ink/5"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <X size={16} strokeWidth={1.75} />
              </Button>
            </header>

            <div
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
              aria-live="polite"
              aria-relevant="additions"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[0.875rem] leading-relaxed",
                      message.role === "user"
                        ? "rounded-br-md bg-primary text-white"
                        : "rounded-bl-md bg-white/90 text-ink/85 shadow-sm ring-1 ring-ink/6",
                    )}
                  >
                    <p className="whitespace-pre-line">{message.content}</p>
                    {message.actions && message.actions.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {message.actions.map((action) => (
                          <button
                            key={`${action.target}-${action.label}`}
                            type="button"
                            onClick={() => handleAction(action)}
                            className="rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start" aria-label="Assistant is typing">
                  <div className="rounded-2xl rounded-bl-md bg-white/90 px-3.5 py-3 shadow-sm ring-1 ring-ink/6">
                    <span className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/35 [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/35 [animation-delay:120ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/35 [animation-delay:240ms]" />
                    </span>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {showQuickPrompts && (
              <div className="border-t border-ink/6 px-4 py-3">
                <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-ink/45">
                  Quick questions
                </p>
                <div className="flex flex-wrap gap-2">
                  {CHAT_QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => sendMessage(prompt)}
                      className="rounded-full border border-ink/8 bg-white/80 px-3 py-1.5 text-left text-xs text-ink/75 transition-colors hover:border-primary/25 hover:bg-primary/[0.05] hover:text-ink"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form
              className="border-t border-ink/6 bg-white/70 p-3"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(input);
              }}
            >
              <div className="flex items-center gap-2">
                <label htmlFor="chat-input" className="sr-only">
                  Type your message
                </label>
                <input
                  ref={inputRef}
                  id="chat-input"
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask a question..."
                  maxLength={500}
                  disabled={isTyping}
                  className="h-10 flex-1 rounded-xl border border-ink/10 bg-white px-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-primary/35 focus:ring-2 focus:ring-primary/15"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isTyping}
                  className="h-10 w-10 shrink-0 rounded-xl"
                  aria-label="Send message"
                >
                  <Send size={16} strokeWidth={1.75} />
                </Button>
              </div>
            </form>
          </div>
        )}

        <Button
          type="button"
          size="icon"
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "h-14 w-14 rounded-full shadow-[0_8px_28px_rgba(43,95,75,0.35)] transition-transform hover:scale-105",
            open && "rotate-0",
          )}
          aria-expanded={open}
          aria-controls="chat-panel"
          aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        >
          {open ? (
            <X size={22} strokeWidth={1.75} />
          ) : (
            <MessageCircle size={22} strokeWidth={1.75} />
          )}
        </Button>
      </div>
    </div>
  );
}

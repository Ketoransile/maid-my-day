import type { FAQItem } from "@/types";

export const CHAT_WELCOME =
  "Hi! I'm the Maid My Day assistant. Ask about our services, how we work, or getting started in Addis Ababa.";

export const CHAT_QUICK_PROMPTS = [
  "What services do you offer?",
  "How does it work?",
  "Which areas do you serve?",
  "How fast can you help?",
  "Talk to the team",
] as const;

/** Shared FAQ — used by the FAQ section and chatbot */
export const siteFaqs: FAQItem[] = [
  {
    question: "How do you select your housemaids and staff?",
    answer:
      "Every candidate goes through a multi-stage process: an application review, in-person interview, reference checks, and a background verification. Only those who meet our standards are placed with clients.",
  },
  {
    question: "Can I meet the staff before committing?",
    answer:
      "Yes. We arrange an introduction meeting before any placement begins. You have full approval over who enters your home.",
  },
  {
    question: "What areas of Addis Ababa do you serve?",
    answer:
      "We serve all major residential areas in Addis Ababa, including Bole, Kazanchis, CMC, Old Airport, Sarbet, and surrounding neighborhoods.",
  },
  {
    question: "What if I'm not happy with my assigned staff?",
    answer:
      "We offer a replacement guarantee. If you're not satisfied, contact us and we'll find a better match at no additional cost.",
  },
  {
    question: "Do you offer relocation support for newly arrived expats?",
    answer:
      "Yes. We offer end-to-end relocation packages covering home search, move-in assistance, utility setup, and household staff placement.",
  },
  {
    question: "How quickly can services begin after I contact you?",
    answer:
      "In most cases, we can begin the matching process within 24 hours of your first inquiry and have staff placed within a few days.",
  },
];

export type ChatAction = {
  type: "scroll";
  target: string;
  label: string;
};

export type KnowledgeEntry = {
  id: string;
  keywords: string[];
  answer: string;
  actions?: ChatAction[];
};

export const chatKnowledge: KnowledgeEntry[] = [
  {
    id: "greeting",
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "help"],
    answer:
      "Hello! I can help with services, pricing questions, areas we cover, and how to get started. What would you like to know?",
  },
  {
    id: "services",
    keywords: [
      "service",
      "services",
      "offer",
      "provide",
      "housemaid",
      "maid",
      "maids",
      "cleaning",
      "cleaner",
      "laundry",
      "cooking",
      "driver",
      "drivers",
      "chauffeur",
      "pet",
      "pets",
      "dog",
      "cat",
      "relocation",
      "relocate",
      "housing",
      "apartment",
      "home management",
      "household",
      "what do you do",
      "nanny",
      "housekeeper",
    ],
    answer:
      "Maid My Day offers housing & relocation support, trained housemaids, professional drivers, pet care, and home management for expat families in Addis Ababa.",
    actions: [{ type: "scroll", target: "services", label: "View services" }],
  },
  {
    id: "process",
    keywords: [
      "how it works",
      "how does it work",
      "get started",
      "started",
      "process",
      "steps",
      "sign up",
    ],
    answer:
      "It's simple: tell us what you need, we match you with vetted staff suited to your home, and you settle in with ongoing support. Most inquiries get a reply within 24 hours.",
    actions: [{ type: "scroll", target: "how-it-works", label: "See the process" }],
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "phone",
      "call",
      "reach",
      "talk",
      "speak",
      "human",
      "agent",
      "quote",
      "book",
      "booking",
      "appointment",
      "enquire",
      "inquire",
      "message",
      "form",
    ],
    answer:
      "You can reach us at hello@maidmyday.com or +251 911 000 000. Use the contact form and we'll reply within 24 hours.",
    actions: [{ type: "scroll", target: "contact", label: "Open contact form" }],
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "fee", "rate", "how much", "charge"],
    answer:
      "Pricing depends on the service, schedule, and your household needs. Share a few details in our contact form and we'll send a tailored quote—no obligation.",
    actions: [{ type: "scroll", target: "contact", label: "Request a quote" }],
  },
  {
    id: "hours",
    keywords: ["hour", "open", "available", "response", "reply"],
    answer:
      "We're available Monday to Saturday. We aim to respond to new inquiries within 24 hours.",
  },
  {
    id: "about",
    keywords: [
      "who are you",
      "about",
      "company",
      "maid my day",
      "expat",
      "expats",
      "diplomat",
      "diplomats",
      "embassy",
      "international",
      "ngo",
      "professional",
      "family",
      "families",
    ],
    answer:
      "Maid My Day is a premium home and relocation service built for expats, diplomats, embassy staff, and international professionals settling in Addis Ababa.",
    actions: [{ type: "scroll", target: "why-us", label: "Why choose us" }],
  },
  ...siteFaqs.map((faq, index) => ({
    id: `faq-${index}`,
    keywords: [
      faq.question.toLowerCase().replace(/[?.,]/g, ""),
      ...faq.question
        .toLowerCase()
        .replace(/[?.,]/g, "")
        .split(/\s+/)
        .filter((word) => word.length > 3),
    ],
    answer: faq.answer,
  })),
];

export const CHAT_FALLBACK =
  "I'm not sure about that one. For anything specific to your home, our team can help directly—usually within 24 hours.";

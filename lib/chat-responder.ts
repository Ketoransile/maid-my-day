import {
  CHAT_FALLBACK,
  type ChatAction,
  type KnowledgeEntry,
  chatKnowledge,
  siteFaqs,
} from "@/lib/chat-knowledge";

export type ChatReply = {
  message: string;
  actions?: ChatAction[];
};

const STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "is",
  "are",
  "am",
  "was",
  "be",
  "been",
  "being",
  "do",
  "does",
  "did",
  "can",
  "could",
  "would",
  "should",
  "you",
  "your",
  "yours",
  "we",
  "our",
  "they",
  "their",
  "i",
  "me",
  "my",
  "mine",
  "to",
  "for",
  "of",
  "in",
  "on",
  "at",
  "by",
  "with",
  "from",
  "and",
  "or",
  "but",
  "if",
  "so",
  "as",
  "it",
  "its",
  "this",
  "that",
  "these",
  "those",
  "what",
  "which",
  "who",
  "whom",
  "how",
  "when",
  "where",
  "why",
  "please",
  "thanks",
  "thank",
  "tell",
  "about",
  "know",
  "want",
  "need",
  "looking",
  "get",
  "have",
  "any",
  "some",
]);

/** Maps casual phrasing to knowledge topics */
const SYNONYMS: Record<string, string[]> = {
  maid: ["housemaid", "cleaning", "cleaner", "housekeeper", "staff"],
  nanny: ["housemaid", "childcare", "babysit"],
  cook: ["housemaid", "cooking", "chef", "kitchen"],
  cleaner: ["housemaid", "cleaning", "maid"],
  driver: ["chauffeur", "transport", "school"],
  pet: ["dog", "cat", "vet", "animal"],
  dog: ["pet", "petcare"],
  cat: ["pet", "petcare"],
  move: ["relocation", "moving", "housing", "apartment"],
  moving: ["relocation", "housing"],
  apartment: ["housing", "relocation", "home"],
  house: ["housing", "home", "management"],
  home: ["housing", "management", "household"],
  expat: ["relocation", "diplomat", "international"],
  embassy: ["diplomat", "expat", "international"],
  diplomat: ["expat", "embassy"],
  bole: ["area", "location", "serve"],
  kazanchis: ["area", "location", "serve"],
  cmc: ["area", "location", "serve"],
  sarbet: ["area", "location", "serve"],
  hire: ["staff", "placement", "started"],
  replace: ["replacement", "unhappy", "staff"],
  interview: ["meet", "staff", "committing"],
  vet: ["select", "staff", "background"],
  background: ["select", "staff", "vet"],
  fast: ["quickly", "begin", "hours", "response"],
  quick: ["quickly", "begin", "hours"],
  cost: ["price", "pricing", "quote", "fee"],
  expensive: ["price", "pricing", "quote"],
  cheap: ["price", "pricing", "quote"],
};

function normalize(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ");
}

function tokenize(text: string): string[] {
  return normalize(text)
    .split(" ")
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
}

function expandTokens(tokens: string[]): Set<string> {
  const expanded = new Set(tokens);

  for (const token of tokens) {
    expanded.add(token);

    for (const [key, values] of Object.entries(SYNONYMS)) {
      if (token.includes(key) || key.includes(token)) {
        values.forEach((value) => expanded.add(value));
        expanded.add(key);
      }
    }
  }

  return expanded;
}

function getEntryCorpus(entry: KnowledgeEntry): Set<string> {
  const parts = [
    ...entry.keywords,
    ...tokenize(entry.answer),
    entry.id.replace(/faq-\d+/, ""),
  ];

  return expandTokens(parts.flatMap((part) => tokenize(part)));
}

function phraseScore(message: string, keywords: string[]) {
  const normalized = normalize(message);
  let score = 0;

  for (const keyword of keywords) {
    const term = keyword.toLowerCase().trim();
    if (!term) continue;
    if (normalized.includes(term)) {
      score += term.includes(" ") ? 8 : 4;
    }
  }

  return score;
}

function tokenOverlapScore(messageTokens: Set<string>, corpus: Set<string>) {
  let score = 0;

  for (const token of messageTokens) {
    if (corpus.has(token)) {
      score += 3;
      continue;
    }

    for (const term of corpus) {
      if (token.length >= 4 && term.length >= 4) {
        if (term.startsWith(token) || token.startsWith(term)) {
          score += 2;
        }
      }
    }
  }

  return score;
}

function scoreEntry(message: string, entry: KnowledgeEntry) {
  const messageTokens = expandTokens(tokenize(message));
  const corpus = getEntryCorpus(entry);

  const phrase = phraseScore(message, entry.keywords);
  const overlap = tokenOverlapScore(messageTokens, corpus);

  let score = phrase + overlap;

  if (entry.id === "greeting" && phrase < 4) {
    score *= 0.35;
  }

  return score;
}

function buildContextualFallback(message: string): ChatReply {
  const tokens = expandTokens(tokenize(message));
  const normalized = normalize(message);

  const areaHints = ["bole", "kazanchis", "cmc", "sarbet", "addis", "ethiopia", "airport"];
  if (areaHints.some((hint) => tokens.has(hint) || normalized.includes(hint))) {
    const areaFaq = siteFaqs.find((faq) =>
      faq.question.toLowerCase().includes("areas"),
    );
    if (areaFaq) {
      return {
        message: areaFaq.answer,
        actions: [{ type: "scroll", target: "contact", label: "Contact us" }],
      };
    }
  }

  if (
    tokens.has("custom") ||
    tokens.has("specific") ||
    normalized.includes("my situation") ||
    normalized.includes("unique")
  ) {
    return {
      message:
        "Every household is different. Tell us your schedule, location, and what you need in the contact form — we'll recommend a tailored setup and reply within 24 hours.",
      actions: [{ type: "scroll", target: "contact", label: "Share your needs" }],
    };
  }

  return {
    message: CHAT_FALLBACK,
    actions: [
      { type: "scroll", target: "faq", label: "Browse FAQ" },
      { type: "scroll", target: "contact", label: "Contact us" },
    ],
  };
}

function dedupeActions(actions: ChatAction[]) {
  const seen = new Set<string>();
  return actions.filter((action) => {
    const key = `${action.type}-${action.target}-${action.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function getChatReply(message: string): ChatReply {
  const trimmed = message.trim();
  if (!trimmed) {
    return { message: "Please type a question and I'll do my best to help." };
  }

  const ranked = chatKnowledge
    .map((entry) => ({ entry, score: scoreEntry(trimmed, entry) }))
    .sort((a, b) => b.score - a.score);

  const top = ranked[0];
  const second = ranked[1];

  if (!top || top.score < 2) {
    return buildContextualFallback(trimmed);
  }

  if (second && second.score >= 4 && second.score >= top.score * 0.65) {
    return {
      message: `${top.entry.answer}\n\n${second.entry.answer}`,
      actions: dedupeActions([
        ...(top.entry.actions ?? []),
        ...(second.entry.actions ?? []),
        { type: "scroll", target: "contact", label: "Contact us" },
      ]).slice(0, 3),
    };
  }

  return {
    message: top.entry.answer,
    actions: top.entry.actions,
  };
}

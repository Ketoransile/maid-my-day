import {
  type ChatAction,
  type KnowledgeEntry,
  chatKnowledge,
} from "@/lib/chat-knowledge";
import { defaultLocale, getTranslations, type Locale } from "@/lib/i18n";

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

function buildContextualFallback(message: string, locale: Locale = defaultLocale): ChatReply {
  const t = getTranslations(locale);
  const tokens = expandTokens(tokenize(message));
  const normalized = normalize(message);

  const areaHints = ["bole", "kazanchis", "cmc", "sarbet", "addis", "ethiopia", "airport"];
  if (areaHints.some((hint) => tokens.has(hint) || normalized.includes(hint))) {
    const areaFaq = t.faq.items.find((faq) =>
      faq.question.toLowerCase().includes("areas"),
    );
    if (areaFaq) {
      return {
        message: areaFaq.answer,
        actions: [{ type: "scroll", target: "contact", label: t.common.cta.contactUs }],
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
      message: t.chat.fallback,
      actions: [{ type: "scroll", target: "contact", label: t.common.cta.contactUs }],
    };
  }

  return {
    message: t.chat.fallback,
    actions: [
      { type: "scroll", target: "faq", label: t.common.cta.readFaqs },
      { type: "scroll", target: "contact", label: t.common.cta.contactUs },
    ],
  };
}

function localizedAnswer(entry: KnowledgeEntry, locale: Locale): string {
  const t = getTranslations(locale);
  const localized = t.chat.knowledge.find((k) => k.id === entry.id);
  return localized?.answer ?? entry.answer;
}

function localizedActions(
  actions: ChatAction[] | undefined,
  locale: Locale,
): ChatAction[] | undefined {
  if (!actions?.length) return actions;
  const t = getTranslations(locale);
  return actions.map((action) => {
    if (action.type !== "scroll") return action;
    const label =
      action.target === "contact"
        ? t.common.cta.contactUs
        : action.target === "faq"
          ? t.common.cta.readFaqs
          : action.target === "services"
            ? t.common.cta.ourServices
            : action.label;
    return { ...action, label };
  });
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

export function getChatReply(message: string, locale: Locale = defaultLocale): ChatReply {
  const t = getTranslations(locale);
  const trimmed = message.trim();
  if (!trimmed) {
    return { message: t.chat.welcome };
  }

  const ranked = chatKnowledge
    .map((entry) => ({ entry, score: scoreEntry(trimmed, entry) }))
    .sort((a, b) => b.score - a.score);

  const top = ranked[0];
  const second = ranked[1];

  if (!top || top.score < 2) {
    return buildContextualFallback(trimmed, locale);
  }

  if (second && second.score >= 4 && second.score >= top.score * 0.65) {
    return {
      message: `${localizedAnswer(top.entry, locale)}\n\n${localizedAnswer(second.entry, locale)}`,
      actions: dedupeActions([
        ...(localizedActions(top.entry.actions, locale) ?? []),
        ...(localizedActions(second.entry.actions, locale) ?? []),
        { type: "scroll", target: "contact", label: t.common.cta.contactUs },
      ]).slice(0, 3),
    };
  }

  return {
    message: localizedAnswer(top.entry, locale),
    actions: localizedActions(top.entry.actions, locale),
  };
}

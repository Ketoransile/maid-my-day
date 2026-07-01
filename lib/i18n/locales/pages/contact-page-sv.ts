import type { DeepPartial, Translations } from "../../types";

export const contactPageSv: DeepPartial<Translations>["contactPage"] = {
  afterContact: {
    eyebrow: "Vad händer sedan",
    title: "Efter att du skickat ett meddelande",
    description:
      "Ingen svart hål-inkorg. Så hanterar vi varje förfrågan från expathushåll i Addis Abeba.",
  },
  afterContactSteps: [
    {
      title: "Vi läser ditt meddelande",
      description: "En koordinator granskar ditt hushållsbehov — samma arbetsdagar som du.",
    },
    {
      title: "Vi svarar inom 24 timmar",
      description: "Ett personligt svar med nästa steg eller ett mötestid — inget automatsvar.",
    },
    {
      title: "Vi bygger din plan",
      description: "Kortlista, visningar eller ett snabbt introduktionsmöte beroende på dina behov.",
    },
    {
      title: "Vi finns kvar",
      description: "Efter placering har du ett team för justeringar, tillägg och feedback.",
    },
  ],
  office: {
    eyebrow: "Kontor & tillgänglighet",
    title: "Så når du oss",
    description:
      "Baserade i Addis Abeba, betjänar vi internationella hushåll i hela staden. Vi svarar på enkel engelska — och kan koordinera på amhariska eller franska vid behov.",
    labels: {
      officeHours: "Kontorstider",
      responseTime: "Svarstid",
      languages: "Språk",
      coverage: "Täckning",
    },
    hours: "Mån – lör, 8:30 | 18:00 (EAT)",
    response: "De flesta förfrågningar besvaras inom 24 timmar",
    languages: "Svenska och engelska — amhariska och franska vid behov",
    coverage: "Alla större bostadsområden i Addis Abeba",
  },
  prepTips: {
    eyebrow: "Innan du skriver",
    title: "Tips för ett snabbare och bättre svar",
    description:
      "Inkludera dessa uppgifter i ditt meddelande så kan vi ge ett mer användbart första svar.",
  },
  prepTipsItems: [
    { title: "Dela din tidsplan", detail: "Ankomstdatum, hyresstart eller brådskande personalbehov." },
    { title: "Beskriv ditt hushåll", detail: "Barn, husdjur, boende/icke-boende och språk." },
    { title: "Lista viktiga uppgifter", detail: "Skolskjuts, matlagning, städning, promenader med husdjur." },
    { title: "Nämn ditt område", detail: "Bole, Kazanchis, CMC — påverkar alternativ och placeringstid." },
  ],
};

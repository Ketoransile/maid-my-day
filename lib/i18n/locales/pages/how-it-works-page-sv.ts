import type { DeepPartial, Translations } from "../../types";

export const howItWorksPageSv: DeepPartial<Translations>["howItWorksPage"] = {
  detailedProcess: {
    eyebrow: "Steg för steg",
    title: "Din resa med Maid My Day",
    description:
      "Sju tydliga steg från första förfrågan till långsiktigt hushållsstöd — med realistiska tidslinjer så du vet vad du kan förvänta dig.",
  },
  detailedProcessSteps: [
    {
      step: "01",
      title: "Dela dina behov",
      description:
        "Berätta om ditt hushåll — vem som bor där, var i Addis Abeba (eller när du anländer) och vilken hjälp du behöver.",
      duration: "Dag 1",
    },
    {
      step: "02",
      title: "Behovsanalys",
      description:
        "Vi klargör schema, språk, boende-/icke-boende-preferenser och särskilda krav (husdjur, barn, matlagning, säkerhet).",
      duration: "Dag 1–2",
    },
    {
      step: "03",
      title: "Kortlista",
      description:
        "Vårt team granskar granskad personal och skickar en kortlista inom 24–48 timmar.",
      duration: "Dag 2–3",
    },
    {
      step: "04",
      title: "Möte",
      description:
        "Personligt eller via video. Vi rekommenderar att du ställer frågor och bedömer kemin.",
      duration: "Dag 3–5",
    },
    {
      step: "05",
      title: "Provperiod och start",
      description:
        "En kort provperiod bekräftar att matchningen fungerar. Därefter slutför vi avtal och startdatum.",
      duration: "Vecka 1",
    },
    {
      step: "06",
      title: "Etableringsstöd",
      description:
        "Under de första veckorna säkerställer vi att scheman fungerar, kommunikationen är tydlig och justeringar görs snabbt.",
      duration: "Vecka 2–4",
    },
    {
      step: "07",
      title: "Löpande partnerskap",
      description:
        "Ersättning, extra personal, flyttförbättringar och hemadministration — din kontakt finns kvar.",
      duration: "Löpande",
    },
  ],
  first30Days: {
    eyebrow: "De första 30 dagarna",
    title: "Så kan din första månad se ut",
    description:
      "En typisk tidslinje för familjer som anländer till Addis eller lägger till ny personal i ett befintligt hushåll.",
    phases: [
      {
        week: "Vecka 1",
        title: "Ankomst och kontakt",
        items: [
          "Skicka din förfrågan eller boka ett första samtal",
          "Ta emot din kortlista och boka möten",
          "Vid flytt: första bostadsvisningar",
        ],
      },
      {
        week: "Vecka 2",
        title: "Matchning och placering",
        items: [
          "Slutför provperiod för hemtjänst eller chaufför",
          "Vid flytt: slutför hyra och inflyttning",
          "Sätt upp hushålls- och personalscheman",
        ],
      },
      {
        week: "Vecka 3–4",
        title: "Etablering och finjustering",
        items: [
          "Uppföljningsmöte med din Maid My Day-koordinator",
          "Justera schema eller arbetsuppgifter",
          "Lägg till djurvård eller hemadministration vid behov",
        ],
      },
    ],
  },
  prepare: {
    eyebrow: "Innan du hör av dig",
    title: "Ha detta redo",
    description:
      "Ju mer kontext du delar i förväg, desto snabbare kan vi matcha dig med rätt personal eller flyttplan.",
  },
  preparationChecklist: [
    "Ditt ankomstdatum eller nuvarande område i Addis Abeba",
    "Hushållsstorlek och om barn eller husdjur finns",
    "Önskat schema (heltid, deltid, boende/icke-boende)",
    "Språkpreferens för kommunikation med personal",
    "Särskilda uppgifter: matlagning, städning, chaufförsrutter, skolskjuts",
    "Budget och tidsplan — brådskande eller flexibel",
  ],
  processFaq: {
    eyebrow: "Vanliga frågor",
    title: "Snabba svar om att komma igång",
    description: "Det kunder oftast frågar innan det första introduktionsmötet.",
  },
  processFaqItems: [
    {
      question: "Hur snabbt kan ni placera personal?",
      answer:
        "De flesta förfrågningar får en kortlista inom 24–48 timmar. Brådskande placeringar prioriteras — många familjer har personal inom några dagar.",
    },
    {
      question: "Vad om den första matchningen inte fungerar?",
      answer:
        "Vi erbjuder ersättningsgaranti. Berätta vad som inte passade så hittar vi ett bättre alternativ utan extra startavgift.",
    },
    {
      question: "Måste jag kontakta er innan jag anländer?",
      answer:
        "Nej. Många kunder hör av sig före ankomst så vi kan börja bostadssökning och personal i förväg.",
    },
  ],
};

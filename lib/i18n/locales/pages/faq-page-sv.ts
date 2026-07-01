import type { DeepPartial, Translations } from "../../types";

export const faqPageSv: DeepPartial<Translations>["faqPage"] = {
  moreAnswers: {
    eyebrow: "Fler svar",
    title: "Bläddra efter ämne",
    description:
      "Ytterligare frågor våra kunder ställer före och efter placering — om avtal, fakturering, flytttider och löpande stöd.",
  },
  extendedFaqs: [
    {
      category: "Komma igång",
      items: [
        {
          question: "Finns det minimikontrakt för personal?",
          answer:
            "Det beror på roll och schema. Många kunder provar en till två veckor och går sedan vidare med månadsavtal. Vi förklarar alternativen tydligt i förväg.",
        },
        {
          question: "Kan jag anställa tillfälligt?",
          answer: "Ja. Familjer på besök, mellan uppdrag eller vid tillfälliga behov — vi anpassar oss.",
        },
        {
          question: "Hjälper ni med anställningsdokument?",
          answer:
            "Vi vägleder enligt lokala arbetsregler och kan koordinera med din juridiska eller HR-avdelning. Dokumentation beror på personalens status och ditt visum.",
        },
      ],
    },
    {
      category: "Personal & screening",
      items: [
        {
          question: "Får hemtjänsten utbildning?",
          answer:
            "De utbildas i städning, tvätt, kökshygien och kommunikation. Du kan begära extra utbildning under provperioden.",
        },
        {
          question: "Känner chaufförerna vägarna till internationella skolor?",
          answer: "Ja. De kör regelbundet till större skolor i Bole, Old Airport och CMC.",
        },
        {
          question: "Kan jag begära personal som talar engelska?",
          answer: "Ja. Språkpreferens ingår i vår behovsanalys.",
        },
      ],
    },
    {
      category: "Priser & fakturering",
      items: [
        {
          question: "Hur sätts priserna?",
          answer:
            "Lönen förhandlas mellan dig och personalen. Maid My Day tar en startavgift och serviceavgift för matchning och koordinering. Vi ger tydlig prissättning efter din förfrågan.",
        },
        {
          question: "Finns dolda avgifter?",
          answer: "Nej. Startavgift, flyttpaket och tillägg förklaras i förväg. Ersättning innebär ingen ny startavgift.",
        },
        {
          question: "Kan ni fakturera organisation eller ambassad?",
          answer: "Vi kan ordna fakturering via institutioner. Berätta om ditt organisations behov.",
        },
      ],
    },
    {
      category: "Flytt",
      items: [
        {
          question: "Hur långt i förväg bör jag kontakta er inför flytt?",
          answer:
            "För fullständiga paket helst fyra till sex veckor. Endast personalplacering kan starta inom 24 timmar.",
        },
        {
          question: "Jag bor redan i Addis Abeba men är inte nöjd med nuvarande personal?",
          answer: "Ja. Vi erbjuder ersättning och förbättring snabbt.",
        },
        {
          question: "Hjälper ni med möbler och utrustning?",
          answer: "Vi vägleder och kopplar till leverantörer. Vid premium-paket kan vi koordinera inköp.",
        },
      ],
    },
    {
      category: "Löpande stöd",
      items: [
        {
          question: "Vad om schemat ändras efter placering?",
          answer: "Kontakta din Maid My Day-koordinator. Vi justerar tider, uppgifter eller extra personal.",
        },
        {
          question: "Kan ni täcka semester eller ledighet?",
          answer: "Med tillräcklig förvarning kan vi ordna vikarie. Tillgänglighet beror på säsong och roll.",
        },
        {
          question: "Hur ger jag feedback om personalens prestation?",
          answer: "Via din dedikerade kontakt per telefon eller e-post. Vi arbetar konstruktivt för att lösa problem.",
        },
      ],
    },
  ],
  stillWondering: {
    title: "Frågor vi ofta hör vid första samtalet",
    items: [
      "Kan ni hjälpa om jag bara behöver chaufför?",
      "När kan de börja om jag anländer nästa månad?",
      "Följer ni ambassadens hushållsregler?",
      "Talar personalen engelska med våra barn?",
      "Vad om våra behov ändras efter placering?",
    ],
  },
};

import type { DeepPartial, Translations } from "../../types";

/** Swedish translations for shared homepage / inner-page chrome sections */
export const coreSectionsSv: Pick<
  DeepPartial<Translations>,
  | "testimonials"
  | "mission"
  | "faq"
  | "contact"
  | "pageHero"
  | "pageCta"
> = {
  testimonials: {
    eyebrow: "Kundberättelser",
    title: "Vad våra kunder säger",
    description:
      "Verkliga upplevelser från expats och familjer vi hjälpt att etablera sig i Addis Abeba.",
    items: [
      {
        name: "James Holloway",
        role: "FN-konsult, Addis Abeba",
        quote:
          "Att hitta hemtjänst i en ny stad kändes omöjligt. Maid My Day hade någon på plats inom några dagar. En enorm lättnad.",
      },
      {
        name: "Sophie Renard",
        role: "Ambassadanställd, franska ambassaden",
        quote:
          "Vår chaufför har varit hos oss i två år. Punktlig, säker och vänlig. Precis vad vi behövde för skolskjuts.",
      },
      {
        name: "Marcus Webb",
        role: "NGO-direktör, flyttade 2023",
        quote:
          "Flytthjälpen var smidig. De hjälpte oss hitta lägenhet, ordna el och vatten samt djurvård för vår hund.",
      },
      {
        name: "Elena Vasquez",
        role: "Diplomatisk attaché, EU-delegationen",
        quote:
          "De förstod vårt hushåll redan från första samtalet. Hemtjänsten de skickade är diskret, noggrann och fortfarande hos oss.",
      },
      {
        name: "David Okonkwo",
        role: "Företagsexpat, Bole",
        quote:
          "Vi behövde chaufför och hemadministration med kort varsel. Maid My Day levererade inom en vecka. Kunde inte önska mer.",
      },
      {
        name: "Amara Chen",
        role: "Forskarstipendiat, flyttade 2024",
        quote:
          "Jag kom ensam till Addis och kände mig överväldigad. De gjorde den första månaden hanterbar. Varmt och rakt på sak.",
      },
    ],
  },
  mission: {
    eyebrow: "Vårt uppdrag",
    title: "Göra livet enklare för expatfamiljer i Addis Abeba",
    description:
      "Att göra livet i Addis Abeba enklare, renare och mer bekvämt genom pålitlig hemtjänst och flytthjälp.",
    body: "Maid My Day finns för att ta bort stressen vid etablering. Vi stödjer expats, diplomater, ambassadanställda och internationella yrkesutövare i varje steg.",
    mainImageAlt: "Bekvämt hem i Addis Abeba",
    serviceOrbits: [
      { id: "housing", label: "Boende", alt: "Boende- och flytthjälp" },
      { id: "housemaids", label: "Hemtjänst", alt: "Utbildad hemtjänst" },
      { id: "drivers", label: "Chaufförer", alt: "Professionella chaufförer" },
      { id: "petCare", label: "Djurvård", alt: "Djurvårdstjänster" },
      { id: "homeManagement", label: "Hemadmin.", alt: "Hemadministration" },
    ],
    pillars: [
      {
        title: "Hitta ditt hem",
        detail: "Flytthjälp för att etablera dig i rätt område och bostad.",
      },
      {
        title: "Anlita pålitlig personal",
        detail: "Noggrant utvald hemtjänst, chaufförer och hushållshjälp du kan lita på.",
      },
      {
        title: "Håll ordning",
        detail: "Daglig hemadministration så att din vardag flyter smidigt i Addis Abeba.",
      },
    ],
  },
  faq: {
    eyebrow: "Vanliga frågor",
    title: "Vanliga frågor",
    description: "Raka svar om hur vi arbetar. Ingen jargong.",
    items: [
      {
        question: "Hur väljer ni hemtjänst och hushållspersonal?",
        answer:
          "Varje kandidat går igenom en flerstegsprocess: ansökningsgranskning, personlig intervju, referenskontroll och bakgrundskontroll. Vi matchar endast kandidater som uppfyller våra standarder med kunder.",
      },
      {
        question: "Kan jag träffa personalen innan jag bestämmer mig?",
        answer:
          "Ja. Vi ordnar alltid ett möte innan någon börjar. Du har full kontroll över vem som kommer in i ditt hem.",
      },
      {
        question: "Vilka områden i Addis Abeba täcker ni?",
        answer:
          "Vi betjänar Bole, Kazanchis, CMC, Old Airport, Sarbet och andra större bostadsområden i Addis Abeba.",
      },
      {
        question: "Vad händer om den tilldelade personalen inte passar?",
        answer:
          "Vi erbjuder ersättningsgaranti. Berätta vad som inte fungerade så hittar vi ett bättre alternativ utan extra startavgift.",
      },
      {
        question: "Hjälper ni nya expats med flytt?",
        answer:
          "Ja. Vi har kompletta flyttpaket — bostadssökning, etableringshjälp, el och vatten samt personal på plats.",
      },
      {
        question: "Hur snabbt kan tjänsterna starta efter kontakt?",
        answer:
          "Vi svarar oftast inom 24 timmar på första förfrågan och kan ha personal på plats inom några dagar.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakta oss",
    title: "Maid My Day Hem & Flytt",
    description:
      "Berätta vad du behöver så återkommer vi inom 24 timmar. Ingen press, inget åtagande.",
    availabilityNote: "Mån–lör. De flesta svar kommer inom 24 timmar.",
    infoLabels: { phone: "Telefon", email: "E-post", location: "Plats" },
    form: {
      heading: "Skicka ett meddelande",
      fields: {
        fullName: "Fullständigt namn",
        email: "E-post",
        phone: "Telefon",
        services: "Vad behöver du?",
        message: "Ditt meddelande",
      },
      placeholders: {
        name: "Ditt namn",
        email: "du@epost.se",
        phone: "+251 ...",
        message: "Några rader om ditt hem, tidsplan och vad som skulle hjälpa.",
      },
      servicePicker: {
        placeholder: "Välj en tjänst",
        ariaAvailable: "Tillgängliga tjänster",
        ariaSelected: "Valda tjänster",
        allSelected: "Alla tjänster valda",
        removeAria: "Ta bort {label}",
      },
      serviceOptions: [
        { value: "relocation", label: "Boende & flytthjälp" },
        { value: "housemaid", label: "Utbildad hemtjänst" },
        { value: "driver", label: "Professionella chaufförer" },
        { value: "pet-care", label: "Djurvård" },
        { value: "management", label: "Hemadministration" },
        { value: "other", label: "Något annat" },
      ],
      submit: "Skicka meddelande",
      submitting: "Skickar...",
      errors: { selectService: "Välj minst en tjänst." },
      toasts: {
        selectService: {
          title: "Välj minst en tjänst",
          description: "Välj de tjänster du behöver innan du skickar meddelandet.",
        },
        success: {
          title: "Meddelandet skickades",
          description: "Vi har tagit emot din förfrågan och svarar inom 24 timmar.",
        },
        error: {
          title: "Meddelandet kunde inte skickas",
          description: "Något gick fel. Försök igen om en stund.",
        },
      },
    },
  },
  pageHero: {
    services: {
      eyebrow: "Våra tjänster",
      title: "Premium hemtjänst och flytthjälp i Addis Abeba",
      description:
        "Från att hitta lägenhet till pålitlig hemtjänst, chaufförer och djurvård — Maid My Day gör hemmet bekvämt.",
    },
    howItWorks: {
      eyebrow: "Så fungerar det",
      title: "Från första samtalet till ett etablerat hem",
      description:
        "En enkel process med internationella standarder. Tydliga steg, granskad personal och stöd efter placering.",
    },
    whyUs: {
      eyebrow: "Varför Maid My Day",
      title: "Internationell expertis som förtroende bygger på",
      description:
        "Vi känner diplomater, ambassadanställda och expatfamiljer i Addis Abeba — och levererar hemtjänst som fungerar i vardagen.",
    },
    faq: {
      eyebrow: "Hjälpcenter",
      title: "Svar innan du bestämmer dig",
      description:
        "Om screening, placering, paket, priser och löpande stöd — på enkelt språk.",
    },
    contact: {
      eyebrow: "Kontakta oss",
      title: "Berätta vad ditt hem behöver",
      description:
        "Oavsett om du behöver hjälp nästa vecka eller den här veckan ger vårt team nästa steg inom 24 timmar.",
    },
  },
  pageCta: {
    services: {
      title: "Redo att bygga ditt hushållsteam?",
      description:
        "Berätta vad du behöver — flytt, hemtjänst, chaufför eller full administration — så skisserar vi en plan inom 24 timmar.",
      secondaryLabel: "Så fungerar det",
    },
    howItWorks: {
      title: "Låt oss börja med ett samtal",
      description: "Inget långt formulär. Berätta kort om ditt hem så tar vi det därifrån.",
      secondaryLabel: "Varför välja oss",
    },
    whyUs: {
      title: "Se skillnaden pålitlig hjälp gör",
      description:
        "Många expatfamiljer litar på Maid My Day för professionell hemtjänst i Addis Abeba.",
      secondaryLabel: "Läs vanliga frågor",
    },
    faq: {
      title: "Har du fler frågor?",
      description:
        "Vårt team går gärna igenom din situation — hushållets storlek, tidsplan och budget.",
      secondaryLabel: "Våra tjänster",
    },
    contact: {
      title: "Vill du prata om dina behov?",
      description:
        "Ring +251 911 000 000 eller mejla hello@maidmyday.com. Vi finns mån–lör.",
      primaryLabel: "Ring oss",
      secondaryLabel: "Se tjänster",
    },
  },
};

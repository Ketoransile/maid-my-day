import type { DeepPartial, Translations } from "../types";
import { navSubmenusSv } from "../nav-submenus";
import { servicesPageSv } from "./pages/services-page-sv";
import { coreSectionsSv } from "./pages/core-sections-sv";
import { howItWorksPageSv } from "./pages/how-it-works-page-sv";
import { whyUsPageSv } from "./pages/why-us-page-sv";
import { faqPageSv } from "./pages/faq-page-sv";
import { contactPageSv } from "./pages/contact-page-sv";

/** Swedish translations */
export const svOverrides: DeepPartial<Translations> = {
  nav: {
    home: "Hem",
    services: "Tjänster",
    howItWorks: "Så fungerar det",
    whyUs: "Varför vi",
    faq: "Vanliga frågor",
    contact: "Kontakt",
    contactUs: "Kontakta oss",
    openMenu: "Öppna meny",
    allLinks: "Alla länkar",
    language: "Språk",
    submenu: navSubmenusSv,
    extended: {
      about: "Om Maid My Day",
      careers: "Karriär",
      partners: "Samarbeta med oss",
      resources: "Resurser",
      blog: "Blogg",
      press: "Press",
    },
    compact: {
      home: "Hem",
      services: "Tjänster",
      howItWorks: "Process",
      whyUs: "Varför vi",
      faq: "Frågor",
      contact: "Kontakt",
      contactUs: "Kontakta",
    },
  },
  hero: {
    eyebrow: "Maid My Day Hem & Flytt",
    title: "Etablera dig i Addis Abeba utan stress",
    lead: "Pålitlig hemtjänst, chaufförer, djurvård och flytthjälp för expats och internationella yrkesutövare.",
    contactUs: "Kontakta oss",
    ourServices: "Våra tjänster",
    scrollHint: "Scrolla till nästa avsnitt",
  },
  common: {
    brandName: "Maid My Day",
    brandTagline: "Maid My Day Hem & Flytt",
    location: "Addis Abeba, Etiopien",
    phone: "+251 911 000 000",
    email: "hello@maidmyday.com",
    copyright: "© {year} Maid My Day Hem & Flytt. Alla rättigheter förbehållna.",
    whatsIncluded: "Vad som ingår",
    idealFor: "Ideal för",
    ourPromise: "Vårt löfte",
    promiseQuote:
      "Vi skickar ingen in i ditt hem förrän vi skulle skicka dem in i vårt eget. Den standarden har hållit familjer hos oss i åratal.",
    promiseAttribution: "— Maid My Days placeringsteam, Addis Abeba",
    cta: {
      contactUs: "Kontakta oss",
      viewServices: "Se tjänster",
      getStarted: "Kom igång",
      exploreAllServices: "Utforska alla tjänster",
      callUs: "Ring oss",
      howItWorks: "Så fungerar det",
      whyChooseUs: "Varför välja oss",
      readFaqs: "Läs vanliga frågor",
      ourServices: "Våra tjänster",
    },
  },
  trustBar: {
    items: [
      { label: "Noggrant granskad personal" },
      { label: "5,0 i genomsnittligt betyg" },
      { label: "24-timmars svarsgaranti" },
      { label: "500+ familjer betjänade" },
    ],
  },
  services: {
    eyebrow: "Våra tjänster",
    title: "Allt ditt hem behöver i Addis Abeba",
    description: "Professionell hushålls- och flytthjälp för expatfamiljer.",
    items: [
      {
        id: "housing",
        title: "Boende & flytt",
        description: "Hitta och etablera dig i ditt nya hem med professionell flytthjälp.",
        imageAlt: "Nycklar till ett nytt hem vid flytt",
      },
      {
        id: "housemaids",
        title: "Utbildad hemtjänst",
        description: "Pålitlig personal för städning, tvätt, matlagning och daglig hushållsvård.",
        imageAlt: "Professionell hemtjänst som sköter ett hem",
      },
      {
        id: "drivers",
        title: "Professionella chaufförer",
        description: "Säkra, pålitliga chaufförer för personlig och familjetransport.",
        imageAlt: "Professionell chaufför med passagerare i bilen",
      },
      {
        id: "petCare",
        title: "Djurvård",
        description: "Pålitlig vård för dina husdjur när du arbetar eller reser.",
        imageAlt: "Veterinärer som vårdar ett husdjur",
      },
      {
        id: "homeManagement",
        title: "Hemadministration",
        description: "Fullständigt stöd för att hålla ditt hem igång smidigt.",
        imageAlt: "Välorganiserat modernt hushåll",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Processen",
    title: "Att komma igång är enkelt",
    steps: [
      {
        number: "01",
        title: "Berätta vad du behöver",
        description:
          "Fyll i vårt snabba kontaktformulär eller ring oss. Vi svarar inom 24 timmar.",
      },
      {
        number: "02",
        title: "Vi matchar dig med rätt team",
        description:
          "Vi väljer noggrant och presenterar personal som passar ditt hem, schema och preferenser.",
      },
      {
        number: "03",
        title: "Etablera dig med trygghet",
        description:
          "Ditt hushåll sköts, din familj tas om hand och ditt hem fungerar som en klocka.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Varför Maid My Day?",
    title: "Pålitligt stöd för expathushåll",
    description:
      "Vi vet vad som krävs för att etablera sig i en ny stad. Maid My Day levererar professionell, pålitlig hemtjänst och flytthjälp till familjer som behöver det mest.",
    trustPoints: [
      { title: "Noggrant utvald personal", detail: "Varje hemtjänst, chaufför och hjälpare granskas och intervjuas före placering." },
      { title: "Professionella standarder", detail: "Konsekvent utbildning och tydliga förväntningar för hela ditt hushållsteam." },
      { title: "Pålitlig och trygg service", detail: "Stöd du kan lita på vecka efter vecka." },
      { title: "Expatanpassat stöd", detail: "Byggt för diplomater, ambassadanställda och internationella yrkesutövare nya i Addis Abeba." },
      { title: "Personlig assistans", detail: "Tjänster anpassade till ditt hem, schema och familjens behov." },
    ],
    imageAlt: "Glad familj i sitt hem i Addis Abeba",
    stats: { families: "Familjer", rating: "Betyg", years: "År" },
  },
  ...coreSectionsSv,
  footer: {
    tagline: "Maid My Day Hem & Flytt",
    subtitle: "Premium hemtjänst och flytthjälp i Addis Abeba",
    quickLinksHeading: "Snabblänkar",
    contactHeading: "Kontakta oss",
  },
  homePage: {
    intro: {
      eyebrow: "Välkommen till Addis Abeba",
      title: "Din hushållspartner från dag ett",
      lead: "Maid My Day är byggt för expatfamiljer, diplomater och internationella yrkesutövare — inte bara en kontaktlista utan ett team som förstår livet i Addis Abeba.",
      paragraphs: [
        "När du flyttar till Etiopiens huvudstad möter du nya områden, nya system och nya människor i ditt hem. Oavsett om du etablerar dig i Bole eller Kazanchis hjälper vi dig hitta rätt bostad, anlita pålitlig hemtjänst, få en chaufför som kan skolvägarna och få vardagen att fungera.",
        "Till skillnad från generiska bemanningsplattformar fokuserar vi på internationella hushåll. Det innebär engelskspråkig koordinering, tydliga tidslinjer, möten före placering och ersättningsgaranti om matchningen inte fungerar.",
        "Oavsett om du behöver hjälp om sex veckor eller i slutet av veckan ger våra koordinatorer nästa steg inom 24 timmar — utan press, utan dolda åtaganden.",
      ],
    },
    quickFacts: [
      { label: "Familjer stödda", value: "500+" },
      { label: "Genomsnittlig svarstid", value: "24 timmar" },
      { label: "Områden täckta", value: "12+" },
      { label: "Kundbetyg", value: "5,0" },
    ],
    packages: {
      eyebrow: "Paket",
      title: "Flyttalternativ för varje skede",
      description:
        "Flexibla alternativ oavsett om du landar nästa vecka eller uppgraderar ett etablerat hem.",
    },
    expectations: {
      eyebrow: "Vad du kan förvänta dig",
      title: "Så arbetar vi med internationella hushåll",
      description:
        "Tydliga standarder, ärliga tidslinjer och stöd som fortsätter efter placering.",
    },
    expectationsItems: [
      {
        title: "Granskad innan matchning",
        detail:
          "Varje hemtjänst, chaufför och hjälpare genomgår intervju, referenskontroll och bakgrundskontroll i förväg.",
      },
      {
        title: "Du godkänner varje placering",
        detail:
          "Ingen börjar utan ett personligt eller videomöte. Din trygghet och ditt godkännande kommer först.",
      },
      {
        title: "Stöd efter dag ett",
        detail:
          "Schemaändringar, ersättning och tilläggstjänster — din koordinator finns kvar när hemmet utvecklas.",
      },
      {
        title: "Lokalkännedom inbyggd",
        detail:
          "Områden, trafik, hyresregler och pålitliga leverantörer — år av Addis Abeba-erfarenhet i varje placering.",
      },
    ],
    neighborhoods: {
      eyebrow: "Livet i Addis",
      title: "Områden vi känner bäst",
      description:
        "Lokalkännedom spelar roll när du är ny i staden. Vi placerar personal och stödjer flyttar i Addis Abebas mest populära expatområden.",
    },
    neighborhoodItems: [
      {
        name: "Bole",
        detail:
          "Populärt bland företagsexpats och ambassadfamiljer. Nära Bole-flygplatsen, internationella skolor och restauranger.",
      },
      {
        name: "Kazanchis",
        detail:
          "Centralt nära FN och diplomatiska missioner. Idealiskt för yrkesutövare med korta pendlingar.",
      },
      {
        name: "CMC & Megenagna",
        detail:
          "Växande bostadsområden som NGO-familjer uppskattar för utrymme och säkerhet.",
      },
      {
        name: "Old Airport & Sarbet",
        detail:
          "Etablerade områden med villor och bra skolor. Favorit bland långsiktiga diplomatuppdrag.",
      },
    ],
    relocationPackages: [
      {
        title: "Ankomstgrund",
        description:
          "Du har redan bostad men behöver pålitlig personal snabbt efter ankomst.",
        items: [
          "Hemtjänst- eller chaufförsplacering inom några dagar",
          "Möte och provperiod",
          "Uppföljningssamtal under den första veckan",
        ],
      },
      {
        title: "Full flytt",
        description:
          "Vårt mest populära paket för familjer och diplomater som anländer till Addis Abeba för första gången.",
        items: [
          "Områdesresearch och bostadslista",
          "Inflyttningsstöd och ordning av el och vatten",
          "Personalplacering: hemtjänst, chaufför eller båda",
          "Etableringsstöd under 30 dagar",
        ],
      },
      {
        title: "Hem Plus",
        description:
          "För etablerade invånare som vill ha löpande hemadministration och personalkoordinering.",
        items: [
          "Dedikerad hemkoordinator",
          "Schemaläggning och uppföljning av flera anställda",
          "Leverantörs- och underhållskoordinering",
          "Kvartalsvis hemgenomgång",
        ],
      },
    ],
  },
  servicesPage: servicesPageSv,
  howItWorksPage: howItWorksPageSv,
  whyUsPage: whyUsPageSv,
  faqPage: faqPageSv,
  contactPage: contactPageSv,
  chat: {
    welcome:
      "Hej! Jag är Maid My Days assistent. Fråga om våra tjänster, hur vi arbetar eller hur du kommer igång i Addis Abeba.",
    fallback:
      "Det är jag inte säker på. För frågor om ditt specifika hushåll kan vårt team hjälpa — oftast inom 24 timmar.",
    quickPrompts: [
      "Vilka tjänster erbjuder ni?",
      "Hur fungerar processen?",
      "Vilka områden täcker ni?",
      "Hur snabbt kan ni hjälpa?",
      "Prata med teamet",
    ],
    ui: {
      subtitle: "Fråga om våra tjänster",
      quickQuestionsLabel: "Snabbfrågor",
      inputPlaceholder: "Ställ en fråga...",
      inputLabel: "Skriv ditt meddelande",
      panelAriaLabel: "Maid My Day chattassistent",
      closeLabel: "Stäng chatt",
      openLabel: "Öppna chattassistent",
      sendLabel: "Skicka meddelande",
      typingLabel: "Assistenten skriver",
    },
  },
  social: {
    openLabel: "Öppna sociala medier-meny",
    closeLabel: "Stäng sociala medier-meny",
    menuAriaLabel: "Länkar till sociala medier",
    followTitle: "Följ oss",
  },
};

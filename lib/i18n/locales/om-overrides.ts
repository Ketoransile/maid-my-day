import type { DeepPartial, Translations } from "../types";
import { servicesPageOm } from "./pages/services-page-om";
import { coreSectionsOm } from "./pages/core-sections-om";
import { howItWorksPageOm } from "./pages/how-it-works-page-om";
import { whyUsPageOm } from "./pages/why-us-page-om";
import { faqPageOm } from "./pages/faq-page-om";
import { contactPageOm } from "./pages/contact-page-om";

/** Afaan Oromoo translations */
export const omOverrides: DeepPartial<Translations> = {
  nav: {
    home: "Mana",
    services: "Tajaajiloota",
    howItWorks: "Akkaata itti hojjetu",
    whyUs: "Maaliif nu",
    faq: "Gaaffilee irra deddeebiin",
    contact: "Quunnamaa",
    contactUs: "Nu quunnamaa",
    openMenu: "Baafata bani",
    allLinks: "Hidhamtoonni hunda",
    language: "Afaan",
    submenu: {
      overview: "Haala waliigalaa",
      getStarted: "Jalqabi",
      learnMore: "Caalaatti baradhu",
    },
    extended: {
      about: "Waa'ee Maid My Day",
      careers: "Hojiiwwan",
      partners: "Waliin hojjedhu",
      resources: "Qabeenya",
      blog: "Biloogii",
      press: "Gaazexeessaa",
    },
  },
  hero: {
    eyebrow: "Maid My Day Mana fi Jijjiirraa Tajaajila",
    title: "Finfinnee keessatti rakkina malee qabaa",
    lead: "Lammii alaa fi ogummaa idil-addunyaa qabanii fudhatanif tajaajila mana, konkolaachisaa, eeyyama bineensota fi jijjiirraa amanamaa.",
    contactUs: "Nu quunnamaa",
    ourServices: "Tajaajiloota keenya",
    scrollHint: "Gara kutaa itti aanutti harkisi",
  },
  common: {
    brandName: "Maid My Day",
    brandTagline: "Maid My Day Mana fi Jijjiirraa Tajaajila",
    location: "Finfinnee, Itoophiyaa",
    phone: "+251 911 000 000",
    email: "hello@maidmyday.com",
    copyright: "© {year} Maid My Day Mana fi Jijjiirraa. Mirgi hundi kan eegame.",
    whatsIncluded: "Wanti hammatu",
    idealFor: "Kanfamu",
    ourPromise: "Waadaa Keenya",
    promiseQuote:
      "Namni mana keessanii seenutti osoo nu mana keenyatti hin ergin dura hin ergnu. Sadarkaan kun maatiiwwan waggaa hedduu nu waliin tursiise.",
    promiseAttribution: "— Garee kaa'umsa Maid My Day, Finfinnee",
    cta: {
      contactUs: "Nu quunnamaa",
      viewServices: "Tajaajiloota ilaali",
      getStarted: "Jalqabi",
      exploreAllServices: "Tajaajiloota hunda sakatta'i",
      callUs: "Nu bilbili",
      howItWorks: "Akkaata itti hojjetu",
      whyChooseUs: "Maaliif nu filattu",
      readFaqs: "Gaaffilee dubbisi",
      ourServices: "Tajaajiloota keenya",
    },
  },
  trustBar: {
    items: [
      { label: "Hojjettoonni qoratamanii filataman" },
      { label: "Sadarkaa giddu galeessa 5.0" },
      { label: "Wabii deebii 24 sa'aatii" },
      { label: "Maatii 500+ tajaajilame" },
    ],
  },
  services: {
    eyebrow: "Tajaajiloota Keenya",
    title: "Mana keessan Finfinnee keessatti waan barbaachisu hunda",
    description: "Deeggarsa mana fi jijjiirraa ogummaa qabu maatiiwwan alaaaf.",
    items: [
      {
        id: "housing",
        title: "Mana fi Jijjiirraa",
        description: "Mana haaraa keessan argachuu fi qubachuu deeggarsa ogummaa qabuun.",
        imageAlt: "Furtuun mana haaraa",
      },
      {
        id: "housemaids",
        title: "Hojjettoota Mana Leenjifaman",
        description: "Hojjettoota qulqullina, miiccaa, nyaata bilchisuu fi eegumsa guyyaa guyyaa.",
        imageAlt: "Hojjettuu mana ogummaa qabu",
      },
      {
        id: "drivers",
        title: "Konkolaachisota Ogummaa Qaban",
        description: "Konkolaachisota nageenya qaban maatii fi dhuunfaa ta'aniif.",
        imageAlt: "Konkolaachisaa ogummaa qabu",
      },
      {
        id: "petCare",
        title: "Eeyyama Bineensota",
        description: "Yeroo hojii ykn imala keessan bineensota keessan eegu.",
        imageAlt: "Eeyyama bineensota",
      },
      {
        id: "homeManagement",
        title: "Bulchiinsa Mana",
        description: "Deeggarsa guutuu mana keessan akka sirritti hojjetuuf.",
        imageAlt: "Mana ammayyaa sirritti qindaa'e",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Adeemsa",
    title: "Jalqabuun salphaa dha",
    steps: [
      {
        number: "01",
        title: "Waan barbaaddan nuuf himaa",
        description: "Unka quunnamtii guutuu ykn nu bilbilaa. Sa'aatii 24 keessatti deebii kennina.",
      },
      {
        number: "02",
        title: "Garee sirrii waliin isin qunnamsiisna",
        description: "Hojjettoota mana, sagantaa fi filannoo keessaniif mije'ani filanna.",
      },
      {
        number: "03",
        title: "Amantiidhaan qabaa",
        description: "Mana keessan bulfamuu, maatiin keessan eegamu, jireenyi keessan sirritti deema.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Maaliif Maid My Day?",
    title: "Deeggarsa amanamaa maatiiwwan alaaaf",
    description:
      "Magaalaa haaraa keessatti qubachuuf waan barbaachisu ni beekna. Maid My Day tajaajila mana fi jijjiirraa ogummaa qabu kenna.",
    trustPoints: [
      { title: "Hojjettoota filataman", detail: "Hojjettuu, konkolaachisaa fi gargaaraan hundi dura qoratama." },
      { title: "Sadarkaa ogummaa", detail: "Leenjii fi eegumsa waadaa garee mana keessan hundaaf." },
      { title: "Tajaajila amanamaa", detail: "Deeggarsa torban torbaniin amanamuu dandeessan." },
      { title: "Deeggarsa alaa", detail: "Diplomaatota, hojjettoota embasii fi ogummaa idil-addunyaaaf." },
      { title: "Gargaarsa dhuunfaa", detail: "Tajaajila mana, sagantaa fi maatii keessaniif mije'e." },
    ],
    imageAlt: "Maatii gammade Finfinnee keessatti",
    stats: { families: "Maatiiwwan", rating: "Sadarkaa", years: "Waggoota" },
  },
  ...coreSectionsOm,
  footer: {
    tagline: "Maid My Day Mana fi Jijjiirraa Tajaajila",
    subtitle: "Tajaajila mana fi jijjiirraa sadarkaa olaanaa Finfinnee keessatti",
    quickLinksHeading: "Hidhamtoonni ariifataa",
    contactHeading: "Nu quunnamaa",
  },
  homePage: {
    intro: {
      eyebrow: "Baga nagaan gara Finfinnee dhuftan",
      title: "Hirmaata mana keessanii guyyaa jalqabaa irraa",
      lead: "Maid My Day maatiiwwan alaa, diplomaatota fi ogummaa idil-addunyaaaf kan ijaarame — tarree quunnamtii qofa osoo hin taane garee jireenya Finfinnee hubatu barbaadan.",
      paragraphs: [
        "Gara magaalaa guddittii Itoophiyaa yeroo jijjiiramtu naannolee haaraa, sirna haaraa fi namoota haaraa mana keessan keessa galu. Naannoo Bole ykn Kazanchis keessatti mana sirrii argachuu, hojjettuu amanamaa qabachuu, konkolaachisaa karaa mana barumsaa beeku qacaruu fi jireenya guyyaa guyyaa qindeessuu keessan gargaarra.",
        "Waltajjiiwwan hojiiwwanii walitti qabaman irraa adda ta'ee, mana idil-addunyaa irratti xiyyeeffanna. Kunis qunnamtii Afaan Ingilizii, yeroo sirrii, walgahii walbaruu dura fi wabii bakka buusuu yoo hin taane jechuudha.",
        "Torban jaha dura ykn dhuma torbanii kana gargaarsa yoo barbaaddan, qindeessitoonni keenya sa'aatii 24 keessatti tarkaanfii itti aanu ifa ta'e kennu — dhiibbaa malee, waadaa hin mul'anne malee.",
      ],
    },
    quickFacts: [
      { label: "Maatiiwwan deeggaraman", value: "500+" },
      { label: "Deebii giddu galeessa", value: "24 sa'aatii" },
      { label: "Naannolee haguugaman", value: "12+" },
      { label: "Sadarkaa maamiltootaa", value: "5.0" },
    ],
    packages: {
      eyebrow: "Kuufamoota",
      title: "Filannoo jijjiirraa sadarkaa hundaaf",
      description:
        "Filannoo jijjiiramaa torban dhufu ykn mana duraan ijaarame fooyyessan maatiiwwan alaaaf.",
    },
    expectations: {
      eyebrow: "Waan eegamu",
      title: "Akkaataa mana idil-addunyaa waliin hojjennu",
      description:
        "Sadarkaa ifa ta'e, yeroo amanamaa fi deeggarsa kaa'umsa booda itti fufu.",
    },
    expectationsItems: [
      {
        title: "Dura qoratamee filatame",
        detail:
          "Hojjettuu, konkolaachisaa fi gargaaraan hundi dura walga'ii, mirkaneessa wabii fi qorannoo duubaan darbu.",
      },
      {
        title: "Kaa'umsa hunda ni mirkaneessitu",
        detail:
          "Namni tokko osoo hin jalqabin dura fuula fuulatti ykn viidiyoon wal argu. Nagaa fi hayyama keessan dursa.",
      },
      {
        title: "Guyyaa jalqabaa booda deeggarsa",
        detail:
          "Jijjiirama sagantaa, bakka buusuu fi tajaajila dabalataa — qindeessituun keessan yeroo mana keessan jijjiiramu ni argama.",
      },
      {
        title: "Beekumsa naannoo dabalame",
        detail:
          "Naannolee, tiraafika, seera kireeffannaa fi daldaltoota amanamoo — waggaa Finfinnee beekumsa maamila hundaaf fida.",
      },
    ],
    neighborhoods: {
      eyebrow: "Finfinnee keessatti jireenya",
      title: "Naannolee keenya caalaatti beeknu",
      description:
        "Magaalaa haaraa yeroo jirtan beekumsi naannoo barbaachisa. Naannolee alaa beekamoo Finfinnee keessatti hojjettoota fi deeggarsa jijjiirraa kennina.",
    },
    neighborhoodItems: [
      {
        name: "Bole",
        detail:
          "Alaa daldalaa fi maatii embasii beekama. Buufata xiyyaaraa Bole, mana barumsaa idil-addunyaa fi nyaataa dhihoo.",
      },
      {
        name: "Kazanchis",
        detail:
          "Bakka giddugaleessa UN fi misiinota diplomaatii dhihoo. Ogummaa idil-addunyaaaf deemsa gabaabaa barbaadan.",
      },
      {
        name: "CMC & Megenagna",
        detail:
          "Naannolee jireenyaa guddachaa jiran kan maatii NGO fi bakka fi nageenya barbaadan jaallatu.",
      },
      {
        name: "Old Airport & Sarbet",
        detail:
          "Naannolee ijaarame kan villa qabeenya fi mana barumsaa gaarii qaban. Misiinota diplomaatii yeroo dheeraaf jaallatama.",
      },
    ],
    relocationPackages: [
      {
        title: "Bu'uuraa Gahumsaa",
        description:
          "Mana qabanii erga gahanii booda hojjettoota amanamoo saffisaan barbaadan ogummaa qaban.",
        items: [
          "Kaa'umsa hojjettuu ykn konkolaachisaa guyyoota muraasa keessatti",
          "Walgahii walbaruu fi yeroo yaalii",
          "Bilbila kontiroolii torban jalqabaa",
        ],
      },
      {
        title: "Jijjiirraa Guutuu",
        description:
          "Kuufama keenya beekamaa maatiiwwan fi diplomaatota jalqaba Finfinnee gahan.",
        items: [
          "Barbaacha naannoo fi tarree mana",
          "Deeggarsa seensaa fi utility qindeessuu",
          "Kaa'umsa hojjettootaa: hojjettuu, konkolaachisaa ykn lamaanuu",
          "Deeggarsa qubachuu guyyaa 30",
        ],
      },
      {
        title: "Mana Plus",
        description:
          "Jiraattota duraan jiran bulchiinsa mana itti fufu fi qindeessuu hojjettootaa barbaadan.",
        items: [
          "Qindeessituu mana murtaa'e",
          "Sagantaa fi to'annoo hojjettoota hedduu",
          "Qindeessuu daldaltoota fi suphaa",
          "Gamaggama mana waggaa afuritti",
        ],
      },
    ],
  },
  servicesPage: servicesPageOm,
  howItWorksPage: howItWorksPageOm,
  whyUsPage: whyUsPageOm,
  faqPage: faqPageOm,
  contactPage: contactPageOm,
  chat: {
    welcome:
      "Akkam! Ani gargaaraa Maid My Day dha. Tajaajiloota keenya, akkataa itti hojjennu ykn Finfinnee keessatti jalqabuun ilaali.",
    fallback:
      "Kana irratti mirkanaa'aa miti. Waa'ee mana keessan gaaffii addaa yoo qabaattan gareen keenya si gargaara — yeroo baay'ee sa'aatii 24 keessatti.",
    quickPrompts: [
      "Tajaajiloota akkamii kennitu?",
      "Akkaataa itti hojjetu?",
      "Naannoo akkamii tajaajilu?",
      "Akkamitti saffisaan gargaaruu dandeessu?",
      "Garee waliin haasa'i",
    ],
    ui: {
      subtitle: "Tajaajiloota keenya gaafadhu",
      quickQuestionsLabel: "Gaaffilee ariifataa",
      inputPlaceholder: "Gaaffii gaafadhu...",
      inputLabel: "Ergaa kee barreessi",
      panelAriaLabel: "Gargaaraa haasaa Maid My Day",
      closeLabel: "Haasawa cufi",
      openLabel: "Gargaaraa haasaa bani",
      sendLabel: "Ergaa ergi",
      typingLabel: "Gargaaraan barreessaa jira",
    },
  },
  social: {
    openLabel: "Baafata miidiyaa hawaasaa bani",
    closeLabel: "Baafata miidiyaa hawaasaa cufi",
    menuAriaLabel: "Hidhamtoonni miidiyaa hawaasaa",
    followTitle: "Nu hordofaa",
  },
};

import type { DeepPartial, Translations } from "../types";
import { navSubmenusSo } from "../nav-submenus";
import { servicesPageSo } from "./pages/services-page-so";
import { coreSectionsSo } from "./pages/core-sections-so";
import {
  howItWorksPageSo,
  whyUsPageSo,
  faqPageSo,
  contactPageSo,
} from "./pages/inner-pages-so";

/** Soomaali translations */
export const soOverrides: DeepPartial<Translations> = {
  nav: {
    home: "Guriga",
    services: "Adeegyada",
    howItWorks: "Sida ay u shaqeyso",
    whyUs: "Waa maxay annaga",
    faq: "Su'aalaha badanaa",
    contact: "Xiriir",
    contactUs: "Nala soo xiriir",
    openMenu: "Fur liiska",
    allLinks: "Dhammaan xiriiriyeyaasha",
    language: "Luuqad",
    submenu: navSubmenusSo,
    extended: {
      about: "Ku saabsan Maid My Day",
      careers: "Shaqooyin",
      partners: "Nala iskaashi",
      resources: "Ilaha",
      blog: "Blog",
      press: "Warbaahinta",
    },
    compact: {
      home: "Guriga",
      services: "Adeegyo",
      howItWorks: "Habka",
      whyUs: "Annaga",
      faq: "Su'aalaha",
      contact: "Xiriir",
      contactUs: "Xiriir",
    },
  },
  hero: {
    eyebrow: "Maid My Day Guri & Adeegga Degaanka",
    title: "Addis Ababa si nabad ah u deg",
    lead: "Adeegyo la isku halayn karo oo guri, darawal, xanaanada xayawaanka iyo degaan loogu talagalay ajaanibta iyo xirfadlayaasha caalamiga ah.",
    contactUs: "Nala soo xiriir",
    ourServices: "Adeegyadayada",
    scrollHint: "U rog qaybta xigta",
  },
  common: {
    brandName: "Maid My Day",
    brandTagline: "Maid My Day Guri & Adeegga Degaanka",
    location: "Addis Ababa, Itoobiya",
    phone: "+251 911 000 000",
    email: "hello@maidmyday.com",
    copyright: "© {year} Maid My Day Guri & Degaan. Xuquuqda oo dhan waa la ilaaliyay.",
    whatsIncluded: "Waxa ku jira",
    idealFor: "Ku habboon",
    ourPromise: "Ballanqaadkayaga",
    promiseQuote:
      "Qofna gurigaaga kuma dirno ilaa aan isku kalsoonahay inaan gurigeenna u dirno. Heerkaas ayaa qoysaska sanado nala haya.",
    promiseAttribution: "— Kooxda gelinta Maid My Day, Addis Ababa",
    cta: {
      contactUs: "Nala soo xiriir",
      viewServices: "Eeg adeegyada",
      getStarted: "Bilow",
      exploreAllServices: "Eeg dhammaan adeegyada",
      callUs: "Noo soo wac",
      howItWorks: "Sida ay u shaqeyso",
      whyChooseUs: "Waa maxay annaga",
      readFaqs: "Akhri su'aalaha",
      ourServices: "Adeegyadayada",
    },
  },
  trustBar: {
    items: [
      { label: "Shaqaale si taxadar leh loo doortay" },
      { label: "Qiime celcelis 5.0" },
      { label: "Dammaanad jawaab 24 saac" },
      { label: "500+ qoys oo la caawiyay" },
    ],
  },
  services: {
    eyebrow: "Adeegyadayada",
    title: "Wax kasta oo gurigaagu u baahan yahay Addis Ababa",
    description: "Taageero guri iyo degaan oo xirfad leh qoysaska ajaanibta ah.",
    items: [
      {
        id: "housing",
        title: "Guri & Degaan",
        description: "Helitaanka guriga cusub iyo deggenaansho taageero xirfad leh.",
        imageAlt: "Furayaasha guri cusub",
      },
      {
        id: "housemaids",
        title: "Adeegtooyin Tababaran",
        description: "Shaqaale lagu kalsoon yahay nadaafad, dharka, karinta iyo daryeelka guriga.",
        imageAlt: "Adeegto guri xirfad leh",
      },
      {
        id: "drivers",
        title: "Darawallo Xirfad Leh",
        description: "Darawallo ammaan ah gaadiidka qoyska iyo shakhsiga.",
        imageAlt: "Darawal xirfad leh",
      },
      {
        id: "petCare",
        title: "Daryeelka Xayawaanka",
        description: "Daryeel lagu kalsoon yahay xayawaankaaga markaad shaqaynayso ama safarto.",
        imageAlt: "Daryeel xayawaan",
      },
      {
        id: "homeManagement",
        title: "Maamulka Guriga",
        description: "Taageero buuxda si gurigaagu si habsami leh u shaqeeyo.",
        imageAlt: "Guri casri ah oo habaysan",
      },
      {
        id: "childcare",
        title: "Daryeelka Carruurta & Xannaaneyaal",
        description: "Xannaaneyaal diirran oo lagu kalsoon yahay si carruurtaadu ammaan iyo daryeel gurigaaga ugu joogaan.",
        imageAlt: "Xannaane naxariis leh oo carruur yaryar wax la akhrinaya",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Habka",
    title: "Bilowgu waa fudud yahay",
    steps: [
      {
        number: "01",
        title: "Noo sheeg waxaad u baahan tahay",
        description: "Buuxi foomka xiriirka ama na soo wac. Waxaan kugu jawaabi 24 saac gudahood.",
      },
      {
        number: "02",
        title: "Waxaan kula jaanqaadinnaa kooxda saxda ah",
        description: "Shaqaale ku habboon gurigaaga, jadwalkaaga iyo doorbidkaaga ayaan doorannaa.",
      },
      {
        number: "03",
        title: "Deg deg oo kalsooni leh",
        description: "Gurigaaga waa la maamulaa, qoyskaaga waa la daryeelaa, noloshu si habsami leh ayay u socotaa.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Waa maxay Maid My Day?",
    title: "Taageero lagu kalsoon yahay qoysaska ajaanibta ah",
    description:
      "Waxaan fahamsanahay waxa loo baahan yahay in magaalo cusub lagu dego. Maid My Day waxay bixisaa adeegyo guri iyo degaan oo xirfad leh.",
    trustPoints: [
      { title: "Shaqaale si taxadar leh loo doortay", detail: "Shaqaale kasta waa la hubiyaa ka hor gelinta." },
      { title: "Heerar xirfad leh", detail: "Tababar iyo rajo cad kooxda gurigaaga." },
      { title: "Adeeg lagu kalsoon yahay", detail: "Taageero aad ku kalsoonaan karto toddobaadba toddobaadka." },
      { title: "Taageero ajaanib", detail: "Diplomaasiyiin, shaqaalaha safaaradda iyo xirfadlayaasha caalamiga ah." },
      { title: "Caawimaad shakhsi ah", detail: "Adeegyo ku habboon gurigaaga, jadwalkaaga iyo qoyskaaga." },
    ],
    imageAlt: "Qoys faraxsan Addis Ababa",
    stats: { families: "Qoysas", rating: "Qiime", years: "Sano" },
  },
  ...coreSectionsSo,
  footer: {
    tagline: "Maid My Day Guri & Adeegga Degaanka",
    subtitle: "Adeegyo guri iyo degaan oo heer sare ah Addis Ababa",
    quickLinksHeading: "Xiriiriyeyaasha degdegga ah",
    contactHeading: "Nala soo xiriir",
  },
  homePage: {
    intro: {
      eyebrow: "Ku soo dhawoow Addis Ababa",
      title: "Lammaanaha gurigaaga laga bilaabo maalinta koowaad",
      lead: "Maid My Day waxaa loo dhisay qoysaska ajaanibta ah, diplomaasiyiinta iyo xirfadlayaasha caalamiga ah — ma aha liiska xiriirka oo keliya, waxay u baahan yihiin koox fahamta nolosha Addis Ababa.",
      paragraphs: [
        "Markaad u guurto caasimadda Itoobiya, xaafado cusub, caadooyin cusub iyo dad cusub ayaa gurigaaga soo gala. Waxaan kaa caawinaa inaad ku dhex socoto: helitaanka guri sax ah Bole ama Kazanchis, shaqaale guri oo lagu kalsoon yahay, darawal yaqaan waddooyinka dugsiga, iyo habeynta nolol maalmeedka.",
        "Ka duwan hay'adaha shaqaale ee caadiga ah, waxaan ku takhasusay qoysaska caalamiga ah. Taas macnaheedu waa isku xirka Ingiriisiga, jadwal macquul ah, kulamo hordhac ka hor gelinta, iyo dammaanad beddelid haddii iswaafajintu khaldan tahay.",
        "Haddii aad qorsheyneyso guuritaan lix toddobaad ka hor ama caawimaad usbuucan, isku xirayaashayadu waxay ku jawaabaan 24 saac gudahood talaabooyin cad — cadaadis la'aan, ballan aan cadayn la'aan.",
      ],
    },
    quickFacts: [
      { label: "Qoysas la taageeray", value: "500+" },
      { label: "Jawaab celin celcelis", value: "24 saac" },
      { label: "Xaafado la daboolay", value: "12+" },
      { label: "Qiimeynta macmiilka", value: "5.0" },
    ],
    packages: {
      eyebrow: "Xirmooyin",
      title: "Doorashooyin degaan marxalad kasta",
      description:
        "Doorashooyin dabacsan haddii aad soo degayso usbuuca soo socda ama aad hagaajineyso guri hore loo dejiyay.",
    },
    expectations: {
      eyebrow: "Waxa la filayo",
      title: "Sida aan ula shaqeyno qoysaska caalamiga ah",
      description:
        "Heerar cad, jadwal daacad ah, iyo taageero sii socota gelinta ka dib.",
    },
    expectationsItems: [
      {
        title: "La hubiyay ka hor hordhaca",
        detail:
          "Shaqaale guri, darawal iyo caawiye kasta waxay maraan wareysi, hubinta tixraaca iyo xaqiijinta asalka ka hor soo jeedinta.",
      },
      {
        title: "Waxaad ansixisaa gelin kasta",
        detail:
          "La kulan musharaxiinta shaqsi ahaan ama fiidiyow ka hor inta aan qofna bilaabin. Raaxadaada iyo ogolaanshahaaga ayaa mudnaanta leh.",
      },
      {
        title: "Taageero maalinta koowaad ka dib",
        detail:
          "Isbeddelka jadwalka, beddelid, iyo adeegyo dheeri ah — isku xirayaashaagu wuu diyaar yahay marka gurigaagu isbeddelo.",
      },
      {
        title: "Aqoonta deegaanka waa la dhisay",
        detail:
          "Xaafado, qaabka taraafikada, caadooyinka kirada, iyo alaab-qeybiyeyaal lagu kalsoon yahay — waxaan keennaa khibrad sannado ah oo Addis gaar ah macmiil kasta.",
      },
    ],
    neighborhoods: {
      eyebrow: "Ku noolaanshaha Addis",
      title: "Xaafadaha aan ugu fiican u naqaan",
      description:
        "Aqoonta deegaanku waa muhiim markaad magaalada cusub tahay. Waxaan shaqaale gelinaa oo taageerno degaanada ugu caansan ajaanibta Addis Ababa.",
    },
    neighborhoodItems: [
      {
        name: "Bole",
        detail:
          "Caanka ah ajaanibta shirkadaha iyo qoysaska safaaradda. U dhow garoonka diyaaradaha Bole, dugsiyada caalamiga ah iyo makhaayadaha.",
      },
      {
        name: "Kazanchis",
        detail:
          "Goob dhexe u dhow hay'adaha Qaramada Midoobay iyo howlgallada diplomaasiyadeed. Ku habboon xirfadlayaasha doonaya safar gaaban.",
      },
      {
        name: "CMC & Megenagna",
        detail:
          "Xaafado degmo oo koraya oo caanka ah shaqaalaha NGO iyo qoysaska raadinaya meel iyo amni.",
      },
      {
        name: "Old Airport & Sarbet",
        detail:
          "Xaafado la aasaasay oo leh villa waaweyn iyo marin wanaagsan dugsiyada. Jecel howlgallada diplomaasiyadeed ee muddada dheer.",
      },
    ],
    relocationPackages: [
      {
        title: "Aasaaska Imaatinka",
        description:
          "Xirfadlayaasha guri hore u haysta laakiin u baahan shaqaale lagu kalsoon yahay si degdeg ah markay yimaadaan.",
        items: [
          "Gelinta shaqaale guri ama darawal maalmo gudahood",
          "Kulamo hordhac iyo muddada tijaabada",
          "Wicitaan kormeer toddobaadka koowaad",
        ],
      },
      {
        title: "Degaan Buuxa",
        description:
          "Xirmadeena ugu caansan qoysaska iyo diplomaasiyiinta markii ugu horreysay u guuraya Addis.",
        items: [
          "Raadinta xaafadda iyo liiska guryaha",
          "Taageero gelitaanka iyo dejinta adeegyada",
          "Gelinta shaqaale: guri, darawal ama labadaba",
          "Taageero degganaansho 30 maalmood",
        ],
      },
      {
        title: "Guri Plus",
        description:
          "Degaanayaasha hore u deggan ee doonaya maamul guri joogto ah iyo isku xirka shaqaalaha.",
        items: [
          "Isku xirayaal guri gaar ah",
          "Jadwal iyo kormeer shaqaale badan",
          "Isku xirka alaab-qeybiyeyaasha iyo dayactirka",
          "Dib u eegis guri saddex biloodba mar",
        ],
      },
    ],
  },
  servicesPage: servicesPageSo,
  howItWorksPage: howItWorksPageSo,
  whyUsPage: whyUsPageSo,
  faqPage: faqPageSo,
  contactPage: contactPageSo,
  chat: {
    welcome:
      "Salaan! Waxaan ahay kaaliyaha Maid My Day. Weydii adeegyadayada, sida aan u shaqeyno ama sida loo bilaabo Addis Ababa.",
    fallback:
      "Ma hubo tan. Su'aal gaar ah oo gurigaaga ku saabsan haddii aad qabtid kooxdayadu si toos ah ayay ku caawin kartaa — inta badan 24 saac gudahood.",
    quickPrompts: [
      "Waa maxay adeegyada aad bixisaan?",
      "Sidee ayay u shaqeyso?",
      "Goobaha aad ka shaqeysaan?",
      "Sidee degdeg ah ayaad u caawin kartaan?",
      "La hadal kooxda",
    ],
    ui: {
      subtitle: "Weydii adeegyadayada",
      quickQuestionsLabel: "Su'aalo degdeg ah",
      inputPlaceholder: "Weydii su'aal...",
      inputLabel: "Qor fariintaada",
      panelAriaLabel: "Kaaliyaha sheekada Maid My Day",
      closeLabel: "Xir sheekada",
      openLabel: "Fur kaaliyaha sheekada",
      sendLabel: "Dir fariin",
      typingLabel: "Kaaliyuhu wuu qorayaa",
    },
  },
  social: {
    openLabel: "Fur liiska warbaahinta bulshada",
    closeLabel: "Xir liiska warbaahinta bulshada",
    menuAriaLabel: "Xiriiriyeyaasha warbaahinta bulshada",
    followTitle: "Na raac",
  },
};

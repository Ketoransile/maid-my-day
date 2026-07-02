import type { DeepPartial, Translations } from "../../types";

export const coreSectionsSo: Pick<
  DeepPartial<Translations>,
  | "testimonials"
  | "mission"
  | "faq"
  | "contact"
  | "pageHero"
  | "pageCta"
> = {
  testimonials: {
    eyebrow: "Sheekooyinka Macaamiisha",
    title: "Macaamiisheennu Maxay Yiraahdaan?",
    description:
      "Khibrado dhab ah oo ka yimid ajaanibta iyo qoysaska aan ka caawinay degganaanshaha Addis Ababa.",
    items: [
      {
        name: "James Holloway",
        role: "Lataliye UN, Addis Ababa",
        quote:
          "Shaqaale guri magaalo cusub ku helitaankiisu suurtagal ma ahayn. Maid My Day maalmo gudahood qof soo dhigay. Farxad weyn.",
      },
      {
        name: "Sophie Renard",
        role: "Shaqaale Safaaradda Faransiiska",
        quote:
          "Darawalkayagu laba sano nala joogaa. Waqtiga ku haya, ammaan, naxariis leh. Waxa aan u baahnayn dugsiga.",
      },
      {
        name: "Marcus Webb",
        role: "Agaasimaha NGO, 2023",
        quote:
          "Taageerada degaanku si fudud ayay u socotay. Guri, adeegyo iyo daryeel xayawaanka qoyskeenna ayay qabanqaabiyeen.",
      },
      {
        name: "Elena Vasquez",
        role: "Diplomaasi EU",
        quote:
          "Gurigeenna wixii ugu horreeyay way fahmeen. Shaqaalihii ay soo direen waa qarsoodi, dhammaystiran, wali nala jooga.",
      },
      {
        name: "David Okonkwo",
        role: "Ajaanib Shirkadeed, Bole",
        quote:
          "Darawal iyo maamul guri si degdeg ah ayaan u baahnay. Toddobaad gudihiis way keenay. Wax ka badan ma weydiisan karo.",
      },
      {
        name: "Amara Chen",
        role: "Cilmi-baare, 2024",
        quote:
          "Kaligay Addis u timid waan walwalsanaa. Bishii koowaad way fududeeyeen. Diirran oo toos.",
      },
    ],
  },
  mission: {
    eyebrow: "Himiladeenna",
    title: "Nolosha qoysaska ajaanibta ah Addis Ababa ka fududayso",
    description:
      "In nolosha Addis Ababa laga dhigo mid fudud, nadiif ah oo raaxo leh iyadoo la adeegsanayo taageero guri iyo degaan oo lagu kalsoon yahay.",
    body: "Maid My Day waxaa loo abuuray in walwalka degganaanshaha la yareeyo. Waxaan taageernaa ajaanibta, diplomaasiyiinta iyo shaqaalaha safaaradaha marxalad kasta.",
    mainImageAlt: "Guri raaxo leh Addis Ababa",
    serviceOrbits: [
      { id: "housing", label: "Guri", alt: "Taageero guri iyo degaan" },
      { id: "housemaids", label: "Shaqaale", alt: "Shaqaale guri tababaran" },
      { id: "drivers", label: "Darawal", alt: "Darawallo xirfad leh" },
      { id: "petCare", label: "Xayawaan", alt: "Daryeel xayawaanka" },
      { id: "homeManagement", label: "Maamul", alt: "Maamulka guriga" },
      { id: "childcare", label: "Carruur", alt: "Adeegyada daryeelka carruurta iyo xannaaneyaasha" },
    ],
    pillars: [
      { title: "Gurigaaga hel", detail: "Taageero degaan si aad ugu degto xaafadda iyo hantida saxda ah." },
      { title: "Shaqaale la isku halayn karo", detail: "Shaqaale guri, darawal iyo caawiyeyaal si taxadar leh loo doortay." },
      { title: "Nidaam joogto ah", detail: "Maamul guri maalmeed si noloshaadu Addis u socoto si habsami leh." },
    ],
  },
  faq: {
    eyebrow: "Su'aalaha Badanaa",
    title: "Su'aalaha Inta Badan La Isweydiiyo",
    description: "Jawaabo fudud oo ku saabsan sida aan u shaqeyno. Eray adag ma jiro.",
    items: [
      {
        question: "Sidee baad u doorataan shaqaalaha guriga?",
        answer:
          "Musharax kasta wuxuu maraa hab tallaabooyin badan: dib u eegis codsiga, wareysi, xaqiijinta tixraaca iyo asalka. Kuwa heerarkayaga buuxiya oo keliya ayaan macaamiisha u soo bandhigeynaa.",
      },
      {
        question: "Musharaxiinta ka hor intaanan go'aansanin ma la kulmi karaa?",
        answer: "Haa. Kulmo hordhac ayaan qabanqaabinaa. Waxaad ogolaansho buuxda u leedahay cidda gurigaaga soo gasha.",
      },
      {
        question: "Goobaha Addis Ababa ee aad ka shaqeysaan?",
        answer: "Waxaan ka shaqeynaa Bole, Kazanchis, CMC, Old Airport, Sarbet iyo xaafadaha degmo ee waaweyn.",
      },
      {
        question: "Haddii shaqaalihii aanu ku habboonayn maxaa dhacaya?",
        answer: "Waxaan bixinaa dammaanad beddelid. Noo sheeg waxa khaldan, waxaan helnaa mid ka fiican lacag gelin dheeraad ah la'aan.",
      },
      {
        question: "Ma taageeraan ajaanibta cusub?",
        answer: "Haa. Waxaan haynaa xirmooyin degaan oo dhammaystiran — raadinta guri, degganaansho, adeegyo iyo shaqaale.",
      },
      {
        question: "Imisa degdeg ah ayay adeegyadu bilaabmaan?",
        answer: "Inta badan 24 saac gudahood waxaan bilaabnaa iswaafajinta, maalmo gudahoodna shaqaale gelin.",
      },
    ],
  },
  contact: {
    eyebrow: "Nala Soo Xiriir",
    title: "Maid My Day Guri & Degaan",
    description:
      "Noo sheeg waxaad u baahan tahay, 24 saac gudahood ayaan kugu jawaabi doonaa. Cadaadis iyo ballan aan cadayn ma jiro.",
    availabilityNote: "Isniin ilaa Sabti. Jawaabo badan 24 saac gudahood.",
    infoLabels: { phone: "Telefoon", email: "Iimayl", location: "Goob" },
    form: {
      heading: "Fariin dir",
      fields: {
        fullName: "Magaca buuxa",
        email: "Iimayl",
        phone: "Telefoon",
        services: "Waxaad u baahan tahay",
        message: "Fariintaada",
      },
      placeholders: {
        name: "Magacaaga",
        email: "iimayl@cinwaan.com",
        phone: "+251 ...",
        message: "Ku saabsan gurigaaga, waqtiga iyo waxa kaa caawin kara.",
      },
      servicePicker: {
        placeholder: "Adeeg dooro",
        ariaAvailable: "Adeegyada la heli karo",
        ariaSelected: "Adeegyada la doortay",
        allSelected: "Dhammaan adeegyada waa la doortay",
        removeAria: "Ka saar {label}",
      },
      serviceOptions: [
        { value: "relocation", label: "Taageero Guri & Degaan" },
        { value: "housemaid", label: "Shaqaale Guri Tababaran" },
        { value: "driver", label: "Darawallo Xirfad leh" },
        { value: "pet-care", label: "Daryeel Xayawaanka" },
        { value: "management", label: "Maamulka Guriga" },
        { value: "childcare", label: "Daryeelka Carruurta & Xannaaneyaal" },
        { value: "other", label: "Wax kale" },
      ],
      submit: "Dir fariin",
      submitting: "Waa la dirayaa...",
      errors: { selectService: "Fadlan ugu yaraan hal adeeg dooro." },
      toasts: {
        selectService: {
          title: "Fadlan adeeg dooro",
          description: "Ka hor intaadan dirin, dooro adeegyada aad u baahan tahay.",
        },
        success: {
          title: "Fariinta si guul leh ayaa loo diray",
          description: "Waxaan helnay codsigaaga, 24 saac gudahood ayaan kugu jawaabi doonaa.",
        },
        error: {
          title: "Fariinta lama diri karin",
          description: "Wax baa khaldamay. Fadlan mar kale isku day.",
        },
      },
    },
  },
  pageHero: {
    services: {
      eyebrow: "Adeegyadeenna",
      title: "Taageero guri iyo degaan heer sare ah Addis Ababa",
      description:
        "Guri ilaa shaqaale la isku halayn karo, darawal iyo daryeel xayawaan — Maid My Day guri raaxo leh ka dhigtaa.",
    },
    howItWorks: {
      eyebrow: "Sida Ay U Shaqeyso",
      title: "Wicitaanka koowaad ilaa guri deggan",
      description: "Hab fudud oo xirfadlayaasha caalamiga ah. Marxalado cad, shaqaale la hubiyay iyo taageero joogto ah.",
    },
    whyUs: {
      eyebrow: "Waa Maxay Maid My Day",
      title: "Xirfadlayaasha caalamiga ah ee doonaya kalsooni ayaa na doorata",
      description:
        "Waxaan fahamsanahay diplomaasiyiinta, shaqaalaha safaaradaha iyo qoysaska ajaanibta ah — taageero maalmeed.",
    },
    faq: {
      eyebrow: "Xarunta Caawinta",
      title: "Jawaabo ka hor intaadan go'aansanin",
      description: "Su'aalaha ku saabsan hubinta, gelinta, xirmooyinka, qiimaha iyo taageerada joogtada ah.",
    },
    contact: {
      eyebrow: "Nala Soo Xiriir",
      title: "Noo sheeg waxa gurigaagu u baahan yahay",
      description: "Haddii aad u baahan tahay caawimaad toddobaad ama toddobaadyo ka hor, kooxdayadu 24 saac gudahood ayay jawaab bixisaa.",
    },
  },
  pageCta: {
    services: {
      title: "Diyaar ma u tahay inaad dhisto kooxda gurigaaga?",
      description:
        "Noo sheeg waxaad u baahan tahay — degaan, shaqaale, darawal ama maamul buuxa — 24 saac gudahood qorshe ayaan kuu soo diraynaa.",
      secondaryLabel: "Sida Ay U Shaqeyso",
    },
    howItWorks: {
      title: "Wadahadal ayaan ku bilaabnaa",
      description: "Foom dheer looma baahna. Wax yar oo ku saabsan gurigaaga sheeg, inta kale annaga.",
      secondaryLabel: "Waa Maxay Annaga",
    },
    whyUs: {
      title: "Farqiga lammaanaha la isku halayn karo arag",
      description: "Ku biir boqolaal qoys oo ajaanib ah oo Maid My Day ku kalsoon taageerada guriga.",
      secondaryLabel: "Akhri Su'aalaha",
    },
    faq: {
      title: "Weli su'aalo ma haysaa?",
      description: "Kooxdayadu waxay ku faraxsan tahay inay ka hadasho xaaladdaada — cabbirka qoyska, waqtiga iyo miisaaniyadda.",
      secondaryLabel: "Adeegyadeenna",
    },
    contact: {
      title: "Ma doorbidaysaa inaad baahidaada wada hadasho?",
      description: "+251 911 000 000 na soo wac ama hello@maidmyday.com. Isniin ilaa Sabti waan joognaa.",
      primaryLabel: "Na Soo Wac",
      secondaryLabel: "Eeg Adeegyada",
    },
  },
};

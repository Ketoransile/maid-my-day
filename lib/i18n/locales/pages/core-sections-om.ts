import type { DeepPartial, Translations } from "../../types";

/** Oromo translations for shared homepage / inner-page chrome sections */
export const coreSectionsOm: Pick<
  DeepPartial<Translations>,
  | "testimonials"
  | "mission"
  | "faq"
  | "contact"
  | "pageHero"
  | "pageCta"
> = {
  testimonials: {
    eyebrow: "Seenaa Maamiltootaa",
    title: "Maamiltoonni Keenya Maal Jedhu?",
    description:
      "Muuxannoo dhugaa lammii alaa fi maatiiwwan Finfinnee keessatti qubachuuf gargaaraman.",
    items: [
      {
        name: "James Holloway",
        role: "Gorsaa UN, Finfinnee",
        quote:
          "Magaalaa haaraa keessatti hojjettuu mana argachuun hin danda'amne fakkaata ture. Maid My Day guyyoota muraasa keessatti namni tokko dhufe. Baay'ee gaddisiifadhe.",
      },
      {
        name: "Sophie Renard",
        role: "Hojjettoota Embasii Faransaay",
        quote:
          "Konkolaachisaan keenya waggaa lama nu waliin jira. Yeroo isaatiin, nageenya qabu, gaarii. Mana barumsaaf nuuf barbaachisaa ture.",
      },
      {
        name: "Marcus Webb",
        role: "Daayrektara NGO, Jijjiirame 2023",
        quote:
          "Deeggarsi jijjiirraa salphaa ture. Apartmentii, utility fi eeyyama saree keenya qopheessan.",
      },
      {
        name: "Elena Vasquez",
        role: "Diplomaatii EU",
        quote:
          "Mana keenya walga'ii jalqabaa irraa hubatan. Hojjettuun isaan ergan iccitii qaba, guutuu fi ammallee nu waliin jira.",
      },
      {
        name: "David Okonkwo",
        role: "Alaa Daldalaa, Bole",
        quote:
          "Konkolaachisaa fi bulchiinsa mana saffisaan barbaachisaa ture. Torban tokko keessatti kennan. Ol ka'uu hin dandeenye.",
      },
      {
        name: "Amara Chen",
        role: "Qorataa, Jijjiirame 2024",
        quote:
          "Ofumaan Finfinnee seenee naannessifadhe. Ji'a jalqabaa salphisuuf na gargaaran. Ho'aa fi qajeelaa turan.",
      },
    ],
  },
  mission: {
    eyebrow: "Ergama Keenya",
    title: "Jireenya maatiiwwan alaa Finfinnee keessatti salphisuu",
    description:
      "Jireenya Finfinnee keessatti salphaa, qulqulluu fi mijataa taasisuuf deeggarsa mana fi jijjiirraa amanamaa.",
    body: "Maid My Day naannessituu qubachuu salphisuuf uumame. Lammii alaa, diplomaatota fi hojjettoota embasii sadarkaa hunda keessatti gargaarra.",
    mainImageAlt: "Mana mijataa Finfinnee keessatti",
    serviceOrbits: [
      { id: "housing", label: "Mana", alt: "Deeggarsa mana fi jijjiirraa" },
      { id: "housemaids", label: "Hojjettoota", alt: "Hojjettoota mana leenjifaman" },
      { id: "drivers", label: "Konkolaachisota", alt: "Konkolaachisota ogummaa qaban" },
      { id: "petCare", label: "Bineensota", alt: "Eeyyama bineensota" },
      { id: "homeManagement", label: "Bulchiinsa", alt: "Bulchiinsa mana" },
    ],
    pillars: [
      {
        title: "Mana keessan argadhaa",
        detail: "Naannoo fi qabeenya sirrii qubachuuf deeggarsa jijjiirraa.",
      },
      {
        title: "Hojjettoota amanamoo qacaruu",
        detail: "Hojjettoota mana, konkolaachisota fi gargaartota filataman.",
      },
      {
        title: "Qindaa'aa turaa",
        detail: "Bulchiinsa guyyaa guyyaa mana Finfinnee keessatti sirritti akka hojjetu.",
      },
    ],
  },
  faq: {
    eyebrow: "Gaaffilee Irra Deddeebiin",
    title: "Gaaffilee Yeroo Baay'ee Gaafataman",
    description: "Deebii salphaa akkamitti akka hojjennu irratti. Jargon hin jiru.",
    items: [
      {
        question: "Hojjettoota mana fi hojjettoota akkamitti filattu?",
        answer:
          "Ibsa hundi adeemsa hedduu darba: ilaalcha iyyannoo, walga'ii fuula fuulatti, mirkaneessa wabii fi qorannoo duubaa. Sadarkaa keenya guutuu qaban qofa maamiltoota waliin walqunnamsiisna.",
      },
      {
        question: "Dura walga'ii dura hojjettoota arguu nan danda'aa?",
        answer:
          "Eeyyee. Kaa'umsa kamiyyuu dura walga'ii qopheessina. Namni mana keessan seenutti mirkaneessuuf hayyama guutuu qabdu.",
      },
      {
        question: "Naannoo Finfinnee keessaa kam tajaajilu?",
        answer:
          "Bole, Kazanchis, CMC, Old Airport, Sarbet fi naannolee jireenyaa gurguddoo Finfinnee keessaa hunda keessatti tajaajilna.",
      },
      {
        question: "Hojjettuu kennaman waliin yoo hin taane maaltu ta'a?",
        answer:
          "Wabii bakka buusuu kennina. Maal hin turre nuuf himi, kaffaltii kaa'umsa dabalataa malee filannoo gaarii arganna.",
      },
      {
        question: "Lammii alaa haaraa jijjiirraa deeggarsa kennitu?",
        answer:
          "Eeyyee. Kuufamoota jijjiirraa guutuu qabna — barbaacha mana, deeggarsa qubachuu, utility fi kaa'umsa hojjettootaa.",
      },
      {
        question: "Erga nu quunnamtanii booda tajaajiloonni akkamitti saffisaan jalqabu?",
        answer:
          "Yeroo baay'ee gaaffii jalqabaa keessatti sa'aatii 24 keessatti walsifannaa jalqabna, guyyoota muraasa keessatti hojjettoota kaa'ina.",
      },
    ],
  },
  contact: {
    eyebrow: "Nu Quunnamaa",
    title: "Maid My Day Mana fi Jijjiirraa",
    description:
      "Waan barbaaddan nuuf himaa, sa'aatii 24 keessatti ni deebifna. Dhiibbaa ykn waadaa hin qabnu.",
    availabilityNote: "Wiixata hanga Sanbataatti. Deebii hedduun sa'aatii 24 keessatti dhufa.",
    infoLabels: { phone: "Bilbila", email: "Imeelii", location: "Bakka" },
    form: {
      heading: "Ergaa ergi",
      fields: {
        fullName: "Maqaa guutuu",
        email: "Imeelii",
        phone: "Bilbila",
        services: "Waan barbaaddan",
        message: "Ergaa keessan",
      },
      placeholders: {
        name: "Maqaa keessan",
        email: "imeelii@teessoo.com",
        phone: "+251 ...",
        message: "Waa'ee mana, yeroo fi waan gargaaru qopheessuuf.",
      },
      servicePicker: {
        placeholder: "Tajaajila filadhu",
        ariaAvailable: "Tajaajiloota jiran",
        ariaSelected: "Tajaajiloota filataman",
        allSelected: "Tajaajiloota hunda filatame",
        removeAria: "{label} haqi",
      },
      serviceOptions: [
        { value: "relocation", label: "Deeggarsa Mana fi Jijjiirraa" },
        { value: "housemaid", label: "Hojjettoota Mana Leenjifaman" },
        { value: "driver", label: "Konkolaachisota Ogummaa Qaban" },
        { value: "pet-care", label: "Eeyyama Bineensota" },
        { value: "management", label: "Bulchiinsa Mana" },
        { value: "other", label: "Waan biraa" },
      ],
      submit: "Ergaa ergi",
      submitting: "Ergaa jira...",
      errors: { selectService: "Maaloo yoo xiqqaate tajaajila tokko filadhaa." },
      toasts: {
        selectService: {
          title: "Maaloo tajaajila tokko filadhaa",
          description: "Ergaa erguun dura tajaajiloota barbaaddan filadhaa.",
        },
        success: {
          title: "Ergaan milkaa'inaan ergame",
          description: "Gaaffii keessan fudhanne, sa'aatii 24 keessatti ni deebifna.",
        },
        error: {
          title: "Ergaan ergamuu hin dandeenye",
          description: "Wanti tokko dogoggora. Maaloo irra deebi'aa yaalaa.",
        },
      },
    },
  },
  pageHero: {
    services: {
      eyebrow: "Tajaajiloota Keenya",
      title: "Deeggarsa mana fi jijjiirraa sadarkaa olaanaa Finfinnee keessatti",
      description:
        "Apartmentii argachuu hanga hojjettoota, konkolaachisota fi eeyyama bineensota amanamoo — Maid My Day mana mijataa taasisa.",
    },
    howItWorks: {
      eyebrow: "Akkaata Itti Hojjetu",
      title: "Walga'ii jalqabaa irraa hanga mana qubachuutti",
      description:
        "Adeemsa salphaa ogummaa idil-addunyaa qaban. Sadarkaa ifa, hojjettoota qorataman fi deeggarsa kaa'umsa booda.",
    },
    whyUs: {
      eyebrow: "Maaliif Maid My Day",
      title: "Ogummaa idil-addunyaa amantii barbaadan nu filatu",
      description:
        "Diplomaatota, hojjettoota embasii fi maatiiwwan alaa Finfinnee beekna — deeggarsa guyyaa guyyaan hojjetu kennina.",
    },
    faq: {
      eyebrow: "Giddugala Gargaarsaa",
      title: "Deebii dura amantuu",
      description:
        "Waa'ee qorannoo, kaa'umsa, kuufamoota, gatii fi deeggarsa itti fufu — afaan salphaa.",
    },
    contact: {
      eyebrow: "Nu Quunnamaa",
      title: "Mana keessan waan barbaadu nuuf himaa",
      description:
        "Torban dura ykn torban kana gargaarsa yoo barbaaddan, gareen keenya sa'aatii 24 keessatti tarkaanfii itti aanu kenna.",
    },
  },
  pageCta: {
    services: {
      title: "Garee mana keessan ijaaruuf qophii dha?",
      description:
        "Waan barbaaddan nuuf himaa — jijjiirraa, hojjettoota, konkolaachisota ykn bulchiinsa guutuu — sa'aatii 24 keessatti karoora kenna.",
      secondaryLabel: "Akkaata Itti Hojjetu",
    },
    howItWorks: {
      title: "Haasawaan jalqabnu",
      description: "Unka dheeraa hin barbaachisu. Waa'ee mana keessan xiqqoo himaa, haala hafe nuuf.",
      secondaryLabel: "Maaliif Nu Filattu",
    },
    whyUs: {
      title: "Garaagarummaa hirmaataa amanamaa ilaali",
      description:
        "Maatiiwwan alaa hedduun deeggarsa mana ogummaa qabuuf Maid My Day fayyadamu.",
      secondaryLabel: "Gaaffilee Dubbisi",
    },
    faq: {
      title: "Ammallee gaaffii qabduu?",
      description:
        "Gareen keenya haala keessan — guddina mana, yeroo fi baajata — ilaaluuf gammachuu qaba.",
      secondaryLabel: "Tajaajiloota Keenya",
    },
    contact: {
      title: "Fedhii keessan haasawaan ilaaluu barbaadduu?",
      description:
        "+251 911 000 000 bilbilaa ykn hello@maidmyday.com imeelii ergaa. Wiixata hanga Sanbataatti as jirra.",
      primaryLabel: "Nu Bilbili",
      secondaryLabel: "Tajaajiloota Ilaali",
    },
  },
};

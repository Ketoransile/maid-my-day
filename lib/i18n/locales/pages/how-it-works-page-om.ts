import type { DeepPartial, Translations } from "../../types";

export const howItWorksPageOm: DeepPartial<Translations>["howItWorksPage"] = {
  detailedProcess: {
    eyebrow: "Tarkaanfii Tarkaanfii",
    title: "Imala keessan Maid My Day waliin",
    description:
      "Sadarkaa torba ifa gaaffii jalqabaa irraa hanga deeggarsa yeroo dheeraa — yeroo ifa wajjin.",
  },
  detailedProcessSteps: [
    {
      step: "01",
      title: "Xiinxala keessan qoodaa",
      description:
        "Waa'ee mana keessan — eenyu waliin jiraattu, Finfinnee keessatti eessatti (ykn yeroo itti gahitan) fi deeggarsa barbaaddan.",
      duration: "Guyyaa 1",
    },
    {
      step: "02",
      title: "Madaallii barbaachisaa",
      description:
        "Sagantaa, afaan, filannoo mana keessaa/alaa fi barbaachisummaa addaa (bineensota, ijoollee, nyaata, nageenya) ifa taasisna.",
      duration: "Guyyaa 1–2",
    },
    {
      step: "03",
      title: "Tarree gabaabaa",
      description:
        "Gareen keenya hojjettoota qorataman irraa ilaala, guyyoota 24–48 keessatti tarree erga.",
      duration: "Guyyaa 2–3",
    },
    {
      step: "04",
      title: "Walga'ii walbaruu",
      description:
        "Dura fuula fuulatti ykn viidiyoon wal argitu. Gaaffii gaafachuu fi walsifannuu ilaaluuf gorsina.",
      duration: "Guyyaa 3–5",
    },
    {
      step: "05",
      title: "Yaaliifi kaa'umsa",
      description:
        "Yeroo yaalii gabaabaa lamaanuu walsifannuu mirkaneessu. Erga mirkaneessitanii booda waliigaltee fi guyyaa jalqabaa xumurra.",
      duration: "Torban 1",
    },
    {
      step: "06",
      title: "Deeggarsa qubachuu",
      description:
        "Torban jalqabaa keessatti sagantaan hojjechuu, qunnamtii ifa ta'uu fi sirreeffamni saffisaan xumuramu mirkaneessina.",
      duration: "Torban 2–4",
    },
    {
      step: "07",
      title: "Waliin hojjechuu itti fufu",
      description:
        "Bakka buusuu, hojjettoota dabalataa, fooyya'iinsa jijjiirraa fi bulchiinsa mana — qunnamtii keessan yeroo hunda ni jira.",
      duration: "Itti fufiinsa",
    },
  ],
  first30Days: {
    eyebrow: "Guyyaa 30 Jalqabaa",
    title: "Ji'a jalqabaa keessan akkamitti akka mul'atu",
    description:
      "Yeroo maatiiwwan Finfinnee gahan ykn hojjettoota haaraa dabalatan.",
    phases: [
      {
        week: "Torban 1",
        title: "Gahuufi walqunnamsiisuu",
        items: [
          "Gaaffii keessan galchaa ykn bilbila jalqabaa qopheessaa",
          "Tarree keessan fudhadhaa fi walga'ii qopheessaa",
          "Yoo jijjiirraa ta'e ilaalcha mana jalqabaa",
        ],
      },
      {
        week: "Torban 2",
        title: "Walsifachuu fi kaa'uu",
        items: [
          "Yaali hojjettuu ykn konkolaachisaa xumuraa",
          "Yoo jijjiiramtan kireeffannaa fi seenuu xumuraa",
          "Sagantaa mana fi hojjettootaa qindeessaa",
        ],
      },
      {
        week: "Torban 3–4",
        title: "Qubachuu fi fooyyessuu",
        items: [
          "Walga'ii jalqabaa qindeessituu Maid My Day waliin",
          "Sagantaa ykn hojii sirreessaa",
          "Yoo barbaachise eeyyama bineensota ykn bulchiinsa mana dabalaa",
        ],
      },
    ],
  },
  prepare: {
    eyebrow: "Dura Nu Quunnamtan",
    title: "Waan qopheessu qabdan",
    description:
        "Odeeffannoo duraan qooddan, hojjettoota ykn karoora jijjiirraa sirrii saffisaan argachuuf.",
  },
  preparationChecklist: [
    "Guyyaa gahumsa keessan ykn naannoo amma Finfinnee keessatti",
    "Guddina mana fi ijoollee ykn bineensota jiraachuu isaanii",
    "Sagantaa filatamaa (yeroo guutuu, walakkaa, mana keessaa/alaa)",
    "Filannoo afaanii qunnamtii hojjettootaaf",
    "Hojii addaa: nyaata bilchisuu, qulqullina, karaa konkolaachisaa, mana barumsaa",
    "Baajata fi yeroo — ariifataa ykn jijjiiramaa",
  ],
  processFaq: {
    eyebrow: "Gaaffilee Waliigalaa",
    title: "Deebii saffisaa jalqabuuf",
    description: "Maamiltoonni walga'ii jalqabaa dura yeroo baay'ee gaafatu.",
  },
  processFaqItems: [
    {
      question: "Hojjettoota akkamitti saffisaan kaa'uu dandeessu?",
      answer:
        "Gaaffii hedduun sa'aatii 24–48 keessatti tarree argatu. Kaa'umsa ariifaa dursa kenna — maatii hedduun guyyoota muraasa keessatti hojjettoota argatu.",
    },
    {
      question: "Walsifannoon jalqabaa yoo hin taane?",
      answer:
        "Wabii bakka buusuu kennina. Maal hin turre nuuf himaa, kaffaltii kaa'umsa malee filannoo gaarii arganna.",
    },
    {
      question: "Dura gahuu dura quunnamuun dirqama?",
      answer:
        "Lakki. Maamiltoonni hedduun dura gahuuf nu quunnamu, barbaacha mana fi kaa'umsa duraan jalqabu.",
    },
  ],
};

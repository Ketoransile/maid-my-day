import type { DeepPartial, Translations } from "../../types";

export const contactPageOm: DeepPartial<Translations>["contactPage"] = {
  afterContact: {
    eyebrow: "Itti Aanu Maaltu Ta'a",
    title: "Ergaa ergitanii booda",
    description:
      "Inboxii gurraacha miti. Gaaffii maatiiwwan alaa Finfinnee keessaa akkamitti ilaallu ifa.",
  },
  afterContactSteps: [
    {
      title: "Ergaa keessan dubbisna",
      description: "Qindeessituun xiinxala mana keessan ilaala — guyyaa daldalaa walfakkaata.",
    },
    {
      title: "Sa'aatii 24 keessatti deebifna",
      description: "Deebii dhuunfaa gaaffii, tarkaanfii ykn yeroo bilbilaa — odeeffannoo otomaatikaa miti.",
    },
    {
      title: "Karoora keessan ijaarra",
      description: "Tarree, ilaalcha ykn walga'ii ariifataa irratti hundaa'uun qopheessina.",
    },
    {
      title: "Ni argama",
      description: "Kaa'umsa booda gareen tokkotti sirreeffama, dabalataa fi yaada keessan tajaajila.",
    },
  ],
  office: {
    eyebrow: "Waajjira fi Argamuu",
    title: "Akkaataa nu quunnamtan",
    description:
      "Finfinnee keessatti hundaa'e, magaalaa guutuu maatiiwwan idil-addunyaa tajaajilna. Afaan Oromoo fi Ingiriizii — barbaachise Faransaayii.",
    labels: {
      officeHours: "Sa'aatii waajjiraa",
      responseTime: "Yeroo deebii",
      languages: "Afaanota",
      coverage: "Haguugduu",
    },
    hours: "Wiixata – Sanbata, 8:30 G | 6:00 W (EAT)",
    response: "Gaaffii hedduun sa'aatii 24 keessatti deebifamu",
    languages: "Afaan Oromoo, Ingiriizii fi Faransaayii ni jira",
    coverage: "Naannolee jireenyaa gurguddoo Finfinnee hunda",
  },
  prepTips: {
    eyebrow: "Dura Barreessitan",
    title: "Gorsa deebii saffisaa fi gaarii",
    description: "Odeeffannoo kana ergaa keessan keessatti yoo dabalattan deebii jalqabaa gargaaraa ta'a.",
  },
  prepTipsItems: [
    { title: "Yeroo keessan qoodaa", detail: "Guyyaa gahumsa, kireeffannaa ykn ariifannaa hojjettootaa." },
    { title: "Mana keessan ibsaa", detail: "Ijoollee, bineensota, mana keessaa/alaa fi afaanota." },
    { title: "Hojii barbaachisan tarreeffamaa", detail: "Mana barumsaa, nyaata, qulqullina, deemsa bineensota." },
    { title: "Naannoo keessan himaa", detail: "Bole, Kazanchis, CMC — filannoo fi saffisa kaa'umsaa irratti dhiibbaa qaba." },
  ],
};

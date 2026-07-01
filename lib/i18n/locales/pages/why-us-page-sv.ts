import type { DeepPartial, Translations } from "../../types";

export const whyUsPageSv: DeepPartial<Translations>["whyUsPage"] = {
  whoWeServe: {
    eyebrow: "Vilka vi hjälper",
    title: "Hushållsstöd för internationella yrkesutövare",
    description:
      "Maid My Day är ingen generisk bemanningsbyrå. Vi specialiserar oss på de hushåll som internationella Addis Abeba bygger på — diplomatiska, humanitära och företagsrelaterade.",
  },
  whoWeServeItems: [
    {
      title: "Diplomater och ambassadanställda",
      description:
        "Diskretion, säkerhetsmedvetenhet och personal som förstår protokoll. Vi stödjer ambassadfamiljer i Addis Abebas diplomatiska områden.",
    },
    {
      title: "FN- och NGO-personal",
      description:
        "Snabb placering vid rotationsflyttar, oförutsägbara scheman och internationella hushållsstandarder.",
    },
    {
      title: "Företagsexpats",
      description:
        "Chefer som inte vill lägga söndagar på att hitta chaufför, hemtjänst och hemkoordinering.",
    },
    {
      title: "Internationella familjer",
      description:
        "Föräldrar med barn i nya skolor som behöver ett rent, lugnt och välskött hem.",
    },
  ],
  standards: {
    eyebrow: "Våra standarder",
    title: "Så bygger vi förtroende, placering för placering",
    description:
      "Varje hushåll är unikt. Dessa principer är desamma — oavsett om du behöver chaufför imorgon eller full flytt över sex veckor.",
  },
  standardsItems: [
    { title: "Grundlig screening", detail: "Ansökningsgranskning, intervju, referenskontroll och bakgrundskontroll." },
    { title: "Kundgodkännande först", detail: "Ingen placering startar utan ditt tydliga godkännande efter möte." },
    { title: "Ersättningsgaranti", detail: "Om matchningen inte fungerar hittar vi ett bättre alternativ utan extra startavgift." },
    { title: "Tydlig kommunikation", detail: "Dedikerad kontakt, tydliga tidslinjer och pålitliga svar." },
    { title: "Lokalkännedom", detail: "Addis Abebas områden, hyresregler, trafik och pålitliga leverantörer." },
    { title: "Långsiktigt partnerskap", detail: "Många kunder har samma chaufför eller hemtjänst i flera år." },
  ],
  story: {
    eyebrow: "Vår metod",
    title: "Människor först, sedan placering",
    paragraphs: [
      "Maid My Day startade eftersom etablering i Addis Abeba var svårare än den borde vara.",
      "Idag stödjer vi familjer inom diplomati, humanitärt arbete och näringsliv. Vi vet skillnaden mellan brådskande behov och rätt långsiktig matchning.",
      "Det märks i vår retention: kunder från för flera år sedan ringer fortfarande.",
    ],
  },
};

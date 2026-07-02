import type { DeepPartial, Translations } from "../../types";

export const servicesPageSv: DeepPartial<Translations>["servicesPage"] = {
  areas: {
    eyebrow: "Täckning",
    title: "Områden vi betjänar i Addis Abeba",
    description:
      "Vi placerar personal och stödjer flyttar i alla större bostadsområden — nära ambassader, internationella skolor och affärsdistrikt.",
  },
  serviceAreas: [
    "Bole",
    "Kazanchis",
    "CMC",
    "Old Airport",
    "Sarbet",
    "Megenagna",
    "Summit",
    "Gerji",
    "Ayat",
    "Lebu",
    "Saris",
    "Kirkos",
  ],
  packages: {
    eyebrow: "Paket",
    title: "Flytt- och hushållspaket",
    description:
      "Flexibla alternativ oavsett om du landar nästa vecka eller uppgraderar ett etablerat hem.",
  },
  whyItMatters: {
    eyebrow: "Varför det spelar roll",
    title: "Mer än personal — ett lugnare hemliv",
  },
  whyItMattersItems: [
    {
      title: "Mindre administration, mer liv",
      body: "Slipp söndagsjakt på personal, leverantörer och scheman. Vi sköter grovjobbet så du kan fokusera på jobb och familj.",
    },
    {
      title: "Kontinuitet du kan lita på",
      body: "Många kunder har samma chaufför eller hemtjänst i flera år. Vi investerar i långsiktiga matchningar, inte snabba byten.",
    },
    {
      title: "En kontaktpunkt",
      body: "Hemtjänst, chaufförer, flytt och hemadministration — allt koordineras via ett Maid My Day-konto.",
    },
  ],
  serviceDetails: [
    {
      id: "housing",
      title: "Boende & flytt",
      summary:
        "Fullständig hjälp att hitta, granska och etablera dig i rätt bostad i Addis Abeba.",
      paragraphs: [
        "Att flytta till ett nytt land innebär okända områden, hyresregler och att ordna el och vatten — ofta samtidigt som jobb och familj. Vårt flyttteam guidar dig genom områdesval, visningar, säkerhetsbedömningar och bostäder som passar din livsstil.",
        "Vi koordinerar visningar, kommunicerar med hyresvärdar och fastighetsförvaltare och förstår vad lokala hyresavtal innebär. Efter beslut hjälper vi med inflyttningslogistik, nyckelöverlämning och pålitliga lokala leverantörer.",
        "För familjer med snäva tidsplaner — ambassad- och NGO-flyttar — erbjuder vi snabb bostadssökning med dagliga uppdateringar och korta listor anpassade till dina prioriteringar.",
      ],
      includes: [
        "Områdesresearch i Bole, Kazanchis, CMC, Old Airport, Sarbet med flera",
        "Bostadslistor anpassade till budget, storlek och säkerhet",
        "Visningskoordinering och stöd vid granskning av hyresavtal",
        "Inflyttningshjälp och vägledning för el och vatten",
        "Uppföljningssamtal under den första månaden",
      ],
      idealFor: [
        "Nya expats och diplomatfamiljer",
        "FN-, NGO- eller företagsflyttar",
        "Familjer som byter område eller uppgraderar bostad i Addis Abeba",
      ],
      imageAlt: "Nycklar och dokument för nytt hem i Addis Abeba",
    },
    {
      id: "housemaids",
      title: "Utbildad hemtjänst",
      summary:
        "Pålitlig hemtjänst för städning, tvätt, matlagning och daglig hushållsvård.",
      paragraphs: [
        "En bra hemtjänst förändrar hur ditt hem känns — men att hitta någon pålitlig i en ny stad är svårt. All Maid My Day-hemtjänst genomgår intervju, referenskontroll och kompetensbedömning i förväg.",
        "Vi placerar heltid, deltid och boende- eller icke-boende personal. Du anger schema, språkpreferens och arbetsuppgifter; vi matchar mot deras erfarenhet. Matlagning kan omfatta etiopisk mat, internationell mat eller båda.",
        "Efter placering finns vi kvar för schemaändringar, ersättning och feedback.",
      ],
      includes: [
        "Flerstegsscreening: intervju, referenser och bakgrundskontroll",
        "Möte innan någon börjar",
        "Städning, tvätt, strykning och stöd i köket",
        "Ersättningsgaranti om matchningen inte fungerar",
        "Löpande koordinering via ditt konto",
      ],
      idealFor: [
        "Familjer med barn som behöver daglig hjälp",
        "Tvåföräldrarhushåll med intensiva scheman",
        "Kunder som vill ha matlagning och hushåll av en pålitlig person",
      ],
      imageAlt: "Professionell hemtjänst som sköter ett välskött hem",
    },
    {
      id: "drivers",
      title: "Professionella chaufförer",
      summary:
        "Säkra chaufförer för skolskjuts, kontor och familjeresor i Addis Abeba.",
      paragraphs: [
        "Trafiken i Addis Abeba och okända vägar gör enkla ärenden stressiga. Våra chaufförer har säker körhistorik, lokalkännedom och yrkesmannamässigt uppträdande som passar familjer.",
        "Oavsett om du behöver heltidsfamiljechaufför, deltid skolskjuts eller tillfällig flygplatskörning anpassar vi efter schema, fordonskrav och språk. Många kunder kommer från ambassad- och NGO-miljöer som prioriterar diskretion och tillförlitlighet.",
        "Chaufförer kan köra din bil eller vi vägleder dig kring transportlösningar och lokala anställningsregler i Etiopien.",
      ],
      includes: [
        "Licensierade chaufförer med bekräftad erfarenhet i Addis Abeba",
        "Skolskjuts, ärenden, arbete och flygplats",
        "Flexibel tillgänglighet och yrkesnivå",
        "Möte och provperiod före långsiktig placering",
        "Ersättningskoordinering om chaufför inte är tillgänglig",
      ],
      idealFor: [
        "Familjer med skolålders barn",
        "Chefer och diplomater med oförutsägbara scheman",
        "Familjer som vill ha chaufför utan egen bil",
      ],
      imageAlt: "Professionell chaufför som kör familj säkert",
    },
    {
      id: "petCare",
      title: "Djurvård",
      summary:
        "Pålitlig vård för hundar, katter och andra husdjur när du arbetar, reser eller etablerar dig.",
      paragraphs: [
        "Husdjur är familj — att flytta med dem tillför extra komplexitet. Vår djurvårdspersonal matar, går promenader, sköter grundhygien och håller kontakt medan du arbetar eller reser.",
        "Vi matchar vårdgivare efter djurets storlek, temperament och rutiner. Nya expatfamiljer kan också få hjälp att hitta pålitliga veterinärer och djuraffärer.",
        "Du får regelbundna uppdateringar och anteckningar så du alltid vet hur det går.",
      ],
      includes: [
        "Daglig matning, promenader och lek",
        "Natt- eller längre vård på begäran",
        "Påminnelser om medicin och veterinärbesök",
        "Vårdgivare med erfarenhet av hundar och katter",
        "Flexibla scheman vid resor",
      ],
      idealFor: [
        "Expatfamiljer som flyttar med husdjur",
        "Yrkesutövare som reser regelbundet",
        "Familjer som behöver vikarie när hemtjänsten är ledig",
      ],
      imageAlt: "Djurvårdare med familjens hund",
    },
    {
      id: "homeManagement",
      title: "Hemadministration",
      summary:
        "Full koordinering så att ditt hem fungerar smidigt — leverantörer, scheman och daglig uppföljning.",
      paragraphs: [
        "I ett nytt land möts jobb, familj och vardagsliv: matinköp, leverantörsfakturor, städbokningar, personalscheman. Hemadministration samlar allt detta.",
        "Vi sätter upp rutiner för ditt hem — vem kommer när, vad som ska göras varje vecka och vilka lokala tjänster som är pålitliga. Särskilt värdefullt för större hem, bostäder med personal eller familjer med flera anställda.",
        "Som en professionell husförvaltare utan heltidsanställning: organiserad, proaktiv och fokuserad på att ditt hem ska vara effektivt och lugnt.",
      ],
      includes: [
        "Schemaläggning av hemtjänst och chaufförer",
        "Leverantörskontakter: städ, underhåll, trädgård",
        "Hantering av inköpslistor och matinköp",
        "Månatlig hemgenomgång och problemlösning",
        "En kontaktpunkt för alla Maid My Day-tjänster",
      ],
      idealFor: [
        "Större hushåll med flera anställda",
        "Chefer som vill slippa administrera hemmet själva",
        "Familjer som föredrar att slippa koordinera många leverantörer",
      ],
      imageAlt: "Välorganiserat modernt hem i Addis Abeba",
    },
    {
      id: "childcare",
      title: "Barnpassning & barnflickor",
      summary:
        "Varma, pålitliga barnflickor och barnvakter som håller dina barn trygga, aktiverade och omhändertagna hemma.",
      paragraphs: [
        "Att lämna sina barn hos någon ny är en av de svåraste delarna av att etablera sig i ett nytt land. Varje barnflicka hos Maid My Day intervjuas, referenskontrolleras och bedöms utifrån värme, tålamod och verklig erfarenhet av att ta hand om barn innan vi föreslår en matchning.",
        "Vi placerar vårdgivare för heltid, deltid och tillfälliga behov — från stöd med nyfödda till fritidsomsorg för äldre barn. Du bestämmer rutin, språk och husregler; vi hittar någon vars erfarenhet och temperament passar din familj, oavsett om det handlar om hjälp med måltider, läxor, lek eller skolskjuts.",
        "Efter placering håller vi kontakten för schemaändringar, feedback och ersättningar — så att du alltid har en pålitlig kontaktpunkt och lugn och ro medan du arbetar eller reser.",
      ],
      includes: [
        "Barnflickor granskade genom intervjuer, referenser och bakgrundskontroller",
        "Alternativ för nyfödda, småbarn och fritidsomsorg",
        "Stöd med måltider, hygien, lek och läxor",
        "Schemaläggning för heltid, deltid och tillfälliga behov",
        "Ersättningsgaranti och löpande koordinering",
      ],
      idealFor: [
        "Arbetande föräldrar och hushåll med två karriärer",
        "Nyanlända familjer som behöver pålitlig lokal barnpassning",
        "Föräldrar som behöver flexibel vård eller backup kring sitt schema",
      ],
      imageAlt: "Omtänksam barnflicka som läser med små barn",
    },
  ],
};

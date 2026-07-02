import type { DeepPartial, Translations } from "../../types";

export const servicesPageOm: DeepPartial<Translations>["servicesPage"] = {
  areas: {
    eyebrow: "Haguugduu",
    title: "Naannolee Finfinnee keessatti tajaajilnu",
    description:
      "Naannolee jireenyaa gurguddoo hunda keessatti — embasii, mana barumsaa idil-addunyaa fi damee daldalaa dhihoo — hojjettoota kaa'uu fi deeggarsa jijjiirraa kennina.",
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
    eyebrow: "Kuufamoota",
    title: "Kuufamoota jijjiirraa fi mana",
    description:
      "Filannoo jijjiiramaa torban dhufu ykn mana duraan ijaarame fooyyessan maatiiwwan alaaaf.",
  },
  whyItMatters: {
    eyebrow: "Maaliif Barbaachisa",
    title: "Hojjettoota qofa osoo hin taane — jireenya mana tasgabbaa'aa",
  },
  whyItMattersItems: [
    {
      title: "Bulchiinsa xiqqaa, jireenya guddaa",
      body: "Dilbata hojjettoota, daldaltoota fi hojiiwwan qindeessuu dhiisi. Qabiyyee hojii keenyaan qabna, isin hojii fi maatii irratti xiyyeeffattan.",
    },
    {
      title: "Wabii itti fufu",
      body: "Maamiltoonni hedduun konkolaachisaa ykn hojjettuu walfakkaataa waggaa hedduuf qabu. Walsimuuf yeroo dheeraaf hojjanna, jijjiirama saffisaa miti.",
    },
    {
      title: "Bakka quunnamtii tokko",
      body: "Hojjettoota mana, konkolaachisota, jijjiirraa fi bulchiinsa mana — hunda qunnamtii akkaawuntii Maid My Day tokkoon qindeessaa.",
    },
  ],
  serviceDetails: [
    {
      id: "housing",
      title: "Mana fi Jijjiirraa",
      summary:
        "Mana sirrii Finfinnee keessatti argachuu, mirkaneessuu fi qubachuuf deeggarsa guutuu.",
      paragraphs: [
        "Biyya haaraatti jijjiiramuu naannolee hin beekamne, seera kireeffannaa fi utility qindeessuu jechuudha — yeroo baay'ee hojii fi maatii waliin. Gareen jijjiirraa keenya qajeelchaa naannoo ta'ee, filannoo gara naannoo deemsa, filannoo nageenyaa fi jireenya keessan wajjin walsimu qara.",
        "Ilaalcha qindeessuu, abbaa manaa fi bulchaa qabeenya waliin walqunnamsiisuu fi waliigaltee kireeffannaa naannoo keessatti maal hammatu ni hubanna. Erga mallatteessitanii booda lojistikii seensaa, fuulli fudhachuu fi daldaltoota naannoo amanamoo ni gargaarra.",
        "Maatiiwwan yeroo ciccituun dhufan — kan embasii fi jijjiirraa NGO — kuufama barbaacha saffisaa kan oduu guyyaa guyyaa fi tarree gabaabaa xiyyeeffannoo keessan wajjin walsisu ni kennina.",
      ],
      includes: [
        "Qorannoo naannoo Bole, Kazanchis, CMC, Old Airport, Sarbet fi kanneen biroo",
        "Tarree qabeenya baajata, guddina fi nageenya wajjin walsisu",
        "Qindeessuu ilaalcha fi deeggarsa waliigaltee kireeffannaa ilaaluu",
        "Gargaarsa seensaa fi qajeelfama utility qindeessuu",
        "Bilbila kontiroolii ji'a jalqabaa keessatti",
      ],
      idealFor: [
        "Alaa haaraa dhufan fi maatii diplomaatii",
        "Ogummaa UN, NGO ykn daldalaaf jijjiiramu",
        "Maatiiwwan Finfinnee keessatti naannoo jijjiiran ykn fooyyessan",
      ],
      imageAlt: "Fuulli fi sanadoota mana haaraa Finfinnee",
    },
    {
      id: "housemaids",
      title: "Hojjettoota Mana Leenjifaman",
      summary:
        "Hojjettoota mana amanamoo qulqullina, miiccaa, nyaata bilchisuu fi eegumsa guyyaa guyyaa.",
      paragraphs: [
        "Hojjettuu gaariin akkaataa mana keessan itti dhaga'amu jijjiira — garuu magaalaa haaraa keessatti namni amanamu argachuun rakkisa. Hojjettuu Maid My Day hundi dura walga'ii, mirkaneessa wabii fi qormaata ogummaa darbu.",
        "Hojjettoota yeroo guutuu, walakkaa fi ala mana kaa'ama. Sagantaa, filannoo afaanii fi hojii ibsitu; muuxannoo isaanii wajjin walsisu filanna. Deeggarsi nyaata nyaata Itoophiyaa, nyaata idil-addunyaa ykn lamaanuu ta'uu danda'a.",
        "Kaa'umsa booda jijjiirama sagantaa, bakka buusuu fi yaadaaf qunnamtii keessan ni jirra.",
      ],
      includes: [
        "Qorannoo sadarkaa hedduu: walga'ii, wabii fi duuba ilaaluu",
        "Walgahii walbaruu dura kaa'umsa kamiyyuu",
        "Qulqullina, miiccaa, sibiila fi deeggarsa mana bilcheessaa",
        "Wabii bakka buusuu yoo walsiifannaa hin taane",
        "Qindeessuu itti fufu qunnamtii akkaawuntii keessan waliin",
      ],
      idealFor: [
        "Maatiiwwan ijoollee qaban gargaarsa guyyaa guyyaa barbaadan",
        "Maatiiwwan lamaan ogummaa sagantaa cimaa qaban",
        "Maamiltoota nyaata bilchisuu fi eegumsa mana nama tokko amanamu barbaadan",
      ],
      imageAlt: "Hojjettuu ogummaa qabu mana qulqulluu eegu",
    },
    {
      id: "drivers",
      title: "Konkolaachisota Ogummaa Qaban",
      summary:
        "Konkolaachisota nageenya qaban mana barumsaa, biiroo fi imala maatii Finfinnee keessatti.",
      paragraphs: [
        "Tiraafika Finfinnee fi karaa hin beekamne hojii salphaa illee rakkisaa taasisa. Konkolaachisotni keenya rekoodii konkolaachisaa nageenya qabu, beekumsa karaa naannoo fi amala ogummaa maatii waliin filataman.",
        "Konkolaachisaa maatii yeroo guutuu, ogummaa mana barumsaa walakkaa ykn geejjibaa qilleensaa yeroo muraasa barbaaddan — sagantaa, haala konkolaataa fi afaan keessan irratti hundaa'uun walsifanna. Maamiltoonni hedduun keenya maatii embasii fi NGO kan amantii fi amanamummaa dursanii barbaadan.",
        "Konkolaachisotni konkolaataa keessan waliin hojjechuu danda'u ykn jalqaba Itoophiyaa keessatti transport qindeessu yoo ta'e seera hojii naannoo ni gorsina.",
      ],
      includes: [
        "Konkolaachisota liisansii qaban muuxannoo Finfinnee mirkanaa'e",
        "Mana barumsaa, deemsa, hojii fi geejjibaa qilleensaa",
        "Yeroo fi sadarkaa dhiheessii ogummaa",
        "Walbaruu yaalii dura kaa'umsa yeroo dheeraaf",
        "Qindeessuu bakka bu'aa konkolaachisaan yoo hin argamne",
      ],
      idealFor: [
        "Maatiiwwan ijoollee umurii mana barumsaa qaban",
        "Hoggantoota fi diplomaatota sagantaa hin tilmaamamne qaban",
        "Maatiiwwan konkolaataa dhuunfaa malee konkolaachisaa amanamu barbaadan",
      ],
      imageAlt: "Konkolaachisaa ogummaa qabu transport maatii nageenya qabu",
    },
    {
      id: "petCare",
      title: "Eeyyama Bineensota",
      summary:
        "Eeyyama amanamaa saree, adurree fi bineensota biroo yeroo hojii, imala ykn qubachuu.",
      paragraphs: [
        "Bineensonni maatii dha — isaan waliin jijjiiramuun cimina dabalata. Hojjettoonni eeyyama bineensota keenya yeroo hojii ykn imala keessan nyaachisuu, deemsiisuu, suphaa bu'uuraa fi walqunnamtii kennu.",
        "Eegduu bineensota guddina, amala fi sirna isaanii waliin qabuu filanna. Maatiiwwan haaraa dhufan doktaroota bineensota fi madda bineensota amanamoo walqunnamsiisuu dandeenya.",
        "Odeeffannoo yeroo yeroon fi galmee harka kennuu bineensichi akkamitti akka jiru yeroo hunda ni beektu.",
      ],
      includes: [
        "Guyyaa guyyaan nyaachisuu, deemsiisuu fi taphachuu",
        "Eeyyama halkanii ykn yeroo dheeraaf gaafatame",
        "Yaadachiisa qoricha fi deemsa doktora waliin",
        "Eegduu muuxannoo saree fi adurree qaban",
        "Sagantaa imala keessan wajjin jijjiiramaa",
      ],
      idealFor: [
        "Maatiiwwan alaa bineensota waliin dhufan",
        "Ogummaa yeroo yeroo imalaaf hojjetan",
        "Maatiiwwan eeyyama bakka bu'aa yeroo hojjettoonni mana irraa boqotan barbaadan",
      ],
      imageAlt: "Eegduu bineensota saree maatii waliin",
    },
    {
      id: "homeManagement",
      title: "Bulchiinsa Mana",
      summary:
        "Qindeessuu guutuu mana keessan sirritti akka hojjetu — daldaltoota, sagantaa fi to'annoo guyyaa guyyaa.",
      paragraphs: [
        "Biyya haaraa keessatti hojii, maatii fi jireenya bulchuu yeroo wanti xixiqqoon walitti qabama: bittaa nyaataa, kaffaltii daldaltootaa, bilbila suphaa, sagantaa hojjettootaa. Bulchiinsi mana jeequmsa kana ni qindeessa.",
        "Qindeessituu sirna mana keessan hubatu ni kennina — eenyu yeroo kamii dhufa, torban torbaniin maal hojjetamuu qabu fi tajaajila naannoo kam amanamu. Kun garaa mana gurguddaa, qabeenya iddoo qaban ykn maatii hojjettoota hedduu qaban irratti baay'ee fayyada.",
        "Akka bulchaa mana ogummaa qabu yeroo guutuu osoo hin qabatin: qindaa'e, dursitee fi mana keessan gahumsa qabu fi tasgabbaa'aa taasisuuf xiyyeeffate.",
      ],
      includes: [
        "Qindeessuu sagantaa hojjettoota mana fi konkolaachisota",
        "Madda daldaltootaa: meeshaa qulqullina, suphaa, iddoo biqiltuu",
        "Bulchiinsa tarreeffama fi tarree bittaa nyaataa",
        "Gamaggama ji'a ji'aan mana fi furmaata rakkoo",
        "Bakka quunnamtii tokko tajaajila Maid My Day hundaaf",
      ],
      idealFor: [
        "Maatiiwwan gurguddoo hojjettoota hedduu qaban",
        "Hoggantoota hojii mana irraa harka ofii baasan barbaadan",
        "Maatiiwwan daldaltoota hedduu qindeessuu osoo hin barbaadne filatan",
      ],
      imageAlt: "Mana ammayyaa sirritti qindaa'e Finfinnee",
    },
    {
      id: "childcare",
      title: "Kunuunsa Ijoollee fi Guddiftuu",
      summary:
        "Guddiftuu fi eegduu ijoollee ho'aa fi amanamoo kan ijoollee keessan mana keessatti nagaa qaban, hirmaataa fi kunuunsaan eegan.",
      paragraphs: [
        "Ijoollee keessan nama haaraa waliin dhiisuun biyya adda ta'e keessatti qubachuu keessaa qaama ulfaataa keessaa tokko. Guddiftuun Maid My Day hundi osoo walsimsiisa hin dhiheessin dura ni gaafatama, wabiin isaanii ni mirkanaa'a, akkasumas ho'ina, obsaa fi muuxannoo dhugaa ijoollee kunuunsuu ni qoratama.",
        "Fedhii yeroo guutuu, yeroo walakkaa fi yeroo yerootiif eegdota kaa'ina — deeggarsa daa'ima dhalatee kaasee hanga kunuunsa mana barumsaa boodaa ijoollee gurguddoof. Isin sirna, afaan fi seera mana ni murteessitu; nuti immoo muuxannoo fi amalli isaanii maatii keessaniif kan mijatu barbaadna, kunis gargaarsa nyaataa, barnoota mana, yeroo taphaa ykn geejjiba mana barumsaa ta'uu danda'a.",
        "Kaa'umsa booda jijjiirama sagantaa, yaada fi bakka buusuuf qunnamtii keessan ni jirra — kanaaf yeroo hunda bakka quunnamtii amanamaa fi tasgabbii sammuu qabaattu yeroo hojjettan ykn imaltan.",
      ],
      includes: [
        "Guddiftuu walga'ii, wabii fi qorannoo duubaan qoratame",
        "Filannoo kunuunsa daa'ima dhalatee, mucaa xiqqaa fi mana barumsaa boodaa",
        "Deeggarsa nyaataa, qulqullina, yeroo taphaa fi barnoota mana",
        "Sagantaa yeroo guutuu, yeroo walakkaa fi yeroo yerootiin",
        "Wabii bakka buusuu fi qindeessuu itti fufu",
      ],
      idealFor: [
        "Warra hojjetan fi maatii ogummaa lamaan qaban",
        "Maatii haaraa dhufan kunuunsa ijoollee naannoo amanamaa barbaadan",
        "Warra kunuunsa jijjiiramaa ykn deeggarsa sagantaa isaanii waliin walsimu barbaadan",
      ],
      imageAlt: "Guddiftuu ijoollee xixiqqoo waliin dubbistu",
    },
  ],
};

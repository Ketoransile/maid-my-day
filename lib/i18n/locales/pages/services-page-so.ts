import type { DeepPartial, Translations } from "../../types";

export const servicesPageSo: DeepPartial<Translations>["servicesPage"] = {
  areas: {
    eyebrow: "Daboolid",
    title: "Xaafadaha aan ka adeegno Addis Ababa",
    description:
      "Shaqaale gelinaa oo taageerno xaafadaha degmo ee waaweyn — u dhow safaaradaha, dugsiyada caalamiga ah iyo degmooyinka ganacsiga.",
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
    eyebrow: "Xirmooyin",
    title: "Xirmooyinka degaanka iyo guriga",
    description:
      "Doorashooyin dabacsan haddii aad soo degayso usbuuca soo socda ama aad hagaajineyso guri hore loo dejiyay.",
  },
  whyItMatters: {
    eyebrow: "Waa maxay Muhiim u ah",
    title: "In ka badan shaqaale — nolol guri oo deggan",
  },
  whyItMattersItems: [
    {
      title: "Maamul yar, nolol badan",
      body: "Jooji inaad Sabtida ku qaadato isku xirka shaqaalaha, alaab-qeybiyeyaasha iyo hawlaha. Annagu hawsha maamulka ayaan qabnaa, adiguna shaqada iyo qoyska diiradda saar.",
    },
    {
      title: "Joogteyn lagu kalsoon yahay",
      body: "Macaamiil badan ayaa haysta isla darawalka ama shaqaalaha guriga sanado badan. Waxaan u shaqeynaa iswaafajin muddada dheer, ma aha beddelid degdeg ah.",
    },
    {
      title: "Hal xiriir",
      body: "Shaqaale guri, darawal, degaan iyo maamul guri — wax walba isku xir hal xiriir Maid My Day.",
    },
  ],
  serviceDetails: [
    {
      id: "housing",
      title: "Guri & Degaan",
      summary:
        "Taageero dhammaystiran oo lagu helo, lagu xaqiijiyo loona dego guri sax ah Addis Ababa.",
      paragraphs: [
        "U guuritaanka waddan cusub waxay la macno tahay xaafado aan la aqoon, caadooyinka kirada iyo dejinta adeegyada — inta badan shaqo iyo qoys isku mar. Kooxdayada degaanku waxay u shaqeysaa sidii hagaha deegaanka, doorashooyinka u xaddidaysa xaafadaha ku habboon safarkaaga, doorbidka amniga iyo qaabka nolosha.",
        "Waxaan isku xirnaa booqashooyinka, wada shaqeynaa mulkiilayaasha iyo maamulayaasha guryaha, waxaanan kaa caawinaa inaad fahanto waxa ku jira heshiisyada kirada maxalliga ah. Markaad saxiixdo, waxaan taageernaa gelitaanka: furayaasha, hagitaan alaab iyo soo bandhigida alaab-qeybiyeyaal maxalli ah oo lagu kalsoon yahay.",
        "Qoysaska leh jadwal adag — caadiga ah howlgallada safaaradda iyo wareegga NGO — waxaan bixinaa xirmooyin raadinta degdegga ah oo leh warbixin maalmeed iyo liis gaaban oo ku habboon baahidaada.",
      ],
      includes: [
        "Baadhitaanka xaafadaha Bole, Kazanchis, CMC, Old Airport, Sarbet iyo kuwo kale",
        "Liis guryo ku habboon miisaaniyadda, cabbirka iyo baahida amniga",
        "Isku xirka booqashooyinka iyo taageero dib u eegis kirada",
        "Caawimaad gelitaanka iyo hagitaan dejinta adeegyada",
        "Wicitaanno kormeer bisha koowaad ka dib",
      ],
      idealFor: [
        "Ajaanibta cusub iyo qoysaska diplomaasiyadeed",
        "Xirfadlayaasha u guuraya UN, NGO ama shaqo shirkadeed",
        "Qoysaska isbedelaya ama hagaajinaya xaafadooda Addis gudaheeda",
      ],
      imageAlt: "Furayaal iyo dukumentiyo guri cusub Addis Ababa",
    },
    {
      id: "housemaids",
      title: "Shaqaale Guri Tababaran",
      summary:
        "Shaqaale guri lagu kalsoon yahay oo nadiifin, dhaqid, karin iyo daryeel guri maalmeed ah.",
      paragraphs: [
        "Shaqaale guri wanaagsan ayaa beddela dareenka gurigaaga — laakiin helitaanka qof lagu kalsoon yahay magaalo cusub way adag tahay. Shaqaale guri kasta oo Maid My Day ah waxay maraan wareysi, hubinta tixraaca iyo qiimeyn waxqabad ka hor soo jeedinta.",
        "Waxaan gelinaa shaqaale waqti buuxa, waqti dhiman iyo nidaamka ka baxsan guriga. Waxaad qeexdaa jadwalka, doorbidka luqadda iyo waajibaadka; waxaan helnaa musharaxiin khibradoodu la jaanqaaddo. Taageerada karinta waxay ku jiri kartaa cunto Itoobiyaan, cunto caalami ah ama labadaba.",
        "Gelinta ka dib waxaan ahaanaynaa xiriirkaaga jadwal isbeddel, beddelid iyo jawaab celin — si arrimuhu si degdeg ah u xalliyaan.",
      ],
      includes: [
        "Hubin marxalado badan: wareysi, tixraac iyo xaqiijin asalka",
        "Kulmo hordhac ka hor gelin kasta",
        "Nadiifin, dhaqid, dhejis iyo taageero jikada",
        "Dammaanad beddelid haddii iswaafajintu khaldan tahay",
        "Isku xir joogto ah xiriirka akoonkaaga",
      ],
      idealFor: [
        "Qoysaska carruur leh oo u baahan caawimaad maalmeed joogto ah",
        "Qoysaska laba xirfadood leh jadwal adag",
        "Macaamiisha doonaya karin iyo daryeel guri hal qof lagu kalsoon yahay",
      ],
      imageAlt: "Shaqaale guri xirfad leh oo guri nadiif ah ilaaliya",
    },
    {
      id: "drivers",
      title: "Darawallo Xirfad leh",
      summary:
        "Darawallo ammaan ah oo waqtiga ku haya dugsiga, xafiiska iyo safarada qoyska Addis Ababa.",
      paragraphs: [
        "Taraafikada Addis iyo waddooyinka aan la aqoon xitaa hawlaha fudud way adkeynayaan. Darawaladeena waxaa loo doortaa diiwaan wadis oo ammaan ah, aqoon waddo maxalli ah iyo dhaqan xirfad leh qoysaska.",
        "Haddii aad u baahan tahay darawal qoys waqti buuxa, khabiir dugsiga waqti dhiman ama gaadiid garoon diyaaradeed — waxaan ku habeynaa jadwalkaaga, xaaladda gaadhiga iyo luqadda. Macaamiil badan waa qoysaska safaaradda iyo NGO ee u baahan qarsoodi iyo isku halaynta.",
        "Darawaladu waxay la shaqeyn karaan gaadhigaaga ama waxaan kugula talin karnaa caadooyinka shaqaaleynta maxalliga ah haddii aad markii ugu horreysay abaabuleyso gaadiidka Itoobiya.",
      ],
      includes: [
        "Darawallo ruqsad leh khibrad la xaqiijiyay Addis Ababa",
        "Dugsiga, safarka, hawlaha iyo gaadiidka garoonka",
        "Heerar waqtiga iyo soo bandhig xirfad leh",
        "Hordhac tijaabo ka hor gelin muddada dheer",
        "Isku xirka beddelka haddii darawalkaagu aanu diyaar ahayn",
      ],
      idealFor: [
        "Qoysaska carruurta dugsiga ah leh",
        "Maamulayaasha iyo diplomaasiyiinta jadwal aan la saadaalin karin",
        "Qoysaska aan haysan gaadhi shaqsiyeed oo u baahan darawal lagu kalsoon yahay",
      ],
      imageAlt: "Darawal xirfad leh oo gaadiid qoys oo ammaan ah bixiya",
    },
    {
      id: "petCare",
      title: "Daryeel Xayawaanka",
      summary:
        "Daryeel lagu kalsoon yahay ee eyda, bisadaha iyo xayawaanka kale inta aad shaqeyso, safarto ama degayso.",
      paragraphs: [
        "Xayawaanku waa qoys — la guuritaankoodu wuxuu daraa culeys dheeri ah. Shaqaalaheenna daryeelka xayawaanka waxay bixiyaan quudin, socod, taageero nadiifin aasaasi ah iyo saaxiibtinimo inta aad shaqada ama safarka ku jirto.",
        "Waxaan ku habeynaa daryeelayaal raaxo u leh cabbirka, dabeecadda iyo caadada xayawaankaaga. Qoysaska cusub waxaan sidoo kale kaa caawin karnaa inaad la xiriirto dhakhaatiirta xayawaanka iyo alaab-qeybiyeyaasha lagu kalsoon yahay.",
        "Warar joogto ah iyo qoraallo gacmo kala wareegid cad waxay kaa dhigaan inaad mar walba ogaato sida xayawaankaagu u socdo.",
      ],
      includes: [
        "Quudin, socod iyo ciyaar maalmeed",
        "Daryeel habeen ama joogitaan dheer marka la codsado",
        "Xusuusin daawo iyo la socod booqasho dhakhtar",
        "Daryeelayaal khibrad leh ee eyda iyo bisadaha",
        "Jadwal dabacsan oo ku habboon qorshaha safarkaaga",
      ],
      idealFor: [
        "Qoysaska ajaanibta ah ee xayawaan la yimid",
        "Xirfadlayaasha si joogto ah u safra shaqada",
        "Qoysaska u baahan daryeel beddel marka shaqaalaha gurigu fasax yihiin",
      ],
      imageAlt: "Daryeele xayawaan oo ey qoys la jooga",
    },
    {
      id: "homeManagement",
      title: "Maamulka Guriga",
      summary:
        "Isku xir dhammaystiran si gurigaagu si habsami leh u socdo — alaab-qeybiyeyaal, jadwal iyo kormeer maalmeed.",
      paragraphs: [
        "Markaad maamusho shaqada, qoyska iyo nolosha waddan cusub, waxyaabaha yaryar way isu ururaan: dukaameysi, lacag bixin, wicitaanno dayactir, jadwal shaqaale. Maamulka gurigu wuxuu keena nidaam xagga jahwareerkaas.",
        "Waxaan u qoondeynaa isku xirayaal fahmaya garaaca gurigaaga — yaa goorma yimaada, waxa toddobaadle ah u baahan iyo adeegyada maxalliga ah ee lagu kalsoon yahay. Tani waxay si gaar ah u faa'iidaysaa guryaha waaweyn, hantida leh beero ama qoysaska leh shaqaale badan.",
        "U fiirso sidii maamule guri khibrad leh adigoon shaqaale waqti buuxa ah qabsan: habaysan, horumarsan oo diiradda saaraya guri hufan oo deggan.",
      ],
      includes: [
        "Isku xirka jadwalka shaqaalaha guriga iyo darawalada",
        "Helitaanka alaab-qeybiyeyaal: alaab nadiifin, dayactir, beero",
        "Maamul kayd iyo liiska dukaameysi",
        "Kormeer guri bille ah iyo xallinta arrimaha",
        "Hal xiriir dhammaan adeegyada Maid My Day",
      ],
      idealFor: [
        "Qoysaska waaweyn ee leh shaqaale badan",
        "Maamulayaasha doonaya hawlgal guri gacmo la'aan",
        "Qoysaska doorbida hal isku xirayaal halkii ay isku xiri lahaayeen bixiyeyaal badan",
      ],
      imageAlt: "Guri casri ah oo si fiican loo habeeyay Addis Ababa",
    },
  ],
};

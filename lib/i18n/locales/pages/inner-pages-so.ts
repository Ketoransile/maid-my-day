import type { DeepPartial, Translations } from "../../types";

export const howItWorksPageSo: DeepPartial<Translations>["howItWorksPage"] = {
  detailedProcess: {
    eyebrow: "Tallaabo Tallaabo",
    title: "Safarkaaga Maid My Day",
    description: "Toddoba marxaladood oo cad laga bilaabo weydiinta ilaa taageero muddada dheer.",
  },
  detailedProcessSteps: [
    { step: "01", title: "Baahidaada noo sheeg", description: "Qoyskaaga, goobtaada Addis (ama goorta aad timaado) iyo taageerada aad u baahan tahay.", duration: "Maalin 1" },
    { step: "02", title: "Qiimeyn baahida", description: "Jadwal, luqad, guri gudaha/ dibadda iyo baahiyaha gaarka ah.", duration: "Maalin 1–2" },
    { step: "03", title: "Liis gaaban", description: "Kooxdayadu waxay soo diraysaa liis 24–48 saac gudahood.", duration: "Maalin 2–3" },
    { step: "04", title: "Kulanka hordhaca", description: "Musharaxiinta waad la kulantaa ka hor go'aanka.", duration: "Maalin 3–5" },
    { step: "05", title: "Tijaabo & gelin", description: "Muddada tijaabada labada dhinac way xaqiijiyaan iswaafajinta.", duration: "Toddobaad 1" },
    { step: "06", title: "Taageero degganaansho", description: "Toddobaadyada koowaad waxaan hubinaa in wax walba si fiican u socdaan.", duration: "Toddobaad 2–4" },
    { step: "07", title: "Wada shaqeyn joogto ah", description: "Beddelid, shaqaale dheeri ah iyo maamul guri — xiriirkaagu wuu sii jiraa.", duration: "Joogto" },
  ],
  first30Days: {
    eyebrow: "30 Maalmood Koowaad",
    title: "Sida bisha koowaad u egtahay",
    description: "Jadwal caadi ah qoysaska Addis yimaada ama shaqaale cusub ku daraya.",
    phases: [
      { week: "Toddobaad 1", title: "Imaatinka & xiriirka", items: ["Codsigaaga dir", "Hel liiska & qorshee kulamo", "Bilow raadinta guri haddii degaan"] },
      { week: "Toddobaad 2", title: "Iswaafajin & gelin", items: ["Dhammaystir tijaabada", "Saxiix kirada haddii aad u guurayso", "Deji jadwalka guriga"] },
      { week: "Toddobaad 3–4", title: "Deganaansho & hagaajin", items: ["Kulanka koowaad", "Hagaaji jadwal", "Ku dar daryeel xayawaan ama maamul"] },
    ],
  },
  prepare: {
    eyebrow: "Ka Hor Intaadan Nala Soo Xiriirin",
    title: "Waxa diyaar u ah inaad haysato",
    description: "Inta badan ee aad horay u sheegto, si degdeg ah ayaan kuu helnaa shaqaalaha saxda ah.",
  },
  preparationChecklist: [
    "Taariikhda imaatinka ama xaafaddaada hadda",
    "Cabbirka qoyska iyo carruurta/xayawaanka",
    "Jadwalka la doorbiday (waqti buuxa, dhiman, gudaha/dibadda)",
    "Luqadda shaqaalaha",
    "Waajibaadka: karin, nadiifin, waddooyinka, dugsiga",
    "Miisaaniyadda iyo waqtiga",
  ],
  processFaq: {
    eyebrow: "Su'aalaha Caadiga ah",
    title: "Jawaabo degdeg ah oo ku saabsan bilowga",
    description: "Waxa macaamiisha inta badan weydiiyaan kulanka koowaad ka hor.",
  },
  processFaqItems: [
    { question: "Imisa degdeg ah ayaad shaqaale gelin kartaa?", answer: "Inta badan 24–48 saac liis ayaad helaysaa. Xaaladaha degdegga ah waa la mudnaan siiyaa." },
    { question: "Haddii iswaafajintu khaldan tahay?", answer: "Waxaan bixinaa dammaanad beddelid lacag gelin dheeraad ah la'aan." },
    { question: "Ma u baahanahay inaan ka hor imaatinka la xiriiro?", answer: "Maya. Qoys badan ayaa nala soo xiriira ka hor imaatinka." },
  ],
};

export const whyUsPageSo: DeepPartial<Translations>["whyUsPage"] = {
  whoWeServe: {
    eyebrow: "Cidda aan u Adeegno",
    title: "Taageero guri xirfadlayaasha caalamiga ah",
    description: "Maid My Day ma aha wakaalad shaqaale caadi ah. Waxaan ku takhasusay qoysaska caalamiga ah ee Addis.",
  },
  whoWeServeItems: [
    { title: "Diplomaasiyiin & Shaqaalaha Safaaradda", description: "Qarsoodi, amni iyo shaqaale fahmaya guryaha protocol-ka leh." },
    { title: "UN & NGO", description: "Gelin degdeg ah iyo shaqaale la jaanqaada jadwal aan la saadaalin karin." },
    { title: "Ajaanib Shirkadeed", description: "Maamulayaasha u baahan darawal iyo shaqaale guri aan Sabtida lumin." },
    { title: "Qoysaska Caalamiga ah", description: "Waalidiinta carruurta dugsiga cusub gelinaya iyagoo guri nadiif ah haysta." },
  ],
  standards: {
    eyebrow: "Heerarkeenna",
    title: "Sida aan kalsoonida u kasbano",
    description: "Mabaadi'dan waa isku mid — darawal berri ama degaan lix toddobaad ah.",
  },
  standardsItems: [
    { title: "Hubin adag", detail: "Wareysi, tixraac iyo xaqiijin asalka ka hor kulanka." },
    { title: "Ogolaanshaha macmiilka", detail: "Gelin ma bilaabato ogolaansho cad la'aan." },
    { title: "Dammaanad beddelid", detail: "Mid ka fiican lacag gelin dheeraad ah la'aan." },
    { title: "Isgaarsiin cad", detail: "Xiriir gaar ah iyo jawaabo daacad ah." },
    { title: "Khibrad maxalli ah", detail: "Xaafadaha Addis, kirada, taraafikada iyo alaab-qeybiyeyaasha." },
    { title: "Xiriir muddada dheer", detail: "Macaamiil badan waxay haystaan isla shaqaalaha sanado badan." },
  ],
  story: {
    eyebrow: "Habkeenna",
    title: "Dadka marka hore, gelinta marka xigta",
    paragraphs: [
      "Maid My Day waxaa la aasaasay sababtoo ah degganaanshaha Addis wuu ka adkaa sidii loo baahnaa.",
      "Maanta waxaan taageernaa qoysaska diplomaasiyadeed, bani'aadamnimo iyo shirkadaha.",
      "Dulqaadkani wuxuu muujiyaa joogteynta — macaamiisha hore wali way nala soo xiriiraan.",
    ],
  },
};

export const faqPageSo: DeepPartial<Translations>["faqPage"] = {
  moreAnswers: {
    eyebrow: "Jawaabo Dheeraad ah",
    title: "Ku baadh mawduuc ahaan",
    description: "Su'aalaha ka hor iyo ka dib gelinta — qandaraasyada, biilasha, waqtiga degaanka.",
  },
  extendedFaqs: [
    { category: "Bilowga", items: [
      { question: "Ma jiraa qandaraas ugu yar?", answer: "Shuruudaha way kala duwan yihiin. Tijaabo toddobaad ah ka dib heshiis bille ah." },
      { question: "Shaqaale ku meel gaar ah?", answer: "Haa. Qoysaska booqda iyo daboolka ku meel gaarka ah." },
      { question: "Warqadaha shaqada ma caawisaan?", answer: "Waxaan ku hagaa caadooyinka maxalliga ah waxaanan ku xirnaa kheyraadka saxda ah." },
    ]},
    { category: "Shaqaale & Hubin", items: [
      { question: "Tababarka shaqaalaha guriga?", answer: "Nadiifin, dhaqid, jikada iyo isgaarsiinta ayaa la qiimeeyaa." },
      { question: "Darawallada dugsiyada caalamiga ah?", answer: "Haa. Bole, Old Airport iyo CMC." },
      { question: "Shaqaale Ingiriisi ku hadla?", answer: "Haa. Luqadda waa qayb ka mid ah qiimeynta." },
    ]},
    { category: "Qiimaha", items: [
      { question: "Qiimaha sidee loo qaabeyaa?", answer: "Mushaharka waa adiga iyo shaqaalaha. Maid My Day waxay qaadataa lacag gelin iyo isku xir." },
      { question: "Lacag qarsoon?", answer: "Maya. Wax walba waa la caddeeyaa ka hor heshiiska." },
      { question: "Biilasha shirkadda?", answer: "Waxaan ka wada hadli karnaa macaamiisha ururada." },
    ]},
    { category: "Degaan", items: [
      { question: "Goorma ayaan la xiriiraa?", answer: "Afarta ilaa lix toddobaad hore xirmooyinka buuxa. Shaqaale keliya 24 saac gudahood." },
      { question: "Hore Addis joogaa laakiin shaqaalaha ma jecli?", answer: "Haa. Beddelid degdeg ah ayaan bixinaa." },
      { question: "Alaabta guriga?", answer: "Hagitaan iyo alaab-qeybiyeyaal. Ku iibsi xirmooyinka premium." },
    ]},
    { category: "Taageero Joogto ah", items: [
      { question: "Jadwalkaygu isbeddelay?", answer: "La xiriir isku xirahaaga Maid My Day." },
      { question: "Dabool fasax?", answer: "Haa, ogeysiis hore." },
      { question: "Jawaab celin shaqaalaha?", answer: "Telefoon ama iimayl — waxaan xallinaa si cadaalad ah." },
    ]},
  ],
  stillWondering: {
    title: "Su'aalaha wicitaanka koowaad",
    items: [
      "Darawal keliya ma caawisaan?",
      "Bisha soo socota goorma aan bilaabaa?",
      "Ma la shaqeysaan xeerarka safaaradda?",
      "Shaqaaluhu Ingiriisi ma ku hadlaan carruurta?",
      "Baahiduhu isbeddelo maxaa dhacaya?",
    ],
  },
};

export const contactPageSo: DeepPartial<Translations>["contactPage"] = {
  afterContact: {
    eyebrow: "Maxaa Xiga",
    title: "Ka dib markaad fariin dirtid",
    description: "Ma jiro sanduuq madow. Sida aan u maareyno weydiimaha qoysaska ajaanibta ah.",
  },
  afterContactSteps: [
    { title: "Fariintaada waan akhrinaa", description: "Isku xirayaashu wuxuu eegaa baahida guriga — isla maalinta shaqada." },
    { title: "24 saac gudahood ayaan kugu jawaabnaa", description: "Jawaab shaqsiyeed — ma jiro jawaab otomaatig ah." },
    { title: "Qorshahaaga waan dhisnaa", description: "Liis, booqasho ama kulamo loo qorsheeyay." },
    { title: "Waannu joognaa", description: "Isla kooxdu waxay maamushaa hagaajinta gelinta ka dib." },
  ],
  office: {
    eyebrow: "Xafiiska & Helitaanka",
    title: "Sida aad nala soo xiriiri karto",
    description: "Addis Ababa ku salaysan, magaalada oo dhan. Soomaali iyo Ingiriisi — Faransiis haddii loo baahdo.",
    labels: { officeHours: "Saacadaha xafiiska", responseTime: "Waqtiga jawaabta", languages: "Luuqadaha", coverage: "Daboolid" },
    hours: "Isniin – Sabti, 8:30 Subaxnimo – 6:00 Galabnimo (EAT)",
    response: "Inta badan 24 saac gudahood",
    languages: "Soomaali, Ingiriisi iyo Faransiis",
    coverage: "Dhammaan xaafadaha degmo ee Addis Ababa",
  },
  prepTips: {
    eyebrow: "Ka Hor Intaadan Qorin",
    title: "Talooyin jawaab degdeg ah",
    description: "Faahfaahintan ku dar fariintaada jawaab fiican ka hel.",
  },
  prepTipsItems: [
    { title: "Waqtigaaga sheeg", detail: "Imaatinka, kirada ama degdegga shaqaalaha." },
    { title: "Gurigaaga sharax", detail: "Carruur, xayawaan, gudaha/dibadda, luqadaha." },
    { title: "Waajibaadka muhiimka ah", detail: "Dugsiga, karin, nadiifin, socodka xayawaanka." },
    { title: "Xaafaddaada", detail: "Bole, Kazanchis, CMC — saameyn ku yeelata gelinta." },
  ],
};

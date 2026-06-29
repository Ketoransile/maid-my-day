import type { DeepPartial, Translations } from "../types";
import { servicesPageAm } from "./pages/services-page-am";
import { howItWorksPageAm } from "./pages/how-it-works-page-am";
import { whyUsPageAm } from "./pages/why-us-page-am";
import { faqPageAm } from "./pages/faq-page-am";
import { contactPageAm } from "./pages/contact-page-am";

/** Amharic translations — merged over English base */
export const amOverrides: DeepPartial<Translations> = {
  nav: {
    home: "መነሻ",
    services: "አገልግሎቶች",
    howItWorks: "እንዴት ይሰራል",
    whyUs: "ለምን እኛ",
    faq: "ተደጋጋሚ ጥያቄዎች",
    contact: "አግኙን",
    contactUs: "አግኙን",
    openMenu: "ምናሌ ክፈት",
    allLinks: "ሁሉም አገናኞች",
    language: "ቋንቋ",
    submenu: {
      overview: "አጠቃላይ እይታ",
      getStarted: "ይጀምሩ",
      learnMore: "ተጨማሪ ይወቁ",
    },
    extended: {
      about: "ስለ Maid My Day",
      careers: "ሙያዎች",
      partners: "አጋር ይሁኑ",
      resources: "መርጃዎች",
      blog: "ብሎግ",
      press: "ፕሬስ",
    },
  },
  hero: {
    eyebrow: "Maid My Day ቤት እና ሽፋን አገልግሎት",
    title: "በአዲስ አበባ ያለ ጭንቀት ይኑሩ",
    lead: "ለውጭ ዜጎች እና ለአለም አቀፍ ባለሙያዎች የታመኑ የቤት ሰራተኞች፣ አሽከርካሪዎች፣ የቤት እንስሳት እንክብካቤ እና የሽፋን አገልግሎቶች።",
    contactUs: "አግኙን",
    ourServices: "አገልግሎቶቻችን",
    scrollHint: "ወደ ቀጣይ ክፍል ይሸብልሉ",
  },
  common: {
    brandName: "Maid My Day",
    brandTagline: "Maid My Day ቤት እና ሽፋን አገልግሎት",
    location: "አዲስ አበባ፣ ኢትዮጵያ",
    phone: "+251 911 000 000",
    email: "hello@maidmyday.com",
    copyright: "© {year} Maid My Day ቤት እና ሽፋን አገልግሎት። ሁሉም መብቶች የተጠበቁ ናቸው።",
    whatsIncluded: "ምን ይካተታል",
    idealFor: "ለማን ነው",
    ourPromise: "ቃላችን",
    promiseQuote:
      "እኛ ወደ ቤትዎ የምንልከውን ሰው በቤታችንም እስከሚላክ ድረስ አንመርጥም። ይህ መመዘን ቤተሰቦችን ለዓመታት አብረውን ይጠብቃል።",
    promiseAttribution: "— Maid My Day የማስቀመጥ ቡድን፣ አዲስ አበባ",
    cta: {
      contactUs: "አግኙን",
      viewServices: "አገልግሎቶችን ይመልከቱ",
      getStarted: "ይጀምሩ",
      exploreAllServices: "ሁሉንም አገልግሎቶች ይመልከቱ",
      callUs: "ይደውሉልን",
      howItWorks: "እንዴት ይሰራል",
      whyChooseUs: "ለምን እኛን ይምረጡ",
      readFaqs: "ጥያቄዎችን ያንብቡ",
      ourServices: "አገልግሎቶቻችን",
    },
  },
  trustBar: {
    items: [
      { label: "በጥንቃቄ የተመረጡ ሰራተኞች" },
      { label: "5.0 አማካይ ደረጃ" },
      { label: "በ24 ሰዓት ምላሽ ዋስትና" },
      { label: "500+ ቤተሰቦች ተገልገለዋል" },
    ],
  },
  services: {
    eyebrow: "አገልግሎቶቻችን",
    title: "ቤትዎ በአዲስ አበባ የሚፈልገው ሁሉ",
    description: "ለውጭ ቤተሰቦች ባለሙያ የቤት እና የሽፋን ድጋፍ።",
    items: [
      {
        id: "housing",
        title: "ቤት እና ሽፋን",
        description: "አዲስ ቤትዎን ለመፈለግ እና ለመ settled ማድርገት ባለሙያ ድጋፍ።",
        imageAlt: "አዲስ ቤት የሽፋን ቁልፎች",
      },
      {
        id: "housemaids",
        title: "የተሰለጠኑ የቤት ሰራተኞች",
        description: "ለጽዳት፣ ለልብስ ማጠብ፣ ለማብሰል እና ለዕለታዊ ቤት እንክብካቤ የታመኑ ሰራተኞች።",
        imageAlt: "ባለሙያ የቤት ሰራተኛ ቤትን እንክብካቤ የሚያደርግ",
      },
      {
        id: "drivers",
        title: "ባለሙያ አሽከርካሪዎች",
        description: "ለግል እና ለቤተሰብ ትራንስፖርት ደህንነቱ የተጠበቀ እና የታመነ አሽከርካሪ።",
        imageAlt: "ባለሙያ አሽከርካሪ ከተሳይ ጋር",
      },
      {
        id: "petCare",
        title: "የቤት እንስሳት እንክብካቤ",
        description: "በስራ ወይም በጉዞ ላይ ሳሉ ለቤት እንስሳትዎ የታመነ እንክብካቤ።",
        imageAlt: "ቤት እንስሳት እንክብካቤ",
      },
      {
        id: "homeManagement",
        title: "የቤት አስተዳደር",
        description: "ቤትዎ በተሳካ ሁኔታ እንዲሰራ ሙሉ ድጋፍ።",
        imageAlt: "በጥንቃቄ የተደራጁ ዘመናዊ ቤት",
      },
    ],
  },
  howItWorks: {
    eyebrow: "ሂደቱ",
    title: "መጀመር ቀላል ነው",
    steps: [
      {
        number: "01",
        title: "ምን እንደሚፈልጉ ይንገሩን",
        description:
          "ቅጽበታዊ የእውቂያ ቅጹን ይሙሉ ወይም በቀጥታ ይደውሉልን። በ24 ሰዓት ውስጥ እንመለስልዎታለን።",
      },
      {
        number: "02",
        title: "ከትክክለኛው ቡድን ጋር እንያያይዎታለን",
        description:
          "ለቤትዎ፣ ለመርሃግብርዎ እና ለምርጫዎችዎ የሚስማሙ ሰራተኞችን በጥንቃቄ እንመርጣለን።",
      },
      {
        number: "03",
        title: "በማመን ይ settled ይሁኑ",
        description:
          "ቤትዎ ይከናወናል፣ ቤተሰብዎ ይጠበቃል፣ ሕይወትዎ በተሳካ ሁኔታ ትሄዳለች።",
      },
    ],
  },
  whyUs: {
    eyebrow: "ለምን Maid My Day?",
    title: "ለውጭ ቤተሰቦች የታመነ ድጋፍ",
    description:
      "አዲስ ከተማ ላይ ለመ settled መስራት ምን እንደሚፈለግ እናውቃለን። Maid My Day ባለሙያ እና አስተማማኝ የቤት እና የሽፋን አገልግሎት ይሰጣል።",
    trustPoints: [
      {
        title: "በጥንቃቄ የተመረጡ ሰራተኞች",
        detail: "እያንዳንዱ የቤት ሰራተኛ፣ አሽከርካሪ እና ረዳት ከመሰማራቱ በፊት ይመረመራል።",
      },
      {
        title: "ባለሙያ ደረጃ",
        detail: "ለቤትዎ ቡድን ወጥነት ያለው ስልጠና እና ግልጽ ተስፋ።",
      },
      {
        title: "አስተማማኝ አገልግሎት",
        detail: "ሳምንት በሳምንት ላይ የሚታመኑበት ድጋፍ።",
      },
      {
        title: "ለውጭ ዜጎች ተስማሚ ድጋፍ",
        detail: "ለዲፕሎማቶች፣ ለኤምባሲ ሰራተኞች እና ለአለም አቀፍ ባለሙያዎች ተዘጋጅቷል።",
      },
      {
        title: "ብጁ እገዛ",
        detail: "ለቤትዎ፣ ለመርሃግብርዎ እና ለቤተሰብዎ የተስማራ አገልግሎት።",
      },
    ],
    imageAlt: "በአዲስ አበባ ደስተኛ ቤተሰብ",
    stats: { families: "ቤተሰቦች", rating: "ደረጃ", years: "ዓመታት" },
  },
  testimonials: {
    eyebrow: "የደንበኞች ታሪኮች",
    title: "ደንበኞቻችን ምን ይላሉ?",
    description: "በአዲስ አበባ ለመ settled የረዱን ውጭ ባለሙያዎች እና ቤተሰቦች ትክክለኛ ልምዶች።",
    items: [
      {
        name: "James Holloway",
        role: "የተመደበር ምክር ቤት፣ አዲስ አበባ",
        quote: "በአዲስ ከተማ የቤት ሰራተኛ ማግኘት አይቻልም ይመስል ነበር። Maid My Day በጥቂት ቀናት ውስጥ ሰው አቀረበ። ትልቅ ማረፊያ ነበር።",
      },
      {
        name: "Sophie Renard",
        role: "የፈረንሳይ ኤምባሲ ሰራተኛ",
        quote: "አሽከርካሪያችን ለሁለት ዓመታት ከእኛ ጋር ነው። ተሳሪ፣ ደህንነቱ የተጠበቀ እና ደግ። ለትምህርት ቤት ትራንስፖርት ትክክለኛው ነበር።",
      },
      {
        name: "Marcus Webb",
        role: "የኤንጂኦ ዳይሬክተር፣ 2023 ሽፋን",
        quote: "የሽፋን ድጋፍ ቀላል ነበር። አፓርትመንት፣ ዩቲሊቲ እና ለውሻችን የቤት እንስሳት እንክብካቤ አዘጋጁ።",
      },
      {
        name: "Elena Vasquez",
        role: "ዲፕሎማቲክ አታቸ፣ EU",
        quote: "ከመጀመሪያው ጥሪ ቤታችንን ተረዱ። የላኩው የቤት ሰራተኛ ግላዊ፣ ደህንነቱ የተጠበቀ እና እስካሁን ከእኛ ጋር ነው።",
      },
      {
        name: "David Okonkwo",
        role: "የኩርፖሬት ውጭ ባለሙያ፣ ቦሌ",
        quote: "አሽከርካሪ እና የቤት አስተዳደር በአስቸኳይ እንደሚፈልግ ነበር። በአንድ ሳምንት ውስጥ አቀረቡ። ከዚያ በላይ ማንም አይጠይቅ።",
      },
      {
        name: "Amara Chen",
        role: "ምሕዴራዊ ተመራማሪ፣ 2024 ሽፋን",
        quote: "ብቻ ወደ አዲስ አበባ መጣሁ እና ተጨንቄ ነበር። የመጀመሪያውን ወር ተጋልጠው አደረጉልኝ። ሞቅ ያለ እና ቀጥተኛ ነበር።",
      },
    ],
  },
  mission: {
    eyebrow: "ተልዕኮአችን",
    title: "ለውጭ ቤተሰቦች በአዲስ አበባ ሕይወትን ቀላል ማድረግ",
    description: "በአዲስ አበባ ሕይወትን ቀላል፣ ንጹህ እና ምቹ ለማድረግ በታመነ የቤት እና የሽፋን ድጋፍ።",
    body: "Maid My Day ለመ settled የሚያስቸግረውን ጭንቀት ለማስወገድ ተፈጥሯል። ለውጭ ባለሙያዎች፣ ዲፕሎማቶች እና ኤምባሲ ሰራተኞች በእያንዳንዱ ደረጃ እንደራሮቻለን።",
    mainImageAlt: "በአዲስ አበባ ምቹ ቤት",
    serviceOrbits: [
      { id: "housing", label: "ቤት", alt: "ቤት እና ሽፋን ድጋፍ" },
      { id: "housemaids", label: "የቤት ሰራተኞች", alt: "የተሰለጠኑ የቤት ሰራተኞች" },
      { id: "drivers", label: "አሽከርካሪዎች", alt: "ባለሙያ አሽከርካሪዎች" },
      { id: "petCare", label: "የቤት እንስሳት", alt: "የቤት እንስሳት እንክብካቤ" },
      { id: "homeManagement", label: "አስተዳደር", alt: "የቤት አስተዳደር" },
    ],
    pillars: [
      {
        title: "ቤትዎን ያግኙ",
        detail: "ወደ ትክክለኛው አካባቢ እና ንብረት ለመ settled የሽፋን ድጋፍ።",
      },
      {
        title: "የታመኑ ሰራተኞችን ይቅጠሩ",
        detail: "በጥንቃቄ የተመረጡ የቤት ሰራተኞች፣ አሽከርካሪዎች እና ረዳቶች።",
      },
      {
        title: "የተደራጁ ይሁኑ",
        detail: "ዕለታዊ የቤት አስተዳደር በአዲስ አበባ በተሳካ ሁኔታ እንዲሄድ።",
      },
    ],
  },
  faq: {
    eyebrow: "ተደጋጋሚ ጥያቄዎች",
    title: "በተደጋጋሚ የሚጠየቁ ጥያቄዎች",
    description: "ስለ እንዴት እንደምንሰራ ቀላል መልሶች። ውስብና የለም።",
    items: [
      {
        question: "የቤት ሰራተኞችን እና ሰራተኞችን እንዴት ይመርጣሉ?",
        answer: "እያንዳንዱ እምነት ተጠያቂ ብዙ ደረጃ ሂደት ያለፍበታል፡ ማመልከቻ ግምገማ፣ በአካል ቃለመጠይቅ፣ ማጣቀሻ ማረጋገጥ እና የዳራ ማረጋገጫ። መስፈርታችንን የሚያሟሉትን ብቻ ከደንበኞች ጋር እናገናኛለን።",
      },
      {
        question: "ከመተማመንዎ በፊት ሰራተኞቹን ማግኘት እችላለሁ?",
        answer: "አዎ። ማንኛውም ማስቀመጥ ከመጀመሩ በፊት የመግቢያ ስብሰባ እናዘጋጃለን። ወደ ቤትዎ ማን እንደገባ ሙሉ ፈቃድ አለዎት።",
      },
      {
        question: "በአዲስ አበባ የትኛውን አካባቢ ያገልግላሉ?",
        answer: "ቦሌ፣ ካዛንቺስ፣ CMC፣ ኦልድ አውሮፕላን፣ ሳርቤት እና አካባቢዎችን ጨምሮ በአዲስ አበባ ዋና ዋና የመኖሪያ አካባቢዎችን እናገልግላለን።",
      },
      {
        question: "ከተመደበልኝ ሰራተኛ ጋር ካልረኩስ ምን ይሆናል?",
        answer: "የመተካት ዋስትና እናቀርባለን። ካልረኩት ያግኙን እና ተጨማሪ ክፍያ ሳይጨምር የተሻለ ምርጫ እናገኛለን።",
      },
      {
        question: "ለአዲስ የወጪ ባለሙያዎች የሽፋን ድጋፍ ይሰጣሉ?",
        answer: "አዎ። የቤት ፍለጋ፣ የመ settled ድጋፍ፣ ዩቲሊቲ ማስተካከል እና የቤት ሰራተኞች ማስቀመጥን የሚሸፍኑ ሙሉ የሽፋን ጥቅሎች አሉን።",
      },
      {
        question: "ከተገኙኝ በኋላ አገልግሎቶች ምን ያህል ፈጥነው ይጀምራሉ?",
        answer: "ብዙውን ጊዜ ከመጀመሪያው ጥያቄ በ24 ሰዓት ውስጥ ማመሳሰል እንጀምራለን እና በጥቂት ቀናት ውስጥ ሰራተኞችን እናስቀምጣለን።",
      },
    ],
  },
  contact: {
    eyebrow: "አግኙን",
    title: "Maid My Day ቤት እና ሽፋን",
    description: "ምን እንደሚፈልጉ ይንገሩን እና በ24 ሰዓት ውስጥ እንመለስልዎታለን። ግፊት የለም፣ ቁርጠኝነት የለም።",
    availabilityNote: "ሰኞ እስከ ቅዳሜ። ብዙ ምላሾች በ24 ሰዓት ውስጥ ይደርሳሉ።",
    infoLabels: { phone: "ስልክ", email: "ኢሜይል", location: "አካባቢ" },
    form: {
      heading: "መልዕክት ይላኩ",
      fields: {
        fullName: "ሙሉ ስም",
        email: "ኢሜይል",
        phone: "ስልክ",
        services: "ምን ይፈልጋሉ?",
        message: "መልዕክትዎ",
      },
      placeholders: {
        name: "ስምዎ",
        email: "ኢሜይል@አድራሻ.com",
        phone: "+251 ...",
        message: "ስለ ቤትዎ፣ ጊዜ እና ምን እንደሚረዳ ጥቂት መስመሮች።",
      },
      servicePicker: {
        placeholder: "አገልግሎት ይምረጡ",
        ariaAvailable: "የሚገኙ አገልግሎቶች",
        ariaSelected: "የተመረጡ አገልግሎቶች",
        allSelected: "ሁሉም አገልግሎቶች ተመርጠዋል",
        removeAria: "{label} አስወግድ",
      },
      serviceOptions: [
        { value: "relocation", label: "ቤት እና ሽፋን ድጋፍ" },
        { value: "housemaid", label: "የተሰለጠኑ የቤት ሰራተኞች" },
        { value: "driver", label: "ባለሙያ አሽከርካሪዎች" },
        { value: "pet-care", label: "የቤት እንስሳት እንክብካቤ" },
        { value: "management", label: "የቤት አስተዳደር" },
        { value: "other", label: "ሌላ ነገር" },
      ],
      submit: "መልዕክት ላክ",
      submitting: "በመላክ ላይ...",
      errors: { selectService: "እባክዎ ቢያንስ አንድ አገልግሎት ይምረጡ።" },
      toasts: {
        selectService: {
          title: "እባክዎ ቢያንስ አንድ አገልግሎት ይምረጡ",
          description: "መልዕክት ከመላክዎ በፊት የሚፈልጉትን አገልግሎቶች ይምረጡ።",
        },
        success: {
          title: "መልዕክት በተሳካ ሁኔታ ተልኳል",
          description: "ጥያቄዎን ተቀብለናል እና በ24 ሰዓት ውስጥ እንመለስልዎታለን።",
        },
        error: {
          title: "መልዕክት ሊላክ አልቻለም",
          description: "አንድ ነገር ተሳስቷል። እባክዎ ትንሽ ቆይተው እንደገና ይሞክሩ።",
        },
      },
    },
  },
  footer: {
    tagline: "Maid My Day ቤት እና ሽፋን አገልግሎት",
    subtitle: "በአዲስ አበባ ፕሪሚየም የቤት እና የሽፋን አገልግሎቶች",
    quickLinksHeading: "ፈጣን አገናኞች",
    contactHeading: "አግኙን",
  },
  pageHero: {
    services: {
      eyebrow: "አገልግሎቶቻችን",
      title: "በአዲስ አበባ ፕሪሚየም የቤት እና የሽፋን ድጋፍ",
      description:
        "አፓርትመንት ማግኘት እስከ የታመኑ የቤት ሰራተኞች፣ አሽከርካሪዎች እና የቤት እንስሳት እንክብካቤ — Maid My Day ለውጭ ቤተሰቦች ምቹ ቤት ያደርጋል።",
    },
    howItWorks: {
      eyebrow: "እንዴት ይሰራል",
      title: "ከመጀመሪያው ጥሪ እስከ settled ቤት",
      description:
        "ለተሳሳቱ ባለሙያዎች ቀላል ሂደት። ተጨማሪ ውይይት የለም — ግልጽ ደረጃዎች፣ የተመረመሩ ሰራተኞች እና ከማስቀመጥ በኋላ ድጋፍ።",
    },
    whyUs: {
      eyebrow: "ለምን Maid My Day",
      title: "አስተማማኝነት የሚፈልጉ ውጭ ባለሙያዎች ለእኛ ተስማው",
      description:
        "ዲፕሎማቶች፣ ኤምባሲ ሰራተኞች እና ዓለም አቀፍ ቤተሰቦች አዲስ አበባን ስለሚያውቁ እናምናል — እና በዕለት ተዕለት ስራ የሚሰራ ድጋፍ እናቀርባለን።",
    },
    faq: {
      eyebrow: "የእገዛ ማዕከል",
      title: "ከመተማመንዎ በፊት መልሶች",
      description:
        "ስለ ምርመራ፣ ማስቀመጥ፣ የሽፋን ጥቅሎች፣ ዋጋ እና ቀጣይ ድጋፍ — በቀላል ቋንቋ፣ ውስብና ሳይገባ።",
    },
    contact: {
      eyebrow: "ያግኙን",
      title: "ቤትዎ ምን እንደሚፈልግ ይንገሩን",
      description:
        "ሳምንታት በፊት ወይም በዚህ ሳምንት እገዛ ከፈለጉ ቡድናችን በ24 ሰዓት ውስጥ ተግባራዊ ቀጣይ እርምጃዎችን ይሰጣል።",
    },
  },
  pageCta: {
    services: {
      title: "የቤት ቡድንዎን ለመገንባት ዝግጁ ነዎት?",
      description:
        "ምን እንደሚፈልጉ ይንገሩን — ሽፋን፣ የቤት ሰራተኞች፣ አሽከርካሪዎች ወይም ሙሉ አስተዳደር — በ24 ሰዓት ውስጥ ተግባራዊ እቅድ እንልክልዎታለን።",
      secondaryLabel: "እንዴት ይሰራል",
    },
    howItWorks: {
      title: "በውይይት እንጀምር",
      description: "ረጅም ቅጾች አያስፈልጉም። ስለ ቤትዎ ጥቂት ይንገሩን እኛ እንቀጥላለን።",
      secondaryLabel: "ለምን እኛን ይምረጡ",
    },
    whyUs: {
      title: "የታመነ አጋር ልዩነት ይመልከቱ",
      description:
        "በአዲስ አበባ ለሰላማዊ የቤት ድጋፍ በMaid My Day የሚታመኑ በመቶዎች የሚቆጠሩ ውጭ ቤተሰቦችን ይቀላቀሉ።",
      secondaryLabel: "ጥያቄዎችን ያንብቡ",
    },
    faq: {
      title: "ጥያቄዎች አሁንም አሉ?",
      description:
        "ቡድናችን ሁኔታዎን — የቤት መጠን፣ ጊዜ እና በጀት — ለመዳረስ ደስተኛ ነው።",
      secondaryLabel: "አገልግሎቶቻችን",
    },
    contact: {
      title: "ፍላጎትዎን በንግግር ይወያዩ?",
      description:
        "በ +251 911 000 000 ይደውሉልን ወይም hello@maidmyday.com ይጻፉልን። ሰኞ እስከ ቅዳሜ እንገኛለን።",
      primaryLabel: "ይደውሉልን",
      secondaryLabel: "አገልግሎቶችን ይመልከቱ",
    },
  },
  homePage: {
    intro: {
      eyebrow: "አዲስ አበባን እንኳን ደህና መጡ",
      title: "ከመጀመሪያው ቀን የቤትዎ አጋር",
      lead: "Maid My Day ለውጭ ቤተሰቦች፣ ዲፕሎማቶች እና አለም አቀፍ ባለሙያዎች የተሠራ ነው — የእውቂያ ዝርዝር ብቻ ሳይሆን በአዲስ አበባ ሕይወት የሚረዳ ቡድን ያስፈልጋቸዋል።",
      paragraphs: [
        "ወደ ኢትዮጵያ ዋና ከተማ ሲዛወሩ አዲስ አካባቢዎች፣ አዲስ ስራዎች እና አዲስ ሰዎች ወደ ቤትዎ ይገባሉ። በቦሌ ወይም ቃዛንቺስ ትክክለኛ አፓርትመንት ማግኘት፣ የሚታመነ የቤት ሰራተኛ ማስቀመጥ፣ የትምህርት ቤት መንገድ የሚያውቅ አሽከርካሪ መቅጠር እና ዕለታዊ ሕይወትን ማደራጀት እንረዳዎታለን።",
        "ከአጠቃላይ የሰራተኛ ድርጅቶች የተለየ፣ በአለም አቀፍ ቤተሰቦች ላይ እንተኩራለን። ይህም በእንግሊዝኛ ተገናኝነት፣ ተጨባጭ የጊዜ ሰሌዳ፣ ከማስቀመጥ በፊት የመተዋወቂያ ስብሰባ እና ተስማሚነት ካልሆነ የመተካት ዋስትና ማለት ነው።",
        "ስድስት ሳምንታት ቀድሞ ወይም በዚህ ሳምንት እገዛ ከፈለጉ፣ አስተባባሪዎቻችን በ24 ሰዓት ውስጥ ግልጽ ቀጣይ እርምጃዎችን ይሰጣሉ — ግፊት የለም፣ ግልጽ ያልሆኑ ቃላት የለም።",
      ],
    },
    quickFacts: [
      { label: "የተደገፉ ቤተሰቦች", value: "500+" },
      { label: "አማካይ ምላሽ", value: "24 ሰዓት" },
      { label: "የሚሸፍናቸው አካባቢዎች", value: "12+" },
      { label: "የደንበኞች ደረጃ", value: "5.0" },
    ],
    packages: {
      eyebrow: "ጥቅሎች",
      title: "ለእያንዳንዱ ደረጃ የሽፋን አማራጮች",
      description:
        "በሳምንት ቀጣይ የሚደርሱ ወይም ቀድሞውኑ የተመሠረተ ቤት የሚያሻሽሉ ቤተሰቦች ለእነሱ ተስማሚ አማራጮች።",
    },
    expectations: {
      eyebrow: "ምን እንደሚጠበቅ",
      title: "ከአለም አቀፍ ቤተሰቦች ጋር እንዴት እንሰራ",
      description: "ግልጽ መመዘኛዎች፣ ታማኝ የጊዜ ሰሌዳ እና ከማስቀመጥ በኋላ ቀጣይ ድጋፍ።",
    },
    expectationsItems: [
      {
        title: "ከመተዋወቂያ በፊት ተመርምሮ የተመረጠ",
        detail:
          "እያንዳንዱ የቤት ሰራተኛ፣ አሽከርካሪ እና ረዳት ከመጠቆሚያ በፊት ቃለ ምልልስ፣ የማጣቀሻ ማረጋገጫ እና የዳራ ፍተሻ ያልፋል።",
      },
      {
        title: "እያንዳንዱን ማስቀመጥ ይፈቅዳሉ",
        detail:
          "ማንም ከመጀመሩ በፊት በአካል ወይም በቪዲዮ ይገናኙ። ምቾትዎ እና ፈቃድዎ በቅድሚያ ይገባል።",
      },
      {
        title: "ከመጀመሪያው ቀን በኋላ ድጋፍ",
        detail:
          "የሥራ ሰሌዳ ለውጥ፣ መተካት እና ተጨማሪ አገልግሎቶች — ቤትዎ ሲለወጥ አስተባባሪዎ ይገኛሉ።",
      },
      {
        title: "የአካባቢ እውቀት ተካትቷል",
        detail:
          "አካባቢዎች፣ የትራፊክ ስርዓት፣ የኪራይ ልምዶች እና የታመኑ አቅራቢዎች — ዓመታት የአዲስ አበባ ተሞክሮን ለእያንዳንዱ ደንበኛ እናቀርባለን።",
      },
    ],
    neighborhoods: {
      eyebrow: "በአዲስ አበባ መኖር",
      title: "በጣም የምንወቃቸው አካባቢዎች",
      description:
        "ከተማውን ሲያዩ የአካባቢ ግንዛቤ ይጠቅማል። በአዲስ አበባ በጣም ታዋቂ የውጭ ቤተሰቦች አካባቢዎች ሰራተኞችን እና የሽፋን ድጋፍ እናቀርባለን።",
    },
    neighborhoodItems: [
      {
        name: "ቦሌ",
        detail:
          "ለድርጅት ውጭ ባለሙያዎች እና የኤምባሲ ቤተሰቦች ታዋቂ። ከቦሌ ዓለም አቀፍ አውሮፕላን ማረፊያ፣ አለም አቀፍ ትምህርት ቤቶች እና ምግብ ቤቶች አቅራቢያ።",
      },
      {
        name: "ቃዛንቺስ",
        detail:
          "ከዩኤን ድርጅቶች እና ዲፕሎማቲክ ተልእኮዎች አቅራቢያ ማዕከላዊ አካባቢ። ወደ አለም አቀፍ ድርጅቶች አጭር ጉዞ የሚፈልጉ ባለሙያዎች ለእነሱ ተስማሚ።",
      },
      {
        name: "ሲኤምሲ እና መገናኛ",
        detail:
          "አዲስ የመኖሪያ ቤቶች ያሉት እያደጉ ያሉ አካባቢዎች፤ ለኤንጂኦ ሰራተኞች እና ቦታና ደህንነት ለሚፈልጉ ቤተሰቦች ተወዳጅ።",
      },
      {
        name: "ኦልድ አውሮፕላን እና ሳርቤት",
        detail:
          "የተመሠረቱ አካባቢዎች ከቆዩ ቪላዎች እና ጥሩ የትምህርት ቤት መዳረሻ ጋር። ለረጅም ጊዜ ዲፕሎማቲክ ምደባዎች ተወዳጅ።",
      },
    ],
    relocationPackages: [
      {
        title: "የመድረሻ መሠረታዊ",
        description: "ቤት ካለው ከደረሱ በኋላ በፍጥነት የታመኑ ሰራተኞች ለሚፈልጉ ባለሙያዎች።",
        items: [
          "በጥቂት ቀናት ውስጥ የቤት ሰራተኛ ወይም አሽከርካሪ ማስቀመጥ",
          "የመተዋወቂያ ስብሰባ እና የሙከራ ጊዜ",
          "የመጀመሪያው ሳምንት የክትትል ጥሪ",
        ],
      },
      {
        title: "ሙሉ ሽፋን",
        description: "ለመጀመሪያ ጊዜ ወደ አዲስ አበባ ለሚዛወሩ ቤተሰቦች እና ዲፕሎማቶች በጣም ታዋቂ ጥቅል።",
        items: [
          "የአካባቢ ፍለጋ እና የንብረት አጭር ዝርዝር",
          "የመግቢያ እና የዩቲሊቲ ማስተካከል ድጋፍ",
          "ሰራተኛ ማስቀመጥ፡ የቤት ሰራተኛ፣ አሽከርካሪ ወይም ሁለቱም",
          "30 ቀን የመ settled ድጋፍ",
        ],
      },
      {
        title: "ቤት ፕላስ",
        description: "ቀድሞውኑ የሚኖሩ እና ቀጣይ የቤት አስተዳደር እና የሰራተኞች ተገናኝነት ለሚፈልጉ።",
        items: [
          "የተመደበ የቤት አስተባባሪ",
          "ብዙ ሰራተኞች ማስተካከል እና ክትትል",
          "አቅራቢ እና ጥገና ተገናኝነት",
          "ሩብ ዓመታዊ የቤት ግምገማ",
        ],
      },
    ],
  },
  servicesPage: servicesPageAm,
  howItWorksPage: howItWorksPageAm,
  whyUsPage: whyUsPageAm,
  faqPage: faqPageAm,
  contactPage: contactPageAm,
  chat: {
    welcome:
      "ሰላም! እኔ የ Maid My Day አጋዥ ነኝ። ስለ አገልግሎቶቻችን፣ እንዴት እንደምንሰራ ወይም በአዲስ አበባ ስለመጀመር ይጠይቁኝ።",
    fallback:
      "በዚህ ላይ እርግጠኛ አይደለሁም። ለቤትዎ የተለየ ጥያቄ ካለ ቡድናችን በቀጥታ ሊረዳ ይችላል — ብዙውን ጊዜ በ24 ሰዓት ውስጥ።",
    quickPrompts: [
      "ምን አገልግሎቶች ይሰጣሉ?",
      "እንዴት ይሰራል?",
      "በየትኛው አካባቢ ይሰራሉ?",
      "ምን ያህል ፈጥነው ሊረዱ ይችላሉ?",
      "ከቡድኑ ጋር ይነጋገሩ",
    ],
    ui: {
      subtitle: "ስለ አገልግሎቶቻችን ይጠይቁ",
      quickQuestionsLabel: "ፈጣን ጥያቄዎች",
      inputPlaceholder: "ጥያቄ ይጠይቁ...",
      inputLabel: "መልዕክትዎን ይፃፉ",
      panelAriaLabel: "የ Maid My Day የውይይት አጋዥ",
      closeLabel: "ውይይት ዝጋ",
      openLabel: "የውይይት አጋዥ ክፈት",
      sendLabel: "መልዕክት ላክ",
      typingLabel: "አጋዡ በመፃፍ ላይ ነው",
    },
  },
  social: {
    openLabel: "የማህበራዊ ሚዲያ ምናሌ ክፈት",
    closeLabel: "የማህበራዊ ሚዲያ ምናሌ ዝጋ",
    menuAriaLabel: "የማህበራዊ ሚዲያ አገናኞች",
    followTitle: "ይከተሉን",
  },
};

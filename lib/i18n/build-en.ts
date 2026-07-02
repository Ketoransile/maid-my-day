import {
  CHAT_FALLBACK,
  CHAT_QUICK_PROMPTS,
  CHAT_WELCOME,
  chatKnowledge,
  siteFaqs,
} from "@/lib/chat-knowledge";
import {
  contactAfterSteps,
  contactPrepTips,
  detailedProcessSteps,
  extendedFaqs,
  faqStillWondering,
  first30Days,
  homeExpectations,
  homeIntro,
  homeNeighborhoodGuide,
  homeQuickFacts,
  howItWorksFaqPreview,
  officeInfo,
  ourStandards,
  pageCtaContent,
  pageHeroContent,
  preparationChecklist,
  relocationPackages,
  serviceAreas,
  serviceDetails,
  servicesWhyMatter,
  whoWeServe,
  whyUsStory,
} from "@/lib/page-content";

import type { Translations } from "./types";
import { navSubmenusEn } from "./nav-submenus";

const serviceIdMap: Record<string, string> = {
  housing: "housing",
  housemaids: "housemaids",
  drivers: "drivers",
  "pet-care": "petCare",
  "home-management": "homeManagement",
};

export const en: Translations = {
  nav: {
    home: "Home",
    services: "Services",
    howItWorks: "How It Works",
    whyUs: "Why Us",
    faq: "FAQ",
    contact: "Contact",
    contactUs: "Contact Us",
    openMenu: "Open menu",
    allLinks: "All Links",
    language: "Language",
    submenu: navSubmenusEn,
    extended: {
      about: "About Maid My Day",
      careers: "Careers",
      partners: "Partner With Us",
      resources: "Resources",
      blog: "Blog",
      press: "Press",
    },
  },
  hero: {
    eyebrow: "Maid My Day Home & Relocation",
    title: "Settle into Addis Ababa Without the Stress",
    lead: "Trusted housemaids, drivers, pet care, and relocation services for expats and international professionals.",
    contactUs: "Contact Us",
    ourServices: "Our Services",
    scrollHint: "Scroll to next section",
  },
  common: {
    brandName: "Maid My Day",
    brandTagline: "Maid My Day Home & Relocation",
    location: "Addis Ababa, Ethiopia",
    phone: "+251 911 000 000",
    email: "hello@maidmyday.com",
    copyright: "© {year} Maid My Day Home & Relocation. All rights reserved.",
    whatsIncluded: "What's included",
    idealFor: "Ideal for",
    ourPromise: "Our Promise",
    promiseQuote:
      "We do not send someone into your home until we would send them into ours. That standard has kept families with us for years.",
    promiseAttribution: "— Maid My Day placement team, Addis Ababa",
    cta: {
      contactUs: "Contact Us",
      viewServices: "View Services",
      getStarted: "Get started",
      exploreAllServices: "Explore all services",
      callUs: "Call Us",
      howItWorks: "How It Works",
      whyChooseUs: "Why Choose Us",
      readFaqs: "Read FAQs",
      ourServices: "Our Services",
    },
  },
  trustBar: {
    items: [
      { label: "Carefully Vetted Staff" },
      { label: "5.0 Average Rating" },
      { label: "24hr Response Guarantee" },
      { label: "500+ Families Served" },
    ],
  },
  services: {
    eyebrow: "Our Services",
    title: "Everything your home needs in Addis",
    description: "Professional household and relocation support for expat families.",
    items: [
      {
        id: "housing",
        title: "Housing & Relocation",
        description:
          "Finding and settling into your new home with professional relocation support.",
        imageAlt: "House keys for a new home relocation",
      },
      {
        id: "housemaids",
        title: "Trained Housemaids",
        description:
          "Reliable staff for cleaning, laundry, cooking, and daily household care.",
        imageAlt: "Professional housemaid caring for a home",
      },
      {
        id: "drivers",
        title: "Professional Drivers",
        description:
          "Safe, dependable drivers for personal and family transportation.",
        imageAlt: "Professional driver with a passenger in the car",
      },
      {
        id: "petCare",
        title: "Pet Care",
        description: "Trusted care for your pets while you work or travel.",
        imageAlt: "Veterinary professionals caring for a pet",
      },
      {
        id: "homeManagement",
        title: "Home Management",
        description: "Complete support to keep your home running smoothly.",
        imageAlt: "Well-organized modern household",
      },
      {
        id: "childcare",
        title: "Childcare & Nannies",
        description:
          "Warm, trusted nannies to keep your children safe and cared for at home.",
        imageAlt: "Nanny playing with a young child at home",
      },
    ],
  },
  howItWorks: {
    eyebrow: "The Process",
    title: "Getting Started is Simple",
    steps: [
      {
        number: "01",
        title: "Tell Us What You Need",
        description:
          "Fill out our quick contact form or call us directly. We'll respond within 24 hours.",
      },
      {
        number: "02",
        title: "We Match You With the Right Team",
        description:
          "We carefully select and introduce staff suited to your home, schedule, and preferences.",
      },
      {
        number: "03",
        title: "Settle In With Confidence",
        description:
          "Your household is managed, your family is cared for, and your home runs like clockwork.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Why Choose Maid My Day?",
    title: "Trusted support for expat households",
    description:
      "We understand what it takes to settle into a new city. Maid My Day brings professional, reliable home and relocation services to families who need them most.",
    trustPoints: [
      {
        title: "Carefully Selected Staff",
        detail:
          "Every housemaid, driver, and helper is vetted and interviewed before placement.",
      },
      {
        title: "Professional Standards",
        detail:
          "Consistent training and clear expectations for every member of your household team.",
      },
      {
        title: "Reliable and Trustworthy Service",
        detail: "Dependable support you can count on week after week.",
      },
      {
        title: "Expat-Focused Support",
        detail:
          "Built for diplomats, embassy staff, and international professionals new to Addis Ababa.",
      },
      {
        title: "Personalized Assistance",
        detail: "Services tailored to your home, schedule, and family needs.",
      },
    ],
    imageAlt: "Happy family enjoying their home in Addis Ababa",
    stats: { families: "Families", rating: "Rating", years: "Years" },
  },
  testimonials: {
    eyebrow: "Client Stories",
    title: "What Our Clients Say",
    description:
      "Real experiences from expats, diplomats, and families we've helped settle in Addis Ababa.",
    items: [
      {
        name: "James Holloway",
        role: "UN Consultant, Addis Ababa",
        quote:
          "Finding a housemaid in a new city felt impossible. Maid My Day had someone in place within days. Huge relief.",
      },
      {
        name: "Sophie Renard",
        role: "Embassy Staff, French Embassy",
        quote:
          "Our driver has been with us two years. Punctual, safe, and kind. Exactly what we needed for school runs.",
      },
      {
        name: "Marcus Webb",
        role: "NGO Director, Relocated 2023",
        quote:
          "The relocation support was seamless. They helped find our apartment, set up utilities, and arranged pet care for our dog.",
      },
      {
        name: "Elena Vasquez",
        role: "Diplomatic Attaché, EU Delegation",
        quote:
          "They understood our household from the first call. The housemaid they sent is discreet, thorough, and still with us.",
      },
      {
        name: "David Okonkwo",
        role: "Corporate Expat, Bole",
        quote:
          "We needed a driver and home management support on short notice. Maid My Day delivered within a week. Could not ask for more.",
      },
      {
        name: "Amara Chen",
        role: "Research Fellow, Relocated 2024",
        quote:
          "I arrived in Addis alone and felt overwhelmed. They made the first month manageable. Warm and straight with me.",
      },
    ],
  },
  mission: {
    eyebrow: "Our Mission",
    title: "Making life in Addis Ababa easier for expat families",
    description:
      "To make living in Addis Ababa easier, cleaner, and more comfortable through trusted home and relocation support.",
    body: "Maid My Day exists to take the stress out of settling in. We support expats, diplomats, embassy staff, and international professionals at every step.",
    mainImageAlt: "Comfortable home in Addis Ababa",
    serviceOrbits: [
      { id: "housing", label: "Housing", alt: "Housing and relocation support" },
      { id: "housemaids", label: "Housemaids", alt: "Trained housemaids" },
      { id: "drivers", label: "Drivers", alt: "Professional drivers" },
      { id: "petCare", label: "Pet Care", alt: "Pet care services" },
      { id: "homeManagement", label: "Home Mgmt", alt: "Home management services" },
      { id: "childcare", label: "Childcare", alt: "Childcare and nanny services" },
    ],
    pillars: [
      {
        title: "Find your home",
        detail:
          "Relocation support to help you settle into the right neighborhood and property.",
      },
      {
        title: "Hire trusted staff",
        detail:
          "Carefully vetted housemaids, drivers, and household help you can rely on.",
      },
      {
        title: "Stay organized",
        detail:
          "Day-to-day home management so your routine runs smoothly in Addis Ababa.",
      },
    ],
  },
  faq: {
    eyebrow: "Common Questions",
    title: "Frequently Asked Questions",
    description: "Plain answers about how we work. No jargon.",
    items: siteFaqs.map((f) => ({ question: f.question, answer: f.answer })),
  },
  contact: {
    eyebrow: "Contact Us",
    title: "Maid My Day Home & Relocation",
    description:
      "Tell us what you need and we will get back to you within 24 hours. No pressure, no commitment.",
    availabilityNote: "Mon to Sat. Most replies land within 24 hours.",
    infoLabels: { phone: "Phone", email: "Email", location: "Location" },
    form: {
      heading: "Send a message",
      fields: {
        fullName: "Full name",
        email: "Email",
        phone: "Phone",
        services: "What do you need?",
        message: "Your message",
      },
      placeholders: {
        name: "Your name",
        email: "you@email.com",
        phone: "+251 ...",
        message:
          "A few lines about your home, timing, and what would help.",
      },
      servicePicker: {
        placeholder: "Pick a service",
        ariaAvailable: "Available services",
        ariaSelected: "Selected services",
        allSelected: "All services selected",
        removeAria: "Remove {label}",
      },
      serviceOptions: [
        { value: "relocation", label: "Housing & Relocation Support" },
        { value: "housemaid", label: "Trained Housemaids" },
        { value: "driver", label: "Professional Drivers" },
        { value: "pet-care", label: "Pet Care Services" },
        { value: "management", label: "Home Management" },
        { value: "childcare", label: "Childcare & Nannies" },
        { value: "other", label: "Something else" },
      ],
      submit: "Send message",
      submitting: "Sending...",
      errors: { selectService: "Please select at least one service." },
      toasts: {
        selectService: {
          title: "Please select at least one service",
          description: "Pick the services you need before sending your message.",
        },
        success: {
          title: "Message sent successfully",
          description: "We received your request and will reply within 24 hours.",
        },
        error: {
          title: "Message could not be sent",
          description: "Something went wrong. Please try again in a moment.",
        },
      },
    },
  },
  footer: {
    tagline: "Maid My Day Home & Relocation",
    subtitle: "Premium home and relocation services in Addis Ababa",
    quickLinksHeading: "Quick Links",
    contactHeading: "Contact Us",
  },
  pageHero: pageHeroContent,
  pageCta: {
    services: {
      title: pageCtaContent.services.title,
      description: pageCtaContent.services.description,
      secondaryLabel: pageCtaContent.services.secondaryLabel,
    },
    howItWorks: {
      title: pageCtaContent.howItWorks.title,
      description: pageCtaContent.howItWorks.description,
      secondaryLabel: pageCtaContent.howItWorks.secondaryLabel,
    },
    whyUs: {
      title: pageCtaContent.whyUs.title,
      description: pageCtaContent.whyUs.description,
      secondaryLabel: pageCtaContent.whyUs.secondaryLabel,
    },
    faq: {
      title: pageCtaContent.faq.title,
      description: pageCtaContent.faq.description,
      secondaryLabel: pageCtaContent.faq.secondaryLabel,
    },
    contact: {
      title: pageCtaContent.contact.title,
      description: pageCtaContent.contact.description,
      primaryLabel: pageCtaContent.contact.primaryLabel,
      secondaryLabel: pageCtaContent.contact.secondaryLabel,
    },
  },
  homePage: {
    intro: { ...homeIntro, paragraphs: [...homeIntro.paragraphs] },
    quickFacts: [...homeQuickFacts],
    packages: {
      eyebrow: "Packages",
      title: "Relocation options for every stage",
      description:
        "Flexible options whether you are landing next week or upgrading an established home.",
    },
    expectations: {
      eyebrow: "What to Expect",
      title: "How we work with international households",
      description:
        "Clear standards, honest timelines, and support that continues after placement.",
    },
    expectationsItems: [...homeExpectations],
    neighborhoods: {
      eyebrow: "Living in Addis",
      title: "Neighborhoods we know best",
      description:
        "Local insight matters when you are new to the city. We place staff and support relocations across Addis Ababa's most popular expat areas.",
    },
    neighborhoodItems: [...homeNeighborhoodGuide],
    relocationPackages: relocationPackages.map((p) => ({
      title: p.title,
      description: p.description,
      items: [...p.items],
    })),
  },
  servicesPage: {
    areas: {
      eyebrow: "Coverage",
      title: "Areas we serve across Addis Ababa",
      description:
        "We place staff and support relocations in every major residential neighborhood — close to embassies, international schools, and business districts.",
    },
    serviceAreas: [...serviceAreas],
    packages: {
      eyebrow: "Packages",
      title: "Relocation & household packages",
      description:
        "Flexible options whether you are landing next week or upgrading an established home.",
    },
    whyItMatters: {
      eyebrow: "Why It Matters",
      title: "More than staffing — a calmer home life",
    },
    whyItMattersItems: [...servicesWhyMatter],
    serviceDetails: serviceDetails.map((s) => ({
      id: serviceIdMap[s.id] ?? s.id,
      title: s.title,
      summary: s.summary,
      paragraphs: [...s.paragraphs],
      includes: [...s.includes],
      idealFor: [...s.idealFor],
      imageAlt: s.imageAlt,
    })),
  },
  howItWorksPage: {
    detailedProcess: {
      eyebrow: "Step by Step",
      title: "Your journey with Maid My Day",
      description:
        "Seven clear stages from first inquiry to long-term household support — with realistic timelines so you know what to expect.",
    },
    detailedProcessSteps: detailedProcessSteps.map((s) => ({ ...s })),
    first30Days: {
      eyebrow: "First 30 Days",
      title: "What your first month looks like",
      description:
        "A typical timeline for families arriving in Addis or adding new staff to an existing household.",
      phases: first30Days.map((p) => ({
        week: p.week,
        title: p.title,
        items: [...p.items],
      })),
    },
    prepare: {
      eyebrow: "Before You Reach Out",
      title: "What to have ready",
      description:
        "The more context you share upfront, the faster we can match you with the right staff or relocation plan.",
    },
    preparationChecklist: [...preparationChecklist],
    processFaq: {
      eyebrow: "Common Questions",
      title: "Quick answers about getting started",
      description:
        "What clients usually ask before their first introduction meeting.",
    },
    processFaqItems: howItWorksFaqPreview.map((f) => ({
      question: f.question,
      answer: f.answer,
    })),
  },
  whyUsPage: {
    whoWeServe: {
      eyebrow: "Who We Serve",
      title: "Household support for international professionals",
      description:
        "Maid My Day is not a generic staffing agency. We specialize in the households that international Addis Ababa runs on — diplomatic, humanitarian, and corporate.",
    },
    whoWeServeItems: whoWeServe.map((w) => ({
      title: w.title,
      description: w.description,
    })),
    standards: {
      eyebrow: "Our Standards",
      title: "How we earn trust, placement by placement",
      description:
        "Every household is different. These principles stay the same — whether you need a driver tomorrow or a full relocation over six weeks.",
    },
    standardsItems: ourStandards.map((s) => ({
      title: s.title,
      detail: s.detail,
    })),
    story: { ...whyUsStory, paragraphs: [...whyUsStory.paragraphs] },
  },
  faqPage: {
    moreAnswers: {
      eyebrow: "More Answers",
      title: "Browse by topic",
      description:
        "Additional questions our clients ask before and after placement — covering contracts, billing, relocation timing, and ongoing support.",
    },
    extendedFaqs: extendedFaqs.map((g) => ({
      category: g.category,
      items: g.items.map((i) => ({ question: i.question, answer: i.answer })),
    })),
    stillWondering: {
      title: faqStillWondering.title,
      items: [...faqStillWondering.items],
    },
  },
  contactPage: {
    afterContact: {
      eyebrow: "What Happens Next",
      title: "After you send a message",
      description:
        "No black hole inbox. Here is exactly how we handle every inquiry from expat households in Addis Ababa.",
    },
    afterContactSteps: contactAfterSteps.map((s) => ({
      title: s.title,
      description: s.description,
    })),
    office: {
      eyebrow: "Office & Availability",
      title: "How to reach us",
      description:
        "Based in Addis Ababa, serving international households across the city. We reply in plain English — and can coordinate in Amharic or French when needed.",
      labels: {
        officeHours: "Office hours",
        responseTime: "Response time",
        languages: "Languages",
        coverage: "Coverage",
      },
      hours: officeInfo.hours,
      response: officeInfo.response,
      languages: officeInfo.languages,
      coverage: officeInfo.coverage,
    },
    prepTips: {
      eyebrow: "Before You Write",
      title: "Tips for a faster, better reply",
      description:
        "Include these details in your message and we can send a more useful response on the first reply.",
    },
    prepTipsItems: contactPrepTips.map((t) => ({
      title: t.title,
      detail: t.detail,
    })),
  },
  chat: {
    welcome: CHAT_WELCOME,
    fallback: CHAT_FALLBACK,
    quickPrompts: [...CHAT_QUICK_PROMPTS],
    ui: {
      subtitle: "Ask about our services",
      quickQuestionsLabel: "Quick questions",
      inputPlaceholder: "Ask a question...",
      inputLabel: "Type your message",
      panelAriaLabel: "Maid My Day chat assistant",
      closeLabel: "Close chat",
      openLabel: "Open chat assistant",
      sendLabel: "Send message",
      typingLabel: "Assistant is typing",
    },
    knowledge: chatKnowledge
      .filter((k) => !k.id.startsWith("faq-"))
      .map((k) => ({
        id: k.id,
        answer: k.answer,
        actions: k.actions?.map((a) => ({
          type: a.type,
          target: a.target,
          label: a.label,
        })),
      })),
  },
  social: {
    openLabel: "Follow us on social media",
    closeLabel: "Close social media menu",
    menuAriaLabel: "Social media links",
    followTitle: "Follow us",
  },
};

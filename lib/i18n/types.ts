export type FaqItem = { question: string; answer: string };

export type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

export type ServiceDetailTranslation = {
  id: string;
  title: string;
  summary: string;
  paragraphs: string[];
  includes: string[];
  idealFor: string[];
  imageAlt: string;
};

export type Translations = {
  nav: {
    home: string;
    services: string;
    howItWorks: string;
    whyUs: string;
    faq: string;
    contact: string;
    contactUs: string;
    openMenu: string;
    allLinks: string;
    language: string;
    submenu: {
      home: {
        overview: string;
        welcome: string;
        services: string;
        packages: string;
        howItWorks: string;
        whyUs: string;
        contact: string;
      };
      services: {
        overview: string;
        serviceGrid: string;
        housing: string;
        housemaids: string;
        drivers: string;
        childcare: string;
        areas: string;
        packages: string;
      };
      howItWorks: {
        overview: string;
        steps: string;
        detailedProcess: string;
        first30Days: string;
        prepare: string;
        processFaq: string;
      };
      whyUs: {
        overview: string;
        whyUs: string;
        whoWeServe: string;
        standards: string;
        testimonials: string;
        mission: string;
        ourStory: string;
      };
      faq: {
        overview: string;
        commonQuestions: string;
        moreAnswers: string;
        stillWondering: string;
        contactSupport: string;
      };
      contact: {
        overview: string;
        contactForm: string;
        afterContact: string;
        officeInfo: string;
        prepTips: string;
        callUs: string;
      };
    };
    extended: {
      about: string;
      careers: string;
      partners: string;
      resources: string;
      blog: string;
      press: string;
    };
    /** Shorter labels for the desktop navbar (om/so) */
    compact?: {
      home: string;
      services: string;
      howItWorks: string;
      whyUs: string;
      faq: string;
      contact: string;
      contactUs: string;
    };
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    contactUs: string;
    ourServices: string;
    scrollHint: string;
  };
  common: {
    brandName: string;
    brandTagline: string;
    location: string;
    phone: string;
    email: string;
    copyright: string;
    whatsIncluded: string;
    idealFor: string;
    ourPromise: string;
    promiseQuote: string;
    promiseAttribution: string;
    cta: {
      contactUs: string;
      viewServices: string;
      getStarted: string;
      exploreAllServices: string;
      callUs: string;
      howItWorks: string;
      whyChooseUs: string;
      readFaqs: string;
      ourServices: string;
    };
  };
  trustBar: { items: { label: string }[] };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      id: string;
      title: string;
      description: string;
      imageAlt: string;
    }[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: { number: string; title: string; description: string }[];
  };
  whyUs: {
    eyebrow: string;
    title: string;
    description: string;
    trustPoints: { title: string; detail: string }[];
    imageAlt: string;
    stats: { families: string; rating: string; years: string };
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: { name: string; role: string; quote: string }[];
  };
  mission: {
    eyebrow: string;
    title: string;
    description: string;
    body: string;
    mainImageAlt: string;
    serviceOrbits: { id: string; label: string; alt: string }[];
    pillars: { title: string; detail: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    availabilityNote: string;
    infoLabels: { phone: string; email: string; location: string };
    form: {
      heading: string;
      fields: {
        fullName: string;
        email: string;
        phone: string;
        services: string;
        message: string;
      };
      placeholders: {
        name: string;
        email: string;
        phone: string;
        message: string;
      };
      servicePicker: {
        placeholder: string;
        ariaAvailable: string;
        ariaSelected: string;
        allSelected: string;
        removeAria: string;
      };
      serviceOptions: { value: string; label: string }[];
      submit: string;
      submitting: string;
      errors: { selectService: string };
      toasts: {
        selectService: { title: string; description: string };
        success: { title: string; description: string };
        error: { title: string; description: string };
      };
    };
  };
  footer: {
    tagline: string;
    subtitle: string;
    quickLinksHeading: string;
    contactHeading: string;
  };
  pageHero: Record<
    "services" | "howItWorks" | "whyUs" | "faq" | "contact",
    { eyebrow: string; title: string; description: string }
  >;
  pageCta: {
    services: { title: string; description: string; secondaryLabel: string };
    howItWorks: { title: string; description: string; secondaryLabel: string };
    whyUs: { title: string; description: string; secondaryLabel: string };
    faq: { title: string; description: string; secondaryLabel: string };
    contact: {
      title: string;
      description: string;
      primaryLabel: string;
      secondaryLabel: string;
    };
  };
  homePage: {
    intro: {
      eyebrow: string;
      title: string;
      lead: string;
      paragraphs: string[];
    };
    quickFacts: { label: string; value: string }[];
    packages: { eyebrow: string; title: string; description: string };
    expectations: { eyebrow: string; title: string; description: string };
    expectationsItems: { title: string; detail: string }[];
    neighborhoods: { eyebrow: string; title: string; description: string };
    neighborhoodItems: { name: string; detail: string }[];
    relocationPackages: {
      title: string;
      description: string;
      items: string[];
    }[];
  };
  servicesPage: {
    areas: { eyebrow: string; title: string; description: string };
    serviceAreas: string[];
    packages: { eyebrow: string; title: string; description: string };
    whyItMatters: { eyebrow: string; title: string };
    whyItMattersItems: { title: string; body: string }[];
    serviceDetails: ServiceDetailTranslation[];
  };
  howItWorksPage: {
    detailedProcess: { eyebrow: string; title: string; description: string };
    detailedProcessSteps: {
      step: string;
      title: string;
      description: string;
      duration: string;
    }[];
    first30Days: {
      eyebrow: string;
      title: string;
      description: string;
      phases: { week: string; title: string; items: string[] }[];
    };
    prepare: { eyebrow: string; title: string; description: string };
    preparationChecklist: string[];
    processFaq: { eyebrow: string; title: string; description: string };
    processFaqItems: FaqItem[];
  };
  whyUsPage: {
    whoWeServe: { eyebrow: string; title: string; description: string };
    whoWeServeItems: { title: string; description: string }[];
    standards: { eyebrow: string; title: string; description: string };
    standardsItems: { title: string; detail: string }[];
    story: { eyebrow: string; title: string; paragraphs: string[] };
  };
  faqPage: {
    moreAnswers: { eyebrow: string; title: string; description: string };
    extendedFaqs: { category: string; items: FaqItem[] }[];
    stillWondering: { title: string; items: string[] };
  };
  contactPage: {
    afterContact: { eyebrow: string; title: string; description: string };
    afterContactSteps: { title: string; description: string }[];
    office: {
      eyebrow: string;
      title: string;
      description: string;
      labels: {
        officeHours: string;
        responseTime: string;
        languages: string;
        coverage: string;
      };
      hours: string;
      response: string;
      languages: string;
      coverage: string;
    };
    prepTips: { eyebrow: string; title: string; description: string };
    prepTipsItems: { title: string; detail: string }[];
  };
  chat: {
    welcome: string;
    fallback: string;
    quickPrompts: string[];
    ui: {
      subtitle: string;
      quickQuestionsLabel: string;
      inputPlaceholder: string;
      inputLabel: string;
      panelAriaLabel: string;
      closeLabel: string;
      openLabel: string;
      sendLabel: string;
      typingLabel: string;
    };
    knowledge: {
      id: string;
      answer: string;
      actions?: { type: "scroll"; target: string; label: string }[];
    }[];
  };
  social: {
    openLabel: string;
    closeLabel: string;
    menuAriaLabel: string;
    followTitle: string;
  };
};

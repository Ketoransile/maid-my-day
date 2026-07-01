import type { DeepPartial, Translations } from "../types";
import { navSubmenusFr } from "../nav-submenus";
import { servicesPageFr } from "./pages/services-page-fr";
import { coreSectionsFr } from "./pages/core-sections-fr";
import { howItWorksPageFr } from "./pages/how-it-works-page-fr";
import { whyUsPageFr } from "./pages/why-us-page-fr";
import { faqPageFr } from "./pages/faq-page-fr";
import { contactPageFr } from "./pages/contact-page-fr";

/** Traductions françaises */
export const frOverrides: DeepPartial<Translations> = {
  nav: {
    home: "Accueil",
    services: "Services",
    howItWorks: "Comment ça marche",
    whyUs: "Pourquoi nous",
    faq: "Questions fréquentes",
    contact: "Contact",
    contactUs: "Contactez-nous",
    openMenu: "Ouvrir le menu",
    allLinks: "Tous les liens",
    language: "Langue",
    submenu: navSubmenusFr,
    extended: {
      about: "À propos de Maid My Day",
      careers: "Carrières",
      partners: "Devenir partenaire",
      resources: "Ressources",
      blog: "Blog",
      press: "Presse",
    },
    compact: {
      home: "Accueil",
      services: "Services",
      howItWorks: "Processus",
      whyUs: "Pourquoi nous",
      faq: "Questions",
      contact: "Contact",
      contactUs: "Contact",
    },
  },
  hero: {
    eyebrow: "Maid My Day — Foyer & Relocation",
    title: "Installez-vous à Addis-Abeba sans stress",
    lead: "Femmes de ménage, chauffeurs, garde d'animaux et services de relocation de confiance pour expatriés et professionnels internationaux.",
    contactUs: "Contactez-nous",
    ourServices: "Nos services",
    scrollHint: "Faire défiler vers la section suivante",
  },
  common: {
    brandName: "Maid My Day",
    brandTagline: "Maid My Day — Foyer & Relocation",
    location: "Addis-Abeba, Éthiopie",
    phone: "+251 911 000 000",
    email: "hello@maidmyday.com",
    copyright: "© {year} Maid My Day — Foyer & Relocation. Tous droits réservés.",
    whatsIncluded: "Ce qui est inclus",
    idealFor: "Idéal pour",
    ourPromise: "Notre engagement",
    promiseQuote:
      "Nous n'envoyons personne dans votre foyer tant que nous ne l'accepterions pas dans le nôtre. Cette exigence fidélise les familles depuis des années.",
    promiseAttribution: "— Équipe placement Maid My Day, Addis-Abeba",
    cta: {
      contactUs: "Contactez-nous",
      viewServices: "Voir les services",
      getStarted: "Commencer",
      exploreAllServices: "Découvrir tous les services",
      callUs: "Nous appeler",
      howItWorks: "Comment ça marche",
      whyChooseUs: "Pourquoi nous choisir",
      readFaqs: "Lire les questions",
      ourServices: "Nos services",
    },
  },
  trustBar: {
    items: [
      { label: "Personnel soigneusement vérifié" },
      { label: "Note moyenne de 5,0" },
      { label: "Réponse garantie sous 24 h" },
      { label: "Plus de 500 familles accompagnées" },
    ],
  },
  services: {
    eyebrow: "Nos services",
    title: "Tout ce dont votre foyer a besoin à Addis",
    description: "Un accompagnement professionnel à domicile et à la relocation pour familles expatriées.",
    items: [
      {
        id: "housing",
        title: "Logement & Relocation",
        description: "Trouver et vous installer dans votre nouveau logement avec un accompagnement professionnel.",
        imageAlt: "Clés d'un nouveau logement",
      },
      {
        id: "housemaids",
        title: "Femmes de ménage formées",
        description: "Personnel fiable pour le ménage, la lessive, la cuisine et l'entretien quotidien.",
        imageAlt: "Femme de ménage professionnelle",
      },
      {
        id: "drivers",
        title: "Chauffeurs professionnels",
        description: "Chauffeurs prudents et fiables pour vos déplacements personnels et familiaux.",
        imageAlt: "Chauffeur professionnel",
      },
      {
        id: "petCare",
        title: "Garde d'animaux",
        description: "Une garde de confiance pour vos animaux pendant le travail ou les voyages.",
        imageAlt: "Garde d'animaux",
      },
      {
        id: "homeManagement",
        title: "Gestion du foyer",
        description: "Un soutien complet pour que votre foyer fonctionne sans accroc.",
        imageAlt: "Intérieur moderne bien organisé",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Le processus",
    title: "Démarrer est simple",
    steps: [
      {
        number: "01",
        title: "Dites-nous ce dont vous avez besoin",
        description:
          "Remplissez notre formulaire de contact ou appelez-nous. Nous répondons sous 24 heures.",
      },
      {
        number: "02",
        title: "Nous vous mettons en relation avec la bonne équipe",
        description:
          "Nous sélectionnons et présentons du personnel adapté à votre foyer, vos horaires et vos préférences.",
      },
      {
        number: "03",
        title: "Installez-vous en toute confiance",
        description:
          "Votre foyer est géré, votre famille prise en charge et votre quotidien bien organisé.",
      },
    ],
  },
  whyUs: {
    eyebrow: "Pourquoi Maid My Day ?",
    title: "Un accompagnement de confiance pour foyers expatriés",
    description:
      "Nous savons ce qu'il faut pour s'installer dans une nouvelle ville. Maid My Day apporte des services professionnels et fiables à domicile et à la relocation aux familles qui en ont le plus besoin.",
    trustPoints: [
      { title: "Personnel soigneusement sélectionné", detail: "Chaque femme de ménage, chauffeur et aide est vérifié et interviewé avant la mise en place." },
      { title: "Standards professionnels", detail: "Formation continue et attentes claires pour chaque membre de votre équipe à domicile." },
      { title: "Service fiable et digne de confiance", detail: "Un soutien sur lequel vous pouvez compter semaine après semaine." },
      { title: "Accompagnement orienté expatriés", detail: "Conçu pour diplomates, personnel d'ambassade et professionnels internationaux nouveaux à Addis-Abeba." },
      { title: "Assistance personnalisée", detail: "Des services adaptés à votre foyer, vos horaires et les besoins de votre famille." },
    ],
    imageAlt: "Famille heureuse dans son foyer à Addis-Abeba",
    stats: { families: "Familles", rating: "Note", years: "Années" },
  },
  ...coreSectionsFr,
  footer: {
    tagline: "Maid My Day — Foyer & Relocation",
    subtitle: "Services premium à domicile et relocation à Addis-Abeba",
    quickLinksHeading: "Liens rapides",
    contactHeading: "Contactez-nous",
  },
  homePage: {
    intro: {
      eyebrow: "Bienvenue à Addis-Abeba",
      title: "Votre partenaire à domicile dès le premier jour",
      lead: "Maid My Day est conçu pour familles expatriées, diplomates et professionnels internationaux — pas seulement une liste de contacts, mais une équipe qui comprend la vie à Addis-Abeba.",
      paragraphs: [
        "En vous installant dans la capitale éthiopienne, de nouveaux quartiers, de nouvelles habitudes et de nouvelles personnes entrent dans votre foyer. Que vous soyez à Bole ou Kazanchis, nous vous aidons à trouver le bon logement, à recruter une femme de ménage de confiance, un chauffeur qui connaît les trajets scolaires et à organiser le quotidien.",
        "Contrairement aux plateformes généralistes, nous nous concentrons sur les foyers internationaux. Cela signifie communication en anglais, ponctualité, rencontres avant mise en place et garantie de remplacement si l'adéquation n'est pas là.",
        "Que vous ayez besoin d'aide dans six semaines ou d'ici la fin de la semaine, nos coordinateurs proposent une prochaine étape claire sous 24 heures — sans pression ni engagement caché.",
      ],
    },
    quickFacts: [
      { label: "Familles accompagnées", value: "500+" },
      { label: "Délai de réponse moyen", value: "24 h" },
      { label: "Quartiers couverts", value: "12+" },
      { label: "Note clients", value: "5,0" },
    ],
    packages: {
      eyebrow: "Forfaits",
      title: "Des options de relocation à chaque étape",
      description:
        "Des formules flexibles, que vous arriviez la semaine prochaine ou que vous amélioriez un foyer déjà établi.",
    },
    expectations: {
      eyebrow: "À quoi s'attendre",
      title: "Comment nous travaillons avec les foyers internationaux",
      description:
        "Des standards clairs, des délais honnêtes et un accompagnement qui continue après la mise en place.",
    },
    expectationsItems: [
      {
        title: "Vérifié et sélectionné en amont",
        detail:
          "Chaque femme de ménage, chauffeur et aide passe par entretien, vérification des références et contrôle des antécédents.",
      },
      {
        title: "Vous validez chaque mise en place",
        detail:
          "Rencontre en personne ou en visio avant tout démarrage. Votre confort et votre accord passent en premier.",
      },
      {
        title: "Suivi après le premier jour",
        detail:
          "Ajustements d'horaires, remplacements et services supplémentaires — votre coordinateur reste disponible pendant l'installation.",
      },
      {
        title: "Connaissance locale approfondie",
        detail:
          "Quartiers, circulation, baux et prestataires de confiance — des années d'expérience à Addis-Abeba au service de chaque client.",
      },
    ],
    neighborhoods: {
      eyebrow: "Vivre à Addis",
      title: "Les quartiers que nous connaissons le mieux",
      description:
        "La connaissance locale compte quand on découvre la ville. Nous plaçons du personnel et accompagnons les relocations dans les quartiers expatriés les plus prisés d'Addis-Abeba.",
    },
    neighborhoodItems: [
      {
        name: "Bole",
        detail:
          "Quartier commercial et familles d'ambassade bien établi. Proche de l'aéroport de Bole, des écoles internationales et de la restauration.",
      },
      {
        name: "Kazanchis",
        detail:
          "Centre-ville proche de l'ONU et des missions diplomatiques. Idéal pour les professionnels internationaux aux trajets courts.",
      },
      {
        name: "CMC & Megenagna",
        detail:
          "Quartiers résidentiels en croissance appréciés des familles d'ONG recherchant espace et sécurité.",
      },
      {
        name: "Old Airport & Sarbet",
        detail:
          "Quartiers établis avec villas et bonnes écoles. Favoris des missions diplomatiques de longue durée.",
      },
    ],
    relocationPackages: [
      {
        title: "Essentiel arrivée",
        description:
          "Vous avez déjà un logement et avez besoin rapidement de personnel de confiance.",
        items: [
          "Mise en place femme de ménage ou chauffeur en quelques jours",
          "Rencontre et période d'essai",
          "Point de contact dédié la première semaine",
        ],
      },
      {
        title: "Relocation complète",
        description:
          "Notre forfait phare pour familles et diplomates arrivant à Addis-Abeba pour la première fois.",
        items: [
          "Étude de quartier et shortlist de logements",
          "Aide à l'emménagement et installation des services",
          "Mise en place du personnel : femme de ménage, chauffeur ou les deux",
          "Accompagnement d'installation sur 30 jours",
        ],
      },
      {
        title: "Foyer Plus",
        description:
          "Pour résidents établis souhaitant une gestion continue du foyer et une coordination du personnel.",
        items: [
          "Coordinateur de foyer dédié",
          "Planning et supervision de plusieurs employés",
          "Coordination prestataires et maintenance",
          "Revue trimestrielle du foyer",
        ],
      },
    ],
  },
  servicesPage: servicesPageFr,
  howItWorksPage: howItWorksPageFr,
  whyUsPage: whyUsPageFr,
  faqPage: faqPageFr,
  contactPage: contactPageFr,
  chat: {
    welcome:
      "Bonjour ! Je suis l'assistant Maid My Day. Demandez-moi nos services, notre fonctionnement ou comment démarrer à Addis-Abeba.",
    fallback:
      "Je ne suis pas sûr de cela. Pour des questions spécifiques sur votre foyer, notre équipe peut vous aider — en général sous 24 heures.",
    quickPrompts: [
      "Quels services proposez-vous ?",
      "Comment ça marche ?",
      "Quels quartiers couvrez-vous ?",
      "À quelle vitesse pouvez-vous aider ?",
      "Parler à l'équipe",
    ],
    ui: {
      subtitle: "Posez vos questions sur nos services",
      quickQuestionsLabel: "Questions rapides",
      inputPlaceholder: "Posez une question...",
      inputLabel: "Saisissez votre message",
      panelAriaLabel: "Assistant chat Maid My Day",
      closeLabel: "Fermer le chat",
      openLabel: "Ouvrir l'assistant chat",
      sendLabel: "Envoyer le message",
      typingLabel: "L'assistant écrit",
    },
  },
  social: {
    openLabel: "Ouvrir le menu des réseaux sociaux",
    closeLabel: "Fermer le menu des réseaux sociaux",
    menuAriaLabel: "Liens vers les réseaux sociaux",
    followTitle: "Suivez-nous",
  },
};

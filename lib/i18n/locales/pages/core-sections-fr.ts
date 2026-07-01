import type { DeepPartial, Translations } from "../../types";

/** French translations for shared homepage / inner-page chrome sections */
export const coreSectionsFr: Pick<
  DeepPartial<Translations>,
  | "testimonials"
  | "mission"
  | "faq"
  | "contact"
  | "pageHero"
  | "pageCta"
> = {
  testimonials: {
    eyebrow: "Témoignages clients",
    title: "Ce que disent nos clients",
    description:
      "Expériences réelles d'expatriés, de diplomates et de familles que nous avons aidées à s'installer à Addis-Abeba.",
    items: [
      {
        name: "James Holloway",
        role: "Consultant ONU, Addis-Abeba",
        quote:
          "Trouver une femme de ménage dans une nouvelle ville semblait impossible. Maid My Day a trouvé quelqu'un en quelques jours. Un immense soulagement.",
      },
      {
        name: "Sophie Renard",
        role: "Personnel d'ambassade, Ambassade de France",
        quote:
          "Notre chauffeur est avec nous depuis deux ans. Ponctuel, prudent et attentionné. Exactement ce qu'il nous fallait pour l'école.",
      },
      {
        name: "Marcus Webb",
        role: "Directeur ONG, Relocalisé en 2023",
        quote:
          "L'accompagnement à la relocation s'est déroulé sans accroc. Ils nous ont aidés à trouver notre appartement, à installer les services et à organiser la garde de notre chien.",
      },
      {
        name: "Elena Vasquez",
        role: "Attachée diplomatique, Délégation UE",
        quote:
          "Ils ont compris notre foyer dès le premier appel. La femme de ménage qu'ils ont envoyée est discrète, minutieuse et toujours avec nous.",
      },
      {
        name: "David Okonkwo",
        role: "Expatrié en entreprise, Bole",
        quote:
          "Nous avions besoin d'un chauffeur et d'un soutien à la gestion du foyer en urgence. Maid My Day a répondu en une semaine. On ne pouvait pas demander mieux.",
      },
      {
        name: "Amara Chen",
        role: "Chercheuse, Relocalisée en 2024",
        quote:
          "Je suis arrivée seule à Addis-Abeba et j'étais dépassée. Ils ont rendu le premier mois gérable. Chaleureux et directs avec moi.",
      },
    ],
  },
  mission: {
    eyebrow: "Notre mission",
    title: "Faciliter la vie des familles expatriées à Addis-Abeba",
    description:
      "Rendre la vie à Addis-Abeba plus simple, plus propre et plus confortable grâce à un accompagnement fiable à domicile et à la relocation.",
    body: "Maid My Day existe pour alléger le stress de l'installation. Nous accompagnons expatriés, diplomates, personnel d'ambassade et professionnels internationaux à chaque étape.",
    mainImageAlt: "Intérieur confortable à Addis-Abeba",
    serviceOrbits: [
      { id: "housing", label: "Logement", alt: "Accompagnement logement et relocation" },
      { id: "housemaids", label: "Ménage", alt: "Femmes de ménage formées" },
      { id: "drivers", label: "Chauffeurs", alt: "Chauffeurs professionnels" },
      { id: "petCare", label: "Animaux", alt: "Garde d'animaux" },
      { id: "homeManagement", label: "Gestion", alt: "Gestion du foyer" },
    ],
    pillars: [
      {
        title: "Trouvez votre logement",
        detail:
          "Un accompagnement à la relocation pour vous installer dans le bon quartier et la bonne propriété.",
      },
      {
        title: "Recrutez du personnel de confiance",
        detail:
          "Femmes de ménage, chauffeurs et aides à domicile soigneusement sélectionnés et fiables.",
      },
      {
        title: "Restez organisés",
        detail:
          "Une gestion quotidienne du foyer pour que votre routine se déroule sans accroc à Addis-Abeba.",
      },
    ],
  },
  faq: {
    eyebrow: "Questions fréquentes",
    title: "Foire aux questions",
    description: "Des réponses claires sur notre fonctionnement. Sans jargon.",
    items: [
      {
        question: "Comment sélectionnez-vous les femmes de ménage et le personnel ?",
        answer:
          "Chaque candidat passe par un processus rigoureux : examen de la candidature, entretien en personne, vérification des références et contrôle des antécédents. Nous ne mettons en relation que des profils qui répondent à nos standards.",
      },
      {
        question: "Puis-je rencontrer le personnel avant la mise en place ?",
        answer:
          "Oui. Nous organisons une rencontre avant toute mise en place. Vous devez être entièrement à l'aise avant qu'une personne n'entre dans votre foyer.",
      },
      {
        question: "Quels quartiers d'Addis-Abeba couvrez-vous ?",
        answer:
          "Nous intervenons à Bole, Kazanchis, CMC, Old Airport, Sarbet et dans tous les principaux quartiers résidentiels d'Addis-Abeba.",
      },
      {
        question: "Que se passe-t-il si la personne mise en place ne convient pas ?",
        answer:
          "Nous offrons une garantie de remplacement. Dites-nous ce qui n'a pas fonctionné et nous trouverons une meilleure option, sans frais de placement supplémentaires.",
      },
      {
        question: "Accompagnez-vous les nouveaux expatriés à la relocation ?",
        answer:
          "Oui. Nous proposons des forfaits de relocation complets — recherche de logement, aide à l'installation, services publics et mise en place du personnel.",
      },
      {
        question: "À quelle vitesse les services démarrent-ils après contact ?",
        answer:
          "En règle générale, nous répondons à la première demande sous 24 heures et pouvons mettre en place du personnel en quelques jours.",
      },
    ],
  },
  contact: {
    eyebrow: "Contactez-nous",
    title: "Maid My Day — Foyer & Relocation",
    description:
      "Dites-nous ce dont vous avez besoin et nous vous répondrons sous 24 heures. Sans pression, sans engagement.",
    availabilityNote: "Du lundi au samedi. La plupart des réponses arrivent sous 24 heures.",
    infoLabels: { phone: "Téléphone", email: "E-mail", location: "Adresse" },
    form: {
      heading: "Envoyer un message",
      fields: {
        fullName: "Nom complet",
        email: "E-mail",
        phone: "Téléphone",
        services: "De quoi avez-vous besoin ?",
        message: "Votre message",
      },
      placeholders: {
        name: "Votre nom",
        email: "vous@email.com",
        phone: "+251 ...",
        message:
          "Quelques lignes sur votre foyer, vos délais et ce qui vous aiderait.",
      },
      servicePicker: {
        placeholder: "Choisir un service",
        ariaAvailable: "Services disponibles",
        ariaSelected: "Services sélectionnés",
        allSelected: "Tous les services sélectionnés",
        removeAria: "Retirer {label}",
      },
      serviceOptions: [
        { value: "relocation", label: "Accompagnement logement & relocation" },
        { value: "housemaid", label: "Femmes de ménage formées" },
        { value: "driver", label: "Chauffeurs professionnels" },
        { value: "pet-care", label: "Garde d'animaux" },
        { value: "management", label: "Gestion du foyer" },
        { value: "other", label: "Autre chose" },
      ],
      submit: "Envoyer le message",
      submitting: "Envoi en cours...",
      errors: { selectService: "Veuillez sélectionner au moins un service." },
      toasts: {
        selectService: {
          title: "Veuillez sélectionner au moins un service",
          description: "Choisissez les services dont vous avez besoin avant d'envoyer votre message.",
        },
        success: {
          title: "Message envoyé avec succès",
          description: "Nous avons bien reçu votre demande et vous répondrons sous 24 heures.",
        },
        error: {
          title: "Le message n'a pas pu être envoyé",
          description: "Une erreur s'est produite. Veuillez réessayer dans un instant.",
        },
      },
    },
  },
  pageHero: {
    services: {
      eyebrow: "Nos services",
      title: "Un accompagnement premium à domicile et à la relocation à Addis-Abeba",
      description:
        "De la recherche d'appartement aux femmes de ménage, chauffeurs et garde d'animaux de confiance — Maid My Day rend votre foyer plus serein.",
    },
    howItWorks: {
      eyebrow: "Comment ça marche",
      title: "De la première prise de contact à un foyer installé",
      description:
        "Un processus simple, aux standards internationaux. Des attentes claires, du personnel vérifié et un suivi après la mise en place.",
    },
    whyUs: {
      eyebrow: "Pourquoi Maid My Day",
      title: "L'expertise internationale en laquelle nos clients ont confiance",
      description:
        "Nous connaissons les diplomates, le personnel d'ambassade et les familles expatriées à Addis-Abeba — et nous offrons un accompagnement qui fonctionne au quotidien.",
    },
    faq: {
      eyebrow: "Centre d'aide",
      title: "Des réponses avant de vous engager",
      description:
        "Sélection, mise en place, forfaits, tarifs et suivi continu — en langage clair.",
    },
    contact: {
      eyebrow: "Contactez-nous",
      title: "Dites-nous ce dont votre foyer a besoin",
      description:
        "Que vous ayez besoin d'aide la semaine prochaine ou cette semaine, notre équipe vous indique la prochaine étape sous 24 heures.",
    },
  },
  pageCta: {
    services: {
      title: "Prêt à constituer votre équipe à domicile ?",
      description:
        "Dites-nous ce dont vous avez besoin — relocation, personnel, chauffeurs ou gestion complète — et nous vous proposerons un plan sous 24 heures.",
      secondaryLabel: "Comment ça marche",
    },
    howItWorks: {
      title: "Commençons par une conversation",
      description:
        "Pas besoin d'un long formulaire. Quelques mots sur votre foyer suffisent — nous nous occupons du reste.",
      secondaryLabel: "Pourquoi nous choisir",
    },
    whyUs: {
      title: "Découvrez la différence d'un partenaire de confiance",
      description:
        "De nombreuses familles expatriées font confiance à Maid My Day pour un accompagnement professionnel à domicile.",
      secondaryLabel: "Lire les questions",
    },
    faq: {
      title: "Vous avez encore des questions ?",
      description:
        "Notre équipe sera ravie d'examiner votre situation — taille du foyer, calendrier et budget.",
      secondaryLabel: "Nos services",
    },
    contact: {
      title: "Vous préférez en parler directement ?",
      description:
        "Appelez-nous au +251 911 000 000 ou écrivez à hello@maidmyday.com. Nous sommes là du lundi au samedi.",
      primaryLabel: "Nous appeler",
      secondaryLabel: "Voir les services",
    },
  },
};

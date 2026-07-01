import type { DeepPartial, Translations } from "../../types";

export const howItWorksPageFr: DeepPartial<Translations>["howItWorksPage"] = {
  detailedProcess: {
    eyebrow: "Étape par étape",
    title: "Votre parcours avec Maid My Day",
    description:
      "Sept étapes claires, de la première demande au soutien à long terme — avec des délais réalistes pour savoir à quoi vous attendre.",
  },
  detailedProcessSteps: [
    {
      step: "01",
      title: "Partagez votre situation",
      description:
        "Parlez-nous de votre foyer — qui vit avec vous, où vous êtes (ou serez) à Addis-Abeba, et le type d'accompagnement recherché.",
      duration: "Jour 1",
    },
    {
      step: "02",
      title: "Évaluation des besoins",
      description:
        "Nous clarifions l'emploi du temps, la langue, les préférences intérieur/extérieur et les besoins spécifiques (animaux, enfants, cuisine, sécurité).",
      duration: "Jours 1–2",
    },
    {
      step: "03",
      title: "Shortlist",
      description:
        "Notre équipe examine des candidats vérifiés et vous envoie une shortlist sous 24 à 48 heures.",
      duration: "Jours 2–3",
    },
    {
      step: "04",
      title: "Rencontre",
      description:
        "Vous rencontrez les candidats en personne ou en visio. Nous vous conseillons sur les questions à poser et les signaux à observer.",
      duration: "Jours 3–5",
    },
    {
      step: "05",
      title: "Essai et mise en place",
      description:
        "Une courte période d'essai permet de confirmer l'adéquation. Une fois validé, nous finalisons les conditions et la date de début.",
      duration: "Semaine 1",
    },
    {
      step: "06",
      title: "Suivi d'installation",
      description:
        "La première semaine, nous vérifions que les horaires fonctionnent, que la communication est claire et que les ajustements sont faits rapidement.",
      duration: "Semaines 2–4",
    },
    {
      step: "07",
      title: "Partenariat continu",
      description:
        "Remplacements, personnel supplémentaire, améliorations de relocation et gestion du foyer — votre contact reste disponible.",
      duration: "En continu",
    },
  ],
  first30Days: {
    eyebrow: "Les 30 premiers jours",
    title: "À quoi ressemble votre premier mois",
    description:
      "Un calendrier type pour les familles arrivant à Addis-Abeba ou ajoutant du personnel à un foyer existant.",
    phases: [
      {
        week: "Semaine 1",
        title: "Arrivée et mise en relation",
        items: [
          "Soumettez votre demande ou planifiez un premier appel",
          "Recevez votre shortlist et organisez les rencontres",
          "Si relocation : premières visites de logements",
        ],
      },
      {
        week: "Semaine 2",
        title: "Concordance et installation",
        items: [
          "Finalisez l'essai avec la femme de ménage ou le chauffeur",
          "Si relocation : concluez le bail et l'emménagement",
          "Établissez les routines du foyer et du personnel",
        ],
      },
      {
        week: "Semaines 3–4",
        title: "Installation et ajustements",
        items: [
          "Point de suivi avec votre coordinateur Maid My Day",
          "Ajustez horaires ou tâches si nécessaire",
          "Ajoutez garde d'animaux ou gestion du foyer si besoin",
        ],
      },
    ],
  },
  prepare: {
    eyebrow: "Avant de nous contacter",
    title: "Ce qu'il est utile d'avoir sous la main",
    description:
      "Plus vous partagez de contexte dès le départ, plus vite nous pourrons vous proposer le bon personnel ou le bon plan de relocation.",
  },
  preparationChecklist: [
    "Votre date d'arrivée ou le quartier où vous êtes déjà à Addis-Abeba",
    "Taille du foyer et présence d'enfants ou d'animaux",
    "Emploi du temps souhaité (temps plein, mi-temps, intérieur/extérieur)",
    "Préférences linguistiques pour le personnel",
    "Tâches spécifiques : cuisine, ménage, itinéraires chauffeur, école",
    "Budget et délais — urgent ou flexible",
  ],
  processFaq: {
    eyebrow: "Questions courantes",
    title: "Réponses rapides pour démarrer",
    description: "Ce que nos clients demandent souvent avant la première rencontre.",
  },
  processFaqItems: [
    {
      question: "À quelle vitesse pouvez-vous mettre en place du personnel ?",
      answer:
        "La plupart des demandes reçoivent une shortlist sous 24 à 48 heures. Les besoins urgents sont prioritaires — beaucoup de familles ont du personnel en place en quelques jours.",
    },
    {
      question: "Et si la première personne ne convient pas ?",
      answer:
        "Nous offrons une garantie de remplacement. Dites-nous ce qui n'a pas fonctionné et nous proposerons une meilleure option, sans frais de placement supplémentaires.",
    },
    {
      question: "Faut-il nous contacter avant d'arriver ?",
      answer:
        "Non. Beaucoup de clients nous contactent avant leur arrivée pour lancer la recherche de logement et la mise en place du personnel.",
    },
  ],
};

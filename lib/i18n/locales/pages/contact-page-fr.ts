import type { DeepPartial, Translations } from "../../types";

export const contactPageFr: DeepPartial<Translations>["contactPage"] = {
  afterContact: {
    eyebrow: "Et ensuite",
    title: "Après l'envoi de votre message",
    description:
      "Pas de boîte mail sans réponse. Voici exactement comment nous traitons chaque demande de foyers expatriés à Addis-Abeba.",
  },
  afterContactSteps: [
    {
      title: "Nous lisons votre message",
      description: "Un coordinateur examine votre situation — comme un jour ouvré classique.",
    },
    {
      title: "Réponse sous 24 heures",
      description: "Une réponse personnalisée à votre demande, les prochaines étapes ou un créneau d'appel — pas de réponse automatique.",
    },
    {
      title: "Nous construisons votre plan",
      description: "Shortlist, visites ou rencontre rapide selon ce dont vous avez besoin.",
    },
    {
      title: "Nous restons présents",
      description: "Après la mise en place, la même équipe gère les ajustements, les ajouts et vos retours.",
    },
  ],
  office: {
    eyebrow: "Bureau & disponibilité",
    title: "Comment nous joindre",
    description:
      "Basés à Addis-Abeba, nous servons les foyers internationaux dans toute la ville. Nous répondons en anglais clair — et pouvons coordonner en amharique ou en français si nécessaire.",
    labels: {
      officeHours: "Horaires du bureau",
      responseTime: "Délai de réponse",
      languages: "Langues",
      coverage: "Couverture",
    },
    hours: "Lundi – samedi, 8 h 30 – 18 h (EAT)",
    response: "La plupart des demandes reçoivent une réponse sous 24 heures",
    languages: "Anglais, français et amharique disponibles",
    coverage: "Tous les principaux quartiers résidentiels d'Addis-Abeba",
  },
  prepTips: {
    eyebrow: "Avant d'écrire",
    title: "Conseils pour une réponse plus rapide et utile",
    description:
      "Incluez ces informations dans votre message pour une première réponse plus pertinente.",
  },
  prepTipsItems: [
    { title: "Indiquez vos délais", detail: "Date d'arrivée, fin de bail ou urgence pour le personnel." },
    { title: "Décrivez votre foyer", detail: "Enfants, animaux, personnel intérieur/extérieur et langues." },
    { title: "Listez les tâches prioritaires", detail: "École, cuisine, ménage, promenades des animaux." },
    { title: "Précisez votre quartier", detail: "Bole, Kazanchis, CMC — cela influence les options et la rapidité de mise en place." },
  ],
};

import type { DeepPartial, Translations } from "../../types";

export const faqPageFr: DeepPartial<Translations>["faqPage"] = {
  moreAnswers: {
    eyebrow: "Plus de réponses",
    title: "Parcourir par thème",
    description:
      "Questions supplémentaires avant et après la mise en place — contrats, facturation, calendrier de relocation et suivi continu.",
  },
  extendedFaqs: [
    {
      category: "Pour démarrer",
      items: [
        {
          question: "Y a-t-il une durée minimale d'engagement pour le personnel ?",
          answer:
            "Cela dépend du poste et de l'emploi du temps. Beaucoup de clients font une période d'essai d'une à deux semaines, puis un contrat mensuel. Nous expliquons les options clairement dès le départ.",
        },
        {
          question: "Puis-je engager du personnel pour une courte durée ?",
          answer: "Oui. Familles en visite, postes intermédiaires, besoins saisonniers — nous nous adaptons.",
        },
        {
          question: "Aidez-vous pour les permis de travail ou la documentation ?",
          answer:
            "Nous vous orientons selon la réglementation locale et pouvons coordonner avec votre service juridique ou RH. La documentation dépend du statut de l'employé et de votre visa.",
        },
      ],
    },
    {
      category: "Personnel & sélection",
      items: [
        {
          question: "Les femmes de ménage sont-elles formées ?",
          answer:
            "Elles sont évaluées sur le ménage, la lessive, l'hygiène en cuisine et la communication. Vous pouvez demander une formation complémentaire pendant la période d'essai.",
        },
        {
          question: "Les chauffeurs connaissent-ils les écoles internationales ?",
          answer: "Oui. Nous desservons les grandes écoles de Bole, Old Airport et CMC.",
        },
        {
          question: "Puis-je demander du personnel anglophone ?",
          answer: "Oui. Les préférences linguistiques font partie de notre évaluation des besoins.",
        },
      ],
    },
    {
      category: "Tarifs & facturation",
      items: [
        {
          question: "Comment les tarifs sont-ils structurés ?",
          answer:
            "Le salaire se négocie entre vous et l'employé. Maid My Day facture des frais de placement et de coordination. Nous fournissons une grille tarifaire claire après votre demande.",
        },
        {
          question: "Y a-t-il des frais cachés ?",
          answer: "Non. Frais de placement, forfaits relocation et suppléments sont indiqués à l'avance. Le remplacement n'entraîne pas de nouveau frais de placement.",
        },
        {
          question: "Facturez-vous les organisations ou ambassades ?",
          answer: "Nous pouvons convenir d'accords de facturation institutionnels. Indiquez-nous les exigences de votre employeur.",
        },
      ],
    },
    {
      category: "Relocation",
      items: [
        {
          question: "Combien de temps à l'avance contacter pour une relocation ?",
          answer:
            "Pour un forfait complet, quatre à six semaines est idéal. Pour la mise en place du personnel seul, nous pouvons démarrer sous 24 heures.",
        },
        {
          question: "Et si nous sommes déjà à Addis-Abeba mais insatisfaits du personnel actuel ?",
          answer: "Oui. Nous proposons rapidement des options de remplacement et d'amélioration.",
        },
        {
          question: "Aidez-vous pour les meubles et l'équipement ?",
          answer: "Nous conseillons et mettons en relation avec des prestataires. L'achat peut être coordonné dans les forfaits premium.",
        },
      ],
    },
    {
      category: "Suivi continu",
      items: [
        {
          question: "Que se passe-t-il si l'emploi du temps change après la mise en place ?",
          answer: "Contactez votre coordinateur Maid My Day. Nous ajustons horaires, tâches ou personnel supplémentaire.",
        },
        {
          question: "Couvrez-vous les congés ou absences du personnel ?",
          answer: "Nous pouvons organiser un remplacement si vous nous prévenez à l'avance. La disponibilité dépend de la saison et du poste.",
        },
        {
          question: "Comment donner un retour sur les performances ?",
          answer: "Via votre contact dédié par téléphone ou e-mail. Nous traitons les retours de manière constructive pour trouver une solution.",
        },
      ],
    },
  ],
  stillWondering: {
    title: "Questions souvent posées lors de la première rencontre",
    items: [
      "Pouvez-vous aider si je n'ai besoin que d'un chauffeur ?",
      "Quand faut-il commencer si j'arrive le mois prochain ?",
      "Le personnel respecte-t-il les règles des résidences d'ambassade ?",
      "Le personnel parle-t-il anglais avec nos enfants ?",
      "Et si nos besoins évoluent après la mise en place ?",
    ],
  },
};

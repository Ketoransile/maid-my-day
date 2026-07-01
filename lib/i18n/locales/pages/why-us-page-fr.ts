import type { DeepPartial, Translations } from "../../types";

export const whyUsPageFr: DeepPartial<Translations>["whyUsPage"] = {
  whoWeServe: {
    eyebrow: "Qui nous servons",
    title: "Un accompagnement à domicile pour professionnels internationaux",
    description:
      "Maid My Day n'est pas une agence de placement généraliste. Nous nous spécialisons dans les foyers qui font tourner Addis-Abeba internationale — diplomatiques, humanitaires et d'entreprise.",
  },
  whoWeServeItems: [
    {
      title: "Diplomates & personnel d'ambassade",
      description:
        "Discrétion, sensibilité à la sécurité et personnel habitué au protocole. Familles d'ambassade accompagnées dans les quartiers diplomatiques d'Addis-Abeba.",
    },
    {
      title: "Professionnels ONU & ONG",
      description:
        "Mise en place rapide pour missions tournantes, horaires imprévisibles et standards de foyer internationaux.",
    },
    {
      title: "Expatriés en entreprise",
      description:
        "Cadres qui ont besoin de chauffeurs, de personnel et d'une organisation du foyer fiables — sans y consacrer leurs week-ends.",
    },
    {
      title: "Familles internationales",
      description:
        "Parents dont les enfants intègrent une nouvelle école et qui veulent un foyer propre, stable et serein.",
    },
  ],
  standards: {
    eyebrow: "Nos standards",
    title: "Comment nous gagnons la confiance, placement après placement",
    description:
      "Chaque foyer est différent. Ces principes restent les mêmes — que vous ayez besoin d'un chauffeur demain ou d'une relocation complète sur six semaines.",
  },
  standardsItems: [
    { title: "Sélection rigoureuse", detail: "Candidature, entretien, références et vérification des antécédents." },
    { title: "Le client décide en premier", detail: "Aucune mise en place sans votre accord explicite après la rencontre." },
    { title: "Garantie de remplacement", detail: "Si l'adéquation n'est pas là, une meilleure option sans frais de placement supplémentaires." },
    { title: "Communication claire", detail: "Un contact dédié, des délais transparents et des réponses fiables." },
    { title: "Expertise locale", detail: "Quartiers d'Addis-Abeba, baux, circulation et prestataires de confiance." },
    { title: "Relations durables", detail: "Beaucoup de clients gardent le même chauffeur ou la même femme de ménage pendant des années." },
  ],
  story: {
    eyebrow: "Notre approche",
    title: "Les personnes d'abord, la mise en place ensuite",
    paragraphs: [
      "Maid My Day est né parce que s'installer à Addis-Abeba s'avérait plus difficile qu'il ne le devrait.",
      "Aujourd'hui, nous accompagnons des familles dans les milieux diplomatique, humanitaire et d'entreprise. Nous connaissons la différence entre un besoin urgent et le bon profil à long terme.",
      "Cette patience se voit dans la fidélité : des clients d'il y a des années nous appellent encore.",
    ],
  },
};

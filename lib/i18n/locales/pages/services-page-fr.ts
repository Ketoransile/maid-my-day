import type { DeepPartial, Translations } from "../../types";

export const servicesPageFr: DeepPartial<Translations>["servicesPage"] = {
  areas: {
    eyebrow: "Couverture",
    title: "Les quartiers que nous desservons à Addis-Abeba",
    description:
      "Nous plaçons du personnel et accompagnons les relocations dans tous les principaux quartiers résidentiels — à proximité des ambassades, des écoles internationales et des zones d'affaires.",
  },
  serviceAreas: [
    "Bole",
    "Kazanchis",
    "CMC",
    "Old Airport",
    "Sarbet",
    "Megenagna",
    "Summit",
    "Gerji",
    "Ayat",
    "Lebu",
    "Saris",
    "Kirkos",
  ],
  packages: {
    eyebrow: "Forfaits",
    title: "Forfaits relocation & foyer",
    description:
      "Des options flexibles, que vous arriviez la semaine prochaine ou que vous amélioriez un foyer déjà établi.",
  },
  whyItMatters: {
    eyebrow: "Pourquoi c'est important",
    title: "Plus que du personnel — une vie de foyer plus sereine",
  },
  whyItMattersItems: [
    {
      title: "Moins de gestion, plus de vie",
      body: "Arrêtez de coordonner personnel, prestataires et tâches. Nous gérons la partie opérationnelle pour que vous puissiez vous concentrer sur le travail et la famille.",
    },
    {
      title: "Une relation qui dure",
      body: "Beaucoup de nos clients gardent le même chauffeur ou la même femme de ménage pendant des années. Nous travaillons sur la continuité, pas sur des changements rapides.",
    },
    {
      title: "Un seul point de contact",
      body: "Personnel à domicile, chauffeurs, relocation et gestion du foyer — tout est coordonné via votre compte Maid My Day.",
    },
  ],
  serviceDetails: [
    {
      id: "housing",
      title: "Logement & Relocation",
      summary:
        "Un accompagnement complet pour trouver, valider et vous installer dans le bon logement à Addis-Abeba.",
      paragraphs: [
        "Déménager dans un nouveau pays, c'est découvrir des quartiers inconnus, des règles de location et l'installation des services — souvent en parallèle du travail et de la vie de famille. Notre équipe relocation vous guide avec une connaissance locale des quartiers, des trajets, des critères de sécurité et de votre mode de vie.",
        "Nous coordonnons les visites, les propriétaires et les gestionnaires, et nous comprenons ce que couvrent les baux locaux. Une fois votre choix fait, nous aidons à la logistique d'emménagement, à la remise des clés et aux prestataires de confiance.",
        "Pour les familles arrivant sous pression — ambassades et missions ONG — nous proposons un forfait de recherche accélérée avec des mises à jour quotidiennes et une shortlist alignée sur vos priorités.",
      ],
      includes: [
        "Étude de quartier : Bole, Kazanchis, CMC, Old Airport, Sarbet et autres",
        "Shortlist de biens selon budget, taille et sécurité",
        "Coordination des visites et aide à la relecture du bail",
        "Aide à l'emménagement et guide pour les services publics",
        "Point de contact dédié le premier mois",
      ],
      idealFor: [
        "Nouveaux expatriés et familles diplomatiques",
        "Professionnels ONU, ONG ou entreprise en relocation",
        "Familles changeant de quartier ou améliorant leur logement à Addis-Abeba",
      ],
      imageAlt: "Clés et documents pour un nouveau logement à Addis-Abeba",
    },
    {
      id: "housemaids",
      title: "Femmes de ménage formées",
      summary:
        "Du personnel de maison fiable pour le ménage, la lessive, la cuisine et l'entretien quotidien.",
      paragraphs: [
        "Une bonne femme de ménage transforme le quotidien — mais trouver quelqu'un de confiance dans une nouvelle ville est difficile. Chaque candidate Maid My Day passe par un entretien, une vérification des références et un contrôle de compétences.",
        "Nous plaçons du personnel à temps plein, à mi-temps ou en externe. Vous décrivez l'emploi du temps, les préférences linguistiques et les tâches ; nous sélectionnons des profils adaptés. L'aide à la cuisine peut couvrir la cuisine éthiopienne, internationale ou les deux.",
        "Après la mise en place, nous restons disponibles pour les ajustements d'horaires, les remplacements et les retours.",
      ],
      includes: [
        "Sélection en plusieurs étapes : entretien, références et vérification",
        "Rencontre obligatoire avant toute mise en place",
        "Ménage, lessive, repassage et entretien de la cuisine",
        "Garantie de remplacement en cas de non-concordance",
        "Suivi continu via votre compte",
      ],
      idealFor: [
        "Familles avec enfants ayant besoin d'aide quotidienne",
        "Couples aux deux carrières actives",
        "Clients souhaitant cuisine et entretien confiés à une personne de confiance",
      ],
      imageAlt: "Femme de ménage professionnelle entretenant un intérieur",
    },
    {
      id: "drivers",
      title: "Chauffeurs professionnels",
      summary:
        "Des chauffeurs prudents pour l'école, le bureau et les déplacements familiaux à Addis-Abeba.",
      paragraphs: [
        "La circulation d'Addis-Abeba et les routes peu familières compliquent même les trajets simples. Nos chauffeurs ont un historique de conduite sûr, une bonne connaissance des itinéraires locaux et un comportement professionnel adapté aux familles.",
        "Chauffeur familial à temps plein, demi-journée scolaire ou transferts ponctuels — nous adaptons le profil à votre emploi du temps, votre véhicule et votre langue. Beaucoup de nos clients sont des familles d'ambassades et d'ONG qui privilégient discrétion et fiabilité.",
        "Les chauffeurs peuvent utiliser votre véhicule ou nous vous conseillons sur le transport local si vous débutez en Éthiopie.",
      ],
      includes: [
        "Chauffeurs titulaires d'un permis avec expérience confirmée à Addis-Abeba",
        "École, courses, travail et transferts aéroport",
        "Horaires et niveau de discrétion professionnelle",
        "Rencontre et essai avant engagement long terme",
        "Organisation d'un remplaçant si le chauffeur est indisponible",
      ],
      idealFor: [
        "Familles avec enfants en âge scolaire",
        "Cadres et diplomates aux agendas imprévisibles",
        "Foyers préférant un chauffeur de confiance à la conduite personnelle",
      ],
      imageAlt: "Chauffeur professionnel assurant un transport familial en toute sécurité",
    },
    {
      id: "petCare",
      title: "Garde d'animaux",
      summary:
        "Une garde fiable pour chiens, chats et autres animaux pendant le travail, les voyages ou l'installation.",
      paragraphs: [
        "Les animaux font partie de la famille — les emmener en relocation ajoute une couche de complexité. Notre personnel de garde nourrit, promène, assure les soins de base et communique pendant vos absences.",
        "Nous tenons compte de l'âge, du tempérament et des habitudes de l'animal. Pour les nouvelles familles, nous pouvons mettre en relation avec des vétérinaires et des refuges de confiance.",
        "Des mises à jour régulières et un journal de bord vous permettent de suivre le bien-être de votre animal à tout moment.",
      ],
      includes: [
        "Nourriture, promenades et jeux quotidiens",
        "Garde de nuit ou longue durée sur demande",
        "Rappels de médicaments et accompagnement vétérinaire",
        "Gardes habituées aux chiens et aux chats",
        "Planning flexible selon vos voyages",
      ],
      idealFor: [
        "Familles expatriées arrivant avec leurs animaux",
        "Professionnels voyageant régulièrement",
        "Foyers ayant besoin d'une garde quand le personnel de maison est absent",
      ],
      imageAlt: "Gardienne s'occupant d'un chien en famille",
    },
    {
      id: "homeManagement",
      title: "Gestion du foyer",
      summary:
        "Une coordination complète pour que votre foyer fonctionne sans accroc — prestataires, planning et suivi quotidien.",
      paragraphs: [
        "Dans un nouveau pays, travail, famille et logistique se chevauchent : courses, factures, appels de maintenance, planning du personnel. La gestion du foyer structure tout cela.",
        "Nous assignons un coordinateur qui connaît votre foyer — qui intervient quand, ce qui est fait chaque semaine et quels prestataires locaux sont fiables. Particulièrement utile pour les grandes résidences, les propriétés avec personnel de maison ou les foyers multi-employés.",
        "Comme un majordome professionnel sans engagement à temps plein : organisé, proactif et centré sur un foyer efficace et serein.",
      ],
      includes: [
        "Coordination des horaires du personnel de maison et des chauffeurs",
        "Prestataires recommandés : produits d'entretien, maintenance, jardinage",
        "Gestion des stocks et listes de courses",
        "Revue mensuelle du foyer et résolution des problèmes",
        "Point de contact unique pour tous les services Maid My Day",
      ],
      idealFor: [
        "Grandes familles avec plusieurs employés",
        "Cadres souhaitant déléguer l'administration du foyer",
        "Foyers préférant éviter de coordonner de nombreux prestataires",
      ],
      imageAlt: "Intérieur moderne bien organisé à Addis-Abeba",
    },
  ],
};

export type Review = {
  id: string;
  author: string;
  initials: string;
  avatarTone: "forest" | "terracotta" | "amber" | "ink";
  date: string;
  text: string;
  rating: 5;
  source: "Google";
};

export const reviewsStats = {
  rating: 4.5,
  count: 433,
  source: "Google",
} as const;

// Placeholders inspirés du style Google. À remplacer par les vrais noms
// si la cliente souhaite afficher des avis nominatifs.
export const reviews: Review[] = [
  {
    id: "avis-1",
    author: "Sylvie Raoul",
    initials: "S",
    avatarTone: "terracotta",
    date: "Il y a 3 jours",
    rating: 5,
    source: "Google",
    text: "Très très bon, copieux, frais, service impeccable, ambiance agréable. Je vous le recommande vraiment. Merci l'équipe !",
  },
  {
    id: "avis-2",
    author: "Nadine Mart",
    initials: "N",
    avatarTone: "forest",
    date: "Il y a 2 semaines",
    rating: 5,
    source: "Google",
    text: "Sur la route de Strasbourg, nous trouvons par hasard ce petit restaurant. Accueil sympathique, plats délicieux et originaux pour certains, très bien présentés du début à la fin. Une belle découverte pour une étape plaisir.",
  },
  {
    id: "avis-3",
    author: "Marie B.",
    initials: "M",
    avatarTone: "amber",
    date: "Il y a 3 mois",
    rating: 5,
    source: "Google",
    text: "Excellent accueil de Julie. Plats excellents, je recommande vivement ce restaurant.",
  },
  {
    id: "avis-4",
    author: "Christophe D.",
    initials: "C",
    avatarTone: "ink",
    date: "Il y a 4 mois",
    rating: 5,
    source: "Google",
    text: "Première visite la semaine dernière, ce fut une très belle expérience. Accueil très chaleureux, cuisine exceptionnelle, produits de qualité, belle présentation des plats. Un vrai coup de cœur — on s'y sent bien. Nous reviendrons très bientôt en famille.",
  },
  {
    id: "avis-5",
    author: "Clémentine Monin",
    initials: "C",
    avatarTone: "forest",
    date: "Il y a 1 mois",
    rating: 5,
    source: "Google",
    text: "Le Petit Gourmet est un restaurant génial ! Le personnel est sympathique, bienveillant et souriant. La cuisine est très bonne, bien présentée et travaillée. La décoration est très jolie, on s'y sent à l'aise. Et de la musique pour mettre de l'ambiance ! Nous sommes des clients habituels et nous reviendrons encore, c'est sûr. Bonne continuation 😉",
  },
  {
    id: "avis-6",
    author: "V. Séverine",
    initials: "V",
    avatarTone: "amber",
    date: "Il y a 2 mois",
    rating: 5,
    source: "Google",
    text: "Très bonne adresse pour une petite halte bienvenue sur la route. Ce duo féminin assure, que ce soit en cuisine ou en salle, le tout avec un sourire communicatif.",
  },
  {
    id: "avis-7",
    author: "Liza Vinot",
    initials: "L",
    avatarTone: "terracotta",
    date: "Il y a 2 mois",
    rating: 5,
    source: "Google",
    text: "Super, restaurant décoré avec harmonie, la cuisine est excellente ! Le service est très rapide, l'accueil très chaleureux. Je recommande.",
  },
];

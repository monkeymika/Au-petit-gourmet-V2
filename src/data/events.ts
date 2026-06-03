export type EventItem = {
  id: string;
  title: string;
  period: string;
  excerpt: string;
  poster: string;
  posterAlt: string;
};

export const events: EventItem[] = [
  {
    id: "soirees-guinguettes",
    title: "Soirées Guinguettes Pop-Rock",
    period: "05 juin → 28 août 2026",
    excerpt:
      "Concerts live dans le jardin du restaurant. Soirées Braséro, Moules-frites et Cochon à la broche au programme.",
    poster: "/affiches/soirees-guinguettes.webp",
    posterAlt:
      "Affiche des soirées guinguettes pop-rock au restaurant Au Petit Gourmet, du 5 juin au 28 août 2026",
  },
  {
    id: "programme-concerts",
    title: "Programme des concerts",
    period: "Été 2026",
    excerpt:
      "Huit soirées thématiques avec groupes live : Pop Lollie's, BSOB, Driving Soul, SOHO, Toniskall, Crossroad, Petocask.",
    poster: "/affiches/programme-concerts.webp",
    posterAlt:
      "Programme détaillé des concerts des soirées guinguettes pop-rock, été 2026",
  },
  {
    id: "depot-de-pain",
    title: "Dépôt de pain",
    period: "À partir de janvier 2026",
    excerpt:
      "Pains et viennoiseries de la région à retirer au restaurant. Sur commande.",
    poster: "/affiches/depot-de-pain.webp",
    posterAlt: "Affiche du dépôt de pain au restaurant Au Petit Gourmet",
  },
];

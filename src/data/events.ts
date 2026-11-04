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
    id: "foie-gras-a-emporter",
    title: "Foie gras à emporter",
    period: "Disponible à la vente",
    excerpt:
      "Foie gras de canard maison au whisky de Rozelieures, préparé à la demande dans la quantité de votre choix. 128€ le kilo, 64€ les 500g, 32€ les 250g.",
    poster: "/affiches/foie-gras-a-emporter.webp",
    posterAlt:
      "Affiche de vente à emporter du foie gras de canard maison au whisky de Rozelieures, Au Petit Gourmet",
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

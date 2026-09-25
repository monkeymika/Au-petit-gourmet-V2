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
    id: "octobre-rose",
    title: "Octobre Rose",
    period: "Tout le mois d'octobre",
    excerpt:
      "Deux cocktails créés pour l'occasion : « Le Rosa » (fraise, fruits de la passion, framboise, perrier) à 8,50€ et « Le Sarti Rosa » (mangue, fruits de la passion, prosecco, perrier) à 10,50€. Les bénéfices sont reversés à l'association Symphonie.",
    poster: "/affiches/octobre-rose.webp",
    posterAlt:
      "Affiche Octobre Rose du restaurant Au Petit Gourmet : cocktails Le Rosa et Le Sarti Rosa au profit de l'association Symphonie",
  },
  {
    id: "soiree-paella",
    title: "Soirée Paella",
    period: "Samedi 17 octobre",
    excerpt:
      "Assiette de tapas, paella et crème catalane pour une soirée aux saveurs du Sud. 35€/pers, sur réservation.",
    poster: "/affiches/soiree-paella.webp",
    posterAlt: "Affiche de la soirée paella du samedi 17 octobre au restaurant Au Petit Gourmet",
  },
  {
    id: "soiree-moules-frites",
    title: "Soirée Moules-Frites",
    period: "Samedi 31 octobre 2026, 19h",
    excerpt:
      "La soirée conviviale et gourmande ! 22€/pers, sur réservation.",
    poster: "/affiches/soiree-moules-frites.webp",
    posterAlt: "Affiche de la soirée moules-frites du samedi 31 octobre 2026 au restaurant Au Petit Gourmet",
  },
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

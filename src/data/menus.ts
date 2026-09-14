export type FixedMenu = {
  slug: string;
  title: string;
  subtitle?: string;
  price: number;
  schedule?: string;
  courses?: { label: string; items?: string[]; allergens?: string }[];
};

export const menus: FixedMenu[] = [
  {
    slug: "menu-du-jour",
    title: "Menu",
    price: 21.5,
    schedule: "Formules servies du lundi au vendredi midi",
    courses: [
      { label: "Entrée + Plat + Dessert" },
      { label: "Entrée du jour" },
      { label: "Plat du jour" },
      { label: "Dessert du jour" },
    ],
  },
  {
    slug: "formule-express",
    title: "Formule Express",
    price: 17,
    courses: [
      { label: "Entrée + Plat" },
      { label: "ou" },
      { label: "Plat + Café gourmand" },
    ],
  },
  {
    slug: "menu-gourmet",
    title: "Menu Gourmet",
    price: 35,
    schedule: "Menu servi uniquement le vendredi soir, samedi soir et dimanche midi et les jours fériés",
    courses: [
      {
        label: "Entrées",
        items: [
          "Oeuf cocotte, crémeux à la châtaigne et éclats de châtaignes.",
          "Tartare de betteraves du jardin, ricotta fouettée, pickles de légumes, pesto aux éclats de pistaches et vinaigrette aux piments et poivrons.",
        ],
        allergens: "*7/3 · *7/8",
      },
      {
        label: "Plats",
        items: [
          "Noix de joue de porc confite au vin rouge et sa polenta crémeuse.",
          "Dos de lieu noir, purée de courges et sauce beurre blanc au cidre.",
        ],
        allergens: "*7/10/1 · *7/5",
      },
      {
        label: "Desserts",
        items: [
          "Crème brûlée infusée à la bergamote.",
          "Coupe automnale — sorbet pomme, glace vanille macadamia caramel, pommes caramélisées et chantilly.",
        ],
        allergens: "*7/3 · *7/8",
      },
    ],
  },
  {
    slug: "menu-signature",
    title: "Menu Signature",
    price: 46,
    schedule: "Menu servi uniquement le vendredi soir, samedi soir et dimanche midi et les jours fériés",
    courses: [
      {
        label: "Entrées",
        items: [
          "Duo de foie gras — foie gras de canard au whisky de Rozelieures, pain d'épices, gelée de groseilles, mini crème brûlée au foie gras et pointe de crème de framboise-combava.",
          "Houmous de butternut au paprika fumé, noix de saint jacques snackées et huile de cacahuète.",
        ],
        allergens: "*12/1/3/7 · *7/11/14",
      },
      {
        label: "Plats",
        items: [
          "Filet de bœuf français, carottes et pommes de terre rôties au four et jus réduit au romarin.",
          "Dos de cabillaud, purée de choux fleur, et sauce au beurre blanc aux câpres.",
        ],
        allergens: "*5/7",
      },
      {
        label: "Fromage",
        items: ["Assiette de 2 fromages locaux et sa confiture."],
        allergens: "*7/10",
      },
      {
        label: "Desserts",
        items: [
          "O'tour du chocolat — muffin au chocolat noir, mousse au chocolat au lait et glace au chocolat blanc.",
          "Moelleux aux châtaignes, glace au miel, éclats de noix de pécan caramélisées et mousse mascarpone vanillée.",
        ],
        allergens: "*7/1/3 · *7/1/8/3",
      },
    ],
  },
  {
    slug: "menu-enfant",
    title: "Menu Enfant",
    subtitle: "Menu jusqu'à 12 ans",
    price: 13,
    courses: [
      {
        label: "Boissons",
        items: [
          "Boissons au choix — Coca Cola, Diabolo ou sirop (fraise, grenadine, menthe, pêche, cerise, citron, violette).",
        ],
      },
      {
        label: "Plats",
        items: [
          "Steak haché de la maison Courtillet, frites maison ou légumes.",
          "ou",
          "Fish and chips avec frites ou légumes.",
        ],
      },
      {
        label: "Desserts",
        items: [
          "Glaces en pot vanille/fraise ou vanille/chocolat.",
          "ou",
          "Moelleux au chocolat et chantilly.",
        ],
      },
    ],
  },
];

export const allergensList: { code: string; label: string }[] = [
  { code: "1", label: "Céréales contenant du gluten (blé, seigle, orge, avoine, épeautre, kamut ou leurs souches hybridées) et produits à base de ces céréales" },
  { code: "2", label: "Crustacés et produits à base de crustacés" },
  { code: "3", label: "Œufs et produits à base d'œufs" },
  { code: "4", label: "Arachides et produits à base d'arachides" },
  { code: "5", label: "Poissons et produits à base de poisson" },
  { code: "6", label: "Soja et produits à base de soja" },
  { code: "7", label: "Lait et produits à base de lait (y compris le lactose)" },
  { code: "8", label: "Fruits à coques (amandes, noisettes, noix, noix de cajou, pécan, macadamia, du brésil, du queensland, pistaches) et produits à base de ces fruits" },
  { code: "9", label: "Céleri et produits à base de céleri" },
  { code: "10", label: "Moutarde et produits à base de moutarde" },
  { code: "11", label: "Graines de sésames et produits à base de graines de sésame" },
  { code: "12", label: "Anhydride sulfureux et sulfites en concentration de plus de 10mg/kg ou 10mg/L" },
  { code: "13", label: "Lupin et produits à base de lupin" },
  { code: "14", label: "Mollusques et produits à base de mollusque" },
];

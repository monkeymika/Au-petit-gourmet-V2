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
          "Ravioles fines épinards et ricotta, crème à la ricotta/citron, pointe d'asperges vertes et tuile au parmesan.",
          "Duo pomme et fenouil, mousse de chèvre frais de la ferme de Sommervillers et saumon gravlax.",
        ],
        allergens: "*/7 · *7/5/10",
      },
      {
        label: "Plats",
        items: [
          "Filet de maquereaux, jus citronné et légumes de printemps.",
          "Suprême de volaille, crémeux aux asperges et gratin dauphinois.",
        ],
        allergens: "*7/5 · *10/3/7/",
      },
      {
        label: "Desserts",
        items: [
          "Crème brûlée infusée à la fève de tonka.",
          "Tartelette poire amandine, sorbet poire et mousse mascarpone amandée.",
        ],
        allergens: "*1/7/8/3 · *7/8/3/1",
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
          "Duo de foie gras — foie gras de canard au whisky de Rozelieures, pain d'épices, gelée au Gris de Toul et mini crème brûlée au foie gras.",
          "Velouté de petits pois et menthe fraîche, œuf poché, brunoise de truite fumée et tuile au parmesan.",
        ],
        allergens: "*12/1/3/7 · *7/3/",
      },
      {
        label: "Plats",
        items: [
          "Filet de bœuf français, jus truffé et son écrasé de pommes de terre au thym de notre jardin.",
          "Filet de bar snacké, épeautre façon risotto, dés de chorizo, huile d'olive extra vierge citronnée.",
        ],
        allergens: "*7/ · *5/7/1",
      },
      {
        label: "Fromage",
        items: ["Assiette de 2 fromages locaux et sa confiture."],
        allergens: "*7/10",
      },
      {
        label: "Desserts",
        items: [
          "Moelleux au chocolat, cœur pistache, mousse à la pistache, éclats de noix de pécan caramélisés et crème glacée à la madeleine.",
          "O'tour de la fraise — sorbet fraise/basilic, tartare de fraises, coulis de fruits rouges et crumble.",
        ],
        allergens: "*7/8/1/3",
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

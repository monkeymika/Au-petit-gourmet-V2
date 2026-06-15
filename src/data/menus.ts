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
          "Magret séché maison, billes de melon, dés de fêta, baby poivrons, pointe de vinaigre piment/poivron et pickles d'oignons rouges.",
          "Œuf poché, crémeux de maïs doux au paprika fumé et parmesan.",
        ],
        allergens: "*/7 · *7/5/10",
      },
      {
        label: "Plats",
        items: [
          "Filet de dorade royale, sauce vierge tomate, citron et herbes du jardin et ses petits légumes d'été.",
          "Pluma de porc, polenta crémeuse et sa sauce chimichuri.",
        ],
        allergens: "*7/5 · *10/3/7",
      },
      {
        label: "Desserts",
        items: [
          "Mirabelle Melba — sorbet mirabelle, glace vanille, fruits frais rôtis, coulis de mirabelle et crème fouettée vanillée.",
          "Fromage blanc fermier, fruits de saison, coulis de fruits et crumble.",
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
          "Duo de foie gras — foie gras de canard au whisky de Rozelieures, pain d'épices, chutney aux abricots, mini crème brûlée au foie gras et pointe de crème de framboise et combava.",
          "Bruschetta toastée à l'ail, jaune d'œuf confit, jambon d'Auvergne, figues rôties, éclats de noisettes et pointe de vinaigre aux agrumes.",
        ],
        allergens: "*12/1/3/7 · *7/3",
      },
      {
        label: "Plats",
        items: [
          "Filet de bœuf français, carottes et pommes de terre rôties au four, tomates cerises confites et jus réduit au romarin.",
          "Gambas snackées, risotto crémeux et ses chips de chorizo.",
        ],
      },
      {
        label: "Fromage",
        items: ["Assiette de 2 fromages locaux et sa confiture."],
        allergens: "*7/10",
      },
      {
        label: "Desserts",
        items: [
          "Pavlova aux fruits de saison, coulis de fruits rouges et mousse mascarpone vanillée.",
          "Coupe « Verger d'été » — sorbet abricot, abricots infusés, glace bulgare, sirop verveine et crumble.",
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

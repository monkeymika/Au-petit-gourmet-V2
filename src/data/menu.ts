export type MenuPrice = {
  amount: number;
  variant?: string;
};

export type MenuItem = {
  name: string;
  description?: string;
  prices: MenuPrice[];
  allergens?: string;
};

export type MenuSection = {
  slug: string;
  title: string;
  items: MenuItem[];
};

export const menu: { sections: MenuSection[] } = {
  sections: [
    {
      slug: "entrees",
      title: "Entrées",
      items: [
        {
          name: "Foie gras de canard Français",
          description:
            "Au Whisky de Rozelieures, pain d'épices, chutney à l'abricot, pointe de crème de framboise et combava et sa mini crème brûlée.",
          prices: [{ amount: 19 }],
          allergens: "12/1/3/7",
        },
        {
          name: "Carpaccio de bœuf",
          description: "Pesto aux agrumes, pétales de parmesan et câpres frits.",
          prices: [{ amount: 11.8 }],
          allergens: "7/8",
        },
        {
          name: "Magret séché maison",
          description:
            "Billes de melon, dés de fêta, baby poivrons, pointe de vinaigre poivrons/piments et pickles d'oignons rouges.",
          prices: [{ amount: 13.5 }],
          allergens: "7/8",
        },
        {
          name: "Assiette dégustation de jambon cru d'Auvergne IGP",
          description: "Beurre et condiments.",
          prices: [{ amount: 12 }],
          allergens: "7",
        },
        {
          name: "Gaspacho de tomates jaunes",
          description:
            "Gambas snackées, filet d'huile d'olive extra vierge au basilic et chorizo croustillant.",
          prices: [{ amount: 13 }],
          allergens: "poivrons",
        },
      ],
    },
    {
      slug: "plats",
      title: "Plats",
      items: [
        {
          name: "Tartare de bœuf coupé au couteau",
          description:
            "Préparé par nos soins, accompagné de frites et salade verte.",
          prices: [{ amount: 21 }],
          allergens: "10/8",
        },
        {
          name: "Filet de bœuf Français",
          description:
            "Carottes et pommes de terre rôties au four, tomates cerises confites et son jus réduit au romarin.",
          prices: [{ amount: 34 }],
        },
        {
          name: "Burger ou version Veggie",
          description:
            "Steak haché ou steak végétal, tomme à l'italienne, coppa, crème au pesto, pickles d'oignons, frites fraîches maison et salade verte.",
          prices: [
            { amount: 19, variant: "Simple" },
            { amount: 22, variant: "Double" },
          ],
          allergens: "1/7/8/11/4",
        },
        {
          name: "Picanha de bœuf",
          description: "Polenta crémeuse et jus court au thym.",
          prices: [{ amount: 28.5 }],
          allergens: "7/1",
        },
        {
          name: "Filet de dorade royale",
          description:
            "Sauce vierge tomates, citron et herbes du jardin et ses petits légumes d'été.",
          prices: [{ amount: 26 }],
          allergens: "5",
        },
        {
          name: "Salade façon Vosgienne",
          description:
            "Pommes de terre, jambon cru, oignons, croûtons, œuf, crème et tomates cerises.",
          prices: [{ amount: 18 }],
          allergens: "7/3",
        },
        {
          name: "Salade gourmande",
          description:
            "Tomates cerises, saumon gravlax, parmesan, croûtons, billes de mozzarella, maïs et vinaigrette aux agrumes.",
          prices: [{ amount: 19.5 }],
          allergens: "7/1",
        },
      ],
    },
    {
      slug: "fromages",
      title: "Fromages",
      items: [
        {
          name: "Assiette de trois fromages locaux",
          description: "Salade verte, cuillère de confiture maison.",
          prices: [{ amount: 9.5 }],
          allergens: "7/10",
        },
      ],
    },
    {
      slug: "desserts",
      title: "Desserts",
      items: [
        {
          name: "Moelleux au chocolat",
          description:
            "Cœur fruits rouges, sorbet framboise, crème fouettée vanillée et tuile aux amandes.",
          prices: [{ amount: 11 }],
          allergens: "1/3/4/7/8",
        },
        {
          name: "Café ou thé gourmand",
          description: "Trio de dessert du moment.",
          prices: [{ amount: 8.5 }],
          allergens: "1/7/3/8",
        },
        {
          name: "Mirabelle melba",
          description:
            "Sorbet mirabelle, glace vanille, coulis de mirabelles, fruits frais rôtis et crème fouettée vanillée.",
          prices: [{ amount: 9.5 }],
          allergens: "7",
        },
        {
          name: "Figues rôties au romarin",
          description: "Glace bulgare, brisures de meringue et fruits confits.",
          prices: [{ amount: 10 }],
          allergens: "7/8/1",
        },
        {
          name: "Pavlova aux fruits de saison",
          description: "Coulis de fruits rouges et mousse mascarpone vanillée.",
          prices: [{ amount: 9.5 }],
          allergens: "7",
        },
      ],
    },
  ],
};

export const menuFooter = {
  pricingNote: "Tous nos prix sont en euros et TTC, service compris.",
};

export const formatPrice = (amount: number): string => {
  const decimals = Number.isInteger(amount) ? 0 : 2;
  return amount.toFixed(decimals).replace(".", ",") + " €";
};

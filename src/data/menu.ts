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
            "Au Whisky de Rozelieures, pain d'épices, gelée de groseille, pointe de crème de framboise et combava et sa mini crème brûlée.",
          prices: [{ amount: 19 }],
          allergens: "12/1/3/7",
        },
        {
          name: "Salade automnale",
          description:
            "Foie gras, parmesan, croûtons, oeuf, dés de courges rôtis et magret séché maison.",
          prices: [{ amount: 14 }],
          allergens: "7/8/3",
        },
        {
          name: "Ravioles forestières",
          description: "Crème aux girolles ail et persil et tuile au sésame.",
          prices: [{ amount: 13 }],
          allergens: "7/11",
        },
        {
          name: "Tartare de betteraves du jardin",
          description:
            "Ricotta fouettée, pickles de légumes, pesto aux éclats de pistaches et vinaigrette au piment et poivrons.",
          prices: [{ amount: 9.5 }],
          allergens: "7/8/10",
        },
        {
          name: "Mini camembert 150gr au four",
          description: "Miel, noix et jambon cru.",
          prices: [{ amount: 13.5 }],
          allergens: "7/8",
        },
      ],
    },
    {
      slug: "plats",
      title: "Plats",
      items: [
        {
          name: "Burger ou version Veggie",
          description:
            "Steak haché ou steak végétal, munster, coppa, sauce barbecue, confit d'oignons, frites fraîches maison et salade verte.",
          prices: [
            { amount: 19, variant: "Simple" },
            { amount: 22, variant: "Double" },
          ],
          allergens: "1/7/8/11/4",
        },
        {
          name: "Noix de joue de porc confite",
          description: "Au vin rouge et sa polenta crémeuse.",
          prices: [{ amount: 21 }],
          allergens: "7/12",
        },
        {
          name: "Dos de cabillaud",
          description: "Purée de choux fleur, sauce beurre blanc aux câpres.",
          prices: [{ amount: 26 }],
          allergens: "7/1/4/5",
        },
        {
          name: "Entrecôte",
          description:
            "Pommes de terre rôties et carottes fanes, jus réduit au romarin.",
          prices: [{ amount: 32 }],
        },
        {
          name: "Côte de veau",
          description: "Courges rôties au cumin et sauce aux girolles.",
          prices: [{ amount: 28 }],
          allergens: "7",
        },
        {
          name: "Salade automnale",
          description:
            "Foie gras, parmesan, croûtons, oeuf, dés de courges rôtis et magret séché maison.",
          prices: [{ amount: 22 }],
          allergens: "7/1/3/10",
        },
        {
          name: "Ravioles forestières",
          description: "Crème aux girolles ail et persil et tuile au sésame.",
          prices: [{ amount: 24 }],
          allergens: "7/11",
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
          name: "Brioche façon pain perdu",
          description:
            "Glace au Grand Marnier, caramel et mousse mascarponne vanillée.",
          prices: [{ amount: 9.5 }],
          allergens: "1/7/3",
        },
        {
          name: "Café ou thé gourmand",
          description: "Trio de minis desserts du moment.",
          prices: [{ amount: 8.5 }],
          allergens: "1/7/3/8",
        },
        {
          name: "Coupe automnale",
          description:
            "Sorbet pomme, glace vanille macadamia caramel, pommes caramélisées et chantilly.",
          prices: [{ amount: 10 }],
          allergens: "7/8",
        },
        {
          name: "O'tour du chocolat",
          description:
            "Muffin au chocolat noir, mousse chocolat au lait et glace au chocolat blanc.",
          prices: [{ amount: 11 }],
          allergens: "7/3/1",
        },
        {
          name: "Mousse de poire",
          description: "Sur biscuit sablé et poire rôtie.",
          prices: [{ amount: 9 }],
          allergens: "7/1",
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

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
            "Au Whisky de Rozelieures, pain d'épices, gelée au Gris de Toul et mini crème brûlée au foie gras.",
          prices: [{ amount: 18.5 }],
          allergens: "12/1/3/7",
        },
        {
          name: "Salade printanière",
          description:
            "Copeaux de parmesan, croûtons, chips de lard, radis, pignons de pin, asperges vertes, œuf dur et vinaigrette aux agrumes.",
          prices: [
            { amount: 9.5, variant: "Entrée" },
            { amount: 17, variant: "Plat" },
          ],
          allergens: "7/1/8/10",
        },
        {
          name: "Asperges blanches",
          description:
            "Mousse à la ricotta et citron, saumon gravlax à l'estragon et pickles.",
          prices: [{ amount: 14.5 }],
          allergens: "7/5",
        },
        {
          name: "Ravioles ricotta et épinards",
          description:
            "Crème à la ricotta/citron, pointes d'asperges vertes et tuile parmesan.",
          prices: [
            { amount: 12, variant: "Entrée" },
            { amount: 23, variant: "Plat" },
          ],
          allergens: "7/1/8/10",
        },
        {
          name: "Tataki de bœuf aux graines de sésame",
          description: "Émincé de radis, crumble de bacon et huile de cacahuète.",
          prices: [{ amount: 15 }],
          allergens: "8/11/4",
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
          name: "Carré d'agneau",
          description:
            "Jus réduit miel et thym, écrasé de petits pois à la menthe fraîche.",
          prices: [{ amount: 25 }],
          allergens: "7",
        },
        {
          name: "Burger ou version Veggie",
          description:
            "Steak haché ou steak végétal, tomme à l'ail des ours, lard grillé, crème aux herbes, oignons caramélisés, frites fraîches maison et salade verte.",
          prices: [
            { amount: 19, variant: "Simple" },
            { amount: 22, variant: "Double" },
          ],
          allergens: "1/7/8/11/4",
        },
        {
          name: "Faux filet Français",
          description:
            "Gratin dauphinois, mini légumes et sauce chimichurri.",
          prices: [{ amount: 28.5 }],
          allergens: "6/4/8",
        },
        {
          name: "Épeautre façon risotto",
          description:
            "Dés de chorizo, huile d'olive extra vierge citronnée et son bar.",
          prices: [{ amount: 26 }],
          allergens: "7/8/1",
        },
        {
          name: "Ravioles ricotta et épinards",
          description:
            "Crème à la ricotta/citron, pointes d'asperges vertes et tuile parmesan.",
          prices: [{ amount: 23 }],
          allergens: "7",
        },
        {
          name: "Salade printanière",
          description:
            "Copeaux de parmesan, croûtons, chips de lard, radis, pignons de pin, asperges vertes, œuf dur et vinaigrette aux agrumes.",
          prices: [{ amount: 17 }],
          allergens: "7/1/8/10",
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
            "Cœur pistache, mousse à la pistache, éclats de noix de pécan caramélisé et glace madeleine.",
          prices: [{ amount: 11 }],
          allergens: "1/3/4/7/8",
        },
        {
          name: "Café ou thé gourmand",
          description: "Trio de desserts du moment.",
          prices: [{ amount: 8.5 }],
          allergens: "1/7/3/8",
        },
        {
          name: "Coupe printanière",
          description:
            "Sorbet framboise/violette, sorbet citron kalamansi, coulis de fruits rouges, fruits frais et chantilly.",
          prices: [{ amount: 9.5 }],
          allergens: "7",
        },
        {
          name: "O'tour du nougat",
          description:
            "Coque en chocolat, mousse mascarpone amandée, éclats de nougats et glace au nougat.",
          prices: [{ amount: 10 }],
          allergens: "7/8/1",
        },
        {
          name: "Crème brûlée infusée à la fève de tonka",
          prices: [{ amount: 8 }],
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
  return amount.toString().replace(".", ",") + " €";
};

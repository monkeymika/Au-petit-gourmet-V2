export type Drink = {
  name: string;
  description?: string;
  volume?: string;
  prices: { amount: number; variant?: string }[];
};

export type DrinkSection = {
  slug: string;
  title: string;
  subtitle?: string;
  priceColumns?: string[];
  items: Drink[];
};

export const boissons: { sections: DrinkSection[] } = {
  sections: [
    {
      slug: "aperitifs",
      title: "Apéritifs",
      items: [
        {
          name: "Kir royal",
          volume: "12.5cl",
          description: "Crème cassis, mûre, griotte, pêche, mirabelle, framboise.",
          prices: [{ amount: 11 }],
        },
        {
          name: "Blanc cassis",
          volume: "12.5cl",
          description: "Crème cassis, mûre, griotte, pêche, mirabelle, framboise.",
          prices: [{ amount: 6 }],
        },
        {
          name: "Mirabelle en bulle",
          volume: "15cl",
          description: "Crème de mirabelle, pétillant.",
          prices: [{ amount: 8.5 }],
        },
        { name: "Coupe de champagne", volume: "12.5cl", prices: [{ amount: 10.5 }] },
        { name: "Martini Bianco ou Rosso", volume: "6cl", prices: [{ amount: 4.5 }] },
        { name: "Porto Blanc ou Rouge", volume: "6cl", prices: [{ amount: 5 }] },
        { name: "Pastis ou Ricard", volume: "2cl", prices: [{ amount: 3.5 }] },
        { name: "Suze", volume: "6cl", prices: [{ amount: 5 }] },
      ],
    },
    {
      slug: "eaux-softs",
      title: "Eaux & softs",
      items: [
        { name: "Carola bleue ou rouge", volume: "100cl", prices: [{ amount: 5 }] },
        { name: "Carola bleue ou rouge", volume: "50cl", prices: [{ amount: 3.5 }] },
        { name: "Coca cola / Coca zéro", volume: "33cl", prices: [{ amount: 4.5 }] },
        {
          name: "Sirop à l'eau",
          volume: "12cl",
          description: "Citron, grenadine, cerise, pêche, violette, fraise, menthe.",
          prices: [{ amount: 1.5 }],
        },
        { name: "Perrier", volume: "33cl", prices: [{ amount: 4.5 }] },
        { name: "Schweppes Indian Tonic", volume: "25cl", prices: [{ amount: 4.5 }] },
        { name: "Fuztea pêche", volume: "25cl", prices: [{ amount: 4.5 }] },
        {
          name: "Jus de fruit",
          volume: "20cl",
          description: "Tomate, orange, ananas, pomme, fraise.",
          prices: [{ amount: 4 }],
        },
        {
          name: "Diabolo limonade Loulou",
          volume: "12cl",
          description: "Citron, grenadine, cerise, pêche, violette, fraise, menthe.",
          prices: [{ amount: 4 }],
        },
        { name: "Limonade Lorraine « Loulou »", prices: [{ amount: 3.8 }] },
      ],
    },
    {
      slug: "bieres",
      title: "Bières",
      priceColumns: ["25cl", "50cl"],
      items: [
        {
          name: "Pelican Blonde non filtrée",
          description: "Pression",
          prices: [
            { amount: 6.6, variant: "25cl" },
            { amount: 9.6, variant: "50cl" },
          ],
        },
        {
          name: "Affligem",
          description: "Pression",
          prices: [
            { amount: 5.5, variant: "25cl" },
            { amount: 8.5, variant: "50cl" },
          ],
        },
        {
          name: "Heineken pression / panaché / monaco",
          prices: [
            { amount: 4.5, variant: "25cl" },
            { amount: 7.5, variant: "50cl" },
          ],
        },
        {
          name: "Picon bière",
          prices: [
            { amount: 5, variant: "25cl" },
            { amount: 8, variant: "50cl" },
          ],
        },
        {
          name: "Amer Mirabelle Rozelieures",
          prices: [
            { amount: 5.5, variant: "25cl" },
            { amount: 9, variant: "50cl" },
          ],
        },
        {
          name: "Bière bouteille 33cl",
          description: "Brasserie du Mont Blanc IPA · Mort Subite Kriek · Noiraude (blanche).",
          prices: [{ amount: 7 }],
        },
        {
          name: "Bière bouteille sans alcool",
          volume: "33cl",
          description: "Bitburger.",
          prices: [{ amount: 5 }],
        },
      ],
    },
    {
      slug: "cocktails-alcool",
      title: "Cocktails",
      subtitle: "Servis en 25cl · 9,50 €",
      items: [
        {
          name: "Sambino",
          description: "Soho, liqueur de passion, gin, jus de citron, jus d'ananas.",
          prices: [{ amount: 9.5 }],
        },
        {
          name: "Mojito classique",
          description:
            "Rhum de Guadeloupe, menthe fraîche, perrier, citron vert et sucre de canne.",
          prices: [{ amount: 9.5 }],
        },
        {
          name: "Margarita",
          description: "Tequila, cointreau et jus de citron.",
          prices: [{ amount: 9.5 }],
        },
        {
          name: "Margarita spicy",
          description: "Tequila infusée aux piments forts, cointreau, jus de citron.",
          prices: [{ amount: 9.5 }],
        },
        {
          name: "Bailey's Martini",
          description: "Bailey's, vodka, sirop de vanille, amaretto et café.",
          prices: [{ amount: 9.5 }],
        },
        {
          name: "Spritz",
          description: "Apérol, prosecco, perrier et rondelle d'orange.",
          prices: [{ amount: 9.5 }],
        },
        {
          name: "Hugo Spritz",
          description: "Saint Germain, prosecco, perrier.",
          prices: [{ amount: 9.5 }],
        },
        { name: "Gin Hendrick's tonic", prices: [{ amount: 9.5 }] },
        {
          name: "Pina Colada",
          description: "Rhum de Guadeloupe, malibu, jus d'ananas, lait.",
          prices: [{ amount: 9.5 }],
        },
        {
          name: "Americano",
          description: "Campari, martini blanc, martini rouge, gin et perrier.",
          prices: [{ amount: 9.5 }],
        },
        {
          name: "Cosmopolitain",
          description: "Vodka, grand marnier, jus de fraise, jus de citron.",
          prices: [{ amount: 9.5 }],
        },
        {
          name: "Pink Lady",
          description: "Gin, chambord, citron, sucre et blanc d'œuf.",
          prices: [{ amount: 9.5 }],
        },
      ],
    },
    {
      slug: "cocktails-sans-alcool",
      title: "Cocktails sans alcool",
      subtitle: "Servis en 25cl · 7,50 €",
      items: [
        {
          name: "Coconut King",
          description: "Délice des îles au jus d'ananas et à la crème saveur coco.",
          prices: [{ amount: 7.5 }],
        },
        {
          name: "VIP",
          description: "Mélange subtil au jus d'orange, saveur litchi, rose et framboise.",
          prices: [{ amount: 7.5 }],
        },
        {
          name: "Virgin Mojito",
          description: "Saveur rhum, menthe fraîche et citron vert.",
          prices: [{ amount: 7.5 }],
        },
        {
          name: "Virgin Spritz",
          description: "Saveur orange amer.",
          prices: [{ amount: 7.5 }],
        },
        {
          name: "Purple",
          description: "Fusion pétillante à base de fruits rouges.",
          prices: [{ amount: 7.5 }],
        },
        {
          name: "Coucher de soleil",
          description: "Limonade, jus d'orange, sirop cerise.",
          prices: [{ amount: 7.5 }],
        },
      ],
    },
    {
      slug: "whiskies-gins",
      title: "Whiskies & Gins",
      subtitle: "Servis en 4cl",
      items: [
        { name: "Whisky de Rozelieures rare collection", prices: [{ amount: 10.5 }] },
        { name: "Whisky de Rozelieures subtil", prices: [{ amount: 10.5 }] },
        {
          name: "Whisky de Rozelieures élevé en fût de Vosne-Romanée",
          prices: [{ amount: 12 }],
        },
        { name: "Whisky de Rozelieures tourbé", prices: [{ amount: 13 }] },
        { name: "Whisky Teeling", prices: [{ amount: 9 }] },
        { name: "Jack Daniel's", prices: [{ amount: 9 }] },
        {
          name: "Gin Hendrick's",
          description: "4 sortes différentes.",
          prices: [{ amount: 9.5 }],
        },
      ],
    },
    {
      slug: "digestifs",
      title: "Digestifs & alcools",
      subtitle: "Servis en 4cl",
      items: [
        { name: "Mirabelle ou Poire de Rozelieures", prices: [{ amount: 11 }] },
        { name: "Get 27", prices: [{ amount: 9.5 }] },
        { name: "Cognac Hennessy VS / Armagnac", prices: [{ amount: 11 }] },
        { name: "Rhum Botran reserva 15 ans", prices: [{ amount: 9.5 }] },
        { name: "Limoncello", prices: [{ amount: 5 }] },
        { name: "Rhum arrangé maison", prices: [{ amount: 6 }] },
        { name: "Soho ou Malibu", prices: [{ amount: 7 }] },
        { name: "Grand Marnier", prices: [{ amount: 8 }] },
        { name: "Gin Mirabelle Maison Rozelieures", prices: [{ amount: 8.5 }] },
        { name: "Vodka Maison Rozelieures", prices: [{ amount: 8 }] },
        { name: "Amaretto / Tequila", prices: [{ amount: 8 }] },
      ],
    },
    {
      slug: "chaudes",
      title: "Boissons chaudes",
      items: [
        { name: "Café expresso", prices: [{ amount: 2 }] },
        { name: "Décaféiné", prices: [{ amount: 2 }] },
        { name: "Café lungo", prices: [{ amount: 2.5 }] },
        { name: "Cappuccino", prices: [{ amount: 4.5 }] },
        { name: "Double expresso", prices: [{ amount: 4 }] },
        { name: "Thé ou infusion", prices: [{ amount: 4 }] },
        { name: "Irish coffee", prices: [{ amount: 10 }] },
        { name: "Lorraine coffee", prices: [{ amount: 10 }] },
      ],
    },
  ],
};

export const boissonsFooter =
  "Tous nos prix sont en euros et TTC, service compris. L'abus d'alcool est dangereux pour la santé, à consommer avec modération.";

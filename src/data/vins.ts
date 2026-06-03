export type WinePrice = { glass?: number; bottle: number };

export type Wine = {
  name: string;
  domain: string;
  appellation?: string;
  year?: string;
  cepage?: string;
  description?: string;
  prices: WinePrice;
};

export type WineRegion = {
  slug: string;
  title: string;
  wines: Wine[];
};

export type WineCategory = {
  slug: string;
  title: string;
  accent: "forest" | "terracotta" | "magenta";
  regions: WineRegion[];
  bottleLabel?: string;
};

export const vins: WineCategory[] = [
  {
    slug: "blancs",
    title: "Vins Blancs",
    accent: "forest",
    regions: [
      {
        slug: "blancs-rhone",
        title: "Vallée du Rhône",
        wines: [
          {
            name: "Condrieu Côte Bellay",
            domain: "Domaine Martin Clerc",
            appellation: "AOP Vallée du Rhône",
            year: "2022",
            cepage: "100% Viognier",
            description:
              "Vin intense et souple aux notes d'abricots. Complexe, minéral et long en bouche avec de la rondeur.",
            prices: { bottle: 90 },
          },
          {
            name: "« L'orée du bois »",
            domain: "Château Bois d'Arlène",
            appellation: "AOC Vacqueyras",
            year: "2019",
            cepage: "Roussanne / Clairette / Viognier",
            description: "Notes florales et de fruits jaunes, touche légèrement boisée.",
            prices: { bottle: 65 },
          },
          {
            name: "« L'Elouède » Saint Joseph",
            domain: "Les vins de Vienne",
            appellation: "AOC Saint Joseph",
            year: "2024",
            cepage: "Marsanne / Roussanne",
            description:
              "Élégant, fraîcheur avec des arômes floraux et fruits blancs, belle tension minérale liée aux sols granitiques.",
            prices: { bottle: 50 },
          },
        ],
      },
      {
        slug: "blancs-bourgogne",
        title: "Bourgogne",
        wines: [
          {
            name: "Montagny 1er cru",
            domain: "Domaine Bertheney",
            appellation: "AOC Bourgogne",
            year: "2022",
            cepage: "100% Chardonnay",
            description:
              "Nez dominé par la poire, la pêche et des fruits blancs. Belle fraîcheur minérale, finale élégante.",
            prices: { bottle: 62 },
          },
          {
            name: "Rully « les Thivaux »",
            domain: "Domaine Michel Juillot",
            appellation: "AOC Rully",
            year: "2024",
            cepage: "100% Chardonnay",
            description:
              "Arômes de fruits blancs, notes florales et parfois d'agrumes, avec une minéralité élégante liée au terroir.",
            prices: { bottle: 58 },
          },
          {
            name: "Givry « Champ Pourot »",
            domain: "Domaine Ragot",
            appellation: "AOC Givry",
            year: "2023",
            cepage: "100% Chardonnay",
            description: "Élégant, frais, belle minéralité, note de fruits jaunes et miellées.",
            prices: { bottle: 50 },
          },
          {
            name: "Chablis",
            domain: "Domaine Courtault Michelet",
            appellation: "AOC Chablis",
            year: "2023",
            cepage: "100% Chardonnay",
            description: "Vin sec minéral, vif avec des arômes de pommes vertes et pierre à fusil.",
            prices: { glass: 9.5, bottle: 48 },
          },
          {
            name: "Mr Jacques",
            domain: "Domaine Pacaud Vignerons",
            appellation: "AOC Bourgogne",
            year: "2023",
            cepage: "100% Chardonnay",
            description:
              "Frais, souple et équilibré, arômes d'agrumes et fruits à chair blanche, finale vive.",
            prices: { glass: 8, bottle: 36 },
          },
        ],
      },
      {
        slug: "blancs-loire",
        title: "Vallée de la Loire",
        wines: [
          {
            name: "« Les Hauts de Husseau »",
            domain: "Domaine de la taille aux loups",
            appellation: "AOC Montlouis-sur-Loire",
            year: "2023",
            cepage: "100% Chenin blanc",
            description:
              "Vin sec à la grande minéralité, notes de poire et d'agrumes confits, légèrement brioché, belle complexité aromatique.",
            prices: { bottle: 58 },
          },
          {
            name: "Pouilly Fumé « le Petit F »",
            domain: "Domaine Michel Redde",
            appellation: "AOC Pouilly-fumé",
            year: "2024",
            cepage: "100% Sauvignon blanc",
            description: "Minéral et parfois fumé, frais et expressif aux notes d'agrumes.",
            prices: { bottle: 38 },
          },
          {
            name: "Cheverny",
            domain: "Domaine Sauger",
            appellation: "AOC Cheverny",
            year: "2024",
            cepage: "80% Sauvignon / 20% Chardonnay",
            description: "Notes d'agrumes et de fruits, bel équilibre. Bouche vive et ronde.",
            prices: { bottle: 35 },
          },
          {
            name: "Vouvray « Empreinte »",
            domain: "Vignoble Alain Robert",
            appellation: "AOC Vouvray",
            year: "2023",
            cepage: "100% Chenin blanc",
            description: "Sec, frais, minéral, bien équilibré avec une finale salivante.",
            prices: { glass: 7, bottle: 33 },
          },
        ],
      },
      {
        slug: "blancs-alsace-lorraine",
        title: "Alsace / Lorraine",
        wines: [
          {
            name: "Gewurztraminer",
            domain: "Domaine Henri Fuchs",
            appellation: "AOC Alsace",
            year: "2023",
            cepage: "100% Gewurztraminer",
            description:
              "Nez et bouche fruités très marqués, notes épicées. Blanc demi-sec à moelleux.",
            prices: { glass: 9, bottle: 38 },
          },
          {
            name: "Riesling",
            domain: "Domaine Henri Fuchs",
            appellation: "AOC Alsace",
            year: "2024",
            cepage: "100% Riesling",
            description:
              "Gastronomique, caractérisé par une acidité marquée et une belle longueur en bouche.",
            prices: { bottle: 31 },
          },
          {
            name: "« L'Ossera »",
            domain: "Domaine de Muzy",
            appellation: "IGP Côtes de Meuse",
            year: "2024",
            cepage: "100% Pinot Gris",
            description: "Sec à structure généreuse, expression de poire, coing, miel et épices.",
            prices: { glass: 8, bottle: 30 },
          },
        ],
      },
      {
        slug: "blancs-sud-ouest",
        title: "Sud-Ouest",
        wines: [
          {
            name: "« Au Vol des Grues »",
            domain: "Domaine Letrinquer",
            appellation: "IGP Côtes de Gascogne",
            year: "2024",
            cepage: "100% Gros Manseng",
            description: "Vin moelleux aux notes de fruits exotiques.",
            prices: { glass: 6, bottle: 23 },
          },
        ],
      },
    ],
  },
  {
    slug: "rouges",
    title: "Vins Rouges",
    accent: "terracotta",
    regions: [
      {
        slug: "rouges-lorraine",
        title: "Lorraine",
        wines: [
          {
            name: "Pinot Noir",
            domain: "Domaine Lelièvre",
            appellation: "AOC Côtes de Toul",
            year: "2024",
            cepage: "100% Pinot Noir",
            description:
              "Léger et frais, notes de cerise et fruits rouges. Belle expression du terroir Lorrain, tout en finesse.",
            prices: { glass: 6.5, bottle: 30 },
          },
          {
            name: "Pinot Noir",
            domain: "Domaine de Muzy",
            appellation: "IGP Côtes de Meuse",
            year: "2023",
            cepage: "100% Pinot Noir",
            description:
              "Gourmand et structuré, notes de cerise et fruits noirs, belle fraîcheur et tanins soyeux.",
            prices: { bottle: 34 },
          },
        ],
      },
      {
        slug: "rouges-loire",
        title: "Vallée de la Loire",
        wines: [
          {
            name: "Bourgueil « Le Haut de la Butte »",
            domain: "Domaine de la Butte",
            year: "2023",
            cepage: "100% Cabernet Franc",
            description:
              "Cabernet franc profond et élégant, notes de cassis, violette et épices. Une grande cuvée de Loire, ample et raffinée.",
            prices: { bottle: 54 },
          },
          {
            name: "Cheverny",
            domain: "Domaine Sauger",
            appellation: "AOC Cheverny",
            year: "2024",
            cepage: "Pinot noir / Gamay / Malbec",
            description: "Léger et fruité, notes de fruits rouges frais. Souple, gourmand et facile à boire.",
            prices: { bottle: 35 },
          },
          {
            name: "Saumur-Champigny",
            domain: "Château de Villeneuve",
            appellation: "AOC Saumur-Champigny",
            year: "2022",
            cepage: "100% Cabernet Franc",
            description:
              "Cabernet Franc élégant et gourmand, notes de fruits rouges et de violette. Un rouge de Loire frais et équilibré.",
            prices: { bottle: 33 },
          },
        ],
      },
      {
        slug: "rouges-beaujolais",
        title: "Beaujolais",
        wines: [
          {
            name: "Morgon « Le Classet »",
            domain: "Domaine du Chapital",
            appellation: "AOP Beaujolais",
            year: "2023",
            cepage: "100% Gamay",
            description:
              "Gamay profond et structuré, notes de fruits noirs et d'épices. Un Beaujolais de caractère, ample et élégant.",
            prices: { bottle: 41 },
          },
          {
            name: "Brouilly « Cuvée Pierreux »",
            domain: "Domaine du Bost",
            appellation: "AOP Beaujolais",
            cepage: "100% Gamay",
            description:
              "Léger et fruité, notes de cerise et framboise. Souple et gourmand, parfait à partager.",
            prices: { bottle: 35 },
          },
          {
            name: "Saint Amour",
            domain: "Domaine de l'Ancien Relais",
            appellation: "AOP Beaujolais",
            year: "2023",
            cepage: "100% Gamay",
            description:
              "Gamay raffiné aux arômes de fleurs rouges et cerises juteuses. Souple, élégant et léger.",
            prices: { glass: 7.5, bottle: 30 },
          },
        ],
      },
      {
        slug: "rouges-rhone",
        title: "Vallée du Rhône",
        wines: [
          {
            name: "Châteauneuf du Pape Vieilles Vignes",
            domain: "Domaine La Cabotte",
            appellation: "AOC Châteauneuf du Pape",
            year: "2022",
            cepage: "Grenache / Syrah / Mourvèdre / Cinsault",
            description: "Fruité, épicé et garrigue-typé, minéralité fine et belle profondeur.",
            prices: { bottle: 82 },
          },
          {
            name: "Saint Joseph « l'Arzelle »",
            domain: "Domaine Les Vins de Vienne",
            appellation: "AOC Saint Joseph",
            year: "2023",
            cepage: "100% Syrah",
            description: "Profond, arômes de fruits noirs et épices. Tanins fins, belle structure et finale élégante.",
            prices: { bottle: 50 },
          },
          {
            name: "Crozes Hermitage « Les Pierrelles »",
            domain: "Domaine Belle",
            appellation: "AOC Crozes Hermitage",
            year: "2023",
            cepage: "100% Syrah",
            description: "Syrah élégante aux arômes de fruits noirs, charnu, tanins ronds et souples, finale chaleureuse.",
            prices: { bottle: 48 },
          },
          {
            name: "« RE-NE-SENS » Vacqueyras",
            domain: "Château du Bois d'Arlène",
            appellation: "AOC Vacqueyras",
            year: "2024",
            cepage: "Grenache / Syrah / Mourvèdre",
            description:
              "Fruits noirs mûrs, épices et garrigue. Bouche ample, généreuse et structurée, tanins fondus, finale chaleureuse et persistante.",
            prices: { bottle: 42 },
          },
          {
            name: "Cairanne",
            domain: "Domaine de la Tête Noire",
            appellation: "AOC Cairanne",
            year: "2022",
            cepage: "Grenache / Syrah / Mourvèdre",
            description: "Gourmand et élégant, arômes de cerise noire et de prune. Bouche souple et harmonieuse.",
            prices: { glass: 7, bottle: 39 },
          },
        ],
      },
      {
        slug: "rouges-bordeaux",
        title: "Bordeaux",
        wines: [
          {
            name: "Lalande de Pomerol",
            domain: "Château du Vieux Chaigneau",
            appellation: "AOC Lalande de Pomerol",
            year: "2018",
            cepage: "Merlot / Cabernet Franc",
            description: "Fruits rouges et noirs mûrs, épices douces et violette.",
            prices: { bottle: 48 },
          },
          {
            name: "« Cuvée F » Cadillac",
            domain: "Château Fariseau",
            appellation: "AOC Cadillac",
            year: "2022",
            cepage: "Merlot / Cabernet Sauvignon / Cabernet Franc",
            description:
              "Tanins fins, bouche équilibrée, souple et élégante. Fruits rouges et noirs mûrs, notes épicées et florales.",
            prices: { glass: 7, bottle: 35 },
          },
        ],
      },
      {
        slug: "rouges-languedoc",
        title: "Languedoc-Roussillon",
        wines: [
          {
            name: "« Carabène »",
            domain: "Domaine Nouveau Monde",
            appellation: "IGP OC",
            year: "2024",
            cepage: "Syrah / Grenache / Mourvèdre",
            description: "Fruits rouges et noirs, épices douces. Bouche gourmande et fruitée.",
            prices: { glass: 6, bottle: 22 },
          },
        ],
      },
      {
        slug: "rouges-bourgogne",
        title: "Bourgogne",
        wines: [
          {
            name: "Pommard",
            domain: "Domaine de la Roche Aigue",
            appellation: "AOP Pommard",
            year: "2023",
            cepage: "100% Pinot Noir",
            description:
              "Fruits rouges et noirs mûrs, épices subtiles et notes florales. Bouche structurée, élégante et profonde, tanins fins, finale persistante.",
            prices: { bottle: 80 },
          },
          {
            name: "Mercurey 1er cru « Clos Tonnerre »",
            domain: "Domaine Michel Juillot",
            appellation: "AOP Mercurey 1er cru",
            year: "2023",
            cepage: "100% Pinot Noir",
            description: "Épices fines, nuances de sous-bois. Bouche élégante et persistante, tanins fins.",
            prices: { bottle: 70 },
          },
          {
            name: "Marsannay « Héritage »",
            domain: "Domaine Huguenot",
            appellation: "AOC Marsannay",
            year: "2022",
            cepage: "100% Pinot Noir",
            description: "Notes de griottes, groseilles et épices douces.",
            prices: { bottle: 60 },
          },
          {
            name: "Auxey Duresses",
            domain: "Domaine de la Roche Aigue",
            appellation: "AOP Auxey Duresses",
            year: "2023",
            cepage: "100% Pinot Noir",
            description: "Fruits noirs et rouges mûrs. Bouche élégante, équilibrée et persistante, tanins fondus.",
            prices: { bottle: 52 },
          },
          {
            name: "Bourgogne Hautes Côtes de Nuits",
            domain: "Domaine Gauvin",
            appellation: "AOC Bourgogne Hautes Côtes de Nuits",
            year: "2022",
            cepage: "100% Pinot Noir",
            description:
              "Fruits rouges, notes florales et épices délicates. Bouche fine et fraîche, tanins souples et finale élégante.",
            prices: { bottle: 40 },
          },
          {
            name: "Hautes Côtes de Beaune",
            domain: "Domaine de la Roche Aigue",
            appellation: "AOP Hautes Côtes de Beaune",
            year: "2023",
            cepage: "100% Pinot Noir",
            description:
              "Fruits rouges frais et notes florales délicates. Bouche fine et fraîche, tanins souples.",
            prices: { glass: 8, bottle: 35 },
          },
        ],
      },
    ],
  },
  {
    slug: "roses",
    title: "Rosés",
    accent: "magenta",
    regions: [
      {
        slug: "roses",
        title: "Sélection",
        wines: [
          {
            name: "Gris de Toul",
            domain: "Domaine Lelièvre",
            appellation: "AOP Côtes de Toul",
            year: "2024",
            cepage: "Gamay / Pinot noir",
            description:
              "Rosé sec et vif, typique des « gris » lorrains, alliant fruité délicat et fraîcheur plaisante.",
            prices: { glass: 6.5, bottle: 30 },
          },
          {
            name: "M De Minuty",
            domain: "Château Minuty",
            appellation: "AOP Côtes de Provence",
            cepage: "Grenache / Cinsault / Syrah",
            description:
              "Rosé frais, fruité et élégant, très représentatif du style provençal, notes de fruits rouges frais.",
            prices: { glass: 8, bottle: 38 },
          },
        ],
      },
    ],
  },
  {
    slug: "champagnes",
    title: "Champagnes",
    accent: "magenta",
    regions: [
      {
        slug: "champagnes",
        title: "Sélection",
        wines: [
          {
            name: "Champagne Cossy 1er cru",
            domain: "Domaine Cossy",
            cepage: "Pinot Meunier / Pinot Noir / Chardonnay",
            description:
              "Élégant, expressif, marqué par la typicité du terroir de la Montagne de Reims, notes de fruits frais, brioche et florales.",
            prices: { glass: 10.5, bottle: 60 },
          },
          {
            name: "Demi Bouteille de Champagne Brut",
            domain: "Domaine Christine Guillaumé",
            cepage: "Pinot Meunier / Pinot Noir / Chardonnay",
            description:
              "Champagne aux arômes de fruits blancs et rouges frais, touche de brioche et notes minérales crayeuses.",
            prices: { bottle: 27 },
          },
        ],
      },
    ],
  },
  {
    slug: "demi-bouteilles",
    title: "Demis Bouteilles",
    accent: "terracotta",
    bottleLabel: "Bouteille 37,5cl",
    regions: [
      {
        slug: "demi-blancs",
        title: "Blancs",
        wines: [
          {
            name: "Demi Chablis « Per Aspera »",
            domain: "Domaine Charly Nicole",
            appellation: "AOC Chablis",
            year: "2023",
            cepage: "100% Chardonnay",
            description: "Pur et minéral, agrumes et fruits blancs, belle fraîcheur saline et finale nette.",
            prices: { bottle: 22 },
          },
          {
            name: "Demi Touraine Sauvignon",
            domain: "Domaine Octavie",
            appellation: "AOC Touraine",
            year: "2024",
            cepage: "100% Sauvignon Blanc",
            description: "Frais et aromatique, agrumes et fleurs blanches. Belle bouche vive et équilibrée.",
            prices: { bottle: 14 },
          },
          {
            name: "Demi Riesling cuvée Réservée",
            domain: "Domaine Stoecklé",
            appellation: "AOP Alsace",
            year: "2023",
            cepage: "100% Riesling",
            description: "Vin blanc sec, vif et aromatique. Beaucoup de fraîcheur et une jolie tension.",
            prices: { bottle: 16 },
          },
        ],
      },
      {
        slug: "demi-rouges",
        title: "Rouges",
        wines: [
          {
            name: "Demi Saint Émilion Grand cru",
            domain: "Château Saint Christophe",
            appellation: "AOC Saint Émilion Grand Cru",
            year: "2023",
            cepage: "Merlot / Cabernet Franc",
            description: "Rond et gourmand, fruits noirs et épices, tanins souples et belle longueur.",
            prices: { bottle: 23 },
          },
          {
            name: "Demi Saint Nicolas de Bourgueil",
            domain: "Domaine les Quarterons",
            appellation: "AOP Saint Nicolas de Bourgueil",
            year: "2023",
            cepage: "100% Cabernet Franc",
            description: "Frais et croquant, sur le fruit rouge, belle légèreté et beaucoup de gourmandise.",
            prices: { bottle: 17 },
          },
          {
            name: "Demi Côtes-du-Rhône",
            domain: "Domaine Chevalier d'Anthelme",
            appellation: "AOC Côtes-du-Rhône",
            year: "2024",
            cepage: "Grenache / Syrah",
            description: "Rouge gourmand, rond et épicé, fruits noirs et cerise.",
            prices: { bottle: 14 },
          },
        ],
      },
    ],
  },
];

export const formatWinePrice = (amount: number): string =>
  amount.toString().replace(".", ",") + " €";

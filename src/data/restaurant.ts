export const restaurant = {
  name: "Au Petit Gourmet",
  shortName: "AuPetitGourmet",
  tagline: "Cuisine locale et de saison",
  description:
    "Restaurant de village près de Nancy, en Lorraine. Cuisine traditionnelle du terroir, produits frais et de saison issus de nos producteurs locaux. Miel artisanal Au Rucher des Noires Terres disponible à la vente sur place.",
  address: {
    street: "22 Grande Rue",
    postalCode: "54210",
    city: "Ville-en-Vermois",
    region: "Meurthe-et-Moselle",
    country: "France",
    countryCode: "FR",
  },
  geo: {
    latitude: 48.6275,
    longitude: 6.2486,
  },
  phone: "+33383465543",
  phoneDisplay: "03 83 46 55 43",
  url: "https://aupetitgourmet.fr",
  team: {
    chef: "Alexandre Gessaga",
    owners: ["Isabelle", "Julie"],
  },
  partners: [
    "Maison Courtillet",
    "Caves Gilles",
    "L'Abeille du Vermois",
    "Petit Breuil",
    "Brasseurs de Lorraine",
    "Ferme Chauffour",
  ],
  formulesMidi: {
    schedule: "Du lundi au vendredi midi",
    items: [
      {
        name: "Plat du jour",
        price: "13,50€",
        details: null,
      },
      {
        name: "Formule entrée/plat ou plat/café gourmand",
        price: "17€",
        details: "Entrée du jour + plat du jour",
      },
      {
        name: "Formule menu du jour",
        price: "21,50€",
        details: "Entrée du jour + plat du jour + dessert du jour",
      },
    ],
  },
  hours: [
    { day: "Lundi", service: "12h00 – 13h30", closed: false },
    { day: "Mardi", service: "12h00 – 13h30", closed: false },
    { day: "Mercredi", service: "Fermé", closed: true },
    { day: "Jeudi", service: "12h00 – 13h30", closed: false },
    { day: "Vendredi", service: "12h00 – 13h30 · 19h00 – 21h00", closed: false },
    { day: "Samedi", service: "19h00 – 21h00", closed: false },
    { day: "Dimanche", service: "12h00 – 13h30", closed: false },
  ],
  openingHoursSpecification: [
    { dayOfWeek: ["Monday", "Tuesday", "Thursday"], opens: "12:00", closes: "13:30" },
    { dayOfWeek: "Friday", opens: "12:00", closes: "13:30" },
    { dayOfWeek: "Friday", opens: "19:00", closes: "21:00" },
    { dayOfWeek: "Saturday", opens: "19:00", closes: "21:00" },
    { dayOfWeek: "Sunday", opens: "12:00", closes: "13:30" },
  ],
  social: {
    instagram: "https://www.instagram.com/aupetitgourmet_/",
    facebook: "https://www.facebook.com/people/Restaurant-Au-Petit-Gourmet/61554540119406/",
  },
} as const;

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "La carte", href: "/la-carte/" },
  { label: "Le restaurant", href: "/le-restaurant/" },
  { label: "Galerie", href: "/galerie/" },
  { label: "Contact", href: "/contact/" },
] as const;

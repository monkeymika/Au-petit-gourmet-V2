import type { ImageMetadata } from "astro";

import courtillet from "@/assets/page-le-restaurant/traiteur-lorraine-courtillet-logo-bk-250px.png";
import abeille from "@/assets/page-le-restaurant/AbeilleDuVermois.jpg.webp";
import cavesGilles from "@/assets/page-le-restaurant/logoCavesGilles.jpg";
import logoM from "@/assets/page-le-restaurant/LogoM.png.webp";
import caveDuCoin from "@/assets/page-le-restaurant/logo-la-cave-du-coin-.jpg";
import petitBreuil from "@/assets/page-le-restaurant/LOGO_Petit_Breuil_AuPetitGourmet.png.webp";
import brasseurs from "@/assets/page-le-restaurant/logoBrasseursDeLorraine.jpg.webp";
import fermeChauffour from "@/assets/page-le-restaurant/Logo_FermeChauffour.jpg.webp";

export interface Partner {
  name: string;
  role: string;
  logo: ImageMetadata;
  href?: string;
}

export const partners: Partner[] = [
  {
    name: "Maison Courtillet",
    role: "Boucher · Charcutier · Traiteur",
    logo: courtillet,
  },
  {
    name: "L'Abeille du Vermois",
    role: "Michel Jeandon · Apiculteur",
    logo: abeille,
  },
  {
    name: "Caves Gilles",
    role: "Cave à vins",
    logo: cavesGilles,
  },
  {
    name: "Maison M.",
    role: "Producteur laitier",
    logo: logoM,
  },
  {
    name: "Cave du Coin",
    role: "Caviste · Bar à vins",
    logo: caveDuCoin,
  },
  {
    name: "Fromagerie du Petit Breuil",
    role: "Fromages fermiers",
    logo: petitBreuil,
  },
  {
    name: "Brasseurs de Lorraine",
    role: "Bières artisanales",
    logo: brasseurs,
  },
  {
    name: "Ferme du Chauffour",
    role: "Fromages fermiers · Ville-en-Vermois",
    logo: fermeChauffour,
  },
];

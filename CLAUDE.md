# Au Petit Gourmet — V2

Refonte du site WordPress du restaurant **Au Petit Gourmet** (Ville-en-Vermois, 54) en site statique Astro pour résoudre les problèmes de performance et améliorer le SEO local.

## Site actuel (à remplacer)
- URL : https://aupetitgourmet.fr/
- CMS : WordPress + Yoast SEO
- Problèmes : perf médiocre, **carte du restaurant en images** (résolu — maintenant en HTML structuré)

## Stack V2
- **Astro 5** (HTML statique, zéro JS par défaut)
- **Tailwind CSS** + **TypeScript** léger
- **astro:image** (optimisation auto AVIF/WebP)
- **@astrojs/sitemap** (sitemap auto)
- **Hébergement** : **Vercel** (décision verrouillée 2026-06-09) — déploiement auto depuis Git. Config cache dans `vercel.json` (le `_headers` Cloudflare est ignoré par Vercel mais conservé). Hébergeur déclaré dans les mentions légales : **Vercel Inc.**

## Structure du site (5 pages + 3 légales)

URLs **identiques** à la V1 → zéro perte SEO :

| URL | Page | État |
|---|---|---|
| `/` | Accueil (hero cinématique + 7 sections) | ✅ Refondue |
| `/la-carte/` | La carte (HTML structuré depuis `menu.ts`) | ✅ Refondue |
| `/le-restaurant/` | Le restaurant | À retoucher |
| `/galerie/` | Galerie (masonry + lightbox, 17 photos) | ✅ Refondue |
| `/contact/` | Contact + Google Maps | À retoucher |
| `/mentions-legales/`, `/politique-de-confidentialite/`, `/politique-de-cookies-ue/` | Pages légales | À compléter |

## Design tokens
- **Vert principal** : `#3A563F` → `forest-700`
- **Brun accent** : `#B07439` → `terracotta-500`
- **Fond** : `cream-50` `#FBF8F3` (avec `cream-100` alterné pour rythme visuel)
- **Texte** : `ink-900` `#2A211C`
- **Titres** : **Source Serif Pro**
- **Texte courant** : **Lato**

## Architecture navigation (Mooser-style)

- **PillNav** (`src/components/PillNav.astro`) : pill flottante top-right fixe sur toutes les pages, `z-[70]` (au-dessus de l'overlay). 2 boutons : "Menu ☰" + "Réserver". Hamburger en 3 spans CSS qui **s'anime en croix** au clic (rotate 45°/-45° + mid disparaît).
- **NavOverlay** (`src/components/NavOverlay.astro`) : menu plein écran qui **descend en rideau** depuis le haut. Animation `translateY + opacity` 1000ms easeInOutQuint. Logo en version négatif (blanc) pour fond forest.
- **scrollbar-gutter: stable** sur `html` → l'espace de scrollbar est toujours réservé, plus de saut quand on lock le scroll.

## Hero cinématique (home)

Section 220vh/260vh avec `sticky top-0 h-screen` → **scroll pin**.

- **Top-left** : icône hérisson SEULE (sans wordmark), h-24/h-32, centrée verticalement avec la pill nav via box `h-[44px] flex items-center`
- **Bas-gauche** : H1 italique "Au Petit Gourmet, cuisine *locale* et *de saison.*"
- **Indicateur scroll** : cercle SVG rotatif "DÉCOUVRIR · DÉCOUVRIR · DÉCOUVRIR" en textPath (tour en 18s) + flèche centrée
- **Animations séquencées** :
  - 0 → 0.35 : titre fade out, logo+pill décalés +48px
  - 0.35 → 0.5 : logo + pill remontent à Y=0
  - 0.5 → 1.0 : révélation crème (vidéo rétrécit), pill CTA apparaît avec
  - 0.55 → 0.9 : logo fade + slide gauche
- **Pill CTA** toujours opacity 1 (pas de fade), cachée par offset 90px hors champ au repos

## Sections de la home (rythme alterné)

| # | Section | Fond | Séparateur ◇ |
|---|---|---|---|
| 1 | Bienvenue chez nous + horaires | cream-50 | — |
| 2 | Vu sur Instagram (find.nancy) | cream-100 | ◇ |
| 3 | Nos événements (3 affiches + lightbox) | cream-50 | — |
| 4 | Formules du midi (forest, logo principal + 3 prix) | forest-700 | ◇ |
| 5 | À la carte (extraits menu + filigrane "Carte") | cream-50 | — |
| 6 | Galerie (17 photos masonry + lightbox locale) | cream-100 | ◇ |
| 7 | **Miel — Au Rucher des Noires Terres** (vidéo + photo + 3 cards variétés) | cream-50 | — |
| 8 | Avis Google | photo jardin | — |
| 9 | Contact + Maps + horaires | cream-50 | — |

## Fichiers de données

| Fichier | Contenu |
|---|---|
| `src/data/restaurant.ts` | Infos établissement + `formulesMidi` + partenaires |
| `src/data/menu.ts` | Carte 4 sections / 18 plats typés + `formatPrice()` helper |
| `src/data/events.ts` | 3 événements (affiches) |

## Page `/la-carte/`
- Hero + intro + **nav d'ancres** (Entrées/Plats/Fromages/Desserts, scroll-mt-32)
- 4 sections rendues depuis `menu.ts` (18 plats avec nom, description italique, allergènes, prix terracotta)
- Variantes de prix (Entrée/Plat, Simple/Double) supportées
- Footer notes + CTA Réservation

## Page `/galerie/`
- 17 photos en masonry CSS columns (`columns-1 sm:columns-2 lg:columns-3 xl:columns-4`)
- Bords rounded-2xl, ring-1 subtil
- Lightbox avec prev/next + compteur + navigation clavier (← → Esc)

## Motifs botaniques « terroir »

`src/components/Botanical.astro` : 8 motifs SVG line-art (esprit gravure) dessinés au trait — `ble, tomate, carotte, radis, abeille, raisin, brin, fleur`. Inline, currentColor, zéro poids. Posés en absolu dans les marges des sections (un motif lié au contenu de chaque section : abeille→miel, blé→formules, raisin→vins…), opacité /20-25, masqués sur mobile. Détails : mémoire `motifs-botaniques.md`.

## Organisation des assets

| Dossier | Usage |
|---|---|
| `src/assets/logo/` | LogoPrincipal (complet), LogoReduit (hérisson icône), LogoNegatif (blanc pour fonds sombres) |
| `src/assets/galerie/` | 17 photos `01.webp` à `17.webp` (max 1200px, q80, ~1.1 MB total) |
| `src/assets/a-la-carte/` | 3 PNG sources de la carte (conservés pour référence) |
| `src/assets/evenements/` | 3 affiches sources |
| `src/assets/miel/` | 01-pots-ardoise.webp (88 Ko) + 02-pots-detail.webp (79 Ko) |
| `public/affiches/` | 3 affiches WebP optimisées (147 Ko total) |
| `public/videos/` | hero.mp4 (vidéo cliente 1600×900 24fps, 5,67 Mo, muette — màj 2026-06-09) + hero-mobile.mp4 (960×540, 1,88 Mo, servie via `<source media>`) + hero-poster.webp + find-nancy-reel.mp4 + miel-rucher.mp4 (569 Ko) + posters WebP |
| `public/menu/` | PDF carte (vide, en attente) |
| `Img/` | Boîte de réception : utilisateur dépose ici, je trie |

## Convention de naming
**kebab-case** pour tous les dossiers et fichiers (`a-la-carte`, `evenements`, etc.).

## Outils
- **ffmpeg** dispo via winget (Gyan.FFmpeg) — utilisé pour compresser vidéo Insta et batch-convertir photos galerie

## SEO préservé
- URLs identiques → aucune redirection 301 nécessaire
- Titles Yoast actuels repris dans `BaseLayout`
- Schema.org `Restaurant` câblé dans `src/components/SEO.astro`
- Sitemap.xml auto-généré
- **Gros gain SEO** : carte 100% indexable (18 plats en HTML structuré, vs ancien site en images)

## Infos établissement (`src/data/restaurant.ts`)
- **Adresse** : 22 Grande Rue, 54210 Ville-en-Vermois
- **Tél** : 03 83 46 55 43
- **Chef** : Alexandre Gessaga | **Propriétaires** : Isabelle et Julie
- **Cuisine** : locale et de saison, terroir lorrain
- **Partenaires** : Maison Courtillet, Caves Gilles, L'Abeille du Vermois, Petit Breuil, Brasseurs de Lorraine, Ferme Chauffour
- **Horaires** : Lun-Mar-Jeu midi | Ven midi+soir | Sam soir | Dim midi | Mer fermé

## Workflow
- Pas de commits sans demande explicite
- Réponses en français
- Confirmer avant action destructive
- Préférence : feedback visuel itératif (screenshots), inspiration Mooser Hotel

## Ce qu'il reste à faire
- [ ] **Empreintes hérisson au scroll** (`src/components/PawTrail.astro`, home only) : effet en place (paires diagonales, côtés alternés, pose séquentielle droite→gauche, asset `public/loader/foot.png`). **À retravailler** + étendre aux autres pages quand validé. Détails : mémoire `paw-trail.md`.
- [x] ~~Recevoir vidéo hero définitive~~ → **nouvelle vidéo reçue le 2026-06-09** et en place (`hero.mp4` 1600×900 24fps, compressée 52,7 Mo → 5,67 Mo, muette ; mobile 960×540 2,2 Mo ; poster q65 78 Ko). Original conservé dans `Img/hero-nouveau.mp4`. Anciens fichiers (`hero-placeholder.mp4`, `video_hero-original.mp4`) supprimés.
- [ ] Recevoir PDF carte (cliente) → bonus téléchargeable sur `/la-carte/`
- [ ] Refondre éventuellement `/le-restaurant/` et `/contact/`
- [x] Mentions légales + politique de confidentialité complétées (2026-06-05, textes officiels cliente). Hébergeur indiqué : **Hostinger** (choix confirmé par monke). Confidentialité **adaptée au site statique** (pas de copie du texte WordPress). Politique de cookies complétée. **Pas de bandeau cookies nécessaire** : Google Maps derrière façade click-to-load (`MapEmbed.astro`, pattern CNIL) sur home + contact.
- [x] Audit perf + SEO complet (2026-06-05) : fonts auto-hébergées (@fontsource), loader 1×/session, og-default.jpg créé, page 404, schema.org enrichi, `_headers` Cloudflare — détails : mémoire `perf-seo-audit.md`
- [ ] Tests perf finaux (Lighthouse) sur l'URL de prod après déploiement
- [ ] Migration DNS vers **Vercel** : ajouter le domaine dans Vercel → pointer A `aupetitgourmet.fr` vers `76.76.21.21` + CNAME `www` vers `cname.vercel-dns.com` dans la zone DNS Hostinger. **Garder les MX** (email). Vérifier les 8 pages sur le vrai domaine AVANT de supprimer le WordPress.

# Schoolvi - Landing page

Site vitrine public de Schoolvi (projet Next.js separe de l'application).

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind CSS v4
- `lucide-react` pour les icones, `cn` pour les classes, animations en CSS pur
- Polices : Urbanist pour les titres, Jost pour le texte ; palette creme + bleu Schoolvi #2563eb

## Demarrage

```bash
npm install
cp .env.example .env.local   # puis ajuster NEXT_PUBLIC_APP_URL si besoin
npm run dev -- -p 3001       # http://localhost:3001 (3000 est pris par l'app)
```

## Structure

- `src/content/site.ts` - tout le contenu marketing (textes, liens, features, FAQ) au meme endroit
- `src/components/landing/*` - une section par fichier (header, hero, product-panel, value-props, modules, testimonials, unified, pricing, faq, final-cta, footer, floating-cta)
- `src/components/landing/mockups.tsx` - mockups produit en CSS (aucune capture d'ecran)
- `src/components/ui/*` - primitives (pill-button, blob, cloud-panel, module-icon, social-icons)
- `src/app/page.tsx` - assemble les sections

## Deploiement (Cloudflare Workers, export statique)

Le site est exporte en statique (`output: "export"` dans `next.config.ts`, dossier `out/`) et servi
comme assets par Cloudflare via `wrangler.jsonc` (Worker `landing-page`, sans code serveur).

Parametres du projet Cloudflare (Workers & Pages > landing-page > Settings > Build) :
- Build command : `npm run build`
- Deploy command : `npx wrangler deploy`
- Variables : `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_APP_URL`

Le nom dans `wrangler.jsonc` doit rester identique au nom du projet Cloudflare.
Si un jour la landing a besoin de code serveur (formulaire, API), passer a OpenNext
(`@opennextjs/cloudflare`) et retirer `output: "export"`.

## SEO

- Metadonnees completes dans `src/app/layout.tsx` (title, description, keywords, canonical, Open Graph fr_TG,
  Twitter, robots, geo Togo) ; `src/lib/site.ts` centralise l'URL du site.
- `src/app/opengraph-image.tsx` et `src/app/icon.tsx` generent l'image de partage et le favicon au build.
- `src/app/robots.ts` et `src/app/sitemap.ts` produisent `robots.txt` et `sitemap.xml`.
- `src/components/landing/structured-data.tsx` : JSON-LD Organization, WebSite, SoftwareApplication
  (offre 1 000 XOF / eleve / an) et FAQPage.
- Pages legales : `/cgu` et `/confidentialite` (droit togolais, loi n. 2019-014). Les mentions entre crochets
  (raison sociale, RCCM, adresse) sont a completer.

## Tarification

L'estimateur (`src/components/landing/pricing.tsx`) lit `PRICING` dans `src/content/site.ts` :
1000 FCFA par eleve et par an, enseignants et personnel illimites.

## A faire avant mise en ligne

- Remplacer les temoignages fictifs (`TESTIMONIALS` dans `src/content/site.ts`) par de vrais retours
- Renseigner l'adresse de contact (`CTA.contact` pointe sur `mailto:contact@schoolvi.app`)
- Ajouter les pages Conditions / Confidentialite (liens `#` dans `FOOTER`)

## Conventions

- Aucun caractere accentue dans le code ni dans les textes (meme regle que l'application)
- Design plat : bordures `border-border` plutot que des ombres

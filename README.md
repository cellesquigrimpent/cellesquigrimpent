# cellesquigrimpent — Site officiel (starter)

Bienvenue — ce repo contient un starter Next.js + Tailwind pour le site du film "Celles qui grimpent".

Features incluses dans ce commit :
- Next.js avec i18n (fr/en)
- Page d'accueil avec vidéo en fond (placez `public/trailer.mp4`)
- Page projections avec carte Leaflet et marqueurs
- Page avis (reviews) avec stockage local + formulaire
- Page contact (lien Google Form)

Ressources à ajouter avant le déploiement
1) Bande-annonce : place `trailer.mp4` dans le dossier `public/` (ou change le chemin dans `pages/index.js`). Pour autoplay en background, préférez un MP4 H.264.
2) Police Bobby Jones : place le fichier .woff2 dans `public/fonts/BobbyJones.woff2` et décommente le `@font-face` dans `styles/globals.css`. Vérifie la licence avant publication.
3) Affiche / images : place `poster.jpg` dans `public/poster.jpg` (utilisée comme poster pour la video).
4) Logos/illustrations : place-les dans `public/images/`.

Installer et lancer en local

1. Clone :
   git clone https://github.com/cellesquigrimpent/cellesquigrimpent.git
2. Installer :
   npm install
3. Développer :
   npm run dev

Déploiement
- Recommande : Vercel. Connecte ton repo GitHub et déploie. Pour la vidéo, si lourde, héberge sur Vimeo et remplace la source.

Supabase (optionnel) — pour avis en temps réel
- Crée un projet Supabase et une table `reviews` (id, name, rating, text, created_at).
- Ajoute les variables d'environnement `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY` sur Vercel.
- Remplace la logique locale dans `pages/reviews.js` par appels Supabase (exemples fournits sur supabase.com/docs).

Licence
MIT


# Yawasla Corpus — Contexte projet

## Conventions

- Markdown : une phrase/un paragraphe par ligne, pas de retour à la ligne forcé au milieu.
- Commentaire : une ligne par commentaire tres synthetique sur des passages seulement ambigus

## Présentation

Yawasla Corpus est une application de lecture du Coran verset par verset, avec traduction officielle multilingue et un système d'apprentissage du vocabulaire au survol : passer la souris sur un mot arabe affiche sa traduction mot-à-mot avec son analyse grammaticale (ex : « lire (v.) 3e pers. pluriel », « livre (nom commun) sing. »).

Projet distinct de `org` (Yawasla newsroom open-source) et `com` (Yawasla plateforme commerciale), au sein du même espace de travail Yawasla.

## ⚠️ Statut du projet : construction très progressive

**On avance petit à petit, sourate par sourate, inchaAllah.**

Ne pas anticiper ou développer de fonctionnalités hors du périmètre défini ci-dessous sans demande explicite. Le périmètre s'enrichira au fur et à mesure.

## Concept

### Accueil
- Liste des 114 sourates du Coran avec traduction officielle.
- Une sourate pas encore disponible est affichée **grisée** (non cliquable).
- Ordre de développement : on **commence par la sourate 114 et on remonte** vers la 1.
- Possibilité de changer de langue + détection de la langue du visiteur.

### Page sourate
- Texte arabe affiché **verset par verset**.
- Traduction officielle affichée en regard (source à confirmer : Hamidullah ou Complexe du Roi Fahd — voir « Sources de données »).
- **Multilingue dès le départ** : français, anglais, espagnol.

### Survol d'un mot (fonctionnalité clé)
- Au survol d'un mot arabe, une infobulle affiche :
  - sa traduction,
  - son analyse grammaticale (nature, personne, nombre, genre, etc.),
  - ajout en favoris.

### Page favoris
- Une page liste tous les favoris de l'utilisateur avec possibilité d'exporter.
- Les favoris constituent un **dico personnel du Coran**, pensé pour la révision.
- Enregistrement en local ds le navigateur + tuto comment ne pas effacer les données (chrome, edge, etc.).

## Exigences non-fonctionnelles

- **Rapidité et simplicité avant tout** : UX minimaliste, temps de chargement/réponse très courts. Toute fonctionnalité ajoutée ne doit pas dégrader ce principe.
- **Mobile first** : le site est adapté en mobile puis tablette et desktop.

## Stack technique

**Next.js (React)**, en génération statique (SSG) pour les pages de sourates : le contenu est pré-généré en HTML à la publication (bon pour le référencement, chargement rapide), et l'interactivité (survol des mots, favoris) est ajoutée par-dessus côté client.

Hébergement cible : VPS, le build statique est simplement servi par le serveur web (Apache/Nginx), sans process Node ni base de données nécessaires en production pour ces pages. Toute évolution qui remettrait ce choix en cause doit être validée explicitement.

## Sources de données

**Tranché.** Fichiers dans `corpus/sources/` (format XML, même indexation sourate/verset sur tous les fichiers, donc reliables entre eux sans travail de correspondance) :
- Texte arabe (avec diacritiques) : `quran-simple.xml` — Tanzil Project.
- Traduction française : `fr.hamidullah.xml` — Hamidullah, Tanzil Project.
- Traduction anglaise : `en.ahmedali.xml` — Ahmed Ali, Tanzil Project.
- Traduction espagnole : `es.bornez.xml` — Bornez, Tanzil Project.
- Analyse mot-à-mot (traduction + grammaire par mot) : Quranic Arabic Corpus (Kais Dukes).

**Traduction mot-à-mot (absente des sources ci-dessus) : à déduire, jamais inventée librement.** La grammaire vient du Quranic Arabic Corpus. Grammaire (fr/en/es/ar) générée par `npm run grammaire -- <n° sourate>` (`scripts/grammaire.mjs`) depuis `quranic-corpus-morphology-0.4.txt`, jamais écrite à la main : une étiquette non traduite ou un nombre de mots différent du corpus arrête le script. Par défaut, on reprend le mot de la traduction officielle du verset (Hamidullah/Ahmed Ali/Bornez) qui correspond le mieux à chaque mot arabe — le traducteur reste la référence, pas de sens inventé. Exception ponctuelle : si la traduction officielle rend mal/trop librement le sens du verset pour un mot donné, on se permet d'ajouter un autre mot plus fidèle — à faire au cas par cas, pas systématiquement.

**Obligations de licence (les deux sources) : copie verbatim uniquement, ne jamais modifier le texte/l'annotation, attribution + lien obligatoires et visibles sur le site** (Tanzil Project → tanzil.net, Quranic Arabic Corpus → corpus.quran.com). Le découpage du texte en mots cliquables n'est pas une modification tant que le contenu affiché reste identique.

## Audio (récitation)

Deux récitateurs : Al-Hussary et Al-Houdaifi (`sources/al-hussary/` et `sources/al-houdaifi/`, un mp3 par sourate complète, attribution visible dans le panneau « Sources & remerciements », voir `conf/license.ts`).
Découpage en un mp3 par verset dans `public/assets/audio/<recitateur>/<id>-<slug>/` (ex. `al-hussary/001-al-fatiha/01.mp3`), un tableau de sourates découpées par récitateur dans `conf/audio.ts`.
Sélecteur de récitateur (`SelecteurRecitateur`) affiché sous le nom de la sourate, une option par récitateur, désactivée si la sourate n'est pas encore découpée pour lui. Choix mémorisé en local (`RecitateurProvider`, même pattern que `ThemeProvider`/`TransliterationProvider`) et partagé avec la barre de navigation (lecture sourate entière) et le bouton par verset.
**Bismillah : verset `numero: 0` dans `sourate_NNN.ts`** (mots/traduction/audio identiques au verset 1 d'Al-Fatiha, seule sourate où c'est un vrai verset), sauf At-Tawbah/9 qui n'en a pas — pas comptée comme un verset par les savants, donc `NumeroVerset` n'affiche pas de numéro pour elle (voir `src/components/NumeroVerset.tsx`), mais elle est lue/surlignée normalement. Copier aussi `001-al-fatiha/01.mp3` en `00.mp3` dans le dossier audio de la nouvelle sourate (fichier dupliqué plutôt que référencé depuis celui d'Al-Fatiha, pour garder chaque dossier audio autonome).
Minutage mot-à-mot (surlignage pendant la lecture) : champ `Verset.audio` (`"mm:ss.d"`, un timestamp de départ par mot) dans `src/data/sourates/sourate_NNN.ts`, calé à l'oreille.

## Évolutions

Tout ce qui n'est pas listé dans « Concept » ci-dessus à ne pas développer sans demande explicite. Exemple d'évolutions possibles :

- Récitation avec les lettres qui se colorisent.
- Ajout d'autres traductions.
- Recherche plein texte.

---

## TODO

- [x] Définir le format de stockage de la source (texte, traductions FR/EN/ES, mot-à-mot)
- [x] Page d'accueil : liste des 114 sourates (dispo / grisées)
- [x] Page sourate : affichage verset par verset + traduction
- [x] Interaction au survol : infobulle traduction + grammaire par mot
- [x] Sélecteur de langue (FR / EN / ES)
- [x] Darkmode
- [x] Attribution Tanzil + Quranic Arabic Corpus visible sur le site (obligation de licence)
- [ ] Intégration du contenu
- [ ] Système de mot favori + page « dico personnel »
- [x] Sélecteur de récitateur (options désactivées tant qu'une sourate n'est pas découpée pour ce récitateur)
- [ ] Découper Al-Houdaifi en clips par verset

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

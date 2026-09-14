# Yawasla Corpus

[![license](https://img.shields.io/github/license/julienagullo/yawasla-corpus.svg)](https://github.com/julienagullo/yawasla-corpus/blob/main/LICENSE.md)

A Quran reading app, verse by verse, with an official multilingual translation (French, English, Spanish) and vocabulary learning on hover: every Arabic word shows its translation and grammatical analysis.

**Status: work in very slow progress.** The project moves forward sura by sura — see [CLAUDE.md](./CLAUDE.md) for the full scope and current progress.

## Table of contents

- [Quick start](#quick-start)
- [Tech stack](#tech-stack)
- [Data sources & licenses](#data-sources--licenses)
- [Contact](#contact)
- [Responsibility](#responsibility)
- [License](#license)

## Quick start

#### Clone the repo

```
git clone https://github.com/julienagullo/yawasla-corpus.git
```

#### Project setup

```
npm install
```

#### Compiles for development

```
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

#### Compiles for production (static export)

```
npm run build
```

Generates static HTML pages in `build/` (see `next.config.ts`), meant to be served by Apache/Nginx with no Node process in production.

#### Compiles for local testing under MAMP

```
npm run build:mamp
```

Same build, with `basePath` set to `/corpus` (site served from a subfolder locally).

#### Lints files

```
npm run lint
```

## Tech stack

This project is built with the assistance of **Claude Code** (Anthropic): implementation, data structuring and word-by-word translations — under the author's editorial and technical direction (product choices, architecture and trade-offs documented in [CLAUDE.md](./CLAUDE.md)).

- **Next.js** (React), statically generated (SSG) — no database or Node process required in production
- **TypeScript**
- **Bootstrap 5** + **Bootstrap Icons**
- **Amiri** font (naskh style) for the Arabic text, via `next/font/google`

## Data sources & licenses

Content (text, translations, grammatical annotation) comes from two third-party projects, reused as verbatim copies with mandatory attribution:

- **Arabic text and official translations (FR/EN/ES)** — [Tanzil Project](https://tanzil.net)
- **Word-by-word grammatical analysis** — [Quranic Arabic Corpus](https://corpus.quran.com) (Kais Dukes)

See the "Sources de données" section of [CLAUDE.md](./CLAUDE.md) for the exact files and license obligations (no modification of the text/annotation, attribution and link visible on the site).

## Contact

- Mail: [contact@jagullo.fr](contact@jagullo.fr?subject=[GitHub]%20yawasla-corpus)
- Website: <https://jagullo.fr>
- Github: <https://github.com/julienagullo/yawasla-corpus>

## Responsibility

Author disclaims any responsibility for the use that is made with this tool.

```text
Al-Nu'man ibn Bashir reported,
The Messenger of Allah (Peace and Blessings be upon Him) said: « Verily, the lawful is clear and the unlawful is clear, and between the two of them they are doubtful matters about which many people don't know. Thus, he who avoids doubtful matters clears himself in regard to his religion and his honor, and he who falls into doubtful matters will fall into the unlawful as the shepherd who pastures near a sanctuary, all but grazing there in. Verily, every king has a sanctum and the sanctum of Allah is his prohibitions. Verily, in the body is a piece of flesh which, if sound, the entire body is sound, and if corrupt, the entire body is corrupt. Truly, it is the heart. »
Sahih al-Bukhārī 52, Sahih Muslim 1599
```

```text
D'après Nu'man Ibn Bachir (qu'Allah l'agrée),
Le Messager d'Allah (que La Prière d'Allah et Son Salut soient sur Lui) a dit : « Certes le halal est clair et certes le haram est clair et il y a entre les deux des choses ambiguës que peu de gens connaissent. Celui qui s'écarte des choses ambiguës a préservé sa religion et son honneur. Quant à celui qui tombe dans les choses ambiguës il tombe dans le haram comme le berger qui fait paitre ses bêtes près d'un enclos réservé et qui sont sur le point de rentrer dedans. Certes chaque roi a un domaine réservé et certes le domaine réservé d'Allah est ses interdits. Certes il y a dans le corps un morceau de chair, si il est bon alors l'ensemble du corps est bon tandis que si il est mauvais alors c'est l'ensemble du corps qui est mauvais, certes il s'agit du coeur. »
Sahih al-Bukhārī 52, Sahih Muslim 1599
```

## License

Copyright © jagullo.fr

The code of this project is licensed under [MIT](./LICENSE.md).

Content from third-party sources (Quranic text, translations, grammatical annotation — see "Data sources & licenses" above) remains under its original licenses: verbatim copy only, no modification, attribution and link mandatory (Tanzil Project, Quranic Arabic Corpus — GNU General Public License for the morphological annotation). The MIT license of the code does not extend to this content.

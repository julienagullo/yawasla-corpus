// Génère le champ `grammaire` (fr/en/es/ar) de chaque mot d'une sourate à partir du Quranic Arabic Corpus.
// Usage : npm run grammaire -- 114 [113 ...]
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const RACINE = fileURLToPath(new URL("..", import.meta.url));
const LANGUES = ["fr", "en", "es", "ar"];

const PREFIXES = {
  "bi+": { fr: "préposition « bi »", en: "preposition « bi »", es: "preposición « bi »", ar: "حرف جر «بِ»" },
  "l:P+": { fr: "préposition « li »", en: "preposition « li »", es: "preposición « li »", ar: "حرف جر «لِ»" },
  "w:CONJ+": { fr: "conjonction « wa »", en: "conjunction « wa »", es: "conjunción « wa »", ar: "حرف عطف «وَ»" },
  "f:RSLT+": { fr: "particule de résultat « fa »", en: "result particle « fa »", es: "partícula de resultado « fa »", ar: "حرف واقع في جواب الشرط «فَ»" },
  "sa+": { fr: "particule de futur « sa »", en: "future particle « sa »", es: "partícula de futuro « sa »", ar: "حرف استقبال «سَ»" },
};

const NATURES = {
  N: { fr: "nom commun", en: "common noun", es: "nombre común", ar: "اسم" },
  PN: { fr: "nom propre", en: "proper noun", es: "nombre propio", ar: "اسم علم" },
  ADJ: { fr: "adjectif", en: "adjective", es: "adjetivo", ar: "صفة" },
  REL: { fr: "pronom relatif", en: "relative pronoun", es: "pronombre relativo", ar: "اسم موصول" },
  PRON: { fr: "pronom personnel", en: "personal pronoun", es: "pronombre personal", ar: "ضمير منفصل" },
  P: { fr: "préposition", en: "preposition", es: "preposición", ar: "حرف جر" },
  NEG: { fr: "particule de négation", en: "negative particle", es: "partícula negativa", ar: "حرف نفي" },
  T: { fr: "adverbe de temps", en: "time adverb", es: "adverbio de tiempo", ar: "ظرف زمان" },
  ACC: { fr: "particule d'accusatif", en: "accusative particle", es: "partícula de acusativo", ar: "حرف نصب" },
  ACT_PCPL: { fr: "participe actif", en: "active participle", es: "participio activo", ar: "اسم فاعل" },
  PASS_PCPL: { fr: "participe passif", en: "passive participle", es: "participio pasivo", ar: "اسم مفعول" },
};

const PRONOM_SUFFIXE = { fr: "pronom suffixe", en: "pronoun suffix", es: "sufijo pronominal", ar: "ضمير متصل" };
const VERBE = { fr: "verbe (v.)", en: "verb (v.)", es: "verbo (v.)", ar: "فعل" };
const ASPECTS = {
  PERF: { fr: "accompli", en: "perfect", es: "perfectivo", ar: "ماض" },
  IMPF: { fr: "inaccompli", en: "imperfect", es: "imperfectivo", ar: "مضارع" },
  IMPV: { fr: "impératif", en: "imperative", es: "imperativo", ar: "أمر" },
};
const KANA = { fr: "(famille de « kāna »)", en: "(kāna family)", es: "(familia de « kāna »)", ar: "ناقص" };
const PASSIF = { fr: "passif", en: "passive", es: "pasivo", ar: "مبني للمجهول" };
const MODES = {
  "MOOD:JUS": { fr: "apocopé (jussif)", en: "jussive", es: "yusivo", ar: "مجزوم" },
  "MOOD:SUBJ": { fr: "subjonctif", en: "subjunctive", es: "subjuntivo", ar: "منصوب" },
};
const GENRES = { M: { fr: "m.", en: "m.", es: "m.", ar: "مذكر" }, F: { fr: "f.", en: "f.", es: "f.", ar: "مؤنث" } };
const NOMBRES = {
  S: { fr: "sing.", en: "sing.", es: "sing.", ar: "مفرد" },
  D: { fr: "duel", en: "dual", es: "dual", ar: "مثنى" },
  P: { fr: "plur.", en: "plural", es: "plural", ar: "جمع" },
};
const DEFINI = { fr: "déf.", en: "def.", es: "def.", ar: "معرفة" };
const INDEFINI = { fr: "indéf.", en: "indef.", es: "indef.", ar: "نكرة" };
const CAS = {
  NOM: { fr: "nominatif", en: "nominative", es: "nominativo", ar: "مرفوع" },
  ACC: { fr: "accusatif", en: "accusative", es: "acusativo", ar: "منصوب" },
  GEN: { fr: "génitif", en: "genitive", es: "genitivo", ar: "مجرور" },
};
// Personne arabe : formulation figée par combinaison, pas de composition mot à mot.
const PERSONNES_AR = {
  "1S": "للمتكلم المفرد", "1P": "للمتكلمين (جمع)",
  "2MS": "للمخاطب المذكر المفرد", "2FS": "للمخاطبة المؤنثة المفردة", "2D": "للمخاطبَين (مثنى)",
  "2MP": "للمخاطبين (جمع مذكر)", "2FP": "للمخاطبات (جمع مؤنث)",
  "3MS": "للغائب المذكر المفرد", "3FS": "للغائبة المؤنثة المفردة", "3MD": "للغائبَين (مثنى مذكر)",
  "3FD": "للغائبتين (مثنى مؤنث)", "3MP": "للغائبين (جمع مذكر)", "3FP": "للغائبات (جمع مؤنث)",
};

// Virgule arabe « ، » dans les libellés arabes.
const virgule = (langue) => (langue === "ar" ? "، " : ", ");

function erreur(message) {
  throw new Error(message);
}

function personne(code, langue) {
  if (langue === "ar") return PERSONNES_AR[code] ?? erreur(`personne inconnue : ${code}`);
  const [, p, g, n] = code.match(/^([123])([MF]?)([SDP])$/) ?? erreur(`personne inconnue : ${code}`);
  const rang = { fr: p === "1" ? "1re" : `${p}e`, en: ["1st", "2nd", "3rd"][p - 1], es: `${p}ª` }[langue];
  return [`${rang} pers.`, g && GENRES[g][langue], NOMBRES[n][langue]].filter(Boolean).join(" ");
}

function lireCorpus() {
  const mots = new Map();
  for (const ligne of readFileSync(`${RACINE}/sources/quranic-corpus-morphology-0.4.txt`, "utf8").split("\n")) {
    const m = ligne.match(/^\((\d+):(\d+):(\d+):\d+\)\t\S*\t\S+\t(\S+)/);
    if (!m) continue;
    const cle = `${m[1]}:${m[2]}:${m[3]}`;
    if (!mots.has(cle)) mots.set(cle, []);
    mots.get(cle).push(m[4].split("|"));
  }
  return mots;
}

// Un segment du corpus (préfixe, radical ou suffixe) → libellé dans une langue ; `defini` = article « al » vu en préfixe.
function segment(traits, langue, contexte) {
  const [type, ...reste] = traits;
  if (type === "PREFIX") return (PREFIXES[reste[0]] ?? erreur(`préfixe inconnu : ${reste[0]}`))[langue];
  if (type === "SUFFIX") return `${PRONOM_SUFFIXE[langue]}${virgule(langue)}${personne(reste[0].replace("PRON:", ""), langue)}`;

  const pos = reste[0].replace("POS:", "");
  const f = new Set(reste);
  const perso = reste.find((x) => /^[123][MF]?[SDP]$/.test(x));

  if (pos === "V") {
    const aspect = ASPECTS[["PERF", "IMPF", "IMPV"].find((a) => f.has(a))][langue];
    const mode = reste.find((x) => x.startsWith("MOOD:"));
    const ar = langue === "ar";
    const morceaux = ar
      ? [VERBE.ar, aspect, f.has("SP:kaAn") && KANA.ar, f.has("PASS") && PASSIF.ar, mode && MODES[mode].ar]
      : [VERBE[langue], f.has("PASS") && PASSIF[langue], aspect, mode && MODES[mode][langue], f.has("SP:kaAn") && KANA[langue]];
    return `${morceaux.filter(Boolean).join(" ")}${virgule(langue)}${personne(perso, langue)}`;
  }

  // Pronom radical collé à une préposition préfixée (ex. « lahu ») : c'est un suffixe, pas un pronom isolé.
  if (pos === "PRON") {
    const nature = contexte.apresPreposition ? PRONOM_SUFFIXE : NATURES.PRON;
    return `${nature[langue]}${virgule(langue)}${personne(perso, langue)}`;
  }

  let nature = NATURES[pos] ?? erreur(`nature inconnue : ${pos}`);
  if (f.has("PCPL")) nature = f.has("PASS") ? NATURES.PASS_PCPL : NATURES.ACT_PCPL;
  const gn = reste.find((x) => /^[MF]?[SDP]?$/.test(x) && x) ?? "";
  const genre = gn.match(/[MF]/)?.[0];
  const nombre = gn.match(/[SDP]/)?.[0];
  const determination = contexte.defini ? DEFINI : f.has("INDEF") ? INDEFINI : null;
  const cas = ["NOM", "ACC", "GEN"].find((c) => f.has(c));
  const tete = [nature[langue], genre && `(${GENRES[genre][langue]})`, nombre && NOMBRES[nombre][langue], determination?.[langue]];
  const texte = tete.filter(Boolean).join(" ");
  return cas ? `${texte}${virgule(langue)}${CAS[cas][langue]}` : texte;
}

function analyser(segments, langue) {
  const contexte = {
    defini: segments.some((s) => s[1] === "Al+"),
    apresPreposition: segments.some((s) => s[0] === "PREFIX" && PREFIXES[s[1]] && ["bi+", "l:P+"].includes(s[1])),
  };
  return segments
    .filter((s) => !(s[0] === "PREFIX" && s[1] === "Al+"))
    .map((s) => segment(s, langue, contexte))
    .join(" + ");
}

const corpus = lireCorpus();
for (const arg of process.argv.slice(2)) {
  const sourate = Number(arg);
  const fichier = `${RACINE}/src/data/sourates/sourate_${String(sourate).padStart(3, "0")}.ts`;
  const source = readFileSync(fichier, "utf8");
  let numero = null;
  let index = 0;
  const cleMot = (n, i) => (n === 0 ? `1:1:${i}` : `${sourate}:${n}:${i}`);
  // Mot du corpus en trop après le dernier mot du verset = décalage entre le fichier et le corpus.
  const verifierFinVerset = () => {
    if (numero !== null && corpus.has(cleMot(numero, index + 1))) erreur(`${fichier} : verset ${numero}, mots manquants par rapport au corpus`);
  };
  const resultat = source.replace(/numero: (\d+),|^( *)grammaire: \{[\s\S]*?\},/gm, (bloc, num, indent) => {
    if (num !== undefined) {
      verifierFinVerset();
      numero = Number(num);
      index = 0;
      return bloc;
    }
    index++;
    // Bismillah (verset 0) : mêmes mots que le verset 1 d'Al-Fatiha.
    const cle = cleMot(numero, index);
    const segments = corpus.get(cle) ?? erreur(`${fichier} : mot absent du corpus (${cle})`);
    const lignes = LANGUES.map((l) => `${indent}  ${l}: ${JSON.stringify(analyser(segments, l))},`);
    return `${indent}grammaire: {\n${lignes.join("\n")}\n${indent}},`;
  });
  verifierFinVerset();
  writeFileSync(fichier, resultat);
  console.log(`sourate ${sourate} : grammaire régénérée`);
}

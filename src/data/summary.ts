import type { Verset, NomSourate, Langue } from "@/conf/types";
import { versets as versetsSourate1 } from "./sourates/sourate_001";
import { versets as versetsSourate111 } from "./sourates/sourate_111";
import { versets as versetsSourate112 } from "./sourates/sourate_112";
import { versets as versetsSourate113 } from "./sourates/sourate_113";
import { versets as versetsSourate114 } from "./sourates/sourate_114";

export type { Mot, Verset, Langue, NomSourate } from "@/conf/types";

export type Sourate = {
  id: number;
  slug: string;
  nom: NomSourate;
  disponible: boolean;
};

export const sourates: Sourate[] = [
  { id: 1, slug: "al-fatiha", nom: { arabe: "الفاتحة", transliteration: "Al-Fatiha", sens: { fr: "L'Ouverture", en: "The Opening", es: "La Apertura" } }, disponible: true },
  { id: 114, slug: "an-nas", nom: { arabe: "الناس", transliteration: "An-Nas", sens: { fr: "Les Hommes", en: "Mankind", es: "Los Hombres" } }, disponible: true },
  { id: 113, slug: "al-falaq", nom: { arabe: "الفلق", transliteration: "Al-Falaq", sens: { fr: "L'Aube naissante", en: "The Daybreak", es: "El Amanecer" } }, disponible: true },
  { id: 112, slug: "al-ikhlas", nom: { arabe: "الإخلاص", transliteration: "Al-Ikhlas", sens: { fr: "Le Monothéisme pur", en: "The Sincerity", es: "La Sinceridad" } }, disponible: true },
  { id: 111, slug: "al-masad", nom: { arabe: "المسد", transliteration: "Al-Masad", sens: { fr: "Les Fibres", en: "The Palm Fiber", es: "Las Fibras" } }, disponible: true },
  { id: 110, slug: "an-nasr", nom: { arabe: "النصر", transliteration: "An-Nasr", sens: { fr: "Le Secours", en: "The Divine Support", es: "El Auxilio" } }, disponible: false },
  { id: 109, slug: "al-kafirun", nom: { arabe: "الكافرون", transliteration: "Al-Kafirun", sens: { fr: "Les Infidèles", en: "The Disbelievers", es: "Los Incrédulos" } }, disponible: false },
  { id: 108, slug: "al-kawthar", nom: { arabe: "الكوثر", transliteration: "Al-Kawthar", sens: { fr: "L'Abondance", en: "The Abundance", es: "La Abundancia" } }, disponible: false },
  { id: 107, slug: "al-maun", nom: { arabe: "الماعون", transliteration: "Al-Ma'un", sens: { fr: "L'Ustensile", en: "The Small Kindnesses", es: "La Ayuda" } }, disponible: false },
  { id: 106, slug: "quraysh", nom: { arabe: "قريش", transliteration: "Quraysh" }, disponible: false },
  { id: 105, slug: "al-fil", nom: { arabe: "الفيل", transliteration: "Al-Fil", sens: { fr: "L'Éléphant", en: "The Elephant", es: "El Elefante" } }, disponible: false },
  { id: 104, slug: "al-humaza", nom: { arabe: "الهمزة", transliteration: "Al-Humaza", sens: { fr: "Les Calomniateurs", en: "The Traducer", es: "El Difamador" } }, disponible: false },
  { id: 103, slug: "al-asr", nom: { arabe: "العصر", transliteration: "Al-Asr", sens: { fr: "Le Temps", en: "The Declining Day", es: "El Tiempo" } }, disponible: false },
  { id: 102, slug: "at-takathur", nom: { arabe: "التكاثر", transliteration: "At-Takathur", sens: { fr: "La Course aux richesses", en: "The Rivalry in World Increase", es: "El Afán de Lucro" } }, disponible: false },
  { id: 101, slug: "al-qaria", nom: { arabe: "القارعة", transliteration: "Al-Qari'a", sens: { fr: "Le Fracas", en: "The Calamity", es: "El Estrépito" } }, disponible: false },
  { id: 100, slug: "al-adiyat", nom: { arabe: "العاديات", transliteration: "Al-Adiyat", sens: { fr: "Les Coursiers", en: "The Courser", es: "Los Corceles" } }, disponible: false },
  { id: 99, slug: "az-zalzala", nom: { arabe: "الزلزلة", transliteration: "Az-Zalzala", sens: { fr: "La Secousse", en: "The Earthquake", es: "El Terremoto" } }, disponible: false },
  { id: 98, slug: "al-bayyina", nom: { arabe: "البينة", transliteration: "Al-Bayyina", sens: { fr: "La Preuve", en: "The Clear Proof", es: "La Prueba Clara" } }, disponible: false },
  { id: 97, slug: "al-qadr", nom: { arabe: "القدر", transliteration: "Al-Qadr", sens: { fr: "La Destinée", en: "The Power", es: "El Decreto" } }, disponible: false },
  { id: 96, slug: "al-alaq", nom: { arabe: "العلق", transliteration: "Al-Alaq", sens: { fr: "L'Adhérence", en: "The Clot", es: "El Coágulo" } }, disponible: false },
  { id: 95, slug: "at-tin", nom: { arabe: "التين", transliteration: "At-Tin", sens: { fr: "Le Figuier", en: "The Fig", es: "La Higuera" } }, disponible: false },
  { id: 94, slug: "ash-sharh", nom: { arabe: "الشرح", transliteration: "Ash-Sharh", sens: { fr: "L'Ouverture du cœur", en: "The Relief", es: "El Alivio" } }, disponible: false },
  { id: 93, slug: "ad-duha", nom: { arabe: "الضحى", transliteration: "Ad-Duha", sens: { fr: "Le Jour montant", en: "The Morning Hours", es: "La Mañana" } }, disponible: false },
  { id: 92, slug: "al-layl", nom: { arabe: "الليل", transliteration: "Al-Layl", sens: { fr: "La Nuit", en: "The Night", es: "La Noche" } }, disponible: false },
  { id: 91, slug: "ash-shams", nom: { arabe: "الشمس", transliteration: "Ash-Shams", sens: { fr: "Le Soleil", en: "The Sun", es: "El Sol" } }, disponible: false },
  { id: 90, slug: "al-balad", nom: { arabe: "البلد", transliteration: "Al-Balad", sens: { fr: "La Cité", en: "The City", es: "La Ciudad" } }, disponible: false },
  { id: 89, slug: "al-fajr", nom: { arabe: "الفجر", transliteration: "Al-Fajr", sens: { fr: "L'Aube", en: "The Dawn", es: "El Alba" } }, disponible: false },
  { id: 88, slug: "al-ghashiya", nom: { arabe: "الغاشية", transliteration: "Al-Ghashiya", sens: { fr: "L'Enveloppante", en: "The Overwhelming", es: "La Que Envuelve" } }, disponible: false },
  { id: 87, slug: "al-ala", nom: { arabe: "الأعلى", transliteration: "Al-A'la", sens: { fr: "Le Très-Haut", en: "The Most High", es: "El Altísimo" } }, disponible: false },
  { id: 86, slug: "at-tariq", nom: { arabe: "الطارق", transliteration: "At-Tariq", sens: { fr: "L'Astre nocturne", en: "The Nightcomer", es: "El Astro Nocturno" } }, disponible: false },
  { id: 85, slug: "al-buruj", nom: { arabe: "البروج", transliteration: "Al-Buruj", sens: { fr: "Les Constellations", en: "The Mansions of the Stars", es: "Las Constelaciones" } }, disponible: false },
  { id: 84, slug: "al-inshiqaq", nom: { arabe: "الإنشقاق", transliteration: "Al-Inshiqaq", sens: { fr: "La Déchirure", en: "The Splitting Open", es: "El Desgarramiento" } }, disponible: false },
  { id: 83, slug: "al-mutaffifin", nom: { arabe: "المطففين", transliteration: "Al-Mutaffifin", sens: { fr: "Les Fraudeurs", en: "The Defrauding", es: "Los Defraudadores" } }, disponible: false },
  { id: 82, slug: "al-infitar", nom: { arabe: "الإنفطار", transliteration: "Al-Infitar", sens: { fr: "La Rupture", en: "The Cleaving", es: "La Hendidura" } }, disponible: false },
  { id: 81, slug: "at-takwir", nom: { arabe: "التكوير", transliteration: "At-Takwir", sens: { fr: "L'Obscurcissement", en: "The Overthrowing", es: "El Oscurecimiento" } }, disponible: false },
  { id: 80, slug: "abasa", nom: { arabe: "عبس", transliteration: "Abasa", sens: { fr: "Il s'est renfrogné", en: "He Frowned", es: "Frunció el Ceño" } }, disponible: false },
  { id: 79, slug: "an-naziat", nom: { arabe: "النازعات", transliteration: "An-Nazi'at", sens: { fr: "Les Anges qui arrachent les âmes", en: "Those Who Drag Forth", es: "Los Que Arrancan" } }, disponible: false },
  { id: 78, slug: "an-naba", nom: { arabe: "النبإ", transliteration: "An-Naba", sens: { fr: "La Nouvelle", en: "The Tidings", es: "La Noticia" } }, disponible: false },
  { id: 77, slug: "al-mursalat", nom: { arabe: "المرسلات", transliteration: "Al-Mursalat", sens: { fr: "Les Envoyés", en: "Those Sent Forth", es: "Los Enviados" } }, disponible: false },
  { id: 76, slug: "al-insan", nom: { arabe: "الانسان", transliteration: "Al-Insan", sens: { fr: "L'Homme", en: "The Man", es: "El Hombre" } }, disponible: false },
  { id: 75, slug: "al-qiyama", nom: { arabe: "القيامة", transliteration: "Al-Qiyama", sens: { fr: "La Résurrection", en: "The Resurrection", es: "La Resurrección" } }, disponible: false },
  { id: 74, slug: "al-muddaththir", nom: { arabe: "المدثر", transliteration: "Al-Muddaththir", sens: { fr: "Le Revêtu d'un manteau", en: "The Cloaked One", es: "El Arropado en un Manto" } }, disponible: false },
  { id: 73, slug: "al-muzzammil", nom: { arabe: "المزمل", transliteration: "Al-Muzzammil", sens: { fr: "L'Enveloppé", en: "The Enshrouded One", es: "El Envuelto" } }, disponible: false },
  { id: 72, slug: "al-jinn", nom: { arabe: "الجن", transliteration: "Al-Jinn", sens: { fr: "Les Djinns", en: "The Jinn", es: "Los Genios" } }, disponible: false },
  { id: 71, slug: "nuh", nom: { arabe: "نوح", transliteration: "Nuh", sens: { fr: "Noé", en: "Noah", es: "Noé" } }, disponible: false },
  { id: 70, slug: "al-maarij", nom: { arabe: "المعارج", transliteration: "Al-Ma'arij", sens: { fr: "Les Voies d'ascension", en: "The Ascending Stairways", es: "Las Vías de Ascensión" } }, disponible: false },
  { id: 69, slug: "al-haqqa", nom: { arabe: "الحاقة", transliteration: "Al-Haqqa", sens: { fr: "Celle qui montre la vérité", en: "The Reality", es: "La Verdad Manifiesta" } }, disponible: false },
  { id: 68, slug: "al-qalam", nom: { arabe: "القلم", transliteration: "Al-Qalam", sens: { fr: "La Plume", en: "The Pen", es: "La Pluma" } }, disponible: false },
  { id: 67, slug: "al-mulk", nom: { arabe: "الملك", transliteration: "Al-Mulk", sens: { fr: "La Royauté", en: "The Sovereignty", es: "La Soberanía" } }, disponible: false },
  { id: 66, slug: "at-tahrim", nom: { arabe: "التحريم", transliteration: "At-Tahrim", sens: { fr: "L'Interdiction", en: "The Prohibition", es: "La Prohibición" } }, disponible: false },
  { id: 65, slug: "at-talaq", nom: { arabe: "الطلاق", transliteration: "At-Talaq", sens: { fr: "Le Divorce", en: "The Divorce", es: "El Divorcio" } }, disponible: false },
  { id: 64, slug: "at-taghabun", nom: { arabe: "التغابن", transliteration: "At-Taghabun", sens: { fr: "La Grande Perte", en: "The Mutual Disillusion", es: "El Desengaño Mutuo" } }, disponible: false },
  { id: 63, slug: "al-munafiqun", nom: { arabe: "المنافقون", transliteration: "Al-Munafiqun", sens: { fr: "Les Hypocrites", en: "The Hypocrites", es: "Los Hipócritas" } }, disponible: false },
  { id: 62, slug: "al-jumua", nom: { arabe: "الجمعة", transliteration: "Al-Jumu'a", sens: { fr: "Le Vendredi", en: "Friday", es: "El Viernes" } }, disponible: false },
  { id: 61, slug: "as-saff", nom: { arabe: "الصف", transliteration: "As-Saff", sens: { fr: "Le Rang", en: "The Ranks", es: "La Fila" } }, disponible: false },
  { id: 60, slug: "al-mumtahana", nom: { arabe: "الممتحنة", transliteration: "Al-Mumtahana", sens: { fr: "L'Éprouvée", en: "She That Is To Be Examined", es: "La Examinada" } }, disponible: false },
  { id: 59, slug: "al-hashr", nom: { arabe: "الحشر", transliteration: "Al-Hashr", sens: { fr: "L'Exode", en: "The Exile", es: "El Destierro" } }, disponible: false },
  { id: 58, slug: "al-mujadila", nom: { arabe: "المجادلة", transliteration: "Al-Mujadila", sens: { fr: "La Discussion", en: "The Pleading Woman", es: "La Discusión" } }, disponible: false },
  { id: 57, slug: "al-hadid", nom: { arabe: "الحديد", transliteration: "Al-Hadid", sens: { fr: "Le Fer", en: "The Iron", es: "El Hierro" } }, disponible: false },
  { id: 56, slug: "al-waqia", nom: { arabe: "الواقعة", transliteration: "Al-Waqi'a", sens: { fr: "L'Événement", en: "The Inevitable", es: "El Suceso" } }, disponible: false },
  { id: 55, slug: "ar-rahman", nom: { arabe: "الرحمن", transliteration: "Ar-Rahman", sens: { fr: "Le Tout Miséricordieux", en: "The Most Merciful", es: "El Clemente" } }, disponible: false },
  { id: 54, slug: "al-qamar", nom: { arabe: "القمر", transliteration: "Al-Qamar", sens: { fr: "La Lune", en: "The Moon", es: "La Luna" } }, disponible: false },
  { id: 53, slug: "an-najm", nom: { arabe: "النجم", transliteration: "An-Najm", sens: { fr: "L'Étoile", en: "The Star", es: "La Estrella" } }, disponible: false },
  { id: 52, slug: "at-tur", nom: { arabe: "الطور", transliteration: "At-Tur", sens: { fr: "Le Mont", en: "The Mount", es: "El Monte" } }, disponible: false },
  { id: 51, slug: "adh-dhariyat", nom: { arabe: "الذاريات", transliteration: "Adh-Dhariyat", sens: { fr: "Qui éparpillent", en: "The Winnowing Winds", es: "Los Que Esparcen" } }, disponible: false },
  { id: 50, slug: "qaf", nom: { arabe: "ق", transliteration: "Qaf" }, disponible: false },
  { id: 49, slug: "al-hujurat", nom: { arabe: "الحجرات", transliteration: "Al-Hujurat", sens: { fr: "Les Appartements", en: "The Rooms", es: "Las Habitaciones" } }, disponible: false },
  { id: 48, slug: "al-fath", nom: { arabe: "الفتح", transliteration: "Al-Fath", sens: { fr: "La Victoire éclatante", en: "The Victory", es: "La Victoria" } }, disponible: false },
  { id: 47, slug: "muhammad", nom: { arabe: "محمد", transliteration: "Muhammad" }, disponible: false },
  { id: 46, slug: "al-ahqaf", nom: { arabe: "الأحقاف", transliteration: "Al-Ahqaf" }, disponible: false },
  { id: 45, slug: "al-jathiya", nom: { arabe: "الجاثية", transliteration: "Al-Jathiya", sens: { fr: "L'Agenouillée", en: "The Crouching", es: "La Arrodillada" } }, disponible: false },
  { id: 44, slug: "ad-dukhan", nom: { arabe: "الدخان", transliteration: "Ad-Dukhan", sens: { fr: "La Fumée", en: "The Smoke", es: "El Humo" } }, disponible: false },
  { id: 43, slug: "az-zukhruf", nom: { arabe: "الزخرف", transliteration: "Az-Zukhruf", sens: { fr: "L'Ornement", en: "The Ornaments of Gold", es: "El Adorno" } }, disponible: false },
  { id: 42, slug: "ash-shura", nom: { arabe: "الشورى", transliteration: "Ash-Shura", sens: { fr: "La Consultation", en: "The Consultation", es: "La Consulta" } }, disponible: false },
  { id: 41, slug: "fussilat", nom: { arabe: "فصلت", transliteration: "Fussilat", sens: { fr: "Les Versets détaillés", en: "Explained in Detail", es: "Los Versículos Detallados" } }, disponible: false },
  { id: 40, slug: "ghafir", nom: { arabe: "غافر", transliteration: "Ghafir", sens: { fr: "Le Pardonneur", en: "The Forgiver", es: "El Perdonador" } }, disponible: false },
  { id: 39, slug: "az-zumar", nom: { arabe: "الزمر", transliteration: "Az-Zumar", sens: { fr: "Les Groupes", en: "The Troops", es: "Los Grupos" } }, disponible: false },
  { id: 38, slug: "sad", nom: { arabe: "ص", transliteration: "Sad" }, disponible: false },
  { id: 37, slug: "as-saffat", nom: { arabe: "الصافات", transliteration: "As-Saffat", sens: { fr: "Les Rangés", en: "Those Ranged in Ranks", es: "Los Puestos en Filas" } }, disponible: false },
  { id: 36, slug: "ya-sin", nom: { arabe: "يس", transliteration: "Ya-Sin" }, disponible: false },
  { id: 35, slug: "fatir", nom: { arabe: "فاطر", transliteration: "Fatir", sens: { fr: "Le Créateur", en: "The Originator", es: "El Creador" } }, disponible: false },
  { id: 34, slug: "saba", nom: { arabe: "سبإ", transliteration: "Saba" }, disponible: false },
  { id: 33, slug: "al-ahzab", nom: { arabe: "الأحزاب", transliteration: "Al-Ahzab", sens: { fr: "Les Coalisés", en: "The Combined Forces", es: "Los Coaligados" } }, disponible: false },
  { id: 32, slug: "as-sajda", nom: { arabe: "السجدة", transliteration: "As-Sajda", sens: { fr: "La Prosternation", en: "The Prostration", es: "La Prosternación" } }, disponible: false },
  { id: 31, slug: "luqman", nom: { arabe: "لقمان", transliteration: "Luqman" }, disponible: false },
  { id: 30, slug: "ar-rum", nom: { arabe: "الروم", transliteration: "Ar-Rum", sens: { fr: "Les Romains", en: "The Romans", es: "Los Romanos" } }, disponible: false },
  { id: 29, slug: "al-ankabut", nom: { arabe: "العنكبوت", transliteration: "Al-Ankabut", sens: { fr: "L'Araignée", en: "The Spider", es: "La Araña" } }, disponible: false },
  { id: 28, slug: "al-qasas", nom: { arabe: "القصص", transliteration: "Al-Qasas", sens: { fr: "Le Récit", en: "The Story", es: "El Relato" } }, disponible: false },
  { id: 27, slug: "an-naml", nom: { arabe: "النمل", transliteration: "An-Naml", sens: { fr: "Les Fourmis", en: "The Ants", es: "Las Hormigas" } }, disponible: false },
  { id: 26, slug: "ash-shuara", nom: { arabe: "الشعراء", transliteration: "Ash-Shu'ara", sens: { fr: "Les Poètes", en: "The Poets", es: "Los Poetas" } }, disponible: false },
  { id: 25, slug: "al-furqan", nom: { arabe: "الفرقان", transliteration: "Al-Furqan", sens: { fr: "Le Discernement", en: "The Criterion", es: "El Criterio" } }, disponible: false },
  { id: 24, slug: "an-nur", nom: { arabe: "النور", transliteration: "An-Nur", sens: { fr: "La Lumière", en: "The Light", es: "La Luz" } }, disponible: false },
  { id: 23, slug: "al-muminun", nom: { arabe: "المؤمنون", transliteration: "Al-Mu'minun", sens: { fr: "Les Croyants", en: "The Believers", es: "Los Creyentes" } }, disponible: false },
  { id: 22, slug: "al-hajj", nom: { arabe: "الحج", transliteration: "Al-Hajj", sens: { fr: "Le Pèlerinage", en: "The Pilgrimage", es: "La Peregrinación" } }, disponible: false },
  { id: 21, slug: "al-anbiya", nom: { arabe: "الأنبياء", transliteration: "Al-Anbiya", sens: { fr: "Les Prophètes", en: "The Prophets", es: "Los Profetas" } }, disponible: false },
  { id: 20, slug: "ta-ha", nom: { arabe: "طه", transliteration: "Ta-Ha" }, disponible: false },
  { id: 19, slug: "maryam", nom: { arabe: "مريم", transliteration: "Maryam", sens: { fr: "Marie", en: "Mary", es: "María" } }, disponible: false },
  { id: 18, slug: "al-kahf", nom: { arabe: "الكهف", transliteration: "Al-Kahf", sens: { fr: "La Caverne", en: "The Cave", es: "La Caverna" } }, disponible: false },
  { id: 17, slug: "al-isra", nom: { arabe: "الإسراء", transliteration: "Al-Isra", sens: { fr: "Le Voyage nocturne", en: "The Night Journey", es: "El Viaje Nocturno" } }, disponible: false },
  { id: 16, slug: "an-nahl", nom: { arabe: "النحل", transliteration: "An-Nahl", sens: { fr: "Les Abeilles", en: "The Bee", es: "Las Abejas" } }, disponible: false },
  { id: 15, slug: "al-hijr", nom: { arabe: "الحجر", transliteration: "Al-Hijr" }, disponible: false },
  { id: 14, slug: "ibrahim", nom: { arabe: "ابراهيم", transliteration: "Ibrahim", sens: { fr: "Abraham", en: "Abraham", es: "Abraham" } }, disponible: false },
  { id: 13, slug: "ar-rad", nom: { arabe: "الرعد", transliteration: "Ar-Ra'd", sens: { fr: "Le Tonnerre", en: "The Thunder", es: "El Trueno" } }, disponible: false },
  { id: 12, slug: "yusuf", nom: { arabe: "يوسف", transliteration: "Yusuf", sens: { fr: "Joseph", en: "Joseph", es: "José" } }, disponible: false },
  { id: 11, slug: "hud", nom: { arabe: "هود", transliteration: "Hud" }, disponible: false },
  { id: 10, slug: "yunus", nom: { arabe: "يونس", transliteration: "Yunus", sens: { fr: "Jonas", en: "Jonah", es: "Jonás" } }, disponible: false },
  { id: 9, slug: "at-tawba", nom: { arabe: "التوبة", transliteration: "At-Tawba", sens: { fr: "Le Repentir", en: "The Repentance", es: "El Arrepentimiento" } }, disponible: false },
  { id: 8, slug: "al-anfal", nom: { arabe: "الأنفال", transliteration: "Al-Anfal", sens: { fr: "Le Butin", en: "The Spoils of War", es: "El Botín" } }, disponible: false },
  { id: 7, slug: "al-araf", nom: { arabe: "الأعراف", transliteration: "Al-A'raf", sens: { fr: "Les Murailles", en: "The Heights", es: "Las Alturas" } }, disponible: false },
  { id: 6, slug: "al-anam", nom: { arabe: "الأنعام", transliteration: "Al-An'am", sens: { fr: "Les Bestiaux", en: "The Cattle", es: "El Ganado" } }, disponible: false },
  { id: 5, slug: "al-maida", nom: { arabe: "المائدة", transliteration: "Al-Ma'ida", sens: { fr: "La Table servie", en: "The Table Spread", es: "La Mesa Servida" } }, disponible: false },
  { id: 4, slug: "an-nisa", nom: { arabe: "النساء", transliteration: "An-Nisa", sens: { fr: "Les Femmes", en: "The Women", es: "Las Mujeres" } }, disponible: false },
  { id: 3, slug: "al-imran", nom: { arabe: "آل عمران", transliteration: "Al-Imran", sens: { fr: "La Famille d'Imran", en: "The Family of Imran", es: "La Familia de Imran" } }, disponible: false },
  { id: 2, slug: "al-baqara", nom: { arabe: "البقرة", transliteration: "Al-Baqara", sens: { fr: "La Vache", en: "The Cow", es: "La Vaca" } }, disponible: false },
];

export function padId(id: number): string {
  return String(id).padStart(3, "0");
}

export function titreSourate(sourate: Sourate, langue: Langue = "fr"): string {
  const { transliteration, sens } = sourate.nom;
  return sens ? `${transliteration} (${sens[langue]})` : transliteration;
}

const versetsParId: Record<number, Verset[]> = {
  1: versetsSourate1,
  111: versetsSourate111,
  112: versetsSourate112,
  113: versetsSourate113,
  114: versetsSourate114,
};

export function getVersets(id: number): Verset[] {
  return versetsParId[id] ?? [];
}

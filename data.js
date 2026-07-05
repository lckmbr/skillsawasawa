/* =========================================================================
   SKILL SAWASAWA — shared content data
   Edit these arrays to update the site. Text fields that visitors read use
   { en, fr } pairs so the bilingual toggle (see i18n.js) can render either.
   No HTML changes are needed to update content.
   ========================================================================= */

/* -------------------------------------------------------------------------
   GALLERY
   Each object: { src, caption: { en, fr } }
   REPLACE every src below with real photos (performances, studio sessions,
   instruments, festival work, film sets, portraits...).
   Placeholder images are served from picsum.photos so the layout can be
   previewed before real assets are ready — swap them out before launch.
   ------------------------------------------------------------------------- */
const GALLERY_IMAGES = [
  {
    src: "../images/traditional board_1.jpg",
    caption: {
      en: "Studio session, Goma — mixing VITAR",
      fr: "Session studio, Goma — mixage de VITAR",
    },
  },
  {
    src: "../images/playing guitar and singing.jpg",
    caption: {
      en: "Live performance at a Local gathering",
      fr: "Performance live a une Rencontre locale",
    },
  },
  {
    src: "../images/recording station at refugee camp.jpg",
    caption: {
      en: "Field recording, Eastern DRC",
      fr: "Enregistrement de terrain, Est de la RDC",
    },
  }, // REPLACE
  {
    src: "../images/with traditional instrument.jpg",
    caption: {
      en: "Traditional instrument detail",
      fr: "Détail d'un instrument traditionnel",
    },
  },
  {
    src: "../images/close shot of a guitar.jpeg",
    caption: {
      en: "Portrait, Institut Français session",
      fr: "Portrait, session à l'Institut Français",
    },
  },
  {
    src: "../images/sawasawa holding recorder in air.jpg",
    caption: {
      en: "Community rehearsal, MUSIC FUND",
      fr: "Répétition communautaire, MUSIC FUND",
    },
  },
  {
    src: "../images/in studio looking at local instrument.jpg",
    caption: { en: "AFRISCENE workshop, Goma", fr: "Atelier AFRISCENE, Goma" },
  },
];

/* How many gallery items are revealed at first, and per "Load more" click. */
const GALLERY_INITIAL_COUNT = 6;
const GALLERY_LOAD_STEP = 3;

/* -------------------------------------------------------------------------
   RELEASES — Spotify cards
   Each object: { title, year, type: {en,fr}, note: {en,fr}, spotifyUri }
   spotifyUri accepts either:
     - a full Spotify URI, e.g. "spotify:album:XXXXXXXXXXXXXXXXXXXXXX"
     - or a share-link ID, e.g. "album/XXXXXXXXXXXXXXXXXXXXXX"
   Add new releases here over time — the section renders automatically.
   ------------------------------------------------------------------------- */
const RELEASES = [
  {
    title: "VITAR",
    year: "2025",
    type: { en: "Album", fr: "Album" },
    note: {
      en: "A resilient and hopeful work I built from recordings captured amid the war in Goma.",
      fr: "Une œuvre résiliente et pleine d'espoir, née d'enregistrements captés au cœur de la guerre à Goma.",
    },
    spotifyUri: "album/4nmKCVXcFD9M8MCjagIcsh", // REPLACE
  },
  {
    title: "KUMBE",
    year: "2025",
    type: { en: "Single", fr: "Single" },
    note: {
      en: "This song is a reminder to hold on, keep believing, and never lose hope.",
      fr: "Cette chanson est un rappel de tenir bon, de continuer à croire et de ne jamais perdre espoir.",
    },
    spotifyUri: "track/5U8QsUdePWgeI2OPZ613FN", // REPLACE
  },
  // Add future releases here, e.g.:
  // { title: "New Single", year: "2026", type: {en:"Single",fr:"Single"}, note: {en:"…",fr:"…"}, spotifyUri: "track/REPLACE_ID" },
];

/* -------------------------------------------------------------------------
   CAREER TIMELINE — "The Journey"
   Each object: { year, title: {en,fr}, description: {en,fr}, tags: [{en,fr}] }
   ------------------------------------------------------------------------- */
const TIMELINE = [
  {
    year: "2018 — 2024",
    title: {
      en: "Participating in the region's sound-engineering foundation",
      fr: "Contribuer aux fondations de l'ingénierie du son dans la région",
    },
    description: {
      en: "I contributed to sound engineering at the AMANI Festival, and worked with MUSIC FUND, AFRISCENE, and the Institut Français on sound-engineering training sessions in Goma and Bukavu.",
      fr: "J'ai contribué à l'ingénierie du son au Festival AMANI, et collaboré avec MUSIC FUND, AFRISCENE et l'Institut Français lors de sessions de formation en ingénierie du son à Goma et Bukavu.",
    },
    tags: [
      { en: "AMANI Festival", fr: "Festival AMANI" },
      { en: "MUSIC FUND", fr: "MUSIC FUND" },
      { en: "AFRISCENE", fr: "AFRISCENE" },
      { en: "Institut Français", fr: "Institut Français" },
    ],
  },
  {
    year: "2024",
    title: {
      en: "HORIZON — with Rogatien Milord",
      fr: "HORIZON — avec Rogatien Milord",
    },
    description: {
      en: "I took part in Rogatien Milord's major album project HORIZON, working alongside sound engineers from Europe, the United States, and Canada — including Djizzo Balume and KC Porter. The launch was covered by major media outlets including FRANCE 24, TV5 MONDE, VOA, RFI, CANAL+, and TRACE TV.",
      fr: "J'ai participé à HORIZON, le grand projet d'album de Rogatien Milord, aux côtés d'ingénieurs du son venus d'Europe, des États-Unis et du Canada — dont Djizzo Balume et KC Porter. Le lancement a été couvert par de grands médias tels que FRANCE 24, TV5 MONDE, VOA, RFI, CANAL+ et TRACE TV.",
    },
    tags: [
      { en: "HORIZON album", fr: "Album HORIZON" },
      { en: "International collaboration", fr: "Collaboration internationale" },
      {
        en: "FRANCE 24 · TV5 MONDE · VOA · RFI · CANAL+ · TRACE TV",
        fr: "FRANCE 24 · TV5 MONDE · VOA · RFI · CANAL+ · TRACE TV",
      },
    ],
  },
  {
    year: "2025",
    title: {
      en: "Scoring 'Trop c'est Trop'",
      fr: "Musique de « Trop c'est Trop »",
    },
    description: {
      en: "I handled sound design, mix, and sonic arrangement for the multiple international award-winning film by Elisé Sawasawa.",
      fr: "J'ai assuré le sound design, le mixage et l'arrangement sonore du film multi-primé à l'international d'Elisé Sawasawa.",
    },
    tags: [
      { en: "Film score", fr: "Musique de film" },
      { en: "Sound design", fr: "Sound design" },
      { en: "Mix", fr: "Mixage" },
    ],
  },
  {
    year: "2025",
    title: {
      en: "VITAR — the album",
      fr: "VITAR — l'album",
    },
    description: {
      en: "I released VITAR, a resilient and hopeful work created with recordings captured from the war in Goma.",
      fr: "J'ai sorti VITAR, une œuvre résiliente et pleine d'espoir, créée à partir d'enregistrements captés durant la guerre à Goma.",
    },
    tags: [
      { en: "Album release", fr: "Sortie d'album" },
      { en: "YiraFolk", fr: "YiraFolk" },
    ],
  },
];

/* -------------------------------------------------------------------------
   VIDEO INTERVIEW (YouTube)
   Replace VIDEO_ID with the real YouTube video ID
   (the part after "v=" in a youtube.com/watch?v=... URL).
   ------------------------------------------------------------------------- */
const INTERVIEW_VIDEO_ID = "gygSU9MCURU";

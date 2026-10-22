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
   SELECTED WORKS & FILM CREDITS
   Each object:
   { id, cover, title, subtitle: {en,fr}, description: {en,fr},
     links: [ { label: {en,fr}, url } ] }
   - cover: image path/URL, shown at 2:3 on the left (desktop)
   - title: plain string, since project titles usually aren't translated
     (turn it into {en, fr} and use title[lang] in the renderer if you need that)
   - links: add as many as you like, or [] for none
   ------------------------------------------------------------------------- */
const WORKS = [
  {
    id: "trop-cest-trop",
    cover: "/images/tropctrop.jpg",
    title: "Goma, Trop c'est Trop",
    subtitle: {
      en: "Original Music Composition",
      fr: "Composition musicale originale",
    },
    description: {
      en: "Skill Sawasawa contributed original music to Goma, Trop C'est Trop, a documentary project directed by Elisé Sawasawa. His musical work forms part of an audiovisual narrative connected to the lived realities of Goma.",
      fr: "Skill Sawasawa a composé la musique originale de Goma, Trop C’est Trop, un projet documentaire réalisé par Elisé Sawasawa. Son travail musical s’inscrit dans un récit audiovisuel ancré dans les réalités vécues à Goma.",
    },
    links: [
      {
        label: {
          en: "Discover the film on Cineuropa",
          fr: "Découvrez le film sur Cineuropa.",
        },
        url: "https://cineuropa.org/fr/film/488992/",
      },
      {
        label: {
          en: "Discover the film on Atlas Atelier",
          fr: "Découvrez le film sur Atlas Atelier",
        },
        url: "https://atlasateliers.marrakech-festival.com/fr/selection/2025/goma-enough-is-enough", // REPLACE
      },
      {
        label: {
          en: "Discover the film on CPH:DOX",
          fr: "En savoir plus sur le film sur CPH:DOX.",
        },
        url: "https://cphdox.dk/film/enough-is-enough/",
      },
    ],
  },
  {
    id: "kizazi",
    cover: "/images/Kizazi.png",
    title: "KIZAZI",
    subtitle: {
      en: "Original Music . Performing Arts",
      fr: "Musique originale · Arts du spectacle",
    },
    description: {
      en: "Skill Sawasawa is credited for original music for KIZAZI, a performing arts project that brings music and movement into dialogue.",
      fr: "Skill Sawasawa est crédité pour la musique originale de KIZAZI, un projet d’arts du spectacle qui fait dialoguer la musique et le mouvement.",
    },
    links: [
      {
        label: {
          en: "View the official project page",
          fr: "Consultez la page officielle du projet.",
        },
        url: "https://www.nadiabeugre.com/spectacles/kizazi",
      },
    ],
  },
  {
    id: "kimart",
    cover: "/images/africart.png",
    title: "KIM'ART SOUND",
    subtitle: {
      en: "Sound Research . African Sonic Identity",
      fr: "Recherche sonore · Identité sonore africaine",
    },
    description: {
      en: "Through sound research and creative exploration, Skill Sawasawa investigates the expressive potential of African sound and cultural heritage. His work seeks to connect traditional sonic identities with contemporary artistic practices.",
      fr: "À travers la recherche sonore et l’exploration créative, Skill Sawasawa explore le potentiel expressif des sonorités africaines et du patrimoine culturel. Son travail cherche à faire dialoguer les identités sonores traditionnelles avec les pratiques artistiques contemporaines.",
    },
    links: [
      {
        label: {
          en: "Discover KIM'ART SOUND - Africart Progress",
          fr: "Découvrez KIM’ART SOUND – Africart Progress",
        },
        url: "https://africartprogress.com/projets/kimart-sound/",
      },
    ],
  },
];

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
  {
    year: "2024",
    title: {
      en: "HORIZON — with Rogatien Milord",
      fr: "HORIZON — avec Rogatien Milord",
    },
    description: {
      en: "I took part in Rogatien Milord's major album project HORIZON, working alongside sound engineers from Europe, USA, and Canada — including Djizzo Balume and KC Porter. Its launch was covered by major media outlets including FRANCE 24, TV5 MONDE, VOA, RFI, CANAL+, and TRACE TV.",
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
];

/* -------------------------------------------------------------------------
   VIDEO INTERVIEW (YouTube)
   Replace VIDEO_ID with the real YouTube video ID
   (the part after "v=" in a youtube.com/watch?v=... URL).
   ------------------------------------------------------------------------- */
const INTERVIEW_VIDEO_ID = "gygSU9MCURU";
const FIELD_CLIPS = [
  {
    id: "0",
    tags: [
      {
        en: "conservation",
        fr: "conservation",
      },
      {
        en: "archive",
        fr: "archive",
      },
      {
        en: "culture",
        fr: "culture",
      },
      {
        en: "kivu",
        fr: "kivu",
      },
    ],
    description: {
      en: "recording Pygmees of the DRC North Kivu region",
      fr: "Enregistrement des Pygmées de la région du Nord-Kivu, en RDC",
    },
    platform: "instagram",
    url: "https://www.instagram.com/reel/DHOSO_rIS_B/?utm_source=ig_embed&amp;utm_campaign=loading",
    thumbnail: "",
  },
  {
    id: "1",
    tags: [
      {
        en: "culture ",
        fr: "culture ",
      },
      {
        en: "afrosound ",
        fr: "afrosound ",
      },
      {
        en: "africa ",
        fr: "africa ",
      },
    ],
    description: {
      en: "somewhere deep in Africa, in search of original sounds",
      fr: "somewhere deep in Africa, in search of original sounds",
    },
    platform: "instagram",
    url: "https://www.instagram.com/p/DH0TpMkOKFd/?img_index=1",
    thumbnail: "",
  },
  {
    id: "2",
    tags: [
      {
        en: "culture ",
        fr: "culture ",
      },
      {
        en: "afrosound ",
        fr: "afrosound ",
      },
      {
        en: "heritage",
        fr: "héritage",
      },
    ],
    description: {
      en: "rehearsing for a project with traditional african instruments.",
      fr: "répétition pour un projet avec des instruments traditionnels africains.",
    },
    platform: "instagram",
    url: "https://www.instagram.com/reel/DSecesKCCxS/",
    thumbnail: "",
  },
];

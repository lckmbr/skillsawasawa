/* =========================================================================
   SKILL SAWASAWA — bilingual engine (EN / FR)
   - I18N holds all static copy, keyed by a dot-path used in data-i18n attrs.
   - Dynamic content (timeline, releases, gallery captions) lives in data.js
     as { en, fr } pairs and is rendered by script.js / gallery.js, which
     re-render whenever the language changes.
   Edit copy here — no other file needs to change.
   ========================================================================= */

const I18N = {
  en: {
    "nav.home": "Home",
    "nav.journey": "Journey",
    "nav.releases": "Releases",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",

    "hero.eyebrow": "Composer &middot; Musician &middot; Creator of YiraFolk",
    "hero.title":
      "I write music the way<br /><em>my region tells stories.</em>",
    "hero.tagline":
      "I'm Skill Sawasawa. I carry the traditional sound of Eastern DRC into a contemporary language for film and documentary.",
    "hero.scroll": "Scroll",

    "about.eyebrow": "About",
    "about.p1":
      "I'm a composer and musician, and the creator of YiraFolk — an original musical style that blends the traditional sounds of Eastern Democratic Republic of the Congo with a contemporary, cinematic approach.",
    "about.p2":
      "My practice celebrates African musical heritage, carrying folk instruments and ancestral rhythms into modern composition. Inspired by nature, storytelling, and the richness of African traditions, I create immersive music for film, documentaries, and creative projects — building a bridge between Africa's cultural legacy and today's global sound.",
    "about.stat1.value": "2018",
    "about.stat1.label": "Work begins",
    "about.stat2.value": "3",
    "about.stat2.label": "Partner institutions",
    "about.stat3.value": "2",
    "about.stat3.label": "2025 releases",

    "journey.eyebrow": "The Journey",
    "journey.title": "The years behind the work.",
    "journey.intro":
      "My journey interweaves Goma, Bukavu, Kampala, Nairobi, and Rwanda, culminating in internationally recognized film music and an album of resilience born in the heart of war.",
    "journey.note":
      "Beyond these projects, I've worked on several sound projects — films, documentaries, music, commercials, and more — and taken part in introductory training courses on audio production software in Rwanda, Uganda, and Kenya.",

    "releases.eyebrow": "Releases",
    "releases.title": "Listen.",
    "releases.intro":
      "Listen below — I'll keep adding new releases here over time.",

    "video.title": "In conversation",
    "video.desc": "On my City, sound as memory, and Studio production",
    "video.cta": "Watch on YouTube",

    "footer.heading": "Let's build<br />something together.",
    "footer.cta": "Get in touch",
    "footer.tagline": "YiraFolk — Eastern DRC, reimagined.",

    "galleryhero.eyebrow": "Gallery",
    "galleryhero.title": "Field, stage,<br />and studio.",
    "galleryhero.desc":
      "Moments from Remote areas , film sets, and festival works.",
    "gallery.loadmore": "Load more",
    "gallery.empty": "That's the full gallery — check back for more.",

    "contacthero.eyebrow": "Contact",
    "contacthero.title": "Get in touch.",
    "contacthero.desc":
      "For bookings, film scoring, licensing, or press — reach out directly or send me a message below.",
    "contact.sayhello": "Say hello.",
    "contact.intro":
      "I'm based in Eastern DRC, working with film, documentary, and creative projects worldwide.",
    "contact.label.email": "Email",
    "contact.label.booking": "Booking &amp; press",
    "contact.label.based": "Based in",
    "contact.based.value":
      "Goma, North Kivu — Democratic Republic of the Congo",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.subject.placeholder": "Booking, licensing, press…",
    "contact.form.message": "Message",
    "contact.form.submit": "Send message",
    "contact.form.status":
      "Thanks — this form isn't connected yet. Replace contact.js with a real endpoint.",
  },

  fr: {
    "nav.home": "Accueil",
    "nav.journey": "Parcours",
    "nav.releases": "Sorties",
    "nav.gallery": "Galerie",
    "nav.contact": "Contact",

    "hero.eyebrow":
      "Compositeur &middot; Musicien &middot; Créateur du YiraFolk",
    "hero.title":
      "J’écris la musique comme<br/><em> ma région raconte ses histoires</em>",
    "hero.tagline":
      "Je suis Skill Sawasawa. À travers le YiraFolk, je porte le son traditionnel de l'Est de la RDC vers un langage cinématographique et contemporain, pour le cinéma et le documentaire.",
    "hero.scroll": "Défiler",

    "about.eyebrow": "À propos",
    "about.p1":
      "Je suis compositeur et musicien, créateur du YiraFolk — un style musical original qui allie les sons traditionnels de l'Est de la République démocratique du Congo à une approche contemporaine et cinématographique.",
    "about.p2":
      "Ma pratique célèbre le patrimoine musical africain, en portant instruments traditionnels et rythmes ancestraux vers la composition moderne. Inspiré par la nature, le récit et la richesse des traditions africaines, je crée une musique immersive pour le cinéma, le documentaire et des projets créatifs — un pont entre l'héritage culturel de l'Afrique et le son mondial d'aujourd'hui.",
    "about.stat1.value": "2018",
    "about.stat1.label": "Débuts",
    "about.stat2.value": "3",
    "about.stat2.label": "Institutions partenaires",
    "about.stat3.value": "2",
    "about.stat3.label": "Sorties en 2025",

    "journey.eyebrow": "Le Parcours",
    "journey.title": "Les années derrière le travail.",
    "journey.intro":
      "Mon parcours entrelace Goma, Bukavu, Kampala, Nairobi et le Rwanda, jusqu'à une musique de film reconnue à l'international et un album de résilience né au cœur de la guerre.",
    "journey.note":
      "Au-delà de ces projets, j'ai travaillé sur plusieurs projets sonores — films, documentaires, musique, publicités, et plus encore — et participé à des formations d'introduction aux logiciels de production audio au Rwanda, en Ouganda et au Kenya.",

    "releases.eyebrow": "Sorties",
    "releases.title": "Écouter.",
    "releases.intro":
      "Écoutez ci-dessous — j'ajouterai régulièrement de nouvelles sorties.",

    "video.title": "En conversation",
    "video.desc":
      "Sur le YiraFolk, le son comme mémoire, et la musique de « Trop c'est Trop ».",
    "video.cta": "Voir sur YouTube",

    "footer.heading": "Construisons<br />quelque chose ensemble.",
    "footer.cta": "Me contacter",
    "footer.tagline": "YiraFolk — l'Est de la RDC, réinventé.",

    "galleryhero.eyebrow": "Galerie",
    "galleryhero.title": "Studio, scène<br />et terrain.",
    "galleryhero.desc":
      "Instants de festivals, de tournages, et du son de l'Est de la RDC capté sur le terrain.",
    "gallery.loadmore": "Voir plus",
    "gallery.empty":
      "C'est toute la galerie — revenez bientôt pour en voir plus.",

    "contacthero.eyebrow": "Contact",
    "contacthero.title": "Me contacter.",
    "contacthero.desc":
      "Pour les réservations, la composition de musiques de film, les licences ou la presse — contactez-moi directement ou envoyez-moi un message ci-dessous.",
    "contact.sayhello": "Dites bonjour.",
    "contact.intro":
      "Je suis basé à l'Est de la RDC, et je travaille avec des projets de cinéma, documentaires et créatifs partout dans le monde.",
    "contact.label.email": "E-mail",
    "contact.label.booking": "Réservations &amp; presse",
    "contact.label.based": "Basé à",
    "contact.based.value": "Goma, Nord-Kivu — République démocratique du Congo",
    "contact.form.name": "Nom",
    "contact.form.email": "E-mail",
    "contact.form.subject": "Sujet",
    "contact.form.subject.placeholder": "Réservation, licence, presse…",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le message",
    "contact.form.status":
      "Merci — ce formulaire n'est pas encore connecté. Remplacez contact.js par un point de terminaison réel.",
  },
};

const LANG_STORAGE_KEY = "ss_lang";

function getLang() {
  return localStorage.getItem(LANG_STORAGE_KEY) || "en";
}

function setLang(lang) {
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  applyI18n(lang);
  document.dispatchEvent(
    new CustomEvent("languagechange", { detail: { lang } }),
  );
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
}

/* Initialise on every page load */
(function initI18n() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.addEventListener("DOMContentLoaded", () => {
    applyI18n(lang);
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.addEventListener("click", () =>
        setLang(btn.getAttribute("data-lang")),
      );
    });
  });
})();

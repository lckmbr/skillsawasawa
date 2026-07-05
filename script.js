/* =========================================================================
   SKILL SAWASAWA — shared behaviour
   Runs on every page. Page-specific logic lives in gallery.js / contact.js.
   Relies on getLang() from i18n.js and re-renders when language changes.
   ========================================================================= */

/* ---- Header: solid background after scroll --------------------------- */
(function headerScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () =>
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ---- Mobile nav toggle -------------------------------------------------- */
(function navToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links
    .querySelectorAll("a")
    .forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open")),
    );
})();

/* ---- Mark active nav link ---------------------------------------------- */
(function activeNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href").split("#")[0] || "index.html";
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
})();

/* ---- Timeline: render (bilingual) + reveal on scroll -------------------
   Purely additive — if TIMELINE data isn't present on a page, this no-ops. */
function renderTimeline() {
  const el = document.querySelector("[data-timeline]");
  if (!el || typeof TIMELINE === "undefined") return;
  const lang = typeof getLang === "function" ? getLang() : "en";

  el.innerHTML = TIMELINE.map(
    (item) => `
    <li class="timeline-item">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-body">
        <h3>${item.title[lang]}</h3>
        <p>${item.description[lang]}</p>
        <div class="timeline-tags">
          ${item.tags.map((t) => `<span>${t[lang]}</span>`).join("")}
        </div>
      </div>
    </li>`,
  ).join("");

  const items = el.querySelectorAll(".timeline-item");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );
  items.forEach((item) => io.observe(item));
}

/* ---- Releases: render Spotify embed cards (bilingual) -------------------
   Uses Spotify's public oEmbed iframe pattern:
   https://open.spotify.com/embed/{type}/{id}
   `spotifyUri` in data.js can be "album/ID", "track/ID", or a full
   "spotify:album:ID" URI — both are normalised below. */
function renderReleases() {
  const el = document.querySelector("[data-releases]");
  if (!el || typeof RELEASES === "undefined") return;
  const lang = typeof getLang === "function" ? getLang() : "en";

  const toEmbedPath = (uri) => {
    if (uri.startsWith("spotify:")) {
      const [, type, id] = uri.split(":");
      return `${type}/${id}`;
    }
    return uri; // already "album/ID" or "track/ID"
  };

  el.innerHTML = RELEASES.map(
    (r) => `
    <article class="release-card">
      <div class="release-meta">
        <h3>${r.title}</h3>
        <span class="release-year">${r.year} · ${r.type[lang]}</span>
      </div>
      <div class="spotify-embed-wrap">
        <iframe
          src="https://open.spotify.com/embed/${toEmbedPath(r.spotifyUri)}?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameborder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify player — ${r.title}">
        </iframe>
      </div>
      <p class="release-note">${r.note[lang]}</p>
    </article>`,
  ).join("");
}

/* ---- Video interview: YouTube autoplay, muted, 100vh -------------------
   Builds the embed URL from INTERVIEW_VIDEO_ID in data.js.
   autoplay=1 + mute=1 are required together for autoplay to work
   in modern browsers; playsinline keeps it inline on iOS.
   Rendered once — it doesn't depend on language. */
(function renderInterview() {
  const wrap = document.querySelector("[data-video]");
  if (!wrap || typeof INTERVIEW_VIDEO_ID === "undefined") return;

  const src =
    `https://www.youtube.com/embed/${INTERVIEW_VIDEO_ID}` +
    `?autoplay=1&mute=1&loop=1&playlist=${INTERVIEW_VIDEO_ID}` +
    `&controls=0&modestbranding=1&playsinline=1&rel=0`;

  wrap.innerHTML = `
    <iframe
      src="${src}"
      title="Skill Sawasawa — video interview"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen>
    </iframe>`;
})();

/* ---- Footer year -------------------------------------------------------- */
(function footerYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();

/* ---- Initial render + re-render on language toggle ---------------------- */
renderTimeline();
renderReleases();
document.addEventListener("languagechange", () => {
  renderTimeline();
  renderReleases();
});

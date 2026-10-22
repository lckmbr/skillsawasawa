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

function renderWorks() {
  const el = document.querySelector("[data-works]");
  if (!el || typeof WORKS === "undefined") return;
  const lang = typeof getLang === "function" ? getLang() : "en";

  el.innerHTML = WORKS.map(
    (w) => `
    <article class="work-card">
      <div class="work-cover">
        <img src="${w.cover}" alt="${w.title}" loading="lazy" />
      </div>
      <div class="work-body">
        <h3>${w.title}</h3>
        <p class="work-subtitle">${w.subtitle[lang]}</p>
        <p class="work-description">${w.description[lang]}</p>
        ${
          w.links && w.links.length
            ? `<ul class="work-links">
                ${w.links
                  .map(
                    (l) =>
                      `<li><a href="${l.url}" target="_blank" rel="noopener">${l.label[lang]}</a></li>`,
                  )
                  .join("")}
              </ul>`
            : ""
        }
      </div>
    </article>`,
  ).join("");
}

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
    `&controls=0&modestbranding=1&playsinline=1&rel=0` +
    `&enablejsapi=1&origin=${encodeURIComponent(location.origin)}`;

  wrap.innerHTML = `
    <iframe
      src="${src}"
      title="Skill Sawasawa — video interview"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen id="interview-frame">
    </iframe>`;
})();

const ICON_MUTED = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
  </svg>
  `;
const ICON_UNMUTED = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
  </svg>`;

(function configureVideoSoundControl() {
  const btn = document.querySelector("[data-video-sound]");
  const frame = document.getElementById("interview-frame");

  if (!btn || !frame) return;

  let muted = true;

  function sendCommand(func) {
    frame.contentWindow.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*",
    );
  }

  function updateLabel() {
    btn.innerHTML = muted ? ICON_MUTED : ICON_UNMUTED;
    btn.setAttribute("aria-pressed", String(!muted));
  }

  btn.addEventListener("click", () => {
    muted = !muted;
    sendCommand(muted ? "mute" : "unMute");
    updateLabel();
  });

  updateLabel();
})();

/* -------Field Clips--------------------------------------------*/

function buildClipCard(clip, lang) {
  const card = document.createElement("article");
  card.className = "clip-card";
  card.dataset.platform = clip.platform;
  card.dataset.clipId = clip.id;

  card.innerHTML = `
    <div class="clip-media" data-clip-media></div>
    <button class="clip-sound" type="button" data-clip-sound aria-label="Unmute video"></button>
    <div class="clip-overlay">
      <p class="clip-description">${clip.description[lang]}</p>
      <div class="clip-tags">
        ${clip.tags
          .map((t) => {
            return `<span>${t[lang]}</span>`;
          })
          .join(" ")}
      </div>
    </div>
  `;

  return card;
}

function renderFieldClips() {
  const grid = document.querySelector("[data-clips]");
  if (!grid || typeof FIELD_CLIPS === undefined) return;
  const lang = typeof getLang === "function" ? getLang() : "en";

  grid.innerHTML = ""; // clear before rebuilding (needed for language-change re-renders)
  FIELD_CLIPS.forEach((clip) => {
    const card = buildClipCard(clip, lang);
    grid.appendChild(card);
  });
}

function observeFieldClips() {
  const cards = document.querySelectorAll(".clip-card");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadClipEmbed(entry.target);
          io.unobserve(entry.target); //load only once
        }
      });
    },
    { threshold: 0.5 },
  );

  cards.forEach((card) => {
    io.observe(card);
  });
}

function loadClipEmbed(card) {
  const clipId = card.dataset.clipId;
  const clip = FIELD_CLIPS.find((c) => c.id === clipId);
  const mediaSlot = card.querySelector("[data-clip-media]");

  if (!clip || !mediaSlot) return;

  if (clip.platform === "youtube") {
    loadYoutubeClip(clip, mediaSlot, card);
  } else if (clip.platform === "instagram") {
    loadInstagramClip(clip, mediaSlot);
  } else if (clip.platform === "tiktok") {
    loadTikTokClip(clip, mediaSlot);
  }
}

function extractYouTubeId(reference) {
  // Handles: full watch URLs, share URLs, youtu.be links, or a bare ID already
  const match = reference.match(
    /(?:v=|youtu\.be\/|shorts\/)([a-zA-Z0-9_-]{11})/,
  );
  return match ? match[1] : reference; // falls back to treating it as a bare ID
}

function loadYoutubeClip(clip, mediaSlot, card) {
  const youtubeId = extractYouTubeId(clip.url);
  const frameId = `clip-frame-${clip.id}`;
  const src =
    `https://www.youtube.com/embed/${youtubeId}` +
    `?autoplay=0&mute=0&loop=1&playlist=${youtubeId}` +
    `&controls=0&modestbranding=1&playsinline=1%rel=0` +
    `&enablejsapi=1&origin=${encodeURIComponent(location.origin)}`;

  mediaSlot.innerHTML = `<iframe id="${frameId}" src="${src}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  wireClipSoundButton(card, document.getElementById(frameId));
}

function wireClipSoundButton(card, frame) {
  const btn = card.querySelector("[data-clip-sound]");
  if (!btn || !frame) return;
  let muted = false;

  function updateIcon() {
    btn.innerHTML = muted ? ICON_MUTED : ICON_UNMUTED;
    btn.setAttribute("aria-label", muted ? "Unmute Video" : "Mute Video");
  }

  btn.addEventListener("click", () => {
    muted = !muted;
    frame.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: muted ? "mute" : "unMute",
        args: [],
      }),
      "*",
    );

    updateIcon();
  });
  updateIcon();
}

function loadInstagramClip(clip, mediaSlot) {
  mediaSlot.innerHTML = `<blockquote class="instagram-media" data-instgrm-permalink="${clip.url}"></blocquote>`;
  if (window.instgrm) {
    window.instgrm.Embeds.process();
  }
}

/* ---- Footer year -------------------------------------------------------- */
(function footerYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();

/* ---- Initial render + re-render on language toggle ---------------------- */
renderTimeline();
renderReleases();
renderFieldClips();
observeFieldClips();
renderWorks();
document.addEventListener("languagechange", () => {
  renderTimeline();
  renderReleases();
  renderWorks();
});

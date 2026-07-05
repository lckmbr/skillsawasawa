/* =========================================================================
   GALLERY PAGE — renders GALLERY_IMAGES from data.js, reveals more on click,
   and keeps captions in sync with the current language.
   ========================================================================= */
(function () {
  const grid = document.querySelector("[data-gallery-grid]");
  const loadMoreBtn = document.querySelector("[data-gallery-more]");
  const emptyNote = document.querySelector("[data-gallery-empty]");
  if (!grid || typeof GALLERY_IMAGES === "undefined") return;

  let shown = 0;

  function currentLang() {
    return typeof getLang === "function" ? getLang() : "en";
  }

  function renderCard(item) {
    const fig = document.createElement("figure");
    fig.className = "gallery-item";
    fig.innerHTML = `
      <img src="${item.src}" alt="${item.caption[currentLang()]}" loading="lazy" />
      <figcaption class="gallery-caption">${item.caption[currentLang()]}</figcaption>
    `;
    fig.dataset.captionEn = item.caption.en;
    fig.dataset.captionFr = item.caption.fr;
    grid.appendChild(fig);
  }

  function revealNext(count) {
    const next = GALLERY_IMAGES.slice(shown, shown + count);
    next.forEach(renderCard);
    shown += next.length;

    if (shown >= GALLERY_IMAGES.length) {
      if (loadMoreBtn) loadMoreBtn.style.display = "none";
      if (emptyNote) emptyNote.style.display = "block";
    }
  }

  function refreshCaptions() {
    const lang = currentLang();
    grid.querySelectorAll(".gallery-item").forEach((fig) => {
      const caption = lang === "fr" ? fig.dataset.captionFr : fig.dataset.captionEn;
      const figcaption = fig.querySelector("figcaption");
      const img = fig.querySelector("img");
      if (figcaption) figcaption.textContent = caption;
      if (img) img.setAttribute("alt", caption);
    });
  }

  // Initial batch
  revealNext(typeof GALLERY_INITIAL_COUNT === "number" ? GALLERY_INITIAL_COUNT : 6);

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      revealNext(typeof GALLERY_LOAD_STEP === "number" ? GALLERY_LOAD_STEP : 3);
    });
  }

  document.addEventListener("languagechange", refreshCaptions);
})();

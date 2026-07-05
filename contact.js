/* =========================================================================
   CONTACT PAGE
   The form below has no backend yet. Wire it up by either:
   1) Setting the <form> action to a form service (e.g. Formspree, Basin),
      and removing this preventDefault handler, OR
   2) Replacing the fetch() call below with your own API endpoint.
   ========================================================================= */
(function () {
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-form-status]");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // REPLACE: remove once a real submit endpoint is wired up

    // Placeholder behaviour — swap for a real request, e.g.:
    // fetch("https://formspree.io/f/REPLACE_WITH_FORM_ID", {
    //   method: "POST",
    //   body: new FormData(form),
    //   headers: { Accept: "application/json" },
    // }).then(...);

    if (status) {
      const lang = typeof getLang === "function" ? getLang() : "en";
      status.textContent = I18N[lang]["contact.form.status"];
      status.style.color = "var(--clay)";
    }
    form.reset();
  });
})();

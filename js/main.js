/* ==========================================================================
   main.js — navigation, project filters, case study panel, contact form.
   Vanilla JS, no dependencies.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Project filters ---------- */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const tags = card.dataset.filter || "";
        const match = filter === "todos" || tags.split(" ").includes(filter);
        card.classList.toggle("hidden", !match);
      });
    });
  });

  /* ---------- Case study panel ---------- */
  const casePanel = document.getElementById("caseStudy");
  const caseContent = document.getElementById("caseContent");
  const caseClose = document.getElementById("caseClose");

  // Campos marcados como no confirmados en projects.js: quedan en el código
  // fuente (para uso interno de Yonatha) pero nunca se muestran a un
  // visitante — este filtro los omite del render.
  const TBC = "[DATO POR CONFIRMAR";
  const isConfirmed = (val) => typeof val === "string" && !val.includes(TBC);

  function renderCase(key) {
    const data = (typeof CASE_STUDIES !== "undefined") ? CASE_STUDIES[key] : null;
    if (!data || !casePanel || !caseContent) return;

    const rows = [
      ["01 · Problema", data.problema],
      ["02 · Solución", data.solucion],
      ["03 · Funcionalidades", data.funcionalidades],
      ["04 · Tecnología", data.tecnologia],
      ["05 · Mi rol", data.rol],
      ["06 · Estado", data.estado],
    ].filter(([, val]) => isConfirmed(val));

    const stepsHtml = rows.map(([label, val]) =>
      `<div><h4>${label}</h4><p>${val}</p></div>`
    ).join("");

    const resultadoHtml = isConfirmed(data.resultado) ? `
      <div style="margin-top:1.4rem;border-top:1px solid var(--line);padding-top:1rem;">
        <h4 style="font-family:var(--font-mono);font-size:.78rem;color:var(--ink-faint);margin-bottom:.4rem;">07 · Resultado</h4>
        <p style="color:var(--ink-dim);font-size:.92rem;margin:0;">${data.resultado}</p>
      </div>` : "";

    caseContent.innerHTML = `
      <h3>${data.title}</h3>
      <p class="case-cat">${data.category}</p>
      <div class="case-steps">${stepsHtml}</div>
      ${resultadoHtml}
    `;
    casePanel.hidden = false;
    casePanel.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  document.querySelectorAll(".case-toggle").forEach(btn => {
    btn.addEventListener("click", () => renderCase(btn.dataset.case));
  });

  if (caseClose) {
    caseClose.addEventListener("click", () => { casePanel.hidden = true; });
  }

  /* ---------- Contact info ----------
     DATO POR CONFIRMAR: número de WhatsApp (formato internacional, sin "+",
     ej. "573001234567") y correo de contacto. Se dejan vacíos a propósito:
     mientras estén vacíos, sus enlaces NO se muestran en el sitio, para no
     exponer datos sin confirmar a los visitantes. En cuanto los completes
     aquí, los botones aparecerán automáticamente en la sección de contacto. */
  const WHATSAPP_NUMBER = ""; // ej. "573001234567"
  const EMAIL_ADDRESS = "";   // ej. "yonatha@mendozatic.co"

  const contactSide = document.getElementById("contactSide");
  if (contactSide) {
    if (WHATSAPP_NUMBER) {
      const waLink = document.createElement("a");
      waLink.className = "contact-link";
      waLink.target = "_blank";
      waLink.rel = "noopener";
      waLink.href = `https://wa.me/${WHATSAPP_NUMBER}`;
      waLink.textContent = "WhatsApp ↗";
      contactSide.prepend(waLink);
    }
    if (EMAIL_ADDRESS) {
      const mailLink = document.createElement("a");
      mailLink.className = "contact-link";
      mailLink.href = `mailto:${EMAIL_ADDRESS}`;
      mailLink.textContent = "Correo ↗";
      contactSide.prepend(mailLink);
    }
  }

  /* ---------- Contact form -> WhatsApp handoff ---------- */
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(contactForm);
      const nombre = fd.get("nombre") || "";
      const empresa = fd.get("empresa") || "";
      const correo = fd.get("correo") || "";
      const tipo = fd.get("tipo") || "";
      const mensaje = fd.get("mensaje") || "";

      const text = `Hola Yonatha, soy ${nombre}` +
        (empresa ? ` de ${empresa}` : "") +
        `. Quiero hablar sobre un proyecto de tipo "${tipo}".\n\n${mensaje}\n\nMi correo: ${correo}`;

      const url = WHATSAPP_NUMBER
        ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
        : `https://wa.me/?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank", "noopener");
    });
  }

});

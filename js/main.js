/* ===========================================
   MENDOZATIC — main.js
   Seguridad: contacto nunca en HTML plano.
   =========================================== */

// ==========================================
// 0. DATOS DE CONTACTO OFUSCADOS (base64)
//    Para regenerar: en consola del navegador
//    btoa("573014032934")  → número WA
//    btoa("yonathamdz@gmail.com") → email
// ==========================================
const _w = "NTczMDE0MDMyOTM0";        // btoa("573014032934")
const _e = "eW9uYXRoYW1kekBnbWFpbC5jb20="; // btoa("yonathamdz@gmail.com")

function _dec(b) {
  try { return atob(b); } catch(e) { return ""; }
}

// Inyectar links de contacto de forma segura (no aparecen en el HTML fuente)
function initContactLinks() {
  const phone = _dec(_w);
  const email  = _dec(_e);
  const waUrl  = `https://wa.me/${phone}`;
  const mailUrl = `mailto:${email}`;

  // Hero card
  const heroWa = document.getElementById("heroWaLink");
  if (heroWa) heroWa.href = waUrl;

  // Sección contacto — email
  const mailLink = document.getElementById("contactMailLink");
  const mailText = document.getElementById("contactMailText");
  if (mailLink && mailText) {
    mailLink.href = mailUrl;
    mailText.textContent = email;
  }

  // Sección contacto — WhatsApp
  const waLink = document.getElementById("contactWaLink");
  if (waLink) waLink.href = waUrl;
}

// ==========================================
// 1. AOS — Animaciones al hacer scroll
// ==========================================
AOS.init({
  duration: 900,
  once: true,
  offset: 60,
});

// ==========================================
// 2. MENÚ MÓVIL (hamburguesa)
// ==========================================
function initMobileMenu() {
  const btn  = document.querySelector(".mobile-toggle");
  const nav  = document.querySelector(".nav-links");
  const icon = btn ? btn.querySelector("i") : null;
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("active");
    if (icon) {
      icon.classList.toggle("fa-bars",  !open);
      icon.classList.toggle("fa-times",  open);
    }
    btn.setAttribute("aria-expanded", open);
  });

  // Cerrar al seleccionar un link
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      if (icon) { icon.classList.replace("fa-times", "fa-bars"); }
      btn.setAttribute("aria-expanded", false);
    });
  });

  // Cerrar al hacer clic fuera del menú
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove("active");
      if (icon) { icon.classList.replace("fa-times", "fa-bars"); }
    }
  });
}

// ==========================================
// 3. TARJETA DE PERFIL (hover foto)
// ==========================================
function initProfileCard() {
  const pic  = document.getElementById("profilePic");
  const card = document.getElementById("profileCard");
  if (!pic || !card) return;

  pic.addEventListener("click", (e) => {
    e.stopPropagation();
    const visible = card.style.display === "block";
    card.style.display = visible ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!card.contains(e.target) && !pic.contains(e.target)) {
      card.style.display = "none";
    }
  });
}

// ==========================================
// 4. FORMULARIO DE CONTACTO → WhatsApp
// ==========================================
function initContactForm() {
  const form       = document.getElementById("contactForm");
  const submitBtn  = document.getElementById("submitBtn");
  const submitText = document.getElementById("submitText");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name    = document.getElementById("name").value.trim();
    const email   = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validación básica
    if (!name || !email || !message) {
      shakeForm(form);
      return;
    }
    if (!isValidEmail(email)) {
      highlightField("email");
      return;
    }

    // Estado de carga
    if (submitBtn) {
      submitBtn.disabled = true;
      submitText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    }

    const phone = _dec(_w);
    const text  = encodeURIComponent(
      `Hola Yonatha 👋, vi tu portafolio web.\n\n` +
      `👤 Nombre: ${name}\n` +
      `📧 Correo: ${email}\n` +
      `💬 Mensaje:\n${message}`
    );

    // Pequeño delay para que el usuario vea el estado de carga
    setTimeout(() => {
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank", "noopener,noreferrer");
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitText.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar por WhatsApp';
      }
    }, 600);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function shakeForm(form) {
  form.style.animation = "shake 0.4s ease";
  form.addEventListener("animationend", () => form.style.animation = "", { once: true });
}

function highlightField(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.borderColor = "#ef4444";
  el.focus();
  el.addEventListener("input", () => el.style.borderColor = "", { once: true });
}

// ==========================================
// 5. REDISEÑOS — ACORDEÓN
// ==========================================
function initRedesignCards() {
  document.querySelectorAll(".redesign-card").forEach(card => {
    card.addEventListener("click", () => card.classList.toggle("active"));
  });
}

// ==========================================
// 6. HEADER — Sombra al hacer scroll
// ==========================================
function initScrollHeader() {
  const header = document.querySelector("header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.style.boxShadow = window.scrollY > 10
      ? "0 4px 20px rgba(0,0,0,0.08)"
      : "none";
  }, { passive: true });
}

// ==========================================
// 7. ANIMACIÓN DE NÚMEROS (hero stats)
// ==========================================
function initCounterAnimation() {
  // Opcional: animar los números cuando entran al viewport
  // Los valores actuales son texto (ej. "4+", "Bilingüe") así que se omite
  // Si en el futuro agregas números puros, usa este observer:
  /*
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll(".counter-num").forEach(el => observer.observe(el));
  */
}

// ==========================================
// 8. SMOOTH SCROLL — para navegadores viejos
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // altura del nav
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ==========================================
// CSS DINÁMICO — animación shake del form
// ==========================================
(function injectStyles() {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes shake {
      0%,100% { transform: translateX(0); }
      20%      { transform: translateX(-8px); }
      40%      { transform: translateX(8px); }
      60%      { transform: translateX(-5px); }
      80%      { transform: translateX(5px); }
    }
  `;
  document.head.appendChild(style);
})();

// ==========================================
// INIT — arrancar todo al cargar el DOM
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initContactLinks();
  initMobileMenu();
  initProfileCard();
  initContactForm();
  initRedesignCards();
  initScrollHeader();
  initCounterAnimation();
  initSmoothScroll();
});

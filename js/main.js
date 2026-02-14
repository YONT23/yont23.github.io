// 1. Activar animaciones AOS
AOS.init({
  duration: 1000,
  once: true
});

// ==========================================
// 2. LÓGICA DEL MENÚ MÓVIL (NUEVO)
// ==========================================
const mobileBtn = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const mobileIcon = mobileBtn ? mobileBtn.querySelector('i') : null;

if (mobileBtn && navLinks) {
  // Al hacer clic en el botón hamburguesa
  mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Cambiar el icono: De rayas (fa-bars) a X (fa-times)
    if (navLinks.classList.contains('active')) {
      mobileIcon.classList.remove('fa-bars');
      mobileIcon.classList.add('fa-times');
    } else {
      mobileIcon.classList.remove('fa-times');
      mobileIcon.classList.add('fa-bars');
    }
  });

  // Cerrar el menú automáticamente al tocar un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileIcon.classList.remove('fa-times');
      mobileIcon.classList.add('fa-bars');
    });
  });
}

// ==========================================
// 3. TARJETA DE PERFIL (PROFILE CARD)
// ==========================================
const profilePic = document.getElementById("profilePic");
const profileCard = document.getElementById("profileCard");

if (profilePic && profileCard) {
  profilePic.addEventListener("click", (e) => {
    // Evita que el clic se propague y cierre inmediato
    e.stopPropagation(); 
    const isVisible = profileCard.style.display === "block";
    profileCard.style.display = isVisible ? "none" : "block";
  });

  // Cerrar al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (!profileCard.contains(e.target) && !profilePic.contains(e.target)) {
      profileCard.style.display = "none";
    }
  });
}

// ==========================================
// 4. ENVÍO DEL FORMULARIO (WHATSAPP + EMAIL)
// ==========================================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) return; // Validación simple

    // Opción A: Abrir cliente de correo
    // window.location.href = `mailto:yonathamdz@gmail.com?subject=Contacto Portafolio&body=Nombre: ${name}%0ACorreo: ${email}%0AMensaje: ${message}`;

    // Opción B: Enviar por WhatsApp (Más directo)
    const whatsappMsg = `Hola Yonatha 👋, vi tu portafolio.%0A%0A👤 Nombre: ${name}%0A📧 Correo: ${email}%0A💬 Mensaje: ${message}`;
    window.open(`https://wa.me/573014032934?text=${whatsappMsg}`, "_blank");
    
    // Opcional: Limpiar formulario
    contactForm.reset();
  });
}

// ==========================================
// 5. TARJETAS DE REDISEÑO (ACORDEÓN)
// ==========================================
const redesignCards = document.querySelectorAll('.redesign-card');

redesignCards.forEach(card => {
  card.addEventListener('click', () => {
    // 1. Cerrar las otras tarjetas (Opcional, si quieres que solo una esté abierta a la vez)
    // redesignCards.forEach(c => {
    //   if (c !== card) c.classList.remove('active');
    // });

    // 2. Alternar la actual
    card.classList.toggle('active');
  });
});
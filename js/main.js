// Activar animaciones AOS
AOS.init({
  duration: 1000,
  once: true
});

// Mostrar/Ocultar la cajita de perfil
const profilePic = document.getElementById("profilePic");
const profileCard = document.getElementById("profileCard");

profilePic.addEventListener("click", () => {
  profileCard.style.display = profileCard.style.display === "block" ? "none" : "block";
});

// Cerrar al hacer clic fuera
document.addEventListener("click", (e) => {
  if (!profileCard.contains(e.target) && !profilePic.contains(e.target)) {
    profileCard.style.display = "none";
  }
});

// Envío del formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Enviar por correo
  window.location.href = `mailto:yonathamdz@gmail.com?subject=Contacto desde el Portafolio&body=Nombre: ${name}%0ACorreo: ${email}%0AMensaje: ${message}`;

  // Enviar por WhatsApp
  const whatsappMsg = `Hola Yonatha 👋, vi tu portafolio y me gustaría saber más sobre tus proyectos o servicios.%0A%0A👤 Nombre: ${name}%0A📧 Correo: ${email}%0A💬 Mensaje: ${message}`;
  window.open(`https://wa.me/573014032934?text=${whatsappMsg}`, "_blank");
});

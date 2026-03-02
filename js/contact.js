// contact.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // evita envío tradicional

    emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      this
    )
    .then(() => {
      alert("Mensaje enviado correctamente. Gracias!");
      form.reset(); // limpia el formulario
    }, (error) => {
      console.error("Error al enviar: ", error);
      alert("Hubo un problema al enviar. Intentá de nuevo.");
    });
  });
});
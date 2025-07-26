document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent!");
});

function sendToWhatsApp() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  const fullMessage = `*Contact Request via Website*\n\n*Name:* ${firstName} ${lastName}\n*Email:* ${email}\n*Phone:* ${phone}\n*Message:* ${message}`;

  const encodedMessage = encodeURIComponent(fullMessage);
  const whatsappURL = `https://wa.me/919284244876?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
}
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navMenu");

    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });

    const toggleButton = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
  });

  
  function validateAndSend() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+91\d{10}$/;

    if (!firstName.match(nameRegex) || !lastName.match(nameRegex)) {
      alert("❌ Please enter a valid first and last name (letters only).");
      return;
    }

    if (!email.match(emailRegex)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    if (!phone.match(phoneRegex)) {
      alert("❌ Please enter a valid Indian phone number with +91.");
      return;
    }

    if (message.length < 10) {
      alert("❌ Message must be at least 10 characters long.");
      return;
    }

    // ✅ If all is valid, proceed to WhatsApp or email sending
    const fullMessage = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);

    // Example: WhatsApp
    window.open(`https://wa.me/919284244876?text=${encodedMessage}`, "_blank");
  }


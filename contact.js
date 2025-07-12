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


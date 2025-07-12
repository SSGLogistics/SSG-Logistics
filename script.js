// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // === FORM VALIDATION ===
  const form = document.getElementById("quoteForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const pickup = form.pickup.value.trim();
      const drop = form.drop.value.trim();
      const vehicle = form.vehicle.value;
      const date = form.date.value;

      if (!name || !phone || !pickup || !drop || !vehicle || !date) {
        e.preventDefault();
        formMessage.textContent = "Please fill in all required fields.";
        formMessage.style.color = "red";
      }
     
    });
  }

  // === SCROLL ANIMATION ===
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".feature, .vehicle, .about, .quote-form").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });

  // === NAVBAR HIGHLIGHT ON SCROLL ===
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("class");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.href.includes(current)) {
        link.classList.add("active");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // (Keep your existing scroll and form logic here)
});
function sendToWhatsApp() {
  const name = document.querySelector('[name="name"]').value;
  const phone = document.querySelector('[name="phone"]').value;
  const pickup = document.querySelector('[name="pickup"]').value;
  const drop = document.querySelector('[name="drop"]').value;
  const vehicle = document.querySelector('[name="vehicle"]').value;
  const date = document.querySelector('[name="date"]').value;

  if (!name || !phone || !pickup || !drop || !vehicle || !date) {
    document.getElementById("formMessage").textContent = "Please fill in all required fields.";
    document.getElementById("formMessage").style.color = "red";
    return;
  }

  const message = `*New Quote Request*%0A
Name: ${name}%0A
Phone: ${phone}%0A
Pickup: ${pickup}%0A
Drop: ${drop}%0A
Vehicle: ${vehicle}%0A
Date: ${date}`;

  const whatsappURL = `https://wa.me/919284244876?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
}


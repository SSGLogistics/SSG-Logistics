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
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});


  // (Keep your existing scroll and form logic here)


  function validateAndSend() {
    const pickup = document.querySelector('input[name="pickup"]').value.trim().toLowerCase();
    const allowedGoaKeywords = [
      'goa', 'panjim', 'mapusa', 'margao', 'vasco', 'mopa', 'pernem',
      'bicholim', 'canacona', 'ponda', 'calangute', 'anjuna', 'porvorim', 'siolim',
      'madgaon','bardez','sattari','tiswadi','mormugao','quepem','salcete','sanguem','dharbandora',
      'verna industrial estate','Kundaim industria estate','sancoale industrial estate','corlim industrial estate',
      'thivim industrial estate','Bicholim industrial estate','colvale industrial estate','tuem industrial estate',
      'mapusa industrial estate','pilerne industrial estate','shiroda industrial estate','manohar international airport,mopa pernem north goa'
      ,'North-Goa','South-Goa'

    ];

    const isGoaPickup = allowedGoaKeywords.some(keyword => pickup.includes(keyword));

    if (!isGoaPickup) {
      alert("Please enter a valid location within Goa & it must contain the Goa word at the end. e.g.: Location GOA")
      return;
    }

    // ✅ If pickup is valid — call the WhatsApp quote function
    sendToWhatsApp();
  }

  function sendToWhatsApp() {
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const pickup = document.querySelector('input[name="pickup"]').value;
    const drop = document.querySelector('input[name="drop"]').value;
    const vehicle = document.querySelector('select[name="vehicle"]').value;
    const date = document.querySelector('input[name="date"]').value;

    const message = `🚚 *New Quote Request from SSG Website* 🚚

*Name:* ${name}
*Phone:* ${phone}
*Pickup:* ${pickup}
*Drop:* ${drop}
*Vehicle:* ${vehicle}
*Date:* ${date}`;

    const whatsappUrl = `https://wa.me/919284244876?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  // Set today's date as minimum date
  window.onload = function () {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const dd = String(today.getDate()).padStart(2, '0');

    const minDate = `${yyyy}-${mm}-${dd}`;
    document.getElementById("date").setAttribute("min", minDate);
  };
function scrollToQuote() {
  document.getElementById("quote").scrollIntoView({ behavior: "smooth" });
}



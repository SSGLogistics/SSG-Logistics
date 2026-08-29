document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => navMenu.classList.remove("active"));
    });
  }

  // 2. Set Minimum Date on Date Input
  const dateInput = document.getElementById("shipDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  // 3. Dynamic Cycling of Highway Hub Markers
  const hubLocations = [
    { start: "Verna Industrial", mid: "Kundaim Hub", end: "Pan-India Corridor" },
    { start: "Thivim Estate", mid: "Mapusa Commercial", end: "Margao Junction" },
    { start: "Pilerne Zone", mid: "Panjim Express", end: "Sancoale Logistics" },
    { start: "Bicholim Units", mid: "Corlim Hub", end: "Shiroda Route" }
  ];

  let hubIndex = 0;
  const hubStart = document.getElementById("hubStart");
  const hubMid = document.getElementById("hubMid");
  const hubEnd = document.getElementById("hubEnd");

  setInterval(() => {
    hubIndex = (hubIndex + 1) % hubLocations.length;
    if (hubStart && hubMid && hubEnd) {
      hubStart.style.opacity = "0";
      hubMid.style.opacity = "0";
      hubEnd.style.opacity = "0";

      setTimeout(() => {
        hubStart.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${hubLocations[hubIndex].start}`;
        hubMid.innerHTML = `<i class="fa-solid fa-industry"></i> ${hubLocations[hubIndex].mid}`;
        hubEnd.innerHTML = `<i class="fa-solid fa-city"></i> ${hubLocations[hubIndex].end}`;

        hubStart.style.opacity = "1";
        hubMid.style.opacity = "1";
        hubEnd.style.opacity = "1";
      }, 400);
    }
  }, 4000);

  // 4. Dynamic Interactive Payload Simulator
  const slider = document.getElementById("weight-slider");
  const weightDisplay = document.getElementById("weight-display");
  const vehicleName = document.getElementById("vehicle-name");
  const vehicleDesc = document.getElementById("vehicle-desc");
  const vehicleCap = document.getElementById("vehicle-cap");
  const vehicleRate = document.getElementById("vehicle-rate");
  const vehicleSelect = document.getElementById("vehicleSelect");

  const fleetDatabase = [
    { 
      maxWeight: 1000, 
      name: "Tata Ace (1 Ton)", 
      cap: "Up to 1,000 KG", 
      rate: "₹300 (0–5 km) / ₹25/km (>30km)",
      desc: "Best for agile commercial transport, city drops, and small industrial crates.", 
      selectVal: "Tata Ace (1 Ton)" 
    },
    { 
      maxWeight: 1500, 
      name: "Ashok Leyland Dost LS (1.5 Ton)", 
      cap: "Up to 1,500 KG", 
      rate: "₹400 (0–5 km) / ₹30/km (>30km)",
      desc: "Heavy-duty pickup engineered for factory cargo, B2B consignments, and inter-estate logistics.", 
      selectVal: "Ashok Leyland Dost LS (1.5 Ton)" 
    },
    { 
      maxWeight: 8000, 
      name: "Custom / Bulk Multi-Fleet Contract", 
      cap: "Multi-Ton Dedicated Load", 
      rate: "Monthly Subscription from ₹50,000",
      desc: "Full dedicated logistics fleet reserved for daily manufacturing supplies and corporate trade.", 
      selectVal: "Custom Fleet / Bulk Contract" 
    }
  ];

  if (slider) {
    slider.addEventListener("input", (e) => {
      const weight = parseInt(e.target.value);
      weightDisplay.textContent = `${weight.toLocaleString()} KG`;

      const matched = fleetDatabase.find((v) => weight <= v.maxWeight) || fleetDatabase[fleetDatabase.length - 1];
      vehicleName.textContent = matched.name;
      vehicleCap.textContent = matched.cap;
      vehicleRate.textContent = matched.rate;
      vehicleDesc.textContent = matched.desc;
      if (vehicleSelect) vehicleSelect.value = matched.selectVal;
    });
  }

  // 5. Animated Metric Counters on Scroll
  const statNumbers = document.querySelectorAll(".stat-number");
  let statsTriggered = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !statsTriggered) {
        statsTriggered = true;
        statNumbers.forEach((el) => {
          const target = parseFloat(el.getAttribute("data-target"));
          let count = 0;
          const speed = target / 40;

          const update = () => {
            count += speed;
            if (count < target) {
              el.textContent = Math.floor(count) + (target % 1 !== 0 ? "%" : (target === 24 ? "/7" : "+"));
              requestAnimationFrame(update);
            } else {
              el.textContent = target + (target % 1 !== 0 ? "%" : (target === 100 ? "%" : (target === 24 ? "/7" : "+")));
            }
          };
          update();
        });
      }
    });
  }, { threshold: 0.4 });

  const statsSection = document.querySelector(".stats-grid");
  if (statsSection) observer.observe(statsSection);

  // 6. Form Validation, Animation & WhatsApp Quote Dispatch
  const quoteForm = document.getElementById("ssgQuoteForm");
  const dispatchBtn = document.getElementById("dispatchBtn");

  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const pickup = document.getElementById("pickup").value.trim();
      const drop = document.getElementById("drop").value.trim();
      const vehicle = document.getElementById("vehicleSelect").value;
      const date = document.getElementById("shipDate").value;

      // Goa Industrial Location Validation
      const goaKeywords = [
        'goa', 'panjim', 'mapusa', 'margao', 'vasco', 'mopa', 'pernem',
        'bicholim', 'canacona', 'ponda', 'calangute', 'anjuna', 'porvorim',
        'siolim', 'madgaon', 'verna', 'kundaim', 'corlim', 'thivim', 'pilerne',
        'sancoale', 'shiroda', 'tuem', 'sattari', 'quepem', 'sanguem', 'dharbandora'
      ];

      const isValidGoa = goaKeywords.some(keyword => pickup.toLowerCase().includes(keyword));

      if (!isValidGoa) {
        alert("Please ensure your Pickup Location mentions a recognized Goa location or industrial estate (e.g., 'Verna Industrial Estate, Goa').");
        return;
      }

      // Trigger Dispatch Animation
      dispatchBtn.classList.add("animating");

      setTimeout(() => {
        const formattedMsg = `*🚚 New Rate Quote Request — SSG Logistics*\n\n` +
          `*👤 Client Name:* ${name}\n` +
          `*📞 Contact:* ${phone}\n` +
          `*📍 Pickup Hub:* ${pickup}\n` +
          `*🏁 Destination:* ${drop}\n` +
          `*🚛 Vehicle Model:* ${vehicle}\n` +
          `*📅 Date:* ${date}\n\n` +
          `_Transmitted via SSG Logistics Official Portal_`;

        const whatsappURL = `https://wa.me/919284244876?text=${encodeURIComponent(formattedMsg)}`;
        window.open(whatsappURL, "_blank");
        dispatchBtn.classList.remove("animating");
      }, 900);
    });
  }
});

// Tab Switcher Function
function switchRateTab(tabId) {
  document.querySelectorAll(".rate-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));

  const targetContent = document.getElementById(tabId);
  if (targetContent) targetContent.classList.add("active");

  const clickedBtn = Array.from(document.querySelectorAll(".tab-btn")).find(btn => 
    btn.getAttribute("onclick").includes(tabId)
  );
  if (clickedBtn) clickedBtn.classList.add("active");
}

function scrollToQuote() {
  const quoteSection = document.getElementById("quote");
  if (quoteSection) quoteSection.scrollIntoView({ behavior: "smooth" });
}
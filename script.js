// ========================================
// MATRIX CYBER RAIN EFFECT
// ========================================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const matrix = letters.split("");

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function drawMatrix() {
  ctx.fillStyle = "rgba(2,6,23,0.06)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffcc";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = matrix[Math.floor(Math.random() * matrix.length)];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 35);

// ========================================
// RESPONSIVE CANVAS
// ========================================

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ========================================
// TYPING EFFECT
// ========================================

new Typed(".typing", {
  strings: [
    "Cybersecurity Data Engineer",
    "Backend Integration Developer",
    "OCSF Normalization Engineer",
    "SIEM Pipeline Specialist",
    "Security Telemetry Engineer",
    "FastAPI Backend Developer",
    "Cybersecurity Automation Engineer",
  ],

  typeSpeed: 60,
  backSpeed: 35,
  backDelay: 1500,
  loop: true,
});

// ========================================
// HERO INTRO ANIMATION
// ========================================

anime
  .timeline({
    easing: "easeOutExpo",
  })

  .add({
    targets: ".terminal",
    opacity: [0, 1],
    translateY: [-100, 0],
    duration: 1800,
  })

  .add(
    {
      targets: ".hero-tag",
      opacity: [0, 1],
      letterSpacing: ["20px", "3px"],
      duration: 1500,
    },
    "-=1200",
  )

  .add(
    {
      targets: ".hero-title",
      opacity: [0, 1],
      scale: [0.5, 1],
      duration: 1800,
    },
    "-=1200",
  )

  .add(
    {
      targets: ".typing",
      opacity: [0, 1],
      translateX: [-100, 0],
      duration: 1500,
    },
    "-=1200",
  )

  .add(
    {
      targets: ".hero-description",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1500,
    },
    "-=1200",
  )

  .add(
    {
      targets: ".hero-buttons button",
      opacity: [0, 1],
      translateY: [60, 0],
      delay: anime.stagger(250),
      duration: 1500,
      easing: "easeOutElastic(1,.6)",
    },
    "-=1200",
  )

  .add(
    {
      targets: ".stat-box",
      opacity: [0, 1],
      scale: [0.5, 1],
      delay: anime.stagger(300),
      duration: 1800,
      easing: "easeOutElastic(1,.5)",
    },
    "-=1200",
  );

// ========================================
// SECTION REVEAL ANIMATION
// ========================================

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      anime({
        targets: entry.target,

        opacity: [0, 1],
        translateY: [100, 0],

        duration: 1500,

        easing: "easeOutExpo",
      });
    }
  });
});

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// ========================================
// FLOATING DASHBOARD EFFECT
// ========================================

anime({
  targets: ".stat-box,.dashboard-card",

  translateY: [{ value: -12 }, { value: 12 }],

  direction: "alternate",

  easing: "easeInOutSine",

  duration: 3500,

  delay: anime.stagger(200),

  loop: true,
});

// ========================================
// SKILL TAG FLOAT ANIMATION
// ========================================

anime({
  targets: ".skill-tags span",

  scale: [{ value: 0.95 }, { value: 1.05 }, { value: 1 }],

  delay: anime.stagger(150),

  duration: 2500,

  easing: "easeInOutQuad",

  loop: true,
});

// ========================================
// HERO TITLE GLOW
// ========================================

anime({
  targets: ".hero-title",

  textShadow: ["0 0 10px #00ffcc", "0 0 40px #00ffcc", "0 0 10px #00ffcc"],

  duration: 3000,

  easing: "easeInOutSine",

  loop: true,
});

// ========================================
// GLITCH EFFECT
// ========================================

const title = document.querySelector(".hero-title");

setInterval(() => {
  anime({
    targets: title,

    skewX: [
      { value: 15, duration: 100 },
      { value: -15, duration: 100 },
      { value: 0, duration: 100 },
    ],

    easing: "easeInOutSine",
  });
}, 8000);

// ========================================
// MAGNETIC BUTTON EFFECT
// ========================================

const buttons = document.querySelectorAll(".primary-btn,.secondary-btn");

buttons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    anime({
      targets: button,

      translateX: x * 0.2,
      translateY: y * 0.2,

      duration: 400,

      easing: "easeOutElastic(1,.5)",
    });
  });

  button.addEventListener("mouseleave", () => {
    anime({
      targets: button,

      translateX: 0,
      translateY: 0,

      duration: 600,

      easing: "easeOutElastic(1,.5)",
    });
  });
});

// ========================================
// CURSOR GLOW EFFECT
// ========================================

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  anime({
    targets: glow,

    left: e.clientX - 150,
    top: e.clientY - 150,

    duration: 400,

    easing: "easeOutQuad",
  });
});

// ========================================
// CARD HOVER GLOW
// ========================================

const cards = document.querySelectorAll(
  ".skill-card,.project-card,.dashboard-card,.github-card",
);

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    anime({
      targets: card,

      scale: 1.03,

      boxShadow: "0 0 40px rgba(0,255,204,0.4)",

      duration: 300,
    });
  });

  card.addEventListener("mouseleave", () => {
    anime({
      targets: card,

      scale: 1,

      boxShadow: "0 0 0px rgba(0,255,204,0)",

      duration: 300,
    });
  });
});

// ========================================
// PROJECT CARD 3D TILT
// ========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 20;
    const rotateX = (y / rect.height - 0.5) * -20;

    anime({
      targets: card,

      rotateY: rotateY,
      rotateX: rotateX,

      duration: 400,

      easing: "easeOutQuad",
    });
  });

  card.addEventListener("mouseleave", () => {
    anime({
      targets: card,

      rotateY: 0,
      rotateX: 0,

      duration: 600,

      easing: "easeOutExpo",
    });
  });
});

// ========================================
// NAVBAR FLOAT
// ========================================

anime({
  targets: ".navbar",

  translateY: [{ value: -3 }, { value: 3 }],

  duration: 4000,

  direction: "alternate",

  easing: "easeInOutSine",

  loop: true,
});

// ========================================
// DASHBOARD PULSE
// ========================================

anime({
  targets: ".status-dot",

  scale: [{ value: 1 }, { value: 1.5 }, { value: 1 }],

  opacity: [{ value: 1 }, { value: 0.5 }, { value: 1 }],

  duration: 1500,

  delay: anime.stagger(200),

  loop: true,
});

// ========================================
// CONTACT FORM ANIMATION
// ========================================

anime({
  targets: ".contact-form input,.contact-form textarea",

  opacity: [0, 1],
  translateX: [-50, 0],

  delay: anime.stagger(200),

  duration: 1200,

  easing: "easeOutExpo",
});

// ========================================
// LIGHT / DARK MODE
// ========================================

const toggle = document.getElementById("themeToggle");

let light = false;

toggle.addEventListener("click", () => {
  if (!light) {
    document.body.style.background = "#f3f4f6";
    document.body.style.color = "#111827";

    toggle.innerHTML = "☀️";

    anime({
      targets: "body",

      backgroundColor: "#f3f4f6",

      duration: 600,
    });

    light = true;
  } else {
    document.body.style.background = "#020617";
    document.body.style.color = "white";

    toggle.innerHTML = "🌙";

    anime({
      targets: "body",

      backgroundColor: "#020617",

      duration: 600,
    });

    light = false;
  }
});

// ========================================
// CHATBOT ENTRY
// ========================================

anime({
  targets: ".chatbot",

  translateY: [200, 0],
  opacity: [0, 1],

  duration: 2000,

  delay: 3000,

  easing: "easeOutElastic(1,.5)",
});

// ========================================
// AUTO PARALLAX EFFECT
// ========================================

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  anime({
    targets: "#matrix",

    translateY: scrollY * 0.1,

    duration: 0,
  });
});

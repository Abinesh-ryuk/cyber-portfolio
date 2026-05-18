// MATRIX EFFECT

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

function draw() {
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

setInterval(draw, 35);

// TYPING EFFECT

new Typed(".typing", {
  strings: [
    "Cybersecurity Data Engineer",
    "Backend Integration Developer",
    "OCSF Normalization Engineer",
    "SIEM Pipeline Specialist",
    "Security Telemetry Engineer",
  ],

  typeSpeed: 60,
  backSpeed: 35,
  loop: true,
});

// HERO ANIMATION

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
      targets: ".hero-title",
      opacity: [0, 1],
      scale: [0.5, 1],
      duration: 1800,
    },
    "-=1200",
  )

  .add(
    {
      targets: ".hero-description,.hero-buttons,.hero-stats",
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(300),
      duration: 1500,
    },
    "-=1200",
  );

// REVEAL ANIMATIONS

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

// FLOATING ANIMATION

anime({
  targets: ".stat-box,.dashboard-card",

  translateY: [{ value: -10 }, { value: 10 }],

  direction: "alternate",
  easing: "easeInOutSine",
  loop: true,
  duration: 3000,
  delay: anime.stagger(200),
});

// GLOW CURSOR

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

// BUTTON ANIMATION

anime({
  targets: ".primary-btn,.secondary-btn",
  scale: [0.9, 1],
  opacity: [0, 1],
  delay: anime.stagger(300),
  duration: 1200,
  easing: "easeOutElastic(1,.6)",
});

// LIGHT MODE

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggle.innerHTML = "☀️";
  } else {
    toggle.innerHTML = "🌙";
  }
});

// CARD HOVER EFFECT

const cards = document.querySelectorAll(
  ".skill-card,.project-card,.dashboard-card",
);

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    anime({
      targets: card,
      scale: 1.03,
      boxShadow: "0 0 30px #00ffcc",
      duration: 300,
    });
  });

  card.addEventListener("mouseleave", () => {
    anime({
      targets: card,
      scale: 1,
      boxShadow: "0 0 0px #00ffcc",
      duration: 300,
    });
  });
});
// PROFILE CARD ENTRY

anime({

    targets:'.profile-card',

    translateY:[200,0],

    opacity:[0,1],

    duration:2000,

    delay:2500,

    easing:'easeOutElastic(1,.5)'

});

// EDUCATION CARD FLOAT

anime({

    targets:'.edu-box',

    translateY:[
        {value:-5},
        {value:5}
    ],

    direction:'alternate',

    loop:true,

    duration:2500,

    delay:anime.stagger(300),

    easing:'easeInOutSine'

});
// MOBILE MENU
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// TYPING EFFECT
const typingText = document.getElementById("typing");

const texts = [
  "SOC Analyst @ Accenture",
  "Threat Hunter",
  "Splunk | Sentinel Expert",
  "KQL Specialist",
  "Cybersecurity Enthusiast"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = texts[i];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, j--);
  } else {
    typingText.textContent = currentText.substring(0, j++);
  }

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// SCROLL ANIMATION
const cards = document.querySelectorAll(".card, .stat, img");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.6s";
  observer.observe(el);
});

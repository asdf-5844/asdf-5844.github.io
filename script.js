const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.35)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

const typedText = document.getElementById("typedText");

const phrases = [
  "Inventor.",
  "Thinker.",
  "Musician.",
  "Problem Solver.",
  "Builder.",
  "Student."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typedText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 70;

  if (!isDeleting && charIndex === currentPhrase.length) {
    speed = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
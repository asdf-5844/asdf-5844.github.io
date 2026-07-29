const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.style.boxShadow = window.scrollY > 30
      ? "0 12px 35px rgba(0, 0, 0, 0.28)"
      : "none";
  });
}

const typedText = document.getElementById("typedText");
const phrases = ["Inventor.", "Thinker.", "Musician.", "Problem Solver.", "Builder.", "Student."];

if (typedText) {
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    typedText.textContent = currentPhrase.substring(0, isDeleting ? charIndex - 1 : charIndex + 1);
    charIndex += isDeleting ? -1 : 1;

    let speed = isDeleting ? 35 : 65;
    if (!isDeleting && charIndex === currentPhrase.length) {
      speed = 1200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 260;
    }
    window.setTimeout(typeEffect, speed);
  }

  typeEffect();
}
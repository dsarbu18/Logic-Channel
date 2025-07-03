// Smooth fade-in for sections on scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, {
      threshold: 0.2,
  });

  sections.forEach((section) => observer.observe(section));
});

// Form submission alert
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! We will get back to you soon.');
  this.reset();
});

document.addEventListener('scroll', () => {
  const introContainer = document.querySelector('.intro-container');
  const scrollPosition = window.scrollY;
  const fadeStart = 0; // Start fading out
  const fadeEnd = 50; // Fully faded out by this scroll position

  // Calculate the opacity based on scroll position
  const opacity = 1 - Math.min((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 1);
  introContainer.style.opacity = opacity > 0 ? opacity : 0; // Ensure it doesn't go below 0
});

// Hiding the Header
document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const aboutSection = document.querySelector('#about');
  const offset = 120; // Pixels before reaching the section
  const sectionTop = aboutSection.getBoundingClientRect().top;

  // Hide the header when approaching the "About Us" section
  if (sectionTop <= offset) {
      header.classList.add('hide-header'); // Hide the header
  } else {
      header.classList.remove('hide-header'); // Show the header
  }
});

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (Math.abs(scrollTop - lastScrollTop) > 50) {
    if (scrollTop > lastScrollTop) {
      header.classList.add('hide-header');
    } else {
      header.classList.remove('hide-header');
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Hamburger Icon
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});

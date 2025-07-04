// 🔹 Smooth fade-in for sections on scroll
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

// 🔹 Form submission alert (only if contact form exists)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    this.reset();
  });
}

// 🔹 Fade out intro on scroll (if intro section exists)
document.addEventListener('scroll', () => {
  const introContainer = document.querySelector('.intro-container');
  if (introContainer) {
    const scrollPosition = window.scrollY;
    const fadeStart = 0;
    const fadeEnd = 50;

    const opacity = 1 - Math.min((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 1);
    introContainer.style.opacity = Math.max(opacity, 0);
  }
});

// 🔹 Smart hide/show header based on scroll and About section position
const header = document.querySelector('header');
const aboutSection = document.querySelector('#about');

document.addEventListener('scroll', () => {
  if (header && aboutSection) {
    const offset = 120;
    const sectionTop = aboutSection.getBoundingClientRect().top;

    if (sectionTop <= offset) {
      header.classList.add('hide-header');
    } else {
      header.classList.remove('hide-header');
    }
  }
});

// 🔹 Hide header when scrolling down fast, show when scrolling up
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (Math.abs(scrollTop - lastScrollTop) > 50) {
    if (scrollTop > lastScrollTop) {
      header?.classList.add('hide-header');
    } else {
      header?.classList.remove('hide-header');
    }
  }

  lastScrollTop = Math.max(scrollTop, 0);
});

// 🔹 Hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      toggle.classList.toggle("open");
    });
  }
});

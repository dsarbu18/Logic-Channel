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

// mobile logo scroll
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track img');
  const slideWidth = slides[0].clientWidth;

  // Clone first and last slides
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const allSlides = document.querySelectorAll('.carousel-track img');
  let index = 1;

  // Set starting position
  track.style.transform = `translateX(-${slideWidth * index}px)`;

  function moveCarousel() {
    index++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${slideWidth * index}px)`;

    // If at cloned last, jump back to real first
    setTimeout(() => {
      if (index >= allSlides.length - 1) {
        track.style.transition = 'none';
        index = 1;
        track.style.transform = `translateX(-${slideWidth * index}px)`;
      }
    }, 500);
  }

  // Auto-slide every 3 seconds
  setInterval(moveCarousel, 3000);
});

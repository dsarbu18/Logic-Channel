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





// Mobile logo scroll — smooth loop with cloned slides
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  let slides = Array.from(track.children);

  // Clone first and last slides
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  slides = Array.from(track.children); // update list with clones
  let index = 1;

  // Center the slide at current index
  function centerSlide(transition = true) {
    const slide = slides[index];
    const slideWidth = slide.offsetWidth;
    const containerWidth = track.parentElement.offsetWidth;
    const offset = slide.offsetLeft - (containerWidth - slideWidth) / 2;

    if (transition) {
      track.style.transition = 'transform 0.5s ease-in-out';
    } else {
      track.style.transition = 'none';
    }

    track.style.transform = `translateX(-${offset}px)`;
  }

  // Initial position
  window.addEventListener('load', () => {
    centerSlide(false);
  });

  // Slide every 3 seconds
  setInterval(() => {
    index++;
    centerSlide(true);

    // After transition, jump to real first slide (invisible to user)
    setTimeout(() => {
      if (index >= slides.length - 1) {
        index = 1;
        centerSlide(false);
      }
    }, 550); // Slightly longer than the transition
  }, 3000);
});

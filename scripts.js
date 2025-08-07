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

const mobileMenu = document.getElementById('mobile-menu');
const nav = document.getElementById('nav');

mobileMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
});


window.addEventListener('scroll', () => {
  const heading = document.querySelector('.client-heading');
  const servicesSection = document.querySelector('#services');

  if (!heading.classList.contains('shine')) {
    const triggerPoint = servicesSection.getBoundingClientRect().bottom;

    if (triggerPoint < window.innerHeight) {
      console.log("✨ Shine effect triggered!");
      heading.classList.add('shine');
    }
  }
});

// mobile logo scroll
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  let slides = Array.from(track.children);

  // Clone first and last slides
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  slides = Array.from(track.children); // update list
  let index = 1;

  // Center first actual slide
  function centerSlide() {
    const slide = slides[index];
    const slideWidth = slide.offsetWidth;
    const containerWidth = track.parentElement.offsetWidth;
    const offset = slide.offsetLeft - (containerWidth - slideWidth) / 2;

    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${offset}px)`;
  }

  // Initial position
  setTimeout(centerSlide, 50);

  // Slide every 3s
  setInterval(() => {
    index++;
    centerSlide();

    // Seamless loop after transition ends
    setTimeout(() => {
      if (index >= slides.length - 1) {
        track.style.transition = 'none';
        index = 1;
        centerSlide();
      }
    }, 500);
  }, 3000);
});

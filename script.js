const menuBtn = document.querySelector(".hamburger-menu");
const navItems = document.querySelectorAll(".right-section a");
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.right-section');

var typed = new Typed("#element", {
  strings: ["Software Developer", "FullStack Developer."],
  typeSpeed: 50,
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("activeNavLink");
});

// Close menu when clicking a nav item
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove("activeNavLink");
    }
  });
});

// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

// Animate on scroll elements
document.querySelectorAll('.about-text, .tech-stack button, .card').forEach((el) => {
  el.classList.add('hide');
  observer.observe(el);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Contact Form Animation Trigger
const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.contact-details').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('show-contact');
        }, index * 200);
      });
      document.querySelector('.right-contact-section').classList.add('show-form');
    }
  });
}, { threshold: 0.3 });

contactObserver.observe(document.querySelector('.contact-section'));

// Form Submission Animation
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message';
  successMessage.textContent = 'Message sent successfully!';
  document.body.appendChild(successMessage);
  
  setTimeout(() => {
    successMessage.classList.add('show');
  }, 50);
  
  setTimeout(() => {
    successMessage.classList.remove('show');
    setTimeout(() => successMessage.remove(), 400);
  }, 3000);
});

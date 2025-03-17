const menuBtn = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".right-section");
const navItems = document.querySelectorAll(".right-section a");

var typed = new Typed("#element", {
  strings: ["Software Developer", "FullStack Developer"],
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

// Select the necessary elements
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");

// Add click event listener to the burger
burger.addEventListener("click", () => {
  // Toggle the 'nav-active' class on the navLinks element
  navLinks.classList.toggle("nav-active");
  // Toggle the 'active' class on the burger element
  burger.classList.toggle("active");
});

// Sticky Navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector("nav ul");
  const serviceCards = document.querySelectorAll(".service-card");
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupClose = document.getElementById("popup-close");

  // Toggle mobile menu
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Open popup with card content
  serviceCards.forEach(card => {
    card.addEventListener("click", () => {
      const content = card.getAttribute("data-popup");
      popupTitle.textContent = content;
      popup.classList.remove("hidden");
    });
  });

  // Close popup
  popupClose.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  // Close popup when clicking outside the content box
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });
});

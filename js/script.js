
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector("nav ul");
  const serviceCards = document.querySelectorAll(".service-card");
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupClose = document.getElementById("popup-close");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  serviceCards.forEach(card => {
    card.addEventListener("click", () => {
      const content = card.getAttribute("data-popup");
      popupTitle.textContent = content;
      popup.classList.remove("hidden");
    });
  });

  popupClose.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".hobby-icon-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("expanded");
    });
  });
});
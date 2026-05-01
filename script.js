// Animate skill bars on scroll
const fills = document.querySelectorAll(".fill");

window.addEventListener("scroll", () => {
  fills.forEach(fill => {
    const rect = fill.getBoundingClientRect();

    if (rect.top < window.innerHeight) {
      fill.style.width = fill.dataset.width;
    }
  });
});
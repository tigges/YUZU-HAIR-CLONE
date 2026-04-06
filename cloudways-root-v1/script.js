const openButtons = document.querySelectorAll(".details-toggle");
const slides = document.querySelectorAll(".review");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);
    if (!target) return;
    const isOpen = target.hasAttribute("open");
    if (isOpen) {
      target.removeAttribute("open");
      button.textContent = "Read details";
    } else {
      target.setAttribute("open", "");
      button.textContent = "Hide details";
    }
  });
});

function setSlide(nextIndex) {
  slideIndex = (nextIndex + slides.length) % slides.length;
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === slideIndex);
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === slideIndex);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => setSlide(index));
});

setInterval(() => {
  setSlide(slideIndex + 1);
}, 5000);

const slides = Array.from(document.querySelectorAll(".hero-slide"));
const dots = Array.from(document.querySelectorAll(".carousel-dot"));
const nextButton = document.querySelector("[data-carousel-next]");
const prevButton = document.querySelector("[data-carousel-prev]");
const reviewCards = Array.from(document.querySelectorAll(".review-card"));
const contactForm = document.getElementById("contact-form");
const submitMessage = document.getElementById("submit-message");

let currentSlide = 0;
let currentReview = 0;

function setSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function setReview(index) {
  currentReview = (index + reviewCards.length) % reviewCards.length;
  reviewCards.forEach((card, i) => {
    card.classList.toggle("active", i === currentReview);
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const next = Number(dot.dataset.slideTo);
    if (Number.isFinite(next)) setSlide(next);
  });
});

if (nextButton) {
  nextButton.addEventListener("click", () => setSlide(currentSlide + 1));
}

if (prevButton) {
  prevButton.addEventListener("click", () => setSlide(currentSlide - 1));
}

setInterval(() => {
  if (slides.length > 1) setSlide(currentSlide + 1);
}, 6500);

setInterval(() => {
  if (reviewCards.length > 1) setReview(currentReview + 1);
}, 5200);

if (contactForm && submitMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitMessage.classList.add("visible");
    contactForm.reset();
    setTimeout(() => {
      submitMessage.classList.remove("visible");
    }, 5000);
  });
}

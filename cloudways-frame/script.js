const menuButtons = document.querySelectorAll(".menu-btn");
const panels = document.querySelectorAll(".panel");
const conceptButtons = document.querySelectorAll(".concept-btn");
const previewBox = document.getElementById("preview-box");

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetPanel = button.dataset.panel;

    menuButtons.forEach((item) => item.classList.remove("active"));
    panels.forEach((panel) => panel.classList.remove("active"));

    button.classList.add("active");
    document
      .querySelector(`.panel[data-panel="${targetPanel}"]`)
      .classList.add("active");
  });
});

conceptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedConcept = button.dataset.concept;
    conceptButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const labels = {
      a: "Sanctuary (Light) selected.",
      b: "Kinetic (Dark) selected.",
      c: "Future concept slot selected.",
    };

    previewBox.innerHTML = `<p>${labels[selectedConcept]}<br />Preview binding ready for next step.</p>`;
  });
});

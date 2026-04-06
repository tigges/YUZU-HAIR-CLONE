const menuButtons = document.querySelectorAll(".menu-btn");
const panels = document.querySelectorAll(".panel");
const conceptButtons = document.querySelectorAll(".concept-btn");
const previewBox = document.getElementById("preview-box");
const panelArea = document.querySelector(".panel-area");
const sidebar = document.querySelector(".sidebar");
const previewArea = document.querySelector(".preview-area");

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

    if (selectedConcept === "a") {
      sidebar.style.display = "";
      panelArea.style.display = "";
      previewArea.style.display = "";
      previewBox.innerHTML =
        "<p>A - Today selected.<br />Planning frame active.</p>";
      return;
    }

    sidebar.style.display = "none";
    panelArea.style.display = "none";
    previewArea.style.display = "";

    if (selectedConcept === "b") {
      previewArea.innerHTML = `
        <h2>B - YUZU V1</h2>
        <p>Live root build embedded from main directory.</p>
        <div class="preview-box" style="padding:0; min-height:420px;">
          <iframe
            src="/"
            title="YUZU V1 Root Preview"
            style="width:100%;height:100%;min-height:420px;border:0;"
            loading="lazy"
          ></iframe>
        </div>
      `;
      return;
    }

    previewArea.innerHTML = `
      <h2>C - Future</h2>
      <p>This page is intentionally empty for now.</p>
      <div class="preview-box"><p>Future workspace placeholder</p></div>
    `;
  });
});

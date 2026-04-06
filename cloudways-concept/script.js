const menuButtons = document.querySelectorAll(".menu-btn");
const panels = document.querySelectorAll(".panel");
const conceptButtons = document.querySelectorAll(".concept-btn");
const panelArea = document.querySelector(".panel-area");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.getElementById("main-content");

function setMenuVisible(visible) {
  sidebar.style.display = visible ? "" : "none";
  panelArea.style.display = visible ? "" : "none";
}

function showSingleFrame() {
  mainContent.innerHTML = `
    <section class="single-frame-wrap">
      <article class="single-frame-card" aria-label="Empty concept frame"></article>
    </section>
  `;
}

function restoreMainLayout() {
  mainContent.innerHTML = `
    <aside class="sidebar" aria-label="Frame navigation">
      <div class="brand-lockup">
        <img
          src="https://static.wixstatic.com/media/4ea19e_3f6bb00813724c3ca3590a1d574e1172~mv2.png/v1/fill/w_234,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0.png"
          alt="Yuzu Hair"
        />
        <p>Design Frame</p>
      </div>
      <nav class="menu" aria-label="Section menu">
        <button class="menu-btn active" type="button" data-panel="toc">
          TOC
        </button>
        <button class="menu-btn" type="button" data-panel="ideas">
          Ideas
        </button>
        <button class="menu-btn" type="button" data-panel="brand">
          Brand Guide
        </button>
      </nav>
    </aside>

    <section class="panel-area">
      <article class="panel active" data-panel="toc">
        <h1>Current Yuzu TOC</h1>
        <p class="panel-intro">
          Full visual TOC map with internal and external links from current
          Yuzu.
        </p>

        <section class="toc-board card">
          <div class="toc-meta">
            <span>Internal pages: 4</span>
            <span>External links: 1</span>
            <span>PDF files: 2</span>
            <span>Social channels: 2</span>
            <span>On-page sections: 7</span>
          </div>
          <div class="toc-root">HOME (ROOT / HOMEPAGE)</div>
          <div class="toc-columns">
            <article>
              <h3>Terms & Conditions</h3>
              <p class="toc-tag internal">Internal</p>
              <ul>
                <li>
                  <a href="https://www.yuzuhairandbeauty.london/terms-and-conditions" target="_blank" rel="noreferrer">terms-and-conditions</a>
                </li>
                <li>Patch test policy (PDF)</li>
                <li>Cancel window</li>
                <li>Refund / redo</li>
              </ul>
            </article>
            <article>
              <h3>Book Now</h3>
              <p class="toc-tag external">External</p>
              <ul>
                <li>
                  <a href="https://phorest.com/book/salons/yuzuhairandbeauty" target="_blank" rel="noreferrer">Phorest booking platform</a>
                </li>
              </ul>
            </article>
            <article>
              <h3>Offers</h3>
              <p class="toc-tag internal">Internal</p>
              <ul>
                <li>
                  <a href="https://www.yuzuhairandbeauty.london/o-f-f-e-r-s-1" target="_blank" rel="noreferrer">o-f-f-e-r-s-1</a>
                </li>
                <li>Tue/Thu colour campaign</li>
                <li>Wed blow dry campaign</li>
                <li>Refer a friend</li>
              </ul>
            </article>
            <article>
              <h3>Price List</h3>
              <p class="toc-tag pdf">PDF</p>
              <ul>
                <li>
                  <a href="https://www.yuzuhairandbeauty.london/_files/ugd/4ea19e_77e8f05ffc1d4d6192fd0cda1dfc6ad2.pdf" target="_blank" rel="noreferrer">Main menu PDF</a>
                </li>
                <li>Patch test info PDF</li>
              </ul>
            </article>
            <article>
              <h3>Join The Team</h3>
              <p class="toc-tag internal">Internal</p>
              <ul>
                <li>
                  <a href="https://www.yuzuhairandbeauty.london/items" target="_blank" rel="noreferrer">items</a>
                </li>
                <li>Senior stylists</li>
                <li>Stylists</li>
                <li>Models</li>
              </ul>
            </article>
            <article>
              <h3>Contact</h3>
              <p class="toc-tag onpage">On-page</p>
              <ul>
                <li>Contact form</li>
                <li>Phone: 020 8840 2244</li>
                <li>Address: 22 The Green, London W5 5DA</li>
                <li>Opening hours</li>
              </ul>
            </article>
          </div>
          <div class="toc-sections">
            <strong>On-page sections:</strong>
            Hero / Patch notice / Book online CTA / Price list / Exclusive
            offers / Join our team / Contact & footer.
          </div>
        </section>
      </article>

      <article class="panel" data-panel="ideas">
        <h1>Benchmarks, Improvements, Concepts</h1>
        <p class="panel-intro">
          Carry-over ideas to guide the next Yuzu website iteration.
        </p>

        <div class="stack">
          <section class="card">
            <h2>Benchmark references</h2>
            <ul class="link-list">
              <li><a href="https://windlelondon.com/pages/hair-salon#!">Windle London</a></li>
              <li><a href="https://larrykinghair.com/">Larry King Hair</a></li>
              <li><a href="https://enasalon.com/">Ena Salon</a></li>
              <li><a href="https://taylortaylorlondon.com/">Taylor Taylor London</a></li>
              <li><a href="https://www.saltsalonlondon.com/">SALT Salon</a></li>
              <li><a href="https://davidasalonny.com/">Davida Salon</a></li>
              <li><a href="https://palms-salon.com/">Palms Salon</a></li>
            </ul>
          </section>

          <section class="card">
            <h2>Priority improvements for Yuzu</h2>
            <ol>
              <li>Rebuild hero with clear value proposition + primary booking CTA.</li>
              <li>Add service architecture cards with clear categories and “from” pricing.</li>
              <li>Improve trust proof with testimonials, press, and stylist specialties.</li>
              <li>Move patch testing into compact alert format, keep visible not dominant.</li>
              <li>Add sticky mobile booking action and streamlined nav flow.</li>
              <li>Create stronger “Why Yuzu” brand pillar section.</li>
            </ol>
          </section>

          <section class="card">
            <h2>Concept directions</h2>
            <ul>
              <li><strong>A - Today:</strong> current planning and baseline content.</li>
              <li><strong>B - YUZU V1:</strong> first redesign build (to be created next).</li>
              <li><strong>C - Future:</strong> reserved concept space (currently empty).</li>
            </ul>
          </section>

          <section class="card">
            <h2>Reference Document</h2>
            <p>Shared planning doc for Yuzu redesign decisions and working notes.</p>
            <p>
              <a href="https://docs.google.com/document/d/15mjk26OJyXab_47iZIYo5o_JOXGGpM1uGXJg8NpigRM/edit?usp=sharing" target="_blank" rel="noreferrer">Open Google Doc</a>
            </p>
          </section>
        </div>
      </article>

      <article class="panel" data-panel="brand">
        <h1>Current Yuzu Brand Guide Snapshot</h1>
        <p class="panel-intro">
          Baseline visual identity derived from the current live Yuzu website.
        </p>

        <section class="card">
          <h2>Logo and identity tone</h2>
          <div class="logo-row">
            <img class="brand-logo" src="https://static.wixstatic.com/media/4ea19e_3f6bb00813724c3ca3590a1d574e1172~mv2.png/v1/fill/w_234,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0.png" alt="Yuzu logo" />
            <p>Elegant, natural-luxury and understated. Typography balance: serif headline tone + clean sans readability.</p>
          </div>
        </section>

        <section class="card">
          <h2>Core color palette (current-site aligned)</h2>
          <div class="swatches">
            <div class="swatch"><span style="background: #f3f1ea"></span><p>#F3F1EA</p></div>
            <div class="swatch"><span style="background: #1c2d24"></span><p>#1C2D24</p></div>
            <div class="swatch"><span style="background: #34463f"></span><p>#34463F</p></div>
            <div class="swatch"><span style="background: #d8b66d"></span><p>#D8B66D</p></div>
            <div class="swatch"><span style="background: #23372e"></span><p>#23372E</p></div>
            <div class="swatch"><span style="background: #d8d2c3"></span><p>#D8D2C3</p></div>
          </div>
        </section>

        <section class="card">
          <h2>Photography style cues</h2>
          <div class="image-grid">
            <img src="https://static.wixstatic.com/media/11062b_404969162f164bf79cac18475881d4a2~mv2.jpg/v1/fill/w_1920,h_980,al_c,q_85,enc_avif,quality_auto/11062b_404969162f164bf79cac18475881d4a2~mv2.jpg" alt="Yuzu hero atmosphere" />
            <img src="https://static.wixstatic.com/media/4ea19e_dd77dbe9f0cd4a63bab55d83b7bb6fc8~mv2.png/v1/fill/w_814,h_920,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/asia%20darkgreen.png" alt="Yuzu editorial portrait style" />
            <img src="https://static.wixstatic.com/media/4ea19e_06614ed8fa1d4a75a56705e5d7b93d8d~mv2.png/v1/fill/w_828,h_794,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7.png" alt="Yuzu promo style" />
          </div>
          <p class="note">Visual direction: soft light, warm neutral tones, texture-rich imagery, and premium-but-friendly presentation.</p>
        </section>
      </article>
    </section>
  `;

  bindMenuTabs();
}

function bindMenuTabs() {
  const refreshedMenuButtons = document.querySelectorAll(".menu-btn");
  const refreshedPanels = document.querySelectorAll(".panel");

  refreshedMenuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetPanel = button.dataset.panel;

      refreshedMenuButtons.forEach((item) => item.classList.remove("active"));
      refreshedPanels.forEach((panel) => panel.classList.remove("active"));

      button.classList.add("active");
      document
        .querySelector(`.panel[data-panel="${targetPanel}"]`)
        .classList.add("active");
    });
  });
}

bindMenuTabs();

conceptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedConcept = button.dataset.concept;
    conceptButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    if (selectedConcept === "a") {
      restoreMainLayout();
      setMenuVisible(true);
      return;
    }

    setMenuVisible(false);

    if (selectedConcept === "b") {
      showSingleFrame();
      return;
    }

    showSingleFrame();
  });
});

restoreMainLayout();
setMenuVisible(true);

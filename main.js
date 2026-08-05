// Footer year
document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const siteHeader = document.getElementById("siteHeader");
if (navToggle && siteHeader) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// Project filter (projects.html only)
const filterBar = document.getElementById("filterBar");
const projectGrid = document.getElementById("projectGrid");
const emptyState = document.getElementById("emptyState");

if (filterBar && projectGrid) {
  const buttons = filterBar.querySelectorAll(".filter-btn");
  const cards = projectGrid.querySelectorAll(".project-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      cards.forEach(card => {
        const match = filter === "all" || card.dataset.category === filter;
        card.style.display = match ? "" : "none";
        if (match) visibleCount++;
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? "block" : "none";
      }
    });
  });
}

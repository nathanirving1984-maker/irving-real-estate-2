/* ============================================================
   LISTINGS GRID — renders cards from LISTINGS_DATA and wires
   up the Active / Pending / Sold filter buttons.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("[data-listings-grid]");
  const filterButtons = document.querySelectorAll(".filter-btn");
  if (!grid) return;

  function render(filter) {
    const items = filter === "All"
      ? LISTINGS_DATA
      : LISTINGS_DATA.filter((l) => l.status === filter);

    grid.innerHTML = items.length
      ? items.map(listingCardTemplate).join("")
      : `<div class="empty-state">No listings match this filter right now.</div>`;
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      render(btn.dataset.filter);
    });
  });

  render("All");
});

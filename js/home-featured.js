/* ============================================================
   FEATURED LISTINGS — shows the first 3 listings from
   LISTINGS_DATA on the homepage. Order in listings-data.js
   controls what appears here.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("[data-featured-grid]");
  if (!grid) return;
  grid.innerHTML = LISTINGS_DATA.slice(0, 3).map(listingCardTemplate).join("");
});

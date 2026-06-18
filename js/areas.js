/* ============================================================
   SERVICE AREAS — renders county/town lists from
   SERVICE_AREAS_DATA
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector("[data-areas-grid]");
  if (!wrap) return;

  wrap.innerHTML = Object.entries(SERVICE_AREAS_DATA).map(([county, towns]) => `
    <div class="areas-col">
      <h3>${county}</h3>
      <ul>${towns.map((t) => `<li>${t}</li>`).join("")}</ul>
    </div>
  `).join("");
});

/* ============================================================
   TESTIMONIALS — renders cards from TESTIMONIALS_DATA
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("[data-testimonials-grid]");
  if (!grid) return;

  grid.innerHTML = TESTIMONIALS_DATA.map((t) => `
    <div class="testimonial-card">
      ${t.isSample ? '<span class="eyebrow">Sample</span>' : ""}
      <p class="testimonial-quote">&ldquo;${t.quote}&rdquo;</p>
      <div>
        <div class="testimonial-name">${t.name}</div>
        <div class="testimonial-name" style="color:var(--color-ink-muted); text-transform:none; font-weight:400;">${t.context}</div>
      </div>
    </div>
  `).join("");
});

/* ============================================================
   MARKET UPDATES — renders post rows from MARKET_POSTS_DATA
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("[data-posts-list]");
  if (!list) return;

  list.innerHTML = MARKET_POSTS_DATA.map((post) => `
    <div class="post-row">
      <div class="post-date">${post.date}</div>
      <div>
        ${post.isSample ? '<span class="eyebrow">Sample post</span>' : ""}
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
      </div>
    </div>
  `).join("");
});

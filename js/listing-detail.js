/* ============================================================
   LISTING DETAIL — reads ?id=<listing-id> from the URL and
   renders that listing's full detail view, including a simple
   click-to-swap photo gallery.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("[data-listing-detail]");
  if (!root) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const listing = id ? getListingById(id) : null;

  if (!listing) {
    root.innerHTML = `
      <div class="empty-state">
        We couldn't find that listing. <a class="text-link" href="listings.html">Back to all listings</a>
      </div>`;
    document.title = "Listing not found — Irving Real Estate";
    return;
  }

  document.title = `${listing.addressLine}, ${listing.city} — Irving Real Estate`;

  const hasPhotos = listing.images && listing.images.length > 0;
  const mainPhoto = hasPhotos
    ? `<img id="gallery-main-img" src="${listing.images[0]}" alt="${listing.addressLine}" style="width:100%;height:100%;object-fit:cover;">`
    : `${PLACEHOLDER_PHOTO_SVG}<span>Photos coming soon</span>`;

  const thumbs = hasPhotos
    ? listing.images.map((src, i) => `
        <button data-src="${src}" class="${i === 0 ? "is-active" : ""}" aria-label="View photo ${i + 1}">
          <img src="${src}" alt="">
        </button>`).join("")
    : "";

  const subject = encodeURIComponent(`Inquiry: ${listing.addressLine}, ${listing.city}`);
  const body = encodeURIComponent(`Hi Nathan,\n\nI'd like more information about ${listing.addressLine}, ${listing.city}.\n\nThanks,`);

  root.innerHTML = `
    <a class="back-link" href="listings.html">&larr; Back to all listings</a>
    <div class="listing-detail-grid">
      <div>
        ${listing.isSample ? '<span class="eyebrow">Sample listing — for demonstration</span>' : ""}
        <div class="photo-placeholder gallery-main">${mainPhoto}</div>
        ${thumbs ? `<div class="gallery-thumbs">${thumbs}</div>` : ""}
      </div>
      <div>
        <span class="listing-price" style="font-size:1.6rem;display:block;margin-bottom:6px;">${formatPrice(listing.price)}</span>
        <h1 style="font-size:1.6rem;margin-bottom:4px;">${listing.addressLine}</h1>
        <p style="margin-bottom:18px;">${listing.city}</p>
        <table class="spec-table">
          <tr><td>Status</td><td>${listing.status}</td></tr>
          <tr><td>Bedrooms</td><td>${listing.beds}</td></tr>
          <tr><td>Bathrooms</td><td>${listing.baths}</td></tr>
          <tr><td>Square feet</td><td>${listing.sqft.toLocaleString()}</td></tr>
          <tr><td>Lot size</td><td>${listing.lotSize}</td></tr>
          <tr><td>Year built</td><td>${listing.yearBuilt}</td></tr>
        </table>
        <div class="detail-panel">
          <h3 style="margin-bottom:14px;">About this property</h3>
          <p style="margin-bottom:20px;">${listing.description}</p>
          <a class="btn btn--primary btn--block" href="mailto:nathanirving1984@gmail.com?subject=${subject}&body=${body}">Ask about this property</a>
        </div>
      </div>
    </div>
  `;

  const mainImgWrapper = root.querySelector(".gallery-main");
  root.querySelectorAll(".gallery-thumbs button").forEach((btn) => {
    btn.addEventListener("click", () => {
      root.querySelectorAll(".gallery-thumbs button").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      mainImgWrapper.innerHTML = `<img src="${btn.dataset.src}" alt="${listing.addressLine}" style="width:100%;height:100%;object-fit:cover;">`;
    });
  });
});

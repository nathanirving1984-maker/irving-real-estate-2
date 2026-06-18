/* ============================================================
   SHARED HELPERS
   ============================================================ */

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function getListingById(id) {
  return LISTINGS_DATA.find((listing) => listing.id === id);
}

function statusClass(status) {
  return "status-" + status.toLowerCase();
}

const PLACEHOLDER_PHOTO_SVG = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
    <rect x="3" y="6" width="18" height="13" rx="1.5"/>
    <circle cx="12" cy="12.5" r="3.4"/>
    <path d="M8.5 6L9.7 4h4.6l1.2 2"/>
  </svg>
`;

function listingCardTemplate(listing) {
  const photo = listing.images && listing.images.length
    ? `<img src="${listing.images[0]}" alt="${listing.addressLine}" style="width:100%;height:100%;object-fit:cover;">`
    : `${PLACEHOLDER_PHOTO_SVG}<span>Photos coming soon</span>`;

  return `
    <article class="card listing-card" data-status="${listing.status}">
      ${listing.isSample ? '<span class="badge-sample">Sample listing</span>' : ""}
      <span class="status-tag ${statusClass(listing.status)}">${listing.status}</span>
      <div class="photo-placeholder">${photo}</div>
      <div class="listing-body">
        <span class="listing-price">${formatPrice(listing.price)}</span>
        <span class="listing-address">${listing.addressLine}<br><span class="city">${listing.city}</span></span>
        <div class="listing-specs">
          <span>${listing.beds} bd</span>
          <span>${listing.baths} ba</span>
          <span>${listing.sqft.toLocaleString()} sqft</span>
        </div>
        <a class="card-link" href="listing.html?id=${listing.id}">View details →</a>
      </div>
    </article>
  `;
}

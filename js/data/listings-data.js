/* ============================================================
   LISTINGS DATA
   ------------------------------------------------------------
   This is the only file you need to edit to add, update, or
   remove listings. Both the Listings page and each listing's
   detail page read from this array automatically.

   HOW TO ADD A NEW LISTING:
   1. Copy one of the objects below (from { to },).
   2. Paste it as a new entry in the array.
   3. Give it a unique "id" (no spaces — e.g. "123-vineyard-ln").
   4. Fill in the real address, price, specs, and description.
   5. Set "status" to "Active", "Pending", or "Sold".
   6. Set "isSample" to false to remove the "Sample listing" badge.
   ============================================================ */

const LISTINGS_DATA = [
  {
    id: "sample-vineyard-lane",
    isSample: true,
    status: "Active",
    price: 1485000,
    addressLine: "123 Vineyard Lane",
    city: "Sonoma, CA",
    beds: 3,
    baths: 2,
    sqft: 2150,
    lotSize: "0.6 acres",
    yearBuilt: 2004,
    description:
      "Replace this with your listing description — for example, the layout, recent updates, lot features, and what makes this property and its setting distinctive. Two to three short paragraphs works well.",
    images: [],
  },
  {
    id: "sample-creekside-court",
    isSample: true,
    status: "Active",
    price: 975000,
    addressLine: "48 Creekside Court",
    city: "Petaluma, CA",
    beds: 4,
    baths: 3,
    sqft: 2480,
    lotSize: "0.25 acres",
    yearBuilt: 1998,
    description:
      "Replace this with your listing description. Mention nearby schools, walkability, or neighborhood character if relevant to this property.",
    images: [],
  },
  {
    id: "sample-ridgeview-drive",
    isSample: true,
    status: "Pending",
    price: 2150000,
    addressLine: "910 Ridgeview Drive",
    city: "Mill Valley, CA",
    beds: 4,
    baths: 4,
    sqft: 3120,
    lotSize: "0.8 acres",
    yearBuilt: 2015,
    description:
      "Replace this with your listing description. Pending listings are a good place to highlight a quick sale story or note that you're taking backup offers, if true.",
    images: [],
  },
  {
    id: "sample-orchard-street",
    isSample: true,
    status: "Sold",
    price: 1120000,
    addressLine: "27 Orchard Street",
    city: "Sebastopol, CA",
    beds: 3,
    baths: 2,
    sqft: 1890,
    lotSize: "0.4 acres",
    yearBuilt: 1985,
    description:
      "Replace this with a short note about the sale — list price vs. sale price, days on market, or a quick line about the buyers.",
    images: [],
  },
];

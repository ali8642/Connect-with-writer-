/**
 * A map of book genres to their available cover images.
 * The paths are relative to the /public directory.
 */
export const BOOK_COVERS = {
  Business: [
    "/assets/Business/bus-1.png",
    "/assets/Business/bus-2.png",
    "/assets/Business/bus-3.png",
    "/assets/Business/bus-4.png",
    "/assets/Business/bus-5.png",
    "/assets/Business/bus-6.png",
    "/assets/Business/bus-7.png",
    "/assets/Business/bus-8.png",
    "/assets/Business/bus-9.png",
  ],
  Fiction: [
    "/assets/Fiction/fic-1.png",
    "/assets/Fiction/fic-2.png",
    "/assets/Fiction/fic-3.png",
    "/assets/Fiction/fic-4.png",
    "/assets/Fiction/fic-5.png",
    "/assets/Fiction/fic-6.png",
    "/assets/Fiction/fic-7.png",
    "/assets/Fiction/fic-8.png",
  ],
  Memoir: [
    "/assets/Memoir/mem-1.png",
    "/assets/Memoir/mem-2.png",
    "/assets/Memoir/mem-3.png",
    "/assets/Memoir/mem-4.png",
    "/assets/Memoir/mem-5.png",
    "/assets/Memoir/mem-6.png",
    "/assets/Memoir/mem-7.png",
    "/assets/Memoir/mem-8.png",
    "/assets/Memoir/mem-9.png",
  ],
  "Self-Help": [
    "/assets/Self-Help/self-1.png",
    "/assets/Self-Help/self-2.png",
    "/assets/Self-Help/self-3.png",
    "/assets/Self-Help/self-4.png",
    "/assets/Self-Help/self-5.png",
    "/assets/Self-Help/self-6.png",
    "/assets/Self-Help/self-7.png",
    "/assets/Self-Help/self-8.png",
    "/assets/Self-Help/self-9.png",
  ],
  Thriller: [
    "/assets/Thriller/thrill-1.png",
    "/assets/Thriller/thrill-2.png",
    "/assets/Thriller/thrill-3.png",
    "/assets/Thriller/thrill-4.png",
    "/assets/Thriller/thrill-5.png",
  ],
};

// Genres used elsewhere in the site's book data that don't have their own
// folder — mapped to the closest existing one so nothing breaks. Edit freely.
const GENRE_FALLBACK = {
  Romance: "Fiction",
  Mystery: "Thriller",
};

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Deterministically picks one cover image for a given genre + title, so the
 * same book always shows the same image on every render — not a random one
 * each time the page loads. Returns null if there's truly no image available
 * for this genre, so the caller can fall back to the CSS placeholder design.
 */
export function getBookCover(genre, seed) {
  const folder = BOOK_COVERS[genre] ? genre : GENRE_FALLBACK[genre];
  const images = folder ? BOOK_COVERS[folder] : null;
  if (!images || images.length === 0) return null;
  const index = hashString(seed || genre) % images.length;
  return images[index];
}

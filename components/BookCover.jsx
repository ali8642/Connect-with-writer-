import Image from "next/image";
import { getBookCover } from "@/lib/bookCovers";
import "../app/globals.css";
/**
 * Drop-in replacement for the CSS-drawn ".book" gradient placeholder.
 * Falls back to the original gradient design automatically if no real photo
 * exists yet for a given genre — nothing ever breaks or shows blank.
 */
export default function BookCover({ genre, title, author, gradient, className = "" }) {
  const src = getBookCover(genre, title);

  if (src) {
    return (
      <div className={`bookCover-parent ${className}`}>
        <div className="book__cover book__cover--photo">
          <Image
            alt={`${title} book cover`}
            fill
            sizes="(max-width: 768px) 45vw, 260px"
            src={src}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={`book ${className}`} style={{ "--book-bg": gradient }}>
        <div className="book__cover">
          <span className="book__genre">{genre}</span>
          <span className="book__title">{title}</span>
          <span className="book__author">{author}</span>
        </div>
      </div>
    );
  }
}

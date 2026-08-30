import BookCover from "./BookCover";

export default function PortfolioSlider({
  eyebrow,
  title,
  items,
  secondsPerItem = 4,
}) {
  // Doubling the items for a seamless loop
  const marqueeItems = [...items, ...items];
  const duration = Math.max(items.length, 1) * secondsPerItem;

  return (
    <div className="container">
      <div className="slider-head">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="portfolio-marquee">
        <div
          className="portfolio-marquee__track"
          style={{ "--marquee-duration": `${duration}s` }}
        >
          {marqueeItems.map((book, i) => (
            <div className="slide" key={`${book.title}-${i}`}>
              <BookCover
                author={book.author}
                className="book--sm"
                genre={book.genre}
                gradient={book.gradient}
                title={book.title}
              />
              <span>
                {book.title}
                <small>{book.genre}</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import BookCover from "@/components/BookCover";
import TiltCard from "@/components/TiltCard";

export default function HomeHero() {
  return (
    <>
      <section className="home-hero">
        {/* Background video — decorative, sits behind all content */}
        <video
          aria-hidden="true"
          autoPlay
          className="home-hero__video"
          loop
          muted
          playsInline
          tabIndex={-1}
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay — above video, below content */}
        <div aria-hidden="true" className="home-hero__overlay" />

        {/* Hero content */}
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow">Your story. Our expertise.</p>
            <h1>From the first spark to a book with your name on it.</h1>
            <p>Connect with Writer brings writers, editors, designers, and publishing support together to help authors move their books forward—with a clear process and a human team.</p>
            <div className="cta-row">
              <Link className="btn btn--primary" href="/contact">Start your book <svg><use href="#i-arrow-right" /></svg></Link>
              <a className="home-text-link" href="#portfolio">Explore our work <svg><use href="#i-arrow-right" /></svg></a>
            </div>
          </div>
          <div aria-label="A selection of books across genres" className="home-hero__art">
            <span className="home-hero__label home-hero__label--one">Writing</span>
            <span className="home-hero__label home-hero__label--two">Publishing</span>
            <span className="home-hero__label home-hero__label--three">Editing</span>
            <span aria-hidden="true" className="interactive-circle home-hero__circle" />
            <TiltCard className="home-hero__book home-hero__book--back">
              <BookCover author="L. Marquez" genre="Romance" gradient="linear-gradient(155deg,#5a2a2a,#280f0f)" title="Wildfire Hearts" />
            </TiltCard>
            <TiltCard className="home-hero__book home-hero__book--front">
              <BookCover author="R. Calder" genre="Fiction" gradient="linear-gradient(155deg,#3a4a4a,#16201f)" title="The Last Lighthouse" />
            </TiltCard>
          </div>
        </div>
      </section>

      <section aria-label="Services across the author journey" className="home-trust-strip">
        <div className="container">
          <span>Writing</span>
          <span>Editing</span>
          <span>Publishing</span>
          <span>Design</span>
          <span>Marketing</span>
        </div>
      </section>
    </>
  );
}

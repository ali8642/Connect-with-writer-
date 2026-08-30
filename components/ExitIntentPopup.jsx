"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SESSION_KEY = "cww-exit-offer-seen";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;
    function handleMouseOut(event) {
      if (event.clientY > 0 || event.relatedTarget) return;
      window.sessionStorage.setItem(SESSION_KEY, "true");
      setIsOpen(true);
    }
    function handleKeyDown(event) { if (event.key === "Escape") setIsOpen(false); }
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("keydown", handleKeyDown);
    return () => { document.removeEventListener("mouseout", handleMouseOut); document.removeEventListener("keydown", handleKeyDown); };
  }, []);

  if (!isOpen) return null;
  return <div aria-labelledby="exit-offer-title" aria-modal="true" className="exit-offer" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }} role="dialog">
    <div className="exit-offer__card">
      <button aria-label="Close offer" className="exit-offer__close" onClick={() => setIsOpen(false)} type="button"><svg><use href="#i-close" /></svg></button>
      <span className="exit-offer__eyebrow">Before you go</span>
      <svg aria-hidden="true" className="exit-offer__mark"><use href="#i-book-mark" /></svg>
      <h2 id="exit-offer-title">Start with a conversation, not a commitment.</h2>
      <p>Tell us where your book idea is today, and we&apos;ll help you understand the next step.</p>
      <Link className="btn btn--primary" href="/contact" onClick={() => setIsOpen(false)}>Book a free consultation <svg><use href="#i-arrow-right" /></svg></Link>
    </div>
  </div>;
}

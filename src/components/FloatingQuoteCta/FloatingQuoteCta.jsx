import React, { useEffect, useRef, useState } from "react";
import "./FloatingQuoteCta.css";

const FloatingQuoteCta = () => {
  const [isCompact, setIsCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY || 0;

    const handleScroll = () => {
      const currentY = window.scrollY || 0;
      const isScrollingDown = currentY > lastScrollY.current;
      setIsCompact(isScrollingDown && currentY > 10);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const target =
      document.getElementById("request-quote") ||
      document.querySelector('[data-quote-target="true"]');
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`floating-quote${isCompact ? " is-compact" : ""}`}
      onClick={handleClick}
      aria-label="Request a Quote"
    >
      Request a Quote
    </button>
  );
};

export default FloatingQuoteCta;

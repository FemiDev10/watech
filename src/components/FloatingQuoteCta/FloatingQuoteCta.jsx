import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FloatingQuoteCta.css";

const FloatingQuoteCta = () => {
  const [isCompact, setIsCompact] = useState(false);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();

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
    navigate("/contact");
  };

  return (
    <button
      type="button"
      className={`floating-quote${isCompact ? " is-compact" : ""}`}
      onClick={handleClick}
      aria-label="Contact Us"
    >
      Contact Us
    </button>
  );
};

export default FloatingQuoteCta;

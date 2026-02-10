import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./FloatingCTA.css";

const FloatingCTA = () => {
  const ctaRef = useRef(null);
  const linkRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cta = ctaRef.current;
    const link = linkRef.current;
    if (!cta || !link) {
      return undefined;
    }

    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) {
      return undefined;
    }

    const OFFSET_X = 28;
    const OFFSET_Y = 28;
    const EDGE_PADDING = 16;
    const hoverRef = { current: false };

    const driftTarget = cta.querySelector(".floating-cta__drift");
    const setDriftPaused = (paused) => {
      if (!driftTarget) return;
      driftTarget.classList.toggle("is-paused", paused);
    };

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let targetX = pointerX;
    let targetY = pointerY;
    let currentX = pointerX;
    let currentY = pointerY;
    let rafId = 0;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const handleMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    };

    const handleEnter = () => {
      hoverRef.current = true;
    };

    const handleLeave = () => {
      hoverRef.current = false;
    };

    const tick = () => {
      const rect = cta.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = pointerX - centerX;
      const dy = pointerY - centerY;
      const distance = Math.hypot(dx, dy);

      const isFrozen = distance < 160 || hoverRef.current;
      setDriftPaused(isFrozen);

      if (!isFrozen) {
        const maxX = window.innerWidth - rect.width - EDGE_PADDING;
        const maxY = window.innerHeight - rect.height - EDGE_PADDING;
        targetX = clamp(pointerX + OFFSET_X, EDGE_PADDING, maxX);
        targetY = clamp(pointerY + OFFSET_Y, EDGE_PADDING, maxY);
      }

      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      cta.style.setProperty("--cta-x", `${currentX}px`);
      cta.style.setProperty("--cta-y", `${currentY}px`);

      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener("pointermove", handleMove, { passive: true });
    link.addEventListener("mouseenter", handleEnter);
    link.addEventListener("mouseleave", handleLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("pointermove", handleMove);
      link.removeEventListener("mouseenter", handleEnter);
      link.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/quote");
  };

  const ShipIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 11V4h6v7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 13l8-3 8 3v6c-2 1-4 2-8 2s-6-1-8-2v-6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 19c2 1 4 2 8 2s6-1 8-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div ref={ctaRef} className="floating-cta">
      <a
        ref={linkRef}
        href="#faqs"
        className="floating-cta__link"
        data-cursor="hover"
        role="button"
        aria-label="Request a Quote"
        onClick={handleClick}
      >
        <span className="floating-cta__drift">
          <span className="floating-cta__badge">
            REQUEST A QUOTE
            <span className="floating-cta__ship-icon" aria-hidden="true">
              <ShipIcon />
            </span>
          </span>
          <span className="floating-cta__pole" aria-hidden="true" />
          <span className="floating-cta__marker" aria-hidden="true">
            <span className="floating-cta__marker-ring floating-cta__marker-ring--one" />
            <span className="floating-cta__marker-ring floating-cta__marker-ring--two" />
            <span className="floating-cta__marker-dot" />
          </span>
        </span>
      </a>
    </div>
  );
};

export default FloatingCTA;

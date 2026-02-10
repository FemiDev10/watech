import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) {
      return undefined;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) {
      return undefined;
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;

    const updateHoverState = (x, y) => {
      const el = document.elementFromPoint(x, y);
      const hoverEl = el?.closest('a, button, [data-cursor="hover"]');
      const dragEl = el?.closest('[data-cursor="drag"]');
      ring.classList.toggle("is-hover", Boolean(hoverEl));
      ring.classList.toggle("is-drag", Boolean(dragEl));
    };

    const handleMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      updateHoverState(targetX, targetY);
    };

    const tick = () => {
      const dx = targetX - ringX;
      const dy = targetY - ringY;
      ringX += dx * 0.12;
      ringY += dy * 0.12;
      ring.style.setProperty("--cursor-x", `${ringX}px`);
      ring.style.setProperty("--cursor-y", `${ringY}px`);
      rafRef.current = requestAnimationFrame(tick);
    };

    document.addEventListener("pointermove", handleMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div className="custom-cursor__dot" ref={dotRef} />
      <div className="custom-cursor__ring" ref={ringRef}>
        <span className="custom-cursor__label">DRAG</span>
      </div>
    </div>
  );
};

export default CustomCursor;

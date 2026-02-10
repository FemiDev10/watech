import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "@studio-freight/lenis";
import "./index.css";
import App from "./App.jsx";

// INIT LENIS (GLOBAL)
const lenis = new Lenis({
  lerp: 0.05,
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1.4,
});

// expose for debugging
window.__lenis = lenis;

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Introduction.css";
import Reveal from "./Reveal";

const Introduction = () => {
  const navigate = useNavigate();

  const handleViewServices = () => {
    const target = document.getElementById("services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="introduction">
      <div className="introduction__inner">
        <Reveal>
          <span className="introduction__eyebrow">INTRODUCTION</span>
          <h2 className="introduction__headline">
            <span className="introduction__headline-strong">
              Watech Links Limited provides professional marine navigation,
              communication, and safety system support
            </span>{" "}
            <span className="introduction__headline-muted">
              for offshore, oil &amp; gas, logistics, and government operations.
            </span>
          </h2>
          <div className="introduction__actions">
            <button
              type="button"
              className="introduction__button introduction__button--primary"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
            <button
              type="button"
              className="introduction__button introduction__button--secondary"
              onClick={handleViewServices}
            >
              View Services
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Introduction;

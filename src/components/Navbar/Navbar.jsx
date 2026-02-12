import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoDark from "../../assets/logo.png";

const LINKS = [
  { label: "Home", sectionId: "hero" },
  { label: "Services", sectionId: "services" },
  { label: "Systems", sectionId: "systems" },
  { label: "FAQs", sectionId: "faqs" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => scrollToSection(sectionId), 80);
      return;
    }
    scrollToSection(sectionId);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <img
            src={logoDark}
            alt="Watech Links Limited"
            className="navbar__logo"
          />
        </Link>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={`/#${link.sectionId}`}
              className="navbar__link"
              onClick={(event) => {
                event.preventDefault();
                goToSection(link.sectionId);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__cta"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>

        {!isMenuOpen && (
          <button
            type="button"
            className="navbar__toggle"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={handleToggle}
          >
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
          </button>
        )}
      </div>

      <div
        className={`navbar__menu${isMenuOpen ? " navbar__menu--open" : ""}`}
      >
        <div className="navbar__menu-header">
          <Link to="/" className="navbar__menu-brand" onClick={handleClose}>
            <img
              src={logoDark}
              alt="Watech Links Limited"
              className="navbar__logo"
            />
          </Link>
          <button
            type="button"
            className="navbar__close"
            aria-label="Close menu"
            onClick={handleClose}
          >
            ×
          </button>
        </div>
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={`/#${link.sectionId}`}
            className="navbar__menu-link"
            onClick={(event) => {
              event.preventDefault();
              goToSection(link.sectionId);
              handleClose();
            }}
          >
            {link.label}
          </a>
        ))}
        <button
          type="button"
          className="navbar__menu-cta"
          onClick={() => {
            navigate("/contact");
            handleClose();
          }}
        >
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Navbar;

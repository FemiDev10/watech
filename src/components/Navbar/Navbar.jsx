import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logowhite.png";

const LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Systems", href: "#systems" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">
          <img src={logo} alt="Watech Links Limited" className="navbar__logo" />
        </div>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <button type="button" className="navbar__cta">
          Request a Quote
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
          <div className="navbar__menu-brand">
            <img src={logo} alt="Watech Links Limited" className="navbar__logo" />
          </div>
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
            href={link.href}
            className="navbar__menu-link"
            onClick={handleClose}
          >
            {link.label}
          </a>
        ))}
        <button type="button" className="navbar__menu-cta" onClick={handleClose}>
          Request a Quote
        </button>
      </div>
    </header>
  );
};

export default Navbar;

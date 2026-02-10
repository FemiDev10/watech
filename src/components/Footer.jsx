import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import instagram from "../assets/socials/fe_instagram.png";
import facebook from "../assets/socials/logos_facebook.png";
import twitterX from "../assets/socials/ri_twitter-x-fill.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__col footer__brand">
            <img src={logo} alt="Watech Links Limited" className="footer__logo" />
            <p className="footer__text">
              Watech Links Limited delivers dependable marine navigation,
              communication, and safety system support for mission-critical
              operations.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li>
                <a href="#hero" className="footer__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="footer__link">
                  Services
                </a>
              </li>
              <li>
                <a href="#systems" className="footer__link">
                  Systems
                </a>
              </li>
              <li>
                <a href="#capabilities" className="footer__link">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="/contact" className="footer__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Company Info</h4>
            <div className="footer__info">
              <div className="footer__info-block">
                <span className="footer__label">Head Office</span>
                <span>29 Unity Road, Lagos Island, Lagos.</span>
              </div>
              <div className="footer__info-block">
                <span className="footer__label">Branch Office</span>
                <span>15 Marine Drive, Port Harcourt, Rivers.</span>
              </div>
              <div className="footer__info-block">
                <span className="footer__label">Email Address</span>
                <span>info@watechlinks.com</span>
              </div>
              <div className="footer__info-block">
                <span className="footer__label">Phone Number</span>
                <span>+234 801 234 5678, +234 812 345 6789</span>
              </div>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Follow Us</h4>
            <div className="footer__socials">
              <img src={instagram} alt="Instagram" className="footer__icon" />
              <img src={facebook} alt="Facebook" className="footer__icon" />
              <img src={twitterX} alt="X" className="footer__icon" />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          © 2025 Watech Links Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

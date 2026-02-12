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
            <h4 className="footer__heading">Head Office</h4>
            <div className="footer__info">
              <div className="footer__info-block">
                <span>WATECH LINKS LIMITED</span>
                <span>No. 20 Ede Street</span>
                <span>Ogbum-Na-Abali</span>
                <span>Port Harcourt, Nigeria</span>
              </div>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Branch Office</h4>
            <div className="footer__info">
              <div className="footer__info-block">
                <span>No. 1 Conoil Service Center</span>
                <span>Amadi-Ama</span>
                <span>Port Harcourt, Nigeria</span>
              </div>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <div className="footer__info">
              <div className="footer__info-block">
                <span className="footer__label">Phone</span>
                <a href="tel:08030948732" className="footer__link">
                  080 3094 8732
                </a>
                <a href="tel:08027448781" className="footer__link">
                  080 2744 8781
                </a>
              </div>
              <div className="footer__info-block">
                <span className="footer__label">Email</span>
                <a href="mailto:watechlinks2003@gmail.com" className="footer__link">
                  watechlinks2003@gmail.com
                </a>
              </div>
            </div>
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

import React from "react";
import "./PartnersMarquee.css";
import Reveal from "./Reveal";
import candsLogo from "../assets/marquee/c&s.png";
import multiplanLogo from "../assets/marquee/multiplan.png";
import navyLogo from "../assets/marquee/navy.png";
import starzLogo from "../assets/marquee/starz.png";
import tamposeLogo from "../assets/marquee/tampose.png";

const partners = [
  { name: "TAMROSE NIGERIA LIMITED", logo: tamposeLogo },
  { name: "C&I LEASING", logo: candsLogo },
  { name: "MULITPLAN NIG LIMITED", logo: multiplanLogo },
  { name: "STRICKLAND NIG LIMITED", logo: null },
  { name: "NEXT OIL", logo: null },
  { name: "NIGERIA NAVY", logo: navyLogo },
  { name: null, logo: starzLogo },
];

const PartnersMarquee = () => {
  return (
    <section className="partners-marquee">
      <Reveal>
        <div className="partners-marquee__track">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="partners-marquee__item"
              aria-hidden={index >= partners.length}
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name || "Partner logo"}
                  className="partners-marquee__logo"
                />
              ) : null}
              {partner.name ? (
                <span className="partners-marquee__name">{partner.name}</span>
              ) : null}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default PartnersMarquee;

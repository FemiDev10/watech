import React from "react";
import "./FacilitiesPage.css";
import { motion } from "framer-motion";
import heroBg from "../../assets/hero-bg.png";
import marineNav from "../../assets/marine-nav-support.png";
import offshoreSupport from "../../assets/offshore-technical-support.png";
import systemsNav from "../../assets/electronic-systems-nav.png";
import radar from "../../assets/services/radar.png";
import echoSounder from "../../assets/services/echo-sounder.png";
import gyroCompass from "../../assets/services/gyro-compass.png";
import gps from "../../assets/services/gps.png";
import vhfRadio from "../../assets/services/vhf-radio.png";
import hfRadio from "../../assets/services/hf-radio.png";
import inmarsat from "../../assets/services/inmarsat.png";
import ais from "../../assets/services/automatic-iden-system.png";
import fireAlarm from "../../assets/services/fire-alarm-panel.png";
import autoPilot from "../../assets/services/auto-pilot.png";
import magneticCompass from "../../assets/services/magnetic-compass.png";

const IMAGES = [
  { src: heroBg, alt: "Marine operations" },
  { src: marineNav, alt: "Marine navigation support" },
  { src: offshoreSupport, alt: "Offshore technical support" },
  { src: systemsNav, alt: "Electronic systems navigation" },
  { src: radar, alt: "Radar systems" },
  { src: echoSounder, alt: "Echo sounder systems" },
  { src: gyroCompass, alt: "Gyro compass systems" },
  { src: gps, alt: "GPS systems" },
  { src: vhfRadio, alt: "VHF radio systems" },
  { src: hfRadio, alt: "HF radio systems" },
  { src: inmarsat, alt: "Inmarsat communications" },
  { src: ais, alt: "AIS systems" },
  { src: fireAlarm, alt: "Fire alarm panel" },
  { src: autoPilot, alt: "Auto pilot systems" },
  { src: magneticCompass, alt: "Magnetic compass" },
];

const FacilitiesPage = () => {
  return (
    <motion.main
      className="facilities-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="facilities-page__inner">
        <header className="facilities-page__header">
          <h1 className="facilities-page__title">Our Facilities</h1>
          <p className="facilities-page__subtitle">
            A quick look at our equipment, systems, and offshore support operations.
          </p>
        </header>

        <section className="facilities-page__grid" aria-label="Facilities gallery">
          {IMAGES.map((tile) => (
            <figure key={tile.alt} className="facilities-page__tile">
              <img src={tile.src} alt={tile.alt} />
            </figure>
          ))}
        </section>
      </div>
    </motion.main>
  );
};

export default FacilitiesPage;

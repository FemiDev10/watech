import React from "react";
import "./CapabilitiesSection.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Reveal from "./Reveal";
import marineNavSupport from "../assets/marine-nav-support.png";
import offshoreTechnicalSupport from "../assets/offshore-technical-support.png";
import electronicSystemsNav from "../assets/electronic-systems-nav.png";
import equipmentServicing from "../assets/capabilities/equipment_servicing.png";
import offshoreOperations from "../assets/capabilities/offshore_operations.png";
import inspectionFieldWork from "../assets/capabilities/Overlay.png";

const CARDS = [
  {
    image: marineNavSupport,
    label: "Marine Navigation Support",
  },
  {
    image: offshoreTechnicalSupport,
    label: "Offshore Technical Support",
  },
  {
    image: electronicSystemsNav,
    label: "Electronic Systems Installation",
  },
  {
    image: equipmentServicing,
    label: "Equipment Servicing & Maintenance",
  },
  {
    image: offshoreOperations,
    label: "Offshore Operations Support",
  },
  {
    image: inspectionFieldWork,
    label: "Inspection & Field Work",
  },
];

const CapabilitiesSection = () => {
  const navigate = useNavigate();
  const visibleCards = CARDS;

  return (
    <section className="capabilities" id="capabilities">
      <div className="capabilities__inner">
        <Reveal>
          <div className="capabilities__header">
            <div className="capabilities__header-left">
              <span className="capabilities__eyebrow">IN THE FIELD</span>
              <h2 className="capabilities__title">Explore Our Work</h2>
            </div>
            <div className="capabilities__header-right">
              <p className="capabilities__text">
                Highlights from offshore operations, equipment servicing,
                installations, and field support delivered by our team.
              </p>
              <button
                type="button"
                className="capabilities__button"
                onClick={() => navigate("/work")}
              >
                <span>View Photos</span>
              </button>
            </div>
          </div>
        </Reveal>

        <motion.div
          className="capabilities__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {visibleCards.map((card) => (
            <motion.article
              key={card.label}
              className="capabilities__card"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: "easeOut" },
                },
              }}
            >
              <img
                src={card.image}
                alt={card.label}
                className="capabilities__image"
              />
              <div className="capabilities__overlay" />
              <span className="capabilities__chip">{card.label}</span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;

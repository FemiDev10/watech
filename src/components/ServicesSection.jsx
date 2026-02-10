import React, { useEffect, useState } from "react";
import "./ServicesSection.css";
import radarIcon from "../assets/services/radar.png";
import echoSounderIcon from "../assets/services/echo-sounder.png";
import gyroCompassIcon from "../assets/services/gyro-compass.png";
import magneticCompassIcon from "../assets/services/magnetic-compass.png";
import gpsIcon from "../assets/services/gps.png";
import autoPilotIcon from "../assets/services/auto-pilot.png";
import vhfRadioIcon from "../assets/services/vhf-radio.png";
import hfRadioIcon from "../assets/services/hf-radio.png";
import inmarsatIcon from "../assets/services/inmarsat.png";
import aisIcon from "../assets/services/automatic-iden-system.png";
import fireAlarmIcon from "../assets/services/fire-alarm-panel.png";
import ssaIcon from "../assets/services/ssa.png";
import {
  ClipboardCheck,
  RadioTower,
  Wrench,
  HardHat,
  ShieldCheck,
  LifeBuoy,
  FileSearch,
} from "lucide-react";

const SERVICES_DATA = {
  tabs: [
    { key: "all", label: "All Services" },
    { key: "navigation", label: "Navigation Services" },
    { key: "communication", label: "Communication Services" },
    { key: "safety", label: "Safety & Compliance Services" },
    { key: "offshore", label: "Offshore Support" },
  ],
  items: [
    {
      id: 1,
      title: "Radar",
      description: "Installation, calibration, and repair of marine radar systems.",
      category: "navigation",
      icon: radarIcon,
    },
    {
      id: 2,
      title: "Echo Sounder",
      description: "Depth system calibration and maintenance.",
      category: "navigation",
      icon: echoSounderIcon,
    },
    {
      id: 3,
      title: "Gyro Compass",
      description: "Commissioning, alignment, and performance verification.",
      category: "navigation",
      icon: gyroCompassIcon,
    },
    {
      id: 4,
      title: "Magnetic Compass",
      description: "Swinging and deviation correction support.",
      category: "navigation",
      icon: magneticCompassIcon,
    },
    {
      id: 5,
      title: "GPS",
      description: "Installation, diagnostics, and sensor integration.",
      category: "navigation",
      icon: gpsIcon,
    },
    {
      id: 6,
      title: "Auto Pilot",
      description: "Setup, tuning, and steering control verification.",
      category: "navigation",
      icon: autoPilotIcon,
    },
    {
      id: 7,
      title: "VHF Radio",
      description: "GMDSS radio servicing and compliance checks.",
      category: "communication",
      icon: vhfRadioIcon,
    },
    {
      id: 8,
      title: "HF Radio",
      description: "Long-range radio servicing and antenna tuning.",
      category: "communication",
      icon: hfRadioIcon,
    },
    {
      id: 9,
      title: "Inmarsat C",
      description: "Terminal setup, activation, and testing.",
      category: "communication",
      icon: inmarsatIcon,
    },
    {
      id: 10,
      title: "Automatic Identification System (AIS)",
      description: "Installation, programming, and performance verification.",
      category: "communication",
      icon: aisIcon,
    },
    {
      id: 11,
      title: "Fire Alarm Panel",
      description: "Panel installation, testing, and maintenance support.",
      category: "safety",
      icon: fireAlarmIcon,
    },
    {
      id: 12,
      title: "Ship Security Assessment (SSA)",
      description: "Security assessment aligned with IMO/ISPS requirements.",
      category: "safety",
      icon: ssaIcon,
    },
    {
      id: 13,
      title: "GMDSS Setup & Compliance",
      description: "Setup support and certification readiness checks.",
      category: "safety",
      icon: null,
      Icon: ShieldCheck,
    },
    {
      id: 14,
      title: "Life-Saving Appliances Inspection",
      description: "Inspection support for safety appliances and systems.",
      category: "safety",
      icon: null,
      Icon: LifeBuoy,
    },
    {
      id: 15,
      title: "Safety Radio Survey",
      description: "Survey support and documentation assistance.",
      category: "safety",
      icon: null,
      Icon: FileSearch,
    },
    {
      id: 16,
      title: "Offshore Navigation Audit",
      description: "Operational reviews and audit support.",
      category: "offshore",
      icon: null,
      Icon: ClipboardCheck,
    },
    {
      id: 17,
      title: "Offshore Communications Support",
      description: "Field support for comms systems and testing.",
      category: "offshore",
      icon: null,
      Icon: RadioTower,
    },
    {
      id: 18,
      title: "Onboard Technical Support & Troubleshooting",
      description: "On-site diagnostics and repair assistance.",
      category: "offshore",
      icon: null,
      Icon: Wrench,
    },
    {
      id: 19,
      title: "Installation Supervision",
      description: "Supervision for new installs and upgrades.",
      category: "offshore",
      icon: null,
      Icon: HardHat,
    },
  ],
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const filtered =
    activeTab === "all"
      ? SERVICES_DATA.items
      : SERVICES_DATA.items.filter((item) => item.category === activeTab);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
    } else {
      media.addListener(update);
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", update);
      } else {
        media.removeListener(update);
      }
    };
  }, []);

  useEffect(() => {
    setIsExpanded(false);
  }, [activeTab]);

  const visibleItems =
    isMobile && !isExpanded ? filtered.slice(0, 3) : filtered;

  return (
    <section className="services" id="services">
      <div className="services__inner">
        <header className="services__header">
          <h2 className="services__title">Marine &amp; Offshore Services</h2>
          <p className="services__subtitle">
            Comprehensive technical services for navigation, communication, and
            safety systems.
          </p>
        </header>

        <div className="services__tabs" role="tablist">
          {SERVICES_DATA.tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`services__tab${
                activeTab === tab.key ? " active" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="services__grid">
          {visibleItems.map((item) => (
            <article key={item.id} className="services__card interactiveCard">
              {item.icon ? (
                <div className="services__icon">
                  <img src={item.icon} alt="" aria-hidden="true" />
                </div>
              ) : item.Icon ? (
                <div className="services__icon services__icon--placeholder" aria-hidden="true">
                  <item.Icon size={22} strokeWidth={1.5} />
                </div>
              ) : (
                <div className="services__icon services__icon--placeholder" aria-hidden="true">
                  <span />
                </div>
              )}
              <h3 className="services__card-title">{item.title}</h3>
              <p className="services__card-text">{item.description}</p>
            </article>
          ))}
        </div>

        {isMobile && filtered.length > 3 ? (
          <div className="services__toggle">
            <button
              type="button"
              className="services__toggle-button"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {isExpanded ? "View less" : "View more"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ServicesSection;

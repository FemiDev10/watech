import React, { useEffect, useState } from "react";
import "./SystemsCatalogue.css";

const SYSTEMS_DATA = {
  tabs: [
    { key: "all", label: "All Systems" },
    { key: "navigation", label: "Navigation Systems" },
    { key: "communication", label: "Communication Systems" },
    { key: "safety", label: "Safety Systems" },
  ],
  items: [
    {
      id: 1,
      title: "Marine Radar System",
      description: "Advanced radar for navigation and collision avoidance.",
      category: "navigation",
    },
    {
      id: 2,
      title: "Gyrocompass / Heading Sensor System",
      description: "Stable heading reference for bridge systems.",
      category: "navigation",
    },
    {
      id: 3,
      title: "Autopilot & Steering Control System",
      description: "Automatic steering control and tuning support.",
      category: "navigation",
    },
    {
      id: 4,
      title: "GNSS Positioning System",
      description: "Reliable positioning for routing and reporting.",
      category: "navigation",
    },
    {
      id: 5,
      title: "Echo Sounder / Depth System",
      description: "Depth sounding and seabed profiling support.",
      category: "navigation",
    },
    {
      id: 6,
      title: "ECDIS System (Chart & Sensor Integration)",
      description: "Chart management and sensor integration support.",
      category: "navigation",
    },
    {
      id: 7,
      title: "AIS Transponder System",
      description: "Automatic identification and vessel tracking.",
      category: "communication",
    },
    {
      id: 8,
      title: "VHF GMDSS System",
      description: "GMDSS communications for coastal operations.",
      category: "communication",
    },
    {
      id: 9,
      title: "MF/HF GMDSS System",
      description: "Long-range voice and DSC communications.",
      category: "communication",
    },
    {
      id: 10,
      title: "Inmarsat-C / Safety Satellite System",
      description: "Satellite safety messaging and tracking.",
      category: "communication",
    },
    {
      id: 11,
      title: "NAVTEX Receiver System",
      description: "Maritime safety information reception.",
      category: "communication",
    },
    {
      id: 12,
      title: "Fire Detection & Alarm System",
      description: "Detection panels with zone monitoring.",
      category: "safety",
    },
    {
      id: 13,
      title: "SSAS (Ship Security Alert System)",
      description: "Security alert system configuration and support.",
      category: "safety",
    },
    {
      id: 14,
      title: "EPIRB / SART Distress Systems",
      description: "Emergency distress alerting systems.",
      category: "safety",
    },
    {
      id: 15,
      title: "VDR / S-VDR System",
      description: "Voyage data recording and compliance support.",
      category: "safety",
    },
    {
      id: 16,
      title: "BNWAS System",
      description: "Bridge navigational watch alarm systems.",
      category: "safety",
    },
  ],
};

const SystemsCatalogue = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const filtered =
    activeTab === "all"
      ? SYSTEMS_DATA.items
      : SYSTEMS_DATA.items.filter((item) => item.category === activeTab);

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
    <section className="catalogue" id="systems">
      <div className="catalogue__inner">
        <header className="catalogue__header">
          <h2 className="catalogue__title">Systems &amp; Products Catalogue</h2>
          <p className="catalogue__subtitle">
            Installation, repair, and servicing of marine technical systems.
          </p>
        </header>

        <div className="catalogue__tabs" role="tablist">
          {SYSTEMS_DATA.tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`catalogue__tab${
                activeTab === tab.key ? " active" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="catalogue__grid">
          {visibleItems.map((item) => (
            <article key={item.id} className="catalogue__card interactiveCard">
              <h3 className="catalogue__card-title">{item.title}</h3>
              <p className="catalogue__card-text">{item.description}</p>
            </article>
          ))}
        </div>

        {isMobile && filtered.length > 3 ? (
          <div className="catalogue__toggle">
            <button
              type="button"
              className="catalogue__toggle-button"
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

export default SystemsCatalogue;

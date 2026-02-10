import React, { useState } from "react";
import "./FaqAndNewsletter.css";
import viewMoreIcon from "../assets/view-more-icon.png";
import goIcon from "../assets/goicon.png";
import handsImage from "../assets/hands.png";
import Reveal from "./Reveal";

const FAQS = [
  {
    question: "What services does Watech Links Limited provide?",
    answer:
      "Watech Links Limited provides marine navigation, communication, safety, and offshore technical support services. This includes installation, servicing, maintenance, and support for systems such as Radar, AIS, GPS, VHF/HF Radio, Inmarsat C, Fire Alarm Panels, and Ship Security Assessment (SSA).",
  },
  {
    question: "Do you sell marine equipment directly?",
    answer:
      "We primarily provide installation, servicing, and technical support. However, we can recommend and supply approved equipment through trusted partners depending on project requirements.",
  },
  {
    question: "How can I request a quote or make an enquiry?",
    answer:
      "Click ‘Request a Quote’ on the website, or contact us with your requirements. We’ll review your needs and respond with next steps, timelines, and pricing.",
  },
  {
    question: "Which industries do you support?",
    answer:
      "We support offshore and marine operators, oil & gas, logistics and shipping, and government/port-related operations.",
  },
  {
    question: "Do you provide on-site support?",
    answer:
      "Yes. We provide on-site installation and technical support depending on project location and scope. Remote support is also available for diagnostics and guidance.",
  },
  {
    question: "What locations do you operate in?",
    answer:
      "We support operations across Nigeria and can accommodate offshore/coastal projects based on scheduling and project requirements.",
  },
  {
    question: "How fast can you respond to support requests?",
    answer:
      "Response times depend on urgency and location, but we prioritize mission-critical issues and aim to acknowledge requests within 24 hours.",
  },
];

const FaqAndNewsletter = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const handleViewMore = () => {
    setShowAll((prev) => {
      const next = !prev;
      if (!next && openIndex >= 4) {
        setOpenIndex(0);
      }
      return next;
    });
  };

  const visibleFaqs = showAll ? FAQS : FAQS.slice(0, 4);

  return (
    <section className="faq-newsletter" id="faqs">
      <div className="faq">
        <div className="faq__inner">
          <Reveal>
            <div className="faq__left">
              <span className="faq__eyebrow">FAQs</span>
              <h2 className="faq__title">
                Everything You Need to Know, All in One Place
              </h2>
              <p className="faq__subtitle">
                Still have questions? We’ve got clear answers to help you make the
                right decision.
              </p>
              <button type="button" className="faq__view-more" onClick={handleViewMore}>
                <span>{showAll ? "View Less" : "View More"}</span>
                <img src={viewMoreIcon} alt="" className="faq__view-icon" />
              </button>
            </div>
          </Reveal>

          <Reveal>
            <div className="faq__right">
              {visibleFaqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.question}
                    className={`faq__item${isOpen ? " faq__item--open" : ""}`}
                  >
                    <button
                      type="button"
                      className="faq__question"
                      onClick={() => handleToggle(index)}
                    >
                      <span>{item.question}</span>
                      <span className="faq__toggle">{isOpen ? "–" : "+"}</span>
                    </button>
                    <div className="faq__answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="newsletter">
        <Reveal delay={0.12}>
          <div className="newsletter__inner">
          <div className="newsletter__content">
            <div className="newsletter__pills">
              <span className="newsletter__pill newsletter__pill--ghost">
                Subscribe
              </span>
              <span className="newsletter__pill newsletter__pill--solid">
                Newsletter
              </span>
            </div>
            <h2 className="newsletter__title">
              Let us Help You Build a Safer, Stronger Future.
            </h2>
            <div className="newsletter__input-wrap">
              <input
                type="email"
                className="newsletter__input"
                placeholder="Enter your email..."
              />
              <button type="button" className="newsletter__submit">
                <img src={goIcon} alt="Submit" />
              </button>
            </div>
          </div>
          <div className="newsletter__image">
            <img src={handsImage} alt="Hands" />
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FaqAndNewsletter;

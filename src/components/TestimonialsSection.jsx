import React from "react";
import "./TestimonialsSection.css";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import test1 from "../assets/test/test1.png";
import test2 from "../assets/test/test2.png";
import test3 from "../assets/test/test3.png";

const TESTIMONIALS = [
  {
    quote:
      "Watech Links delivered beyond expectations. During our vessel drydock period, their team handled the navigation systems upgrade and GMDSS compliance with impressive precision. Downtime was minimized and documentation was handled professionally. We now rely on them as our go-to technical partner.",
    name: "Engr. Tunde Okafor",
    role: "Fleet Technical Superintendent",
    company: "Atlantic Marine Logistics Ltd.",
    avatar: test1,
  },
  {
    quote:
      "From radar calibration to offshore communications support, Watech’s engineers demonstrated deep technical expertise and quick response time. Their ability to troubleshoot complex electronic faults offshore saved us significant operational costs.",
    name: "Capt. Ibrahim Hassan",
    role: "Marine Operations Manager",
    company: "BlueWave Offshore Services",
    avatar: test2,
  },
  {
    quote:
      "Safety compliance is critical in our operations, and Watech’s support during our life-saving appliances inspection and safety radio survey was thorough and well-documented. Their professionalism and structured reporting process gave us confidence during regulatory audits.",
    name: "Mrs. Adaeze Nwosu",
    role: "HSE & Compliance Lead",
    company: "TransOcean Energy Support",
    avatar: test3,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <Reveal>
          <div className="testimonials__header">
            <div className="testimonials__header-left">
              <span className="testimonials__eyebrow">Testimonials</span>
              <h2 className="testimonials__title">Trusted by Businesses Like Yours</h2>
            </div>
            <div className="testimonials__header-right">
              <p className="testimonials__text">
                Hear from operations teams that trust Watech to deliver in the field.
              </p>
            </div>
          </div>
        </Reveal>

        <motion.div
          className="testimonials__grid"
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
          {TESTIMONIALS.map((item) => (
            <motion.article
              key={item.name}
              className="testimonials__card interactive-card"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: "easeOut" },
                },
              }}
            >
              <p className="testimonials__quote">{item.quote}</p>
              <div className="testimonials__person">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="testimonials__avatar"
                />
                <div className="testimonials__person-meta">
                  <div className="testimonials__name">{item.name}</div>
                  <div className="testimonials__role">
                    {item.role}
                    {" | "}
                    {item.company}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

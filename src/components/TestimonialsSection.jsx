import React from "react";
import "./TestimonialsSection.css";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import test1 from "../assets/test/test1.png";
import test2 from "../assets/test/test2.png";
import test3 from "../assets/test/test3.png";
import viewMoreIcon from "../assets/view-more-icon.png";

const TESTIMONIALS = [
  {
    quote:
      "Their team helped us customize a plan that fits our growing business. Filing a claim was quick and seamless.",
    name: "Nina Hartanto",
    role: "CEO TranzGlobal",
    avatar: test1,
  },
  {
    quote:
      "They understood the complexities of our tech startup and gave us peace of mind from day one.",
    name: "Rama Kusuma",
    role: "Co-Founder BitHive",
    avatar: test2,
  },
  {
    quote:
      "We’ve been with them for 5 years. Their service is top notch and always ready when we need support.",
    name: "Dewi Ananda",
    role: "Director of Operations",
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
                Hear from companies that trust us to keep their operations secure.
              </p>
              <button type="button" className="testimonials__button">
                <span>View More</span>
                <img src={viewMoreIcon} alt="" className="testimonials__button-icon" />
              </button>
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
                  <div className="testimonials__role">{item.role}</div>
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

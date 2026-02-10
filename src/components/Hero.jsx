import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import avatar from "../assets/avatar.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <div className="hero__left">
          <motion.h1
            className="hero__headline"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            Marine Navigation &amp; Offshore Technical Support
          </motion.h1>
          <motion.p
            className="hero__subtext"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Tailored corporate insurance solutions designed to safeguard your
            operations, people, and future.
          </motion.p>
          <motion.button
            type="button"
            className="hero__cta"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            Get a Free Quote
          </motion.button>
        </div>
        <motion.div
          className="hero__right"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="hero__pill">
            <img src={avatar} alt="Avatar" className="hero__pill-image" />
          </div>
          <div className="hero__card">
            We&apos;re committed to delivering reliable, tailored insurance
            solutions in a trusted and professional environment.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

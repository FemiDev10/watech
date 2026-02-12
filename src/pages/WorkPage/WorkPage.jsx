import React from "react";
import "./WorkPage.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import one from "../../assets/explore_our_work/1.png";
import two from "../../assets/explore_our_work/2.png";
import three from "../../assets/explore_our_work/3.png";
import four from "../../assets/explore_our_work/4.png";
import five from "../../assets/explore_our_work/5.png";
import six from "../../assets/explore_our_work/6.png";
import seven from "../../assets/explore_our_work/7.png";
import eight from "../../assets/explore_our_work/8.png";
import nine from "../../assets/explore_our_work/9.png";

const WORK_IMAGES = [
  { src: one, alt: "Offshore work highlight 1" },
  { src: two, alt: "Offshore work highlight 2" },
  { src: three, alt: "Offshore work highlight 3" },
  { src: four, alt: "Offshore work highlight 4" },
  { src: five, alt: "Offshore work highlight 5" },
  { src: six, alt: "Offshore work highlight 6" },
  { src: seven, alt: "Offshore work highlight 7" },
  { src: eight, alt: "Offshore work highlight 8" },
  { src: nine, alt: "Offshore work highlight 9" },
];

const WorkPage = () => {
  const navigate = useNavigate();

  return (
    <motion.main
      className="work-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="work-page__inner">
        <button
          type="button"
          className="work-page__back"
          onClick={() => navigate(-1)}
        >
          Back
        </button>

        <header className="work-page__header">
          <h1 className="work-page__title">Explore Our Work</h1>
          <p className="work-page__subtitle">
            A photo highlight of our recent projects, offshore support,
            installations, and inspections.
          </p>
        </header>

        <section className="work-page__grid" aria-label="Project highlights">
          {WORK_IMAGES.map((image, index) => (
            <motion.figure
              key={image.alt}
              className="work-page__card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.03 }}
            >
              <img src={image.src} alt={image.alt} />
            </motion.figure>
          ))}
        </section>
      </div>
    </motion.main>
  );
};

export default WorkPage;

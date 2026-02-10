import React, { useMemo, useState } from "react";
import "./ContactPage.css";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Reveal from "../../components/Reveal";
import instagram from "../../assets/socials/fe_instagram.png";
import facebook from "../../assets/socials/logos_facebook.png";
import twitterX from "../../assets/socials/ri_twitter-x-fill.png";

const ContactPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field) => (event) => {
    const next = event.target.value;
    setValues((prev) => ({ ...prev, [field]: next }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = "Required";
    if (!values.email.trim() || !values.email.includes("@")) nextErrors.email = "Invalid";
    if (!values.message.trim()) nextErrors.message = "Required";
    return nextErrors;
  };

  const mailBody = useMemo(() => {
    const lines = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Message: ${values.message}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [values]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const subject = encodeURIComponent("WATECH Contact Message");
    window.location.href = `mailto:watechlinks2003@gmail.com?subject=${subject}&body=${mailBody}`;
    setValues({ name: "", email: "", message: "" });
    setShowSuccess(true);
  };

  return (
    <motion.main
      className="contact-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="contact-page__inner">
        <header className="contact-page__header">
          <h1 className="contact-page__title">Contact Us</h1>
          <p className="contact-page__subtitle">
            We’re available through multiple channels.
          </p>
        </header>

        <div className="contact-page__grid">
          <Reveal>
            <section className="contact-page__card">
              <form className="contact-page__form" onSubmit={handleSubmit}>
                <label className="contact-page__field">
                  <span>Name *</span>
                  <input
                    type="text"
                    value={values.name}
                    onChange={handleChange("name")}
                    className={errors.name ? "has-error" : ""}
                  />
                </label>
                <label className="contact-page__field">
                  <span>Email *</span>
                  <input
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    className={errors.email ? "has-error" : ""}
                  />
                </label>
                <label className="contact-page__field">
                  <span>Message *</span>
                  <textarea
                    rows="5"
                    value={values.message}
                    onChange={handleChange("message")}
                    className={errors.message ? "has-error" : ""}
                  />
                </label>
                <div className="contact-page__actions">
                  <button type="submit" className="contact-page__primary">
                    Send Message
                  </button>
                </div>
              </form>
            </section>
          </Reveal>

          <div className="contact-page__side">
            <Reveal>
              <section className="contact-page__card contact-page__card--info">
                <h3>Contact Information</h3>
                <div className="contact-page__info">
                  <div>
                    <span>Phone</span>
                    <strong>080 3094 8732</strong>
                  </div>
                  <div>
                    <span>Phone 2</span>
                    <strong>080 2744 8781</strong>
                  </div>
                  <div>
                    <span>Email</span>
                    <strong>watechlinks2003@gmail.com</strong>
                  </div>
                  <div>
                    <span>WhatsApp</span>
                    <strong>080 3094 8732</strong>
                  </div>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="contact-page__card contact-page__card--links">
                <h3>Connect With Us</h3>
                <div className="contact-page__links">
                  <a className="contact-page__link-row" href="tel:08030948732">
                    <span className="contact-page__link-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M6.6 3.8c.4-.4 1-.5 1.5-.2l2.4 1.4c.5.3.7.9.5 1.5l-.8 2.2a1.4 1.4 0 0 1-1.5.9l-2-.3c.8 1.7 2.2 3.2 4 4l.3-2a1.4 1.4 0 0 1 .9-1.5l2.2-.8c.6-.2 1.2 0 1.5.5l1.4 2.4c.3.5.2 1.1-.2 1.5l-1.1 1.1c-.9.9-2.2 1.2-3.4.8a17.4 17.4 0 0 1-7.3-7.3c-.4-1.2-.1-2.5.8-3.4l1.1-1.1Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="contact-page__link-text">
                      <span>Phone 1</span>
                      <strong>080 3094 8732</strong>
                    </span>
                  </a>
                  <a className="contact-page__link-row" href="tel:08027448781">
                    <span className="contact-page__link-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M6.6 3.8c.4-.4 1-.5 1.5-.2l2.4 1.4c.5.3.7.9.5 1.5l-.8 2.2a1.4 1.4 0 0 1-1.5.9l-2-.3c.8 1.7 2.2 3.2 4 4l.3-2a1.4 1.4 0 0 1 .9-1.5l2.2-.8c.6-.2 1.2 0 1.5.5l1.4 2.4c.3.5.2 1.1-.2 1.5l-1.1 1.1c-.9.9-2.2 1.2-3.4.8a17.4 17.4 0 0 1-7.3-7.3c-.4-1.2-.1-2.5.8-3.4l1.1-1.1Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="contact-page__link-text">
                      <span>Phone 2</span>
                      <strong>080 2744 8781</strong>
                    </span>
                  </a>
                  <a className="contact-page__link-row" href="mailto:watechlinks2003@gmail.com">
                    <span className="contact-page__link-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm8 7 8-5H4l8 5Zm-8 1v4h16v-4l-8 5-8-5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="contact-page__link-text">
                      <span>Email</span>
                      <strong>watechlinks2003@gmail.com</strong>
                    </span>
                  </a>
                  <a
                    className="contact-page__link-row"
                    href="https://wa.me/2348030948732"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="contact-page__link-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M12 4a8 8 0 0 1 6.8 12.2l.8 3.8-3.9-.8A8 8 0 1 1 12 4Zm0 2a6 6 0 0 0-5.2 9l.3.6-.5 2.2 2.2-.5.6.3A6 6 0 1 0 12 6Zm2.8 6.9c-.2-.1-1.1-.5-1.3-.6-.2-.1-.4-.1-.6.1l-.5.6c-.1.2-.3.2-.5.1a5 5 0 0 1-2.4-2.1c-.2-.3.2-.6.5-1 0-.2 0-.3-.1-.4l-.6-1.4c-.2-.4-.5-.3-.7-.3h-.6c-.2 0-.5.1-.7.3-.2.2-.9.8-.9 2s.9 2.3 1 2.4c.1.1 1.8 2.7 4.3 3.7.6.2 1.1.4 1.5.5.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="contact-page__link-text">
                      <span>WhatsApp</span>
                      <strong>Chat on WhatsApp</strong>
                    </span>
                  </a>
                  <div className="contact-page__socials">
                    <a href="#" aria-label="Instagram">
                      <img src={instagram} alt="Instagram" />
                    </a>
                    <a href="#" aria-label="X">
                      <img src={twitterX} alt="X" />
                    </a>
                    <a href="#" aria-label="Facebook">
                      <img src={facebook} alt="Facebook" />
                    </a>
                  </div>
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showSuccess ? (
          <motion.div
            className="contact-page__success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="contact-page__success-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
            >
              <div className="contact-page__success-check">
                <span />
              </div>
              <h3>Message queued</h3>
              <p>We’ll get back to you shortly.</p>
              <div className="contact-page__success-actions">
                <button
                  type="button"
                  className="contact-page__secondary"
                  onClick={() => setShowSuccess(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="contact-page__primary"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.main>
  );
};

export default ContactPage;

import React, { useMemo, useState } from "react";
import "./QuotePage.css";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const QuotePage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field) => (event) => {
    const next = event.target.value;
    setValues((prev) => ({ ...prev, [field]: next }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.fullName.trim()) nextErrors.fullName = "Required";
    if (!values.email.trim() || !values.email.includes("@")) nextErrors.email = "Invalid";
    if (!values.category.trim()) nextErrors.category = "Required";
    if (!values.message.trim()) nextErrors.message = "Required";
    return nextErrors;
  };

  const mailBody = useMemo(() => {
    const lines = [
      `Full Name: ${values.fullName}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || "N/A"}`,
      `Service Category: ${values.category}`,
      `Message: ${values.message}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [values]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setShake(
        Object.keys(nextErrors).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
      );
      setTimeout(() => setShake({}), 450);
      return;
    }

    const subject = encodeURIComponent("WATECH Quote Request");
    window.location.href = `mailto:watechlinks2003@gmail.com?subject=${subject}&body=${mailBody}`;
    setShowSuccess(true);
  };

  return (
    <motion.main
      className="quote-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="quote-page__inner">
        <header className="quote-page__header">
          <h1 className="quote-page__title">Request a Quote</h1>
          <p className="quote-page__subtitle">
            Tell us what you need and we’ll respond quickly.
          </p>
        </header>

        <div className="quote-page__grid">
          <section className="quote-page__card">
            <form className="quote-page__form" onSubmit={handleSubmit}>
              <motion.label
                className="quote-page__field"
                animate={shake.fullName ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
                transition={{ duration: 0.35 }}
              >
                <span>Full Name *</span>
                <input
                  type="text"
                  value={values.fullName}
                  onChange={handleChange("fullName")}
                  className={errors.fullName ? "has-error" : ""}
                />
              </motion.label>
              <motion.label
                className="quote-page__field"
                animate={shake.email ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
                transition={{ duration: 0.35 }}
              >
                <span>Email *</span>
                <input
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  className={errors.email ? "has-error" : ""}
                />
              </motion.label>
              <label className="quote-page__field">
                <span>Phone</span>
                <input
                  type="tel"
                  value={values.phone}
                  onChange={handleChange("phone")}
                />
              </label>
              <motion.label
                className="quote-page__field"
                animate={shake.category ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
                transition={{ duration: 0.35 }}
              >
                <span>Service Category *</span>
                <select
                  value={values.category}
                  onChange={handleChange("category")}
                  className={errors.category ? "has-error" : ""}
                >
                  <option value="">Select a category</option>
                  <option>Marine Navigation</option>
                  <option>Offshore Technical Support</option>
                  <option>Communications</option>
                  <option>Safety &amp; Compliance</option>
                  <option>Systems Installation</option>
                  <option>Other</option>
                </select>
              </motion.label>
              <motion.label
                className="quote-page__field quote-page__field--full"
                animate={shake.message ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
                transition={{ duration: 0.35 }}
              >
                <span>Message *</span>
                <textarea
                  rows="4"
                  value={values.message}
                  onChange={handleChange("message")}
                  className={errors.message ? "has-error" : ""}
                />
              </motion.label>
              <div className="quote-page__actions">
                <button type="submit" className="quote-page__primary">
                  Send Request
                </button>
              </div>
            </form>
          </section>

          <motion.aside
            className="quote-page__illustration"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <div className="quote-page__illustration-card">
              <div className="quote-page__illustration-float">
                <svg
                  viewBox="0 0 360 280"
                  role="img"
                  aria-label="Marine illustration"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="270" cy="70" r="26" opacity="0.4" />
                    <circle cx="270" cy="70" r="44" opacity="0.2" />
                    <path d="M66 204h228l-22 28H90l-24-28Z" />
                    <path d="M110 120h80v72h-80z" />
                    <path d="M150 120V86h32v34" />
                    <path d="M210 146h40l24 22h-64z" />
                    <path d="M82 232h196" />
                    <path d="M120 152h40" />
                    <path d="M120 168h40" />
                    <path d="M210 104l20-16 20 16" />
                    <path d="M250 88v-20" />
                  </g>
                  <g stroke="currentColor" strokeWidth="2" opacity="0.6">
                    <path d="M40 252c40-14 80-14 120 0s80 14 120 0 60-14 80 0" />
                  </g>
                </svg>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
      <AnimatePresence>
        {showSuccess ? (
          <motion.div
            className="quote-page__success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="quote-page__success-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
            >
              <h3>Request received</h3>
              <p>We’ll respond shortly.</p>
              <button
                type="button"
                className="quote-page__primary"
                onClick={() => navigate("/")}
              >
                Back to Home
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.main>
  );
};

export default QuotePage;

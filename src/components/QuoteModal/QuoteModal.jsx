import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./QuoteModal.css";

const SERVICE_OPTIONS = [
  "Marine Navigation",
  "Offshore Technical Support",
  "Communications",
  "Safety & Compliance",
  "Systems Installation",
  "Other",
];

const initialValues = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  category: "",
  location: "",
  message: "",
};

export default function QuoteModal({ open, onClose }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!open) {
      setValues(initialValues);
      setErrors({});
      setShake({});
      setShowSuccess(false);
    }
  }, [open]);

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
      `Company Name: ${values.company}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Service Category: ${values.category}`,
      `Project Location: ${values.location}`,
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
    window.location.href = `mailto:femijude10@gmail.com?subject=${subject}&body=${mailBody}`;
    setShowSuccess(true);
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="quote-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="quote-modal__panel"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="quote-modal__decor">
            <span />
            <span />
            <span />
          </div>

          {!showSuccess ? (
            <>
              <div className="quote-modal__header">
                <h2>Request a Quote</h2>
                <p>Tell us about your requirements and we’ll respond shortly.</p>
              </div>

              <form className="quote-modal__form" onSubmit={handleSubmit}>
                <motion.label
                  className="quote-modal__field"
                  animate={shake.fullName ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span>Full Name *</span>
                  <input
                    type="text"
                    value={values.fullName}
                    onChange={handleChange("fullName")}
                    className={errors.fullName ? "has-error" : ""}
                  />
                </motion.label>

                <label className="quote-modal__field">
                  <span>Company Name</span>
                  <input
                    type="text"
                    value={values.company}
                    onChange={handleChange("company")}
                  />
                </label>

                <motion.label
                  className="quote-modal__field"
                  animate={shake.email ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span>Email *</span>
                  <input
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    className={errors.email ? "has-error" : ""}
                  />
                </motion.label>

                <label className="quote-modal__field">
                  <span>Phone</span>
                  <input
                    type="tel"
                    value={values.phone}
                    onChange={handleChange("phone")}
                  />
                </label>

                <motion.label
                  className="quote-modal__field"
                  animate={shake.category ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span>Service Category *</span>
                  <select
                    value={values.category}
                    onChange={handleChange("category")}
                    className={errors.category ? "has-error" : ""}
                  >
                    <option value="">Select a category</option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </motion.label>

                <label className="quote-modal__field">
                  <span>Project Location</span>
                  <input
                    type="text"
                    value={values.location}
                    onChange={handleChange("location")}
                  />
                </label>

                <motion.label
                  className="quote-modal__field quote-modal__field--full"
                  animate={shake.message ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span>Message *</span>
                  <textarea
                    rows="4"
                    value={values.message}
                    onChange={handleChange("message")}
                    className={errors.message ? "has-error" : ""}
                  />
                </motion.label>

                <div className="quote-modal__actions">
                  <button type="button" className="quote-modal__secondary" onClick={onClose}>
                    Close
                  </button>
                  <button type="submit" className="quote-modal__primary">
                    Send Request
                  </button>
                </div>
              </form>
            </>
          ) : (
            <motion.div
              className="quote-modal__success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="quote-modal__check">
                <span />
              </div>
              <h3>Request received. We’ll reach out shortly.</h3>
              <div className="quote-modal__progress" />
              <button type="button" className="quote-modal__primary" onClick={onClose}>
                Close
              </button>
            </motion.div>
          )}
        </motion.div>
        <button type="button" className="quote-modal__backdrop" onClick={onClose} />
      </motion.div>
    </AnimatePresence>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = values;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({ type: "error", text: "Please fill in all fields." });
      return;
    }

    if (!emailRegex.test(email.trim())) {
      setFeedback({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    setFeedback({
      type: "success",
      text: "Thank you! Your message has been sent (simulated).",
    });

    setValues({ name: "", email: "", message: "" });
  };

  return (
    <motion.form
      className="contact-form elevated-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* NAME FIELD */}
      <div className="form-group">
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder=" "
          required
        />
        <label className="floating">Name</label>
      </div>

      {/* EMAIL FIELD */}
      <div className="form-group">
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder=" "
          required
        />
        <label className="floating">Email</label>
      </div>

      {/* MESSAGE FIELD */}
      <div className="form-group">
        <textarea
          name="message"
          rows="5"
          value={values.message}
          onChange={handleChange}
          placeholder=" "
          required
        />
        <label className="floating">Message</label>
      </div>

      {/* SUBMIT BUTTON */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.1 }}
      >
        Send Message
      </motion.button>

      {/* FEEDBACK TEXT */}
      <AnimatePresence>
        {feedback.text && (
          <motion.p
            key={feedback.text}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className={
              feedback.type === "error"
                ? "feedback feedback-error"
                : "feedback feedback-success"
            }
          >
            {feedback.text}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
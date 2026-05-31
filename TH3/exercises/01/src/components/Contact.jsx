import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }
  }

  function validate() {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      nextErrors.name = "Name must be at least 2 characters";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setErrors({});
  }

  function handleReset() {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  }

  return (
    <section className="section" id="contact">
      <div className="container section-card contact-card">
        <p className="section-label">Contact</p>
        <h2>Liên hệ để bắt đầu dự án</h2>
        <p>
          Đây là phiên bản có state và validation để bạn thấy rõ controlled input,
          event handling và submit flow.
        </p>

        {!submitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input error" : "input"}
                placeholder="Lương Văn Hưng"
              />
              {errors.name && <small className="error-text">{errors.name}</small>}
            </label>

            <label className="field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input error" : "input"}
                placeholder="you@example.com"
              />
              {errors.email && <small className="error-text">{errors.email}</small>}
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "input error" : "input"}
                placeholder="Tell me about your project..."
              />
              {errors.message && <small className="error-text">{errors.message}</small>}
            </label>

            <div className="contact-actions">
              <button className="button button-primary" type="submit">
                Send Message
              </button>
              <button className="button button-secondary" type="button" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        ) : (
          <div className="success-box">
            <h3>Message sent successfully!</h3>
            <p>
              Cảm ơn <strong>{formData.name}</strong>, tôi sẽ liên hệ qua {formData.email}.
            </p>
            <button className="button button-secondary" type="button" onClick={handleReset}>
              Send another message
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;

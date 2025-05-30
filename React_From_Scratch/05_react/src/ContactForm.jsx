import { useState } from "react";
import { useContactForm } from "./hooks/useContactForm.js";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { loading, submitContact, successMessage, errorMessage } =
    useContactForm();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isSucceed = await submitContact(form);
    if (isSucceed) {
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name*<span aria-hidden> :</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email">
            Email*<span aria-hidden> :</span>
          </label>
          <input
            id="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
          />
        </div>
        <div>
          <label htmlFor="message">
            Message*<span aria-hidden> :</span>
          </label>
          <textarea
            id="message"
            name="message"
            autoComplete="off"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default ContactForm;

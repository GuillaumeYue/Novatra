import React from "react";

export default function Contact() {
  return (
    <section className="section-container contact" id="contact">
      <p className="contact-des">
        Design. Develop. Refine. The first step? Reach out.
      </p>

      <form
        className="contact-form"
        id="contact-form"
        action="https://formspree.io/f/xldlpjrp"
        method="POST"
      >
        <div className="contact-form-info">
          <div className="contact-input-group contact-info-group">
            <label className="contact-label">name*</label>
            <textarea
              name="name"
              id="name"
              placeholder="TYPE YOUR NAME"
              required
            />
          </div>

          <div className="contact-input-group contact-info-group">
            <label className="contact-label">email*</label>
            <textarea
              name="email"
              id="email"
              placeholder="TYPE YOUR EMAIL"
              required
            />
          </div>
        </div>

        <div className="contact-input-group contact-form-message">
          <label className="contact-label">Message</label>
          <textarea
            className="contact-message-textarea"
            name="message"
            cols="30"
            rows="8"
            placeholder="TYPE YOUR MESSAGE"
          />
        </div>

        <button className="contact-submit-btn" type="submit">Send</button>
      </form>
    </section>
  );
}

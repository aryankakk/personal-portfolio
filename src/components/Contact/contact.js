// Contact.jsx
import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jjm765e",      // your service ID
        "template_ej29psi",     // your template ID
        formRef.current,
        "1ra8M60wS6N5WsiwR"     // your public key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSent(true);        // show toast
          e.target.reset();     // clear the form

          setTimeout(() => setSent(false), 3000); // hide toast after 3s
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }; // <--- THIS brace was missing in your version

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Contact Me</h2>
        <p className="contact__subtitle">
          Please fill out the form below to reach out about opportunities,
          collaborations, or any questions.
        </p>

        {/* Single form wired to EmailJS */}
        <form ref={formRef} className="contact__form" onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className="contact__input"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            name="reply_to"
            className="contact__input"
            placeholder="Your email"
            required
          />

          <textarea
            name="message"
            rows="5"
            className="contact__textarea"
            placeholder="Hey Aryan, love the portfolio! I would like to chat about some opportunities you might like🎉"
            required
          />

          <button type="submit" className="contact__button">
            Submit
          </button>
        </form>

        <div className="contact__socials">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aryan-kakkar-/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social contact__social--linkedin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="social-icon"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98h4.56V24H.22V8.98zM8.82 8.98h4.37v2.04h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 7V24h-4.56v-6.63c0-1.58-.03-3.61-2.2-3.61-2.21 0-2.55 1.72-2.55 3.5V24H8.82V8.98z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/aryankakk"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social contact__social--github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="social-icon"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.086 3.292 9.395 7.865 10.915.575.106.785-.25.785-.556 0-.274-.01-1.002-.015-1.967-3.2.695-3.878-1.542-3.878-1.542-.523-1.33-1.278-1.686-1.278-1.686-1.044-.714.08-.699.08-.699 1.155.081 1.763 1.186 1.763 1.186 1.026 1.76 2.69 1.252 3.346.957.105-.744.402-1.252.73-1.54-2.555-.291-5.238-1.278-5.238-5.686 0-1.256.448-2.282 1.183-3.085-.118-.291-.513-1.462.112-3.05 0 0 .965-.309 3.162 1.18a10.93 10.93 0 0 1 2.88-.387c.977.005 1.963.132 2.88.387 2.197-1.489 3.162-1.18 3.162-1.18.625 1.588.23 2.759.113 3.05.736.803 1.183 1.829 1.183 3.085 0 4.42-2.688 5.391-5.252 5.677.414.356.78 1.064.78 2.148 0 1.552-.014 2.803-.014 3.183 0 .31.21.67.79.555C20.713 21.39 24 17.086 24 12 24 5.648 18.352.5 12 .5Z" />
            </svg>
          </a>
        </div>

        {sent && (
          <div className="toast">
            Your message has been sent! 🎉
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
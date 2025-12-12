// Certifications.jsx
import React, { useState } from "react";
import "./certifications.css";

const certificationsData = [
  {
    title: "Java Object-Oriented Programming",
    provider: "LinkedIn Learning",
    date: "2024",
    link: "/certs/OOP.pdf", // replace with your file/link
  },
  {
    title: "Learning Java 11",
    provider: "LinkedIn Learning",
    date: "2024",
    link: "/certs/Java 11.pdf",
  },
  {
    title: "LEARN HTML and CSS",
    provider: "Scrimba",
    date: "2024",
    link: "/certs/HTML and CSS.pdf",
  },
];

const Certifications = () => {
  const [index, setIndex] = useState(0);
  const current = certificationsData[index];

  const prev = () => {
    setIndex((i) => (i === 0 ? certificationsData.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === certificationsData.length - 1 ? 0 : i + 1));
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-inner">
        <h2 className="certifications-heading">Certifications</h2>

        <div className="cert-slider">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="cert-arrow-btn"
            aria-label="Previous certification"
          >
            <svg className="cert-arrow-icon" viewBox="0 0 20 20" fill="none">
              <path
                d="M12.5 4.5L7 10l5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Card */}
          <div className="cert-card-wrapper">
            <div className="cert-card">
              <p className="cert-title">{current.title}</p>
              <p className="cert-provider">{current.provider}</p>
              <p className="cert-date">{current.date}</p>

              <div className="cert-button-wrapper">
                <a
                  href={current.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-view-btn"
                >
                  View Certificate
                </a>
              </div>
            </div>

            {/* Dots */}
            <div className="cert-dots">
              {certificationsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={
                    "cert-dot" + (i === index ? " cert-dot-active" : "")
                  }
                  aria-label={`Go to certification ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="cert-arrow-btn"
            aria-label="Next certification"
          >
            <svg className="cert-arrow-icon" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 4.5L13 10l-5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
import React, { useState } from "react";
import "./experience.css";

import multiverseLogo from "../../assets/logos/multiverse.png";
import laurierLogo from "../../assets/logos/laurier.png";
import richmondLogo from "../../assets/logos/richmondhill.png";
import farmboyLogo from "../../assets/logos/farmboy.png";

const EXPERIENCE_ITEMS = [
  {
    id: "ml",
    role: "Machine Learning Engineer Intern",
    company: "Multiverse Computing",
    time: "Sep. 2025 – Dec. 2025",
    location: "Toronto, ON (Hybrid)",
    logo: multiverseLogo,
    bullets: [
      "Engineered end-to-end time-series forecasting pipelines using XGBoost, quantile regression, and transformer-based models to predict multi-season player performance.",
      "Built probabilistic forecasting systems by combining Gaussian uncertainty modeling with large-scale Monte Carlo simulations to produce multi-year scenario trajectories.",
      "Enhanced model interpretability by applying K-Means clustering, feature importance analysis, and quantile-band visualization to segment and explain outcome paths.",
      "Deployed containerized ML inference services with FastAPI and integrated interactive dashboards for real-time exploration of predictions and uncertainty metrics."
    ],
  },
  {
    id: "cyber",
    role: "Web Developer",
    company: "Laurier Cybersecurity Club",
    time: "Sep. 2024 – Sep. 2025",
    location: "Waterloo, ON",
    logo: laurierLogo,
    bullets: [
      "Developed full-stack features for a MERN event platform with a focus on responsive UI and smooth user experience.",
      "Integrated REST APIs with React front-end views to display real-time event data and registrations.",
      "Collaborated in Agile sprints using GitHub, participating in code reviews, debugging, and testing.",
    ],
  },
  {
    id: "camp",
    role: "Summer Camp Counselor & BACP Supervisor",
    company: "City of Richmond Hill",
    time: "Jul. - Aug. 2023 – 2024",
    location: "Richmond Hill, ON",
    logo: richmondLogo,
    bullets: [
      "Planned and led daily programs for 50–100 children, promoting engagement, teamwork, and safety.",
      "Adapted activities for different age groups based on feedback and energy levels.",
      "Managed Before & After Care logistics, sign-ins/outs, and parent communication.",
    ],
  },
  {
    id: "farmboy",
    role: "Customer Service Representative",
    company: "Farm Boy Inc.",
    time: "Aug. 2021 – Aug. 2022",
    location: "Richmond Hill, ON",
    logo: farmboyLogo,
    bullets: [
      "Delivered personalized support and product recommendations to enhance customer satisfaction and in-store experience.",
      "Maintained product organization and inventory, improving store efficiency and product availability.",
    ],
  },
];

const Experience = () => {
  const [selectedId, setSelectedId] = useState("ml");
  const selected = EXPERIENCE_ITEMS.find((item) => item.id === selectedId);

  return (
    <section id="experience" className="exp">
      <h2 className="exp__title">Work Experience</h2>
      <p className="exp__subtitle">
        My professional journey so far — blending machine learning, full-stack
        development, and leadership in real-world environments.
      </p>

      <div className="exp__layout">
        {/* LEFT: selector list */}
        <div className="exp__sidebar">
          {EXPERIENCE_ITEMS.map((item) => (
            <button
              key={item.id}
              className={
                "expSidebarItem" +
                (item.id === selectedId ? " expSidebarItem--active" : "")
              }
              onClick={() => setSelectedId(item.id)}
            >
              <div className="expSidebarItem__icon">
                {item.logo ? (
                  <img src={item.logo} alt={`${item.company} logo`} />
                ) : (
                  <span>{item.role.charAt(0)}</span>
                )}
              </div>
              <div className="expSidebarItem__text">
                <p className="expSidebarItem__role">{item.role}</p>
                <p className="expSidebarItem__company">{item.company}</p>
              </div>
            </button>
          ))}
        </div>

        {/* RIGHT: detail card */}
        <div className="exp__detail">
          <div className="expDetailCard">
            <h3 className="expDetailCard__role">{selected.role}</h3>
            <p className="expDetailCard__company">{selected.company}</p>
            <p className="expDetailCard__meta">
              {selected.time} · {selected.location}
            </p>

            <ul className="expDetailCard__points">
              {selected.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
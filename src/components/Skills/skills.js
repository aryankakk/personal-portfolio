// src/components/Skills/skills.js
import React, { useState, useEffect } from "react";
import "./skills.css";

import famAMS from "../../assets/life/famAMS.png";
import friends from "../../assets/life/friends.png";
import fam from "../../assets/life/fam.png";
import friendsCarti from "../../assets/life/friendsCarti.png";
import eat from "../../assets/life/eat.png";
import mbappe from "../../assets/life/mbappe.png";
import sleep from "../../assets/life/sleep.png";

const TECH_SLIDES = [
  {
    id: "ml",
    icon: "🧠",
    title: "Machine Learning",
    text:
      "I’ve built and evaluated models ranging from XGBoost to transformer-based time-series architectures. " +
      "My work includes applying Gaussian noise modeling and Monte Carlo sampling for uncertainty estimation, " +
      "integrating multi-source datasets, tuning model performance, and running reproducible experiments " +
      "to improve accuracy, robustness, and reliability.",
  },
  {
    id: "web",
    icon: "💻",
    title: "Full-Stack & Web Development",
    text:
      "I’ve developed full-stack applications using React, Flask, and Python, and contributed as a Web Developer " +
      "for the Laurier Cybersecurity Club. I enjoy building clean, responsive interfaces and the backend systems " +
      "that power real-world workflows.",
  },
  {
    id: "devops",
    icon: "⚙️",
    title: "DevOps & Backend Systems",
    text:
      "I’ve managed GitLab feature branches, containerized environments with Docker, and used Singularity—" +
      "Multiverse Computing’s quantum-inspired platform—for reproducible workloads. I also build backend Python " +
      "utilities that support model training, evaluation, and deployment workflows.",
  },
];

const LIFE_SLIDES = [
  { id: 1, src: famAMS},
  { id: 2, src: friends},
  { id: 3, src: fam},
  { id: 4, src: friendsCarti},
  { id: 5, src: eat},
  { id: 6, src: mbappe},
  { id: 7, src: sleep},
];

const Skills = () => {
  const [techId, setTechId] = useState("ml");
  const [photoIndex, setPhotoIndex] = useState(0);

  const techSlide = TECH_SLIDES.find((s) => s.id === techId);

  const nextPhoto = () =>
    setPhotoIndex((i) => (i + 1) % LIFE_SLIDES.length);

  const prevPhoto = () =>
    setPhotoIndex((i) => (i - 1 + LIFE_SLIDES.length) % LIFE_SLIDES.length);

  // auto-advance every 7s
  useEffect(() => {
    const timer = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % LIFE_SLIDES.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  // keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") {
        nextPhoto();
      } else if (e.key === "ArrowLeft") {
        prevPhoto();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []); // attach once

  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">About Me</h2>
      <p className="skills__subtitle">
        I’m Aryan, a Computer Science student minoring in Economics and currently
        working as a Machine Learning Engineer Intern. I enjoy building intelligent
        systems, working with data, and developing solutions that blend software
        engineering with applied machine learning.
      </p>

      {/* ===== Technical slider ===== */}
      <div className="aboutSlider">
        <div className="aboutSlider__card">
          <div className="aboutSlider__headerRow">
            <div className="aboutSlider__icon">{techSlide.icon}</div>
            <h3 className="aboutSlider__title">{techSlide.title}</h3>
          </div>
          <p className="aboutSlider__text">{techSlide.text}</p>
        </div>

        <div className="aboutSlider__dots">
          {TECH_SLIDES.map((slide) => (
            <button
              key={slide.id}
              className={
                "aboutSlider__dot" +
                (slide.id === techId ? " aboutSlider__dot--active" : "")
              }
              onClick={() => setTechId(slide.id)}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </div>

      {/* ===== Personal blurb ===== */}
      <div className="aboutBio">
        <h3 className="aboutBio__title">Beyond the code</h3>
        <p className="aboutBio__text">
        Outside of tech, you’ll find me playing soccer, lifting at the gym, or exploring new places whenever I get the chance. 
        I love traveling, discovering new experiences, and meeting people with interesting stories. I’m a huge foodie, always down to try something new, 
        and I’ll never say no to a good meal or a good nap. Music, especially Drake, is always in the background. I enjoy connecting with others, sharing ideas, 
        and growing my network both personally and professionally.
        </p>
      </div>

      {/* ===== Life / family photo slider ===== */}
      <div className="lifeSlider">
        <div className="lifeSlider__carousel">
          <button
            className="lifeSlider__arrow lifeSlider__arrow--left"
            onClick={prevPhoto}
          >
            ‹
          </button>

          <div className="lifeSlider__viewport">
            <div
              className="lifeSlider__track"
              style={{ transform: `translateX(-${photoIndex * 100}%)` }}
            >
              {LIFE_SLIDES.map((slide) => (
                <div className="lifeSlider__slide" key={slide.id}>
                  <img
                    src={slide.src}
                    alt={slide.caption}
                    className="lifeSlider__img"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className="lifeSlider__arrow lifeSlider__arrow--right"
            onClick={nextPhoto}
          >
            ›
          </button>
        </div>

        <p className="lifeSlider__caption">
          {LIFE_SLIDES[photoIndex].caption}
        </p>
      </div>
    </section>
  );
};

export default Skills;
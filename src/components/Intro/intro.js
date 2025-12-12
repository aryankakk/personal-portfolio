import React from 'react'
import './intro.css'
import { FiFileText } from "react-icons/fi";
import profile from "../../assets/profile.png";

const resumeData = [
  {
    title: "Aryan Kakkar Resume",
    link: "/Aryan_Kakkar_Resume_Summer2026.pdf",
  }
];

const Intro = () => {
  return (
    <section id="intro">
      <div className="introInner">
        <div className="introContent">

          <span className="greeting">👋 Hey,</span>

          <span className="introText">
            I'm 
            <span className="introName"> Aryan Kakkar</span>
            <br />
            CS @ Wilfrid Laurier University • Machine Learning Engineer Intern
          </span>

          <p className="introPara">
          Building intelligent, scalable, and user-focused software.
          </p>

          <a
            href={resumeData[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FiFileText size={18} style={{ marginRight: "0.5rem" }} />
            Resume
          </a>
        </div>

        <img src={profile} alt="Aryan Kakkar Headshot" className="heroPhoto" />
      </div>
    </section>
  );
};

export default Intro;
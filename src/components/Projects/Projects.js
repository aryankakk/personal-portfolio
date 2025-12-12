import React from "react";
import "./projects.css";
import portfolioImg from "../../assets/projects/portfolio.png";
import clickerImg from "../../assets/projects/clicker.png";
import budgetImg from "../../assets/projects/budget-planner.png";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">My Projects</h2>
      <p className="projects__subtitle">
        A selection of work spanning machine learning, full-stack development,
        and small personal tools. Hover over a project to learn more or view the
        code on GitHub.
      </p>

      <div className="projects__grid">
        {/* Project 1 – Portfolio */}
        <div className="projectCard">
          <div className="projectCard__content">
            <h3 className="projectCard__title">Portfolio Website</h3>
            <p className="projectCard__text">
              The personal portfolio you're viewing now, built to showcase my
              experience, projects, and contact info with a modern, responsive
              layout.
            </p>

            {/* 🔹 Image */}
            <div className="projectCard__image">
              <img
                src={portfolioImg}
                alt="Screenshot of personal portfolio website"
              />
            </div>

            {/* Tech stack */}
            <div className="projectCard__tags">
              <span className="projectTag">React</span>
              <span className="projectTag">JavaScript</span>
              <span className="projectTag">CSS</span>
            </div>

            <a
              href="https://github.com/aryankakk/personal-portfolio"
              className="projectCard__link"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 2 – Clicker game */}
        <div className="projectCard">
          <div className="projectCard__content">
            <h3 className="projectCard__title">Clicker Game</h3>
            <p className="projectCard__text">
              A simple incremental clicker game with upgrades and persistent
              state, built to experiment with game loops and UI feedback.
            </p>

            {/* 🔹 Image */}
            <div className="projectCard__image">
              <img
                src={clickerImg}
                alt="Screenshot of clicker game project"
              />
            </div>

            {/* Tech stack */}
            <div className="projectCard__tags">
              <span className="projectTag">JavaScript</span>
              <span className="projectTag">HTML</span>
              <span className="projectTag">CSS</span>
            </div>

            <a
              href="https://github.com/aryankakk/Clicker-game"
              className="projectCard__link"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 3 – Budget planner */}
        <div className="projectCard">
          <div className="projectCard__content">
            <h3 className="projectCard__title">Budget Planner</h3>
            <p className="projectCard__text">
              A budgeting web app that lets users log expenses, categorize
              spending, and visualize where their money goes using summaries and
              charts.
            </p>

            {/* 🔹 Image */}
            <div className="projectCard__image">
              <img
                src={budgetImg}
                alt="Screenshot of budget planner app"
                className="budget-img"
              />
            </div>

            {/* Tech stack */}
            <div className="projectCard__tags">
              <span className="projectTag">React</span>
              <span className="projectTag">JavaScript</span>
              <span className="projectTag">Flask</span>
              <span className="projectTag">Python</span>
            </div>

            <a
              href="https://github.com/aryankakk/Budget-Planner"
              className="projectCard__link"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
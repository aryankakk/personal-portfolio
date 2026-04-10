import React, { useEffect, useState } from "react";
import "./projects.css";
import portfolioImg from "../../assets/projects/portfolio.png";
import clickerImg from "../../assets/projects/clicker.png";
import budgetImg from "../../assets/projects/budget-planner.png";
import nettraceImg from "../../assets/projects/nettrace.png";

const projectData = [
  {
    title: "NetTrace",
    description:
      "A graph-based fraud detection system analyzing large-scale transaction networks using Graph ML, clustering, and anomaly detection to identify suspicious behavior. Built during a hackathon.",
    image: nettraceImg,
    imageClass: "nettrace-img",
    tags: ["Python", "PyTorch", "Graph ML", "NetworkX", "Streamlit"],
    github: "https://github.com/shervin31/NetTrace",
    alt: "Screenshot of NetTrace fraud detection system",
  },
  {
    title: "Portfolio Website",
    description:
      "The personal portfolio you're viewing now, built to showcase my experience, projects, and contact info with a modern, responsive layout.",
    image: portfolioImg,
    imageClass: "",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/aryankakk/personal-portfolio",
    alt: "Screenshot of personal portfolio website",
  },
  {
    title: "Budget Planner",
    description:
      "A budgeting web app that lets users log expenses, categorize spending, and visualize where their money goes using summaries and charts.",
    image: budgetImg,
    imageClass: "budget-img",
    tags: ["React", "JavaScript", "Flask", "Python"],
    github: "https://github.com/aryankakk/Budget-Planner",
    alt: "Screenshot of budget planner app",
  },
  {
    title: "Clicker Game",
    description:
      "A simple incremental clicker game with upgrades and persistent state, built to experiment with game loops and UI feedback.",
    image: clickerImg,
    imageClass: "",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/aryankakk/Clicker-game",
    alt: "Screenshot of clicker game project",
  },
];

const getCardsPerView = (width) => {
  if (width <= 600) return 1;
  if (width <= 900) return 2;
  return 3;
};

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextProjects = () => {
    setStartIndex((prev) => (prev + 1) % projectData.length);
  };

  const prevProjects = () => {
    setStartIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
  };

  const visibleProjects = Array.from({ length: cardsPerView }, (_, i) => {
    return projectData[(startIndex + i) % projectData.length];
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextProjects();
      } else if (e.key === "ArrowLeft") {
        prevProjects();
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">My Projects</h2>
      <p className="projects__subtitle">
        A selection of work spanning machine learning, full-stack development,
        and small personal tools. Hover over a project to learn more or view the
        code on GitHub.
      </p>

      <div className="projectsCarousel">
        <button
          className="projectsCarousel__arrow"
          onClick={prevProjects}
          aria-label="Previous projects"
        >
          ‹
        </button>

        <div
          key={`${startIndex}-${cardsPerView}`}
          className={`projectsCarousel__grid projectsCarousel__grid--${cardsPerView} projectsCarousel__grid--animated`}
          >
          {visibleProjects.map((project) => (
            <div className="projectCard" key={`${project.title}-${startIndex}`}>
              <div className="projectCard__content">
                <h3 className="projectCard__title">{project.title}</h3>
                <p className="projectCard__text">{project.description}</p>

                <div className="projectCard__image">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className={project.imageClass}
                  />
                </div>

                <div className="projectCard__tags">
                  {project.tags.map((tag) => (
                    <span className="projectTag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  className="projectCard__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          className="projectsCarousel__arrow"
          onClick={nextProjects}
          aria-label="Next projects"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Projects;
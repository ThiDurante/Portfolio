import React from "react";
import Header from "../components/Header";
import "./Projects.css";
import projectsTrybe from "../data/projects";

export default function Projects() {
  return (
    <div className="projects-container">
      <Header className="side" />
      <section className="projects">
        <h2>Projects</h2>
        <div className="links">
          {projectsTrybe.map((project) => (
            <div className="project">
              <p className="name">{project.name}</p>
              <p className="state">{project.state}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

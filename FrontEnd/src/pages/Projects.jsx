import React from "react";
import Header from "../components/Header";
import "./Projects.css";
import projectsTrybe from "../data/projects";
import Card from "../components/Card";

export default function Projects() {
  return (
    <div className="projects-container">
      <Header className="side" />
      <section className="projects">
        <h2>Projects</h2>
        <div className="links">
          {projectsTrybe.map((project, i) => (
            <Card key={i} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

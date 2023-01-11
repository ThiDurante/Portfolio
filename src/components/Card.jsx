import React from "react";
import "./Card.css";
import imagem from "../images/me.JPG";

export default function Card(props) {
  const { project } = props;
  return (
    <div className="card">
      <div className="header">
        <div className="img-box">
          <img className="img" src={imagem} alt="teste" />
        </div>
        <h1 className="title">{project.name}</h1>
      </div>

      <div className="content">
        <p className="description">{project.description}</p>
        <p className="state">Progress: {project.state}</p>
      </div>
      <a
        href={project.link}
        className="btn-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check it out!
      </a>
    </div>
  );
}

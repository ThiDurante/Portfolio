import React from "react";
import Header from "../components/Header";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <Header className="side" />
      <section className="skills fadein5">
        <h1>Skills</h1>
        <section className="front">
          <h2>Front-end</h2>
          <p className="front-skills">
            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="react"
            />
            <img
              src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
              alt="reactRouter"
            />
            <img
              src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
              alt="redux"
            />
            <img
              src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
              alt="JS"
            />
            <img
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML"
            />
            <img
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS"
            />
            <img
              src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"
              alt="Jest"
            />
            <img
              src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white"
              alt="cypress"
            />
          </p>
        </section>
        <section className="back">
          <h2>Back-end</h2>
          <p className="back-skills">
            <img
              src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=whit"
              alt="docker"
            />
            <img
              src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"
              alt="msql"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="mongodb"
            />
            <img
              src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
              alt="node"
            />
          </p>
        </section>
      </section>
    </div>
  );
}

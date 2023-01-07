import React from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import "./Socials.css";

export default function Socials() {
  return (
    <div className="icons">
      <a href="http://github.com/ThiDurante" target="_blank" rel="noreferrer">
        <FiGithub className="github icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/thidurante/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin className="linkedin icon" />
      </a>
      <a
        href="https://www.instagram.com/thiidurante/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineInstagram className="instagram icon" />
      </a>
    </div>
  );
}

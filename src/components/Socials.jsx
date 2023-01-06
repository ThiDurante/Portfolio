import React, { useContext } from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import "./Socials.css";
import portfolioContext from "../context/portfolioContext";

export default function Socials() {
  const { theme } = useContext(portfolioContext);
  return (
    <div className="icons">
      <div className="icons-container">
        <a href="http://github.com/ThiDurante" target="_blank" rel="noreferrer">
          <FiGithub className={`${theme} github icon`} />
        </a>
        <a
          href="https://www.linkedin.com/in/thidurante/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin className={`${theme} linkedin icon`} />
        </a>
        <a
          href="https://www.instagram.com/thiidurante/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram className={`${theme} instagram icon`} />
        </a>
      </div>
      <div className={`${theme}-teste`} />
    </div>
  );
}

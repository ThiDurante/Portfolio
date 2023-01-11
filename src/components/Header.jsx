import React from "react";
import "./Header.css";
import { FaInfo } from "react-icons/fa";
import { VscRocket } from "react-icons/vsc";
import { IoCall } from "react-icons/io5";
import Socials from "./Socials";
import { FaAngleDoubleUp } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

export default function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <div className="nav-title">Know about me</div>
        <ul>
          <Link style={{ textDecoration: "none" }} to="/">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <AiOutlineHome className="i" />
              <span>Home</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            <li
              className={`nav-item ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <FaInfo className="i about-icon" />
              <span>About me</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/projects">
            <li
              className={`nav-item ${
                location.pathname === "/projects" ? "active" : ""
              }`}
            >
              <VscRocket className="i" />
              <span>Projects</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/skills">
            <li
              className={`nav-item ${
                location.pathname === "/skills" ? "active" : ""
              }`}
            >
              <FaAngleDoubleUp className="i" />
              <span>Skills</span>
            </li>
          </Link>
        </ul>
        <hr />
        <div className="nav-title">Get in touch!</div>
        <ul>
          <a href="mailto:thiagotdurante@gmail.com">
            <li
              className={`nav-item ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <IoCall className="i" />
              <span>Contact me!</span>
            </li>
          </a>
          <li className="nav-item">
            <Socials className="socials" />
          </li>
        </ul>
        <h4>Created and developed by: Thiago Durante</h4>
      </nav>
    </div>
  );
}

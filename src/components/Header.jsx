import React, { useContext } from "react";
import portfolioContext from "../context/portfolioContext";
import "./Header.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function Header() {
  const { themeChanger } = useContext(portfolioContext);
  return (
    <div className="header-container">
      <ul className="header-list">
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Projects</button>
        </li>
        <li>
          <button>About me</button>
        </li>
        <li>
          <button>Contact</button>
        </li>
        <li className="theme-switcher">
          <BsFillSunFill className="sun" />
          <label className="switch">
            <input type="checkbox" onClick={themeChanger} />
            <span className="slider"></span>
          </label>
          <BsFillMoonFill className="moon" />
        </li>
      </ul>
    </div>
  );
}

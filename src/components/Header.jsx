import React, { useContext } from "react";
import portfolioContext from "../context/portfolioContext";
import "./Header.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function Header() {
  const { themeChanger, theme } = useContext(portfolioContext);
  return (
    <div className={`${theme} header-container`}>
      <ul className={`${theme} header-list`}>
        <li>
          <button className={`${theme}`}>Home</button>
        </li>
        <li>
          <button className={`${theme}`}>Projects</button>
        </li>
        <li>
          <button className={`${theme}`}>About me</button>
        </li>
        <li>
          <button className={`${theme}`}>Contact</button>
        </li>
        <li className="theme-switcher">
          <BsFillSunFill className={`${theme}-sun`} />
          <label className="switch">
            <input
              type="checkbox"
              className="checkbox"
              onClick={themeChanger}
            />
            <span className="slider"></span>
          </label>
          <BsFillMoonFill className={`${theme}-moon`} />
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import "./NavTab.css";
import { HashLink as Link } from "react-router-hash-link";
import "../Button/Button.css";

function NavTab() {
  return (
    <nav className="nav-tab__menu">
      <ul className="nav-tab__list">
        <li className="nav-tab__item">
          <Link to="#about-project" className="nav-tab__link button" smooth>
            О проекте
          </Link>
        </li>
        <li className="nav-tab__item">
          <Link to="#techs" className="nav-tab__link button" smooth>
            Технологии
          </Link>
        </li>
        <li className="nav-tab__item">
          <Link to="#about-me" className="nav-tab__link button" smooth>
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;

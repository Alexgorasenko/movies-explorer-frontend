import React from "react";
import "./NavTab.css";
import { Route, Routes, Link } from "react-router-dom";

function NavTab() {
  return (
    <nav className="nav-tab__menu">
      <ul className="nav-tab__list">
        <li className="nav-tab__item">
          <Link to="#about-project" className="nav-tab__link">
            О проекте
          </Link>
        </li>
        <li className="nav-tab__item">
          <Link to="#techs" className="nav-tab__link">
            Технологии
          </Link>
        </li>
        <li className="nav-tab__item">
          <Link to="#about-me" className="nav-tab__link">
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;

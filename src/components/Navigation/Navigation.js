import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import "../Button/Button.css";
import "../Link/Link.css";
import { useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation__nav-menu">
      <ul className="navigation__nav-link-list">
        <li className="navigation__nav-link-item">
          <Link
            to="/movies"
            className={
              location.pathname === "/movies"
                ? "navigation__nav-link navigation__nav-link_active link"
                : "navigation__nav-link link"
            }
          >
            Фильмы
          </Link>
        </li>
        <li className="navigation__nav-link-item">
          <Link to="/saved-movies" className={
              location.pathname === "/saved-movies"
                ? "navigation__nav-link navigation__nav-link_active link"
                : "navigation__nav-link link"
            }>
            Сохранённые фильмы
          </Link>
        </li>
      </ul>

      <Link to="/profile" className="navigation__nav-link">
        <button className="navigation__nav-link-profile button">Аккаунт</button>
      </Link>
    </nav>
  );
}

export default Navigation;

import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const islogin = false;
  // const islogin = true;
  return (
    <>
      {islogin ? (
        <nav className="navigation__nav-menu">
          <ul className="navigation__nav-link-list">
            <li className="navigation__nav-link-item">
              <Link to="/movies" className="navigation__nav-link">
                Фильмы
              </Link>
            </li>
            <li className="navigation__nav-link-item">
              <Link to="/saved-movies" className="navigation__nav-link">
                Сохранённые фильмы
              </Link>
            </li>
          </ul>

          <Link to="/profile" className="navigation__nav-link">
            <button className="navigation__nav-link-profile">Аккаунт</button>
          </Link>
        </nav>
      ) : (
        <nav className="navigation__nav-menu">
          <ul className="navigation__nav-link-login-list">
            <li className="navigation__nav-link-item">
              <Link to="/signup" className="navigation__nav-link">
                Регистрация
              </Link>
            </li>
            <li className="navigation__nav-link-item">
              <Link to="/signin" className="navigation__nav-link">
                <button className="navigation__nav-link-login">Войти</button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navigation;

import React from "react";
import logo from "../../images/logo.svg";
import { Route, Routes, Link } from "react-router-dom";
import "./Header.css";

const islogin = false;
// const islogin = true;

function Header() {
  return (
    <header className="header">
      {islogin ? (
        <nav className="header__nav-menu">
          <Link to="/" className="header__nav-link">
            <img src={logo} alt="Логотип сайта" className="header__logo" />
          </Link>
          <ul className="header__nav-link-list">
            <li className="header__nav-link-item">
              <Link to="/movies" className="header__nav-link">
                Фильмы
              </Link>
            </li>
            <li className="header__nav-link-item">
              <Link to="/saved-movies" className="header__nav-link">
                Сохранённые фильмы
              </Link>
            </li>
          </ul>

          <Link to="/pr" className="header__nav-link">
            <button className="header__nav-link-profile">Аккаунт</button>
          </Link>
        </nav>
      ) : (
        <nav className="header__nav-menu">
          <Link to="/" className="header__nav-link">
            <img src={logo} alt="Логотип сайта" className="header__logo" />
          </Link>
          <ul className="header__nav-link-list">
            <li className="header__nav-link-item">
              <Link to="/signup" className="header__nav-link">
                Регистрация
              </Link>
            </li>
            <li className="header__nav-link-item">
              <Link to="/signin" className="header__nav-link">
                <button className="header__nav-link-login">Войти</button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;

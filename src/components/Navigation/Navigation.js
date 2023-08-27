import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import "../Button/Button.css";
import "../Link/Link.css";
import { useLocation } from "react-router-dom";
import Burger from "../Burger/Burger";

function Navigation(props) {
  const location = useLocation();

  return (
    <>
      <Burger
        handleOneClick={props.handleOneClick}
        isBurgerOpen={props.isBurgerOpen}
      ></Burger>
      <nav
        className={`navigation__nav-menu ${
          props.isBurgerOpen ? "navigation__nav-menu_active" : ""
        }`}
      >
        <ul className="navigation__nav-link-list">
          {props.isBurgerOpen ? (
            <li className="navigation__nav-link-item">
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "navigation__nav-link navigation__nav-link_active link"
                    : "navigation__nav-link link"
                }
                onClick={props.handleOneClick}
              >
                Главная
              </Link>
            </li>
          ) : (
            ""
          )}
          <li className="navigation__nav-link-item">
            <Link
              to="/movies"
              className={
                location.pathname === "/movies"
                  ? "navigation__nav-link navigation__nav-link_active link"
                  : "navigation__nav-link link"
              }
              onClick={props.handleOneClick}
            >
              Фильмы
            </Link>
          </li>
          <li className="navigation__nav-link-item">
            <Link
              to="/saved-movies"
              className={
                location.pathname === "/saved-movies"
                  ? "navigation__nav-link navigation__nav-link_active link"
                  : "navigation__nav-link link"
              }
              onClick={props.handleOneClick}
            >
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link to="/profile" className="navigation__nav-link">
          <button className="navigation__nav-link-profile button">
            Аккаунт
          </button>
        </Link>
      </nav>
    </>
  );
}

export default Navigation;

import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Popup from "../Popup/Popup";
import "../Button/Button.css";

function Header(props) {


  // const islogin = false;
  const islogin = true;

  return (
    <header className="header">
      <Link to="/" className="header__nav-link button">
        <img src={logo} alt="Логотип сайта" className="header__logo" />
      </Link>
      {islogin ? (
        <Navigation handleOneClick={props.handleOneClick} isBurgerOpen={props.isBurgerOpen}></Navigation>
      ) : (
        <nav className="header__nav-menu">
          <ul className="header__nav-link-login-list">
            <li className="header__nav-link-item">
              <Link to="/signup" className="header__nav-link button">
                Регистрация
              </Link>
            </li>
            <li className="header__nav-link-item">
              <Link to="/signin" className="header__nav-link ">
                <button className="header__nav-link-login button">Войти</button>
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <Popup isBurgerOpen={props.isBurgerOpen}></Popup>
    </header>
  );
}

export default Header;

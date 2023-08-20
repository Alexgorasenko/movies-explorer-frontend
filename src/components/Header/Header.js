import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";
import Popup from "../Popup/Popup";




function Header() {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOneClick = ()=>{
    setPopupOpen(true)
  }

  const closePopup = ()=>{
    setPopupOpen(false)
  }



  return (
    <header className="header">
      <Link to="/" className="header__nav-link">
        <img src={logo} alt="Логотип сайта" className="header__logo" />
      </Link>
      <Navigation></Navigation>
      <Burger handleOneClick={handleOneClick}></Burger>
      <Popup isPopupOpen={isPopupOpen} onClose={closePopup}></Popup>

    </header>
  );
}

export default Header;

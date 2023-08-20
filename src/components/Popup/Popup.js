import React from "react";
import "./Popup.css";
import { Link } from "react-router-dom";



function Popup(props) {

  return (
    <div className={`popup ${props.isPopupOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          aria-label="Закрытие попапа"
          type="button"
          className="popup__close"
          onClick={props.onClose}
        ></button>
        <nav className="popup__nav-menu">
          <ul className="popup__nav-link-list">
            <li className="popup__nav-link-item">
              <Link to="/" className="popup__nav-link" onClick={props.onClose}>
                Главная
              </Link>
            </li>
            <li className="popup__nav-link-item">
              <Link to="/movies" className="popup__nav-link" onClick={props.onClose}>
                Фильмы
              </Link>
            </li>
            <li className="popup__nav-link-item">
              <Link to="/saved-movies" className="popup__nav-link" onClick={props.onClose}>
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <Link to="/profile" className="popup__nav-link" onClick={props.onClose}>
            <button className="popup__nav-link-profile">Аккаунт</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Popup;

import React, {useState, useEffect} from "react";
import { Route, Routes, Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Register from "../Register/Register";
import "./PageWithForm.css";




function PageWithForm({
  title,
  name,
  buttonText,
  onSubmit,
  authDescription,
  authButtonText,
  authButtonLink,
  pageType,
}) {

  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputPassword, setInputPassword] = useState();

  function handleNameOnChange(e) {
    setInputName(e.target.value);
  }

  function handleEmailOnChange(e) {
    setInputEmail(e.target.value);
  }

  function handlePasswordOnChange(e) {
    setInputPassword(e.target.value);
  }



  return (
    <section className="page-form">
      <Link to="/" className="page-form__nav-link">
        <img src={logo} alt="Логотип сайта" className="header__logo" />
      </Link>
      <h3 className="page-form__header">{title}</h3>
      <form
        name={`form-${name}`}
        method="post"
        className="page-form__form"
        id={`form-${name}`}
        action="/"
        onSubmit={onSubmit}
      >
        {pageType === "register" ? (
          <label className="page-form__form-label">
            <span className="page-form__input-title">
              Имя
            </span>
            <input
              type="text"
              className="page-form__input"
              name="name"
              placeholder="Введите имя"
              id="name-input"
              required
              onChange={handleNameOnChange}
              value={inputName || ""}
            />
            <span className="page-form__input-error">
              Вы пропустили это поле.
            </span>
          </label>
        ) : null}
        <label className="page-form__form-label">
            <span className="page-form__input-title">
            E-mail
            </span>
            <input
              type="text"
              className="page-form__input"
              name="email"
              placeholder="Введите email"
              id="email-input"
              required
              onChange={handleEmailOnChange}
              value={inputEmail || ""}
            />
            <span className="page-form__input-error">
              Вы пропустили это поле.
            </span>
          </label>
          <label className="page-form__form-label">
            <span className="page-form__input-title">
            Пароль
            </span>
            <input
              type="text"
              className="page-form__input"
              name="password"
              placeholder="Введите Пароль"
              id="password-input"
              required
              onChange={handlePasswordOnChange}
              value={inputPassword || ""}
            />
            <span className="page-form__input-error">
              Вы пропустили это поле.
            </span>
          </label>
        <button type="submit" className="page-form__submit">
          {buttonText}
        </button>
      </form>
      <div className="page-form__auth">
        <p className="page-form__auth-text">
          {authDescription}{" "}
          <Link to={authButtonLink} className="page-form__auth-link">
            {authButtonText}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default PageWithForm;

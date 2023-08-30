import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./PageWithForm.css";
import "../Button/Button.css";
import "../Link/Link.css";

function PageWithForm({
  title,
  name,
  buttonText,
  onSubmit,
  authDescription,
  authButtonText,
  authButtonLink,
  pageType,
  handleOneClick,
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
      <div className="page-form__container">
        <Link to="/" className="page-form__nav-link button">
          <img src={logo} alt="Логотип сайта" className="page-form__logo" />
        </Link>
        <h3 className="page-form__title">{title}</h3>
        <form
          name={`form-${name}`}
          method="post"
          className="page-form__form"
          id={`form-${name}`}
          action="/"
          onSubmit={onSubmit}
        >
          <div className="page-form__inputs">
            {pageType === "register" ? (
              <label className="page-form__form-label">
                <span className="page-form__input-title">Имя</span>
                <input
                  type="text"
                  className="page-form__input"
                  name="name"
                  placeholder="Введите имя"
                  id="name-input"
                  required
                  onChange={handleNameOnChange}
                  minLength={2}
                  maxLength={30}
                  value={inputName || ""}
                />
                {/* <span className="page-form__error">Вы пропустили это поле.</span> */}
              </label>
            ) : null}
            <label className="page-form__form-label">
              <span className="page-form__input-title">E-mail</span>
              <input
                type="email"
                className="page-form__input"
                name="email"
                placeholder="Введите email"
                id="email-input"
                required
                onChange={handleEmailOnChange}
                value={inputEmail || ""}
              />
              {/* <span className="page-form__error">Вы пропустили это поле.</span> */}
            </label>
            <label className="page-form__form-label">
              <span className="page-form__input-title">Пароль</span>
              <input
                type="password"
                className="page-form__input page-form__input-error"
                name="password"
                placeholder="Введите Пароль"
                id="password-input"
                required
                onChange={handlePasswordOnChange}
                minLength={2}
                value={inputPassword || ""}
              />
              <span className="page-form__error">Что-то пошло не так...</span>
            </label>
          </div>
          <div className="page-form__submit-container">
            <button
              type="submit"
              className="page-form__submit button"
              onClick={handleOneClick}
            >
              {buttonText}
            </button>
            <span className="page-form__submit-error">
              При обновлении профиля произошла ошибка.
            </span>
          </div>
        </form>
        <div className="page-form__auth">
          <p className="page-form__auth-text">
            {authDescription}{" "}
            <Link to={authButtonLink} className="page-form__auth-link link">
              {authButtonText}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default PageWithForm;

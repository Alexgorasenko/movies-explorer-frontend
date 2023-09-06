import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./PageWithForm.css";
import "../Button/Button.css";
import "../Link/Link.css";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function PageWithForm({
  title,
  name,
  buttonText,
  authDescription,
  authButtonText,
  authButtonLink,
  pageType,
  onSubmit,
  isSuccess,
  setIsSuccess,
  isLoadingReq,
  loggedIn
}) {
  const { values, handleOneChange, resetForm, errors, isValid } =
    useFormWithValidation();

  const { success, msg } = isSuccess;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  useEffect(() => {
    resetForm();
  }, [loggedIn]);



  useEffect(() => {
    setIsSuccess({
      success: true,
      msg: "",
      open: false,
    });
  }, []);

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
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="page-form__inputs">
            {pageType === "register" ? (
              <label className="page-form__form-label">
                <span className="page-form__input-title">Имя</span>
                <input
                  type="text"
                  className={`page-form__input ${
                    errors.name ? "page-form__input-error" : ""
                  }`}
                  name="name"
                  placeholder="Введите имя"
                  id="name-input"
                  required
                  onChange={handleOneChange}
                  minLength={2}
                  maxLength={30}
                  value={values.name || ""}
                  disabled={isLoadingReq}
                />
                <span className="page-form__error">{errors.name || ""}</span>
              </label>
            ) : null}
            <label className="page-form__form-label">
              <span className="page-form__input-title">E-mail</span>
              <input
                type="email"
                className={`page-form__input ${
                  errors.email ? "page-form__input-error" : ""
                }`}
                name="email"
                placeholder="Введите email"
                id="email-input"
                required
                onChange={handleOneChange}
                value={values.email || ""}
                disabled={isLoadingReq}
              />
              <span className="page-form__error">{errors.email || ""}</span>
            </label>
            <label className="page-form__form-label">
              <span className="page-form__input-title">Пароль</span>
              <input
                type="password"
                className={`page-form__input ${
                  errors.password && "page-form__input-error"
                }`}
                name="password"
                placeholder="Введите Пароль"
                id="password-input"
                required
                onChange={handleOneChange}
                minLength={2}
                value={values.password || ""}
                disabled={isLoadingReq}
              />
              <span className="page-form__error">{errors.password || ""}</span>
            </label>
          </div>
          <div className="page-form__submit-container">
            <button
              type="submit"
              className="page-form__submit button"
              disabled={!isValid || isLoadingReq}
            >
              {buttonText}
            </button>
            {!success && <span className="page-form__submit-error">{msg}</span>}
          </div>
        </form>
        <div className="page-form__auth">
          <p className="page-form__auth-text">
            {authDescription}{" "}
            <Link
              to={authButtonLink}
              className="page-form__auth-link link"
            >
              {authButtonText}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default PageWithForm;

import React, { useState, useEffect } from "react";
import "./Profile.css";

function Profile() {
  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [isOneCange, setIsOneCange] = useState(false);

  function handleNameOnChange(e) {
    setInputName(e.target.value);
  }

  function handleEmailOnChange(e) {
    setInputEmail(e.target.value);
  }

  function handleIsOneCange() {
    setIsOneCange(true);
  }

  function handleIsSave(e) {
    e.preventDefault();
    setIsOneCange(false);
  }

  return (
    <section className="profile">

      <h3 className="profile__title">Привет, Виталий!</h3>
      <form className="profile__form">
        <div className="profile__form-input-container">
          <label className="profile__form-input-title">Имя</label>
          <input
            type="name"
            className="profile__input"
            name="name"
            value={inputName || ""}
            onChange={handleNameOnChange}
            required
            placeholder="Name"
          />
          {/* <span className="profile__from-input-error">
            Вы пропустили это поле.
          </span> */}
        </div>
        <div className="profile__form-input-container">
          <label className="profile__form-input-title">E-mail</label>
          <input
            type="email"
            className="profile__input"
            name="email"
            value={inputEmail || ""}
            onChange={handleEmailOnChange}
            required
            placeholder="E-mail"
          />
          {/* <span className="profile__from-input-error">
            Вы пропустили это поле.
          </span> */}
        </div>
        <div className="profile__buttons">
        {!isOneCange ? (
          <>
            <button className="profile__form-edit" onClick={handleIsOneCange}>
              Редактировать
            </button>
            <button className="profile__logout">Выйти из аккаунта</button>
          </>
        ) : (
          <button
            type="submit"
            className="profile-form__submit"
            onClick={handleIsSave}
          >Сохранить</button>
        )}
        </div>
      </form>

    </section>
  );
}

export default Profile;

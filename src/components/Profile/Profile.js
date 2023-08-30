import React, { useState, useEffect } from "react";
import "./Profile.css";
import "../Button/Button.css";
import { Link } from "react-router-dom";

function Profile({signOut, handleUpdateUser}) {
  const [isOneCange, setIsOneCange] = useState(false);
 function handleIsOneCange(e) {
    e.preventDefault();
    setIsOneCange(true);
  }
  const [formValue, setFormValue] = useState({
    name:"",
    email: "",
  });

  const handleOneChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser(formValue);
  };


  return (
    <section className="profile">
      <h3 className="profile__title">Привет, Виталий!</h3>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__form-input-container">
          <label className="profile__form-input-title">Имя</label>
          <input
            type="name"
            className="profile__input"
            name="name"
            value={formValue.name || ""}
            onChange={handleOneChange}
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
            value={formValue.email || ""}
            onChange={handleOneChange}
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
              <button
                className="profile__form-edit button"
                onClick={handleIsOneCange}
              >
                Редактировать
              </button>
                <button className="profile__logout button" onClick={signOut}>
                  Выйти из аккаунта
                </button>
            </>
          ) : (
            <div className="profile-form__submit-container">
              <button
                type="submit"
                className="profile-form__submit button"
              >
                Сохранить
              </button>
              <span className="profile-form__submit-error">
                При обновлении профиля произошла ошибка.
              </span>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}

export default Profile;

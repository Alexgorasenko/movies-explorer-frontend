import React, { useState, useEffect } from "react";
import "./Profile.css";
import "../Button/Button.css";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ signOut, handleUpdateUser, isSuccess, isLoadingReq, isEdit, setIsEdit }) {
  const currentUserInfo = React.useContext(CurrentUserContext);

  const { values, handleOneChange, resetForm, errors, isValid } =
    useFormWithValidation();
  const { success, msg, open } = isSuccess;

  useEffect(() => {
    resetForm(currentUserInfo, {}, true);
  }, [currentUserInfo, resetForm]);

  const disabledSubmitButton =
    !isValid ||
    (currentUserInfo.name === values.name &&
      currentUserInfo.email === values.email);

      // const [isEdit, setIsEdit] = useState(false);

  function handleSetIsEdit(e) {
    e.preventDefault();
    setIsEdit(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser(values);
    // handleSetIsEdit(e);
  };

  return (
    <section className="profile">
      <h3 className="profile__title">Привет, {currentUserInfo.name}!</h3>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__form-input-container">
          <label className="profile__form-input-title">Имя</label>
          <input
            type="name"
            className="profile__input"
            name="name"
            value={values.name || ""}
            onChange={handleOneChange}
            required
            placeholder="Name"
            disabled={!isEdit || isLoadingReq}
          />
          <span className="profile__from-input-error">{errors.name || ""}</span>
        </div>
        <div className="profile__form-input-container">
          <label className="profile__form-input-title">E-mail</label>
          <input
            type="email"
            className="profile__input"
            name="email"
            value={values.email || ""}
            onChange={handleOneChange}
            required
            placeholder="E-mail"
            disabled={!isEdit || isLoadingReq}
          />
          <span className="profile__from-input-error">
            {errors.email || ""}
          </span>
        </div>
        <div className="profile__buttons">
          {!isEdit ? (
            <>
              <button
                className="profile__form-edit button"
                onClick={handleSetIsEdit}
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
                disabled={disabledSubmitButton || isLoadingReq}
              >
                Сохранить
              </button>
            </div>
          )}
          {success ? (
            <span
              className={`profile-form__submit-success ${
                open && "profile-form__submit-success_active"
              }`}
            >
              Профиль успешно обновлён
            </span>
          ) : (
            <span className="profile-form__submit-error">{msg}</span>
          )}
        </div>
      </form>
    </section>
  );
}

export default Profile;

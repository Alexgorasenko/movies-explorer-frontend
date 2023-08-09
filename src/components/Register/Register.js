import React from "react";
import PageWithForm from "../PageWithForm/PageWithForm";

function Register() {
  return (
    <PageWithForm
      name="register"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      authDescription="Уже зарегистрированы?"
      authButtonText="Войти"
      authButtonLink="/signin"
      pageType="register"
    ></PageWithForm>
  );
}

export default Register;

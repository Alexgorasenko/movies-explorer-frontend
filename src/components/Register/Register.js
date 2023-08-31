import React, { useState, useEffect } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";


function Register({handleRegister, isSuccess}) {
  return (
    <PageWithForm
      name="register"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      authDescription="Уже зарегистрированы?"
      authButtonText="Войти"
      authButtonLink="/signin"
      pageType="register"
      onSubmit={handleRegister}
      isSuccess={isSuccess}
    ></PageWithForm>
  );
}

export default Register;

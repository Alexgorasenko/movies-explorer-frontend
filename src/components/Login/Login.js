import React, { useState, useEffect } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";

function Login({ handleAuthorize, isSuccess }) {
  return (
    <PageWithForm
      name="login"
      title="Рады видеть!"
      buttonText="Войти"
      authDescription="Ещё не зарегистрированы?"
      authButtonText="Регистрация"
      authButtonLink="/signup"
      pageType="login"
      onSubmit={handleAuthorize}
      isSuccess={isSuccess}
    ></PageWithForm>
  );
}

export default Login;

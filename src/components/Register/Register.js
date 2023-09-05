import React from "react";
import PageWithForm from "../PageWithForm/PageWithForm";
import { Navigate } from "react-router-dom";

function Register({
  handleRegister,
  isSuccess,
  loggedIn,
  setIsSuccess,
  isLoadingReq,
}) {
  return (
    <>
      {!loggedIn ? (
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
          setIsSuccess={setIsSuccess}
          isLoadingReq={isLoadingReq}
        ></PageWithForm>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
}

export default Register;

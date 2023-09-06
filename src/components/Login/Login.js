import React from "react";
import PageWithForm from "../PageWithForm/PageWithForm";
import { Navigate } from "react-router-dom";

function Login({
  handleAuthorize,
  isSuccess,
  loggedIn,
  setIsSuccess,
  isLoadingReq,
}) {
  return (
    <>
      {!loggedIn ? (
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
          setIsSuccess={setIsSuccess}
          isLoadingReq={isLoadingReq}
          loggedIn={loggedIn}
        ></PageWithForm>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
}

export default Login;

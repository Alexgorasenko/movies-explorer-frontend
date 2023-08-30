import React, { useState, useEffect } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";

function Login({handleAuthorize}) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
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
    handleAuthorize(formValue);
  };


  return (
    <PageWithForm
      name="login"
      title="Рады видеть!"
      buttonText="Войти"
      authDescription="Ещё не зарегистрированы?"
      authButtonText="Регистрация"
      authButtonLink="/signup"
      pageType="login"
      onSubmit={handleSubmit}
      handleOneChange={handleOneChange}
      formValue={formValue}
    ></PageWithForm>
  );
}

export default Login;

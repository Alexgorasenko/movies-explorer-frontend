import React, { useState, useEffect } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";

function Register({handleRegister}) {
  const [formValue, setFormValue] = useState({
    name:"",
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
    console.log(formValue);
    handleRegister(formValue);
  };


  return (
    <PageWithForm
      name="register"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      authDescription="Уже зарегистрированы?"
      authButtonText="Войти"
      authButtonLink="/signin"
      pageType="register"
      onSubmit={handleSubmit}
      handleOneChange={handleOneChange}
      formValue={formValue}
    ></PageWithForm>
  );
}

export default Register;

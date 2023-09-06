import { useState, useCallback } from "react";
import isEmail from "validator/es/lib/isEmail";

export default function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleOneChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      if (!isEmail(value)) {
        e.target.setCustomValidity("Некорректый адрес почты.");
      } else {
        e.target.setCustomValidity("");
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };
  const resetForm = useCallback(
    (newValue = {}, newError = {}, newIsValid = false) => {
      console.log(newValue);
      setValues(newValue);
      setErrors(newError);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, errors, isValid, handleOneChange, resetForm, setIsValid, setValues};
}

import React, { useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import "../Button/Button.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLocation } from "react-router-dom";

function SearchForm({
  handeSearchMovie,
  handeIsShortMovie,
  isShortMovie,
  values,
  handleOneChange,
}) {
  const currentUserInfo = React.useContext(CurrentUserContext);
  const location = useLocation();

  const handeOneSubmit = (e) => {
    e.preventDefault();
    handeSearchMovie(values.search);
  };

  useEffect(() => {
    if (location.pathname === "/movies") {
      const searchValue = localStorage.getItem(
        `${currentUserInfo.email} - movieSearch`
      );
      values.search = searchValue;
    } else {
      values.search = "";
    }
  }, [currentUserInfo]);

  return (
    <article className="search-form">
      <form className="search-form__form" onSubmit={handeOneSubmit} noValidate>
        <div className="search-form__container">
          <input
            className="search-form__input"
            name="search"
            placeholder="Фильм"
            value={values.search || ""}
            onChange={handleOneChange}
            required
          ></input>
          <button className="search-form__submit button"></button>
        </div>
        <FilterCheckbox
          isShortMovie={isShortMovie}
          handeIsShortMovie={handeIsShortMovie}
        ></FilterCheckbox>
      </form>
    </article>
  );
}

export default SearchForm;

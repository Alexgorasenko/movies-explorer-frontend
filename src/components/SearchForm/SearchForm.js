import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css"
import find from "../../images/find.png";



function SearchForm () {


  return (
      <section>
        <form className="search-form">
          <div className="search-form__container">
            <input className="search-form__input" placeholder="Фильм"></input>
            <button className="search-form__submit">
            {/* <img src={find} alt="Логотип сайта" className="search-form__submit-image" /> */}
            </button>
          </div>
          <FilterCheckbox></FilterCheckbox>
        </form>
      </section>
  );
}

export default SearchForm ;

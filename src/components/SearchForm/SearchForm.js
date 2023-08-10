import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";



function SearchForm () {


  return (
      <section>
        <form className="search-form">
          <div className="search-form__container">
            <input className="search-form__input"></input>
            <button className="search-form__submit"></button>
          </div>
          <FilterCheckbox></FilterCheckbox>
        </form>
      </section>
  );
}

export default SearchForm ;

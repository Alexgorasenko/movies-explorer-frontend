import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({isShortMovie, handeIsShortMovie}) {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input
          type="checkbox"
          className="filter-checkbox__input"
          checked={isShortMovie}
          onChange={handeIsShortMovie}
        />
        <span className="filter-checkbox__slider"></span>
      </label>
      <p className="filter-checkbox__description">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;

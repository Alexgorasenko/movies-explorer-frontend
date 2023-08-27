import React from "react";
import "./Burger.css";

function Burger(props) {
  return (
    <>
      <button className={`burger ${props.isBurgerOpen ? ('burger_active') :('')}`} onClick={props.handleOneClick}>
        <span></span>
      </button>
    </>
  );
}

export default Burger;

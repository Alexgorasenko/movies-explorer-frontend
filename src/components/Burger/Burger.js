import React from "react";
import "./Burger.css";

function Burger(props) {
  return (
    <>
      <button className="burger" onClick={props.handleOneClick}>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </button>
    </>
  );
}

export default Burger;

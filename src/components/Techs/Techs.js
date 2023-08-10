import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__description">
        <h3 className="techs__description-title">7 технологий</h3>
        <p className="techs__description-text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="techs__list">
        <li className="techs__item">
          <span className="techs__item-name">HTML</span>
        </li>
        <li className="techs__item">
          <span className="techs__item-name">CSS</span>
        </li>
        <li className="techs__item">
          <span className="techs__item-name">JS</span>
        </li>
        <li className="techs__item">
          <span className="techs__item-name">React</span>
        </li>
        <li className="techs__item">
          <span className="techs__item-name">Git</span>
        </li>
        <li className="techs__item">
          <span className="techs__item-name">Express.js</span>
        </li>
        <li className="techs__item">
          <span className="techs__item-name">mongoDB</span>
        </li>
      </ul>
    </section>
  );
}

export default Techs;

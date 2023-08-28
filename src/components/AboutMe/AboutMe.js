import React from "react";
import "./AboutMe.css";
import avatar from "../../images/avatar.png";
import "../Link/Link.css";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__information">
        <div className="about-me__description">
          <h3 className="about-me__description-title">Александр</h3>
          <p className="about-me__description-subtitle">
            Фронтенд-разработчик, 26 лет
          </p>
          <p className="about-me__description-text">
            Я родился и живу в Калининграде, закончил факультет судостроения и
            энергетики КГТУ. В 2022 году закончил курсы от Яндекс практикума по
            специальности QA и сейчас работаю в IT-компании на этой должности. У
            меня есть жена и сын. После того как пройду курсы по веб-разработке
            планирую заниматься фриланс заказами и улучшать свои навыки
            разработчика.
          </p>
          <a
            href="https://github.com/Alexgorasenko?tab=repositories"
            target="_blank"
            className="about-me__description-link link"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div className="about-me__photo">
          <img src={avatar} alt="Аватар профиля" className="about-me__avatar" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

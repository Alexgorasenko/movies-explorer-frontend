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
          <h3 className="about-me__description-title">Виталий</h3>
          <p className="about-me__description-subtitle">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__description-text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href="http://vodlozero.ru"
            target="_blank"
            className="about-me__description-link link"
            rel="noreferrer">
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

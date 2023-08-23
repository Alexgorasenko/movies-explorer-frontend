import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__detale">
        <p className="footer__copyright">&copy; 2023. Александр Горащенко</p>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              className="footer__link"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__links-item">
            <a
              href="https://github.com/Alexgorasenko"
              target="_blank"
              className="footer__link"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

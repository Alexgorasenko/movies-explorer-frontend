import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__detale">
        <p className="footer__copyright">&copy; 2023. Александр Горащенко</p>
        <nav className="footer__links">
          <a href="https://practicum.yandex.ru/" target="_blank" class="footer__link" rel="noreferrer">
            Яндекс.Практикум
          </a>
          <a href="https://github.com/Alexgorasenko" target="_blank" class="footer__link" rel="noreferrer">
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

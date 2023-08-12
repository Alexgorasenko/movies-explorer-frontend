import React from "react";
import "./PageNotFound.css"



function PageNotFound() {


  return (
      <section className="page-not-found">
        <h3 className="page-not-found__tile">404</h3>
        <p className="page-not-found__subtile">Страница не найдена</p>
        <button className="page-not-found__button">Назад</button>
      </section>
  );
}

export default PageNotFound;

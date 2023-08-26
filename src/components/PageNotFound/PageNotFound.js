import React from "react";
import "./PageNotFound.css";
import {useNavigate} from "react-router-dom";


function PageNotFound() {

  const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }
  return (
    <section className="page-not-found">
      <h3 className="page-not-found__tile">404</h3>
      <p className="page-not-found__subtile">Страница не найдена</p>
      <button className="page-not-found__button" onClick={goBack}>Назад</button>
    </section>
  );
}

export default PageNotFound;

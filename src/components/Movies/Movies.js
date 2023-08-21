import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css"


function Movies() {


  return (
    <section className="movies">
      <SearchForm></SearchForm>
      {/* <Preloader></Preloader> */}
      <MoviesCardList></MoviesCardList>
      <button className="movies__more-button">Ещё</button>
    </section>
  );
}

export default Movies;

import React from "react";
import movies from "../../utils/Movies";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies({handeOneSubmit, isAllMovies, handleSavedMovie, handleDeleteSavedMovie, savedMovies}) {
  return (
    <section className="movies">
      <SearchForm handeOneSubmit={handeOneSubmit}></SearchForm>
      {/* <Preloader></Preloader> */}
      <MoviesCardList movies={isAllMovies} handleSavedMovie={handleSavedMovie} handleDeleteSavedMovie={handleDeleteSavedMovie} savedMovies={savedMovies}></MoviesCardList>
    </section>
  );
}

export default Movies;


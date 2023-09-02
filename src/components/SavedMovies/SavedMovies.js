import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({savedMovies, handleDeleteSavedMovie}) {
  return (
    <section className="saved-movies">
      <SearchForm></SearchForm>
      {/* <Preloader></Preloader> */}
      <MoviesCardList movies={savedMovies} handleDeleteSavedMovie={handleDeleteSavedMovie} ></MoviesCardList>
    </section>
  );
}

export default SavedMovies;

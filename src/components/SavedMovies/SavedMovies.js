import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

const movies = [
  {
    _id: "123123213213123",
    name: "Film 1",
    link: "https://www.ejin.ru/wp-content/uploads/2017/09/7-667.jpg",
    duration: "1,23",
    savedFavorite: true,
  },
  {
    _id: "123123213213123",
    name: "Film 1",
    link: "https://www.ejin.ru/wp-content/uploads/2017/09/7-667.jpg",
    duration: "1,23",
    savedFavorite: true,
  },
  {
    _id: "123123213213123",
    name: "Film 1",
    link: "https://www.ejin.ru/wp-content/uploads/2017/09/7-667.jpg",
    duration: "1,23",
    savedFavorite: true,
  },
];

function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm></SearchForm>
      <Preloader></Preloader>
      <MoviesCardList></MoviesCardList>
    </section>
  );
}

export default SavedMovies;

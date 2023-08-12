import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css"
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
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
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
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
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
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
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
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
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
    name: "Film 2",
    link: "https://w.forfun.com/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg",
    duration: "1,22",
    savedFavorite: false,
  },
];

function MoviesCardList() {
  return (
    <section className="movies">
      {movies.map((movie) => {
        return <MoviesCard key={movie._id} movie={movie} />;
      })}
    </section>
  );
}

export default MoviesCardList;

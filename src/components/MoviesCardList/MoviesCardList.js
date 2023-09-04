import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import "../Button/Button.css";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  movies,
  handleSavedMovie,
  handleDeleteSavedMovie,
  savedMovies,
}) {
  const [width, setWidth] = useState(window.innerWidth);
  const [moviesListLength, setmoviesListLength] = useState(12);

  const location = useLocation();

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width > 1024) {
      setmoviesListLength(12);
    } else if (width <= 1024 && width >= 601) {
      setmoviesListLength(8);
    } else {
      setmoviesListLength(5);
    }
  }, [width]);

  const showMoreMovies = () => {
    if (width > 1024) {
      setmoviesListLength(moviesListLength + 12);
    } else if (width <= 1024 && width >= 601) {
      setmoviesListLength(moviesListLength + 8);
    } else {
      setmoviesListLength(moviesListLength + 5);
    }
  };

  return (
    <section className="movies-cards">
      <div className="movies-cards__list">
        {movies.slice(0, moviesListLength).map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              movie={movie}
              handleSavedMovie={handleSavedMovie}
              handleDeleteSavedMovie={handleDeleteSavedMovie}
              savedMovies={savedMovies}
              isSaved={
                location.pathname === "/saved-movies"
                  ? true
                  : savedMovies.some((item) => item.movieId === movie.id)
              }
            />
          );
        })}
      </div>
      {moviesListLength < movies.length && (
        <button
          className="movies-cards__more-button button"
          onClick={showMoreMovies}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;

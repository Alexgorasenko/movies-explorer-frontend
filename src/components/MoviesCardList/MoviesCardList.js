import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import "../Button/Button.css";
import { useLocation } from "react-router-dom";
import { DEVICE_PARAMS } from "../../utils/constants.js";

function MoviesCardList({
  movies,
  handleSavedMovie,
  handleDeleteSavedMovie,
  savedMovies,
  requestMovie,
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
    if (width > DEVICE_PARAMS.desktop.width) {
      setmoviesListLength(DEVICE_PARAMS.desktop.movies.total);
    } else if (
      width <= DEVICE_PARAMS.desktop.width &&
      width >= DEVICE_PARAMS.mobile.width
    ) {
      setmoviesListLength(DEVICE_PARAMS.tablet.movies.total);
    } else {
      setmoviesListLength(DEVICE_PARAMS.mobile.movies.total);
    }
  }, [width, requestMovie]);

  const showMoreMovies = () => {
    if (width > DEVICE_PARAMS.desktop.width) {
      setmoviesListLength(moviesListLength + DEVICE_PARAMS.desktop.movies.more);
    } else if (
      width <= DEVICE_PARAMS.desktop.width &&
      width >= DEVICE_PARAMS.mobile.width
    ) {
      setmoviesListLength(moviesListLength + DEVICE_PARAMS.tablet.movies.more);
    } else {
      setmoviesListLength(moviesListLength + DEVICE_PARAMS.mobile.movies.more);
    }
  };

  return (
    <section className="movies-cards">
      {location.pathname === "/saved-movies" ? (
        <div className="movies-cards__list">
          {movies.map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                movie={movie}
                handleSavedMovie={handleSavedMovie}
                handleDeleteSavedMovie={handleDeleteSavedMovie}
                savedMovies={savedMovies}
                isSaved={true}
              />
            );
          })}
        </div>
      ) : (
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
      )}

      {moviesListLength < movies.length && (
        <button
          className={`movies-cards__more-button ${
            location.pathname === "/saved-movies" &&
            "movies-cards__more-button-hidden"
          }  button`}
          onClick={showMoreMovies}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;

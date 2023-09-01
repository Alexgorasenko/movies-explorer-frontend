import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import "../Button/Button.css";

function MoviesCardList({ movies, handleSavedMovie, handleDeleteSavedMovie, savedMovies }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [moviesListLength, setmoviesListLength] = useState(12);

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
            />
          );
        })}
      </div>
      {moviesListLength < movies.length && (
        <button className="movies-cards__more-button button">Ещё</button>
      )}
    </section>
  );
}

export default MoviesCardList;

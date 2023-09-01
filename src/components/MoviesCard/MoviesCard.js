import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({movie, handleSavedMovie, handleDeleteSavedMovie, savedMovies}) {
  const isSaved = savedMovies.some((item) => item.movieId === movie.id);

  const transformDuration = (duration) => {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    if (hours === 0) {
      return `${minutes}м`;
    } else {
      return `${hours}ч ${minutes}м`;
    }
  };

  const location = useLocation();

  return (
    <article className="movie-card">
      <div className="movie-card__picture">
        <img
          src={`https://api.nomoreparties.co/${movie.image.url}`}
          alt={movie.name}
          className="movie-card__image"
        />
        {isSaved ? (
          <button
            className={
              location.pathname === "/saved-movies"
                ? "movie-card__delete movie-card__favorite-position  movie-card__delete-from-saved-movie"
                : "movie-card__delete movie-card__favorite-position  movie-card__delete-from-movie"
            }
            onClick={()=>{handleDeleteSavedMovie(movie)}}
          ></button>
        ) : (
          <button
            className="movie-card__favorite movie-card__favorite-position"
            onClick={()=>{handleSavedMovie(movie)}}
          >
            Сохранить
          </button>
        )}
      </div>
      <div className="movie-card__description">
        <h2 className="movie-card__title">{movie.nameRU}</h2>
        <div className="movie-card__duration-container">
          <p className="movie-card__duration">{transformDuration(movie.duration)}</p>
        </div>
      </div>
    </article>
  );
}

export default MoviesCard;

import { SHORTMOVIES_DURATION } from "./constants";

export const filterShortMovies = (movies) => {
  return movies.filter((movie) => movie.duration < SHORTMOVIES_DURATION);
};

export const filterMovies = (movies, userQuery, shortMoviesCheckbox) => {
  const moviesByUserQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userMovie = userQuery.toLowerCase().trim();
    return (
      movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1
    );
  });

  if (shortMoviesCheckbox) {
    return filterShortMovies(moviesByUserQuery);
  } else {
    return moviesByUserQuery;
  }
};
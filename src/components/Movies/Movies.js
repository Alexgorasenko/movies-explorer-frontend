import React, { useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import * as MoviesApi from "../../utils/MoviesApi.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { filterMovies, filterShortMovies } from "../../utils/FiltredMovies";

function Movies({
  handleSavedMovie,
  handleDeleteSavedMovie,
  savedMovies,
  setIsInfoTitle,
  isInfoTitle,
  setIsLoading,
  isLoading,
  isLoadingMovies,
  setIsLoadingMovies,
}) {
  const currentUserInfo = React.useContext(CurrentUserContext);
  const { values, handleOneChange } = useFormWithValidation();
  const [isAllMovies, setIsAllMovies] = useState([]);
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [requestMovie, setRequestMovie] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handeIsShortMovie = () => {
    setIsShortMovie(!isShortMovie);
    if (!isShortMovie) {
      setFilteredMovies(filterShortMovies(requestMovie));
    } else {
      setFilteredMovies(requestMovie);
    }
    localStorage.setItem(
      `${currentUserInfo.email} - shortMovies`,
      !isShortMovie
    );
  };

  function handleSetFilteredMovies(movies, userQuery, shortMoviesCheckbox) {
    const moviesList = filterMovies(movies, userQuery, shortMoviesCheckbox);
    if (moviesList.length === 0) {
      setIsInfoTitle({
        successful: false,
        msg: "Ничего не найдено.",
      });
    } else {
      setIsInfoTitle({
        successful: true,
        msg: "",
      });
    }
    setRequestMovie(moviesList);
    setFilteredMovies(
      shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList
    );
    localStorage.setItem(
      `${currentUserInfo.email} - movies`,
      JSON.stringify(moviesList)
    );
  }

  const handeSearchMovie = (inputValue) => {
    localStorage.setItem(`${currentUserInfo.email} - movieSearch`, inputValue);
    localStorage.setItem(
      `${currentUserInfo.email} - shortMovies`,
      isShortMovie
    );

    if (!values.search) {
      setIsInfoTitle({
        successful: false,
        msg: "Нужно ввести ключевое слово",
      });
    }
    if (isAllMovies.length === 0) {
      setIsLoadingMovies(true);
      MoviesApi.getMovies()
        .then((movies) => {
          setIsAllMovies(movies);
          handleSetFilteredMovies(movies, inputValue, isShortMovie);
        })
        .catch(() => {
          setIsInfoTitle({
            successful: false,
            text: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.",
          });
          setIsLoadingMovies(true);
        })
        .finally(() => {
          setIsLoadingMovies(false);
        });
    } else {
      handleSetFilteredMovies(isAllMovies, inputValue, isShortMovie);
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem(`${currentUserInfo.email} - shortMovies`) === "true"
    ) {
      setIsShortMovie(true);
    } else {
      setIsShortMovie(false);
    }
  }, [currentUserInfo]);

  useEffect(() => {
    setIsLoadingMovies(false);
    if (localStorage.getItem(`${currentUserInfo.email} - movies`)) {
      const movies = JSON.parse(
        localStorage.getItem(`${currentUserInfo.email} - movies`)
      );
      setRequestMovie(movies);
      if (
        localStorage.getItem(`${currentUserInfo.email} - shortMovies`) ===
        "true"
      ) {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
        setIsInfoTitle({
          successful: false,
          msg: "Нужно ввести ключевое слово",
        });
      }
    }
  }, [currentUserInfo]);

  return (
    <section className="movies">
      {!isInfoTitle.success && (
        <h4 className="movies__info-title">{isInfoTitle.msg}</h4>
      )}
      <SearchForm
        handeSearchMovie={handeSearchMovie}
        handeIsShortMovie={handeIsShortMovie}
        isShortMovie={isShortMovie}
        values={values}
        handleOneChange={handleOneChange}
      ></SearchForm>
      {isLoadingMovies && <Preloader />}
      <MoviesCardList
        movies={filteredMovies}
        handleSavedMovie={handleSavedMovie}
        handleDeleteSavedMovie={handleDeleteSavedMovie}
        savedMovies={savedMovies}
      ></MoviesCardList>
    </section>
  );
}

export default Movies;

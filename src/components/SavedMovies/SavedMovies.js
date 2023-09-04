import React, { useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { filterMovies, filterShortMovies } from "../../utils/FiltredMovies";

function SavedMovies({
  savedMovies,
  handleDeleteSavedMovie,
  setIsInfoTitle,
  isInfoTitle,
  isLoadingSavedMovies,
  setIsLoadingMovies,
}) {
  const currentUserInfo = React.useContext(CurrentUserContext);
  const { values, handleOneChange } = useFormWithValidation();
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [requestSavedMovie, setRequestSavedMovie] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  function handleSearchSubmit(inputValue) {
    const moviesList = filterMovies(savedMovies, inputValue, isShortMovie);
    console.log(moviesList);
    if (moviesList.length === 0) {
      setFilteredSavedMovies([])
      setIsInfoTitle({
        success: false,
        msg: "Ничего не найдено.",
      });
    } else {
      setIsLoadingMovies(true);
      setFilteredSavedMovies(moviesList);
      setRequestSavedMovie(moviesList);
    }
    console.log(isInfoTitle);
  }

  function handleShortFilms() {
    if (!isShortMovie) {
      setIsShortMovie(true);
      localStorage.setItem(`${currentUserInfo.email} - shortSavedMovies`, true);
      setRequestSavedMovie(filterShortMovies(filteredSavedMovies));
    } else {
      setIsShortMovie(false);
      localStorage.setItem(
        `${currentUserInfo.email} - shortSavedMovies`,
        false
      );
      setRequestSavedMovie(filteredSavedMovies);
    }
  }
  useEffect(() => {
    if (
      localStorage.getItem(`${currentUserInfo.email} - shortSavedMovies`) ===
      "true"
    ) {
      setIsShortMovie(true);
      setRequestSavedMovie(filterShortMovies(savedMovies));
    } else {
      setIsShortMovie(false);
      setRequestSavedMovie(savedMovies);
    }
  }, [savedMovies, currentUserInfo]);

  useEffect(() => {
    setFilteredSavedMovies(savedMovies);
  }, [savedMovies]);





  return (
    <section className="saved-movies">
      {!isInfoTitle.success && (
        <h4 className="saved-movies__info-title">{isInfoTitle.msg}</h4>
      )}
      <SearchForm
        handeIsShortMovie={handleShortFilms}
        isShortMovie={isShortMovie}
        values={values}
        handleOneChange={handleOneChange}
        handeSearchMovie={handleSearchSubmit}
      ></SearchForm>
      {!isLoadingSavedMovies && <Preloader />}
      <MoviesCardList
        movies={filteredSavedMovies}
        handleDeleteSavedMovie={handleDeleteSavedMovie}
      ></MoviesCardList>
    </section>
  );
}

export default SavedMovies;

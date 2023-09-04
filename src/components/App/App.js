import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import * as MainApi from "../../utils/MainApi.js";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Preloader from "../Preloader/Preloader";

function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [isLoadingSavedMovies, setIsLoadingSavedMovies] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setСurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState({
    success: true,
    msg: "",
    open: false,
  });

  const [isInfoTitle, setIsInfoTitle] = useState({
    success: false,
    msg: "Введите название фильма и нажмите кнопку",
  });
  const [savedMovies, setSavedMovies] = useState([]);

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    setTimeout(() => {
      setIsSuccess({
        open: false,
      });
    }, 3000);
  }, [currentUser]);

  useEffect(() => {
    setIsLoadingSavedMovies(false);
    MainApi.getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(`Ошибка сервера ${err}`);
      })
      .finally(() => setIsLoadingSavedMovies(true));
  }, []);

  useEffect(() => {
    if (token) {
      MainApi.getUserInfo()
        .then((data) => {
          setСurrentUser(data);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(`Ошибка сервера ${err}`);
        })
        .finally(() => {
          setIsLoading(true);
        });
    }
  }, []);

  const signOut = () => {
    localStorage.clear();
    navigate("/");
    setLoggedIn(false);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleRegister = ({ name, password, email }) => {
    MainApi.register(name, password, email)
      .then((data) => {
        if (data._id) {
          handleAuthorize({ password, email });
          setIsSuccess({ success: true, msg: "" });
        }
      })
      .catch((err) => {
        setIsSuccess({ success: false, msg: err });
      });
  };

  const handleAuthorize = ({ email, password }) => {
    MainApi.authorize(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        navigate("/movies");
        handleLogin();
        setIsSuccess({ success: true, msg: "" });
      })
      .catch((err) => {
        setIsSuccess({ success: false, msg: err });
      });
  };

  const handleUpdateUser = ({ email, name }) => {
    MainApi.patchUserInfo({ email, name })
      .then((data) => {
        setСurrentUser(data);
        setIsSuccess({ success: true, msg: "", open: true });
      })
      .catch((err) => {
        console.log(`Ошибка сервера ${err}`);
        setIsSuccess({ success: false, msg: err });
      });
  };

  const handleSavedMovie = (movie) => {
    const {
      country,
      director,
      duration,
      year,
      description,
      trailerLink,
      owner,
      nameRU,
      nameEN,
    } = movie;

    MainApi.postSavedMovie({
      country,
      director,
      duration,
      year,
      description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      owner,
      movieId: movie.id,
      nameRU,
      nameEN,
    })
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch(console.log);
  };

  const handleDeleteSavedMovie = (movie) => {
    const savedMovie = savedMovies.find(
      (item) => item.id === movie.movieId || item.movieId === movie.movieId
    );
    MainApi.deleteSavedMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter((item) => {
          if (movie.id === item.movieId || item.movieId === movie.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMovies(newMoviesList);
      })
      .catch(console.log);
  };

  return (
    <div className="app">
      {!isLoading ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Header loggedIn={loggedIn} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Main></Main>} />
              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={Movies}
                    loggedIn={loggedIn}
                    handleSavedMovie={handleSavedMovie}
                    handleDeleteSavedMovie={handleDeleteSavedMovie}
                    savedMovies={savedMovies}
                    setIsInfoTitle={setIsInfoTitle}
                    isInfoTitle={isInfoTitle}
                    isLoadingMovies={isLoadingMovies}
                    setIsLoadingMovies={setIsLoadingMovies}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    element={SavedMovies}
                    loggedIn={loggedIn}
                    savedMovies={savedMovies}
                    handleDeleteSavedMovie={handleDeleteSavedMovie}
                    setIsInfoTitle={setIsInfoTitle}
                    isInfoTitle={isInfoTitle}
                    isLoadingSavedMovies={isLoadingSavedMovies}
                    setIsLoadingMovies={setIsLoadingMovies}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    element={Profile}
                    signOut={signOut}
                    handleUpdateUser={handleUpdateUser}
                    loggedIn={loggedIn}
                    isSuccess={isSuccess}
                  />
                }
              />
              <Route
                path="/signin"
                element={
                  <Login
                    handleAuthorize={handleAuthorize}
                    isSuccess={isSuccess}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <Register
                    handleRegister={handleRegister}
                    isSuccess={isSuccess}
                  />
                }
              />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer />
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;

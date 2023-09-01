import React, { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
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
import * as MoviesApi from "../../utils/MoviesApi.js";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setСurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState({
    success: true,
    msg: "",
    open: false,
  });

  const [isAllMovies, setIsAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    setTimeout(() => {
      setIsSuccess({
        open: false,
      });
    }, 3000);
  }, [isSuccess.open]);

  useEffect(() => {
    MainApi.getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(`Ошибка сервера ${err}`);
      });
  }, [isAllMovies]);

  useEffect(() => {
    if (token) {
      MainApi.getUserInfo()
        .then((data) => {
          setСurrentUser(data);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(`Ошибка сервера ${err}`);
        });
    }
  }, []);

  const signOut = () => {
    localStorage.removeItem("jwt");
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

  const hadleGetAllMovies = (e) => {
    e.preventDefault();
    MoviesApi.getMovies().then((data) => {
      setIsAllMovies(data);
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

    const isSaved = savedMovies.some((item) => item.movieId === movie.id);

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
    MainApi.deleteSavedMovie(movie.id)
      .then((data) => {
        const newMoviesList = savedMovies.filter((item) => {
          if (movie.id === item.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMovies(newMoviesList);
      })
      .catch(console.log);
  };

  console.log(savedMovies);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
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
                  handeOneSubmit={hadleGetAllMovies}
                  isAllMovies={isAllMovies}
                  handleSavedMovie={handleSavedMovie}
                  handleDeleteSavedMovie={handleDeleteSavedMovie}
                  savedMovies={savedMovies}
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
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

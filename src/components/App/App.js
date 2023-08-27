import logo from "../../logo.svg";
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

function App() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const handleOneClick = () => {
    if (isBurgerOpen) {
      setBurgerOpen(false);
    } else {
      setBurgerOpen(true);
    }
  };
  return (
    <div className='app'>
      <Header handleOneClick={handleOneClick} isBurgerOpen={isBurgerOpen} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

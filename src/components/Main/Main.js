import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";

import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import "./Main.css"
import { Route, Routes, Link } from "react-router-dom";



function Main() {


  return (
    <main className="content">

      <Promo></Promo>
      {/* <Routes>
      <Route path="techs" element={<Techs />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="about-project" element={<AboutProject />} />
      </Routes>
       */}
      <AboutProject></AboutProject>
      <Techs></Techs>
      <AboutMe></AboutMe>

      <Portfolio></Portfolio>

      </main>
  );
}

export default Main;

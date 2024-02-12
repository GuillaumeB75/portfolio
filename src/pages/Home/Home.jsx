import React from "react";
import "./home.scss";
import Start from "../../components/Start/Start";
import About from "../../components/About/About";
import Header from "../../components/Header/header";

import Skills from "../../components/Skills/Skills";
import Cards from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

function Home() {
  return (
    <div className="home_presentation">
      <Header />
      <Start />
      <About />
      <Skills />
      <Cards />
      <Contact />
     
    </div>
  );
}

export default Home;

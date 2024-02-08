import React from "react";
import "./home.scss";
import Start from "../../components/Start/Start";
import About from "../../components/About/About";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Skills from "../../components/Skills/Skills";
import Cards from "../../components/Projects/Projects";

function Home() {
  return (
    <div className="home_presentation">
      <Header />
      <Start />
      <About />
      <Skills />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;

import React from "react";
import "./home.scss";
import About from "../../components/About/About";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Skills from "../../components/Skills/Skills";

function Home() {
  return (
    <div className="home_presentation">
      <Header />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;

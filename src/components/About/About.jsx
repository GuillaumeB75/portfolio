import React from "react";
import { Element } from "react-scroll";
import "./about.scss";
import perso from "../../assets/images/perso.jpeg";
import data from "../../assets/data/projects.json";

function About() {
  const aboutData = data.about;

  return (
    <Element name="about" className="about-container">
      <div className="bio">
        <h2>{aboutData.title}</h2>
        <p>{aboutData.text}</p>
      </div>
      <div className="image-container">
        <img src={perso} alt="Guillaume Bézie" />
      </div>
    </Element>
  );
}

export default About;

import React from "react";
import { Element } from "react-scroll";
import "./about.scss";
import perso from "../../assets/images/perso.jpeg";

function About() {
  return (
    <Element name="about" className="about-container">
      <div className="bio">
        <h2>About Me</h2>
        <p>
        Lorem ipsum dolor sit amet,
          consectetur adipiscing elit...
        </p>
      </div>
      <div className="image-container">
        <img src={perso} alt="Guillaume Bézie" />
      </div>
    </Element>
  );
}

export default About;

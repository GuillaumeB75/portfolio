import React from "react";
import { Element } from "react-scroll";
import "./about.scss";
import perso from "../../assets/images/perso2.jpg";
import data from "../../assets/data/about.json";
import DownloadCVButton from "../../components/DownloadCVButton/DownloadCVButton";

function About() {
  const aboutData = data.about;

  return (
    <Element name="about" className="about-container">
      <div className="bio">
        <h2>{aboutData.title}</h2>
        <p>{aboutData.text}</p>
        <p>{aboutData.text2}</p>
        <a
          href="https://github.com/GuillaumeB75"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mon profil GitHub"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/guillaume-bezie/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mon profil LinkedIn"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <DownloadCVButton />
      </div>

      <div className="image-container">
        <img src={perso} alt="Moi" />
      </div>
    </Element>
  );
}

export default About;

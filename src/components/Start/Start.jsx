import React from "react";
import { Element } from "react-scroll";
import "./start.scss";


import data from "../../assets/data/projects.json";

function Start() {
  const aboutData = data.about;

  return (
    <Element name="Start" className="about-container">
      <div className="bio">
        <h2>{aboutData.title}</h2>
        <p>{aboutData.text}</p>
      </div>
     
      
    </Element>
  );
}

export default Start;
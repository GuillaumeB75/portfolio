import React from "react";
import { Element } from "react-scroll";
import "./start.scss";
import back from "../../assets/images/back.jpg";

function Start() {
  return (
    <Element
      name="Start"
      className="start-container"
      style={{ background: `url(${back})` }}
    >
      <div className="bio">
        <h1>Bonjour !</h1>
        <h1>Je suis Guillaume Bézie</h1>
        <h1>développeur intégrateur web</h1>
        <h1>et futur consultant AMOA</h1>
      </div>
    </Element>
  );
}

export default Start;

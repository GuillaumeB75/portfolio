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
        <p>Je suis Guillaume Bézie</p>
        <p>développeur front-end</p>
        <p>et votre futur consultant AMOA</p>
      </div>
    </Element>
  );
}

export default Start;

import React from "react";
import { Element } from "react-scroll";
import "./Skills.scss";

// Import des images
import javascriptImg from "../../assets/images/javascript.png"; // Mettez à jour le chemin
import reactImg from "../../assets/images/react.png"; // Mettez à jour le chemin
import sassImg from "../../assets/images/sass.png"; // Mettez à jour le chemin
import nodeImg from "../../assets/images/NodeJS.png"; // Mettez à jour le chemin
import mongoImg from "../../assets/images/MongoDB.png"; // Mettez à jour le chemin
import metamaskImg from "../../assets/images/MetaMask.png";
import jiraImg from "../../assets/images/Jira.jpeg"; // Mettez à jour le chemin
import htmlImg from "../../assets/images/HTML5.png"; // Mettez à jour le chemin
import hardhatImg from "../../assets/images/Hardhat.png"; // Mettez à jour le chemin
import githubImg from "../../assets/images/Github.png"; // Mettez à jour le chemin
import expressImg from "../../assets/images/ExpressJS.png";
import etherImg from "../../assets/images/EtherJS.png"; // Mettez à jour le chemin
import cssImg from "../../assets/images/CSS3.png"; // Mettez à jour le chemin
import bootstrapImg from "../../assets/images/Bootstrap.jpeg"; // Mettez à jour le chemin
import solidityImg from "../../assets/images/Solidity.png"; // Mettez à jour le chemin

// Répétez pour les autres technologies

function Skills() {
  return (
    <Element name="Skills" className="skills-container">
      <div className="card">
        <ul>
          <li>
            <img src={javascriptImg} alt="Javascript" /> JAVASCRIPT
          </li>
          <li>
            <img src={reactImg} alt="REACT.JS" /> REACT.JS
          </li>
          <li>
            <img src={solidityImg} alt="Solidity" /> SOLIDITY
          </li>
          <li>
            <img src={sassImg} alt="SASS" /> SASS
          </li>
          <li>
            <img src={htmlImg} alt="HTML5" /> HTML5
          </li>
        </ul>
      </div>
      <div className="card">
        <ul>
          <li>
            <img src={javascriptImg} alt="Javascript" /> Javascript
          </li>
          <li>
            <img src={reactImg} alt="REACT.JS" /> REACT.JS
          </li>
          <li>
            <img src={sassImg} alt="SASS" /> SASS
          </li>
          <li>
            <img src={reactImg} alt="REACT.JS" /> REACT.JS
          </li>
          <li>
            <img src={sassImg} alt="SASS" /> SASS
          </li>
        </ul>
      </div>
      <div className="card">
        <ul>
          <li>
            <img src={javascriptImg} alt="Javascript" /> Javascript
          </li>
          <li>
            <img src={reactImg} alt="REACT.JS" /> REACT.JS
          </li>
          <li>
            <img src={sassImg} alt="SASS" /> SASS
          </li>
          <li>
            <img src={reactImg} alt="REACT.JS" /> REACT.JS
          </li>
          <li>
            <img src={sassImg} alt="SASS" /> SASS
          </li>
        </ul>
      </div>
    </Element>
  );
}

export default Skills;

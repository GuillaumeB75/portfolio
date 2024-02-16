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
import gitImg from "../../assets/images/Git.png"; // Mettez à jour le chemin
import expressImg from "../../assets/images/ExpressJS.png";
import etherImg from "../../assets/images/EtherJS.png"; // Mettez à jour le chemin
import cssImg from "../../assets/images/CSS3.png"; // Mettez à jour le chemin
import bootstrapImg from "../../assets/images/Bootstrap.jpeg"; // Mettez à jour le chemin
import solidityImg from "../../assets/images/Solidity.png"; // Mettez à jour le chemin



function Skills() {
  return (
    <Element name="Skills" className="skills-container">
      
      <div className="card">
        <ul>
          <li>
            <img src={javascriptImg} alt="logo Javascript" /> JAVASCRIPT
          </li>
          <li>
            <img src={reactImg} alt="logo REACT.JS" /> REACT.JS
          </li>
          <li>
            <img src={solidityImg} alt="logo Solidity" /> SOLIDITY
          </li>
          <li>
            <img src={sassImg} alt="logo SASS" /> SASS
          </li>
          <li>
            <img src={htmlImg} alt="logo HTML5" /> HTML5
          </li>
        </ul>
      </div>
      <div className="card">
        <ul>
          <li>
            <img src={cssImg} alt="logo CSS3" /> CSS3
          </li>
          <li>
            <img src={bootstrapImg} alt="logo BOOTSTRAP" /> BOOTSTRAP
          </li>
          <li>
            <img src={expressImg} alt="logo EXPRESS.JS" /> EXPRESS.JS
          </li>
          <li>
            <img src={nodeImg} alt="logo NODE.JS" /> NODE.JS
          </li>
          <li>
            <img src={mongoImg} alt="logo MongoDB" /> MongoDB
          </li>
        </ul>
      </div>
      <div className="card">
        <ul>
          <li>
            <img src={etherImg} alt="logo ETHER.JS" /> ETHER.JS
          </li>
          <li>
            <img src={hardhatImg} alt="logo HARDHAT" /> HARDHAT
          </li>
          <li>
            <img src={metamaskImg} alt="logo METAMASK" /> METAMASK
          </li>
          <li>
            <img src={jiraImg} alt="logo JIRA" /> JIRA
          </li>
          <li>
            <img src={gitImg} alt="logo GIT" /> GIT
          </li>
        </ul>
      </div>
    </Element>
  );
}

export default Skills;

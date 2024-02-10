import React from 'react';
import { Element } from "react-scroll";
import './Skills.scss';

function Skills() {
  
  return (
    <Element name="Skills" className="skills-container">
      <h2>Compétences</h2>
      <div>
        <ul>
          <li><i className="fa-brands fa-js fa-xl"></i> Javascript</li>
          <li><i className="fas fa-code"></i> REACT.JS</li>
          <li><i className="fas fa-code"></i> SASS</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><i className="fas fa-database"></i> Node.JS</li>
          <li><i className="fas fa-database"></i> MongoDB</li>
          <li><i className="fas fa-database"></i> Epress.JS</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><i className="fas fa-cloud"></i> Bootstrap</li>
          <li><i className="fas fa-cloud"></i> HTML5 et CSS3</li>
          <li><i className="fas fa-cloud"></i> Github</li>
        </ul>
      </div>
    </Element>
  );
}

export default Skills;

import React from 'react';
import { Element } from "react-scroll";
import './Skills.scss'; // Assurez-vous d'avoir un fichier CSS pour votre mise en page

function Skills() {
  // Vos listes de compétences ici. Utilisez les classes d'icônes Font Awesome appropriées.
  return (
    <Element name="Skills" className="skills-container">
      <h2>Skills</h2>
      <div>
        <ul>
          <li><i className="fas fa-code"></i> Développement Front-End</li>
          <li><i className="fas fa-code"></i> Développement Back-End</li>
          <li><i className="fas fa-code"></i> Full Stack Development</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><i className="fas fa-database"></i> MySQL</li>
          <li><i className="fas fa-database"></i> MongoDB</li>
          <li><i className="fas fa-database"></i> PostgreSQL</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><i className="fas fa-cloud"></i> AWS</li>
          <li><i className="fas fa-cloud"></i> Azure</li>
          <li><i className="fas fa-cloud"></i> Google Cloud</li>
        </ul>
      </div>
    </Element>
  );
}

export default Skills;

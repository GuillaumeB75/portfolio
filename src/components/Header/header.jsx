import React from "react";
import "./header.scss";

import { Link } from "react-scroll";

function Header() {
  return (
    <nav className="header">
      <Link to="Start" smooth={true} offset={-70} duration={1000} aria-label="Naviguer vers la section d'accueil">
        Accueil
      </Link>
      <Link to="about" smooth={true} duration={1000} aria-label="Naviguer vers la section à propos">
        À propos
      </Link>
      <Link to="Skills" smooth={true} offset={-70} duration={1000} aria-label="Naviguer vers la section compétences">
        Compétences
      </Link>
      <Link to="Projects" smooth={true} offset={-70} duration={1000} aria-label="Naviguer vers la section projets">
        Projets
      </Link>
      <Link to="Contact" smooth={true} offset={-70} duration={1000} aria-label="Naviguer vers la section contact">
        Contact
      </Link>
    </nav>
  );
}

export default Header;

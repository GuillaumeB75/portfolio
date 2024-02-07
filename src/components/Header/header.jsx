import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import perso from "../../assets/images/perso.jpeg";


function Header() {
  return (
    <nav className="header">
      <div className="image-container">
        <img src={perso} alt="Moi" />
      </div>
      
      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <Link to="about" smooth={true} duration={1000}>About</Link>

      <Link to="skills">
        <div>Skills</div>
      </Link>
      <NavLink to="/education">
        <div>Education</div>
      </NavLink>
      <NavLink to="/experience">
        <div>Experience</div>
      </NavLink>
      <NavLink to="/projects">
        <div>Projects</div>
      </NavLink>
      <NavLink to="/resume">
        <div>Resume</div>
      </NavLink>
    </nav>
  );
}

export default Header;
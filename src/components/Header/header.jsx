import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';


function Header() {
  return (
    <nav className="header">
      
      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <Link to="about" smooth={true} duration={1000}>About</Link>

      <NavLink to="/skills">
        <div>Skills</div>
      </NavLink>
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
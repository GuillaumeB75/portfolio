import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <nav className="header">
      
      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <NavLink to="/about">
        <div>About</div>
      </NavLink>
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
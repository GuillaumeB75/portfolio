import React from "react";
import "./header.scss";

import { Link } from 'react-scroll';



function Header() {
  return (
    <nav className="header">
      
      
      
      <Link to="Start" smooth={true} offset={-70} duration={1000}>Home</Link>
      <Link to="about" smooth={true} duration={1000}>About</Link>
      <Link to="Skills" smooth={true} offset={-70} duration={1000}>Skills</Link>
      <Link to="Projects" smooth={true} offset={-70} duration={1000}>Projects</Link>
      <Link to="Contact" smooth={true} offset={-70} duration={1000}>Contact</Link>

      

    </nav>
  );
}

export default Header;
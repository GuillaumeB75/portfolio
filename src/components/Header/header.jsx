import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
    </nav>
  );
}

export default Header;

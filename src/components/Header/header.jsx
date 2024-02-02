import React from "react";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="Header">
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
    </nav>
  );
}

export default Header;

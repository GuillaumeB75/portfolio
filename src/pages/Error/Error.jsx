import React from "react";
import "./error.scss";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";


function Error() {
  return (
    <div className="error_page">
      <h1>404</h1>
      <h2>Sorry, this page doesn't exist.</h2>
      <NavLink to="/">
        <h3>Come back to home</h3>
      </NavLink>
      <Footer />
    </div>
  );
}

export default Error;
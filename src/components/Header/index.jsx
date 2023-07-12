import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.png";
import head from "./header.scss";


function Header() {
  return (
    <div className="nav-container" style={head}>
      <img src={logo} alt="logo-kasa" className="nav-container__logo" />
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/Apropos">A Propos</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

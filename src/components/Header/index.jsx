import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.png";
import head from "./header.scss";


function Header() {
  return (
    <div className="nav-container" style={head}>
      <img src={logo} alt="logo-kasa" className="nav-container__logo" />
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/Apropos" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>A Propos</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;

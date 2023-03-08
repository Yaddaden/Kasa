import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/LOGO.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" aria-label="accueil">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "link link-actif" : "link")}
          end
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link link-actif" : "link")}
          end
          to="/About"
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

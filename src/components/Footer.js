import React from "react";
import "../styles/Footer.css";
import logo from "../assets/LOGO-Footer.png";
const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;

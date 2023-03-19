import React from "react";
import banner from "../assets/IMG-home.png";
import "../styles/Banner.css";

//Création de l'image bannière home avec la possibilité de lui passer des enfants.
const Banner = ({ children }) => {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      {children}
    </div>
  );
};

export default Banner;

import React from "react";
import bannerAbout from "../assets/IMG-apropos.png";
import "../styles/BannerAbout.css";

//Création de l'image bannière About.
const BannerAbout = () => {
  return (
    <div className="bannerAbout">
      <img src={bannerAbout} alt="banner About" />
    </div>
  );
};

export default BannerAbout;

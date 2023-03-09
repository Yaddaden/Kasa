import React from "react";
import banner from "../assets/IMG-home.png";
import "../styles/Banner.css";

const Banner = ({ children }) => {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      {children}
    </div>
  );
};

export default Banner;

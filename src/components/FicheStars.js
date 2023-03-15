import React from "react";
import etoileG from "../assets/etoile-grise.png";
import etoileR from "../assets/etoile-rose.png";

const FicheStars = ({ data }) => {
  const { description } = data;
  return (
    <>
      <div className="stars">
        <h1 className="starsTitle">{description}</h1>
        <h2 className="starsSubtitle"></h2>
        <div className="starsTags"></div>
        <p></p>
        <div className="startRiting"></div>
      </div>
    </>
  );
};

export default FicheStars;

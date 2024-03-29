import React from "react";
import etoileG from "../assets/etoile-grise.png";
import etoileR from "../assets/etoile-rose.png";
import "../styles/FicheStars.css";

const FicheStars = ({ rating }) => {
  const arrayStars = [1, 2, 3, 4, 5];
  return (
    //Affichage conditionnel des étoiles en score, de couleur rose(etoileR) ou grise (etoileG) selon le score passé en props.
    <div className="stars">
      {arrayStars.map((i) => {
        const value = i++;
        return (
          <img
            key={i}
            className="starsHoste"
            alt="stars"
            src={value <= rating ? etoileR : etoileG}
          />
        );
      })}
    </div>
  );
};

export default FicheStars;

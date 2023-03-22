import React, { useState } from "react";
import flecheUp from "../assets/fleche-up.png";
import flecheDn from "../assets/flecheDn.png";
import "../styles/Collapse.css";

const Collapse = ({ title, content }) => {
  const [text, setText] = useState(false); //definition le state du text(false par défaut)
  //Definition de la fonction display qui modifie la valeur text au clic
  const display = () => {
    setText(!text);
  };
  return (
    <>
      {/* Affichage de titre 
      affichage du collapse replié par défaut et l'ouvre au clic puis le referme au clic */}
      <div className="barCollaps">
        <div className="titleCollaps-fleche" onClick={display}>
          <h1 className="titleCollaps">{title}</h1>
          <img src={!text ? flecheDn : flecheUp} alt="ouvrir fermer" />
        </div>
        {text && <div className="textCollaps">{content}</div>}
      </div>
    </>
  );
};

export default Collapse;

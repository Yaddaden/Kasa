import React, { useState } from "react";
import "../styles/Carrousel.css";
import flecheDroite from "../assets/flecheDroite.png";
import flecheGauche from "../assets/flecheGauche.png";

const Carrousel = ({ pictures }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  // On repart au premier slide quand on arrive au dernier
  const nextSlide = () => {
    setActiveSlide(activeSlide === pictures.length - 1 ? 0 : activeSlide + 1);
  };
  // on repart au dernier slide quand on est au premier
  const prevSlide = () => {
    setActiveSlide(activeSlide === 0 ? pictures.length - 1 : activeSlide - 1);
  };

  return (
    <>
      {/* Récuperation des images du carrousel */}
      <div className="carrousel">
        {pictures &&
          pictures.map((v, k) => (
            <div
              key={k} //Mise en place du slider
              className={activeSlide === k ? "slide slideActive" : "slide"}
            >
              <img className="slideImg" src={v} alt="Aperçu du logement" />
            </div>
          ))}
        <p className="pagination">
          {activeSlide + 1}/{pictures.length}
        </p>
        {/* Affichage des flèches seulement si pictures.length > 1 */}
        {pictures.length > 1 && (
          <>
            {/* fixation de la fleche gauche  */}
            <span className="btn btn-prev" onClick={prevSlide}>
              <img src={flecheGauche} alt=" precedent" />
            </span>
            {/* Fixation de la fleche droite */}
            <span className="btn btn-next" onClick={nextSlide}>
              <img src={flecheDroite} alt=" suivant" />
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default Carrousel;

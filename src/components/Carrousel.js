import React, { useState } from "react";
import "../styles/Carrousel.css";
import flecheDroite from "../assets/flecheDroite.png";
import flecheGauche from "../assets/flecheGauche.png";

const Carrousel = ({ pictures }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide(activeSlide === pictures.length - 1 ? 0 : activeSlide + 1);
  };

  const prevSlide = () => {
    setActiveSlide(activeSlide === 0 ? pictures.length - 1 : activeSlide - 1);
  };

  return (
    <>
      <div className="carrousel">
        {pictures &&
          pictures.map((v, k) => (
            <div
              key={k}
              className={activeSlide === k ? "slide slideActive" : "slide"}
            >
              <img className="slideImg" src={v} alt="Aperçu du logement" />
            </div>
          ))}
        <p className="pagination">
          {activeSlide + 1}/{pictures.length}
        </p>
        {pictures.length > 1 && (
          <>
            <span className="btn btn-prev" onClick={prevSlide}>
              <img src={flecheGauche} alt=" precedent" />
            </span>
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

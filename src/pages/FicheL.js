import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import logements from "../logements.json";
import FicheTag from "../components/FicheTag";
import FicheStars from "../components/FicheStars";
import Profile from "../components/Profile";
import "../styles/FicheL.css";

const FicheL = () => {
  document.title = "kasa - Fiche logement";

  const { id } = useParams();
  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = logements.find((logement) => logement.id === id);

  return (
    <>
      <div className="ficheLogement">
        <Carrousel pictures={pictures} />
        <div className="profileRating">
          <div className="wrapperTitle">
            <h1 className="ficheTitle">{title}</h1>
            <p className="ficheText">{location}</p>
            <div className="buttonTags">
              {tags && tags.map((t, k) => <FicheTag name={t} key={k} />)}
            </div>
          </div>

          <div className="hostInfo">
            <Profile host={host} />
            <FicheStars rating={rating} />
          </div>
        </div>
        <div className="wrapperCollapse">
          <Collapse title="Description" content={description} />
          <Collapse
            title="Equipements"
            content={equipments.map((e, k) => (
              <p key={k}>{e}</p>
            ))}
          />
        </div>
      </div>
    </>
  );
};
export default FicheL;

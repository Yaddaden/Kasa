import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

// Création de lien pour accèder à la page fiche-Logement
// Récupèrez les couvertures et titres depuis home
const Card = ({ data }) => {
  const { id, title, cover } = data;
  return (
    <Link className="card" to={`/FicheL/${id}`}>
      <h2 className="titre">{title}</h2>
      <img src={cover} alt={title} />
    </Link>
  );
};

export default Card;

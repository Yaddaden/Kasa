import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const { id, title, cover } = data;
  const navigation = useNavigate();
  const idCard = () => {
    navigation(`/FicheL/${id}`);
  };
  return (
    <div className="card" onClick={idCard}>
      <h2 className="titre">{title}</h2>
      <img src={cover} alt={title} />
    </div>
  );
};

export default Card;

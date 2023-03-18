import React from "react";
import Banner from "../components/Banner";
import "../styles/Home.css";
import logements from "../logements.json";
import Card from "../components/Card";

const Home = () => {
  document.title = "kasa - Accueil";

  return (
    // Création de banniere home et son titre.
    <>
      <div className="home">
        <Banner>
          <h1 className="homeTitle">
            <span>Chez vous,&nbsp;</span>
            <span>partout et ailleurs</span>
          </h1>
        </Banner>
      </div>
      {/* Récupération des données depuis le fichier (logements.json=) */}
      <div className="cards">
        {logements.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>
    </>
  );
};

export default Home;

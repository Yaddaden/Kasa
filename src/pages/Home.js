import React from "react";
import Banner from "../components/Banner";
import "../styles/Home.css";
import logement from "../logements.json";
import Card from "../components/Card";

const Home = () => {
  document.title = "kasa - Accueil";
  const hotel = logement;

  return (
    <>
      <div className="home">
        <Banner>
          <h1>
            <span>Chez vous,&nbsp;</span>
            <span>partout et ailleurs</span>{" "}
          </h1>
        </Banner>
      </div>
      <div className="cards">
        {hotel.length > 0 &&
          hotel.map((card) => <Card data={card} key={card.id} />)}
      </div>
    </>
  );
};

export default Home;

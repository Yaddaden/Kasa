import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import logements from "../logements.json";
import FicheTag from "../components/FicheTag";
import FicheStars from "../components/FicheStars";
import Profile from "../components/Profile";
import Error from "../pages/Error";
import "../styles/FicheL.css";

const FicheL = () => {
  document.title = "kasa - Fiche logement";
  // Recuperation du id
  const { id } = useParams();
  const data = logements.find((logement) => logement.id === id);
  // Au cas d'erreur sur lurl on accède à la page d'erreur 404
  if (data === undefined) {
    return <Error />;
  }
  //destructuration de (data) récupérés depuis le fichier (logement.json)
  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = data;

  return (
    <>
      {/* //Affichage des photos, le titre de la location et l'adresse
      //Récupération de la valeur et la clé du tableau tags */}
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
          {/* Création du profil utilisateur et les étoiles */}
          <div className="hostInfo">
            <Profile host={host} />
            <FicheStars rating={rating} />
          </div>
        </div>
        {/* Création de Collapse (Description) & (Equipements). 
        Récuperation du tableau (equipments) et sa clé. */}
        <div className="wrapperCollapse">
          <Collapse title="Description" content={description} />
          <Collapse
            title="Equipements"
            content={equipments && equipments.map((e, k) => <p key={k}>{e}</p>)}
          />
        </div>
      </div>
    </>
  );
};
export default FicheL;

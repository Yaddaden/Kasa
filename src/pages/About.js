import BannerAbout from "../components/BannerAbout";
import Data from "../Data";
import Collapse from "../components/Collapse";
import "../styles/About.css";

const About = () => {
  document.title = "kasa - A propos";

  return (
    <>
      {/* Utilisation de la bannière About */}
      <div className="bannerAbout">
        <BannerAbout />
      </div>
      {/* Récupération des données depuis le fichier (Data) vers les Collapses */}
      <div className="container">
        <div className="bloc">
          {Data.map((val, k) => (
            <Collapse key={k} {...val} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;

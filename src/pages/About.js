import BannerAbout from "../components/BannerAbout";
import Data from "../Data";
import Collapse from "../components/Collapse";
import "../styles/About.css";

const About = () => {
  document.title = "kasa - A propos";

  return (
    <>
      <div className="bannerAbout">
        <BannerAbout />
      </div>

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

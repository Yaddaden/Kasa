import React from "react";
import BannerAbout from "../components/BannerAbout";

const About = () => {
  document.title = "kasa - A propos";
  return (
    <>
      <div className="bannerAbout">
        <BannerAbout />
      </div>
    </>
  );
};

export default About;

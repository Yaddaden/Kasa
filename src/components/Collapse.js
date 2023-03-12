import React, { useState } from "react";
import flecheUp from "../assets/fleche-up.png";
import flecheDn from "../assets/flecheDn.png";
import "../styles/Collapse.css";

const Collapse = ({ title, content }) => {
  const [text, setText] = useState(false);

  const display = () => {
    setText(!text);
  };
  return (
    <>
      <div className="barCollaps">
        <div className="titleCollaps-fleche" onClick={display}>
          <h1 className="titleCollaps">{title}</h1>
          <img src={!text ? flecheUp : flecheDn} alt="fermer" />
        </div>
        {text && <p className="textCollaps">{content}</p>}
      </div>
    </>
  );
};

export default Collapse;

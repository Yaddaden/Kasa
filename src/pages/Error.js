import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

const Error = () => {
  document.title = "kasa-error404";
  return (
    <div className="error">
      <span className="error404">404</span>

      <h1 className="titleError">
        <span>Oups! La page que</span>&nbsp;
        <span>vous demandez n'existe pas.</span>
      </h1>
      <Link className="backToHome" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Error;

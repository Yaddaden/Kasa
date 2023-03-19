import React from "react";
import "../styles/Profile.css";

//Création du profil du propriétaire
const Profile = ({ host }) => {
  return (
    <div className="host">
      <p className="name">{host.name}</p>

      <img className="profilePhoto" src={host.picture} alt="profil" />
    </div>
  );
};

export default Profile;

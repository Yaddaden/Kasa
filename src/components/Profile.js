import React from "react";
import "../styles/Profile.css";

const Profile = ({ host }) => {
  return (
    <div className="host">
      <p className="name">{host.name}</p>

      <img className="profilePhoto" src={host.picture} alt="profil" />
    </div>
  );
};

export default Profile;

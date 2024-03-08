/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import Adresse from "../components/DetailsPersonalAndAdrees/Adresse";
import DetailsPersonal from "../components/DetailsPersonalAndAdrees/DetailsPersonal";

function CreerProfil() {
  const [addAdresseVisible, setAddAdresseVisible] = useState(false);

  const toggleAddAdresse = () => {
    setAddAdresseVisible(!addAdresseVisible);
  };

  return (
    <div style={{ marginLeft: "50px" }}>
      <h1>Modifier ton profil</h1>
      <DetailsPersonal />
      <button onClick={toggleAddAdresse} style={{ fontSize: "20px" }}>
        Ajoute ton adresse +
      </button>
      {addAdresseVisible ? <Adresse /> : null}
    </div>
  );
}

export default CreerProfil;

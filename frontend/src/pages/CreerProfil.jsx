/* eslint-disable react/button-has-type */
import Adresse from "../components/DetailsPersonalAndAdrees/Adresse";
import DetailsPersonal from "../components/DetailsPersonalAndAdrees/DetailsPersonal";

function CreerProfil() {
  return (
    <div style={{ marginLeft: "50px" }}>
      <h1>Créé ton profil</h1>
      <DetailsPersonal />
      <Adresse />
      <button className="button_creer_profil">Créer</button>
    </div>
  );
}

export default CreerProfil;

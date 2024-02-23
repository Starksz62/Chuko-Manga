/* eslint-disable react/button-has-type */
import DetailsPersonal from "../components/DetailsPersonalAndAdrees/DetailsPersonal";

function CreerProfil() {
  return (
    <div>
      <h1>Créé ton profil</h1>
      <DetailsPersonal />
      <button className="orange_button">CREER</button>
    </div>
  );
}

export default CreerProfil;

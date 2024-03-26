/* eslint-disable import/order */
import ButtonProfilUser from "../components/ButtonProfilUser";
import OngletProfil from "../components/OngletProfil";
import ProfilHead from "../components/ProfilHead";

import "./ProfilUser.css";

function ProfilUser() {
  let id;

  try {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const authObj = JSON.parse(storedAuth);
      id = authObj.user.id;
      console.info(id);
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de l'id utilisateur depuis localStorage",
      error
    );
  }

  return (
    <div className="containerProfilUser">
      <ProfilHead id={id}>
        <ButtonProfilUser id={id} />
      </ProfilHead>
      <OngletProfil />
    </div>
  );
}

export default ProfilUser;

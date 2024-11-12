/* eslint-disable import/order */
import { useParams } from "react-router-dom";
import ButtonProfilUser from "../components/ButtonProfilUser";
import OngletProfil from "../components/OngletProfil";
import ProfilHead from "../components/ProfilHead";

import "./ProfilUser.css";

function ProfilUser() {
  const { id } = useParams();
  return (
    <div className="containerProfilUser container_limit">
      <ProfilHead id={id}>
        <ButtonProfilUser id={id} />
      </ProfilHead>
      <OngletProfil />
    </div>
  );
}

export default ProfilUser;

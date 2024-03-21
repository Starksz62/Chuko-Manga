/* eslint-disable import/order */
import ButtonProfilUser from "../components/ButtonProfilUser";
import OngletProfil from "../components/OngletProfil";
import ProfilHead from "../components/ProfilHead";
import { useParams } from "react-router-dom";

function ProfilUser() {
  const { id } = useParams();
  return (
    <div>
      <ProfilHead>
        <ButtonProfilUser id={id} />
      </ProfilHead>
      <OngletProfil />
    </div>
  );
}

export default ProfilUser;

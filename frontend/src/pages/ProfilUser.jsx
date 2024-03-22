import OngletProfil from "../components/OngletProfil";

function ProfilUser() {
  let userId;

  try {
    // Récupérer la chaîne auth du localStorage
    const storedAuth = localStorage.getItem("auth");

    if (storedAuth) {
      const authObj = JSON.parse(storedAuth);

      userId = authObj.user.id;

      console.info(userId);
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de l'id utilisateur depuis localStorage",
      error
    );
  }
  return (
    <div>
      <OngletProfil id={userId} />
    </div>
  );
}

export default ProfilUser;

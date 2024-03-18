/* eslint-disable no-plusplus */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProfilHead() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    pseudo: "",
    country: "",
    picture: "",
    phone: "",
    email: "",
    rating: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3310/api/user-profil/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        return res.json();
      })
      .then((data) => {
        console.info("Mes donnees user asdasdasd :", data);

        setFormData(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);
  // function renderStars(averageRating) {
  //   const fullStars = Math.floor(averageRating); // Nombre d'étoiles pleines
  //   const decimalPart = averageRating - fullStars; // Partie décimale de la note
  //   let partialStar = ""; // Classe pour l'étoile partielle
  //   // Déterminer la classe de l'étoile partielle en fonction de la partie décimale
  //   if (decimalPart >= 0.75) {
  //     partialStar = "half-star";
  //   } else if (decimalPart >= 0.25) {
  //     partialStar = "half-star";
  //   } else {
  //     partialStar = "empty-star";
  //   }
  //   // Création des étoiles en fonction du nombre d'étoiles pleines et de l'étoile partielle
  //   const stars = [];
  //   for (let i = 0; i < 5; i += 1) {
  //     if (i < fullStars) {
  //       stars.push(
  //         <div key={i} className="star full-star">
  //           ★
  //         </div>
  //       );
  //     } else if (i === fullStars && partialStar === "half-star") {
  //       stars.push(
  //         <div key={i} className={`star ${partialStar}`}>
  //           ★
  //         </div>
  //       );
  //     } else {
  //       stars.push(
  //         <div key={i} className="star empty-star">
  //           ★
  //         </div>
  //       );
  //     }
  //   }
  //   return <div className="starcontainer">{stars}</div>;
  // }

  // const averageRating =
  //   evaluations.reduce(
  //     (total, evaluation) => total + parseFloat(evaluation.average_rating),
  //     0
  //   ) / evaluations.length;

  return (
    <div>
      <div className="picture_user_profil">
        <img
          className="picture_user_profil_img"
          src={formData.picture}
          alt="picture_user"
        />
      </div>
      <div className="user_profil_info">
        <h1 className="user_profil_info_name">{formData.pseudo}</h1>
        <h1 className="user_profil_info_country">{formData.country}</h1>
        <div className="user_profil_info_verification">
          <p className="">Information verifié:</p>
          <p className="user-profil-mail">{formData.email}</p>
          <p className="user-profil-phone">{formData.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default ProfilHead;

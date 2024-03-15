/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import "./ProfilHead.css";
// import "./DetailsPersonal.css";

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
        console.info("Mes donnees user :", data);
        setFormData(data);
        // console.log(formData);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  return (
    <div className="input_label_profil">
      <label htmlFor="pseudo" className="label_profil">
        Ton pseudo:
      </label>
      <span className="pseudo_value">{formData.pseudo}</span>
    </div>
  );
}

export default ProfilHead;

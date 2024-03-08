/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import "./DetailsPersonal.css";
// import axios from "axios";

// const url = "http://localhost:3310/api/users/adresse";

function Adresse() {
  const [formData, setFormData] = useState({
    country: "",
    zip_code: "",
    number_street: "",
    name_adress: "",
  });
  //     const handleSubmit = (e) => {
  //       e.preventDefault();

  //       const data = {
  //         country: formData.country,
  //         zip_code: formData.zip_code,
  //         number_street: formData.number_street,
  // name_adress: formData.name_adress,
  //       };

  //   axios
  //     .post(url, data)
  //     .then((response) => {
  //       console.warn("Success:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error.response.data);
  //     });
  //     };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="ContainerCreation">
      <div className="input_label_profil">
        <label htmlFor="country" className="label_profil">
          Pays:
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="input_profil"
          placeholder=" "
          required
        />
      </div>
      <div className="input_label_profil">
        <label htmlFor="zip_code" className="label_profil">
          Code postal:
        </label>
        <input
          type="text"
          id="zip_code"
          name="zip_code"
          value={formData.zip_code}
          onChange={handleChange}
          className="input_profil"
          required
        />
      </div>
      <div className="input_label_profil">
        <label htmlFor="number_street" className="label_profil">
          Rue:
        </label>
        <input
          type="text"
          id="number_street"
          name="number_street"
          value={formData.number_street}
          onChange={handleChange}
          className="input_profil"
          required
        />
      </div>
      <div className="input_label_profil">
        <label htmlFor="name_adress" className="label_profil">
          Nom de l'adresse:
        </label>
        <input
          type="text"
          id="name_adress"
          name="name_adress"
          value={formData.name_adress}
          onChange={handleChange}
          className="input_profil"
          required
        />
      </div>
      <button className="button_modifier">Modifier</button>
    </form>
  );
}

export default Adresse;

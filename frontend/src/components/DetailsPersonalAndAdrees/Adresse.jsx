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
    adresse: "",
  });
  //     const handleSubmit = (e) => {
  //       e.preventDefault();

  //       const data = {
  //         country: formData.country,
  //         zip_code: formData.zip_code,
  //         city: formData.city,
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
        <label htmlFor="adresse" className="label_profil">
          Adresse:
        </label>
        <input
          type="text"
          id="adresse"
          name="adresse"
          value={formData.adresse}
          onChange={handleChange}
          className="input_profil"
          required
        />
      </div>
    </form>
  );
}

export default Adresse;

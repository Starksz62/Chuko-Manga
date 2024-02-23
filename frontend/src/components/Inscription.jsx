/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import "./Inscription.css";

const url = "http://localhost:3310/api/users";

function Inscription() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password,
    };

    // Handle response and error from axios
    axios
      .post(url, data)
      .then((response) => {
        console.warn("Success:", response.data); // Log the response data
        // Handle successful submission (e.g., redirect to success page)
      })
      .catch((error) => {
        console.error("Error:", error.response.data); // Log the error details
        // Handle submission errors (e.g., display error message to user)
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="inscription">
      <div className="form">
        <h1>Inscription</h1>
        <form className="inForm" onSubmit={handleSubmit}>
          <label htmlFor="firstname"></label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="transparent-input"
            placeholder="Entrez votre prénom"
            required
          />
          <br />
          <label htmlFor="lastname"></label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="transparent-input"
            placeholder="Entrez votre nom"
            required
          />
          <br />
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="transparent-input"
            placeholder="Entrez votre email"
            required
          />
          <br />
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="transparent-input"
            placeholder="Entrez votre mot de passe"
            required
          />
          <br />
          <br />
          <button className="Button-type" type="submit">
            Continuer
          </button>
          <a
            href="youtube.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "orange" }}
          >
            <p>Besoin d'aide ?</p>
          </a>
        </form>
      </div>
      <img className="imgIns" src="src/assets/image-inscription.png" alt="" />
    </div>
  );
}

export default Inscription;

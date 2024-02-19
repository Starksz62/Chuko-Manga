import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

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
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="lastname">Nom</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default Inscription;

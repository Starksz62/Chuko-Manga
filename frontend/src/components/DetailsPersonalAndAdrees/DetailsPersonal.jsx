/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import "./DetailsPersonal.css";
// import axios from "axios";

// const url = "http://localhost:3310/api/users";

function DetailsPersonal() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    picture: "",
  });
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const data = {
  //       firstname: formData.firstname,
  //       lastname: formData.lastname,
  //       email: formData.email,
  //       phone: formData.phone,
  //       picture: formData.picture,
  //     };

  // axios
  //   .post(url, data)
  //   .then((response) => {
  //     console.warn("Success:", response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error.response.data);
  //   });
  //   };

  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const handleEmailVisibilityToggle = () => {
    setIsEmailVisible(!isEmailVisible);
  };
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  const handlePhoneVisibilityToggle = () => {
    setIsPhoneVisible(!isPhoneVisible);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="ContainerCreation">
      {/* onSubmit={handleSubmit} */}
      <label htmlFor="picture">Choisi ta photo</label>
      {/* Круг с крестиком для добавления фото */}
      {/* Замените следующую строку на ваш компонент для загрузки фото */}
      <input
        type="file"
        accept="image/*"
        id="picture"
        name="picture"
        value={formData.picture}
        onChange={handleChange}
        className="input_profil"
      />
      <label htmlFor="firstname" className="label_profil">
        ton prénom:
      </label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={formData.firstname}
        onChange={handleChange}
        className="input_profil"
        placeholder="Entre ton prénom"
        required
      />
      <label htmlFor="lastname" className="label_profil">
        ton nom:
      </label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={formData.lastname}
        onChange={handleChange}
        className="input_profil"
        placeholder="Entre ton nom"
        required
      />
      <label htmlFor="email" className="label_profil">
        email:
      </label>
      <input
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="input_profil"
        placeholder="Entre ton email"
        required
      />
      {/* Квадратик и галочка для видимости email */}
      <div onClick={handleEmailVisibilityToggle} className="checkbox_container">
        {isEmailVisible ? "✔️" : "□"}
        <p>Rendre visible sur le profil</p>
      </div>
      <label htmlFor="phone" className="label_profil">
        Telephone:
      </label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="input_profil"
        placeholder="Entre ton email"
        required
      />
      {/* Квадратик и галочка для видимости email */}
      <div onClick={handlePhoneVisibilityToggle} className="checkbox_container">
        {isPhoneVisible ? "✔️" : "□"}
        <p>Rendre visible sur le profil</p>
      </div>
    </form>
  );
}

export default DetailsPersonal;

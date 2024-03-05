/* eslint-disable react/button-has-type */
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
    picture: null,
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
      <div className="input_label_profil">
        <label htmlFor="picture" className="label_profil">
          Choisi ta photo:
        </label>
        <input
          type="file"
          accept="image/*"
          id="picture_input"
          name="picture"
          value={formData.picture}
          onChange={handleChange}
          className="input_profil"
          style={{ display: "none" }}
        />
        <button
          className="custom_button"
          onClick={() => document.getElementById("picture_input").click()}
        >
          {formData.picture ? (
            <img
              src={formData.picture}
              alt="Chosen"
              style={{ borderRadius: "50%", width: "100%", height: "100%" }}
            />
          ) : (
            "+"
          )}
        </button>
      </div>
      <div className="input_label_profil">
        <label htmlFor="firstname" className="label_profil">
          Ton prénom:
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="input_profil"
          placeholder=" "
          required
        />
      </div>
      <div className="input_label_profil">
        <label htmlFor="lastname" className="label_profil">
          Ton nom:
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="input_profil"
          required
        />
      </div>
      <div className="input_label_profil">
        <label htmlFor="email" className="label_profil">
          Email:
        </label>
        <input
          type="text"
          id="email_input"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input_profil"
          required
        />
      </div>
      <div onClick={handleEmailVisibilityToggle} className="checkbox_container">
        <div className="checkbox">{isEmailVisible ? "✓" : ""}</div>
        <p>Rendre visible sur le profil</p>
      </div>
      {/* Квадратик и галочка для видимости email */}
      <div className="input_label_profil">
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
          placeholder=""
          required
        />
      </div>
      {/* Квадратик и галочка для видимости email */}
      <div onClick={handlePhoneVisibilityToggle} className="checkbox_container">
        <div className="checkbox">{isPhoneVisible ? "✓" : ""}</div>
        <p>Rendre visible sur le profil</p>
      </div>
    </form>
  );
}

export default DetailsPersonal;

/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailsPersonal.css";
import axios from "axios";

function DetailsPersonal() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    pseudo: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    picture: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3310/api/user/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.info("Mes donnees user :", data);
        setFormData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target.result;
      setFormData({
        ...formData,
        picture: imageDataUrl,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleUpdateUser = () => {
    axios
      .put(`http://localhost:3310/api/user/${id}`, formData)
      .then((response) => {
        console.warn("Success updating user:", response.data);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };
  // const [files, setFiles] = useState();
  // const handleUpdateUser = () => {
  //   formData.append("file", files);
  //   axios
  //     .put(`http://localhost:3310/api/user/${id}`, formData)
  //     .then((response) => {
  //       console.warn("Success updating user:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error updating user:", error);
  //     });
  // };

  return (
    <form className="ContainerCreation" onSubmit={handleUpdateUser}>
      <div>
        <label htmlFor="picture" className="label_profil">
          Choisi ta photo:
        </label>
        <input
          type="file"
          id="picture_input"
          name="picture"
          accept="image/*"
          onChange={handleFileChange}
        />
        {formData.picture && (
          <img
            src={formData.picture}
            alt="Selected"
            style={{ maxWidth: "100px" }}
          />
        )}
      </div>

      {/* <div className="input_label_profil">
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
      </div> */}
      <div className="input_label_profil">
        <label htmlFor="pseudo" className="label_profil">
          Ton pseudo:
        </label>
        <input
          type="text"
          id="pseudo"
          name="pseudo"
          value={formData.pseudo}
          onChange={handleChange}
          className="input_profil"
          placeholder=" "
        />
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
        />
      </div>
      <div onClick={handleEmailVisibilityToggle} className="checkbox_container">
        <div className="checkbox">{isEmailVisible ? "✓" : ""}</div>
        <p>Rendre visible sur le profil</p>
      </div>
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
      <div onClick={handlePhoneVisibilityToggle} className="checkbox_container">
        <div className="checkbox">{isPhoneVisible ? "✓" : ""}</div>
        <p>Rendre visible sur le profil</p>
      </div>

      <button className="button_modifier">Modifier</button>
    </form>
  );
}

export default DetailsPersonal;
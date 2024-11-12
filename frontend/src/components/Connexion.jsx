/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef, useState, useContext } from "react";

import UserContext from "../context/UserContext";

import "./Connexion.css";

function Connexion({ handleContentModal, handleClickOpen }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const { setAuth } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );

      if (response.status === 200) {
        const auth = await response.json();

        setAuth(auth);
        localStorage.setItem("auth", JSON.stringify(auth));
        handleClickOpen();
      } else {
        setErrorMessage("Email ou mot de passe incorrect.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  // Gestionnaire évènement Email
  const [inputEmail, setInputEmail] = useState("");

  const handleChangeInputEmail = (event) => {
    const targetValue = event.target.value;
    setInputEmail(targetValue);
  };

  // Gestionnaire évènement Password
  const [inputPassword, setInputPassword] = useState("");

  const handleChangeInputPassword = (event) => {
    const targetValue = event.target.value;
    setInputPassword(targetValue);
  };

  // Rendu du composant formulaire
  return (
    <div className="connexion-form">
      <h1>Connexion</h1>
      <form className="inForm" onSubmit={handleSubmit}>
        {/* Champ pour l'email */}
        <input
          ref={emailRef}
          type="email"
          id="email"
          placeholder="Entrez votre email"
          value={inputEmail}
          onChange={handleChangeInputEmail}
        />
        {/* Champ pour le mot de passe */}
        <input
          type="password"
          id="password"
          placeholder="Entrez votre mot de passe"
          ref={passwordRef}
          value={inputPassword}
          onChange={handleChangeInputPassword}
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button className="Button-type" type="submit">
          Continuer
        </button>
      </form>
      <div className="text-connexion">
        <p className="to-click">Mot de passe oublié ?</p>
        <p className="text-info">
          Tu n'as pas de compte ?{" "}
          <span className="to-click" onClick={handleContentModal}>
            Inscris-toi
          </span>
        </p>
      </div>
    </div>
  );
}

export default Connexion;

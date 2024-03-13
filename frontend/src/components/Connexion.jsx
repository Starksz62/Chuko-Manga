/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef, useState, useContext } from "react";

import UserContext from "../context/UserContext";

import "./Connexion.css";

function Connexion({ handleContentModal, handleClickOpen }) {
  // Références pour les champs email et mot de passe
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setUser } = useContext(UserContext);

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 200) {
        const user = await response.json();

        setUser(user);

        handleClickOpen();
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  // Gestionnaire évènement Email
  const [inputEmail, setInputEmail] = useState("Entrez votre email");

  const handleChangeInputEmail = (event) => {
    const targetValue = event.target.value;
    setInputEmail(targetValue);
  };

  // Gestionnaire évènement Password
  const [inputPassword, setInputPassword] = useState("Mot de passe");

  const handleChangeInputPassword = (event) => {
    const targetValue = event.target.value;
    setInputPassword(targetValue);
  };

  // Rendu du composant formulaire
  return (
    <div className="form">
      <h1>Connexion</h1>
      <form className="inForm" onSubmit={handleSubmit}>
        {/* Champ pour l'email */}
        <input
          ref={emailRef}
          type="email"
          id="email"
          value={inputEmail}
          onChange={handleChangeInputEmail}
        />
        <br />
        {/* Champ pour le mot de passe */}
        <input
          type="password"
          id="password"
          ref={passwordRef}
          value={inputPassword}
          onChange={handleChangeInputPassword}
        />
        {/* Bouton de soumission du formulaire */}
        <button className="Button-type" type="submit">
          Continuer
        </button>
      </form>
      <div className="text-connexion">
        <p
          style={{
            color: "orange",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Mot de passe oublié ?
        </p>
        <p style={{ color: "grey" }}>
          Tu n'as pas de compte ?{" "}
          <span
            style={{
              color: "orange",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={handleContentModal}
          >
            Inscris-toi
          </span>
        </p>
      </div>
    </div>
  );
}

export default Connexion;

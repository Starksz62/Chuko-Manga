import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

import ConnexionModal from "./ConnexionModal";

import "./HeaderNav.css";
import SearchBar from "./SearchBar";

function HeaderNav() {
  const { auth, setAuth } = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="navbar-header">
      <SearchBar />
      <div className="buttonHeader-container">
        {auth == null ? (
          <button
            className="incription-login-button"
            type="button"
            onClick={handleClickOpen}
          >
            S'inscrire | Se connecter
          </button>
        ) : (
          <button
            className="incription-login-button"
            type="button"
            onClick={() => {
              setAuth(null);
            }}
          >
            Se déconnecter
          </button>
        )}
        {open && <ConnexionModal handleClickOpen={handleClickOpen} />}
        <Link to="/new-advert">
          <button className="vendre-button" type="button">
            Vends tes Mangas
          </button>
        </Link>
      </div>
    </header>
  );
}

export default HeaderNav;

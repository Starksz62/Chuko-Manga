import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

import ConnexionModal from "./ConnexionModal";

import "./HeaderNav.css";
import SearchBar from "./SearchBar";
import HeaderNavMobile from "./HeaderNavMobile";

function HeaderNav() {
  const { auth, setAuth } = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("auth");
    setAuth(null);
  };

  return (
    <>
      <header className="navbar-header-desktop container_limit">
        <container className="header-left-container">
          <Link to="/explore">
            <button type="button" className="explore-btn">
              Explorer
            </button>
          </Link>
          <SearchBar />
        </container>

        <div className="buttonHeader-container">
          {!auth?.token ? (
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
              onClick={handleLogout}
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

      <HeaderNavMobile />
    </>
  );
}

export default HeaderNav;

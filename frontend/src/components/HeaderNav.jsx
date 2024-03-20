import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

import ConnexionModal from "./ConnexionModal";

import "./HeaderNav.css";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";

function HeaderNav() {
  const { auth, setAuth } = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="navbar-header-desktop container_limit">
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
      <header className="navbar-header-mobile container_limit">
        <container className="mobile-header">
          <div className="mobile-logo">
            <Link to="/">
              <div className="sidebar-logo">
                <img src={logo} alt="Logo" />
              </div>
            </Link>
          </div>

          <button type="button" className="header-menu-btn">
            Menu
          </button>

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
        </container>
        <SearchBar />
      </header>
    </>
  );
}

export default HeaderNav;

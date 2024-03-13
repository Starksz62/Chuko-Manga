import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./HeaderNav.css";

function HeaderNav() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleKeyPress = async (e) => {
    // contrsuire le lien /explore/'${searchQuery}', et faire un redirection (use navigate) vers ce lien
    if (e.key === "Enter") {
      navigate(`/explore/${searchQuery}`, { replace: true });
    }
  };
  return (
    <header className="navbar-header">
      <div className="searchbar-container">
        <input
          className="searchbar"
          type="text"
          placeholder="Recherche"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoComplete="on"
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="buttonHeader-container">
        <button className="incription-login-button" type="button">
          S'incrire | Se connecter
        </button>
        <button className="vendre-button" type="button">
          Vends tes Mangas
        </button>
      </div>
    </header>
  );
}

export default HeaderNav;
